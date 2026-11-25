import { useSuspenseQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { journalQuery } from "@/lib/editorial-queries";
import { shortDate } from "@/lib/format";
export function LatestJournal() {
  const { data } = useSuspenseQuery(journalQuery);
  return <section className="defer-section mx-auto max-w-6xl px-5 pb-20" aria-labelledby="latest-journal"><div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-border pb-6"><h2 id="latest-journal" className="font-display text-4xl">Latest from the <em className="text-amber">journal</em></h2><Link to="/journal" className="inline-flex items-center gap-2 text-sm text-amber">All recaps <ArrowRight className="size-4" aria-hidden /></Link></div>{data.length ? <ol className="grid gap-8 pt-8 md:grid-cols-3">{data.slice(0, 3).map((r) => <li key={r.date}><Link to="/journal/$date" params={{ date: r.date }} className="group block"><time dateTime={r.date} className="font-num text-xs text-muted-foreground">{shortDate(r.date)}</time><h3 className="mt-3 font-display text-3xl leading-tight group-hover:text-amber">{r.headline || "After the close"}</h3>{r.mood && <p className="mt-4 font-num text-xs text-amber">{r.mood}</p>}</Link></li>)}</ol> : <p className="py-8 font-display text-2xl italic text-muted-foreground">The first recap has yet to be published.</p>}</section>;
}
