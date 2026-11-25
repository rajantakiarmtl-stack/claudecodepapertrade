import { Link } from "@tanstack/react-router";

export function PaperBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-amber/40 bg-amber/10 px-2.5 py-1 font-num text-[10px] font-medium tracking-[0.14em] text-amber sm:text-[11px]">
      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-amber" />
      PAPER TRADING · SIMULATED
    </span>
  );
}

export function Wordmark() {
  return (
    <Link to="/" className="font-display text-2xl leading-none text-foreground sm:text-[1.7rem]">
      Show The <span className="amber-underline italic">Tape</span>
    </Link>
  );
}

export function SiteHeader({ children }: { children?: React.ReactNode }) {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-2 px-5 py-4">
        <Wordmark />
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <nav aria-label="Main" className="flex items-center gap-4 text-sm">
            <Link to="/journal" className="text-muted-foreground hover:text-amber" activeProps={{ className: "text-amber" }}>Journal</Link>
            <Link to="/learn" className="text-muted-foreground hover:text-amber" activeProps={{ className: "text-amber" }}>Learn</Link>
          </nav>
          {children}
          <PaperBadge />
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
          Show The Tape publishes the results of a simulated paper-trading experiment for educational and entertainment
          purposes. Nothing on this site is financial, investment, tax or legal advice, or a recommendation to buy or
          sell any security. Options are risky and can lose 100% of the amount paid. Past or simulated results do not
          predict future results.
        </p>
        <nav aria-label="Footer" className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <Link to="/journal" className="text-foreground hover:text-amber">Journal</Link>
          <Link to="/learn" className="text-foreground hover:text-amber">Learn</Link>
          <Link to="/disclaimer" className="text-foreground hover:text-amber">Disclaimer</Link>
          <Link to="/privacy" className="text-foreground hover:text-amber">Privacy</Link>
          <Link to="/terms" className="text-foreground hover:text-amber">Terms</Link>
          <span className="font-num text-xs text-muted-foreground sm:ml-auto">© 2026 Show The Tape</span>
        </nav>
      </div>
    </footer>
  );
}

export function SignedValue({ value, children, className = "" }: { value: number | null | undefined; children: React.ReactNode; className?: string }) {
  const v = value == null ? 0 : Number(value);
  const cls = v > 0 ? "text-gain" : v < 0 ? "text-loss" : "text-muted-foreground";
  return (
    <span className={`font-num ${cls} ${className}`}>
      {value != null && v !== 0 && <span aria-hidden className="mr-1 text-[0.8em]">{v > 0 ? "▲" : v < 0 ? "▼" : "•"}</span>}
      {children}
    </span>
  );
}
