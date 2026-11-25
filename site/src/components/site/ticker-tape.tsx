import { useQuery } from "@tanstack/react-query";
import { tickerQuery } from "@/lib/tape-data";
import { signedMoney } from "@/lib/format";

type Item = { key: string; label: string; value?: number | null };

export function TickerTape() {
  const { data } = useQuery(tickerQuery);
  const names = new Map((data?.teams ?? []).map((t) => [t.id, t.name ?? t.id]));
  let items: Item[] = (data?.trades ?? []).map((t) => ({
    key: t.id,
    label: [t.ticker, t.structure_label, (names.get(t.team_id ?? "") ?? t.team_id ?? "").replace(/ Team$/, "")].filter(Boolean).join(" · "),
    value: t.pnl_net,
  }));
  if (items.length === 0) {
    items = [
      { key: "a", label: "Tape opens after the first close" },
      { key: "b", label: "33 agents · 3 teams" },
      { key: "c", label: "$100,000 paper account" },
      { key: "d", label: "Every trade · every loss" },
    ];
  }
  while (items.length < 8) items = [...items, ...items.map((i) => ({ ...i, key: i.key + "x" + items.length }))];
  const loop = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-border bg-card/60" role="marquee" aria-label="Recently closed trades">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />
      <ul className="animate-tape flex w-max items-center py-3">
        {loop.map((it, i) => (
          <li key={it.key + i} className="flex items-center whitespace-nowrap font-num text-xs sm:text-sm" aria-hidden={i >= items.length}>
            <span className="text-muted-foreground">{it.label}</span>
            {it.value != null && (
              <span className={`ml-2 ${Number(it.value) > 0 ? "text-gain" : Number(it.value) < 0 ? "text-loss" : "text-muted-foreground"}`}>
                {signedMoney(it.value)}
              </span>
            )}
            <span aria-hidden className="mx-6 h-1.5 w-1.5 rounded-full bg-amber" />
          </li>
        ))}
      </ul>
    </div>
  );
}
