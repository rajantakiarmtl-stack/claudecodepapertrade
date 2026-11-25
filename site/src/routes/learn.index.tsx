import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { SiteHeader } from "@/components/site/brand";
import { ArticleList, ContentError, ContentNotFound } from "@/components/editorial/shared";
import { articlesQuery } from "@/lib/editorial-queries";
import { pageHead, SITE_URL } from "@/lib/editorial";
export const Route = createFileRoute("/learn/")({
  staticData: { sitemap: true },
  loader: ({ context }) => context.queryClient.ensureQueryData(articlesQuery),
  head: () => pageHead("Learn", "Educational articles on options, paper trading and the AI-run trading experiment. Not financial advice.", "/learn", "website", { "@type": "CollectionPage", name: "Learn · Show The Tape", url: `${SITE_URL}/learn`, about: "Options and paper trading", publisher: { "@type": "Organization", name: "Show The Tape", url: SITE_URL } }),
  errorComponent: ContentError, notFoundComponent: ContentNotFound, component: Learn,
});
function Learn() {
  const { data } = useSuspenseQuery(articlesQuery);
  return <><SiteHeader /><main className="mx-auto max-w-4xl px-5 py-16 sm:py-24"><p className="font-num text-xs text-amber">THE READING ROOM</p><h1 className="mt-4 font-display text-6xl sm:text-7xl">Learn the <em className="text-amber">language</em></h1><p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">Options. Risk. Paper trading. Educational content, not financial advice.</p><div className="mt-12 border-t border-border">{data.length ? <ArticleList articles={data} /> : <p className="py-10 font-display text-2xl italic text-muted-foreground">The first article has yet to be published.</p>}</div></main></>;
}
