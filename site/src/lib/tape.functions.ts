import { createServerFn } from "@tanstack/react-start";
import type { Tables } from "@/integrations/supabase/types";

// Public dashboard data, read server-side from D1. Open positions never carry contract details.
export const getTape = createServerFn({ method: "GET" }).handler(async () => {
  const { rows, row, parseJson } = await import("./db.server");
  const [meta, snapshots, teams, open, closed, passed, recaps] = await Promise.all([
    row<Tables<"site_meta">>("select * from site_meta where id = 1"),
    rows<Tables<"daily_snapshots">>("select * from daily_snapshots order by date asc"),
    rows<Tables<"teams">>("select * from teams order by sort asc"),
    rows<Tables<"open_positions">>("select * from open_positions order by opened_at desc"),
    rows<Tables<"closed_trades">>("select * from closed_trades order by closed_at desc"),
    rows<Tables<"passed_on">>("select * from passed_on order by date desc, id desc limit 3"),
    rows<Tables<"daily_recaps">>("select * from daily_recaps order by date desc limit 30"),
  ]);
  return {
    meta,
    snapshots,
    teams: teams.map((t) => ({ ...t, roles: parseJson<string[] | null>(t.roles, null) })),
    open,
    closed: closed.map((c) => ({ ...c, legs: parseJson<Tables<"closed_trades">["legs"]>(c.legs, null) })),
    passed,
    recaps,
  };
});

export const getTicker = createServerFn({ method: "GET" }).handler(async () => {
  const { rows } = await import("./db.server");
  const [trades, teams] = await Promise.all([
    rows<Pick<Tables<"closed_trades">, "id" | "ticker" | "team_id" | "structure_label" | "pnl_net">>(
      "select id, ticker, team_id, structure_label, pnl_net from closed_trades order by closed_at desc limit 20",
    ),
    rows<Pick<Tables<"teams">, "id" | "name">>("select id, name from teams"),
  ]);
  return { trades, teams };
});
