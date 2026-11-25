"""Build the public, sanitized payload for showthetape.com.

Reads the trading repo (read-only) and the Alpaca paper account, and writes publisher/out/payload.json plus
publisher/out/load.sql. Only allow-listed, strategy-safe fields leave this script:
  - open positions: ticker, team, plain-English structure, direction, open time, unrealized %. NO contract.
  - closed trades: full legs and prices (revealed after close), P&L after the cost haircut.
  - rejected setups: ticker, team, a vague reason category. NO thresholds or plan numbers.
The narrative fields (why_text, outcome_text, daily recap) are left for the daily Claude run to write.

Usage: python3 publisher/build_payload.py --repo /home/user/option-autotrader
"""
import argparse
import datetime as dt
import json
import os
import urllib.request
from zoneinfo import ZoneInfo

ET = ZoneInfo("America/New_York")
HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "out")
PAPER = "https://paper-api.alpaca.markets/v2"
DATA = "https://data.alpaca.markets/v2"
START = dt.date(2026, 11, 20)  # first trade day of the experiment
START_EQUITY = 100000.0

STRUCTURES = {
    "call_vertical": "Defined-risk call spread",
    "put_debit_vertical": "Defined-risk put spread",
    "call_debit_vertical": "Defined-risk call spread",
    "put_vertical": "Defined-risk put spread",
    "put_vertical_0dte": "Same-day put spread",
    "call_vertical_0dte": "Same-day call spread",
    "debit_put_spread": "Defined-risk put spread",
    "debit_call_spread": "Defined-risk call spread",
    "iron_condor": "Iron condor",
    "credit_put_spread": "Put credit spread",
    "credit_call_spread": "Call credit spread",
    "butterfly": "Butterfly",
    "calendar": "Calendar spread",
    "call_calendar": "Calendar spread",
    "put_calendar": "Calendar spread",
    "long_call": "Long call",
    "long_put": "Long put",
}
# Rejection reasons are published only as broad categories, never as rule names or thresholds.
REJECT_CATEGORIES = [
    (("spread", "open_interest", "liquid"), "Options too thin or too expensive to trade"),
    (("event", "shock", "market", "afternoon"), "Market conditions said wait"),
    (("reward", "target", "stop", "noise", "premium"), "Risk vs reward didn't add up"),
    (("iv_", "vol"), "Options priced too rich"),
    (("overextended", "chase"), "Move already stretched"),
    (("dte", "delta", "size", "structure"), "No contract fit the plan"),
]
EXIT_HINTS = [
    ("worthless", "Expired worthless (a tiny test position)"),
    ("thesis_failed", "The trade idea stopped working, so the agents cut it"),
    ("invalidation", "The setup broke, so the agents exited"),
    ("exit by", "Closed on schedule before the bell"),
    ("pin", "Price pinned near the strike; exited early"),
    ("target", "Hit the profit target"),
    ("stop", "Stopped out"),
    ("time", "Time stop: the move didn't come"),
    ("trail", "Trailing stop locked in the gain"),
    ("expir", "Held to expiry"),
]
TEAMS = {
    "desk": ("Trading Desk", "Runs the day, checks every number twice, and has the final say. The risk officer can veto anything."),
    "momentum": ("Momentum Team", "Hunts short, sharp moves that last hours to a few days."),
    "spread": ("Spread Team", "Sells defined-risk premium when the market is calm."),
    "rnd": ("R&D Lab", "Tests new ideas with small size before any team may use them."),
}


def get(url):
    req = urllib.request.Request(url, headers={"APCA-API-KEY-ID": "x", "APCA-API-SECRET-KEY": "x"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.load(r)


def label(table, key, default):
    key = (key or "").lower()
    for hints, text in table:
        if any(h in key for h in (hints if isinstance(hints, tuple) else (hints,))):
            return text
    return default


def et(ts):
    return dt.datetime.strptime(ts, "%Y-%m-%d %H:%M").replace(tzinfo=ET).isoformat() if ts else None


def net_pnl(t):
    # Same rule as the trading repo (tools/teamgate.py): realized P&L minus the haircut on both sides.
    return round((t.get("realized_pnl") or 0) - 2 * (t.get("haircut_per_side_usd") or 0), 2)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--repo", default="/home/user/option-autotrader")
    a = ap.parse_args()
    led = json.load(open(os.path.join(a.repo, "state", "ledger.json")))
    trades = [t for t in led["trades"] if not t.get("voided")]

    closed, open_pos = [], []
    for t in trades:
        label_ = STRUCTURES.get(t.get("structure"), "Options position")
        # Every leg expiring on the open date = a same-day (0DTE) trade; the OCC symbol carries YYMMDD.
        exps = {l["occ"][len(t["symbol"]):len(t["symbol"]) + 6] for l in t.get("legs") or []}
        if t.get("opened") and exps == {t["opened"][2:10].replace("-", "")}:
            label_ = "Same-day " + label_.replace("Defined-risk ", "").lower().replace("same-day ", "")
        base = {"id": t["trade_id"], "ticker": t["symbol"], "team_id": t.get("team") or "desk",
                "structure_label": label_,
                "direction": {"bull": "Bullish", "bear": "Bearish"}.get(t.get("direction"), "Neutral"),
                "opened_at": et(t.get("opened"))}
        if t.get("closed"):
            # % of the most the trade could lose including the cost haircut, so tiny probes can't show -300%.
            risk = ((t.get("max_loss_usd") or 0) + 2 * (t.get("haircut_per_side_usd") or 0)) or None
            pnl = net_pnl(t)
            closed.append({**base, "closed_at": et(t["closed"]), "pnl_net": pnl,
                           "pnl_pct": round(pnl / risk * 100, 1) if risk else None,
                           "exit_reason_label": label(EXIT_HINTS, t.get("exit_reason"), "Closed by the agents"),
                           "legs": [{"contract": l["occ"], "side": l["side"], "ratio": l.get("ratio", 1)} for l in t.get("legs") or []],
                           "entry_price": abs(t["entry_net"]) if t.get("entry_net") is not None else None,
                           "exit_price": abs(t["exit_net"]) if t.get("exit_net") is not None else None,
                           "why_text": None, "outcome_text": None})
        else:
            open_pos.append({**base, "unrealized_pct": None})

    # Unrealized % for open positions, aggregated per trade from Alpaca positions (contracts never leave).
    try:
        positions = {p["symbol"]: p for p in get(PAPER + "/positions")}
    except Exception:
        positions = {}
    for o in open_pos:
        t = next(x for x in trades if x["trade_id"] == o["id"])
        upl = sum(float(positions[l["occ"]]["unrealized_pl"]) for l in t.get("legs") or [] if l["occ"] in positions)
        risk = t.get("max_loss_usd")
        o["unrealized_pct"] = round(upl / risk * 100, 1) if risk else None

    hist = get(PAPER + "/account/portfolio/history?period=3M&timeframe=1D")
    eq = {dt.datetime.fromtimestamp(ts, ET).date(): e for ts, e in zip(hist["timestamp"], hist["equity"]) if e}
    # The daily history only gains today's row later in the evening; use the live equity for today.
    today = dt.datetime.now(ET).date()
    if today not in eq and today.weekday() < 5 and dt.datetime.now(ET).hour >= 16:
        eq[today] = float(get(PAPER + "/account")["equity"])
    days = sorted(d for d in eq if d >= START - dt.timedelta(days=1))
    bars = get(f"{DATA}/stocks/SPY/bars?timeframe=1Day&start={days[0]}&feed=sip&limit=1000").get("bars", [])
    spy = {dt.date.fromisoformat(b["t"][:10]): b["c"] for b in bars}
    spy0 = spy.get(days[0]) or next(iter(spy.values()), None)
    # Account value shown is the broker value minus the cost haircut of trades closed so far, so it agrees with
    # the after-cost P&L everywhere else on the site.
    cuts = [(dt.date.fromisoformat(t["closed"][:10]), 2 * (t.get("haircut_per_side_usd") or 0)) for t in trades if t.get("closed")]
    snaps, peak, mdd = [], START_EQUITY, 0.0
    for d in days:
        v = round(eq[d] - sum(c for cd, c in cuts if cd <= d), 2)
        peak = max(peak, v)
        mdd = min(mdd, (v - peak) / peak * 100)
        s = spy.get(d)
        snaps.append({"date": d.isoformat(), "account_value": v,
                      "spy_close_rebased": round(START_EQUITY * s / spy0, 2) if s and spy0 else None})

    acct = snaps[-1]["account_value"]
    wins = [c for c in closed if c["pnl_net"] > 0]
    spy_ret = None
    if snaps and snaps[-1]["spy_close_rebased"]:
        spy_ret = round((snaps[-1]["spy_close_rebased"] / START_EQUITY - 1) * 100, 2)

    teams = []
    for i, (tid, (name, mission)) in enumerate(TEAMS.items()):
        mine = [c for c in closed if c["team_id"] == tid]
        teams.append({"id": tid, "name": name, "mission": mission, "sort": i,
                      "pnl_net": round(sum(c["pnl_net"] for c in mine), 2), "trades": len(mine),
                      "win_rate": round(len([c for c in mine if c["pnl_net"] > 0]) / len(mine) * 100) if mine else None})

    passed = []
    for i, line in enumerate(open(os.path.join(a.repo, "state", "shadow.jsonl"))):
        s = json.loads(line)
        passed.append({"id": f"P{i}", "date": s["time_et"][:10], "ticker": s["plan"]["symbol"],
                       "team_id": "desk", "reason_label": label(REJECT_CATEGORIES, " ".join(s.get("failed") or []), "Didn't pass the checks")})

    meta = {"last_updated": dt.datetime.now(ET).isoformat(), "experiment_start": START.isoformat(),
            "start_equity": START_EQUITY, "account_value": acct,
            "total_return_pct": round((acct / START_EQUITY - 1) * 100, 2), "spy_return_pct": spy_ret,
            "realized_pnl_net": round(sum(c["pnl_net"] for c in closed), 2),
            "win_rate": round(len(wins) / len(closed) * 100) if closed else None,
            "closed_trades": len(closed), "max_drawdown_pct": round(mdd, 2), "passed_on_count": len(passed)}

    os.makedirs(OUT, exist_ok=True)
    payload = {"site_meta": meta, "daily_snapshots": snaps, "teams": teams, "open_positions": open_pos,
               "closed_trades": closed, "passed_on": passed}
    json.dump(payload, open(os.path.join(OUT, "payload.json"), "w"), indent=1)
    print(json.dumps(meta, indent=1))


if __name__ == "__main__":
    main()
