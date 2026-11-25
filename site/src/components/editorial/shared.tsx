import { Link, useRouter } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site/brand";
import { Button } from "@/components/ui/button";
import { shortDate } from "@/lib/format";
import { excerpt } from "@/lib/editorial";
import type { Tables } from "@/integrations/supabase/types";

export function ContentError() {
  const router = useRouter();
  return <><SiteHeader /><main className="mx-auto max-w-3xl px-5 py-24"><h1 className="font-display text-5xl">The page couldn’t load</h1><p className="mt-5 text-muted-foreground">Please try again in a moment.</p><Button className="mt-6" onClick={() => void router.invalidate()}>Try again</Button></main></>;
}
export function ContentNotFound() {
  return <><SiteHeader /><main className="mx-auto max-w-3xl px-5 py-24"><p className="font-num text-xs text-amber">404</p><h1 className="mt-4 font-display text-5xl">Not on the tape</h1><p className="mt-5 text-muted-foreground">This entry has not been published.</p><Button asChild variant="link" className="mt-6 px-0"><Link to="/journal">Browse the journal <ArrowRight aria-hidden /></Link></Button></main></>;
}
export function RecapList({ recaps }: { recaps: Tables<"daily_recaps">[] }) {
  return <ol className="divide-y divide-border">{recaps.map((r) => <li key={r.date} className="py-8"><Link to="/journal/$date" params={{ date: r.date }} className="group block"><div className="flex flex-wrap gap-3 font-num text-xs text-muted-foreground"><time dateTime={r.date}>{shortDate(r.date)}</time>{r.mood && <span className="text-amber">{r.mood}</span>}</div><h2 className="mt-3 font-display text-3xl leading-tight group-hover:text-amber sm:text-4xl">{r.headline || `After the close · ${shortDate(r.date)}`}</h2><p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">{excerpt(r.body, "The day’s paper-trading results.")}</p><span className="mt-4 inline-flex items-center gap-2 text-sm text-amber">Read the recap <ArrowRight className="size-4" aria-hidden /></span></Link></li>)}</ol>;
}
export function ArticleList({ articles }: { articles: Pick<Tables<"articles">, "slug" | "title" | "description" | "tags" | "published_at">[] }) {
  return <ul className="divide-y divide-border">{articles.map((a) => <li key={a.slug} className="py-8"><Link to="/learn/$slug" params={{ slug: a.slug }} className="group block"><time dateTime={a.published_at} className="font-num text-xs text-muted-foreground">{shortDate(a.published_at)}</time><h2 className="mt-3 font-display text-3xl group-hover:text-amber sm:text-4xl">{a.title}</h2><p className="mt-3 leading-relaxed text-muted-foreground">{a.description}</p><div className="mt-4 flex flex-wrap gap-3 font-num text-xs text-amber">{a.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></Link></li>)}</ul>;
}
