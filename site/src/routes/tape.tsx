import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";
import { Area, ComposedChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ChevronDown, Lock, Info } from "lucide-react";
import { SiteHeader, SignedValue } from "@/components/site/brand";
import { TickerTape } from "@/components/site/ticker-tape";
import { tapeQuery, type TapeData } from "@/lib/tape-data";
import { hasAccess } from "@/lib/access";
import { daysBetween, etDateTime, etTime, experimentDays, money, pct, shortDate, signedMoney, signedPct } from "@/lib/format";

export const Route = createFileRoute("/tape")({
  staticData: { sitemap: "exclude-subtree" },
  ssr: false,
  head: () => ({
    meta: [
      { title: "The Tape · Show The Tape dashboard" },
      { name: "description", content: "Account value, equity curve, every closed trade, open positions and the daily journal of 33 AI agents." },
      { property: "og:title", content: "The Tape · Show The Tape" },
      { property: "og:description", content: "Every trade, every loss, from a 33-agent AI options paper-trading experiment." },
      { name: "robots", content: "noindex" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: TapePage,
});

function TapePage() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!hasAccess()) navigate({ to: "/", replace: true });
  }, [navigate]);
  const { data, isLoading } = useQuery(tapeQuery);
  const teamName = useMemo(() => new Map((data?.teams ?? []).map((t) => [t.id, t.name ?? t.id])), [data]);
  const tn = (id: string | null) => (id ? teamName.get(id) ?? id : "—");

  return (
    <>
      <SiteHeader>
        <span className="hidden font-num text-xs text-muted-foreground md:inline">
          Updated after close · {etDateTime(data?.meta?.last_updated)}
        </span>
      </SiteHeader>
      <p className="border-b border-border px-5 py-2 text-center font-num text-xs text-muted-foreground md:hidden">
        Updated after close · {etDateTime(data?.meta?.last_updated)}
      </p>
      <TickerTape />
      <main className="mx-auto max-w-6xl space-y-20 px-5 py-12 sm:py-16">
        {isLoading || !data ? (
          <TapeSkeleton />
        ) : (
          <>
            <Scoreboard d={data} />
            <Equity d={data} />
            <Floor d={data} />
            <OpenPositions d={data} tn={tn} />
            <ClosedTrades d={data} tn={tn} />
            <PassedOn d={data} tn={tn} />
            <Journal d={data} />
            <aside className="flex gap-4 rounded-xl border border-amber/30 bg-amber/5 p-6">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-amber" aria-hidden />
              <p className="text-sm leading-relaxed text-foreground">
                <strong className="font-medium text-amber">Honest numbers.</strong> Paper fills are usually better than
                real ones, so every result here already subtracts a trading-cost haircut. Paper trading is simulated: no
                real money is at risk and real results would differ.
              </p>
            </aside>
          </>
        )}
      </main>
    </>
  );
}

function SectionHead({ k, title, sub }: { k: string; title: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="font-num text-xs tracking-[0.18em] text-amber">{k}</p>
        <h2 className="mt-2 font-display text-4xl leading-none sm:text-5xl">{title}</h2>
      </div>
      {sub && <p className="max-w-md text-sm text-muted-foreground sm:text-right">{sub}</p>}
    </div>
  );
}

function Empty({ children }: { children: React.ReactNode }) {
  return (
    <div className="hairline-card flex items-center gap-3 border-dashed p-8 text-muted-foreground">
      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-amber" />
      <p className="font-display text-2xl italic text-foreground/80">{children}</p>
    </div>
  );
}

function Scoreboard({ d }: { d: TapeData }) {
  const m = d.meta;
  const day = experimentDays(d.snapshots, m?.experiment_start).count;
  const cells = [
    { l: "Account value", v: <span className="font-num">{money(m?.account_value ?? m?.start_equity ?? 100000)}</span> },
    {
      l: "Total return",
      v: <SignedValue value={m?.total_return_pct}>{signedPct(m?.total_return_pct)}</SignedValue>,
      s: `S&P 500 ${signedPct(m?.spy_return_pct)}`,
    },
    { l: "Realized P&L · after costs", v: <SignedValue value={m?.realized_pnl_net}>{signedMoney(m?.realized_pnl_net)}</SignedValue> },
    { l: "Win rate", v: <span className="font-num">{pct(m?.win_rate)}</span> },
    { l: "Closed trades", v: <span className="font-num">{m?.closed_trades ?? 0}</span> },
    { l: "Max drawdown", v: <span className="font-num text-loss">{m?.max_drawdown_pct != null ? signedPct(-Math.abs(Number(m.max_drawdown_pct))) : "—"}</span> },
  ];
  return (
    <section aria-labelledby="score">
      <div className="mb-6 flex items-baseline justify-between">
        <h1 id="score" className="font-display text-5xl sm:text-6xl">
          The <em className="text-amber">tape</em>
        </h1>
        <p className="font-num text-sm text-muted-foreground">{day ? `Day ${day} of the experiment` : "Day 1 pending"}</p>
      </div>
      <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border lg:grid-cols-6">
        {cells.map((c) => (
          <div key={c.l} className="bg-card p-5">
            <dt className="text-xs text-muted-foreground">{c.l}</dt>
            <dd className="mt-3 text-2xl sm:text-[1.7rem]">{c.v}</dd>
            {c.s && <dd className="mt-1 font-num text-xs text-muted-foreground">{c.s}</dd>}
          </div>
        ))}
      </dl>
    </section>
  );
}

const RANGES = [
  { k: "1W", days: 7 },
  { k: "1M", days: 31 },
  { k: "ALL", days: Infinity },
] as const;

function Equity({ d }: { d: TapeData }) {
  const [range, setRange] = useState<(typeof RANGES)[number]["k"]>("ALL");
  const days = RANGES.find((r) => r.k === range)!.days;
  const start = d.meta?.experiment_start;
  const tradingDays = experimentDays(d.snapshots, start);
  const dayLabel = (date: string) => {
    if (!start) return shortDate(date).replace(/, \d{4}$/, "");
    const n = tradingDays.byDate.get(date) ?? 0;
    return n < 1 ? "Start" : `Day ${n}`;
  };
  const rows = d.snapshots
    .filter((s) => days === Infinity || daysBetween(s.date + "T00:00:00Z") <= days)
    .map((s) => ({ date: s.date, acct: Number(s.account_value), spy: s.spy_close_rebased != null ? Number(s.spy_close_rebased) : null }));

  return (
    <section aria-labelledby="eq">
      <SectionHead k="EQUITY CURVE" title={<span id="eq">Account vs. <em>S&P 500</em></span>} />
      <div className="hairline-card p-4 sm:p-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-5 text-xs text-muted-foreground">
            <span className="flex items-center gap-2"><span className="h-0.5 w-5 bg-amber" />Paper account</span>
            <span className="flex items-center gap-2"><span className="h-0.5 w-5 bg-muted-foreground" />S&P 500, rebased</span>
          </div>
          <div role="group" aria-label="Chart range" className="flex rounded-lg border border-border p-0.5">
            {RANGES.map((r) => (
              <button
                key={r.k}
                type="button"
                aria-pressed={range === r.k}
                onClick={() => setRange(r.k)}
                className={`rounded-md px-3 py-1 font-num text-xs ${range === r.k ? "bg-amber text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                {r.k}
              </button>
            ))}
          </div>
        </div>
        {rows.length < 2 ? (
          <div className="flex h-64 items-center justify-center text-center">
            <p className="font-display text-2xl italic text-muted-foreground">The curve draws itself after a second close.</p>
          </div>
        ) : (
          <div className="h-72 sm:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={rows} margin={{ top: 8, right: 4, left: 4, bottom: 0 }}>
                <defs>
                  <linearGradient id="acctFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--amber)" stopOpacity={0.25} />
                    <stop offset="100%" stopColor="var(--amber)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="date" tickFormatter={(v) => dayLabel(String(v))} interval={rows.length <= 8 ? 0 : "preserveStartEnd"} padding={{ left: 24, right: 24 }} tick={{ fill: "var(--muted-foreground)", fontSize: 11, fontFamily: "JetBrains Mono" }} axisLine={false} tickLine={false} minTickGap={40} />
                <YAxis domain={["auto", "auto"]} tickFormatter={(v) => `$${Math.round(v / 1000)}k`} tick={{ fill: "var(--muted-foreground)", fontSize: 11, fontFamily: "JetBrains Mono" }} axisLine={false} tickLine={false} width={48} />
                <Tooltip
                  contentStyle={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 10, fontFamily: "JetBrains Mono", fontSize: 12 }}
                  labelStyle={{ color: "var(--muted-foreground)" }}
                  labelFormatter={(v) => `${dayLabel(String(v))} · ${shortDate(String(v))}`}
                  formatter={(v: number, n) => [money(v), n === "acct" ? "Account" : "S&P 500"]}
                />
                <Area type="monotone" dataKey="acct" stroke="var(--amber)" strokeWidth={2.25} fill="url(#acctFill)" dot={{ r: 4, fill: "var(--amber)", stroke: "var(--card)", strokeWidth: 2 }} activeDot={{ r: 5 }} />
                <Line type="monotone" dataKey="spy" stroke="var(--muted-foreground)" strokeWidth={1.5} strokeDasharray="4 4" dot={{ r: 3, fill: "var(--muted-foreground)", stroke: "var(--card)", strokeWidth: 2 }} connectNulls />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </section>
  );
}

function Floor({ d }: { d: TapeData }) {
  const fallback = [
    { id: "desk", name: "Trading Desk", mission: "Orchestration & risk. Final say on every trade." },
    { id: "momentum", name: "Momentum Team", mission: "Rides trends with defined-risk structures." },
    { id: "spread", name: "Spread Team", mission: "Sells and buys spreads around ranges." },
    { id: "rnd", name: "R&D Lab", mission: "Tests new ideas with small size." },
  ];
  const teams = d.teams.length ? d.teams : fallback.map((f) => ({ ...f, agent_count: null, roles: [], pnl_net: null, trades: null, win_rate: null, activity_line: null, sort: 0 }));
  return (
    <section aria-labelledby="floor">
      <SectionHead
        k="THE FLOOR"
        title={<span id="floor">Who's <em>trading</em></span>}
        sub="Two teams compete for the same capital. R&D tests new ideas with small size. The Desk has final say and the risk officer can veto anything."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {teams.map((t) => (
          <article key={t.id} className="hairline-card flex flex-col p-6">
            <div className="flex items-center justify-between">
              <span className="font-num text-xs text-muted-foreground">{`${t.agent_count ?? t.roles?.length ?? 0} agents`}</span>
              <span className="flex items-center gap-1" aria-label="Agents working">
                {[0, 1, 2].map((i) => (
                  <span key={i} className="animate-agent h-1.5 w-1.5 rounded-full bg-amber" style={{ animationDelay: `${i * 0.35}s` }} />
                ))}
              </span>
            </div>
            <h3 className="mt-4 font-display text-3xl leading-none">{t.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{t.mission}</p>
            {t.roles && t.roles.length > 0 && (
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {t.roles.map((r) => (
                  <li key={r} className="rounded-md border border-border bg-background px-2 py-0.5 text-[11px] text-muted-foreground">{r}</li>
                ))}
              </ul>
            )}
            <dl className="mt-auto grid grid-cols-3 gap-2 border-t border-border pt-4 pt-5 text-sm">
              <div><dt className="text-[11px] text-muted-foreground">P&L</dt><dd><SignedValue value={t.pnl_net}>{signedMoney(t.pnl_net)}</SignedValue></dd></div>
              <div><dt className="text-[11px] text-muted-foreground">Trades</dt><dd className="font-num">{t.trades ?? 0}</dd></div>
              <div><dt className="text-[11px] text-muted-foreground">Win</dt><dd className="font-num">{pct(t.win_rate)}</dd></div>
            </dl>
            <p className="mt-4 font-num text-[11px] leading-relaxed text-amber/90">{t.activity_line ?? "Standing by for the open"}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function OpenPositions({ d, tn }: { d: TapeData; tn: (id: string | null) => string }) {
  return (
    <section aria-labelledby="open">
      <SectionHead k="OPEN POSITIONS" title={<span id="open">On the <em>books</em></span>} sub="Exact contracts stay hidden until a position closes." />
      {d.open.length === 0 ? (
        <Empty>No open positions tonight. The agents are flat.</Empty>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {d.open.map((p) => (
            <article key={p.id} className="hairline-card p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-num text-2xl font-medium">{p.ticker}</p>
                  <p className="text-xs text-muted-foreground">{tn(p.team_id)}</p>
                </div>
                <SignedValue value={p.unrealized_pct} className="text-lg">{signedPct(p.unrealized_pct, 1)}</SignedValue>
              </div>
              <p className="mt-4 text-sm">{p.structure_label}</p>
              <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
                <span className={p.direction?.toLowerCase().startsWith("bull") ? "text-gain" : "text-loss"}>
                  {p.direction?.toLowerCase().startsWith("bull") ? "↗ Bullish" : "↘ Bearish"}
                </span>
                <span className="font-num">{daysBetween(p.opened_at)}d held</span>
              </div>
              <span className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-2.5 py-1 text-[11px] text-muted-foreground">
                <Lock className="h-3 w-3" aria-hidden /> Contract revealed when closed
              </span>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

type Leg = { side?: string; ratio?: number; contract?: string; qty?: number; type?: string; strike?: number; expiry?: string; [k: string]: unknown };
function legText(l: Leg | string): string {
  if (typeof l === "string") return l;
  const parts = [l.side?.toUpperCase(), l.ratio ?? l.qty, l.contract, l.expiry, l.strike, l.type].filter((x) => x != null && x !== "");
  return parts.length ? parts.join(" ") : JSON.stringify(l);
}

function ClosedTrades({ d, tn }: { d: TapeData; tn: (id: string | null) => string }) {
  const [openId, setOpenId] = useState<string | null>(null);
  return (
    <section aria-labelledby="closed">
      <SectionHead k="CLOSED TRADES" title={<span id="closed">Every <em>result</em></span>} sub="Newest first. After costs. Tap a trade for the full contract and story." />
      {d.closed.length === 0 ? (
        <Empty>Nothing has closed yet. The first result lands after the bell.</Empty>
      ) : (
        <div className="overflow-hidden rounded-xl border border-border">
          <div className="hidden grid-cols-[7rem_5rem_1fr_1.4fr_6rem_8rem_7rem_2rem] gap-4 border-b border-border bg-card px-5 py-3 text-[11px] uppercase tracking-wider text-muted-foreground lg:grid">
            <span>Date</span><span>Ticker</span><span>Team</span><span>Structure</span><span>Direction</span><span>Open → Close ET</span><span className="text-right">Result</span><span />
          </div>
          <ul className="divide-y divide-border">
            {d.closed.map((t) => {
              const expanded = openId === t.id;
              const legs = Array.isArray(t.legs) ? (t.legs as (Leg | string)[]) : [];
              return (
                <li key={t.id} className="bg-card/40">
                  <button
                    type="button"
                    aria-expanded={expanded}
                    onClick={() => setOpenId(expanded ? null : t.id)}
                    className="grid w-full grid-cols-[1fr_auto] gap-x-4 gap-y-1 px-5 py-4 text-left text-sm hover:bg-card lg:grid-cols-[7rem_5rem_1fr_1.4fr_6rem_8rem_7rem_2rem] lg:items-center"
                  >
                    <span className="font-num text-xs text-muted-foreground lg:text-sm">{shortDate(t.closed_at)}</span>
                    <span className="row-span-2 self-center text-right lg:hidden">
                      <SignedValue value={t.pnl_net}>{signedMoney(t.pnl_net)}</SignedValue>
                      <span className="block font-num text-xs text-muted-foreground">{signedPct(t.pnl_pct, 1)}</span>
                    </span>
                    <span className="font-num font-medium">{t.ticker} <span className="font-sans font-normal text-muted-foreground lg:hidden">· {t.structure_label}</span></span>
                    <span className="hidden text-muted-foreground lg:block">{tn(t.team_id)}</span>
                    <span className="hidden lg:block">{t.structure_label}</span>
                    <span className="hidden text-muted-foreground lg:block">{t.direction}</span>
                    <span className="hidden font-num text-xs text-muted-foreground lg:block">{etTime(t.opened_at)} → {etTime(t.closed_at)}</span>
                    <span className="hidden text-right lg:block">
                      <SignedValue value={t.pnl_net}>{signedMoney(t.pnl_net)}</SignedValue>
                      <span className="block font-num text-xs text-muted-foreground">{signedPct(t.pnl_pct, 1)}</span>
                    </span>
                    <span className="col-span-2 text-xs text-muted-foreground lg:col-span-1 lg:hidden">{tn(t.team_id)} · {t.direction} · {t.exit_reason_label}</span>
                    <ChevronDown aria-hidden className={`hidden h-4 w-4 text-muted-foreground transition-transform lg:block ${expanded ? "rotate-180" : ""}`} />
                  </button>
                  {expanded && (
                    <div className="grid gap-6 border-t border-border bg-background/60 px-5 py-6 md:grid-cols-3">
                      <div>
                        <p className="text-[11px] uppercase tracking-wider text-muted-foreground">Contract</p>
                        <ul className="mt-2 space-y-1 font-num text-sm">
                          {legs.length ? legs.map((l, i) => <li key={i}>{legText(l)}</li>) : <li className="text-muted-foreground">—</li>}
                        </ul>
                        <p className="mt-3 font-num text-xs text-muted-foreground">
                          Entry (net debit/credit per spread) {t.entry_price != null ? `$${Number(t.entry_price).toFixed(2)}` : "—"}<br />Exit {t.exit_price != null ? `$${Number(t.exit_price).toFixed(2)}` : "—"}
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">Exit: {t.exit_reason_label ?? "—"}</p>
                      </div>
                      <div>
                        <p className="text-[11px] uppercase tracking-wider text-amber">Why this trade</p>
                        <p className="mt-2 text-sm leading-relaxed text-foreground/90">{t.why_text ?? "—"}</p>
                      </div>
                      <div>
                        <p className="text-[11px] uppercase tracking-wider text-amber">What happened</p>
                        <p className="mt-2 text-sm leading-relaxed text-foreground/90">{t.outcome_text ?? "—"}</p>
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </section>
  );
}

function PassedOn({ d, tn }: { d: TapeData; tn: (id: string | null) => string }) {
  return (
    <section aria-labelledby="passed" className="grid gap-6 lg:grid-cols-[1fr_2fr]">
      <div className="hairline-card flex flex-col justify-between p-6">
        <p className="font-num text-xs tracking-[0.18em] text-amber">PASSED ON</p>
        <p id="passed" className="mt-4 font-num text-6xl">{(d.meta?.passed_on_count ?? 0).toLocaleString()}</p>
        <p className="mt-2 text-sm text-muted-foreground">setups the agents considered and rejected. Saying no is most of the job.</p>
      </div>
      {d.passed.length === 0 ? (
        <Empty>No rejected setups logged yet.</Empty>
      ) : (
        <ul className="grid gap-3">
          {d.passed.map((p) => (
            <li key={p.id} className="hairline-card flex flex-wrap items-center gap-x-4 gap-y-1 p-5">
              <span className="font-num font-medium">{p.ticker}</span>
              <span className="text-xs text-muted-foreground">{tn(p.team_id)} · {shortDate(p.date)}</span>
              <span className="w-full text-sm sm:ml-auto sm:w-auto">{p.reason_label}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

function Journal({ d }: { d: TapeData }) {
  return (
    <section aria-labelledby="journal">
      <SectionHead k="DAILY JOURNAL" title={<span id="journal">After the <em>close</em></span>} />
      {d.recaps.length === 0 ? (
        <Empty>The first recap posts tonight after the close.</Empty>
      ) : (
        <ol className="relative space-y-8 border-l border-border pl-6">
          {d.recaps.map((r) => (
            <li key={r.date} className="relative">
              <span aria-hidden className="absolute -left-[1.85rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-background bg-amber" />
              <div className="flex flex-wrap items-center gap-3">
                <time className="font-num text-xs text-muted-foreground">{shortDate(r.date)}</time>
                {r.mood && <span className="rounded-full border border-border px-2 py-0.5 text-[11px] text-muted-foreground">{r.mood}</span>}
              </div>
              <h3 className="mt-2 font-display text-3xl">{r.headline}</h3>
              <p className="mt-2 max-w-2xl leading-relaxed text-muted-foreground">{r.body}</p>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}

function TapeSkeleton() {
  const bar = "animate-pulse rounded-md bg-muted";
  return (
    <div className="space-y-20" aria-busy="true" aria-label="Loading the tape">
      <div>
        <div className={`${bar} mb-6 h-12 w-48`} />
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border lg:grid-cols-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-card p-5"><div className={`${bar} h-3 w-20`} /><div className={`${bar} mt-4 h-7 w-24`} /></div>
          ))}
        </div>
      </div>
      <div className="hairline-card h-80 p-6"><div className={`${bar} h-full w-full opacity-40`} /></div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="hairline-card space-y-3 p-6"><div className={`${bar} h-7 w-32`} /><div className={`${bar} h-3 w-full`} /><div className={`${bar} h-3 w-2/3`} /></div>
        ))}
      </div>
      <div className="hairline-card space-y-4 p-6">{[0, 1, 2].map((i) => <div key={i} className={`${bar} h-10 w-full`} />)}</div>
    </div>
  );
}
