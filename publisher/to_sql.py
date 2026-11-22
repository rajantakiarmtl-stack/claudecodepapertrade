"""Turn publisher/out/payload.json (+ optional publisher/out/narrative.json) into one SQL upsert script.

narrative.json (written by the daily Claude run) looks like:
  {"trades": {"<trade_id>": {"why_text": "...", "outcome_text": "..."}},
   "recap": {"date": "2026-11-20", "headline": "...", "body": "...", "mood": "..."},
   "teams": {"<team_id>": {"activity_line": "...", "agent_count": 6, "roles": ["..."]}}}
Existing narrative text is kept when a new value is missing (COALESCE), so reruns never erase it.
"""
import json
import os

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "out")


def q(v):
    if v is None:
        return "NULL"
    if isinstance(v, bool):
        return "TRUE" if v else "FALSE"
    if isinstance(v, (int, float)):
        return repr(v)
    if isinstance(v, (list, dict)):
        return "'" + json.dumps(v).replace("'", "''") + "'::jsonb"
    return "'" + str(v).replace("'", "''") + "'"


def arr(v):
    return "NULL" if v is None else "ARRAY[" + ",".join(q(x) for x in v) + "]::text[]" if v else "'{}'::text[]"


def upsert(table, rows, key, keep=()):
    if not rows:
        return []
    cols = list(rows[0].keys())
    vals = ",\n".join("(" + ",".join(arr(r[c]) if c == "roles" else q(r[c]) for c in cols) + ")" for r in rows)
    sets = ", ".join(
        f"{c} = COALESCE(EXCLUDED.{c}, {table}.{c})" if c in keep else f"{c} = EXCLUDED.{c}"
        for c in cols if c != key)
    return [f"INSERT INTO {table} ({', '.join(cols)}) VALUES\n{vals}\nON CONFLICT ({key}) DO UPDATE SET {sets};"]


def main():
    p = json.load(open(os.path.join(OUT, "payload.json")))
    npath = os.path.join(OUT, "narrative.json")
    n = json.load(open(npath)) if os.path.exists(npath) else {}
    for t in p["closed_trades"]:
        t.update({k: v for k, v in (n.get("trades", {}).get(t["id"]) or {}).items() if k in ("why_text", "outcome_text")})
    for t in p["teams"]:
        extra = n.get("teams", {}).get(t["id"]) or {}
        t["activity_line"] = extra.get("activity_line")
        t["agent_count"] = extra.get("agent_count")
        t["roles"] = extra.get("roles")

    sql = ["BEGIN;"]
    sql += upsert("site_meta", [{"id": 1, **p["site_meta"]}], "id")
    sql += upsert("daily_snapshots", p["daily_snapshots"], "date")
    sql += upsert("teams", p["teams"], "id", keep=("activity_line", "agent_count", "roles"))
    # Open positions are replaced wholesale so a closed trade disappears from the open list.
    sql.append("DELETE FROM open_positions;")
    sql += upsert("open_positions", p["open_positions"], "id")
    sql += upsert("closed_trades", p["closed_trades"], "id", keep=("why_text", "outcome_text"))
    sql += upsert("passed_on", p["passed_on"], "id")
    if n.get("recap"):
        sql += upsert("daily_recaps", [n["recap"]], "date")
    sql.append("COMMIT;")
    open(os.path.join(OUT, "load.sql"), "w").write("\n".join(sql) + "\n")
    print(f"wrote {os.path.join(OUT, 'load.sql')} ({sum(len(s) for s in sql)} chars)")


if __name__ == "__main__":
    main()
