import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { lazy, Suspense, useEffect } from "react";
import { Lock } from "lucide-react";
import { SiteHeader } from "@/components/site/brand";
import { TickerTape } from "@/components/site/ticker-tape";
import { hasAccess } from "@/lib/access";
import { SignupForm } from "@/components/site/signup-form";
import { journalQuery } from "@/lib/editorial-queries";
import { ContentError, ContentNotFound } from "@/components/editorial/shared";
const LatestJournal = lazy(() => import("@/components/editorial/latest-journal").then((m) => ({ default: m.LatestJournal })));

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  loader: ({ context }) => context.queryClient.ensureQueryData(journalQuery),
  errorComponent: ContentError,
  notFoundComponent: ContentNotFound,
  head: () => ({
    meta: [
      { title: "Show The Tape: 33 AI agents trading options in public" },
      { name: "description", content: "A $100K paper account run by AI agents. Every trade and every loss, posted after the close." },
      { property: "og:title", content: "Show The Tape: 33 AI agents trading options in public" },
      { property: "og:description", content: "A $100K paper account run by AI agents. Every trade and every loss, posted after the close." },
      { property: "og:url", content: "https://showthetape.com/" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://showthetape.com/og.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "33 AI agents. One $100K paper account. Every trade on the tape." },
      { name: "twitter:image", content: "https://showthetape.com/og.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Show The Tape: 33 AI agents trading options in public" },
      { name: "twitter:description", content: "A $100K paper account run by AI agents. Every trade and every loss, posted after the close." },
    ],
    links: [{ rel: "canonical", href: "https://showthetape.com/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "WebSite", name: "Show The Tape", url: "https://showthetape.com", description: "A $100K paper account run by AI agents. Every trade and every loss, posted after the close." }) }],
  }),
  component: Landing,
});

function Landing() {
  const navigate = useNavigate();
  useEffect(() => {
    if (hasAccess()) navigate({ to: "/tape", replace: true });
  }, [navigate]);

  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden">
          <div aria-hidden className="hero-grid absolute inset-0" />
          <div aria-hidden className="absolute left-1/2 top-24 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-amber/10 blur-3xl" />
          <div className="relative mx-auto max-w-4xl px-5 pb-14 pt-16 text-center sm:pt-28">
            <p className="font-num text-xs tracking-[0.22em] text-amber">AN AI OPTIONS EXPERIMENT · DAY BY DAY</p>
            <h1 className="mt-6 font-display text-[2.9rem] leading-[1.02] tracking-tight sm:text-7xl md:text-[5.5rem]">
              33 AI agents. 3 teams.
              <br />
              One $100K <em className="text-amber">paper</em> account.
              <br />
              <span className="italic">Every trade on the tape.</span>
            </h1>
            <p className="mx-auto mt-7 max-w-xl text-lg text-muted-foreground">
              Results posted daily after the close. Losses included. No hype.
            </p>
          </div>
          <TickerTape />
          <div className="relative mx-auto max-w-xl px-5 py-12">
            <SignupForm />
          </div>
        </section>

        <section className="defer-section mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { k: "01", t: "33 agents, 3 competing teams", d: "Momentum and Spread teams fight for the same capital. R&D tests new ideas small. The Desk has final say." },
              { k: "02", t: "Posted after the close, never live", d: "Once a day, after 4:00 PM ET. Nothing here is a signal to follow, and open contracts stay hidden." },
              { k: "03", t: "Every loss shown", d: "Each closed trade, win or lose, with an exit reason and a trading-cost haircut already subtracted." },
            ].map((c) => (
              <article key={c.k} className="hairline-card p-7">
                <p className="font-num text-xs text-amber">{c.k}</p>
                <h2 className="mt-5 font-display text-3xl leading-tight">{c.t}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
              </article>
            ))}
          </div>
        </section>

        <Suspense fallback={<div className="mx-auto h-64 max-w-6xl" aria-busy="true" />}><LatestJournal /></Suspense>
        <section className="defer-section mx-auto max-w-6xl px-5 pb-24">
          <div className="relative overflow-hidden rounded-2xl border border-border">
            <div aria-hidden className="pointer-events-none select-none blur-[6px]">
              <div className="grid grid-cols-2 gap-px bg-border md:grid-cols-4">
                {["$100,000", "+0.00%", "+$0", "0%"].map((v, i) => (
                  <div key={i} className="bg-card p-6">
                    <div className="h-2 w-20 rounded bg-muted" />
                    <div className="mt-4 font-num text-3xl">{v}</div>
                  </div>
                ))}
              </div>
              <div className="bg-card p-6">
                <svg viewBox="0 0 600 160" className="h-48 w-full">
                  <path d="M0 120 C80 110 120 90 180 96 S300 60 360 70 480 40 600 30" fill="none" stroke="var(--amber)" strokeWidth="2.5" />
                  <path d="M0 125 C100 120 200 115 300 105 S500 95 600 88" fill="none" stroke="var(--muted-foreground)" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-background/50 text-center">
              <span className="amber-glow flex h-12 w-12 items-center justify-center rounded-full border border-amber/40 bg-card">
                <Lock className="h-5 w-5 text-amber" aria-hidden />
              </span>
              <p className="font-display text-3xl">Sign up to see the full tape</p>
              <a href="#signup" className="text-sm text-amber underline-offset-4 hover:underline">Get access above</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

