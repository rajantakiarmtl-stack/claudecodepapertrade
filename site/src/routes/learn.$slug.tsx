import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/site/brand";
import { SignupForm } from "@/components/site/signup-form";
import { ArticleList, ContentError, ContentNotFound } from "@/components/editorial/shared";
import { Markdown } from "@/components/editorial/markdown";
import { articleQuery } from "@/lib/editorial-queries";
import { EDUCATIONAL_NOTE, pageHead, SITE_URL } from "@/lib/editorial";
import { shortDate } from "@/lib/format";
export const Route = createFileRoute("/learn/$slug")({
  staticData: { sitemap: true },
  loader: async ({ params, context }) => {
    const result = await context.queryClient.ensureQueryData(articleQuery(params.slug));
    if (!result) throw notFound();
    return result;
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) { const head = pageHead("Unavailable article", "This article is unavailable.", `/learn/${encodeURIComponent(params.slug)}`); return { ...head, meta: [...head.meta, { name: "robots", content: "noindex" }] }; }
    const a = loaderData.article;
    return pageHead(a.title, a.description, `/learn/${encodeURIComponent(a.slug)}`, "article", { "@type": "Article", headline: a.title, description: a.description, datePublished: a.published_at, dateModified: a.updated_at, keywords: a.tags.join(", "), mainEntityOfPage: `${SITE_URL}/learn/${encodeURIComponent(a.slug)}`, author: { "@type": "Organization", name: "Show The Tape", url: SITE_URL }, publisher: { "@type": "Organization", name: "Show The Tape", url: SITE_URL } });
  },
  errorComponent: ContentError, notFoundComponent: ContentNotFound, component: Article,
});
function Article() {
  const { slug } = Route.useParams();
  const { data } = useSuspenseQuery(articleQuery(slug));
  if (!data) return <ContentNotFound />;
  const { article: a, related } = data;
  return <><SiteHeader /><main className="mx-auto max-w-5xl px-5 py-12 sm:py-20"><Link to="/learn" className="inline-flex items-center gap-2 text-sm text-amber"><ArrowLeft className="size-4" aria-hidden /> Learn</Link><article><header className="mt-10 max-w-4xl border-b border-border pb-10"><div className="flex flex-wrap gap-3 font-num text-xs text-amber">{a.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><h1 className="mt-5 font-display text-4xl leading-tight sm:text-6xl">{a.title}</h1><p className="mt-6 max-w-[68ch] text-lg leading-relaxed text-muted-foreground">{a.description}</p><p className="mt-6 flex flex-wrap gap-x-5 gap-y-2 font-num text-xs text-muted-foreground"><span>Published <time dateTime={a.published_at}>{shortDate(a.published_at)}</time></span><span>Updated <time dateTime={a.updated_at}>{shortDate(a.updated_at)}</time></span></p></header><div className="mt-10 grid gap-10 lg:grid-cols-[12rem_minmax(0,1fr)]"><nav aria-label="Table of contents" className="self-start border-l border-amber/50 pl-5 lg:sticky lg:top-28"><h2 className="font-num text-xs text-amber">IN THIS ARTICLE</h2><ul className="mt-4 space-y-3 text-sm leading-relaxed"><Markdown body={a.body_md} toc /></ul></nav><div className="min-w-0 max-w-[68ch]"><div className="reading-copy"><Markdown body={a.body_md} /></div><p className="mt-10 border-t border-border pt-6 text-sm text-muted-foreground">{EDUCATIONAL_NOTE}</p></div></div></article>{related.length > 0 && <section className="defer-section mt-16 border-t border-border pt-8" aria-labelledby="related"><h2 id="related" className="font-display text-4xl">Keep <em className="text-amber">reading</em></h2><ArticleList articles={related} /></section>}<aside className="defer-section mx-auto mt-16 max-w-2xl"><SignupForm source="learn" recap /></aside></main></>;
}
