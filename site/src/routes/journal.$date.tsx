import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SiteHeader, SignedValue } from "@/components/site/brand";
import { SignupForm } from "@/components/site/signup-form";
import { ContentError, ContentNotFound } from "@/components/editorial/shared";
import { journalDayQuery } from "@/lib/editorial-queries";
import { EDUCATIONAL_NOTE, excerpt, pageHead, SITE_URL, snapshotReturn } from "@/lib/editorial";
import { money, shortDate, signedMoney, signedPct } from "@/lib/format";
export const Route = createFileRoute("/journal/$date")({
  staticData: { sitemap: true },
  loader: async ({ params, context }) => {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(params.date) || Number.isNaN(Date.parse(params.date))) throw notFound();
    const result = await context.queryClient.ensureQueryData(journalDayQuery(params.date));
    if (!result) throw notFound();
    return result;
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) return { ...pageHead("Unavailable recap", "This recap is unavailable.", `/journal/${params.date}`), meta: [...pageHead("Unavailable recap", "This recap is unavailable.", `/journal/${params.date}`).meta, { name: "robots", content: "noindex" }] };
    const title = loaderData.recap.headline || `Daily recap · ${shortDate(params.date)}`;
    const description = excerpt(loaderData.recap.body, "The day’s closed paper trades and results after costs.");
    return pageHead(title, description, `/journal/${params.date}`, "article", { "@type": "BlogPosting", headline: title, description, datePublished: params.date, mainEntityOfPage: `${SITE_URL}/journal/${params.date}`, author: { "@type": "Organization", name: "Show The Tape", url: SITE_URL }, publisher: { "@type": "Organization", name: "Show The Tape", url: SITE_URL } });
  },
  errorComponent: ContentError, notFoundComponent: ContentNotFound, component: JournalDay,
});
function JournalDay() {
  const { date } = Route.useParams();
  const { data } = useSuspenseQuery(journalDayQuery(date));
  if (!data) return <ContentNotFound />;
  const { recap, trades, snapshot, meta, teams, previous, next } = data;
  const accountReturn = snapshotReturn(snapshot?.account_value, meta?.start_equity);
  const spyReturn = snapshotReturn(snapshot?.spy_close_rebased, meta?.start_equity);
  return <><SiteHeader /><main className="mx-auto max-w-4xl px-5 py-12 sm:py-20"><Link to="/journal" className="inline-flex items-center gap-2 text-sm text-amber"><ArrowLeft className="size-4" aria-hidden /> Journal</Link><article><header className="border-b border-border pb-10"><div className="mt-10 flex flex-wrap gap-4 font-num text-xs text-muted-foreground"><time dateTime={date}>{shortDate(date)}</time>{recap.mood && <span className="text-amber">{recap.mood}</span>}</div><h1 className="mt-5 font-display text-4xl leading-tight sm:text-6xl">{recap.headline || `After the close · ${shortDate(date)}`}</h1></header><div className="reading-copy mx-auto mt-10 max-w-[68ch] whitespace-pre-line">{recap.body}</div>
  <section className="mt-14 border-y border-border py-8" aria-labelledby="day-score"><p className="font-num text-xs text-amber">AT THE CLOSE · {shortDate(date)}</p><h2 id="day-score" className="mt-3 font-display text-3xl">Account vs. <em>S&P 500</em></h2>{snapshot ? <dl className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2"><div><dt className="text-sm text-muted-foreground">Paper account</dt><dd className="mt-2 font-num text-3xl">{money(snapshot.account_value)}</dd><dd className="mt-2 text-sm"><SignedValue value={accountReturn}>{signedPct(accountReturn)}</SignedValue><span className="text-muted-foreground"> since start</span></dd></div><div><dt className="text-sm text-muted-foreground">S&P 500 · rebased</dt><dd className="mt-2 font-num text-3xl">{money(snapshot.spy_close_rebased)}</dd><dd className="mt-2 text-sm"><SignedValue value={spyReturn}>{signedPct(spyReturn)}</SignedValue><span className="text-muted-foreground"> since start</span></dd></div></dl> : <p className="mt-5 text-muted-foreground">No scoreboard snapshot published for this date.</p>}</section>
  <section className="mt-12" aria-labelledby="day-trades"><h2 id="day-trades" className="font-display text-4xl">The closed <em className="text-amber">trades</em></h2><p className="mt-2 text-sm text-muted-foreground">Simulated results. Trading costs already subtracted.</p>{trades.length ? <ol className="mt-6 divide-y divide-border">{trades.map((trade) => <li key={trade.id} className="py-8"><div className="flex flex-wrap items-baseline justify-between gap-3"><h3 className="font-num text-xl">{trade.ticker}</h3><SignedValue value={trade.pnl_net} className="text-xl">{signedMoney(trade.pnl_net)}</SignedValue></div><p className="mt-3 text-sm text-muted-foreground">{teams.find((team) => team.id === trade.team_id)?.name || trade.team_id || "—"} · {trade.structure_label} · {trade.direction}</p><div className="mt-6 grid gap-6 sm:grid-cols-2"><div><h4 className="font-num text-xs text-amber">Why this trade</h4><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{trade.why_text || "—"}</p></div><div><h4 className="font-num text-xs text-amber">What happened</h4><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{trade.outcome_text || "—"}</p></div></div></li>)}</ol> : <p className="py-8 font-display text-2xl italic text-muted-foreground">No trades closed this day.</p>}</section><p className="mt-6 text-sm text-muted-foreground">{EDUCATIONAL_NOTE}</p></article>
  <nav aria-label="Adjacent journal entries" className="mt-12 grid grid-cols-2 gap-6 border-t border-border pt-6">{previous ? <Link to="/journal/$date" params={{ date: previous.date }} className="text-sm text-amber"><ArrowLeft className="mb-2 size-4" aria-hidden />Previous recap<br /><span className="text-muted-foreground">{shortDate(previous.date)}</span></Link> : <span />}{next && <Link to="/journal/$date" params={{ date: next.date }} className="text-right text-sm text-amber"><ArrowRight className="mb-2 ml-auto size-4" aria-hidden />Next recap<br /><span className="text-muted-foreground">{shortDate(next.date)}</span></Link>}</nav><aside className="defer-section mx-auto mt-14 max-w-2xl"><SignupForm source="journal" recap /></aside></main></>;
}
