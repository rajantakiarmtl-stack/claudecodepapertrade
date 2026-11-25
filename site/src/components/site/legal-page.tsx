import { SiteHeader } from "./brand";

export function LegalPage({ title, updated, sections }: { title: string; updated: string; sections: { h: string; p: string }[] }) {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-2xl px-5 py-16 sm:py-24">
        <p className="font-num text-xs tracking-[0.18em] text-amber">LEGAL</p>
        <h1 className="mt-3 font-display text-5xl leading-tight sm:text-6xl">{title}</h1>
        <p className="mt-4 font-num text-sm text-muted-foreground">Last updated: {updated}</p>
        <div className="mt-12 space-y-10">
          {sections.map((s) => (
            <section key={s.h}>
              {s.h && <h2 className="font-display text-2xl text-foreground">{s.h}</h2>}
              <p className="mt-3 text-[1.02rem] leading-[1.8] text-muted-foreground">{s.p}</p>
            </section>
          ))}
        </div>
      </main>
    </>
  );
}
