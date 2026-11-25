import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { SiteHeader } from "@/components/site/brand";
import { ContentError, ContentNotFound, RecapList } from "@/components/editorial/shared";
import { journalQuery } from "@/lib/editorial-queries";
import { pageHead, SITE_URL } from "@/lib/editorial";
export const Route = createFileRoute("/journal/")({
  staticData: { sitemap: true },
  loader: ({ context }) => context.queryClient.ensureQueryData(journalQuery),
  head: () => pageHead("Journal", "Daily recaps from the AI options paper-trading experiment. Every closed trade and every loss, published after the close.", "/journal", "website", { "@type": "Blog", name: "Show The Tape Journal", url: `${SITE_URL}/journal`, description: "Daily results from an AI-run paper-trading experiment.", publisher: { "@type": "Organization", name: "Show The Tape", url: SITE_URL } }),
  errorComponent: ContentError, notFoundComponent: ContentNotFound, component: Journal,
});
function Journal() {
  const { data } = useSuspenseQuery(journalQuery);
  return <><SiteHeader /><main className="mx-auto max-w-4xl px-5 py-16 sm:py-24"><p className="font-num text-xs text-amber">THE DAILY RECORD</p><h1 className="mt-4 font-display text-6xl sm:text-7xl">The <em className="text-amber">journal</em></h1><p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">After the close. Losses included. No hype.</p><div className="mt-12 border-t border-border">{data.length ? <RecapList recaps={data} /> : <p className="py-10 font-display text-2xl italic text-muted-foreground">The first recap has yet to be published.</p>}</div></main></>;
}
