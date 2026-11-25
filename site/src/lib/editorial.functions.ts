import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import type { Tables } from "@/integrations/supabase/types";
import { dayTradeWindow, easternDay } from "./editorial";

type Article = Tables<"articles">;
const fixArticle = <T extends { tags: unknown }>(a: T, parse: (v: unknown) => string[]) => ({ ...a, tags: parse(a.tags) });

export const getJournal = createServerFn({ method: "GET" }).handler(async () => {
  const { rows } = await import("./db.server");
  return rows<Pick<Tables<"daily_recaps">, "date" | "headline" | "body" | "mood">>(
    "select date, headline, body, mood from daily_recaps order by date desc",
  );
});

export const getJournalDay = createServerFn({ method: "GET" })
  .inputValidator(z.object({ date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).refine((date) => { const parsed = new Date(`${date}T00:00:00Z`); return !Number.isNaN(parsed.getTime()) && parsed.toISOString().slice(0, 10) === date; }) }))
  .handler(async ({ data: { date } }) => {
    const { rows, row } = await import("./db.server");
    const recap = await row<Pick<Tables<"daily_recaps">, "date" | "headline" | "body" | "mood">>(
      "select date, headline, body, mood from daily_recaps where date = ?", date);
    if (!recap) return null;
    const window = dayTradeWindow(date);
    const [trades, teams, snapshot, meta, previous, next] = await Promise.all([
      rows<Pick<Tables<"closed_trades">, "id" | "closed_at" | "ticker" | "team_id" | "structure_label" | "direction" | "pnl_net" | "why_text" | "outcome_text">>(
        "select id, closed_at, ticker, team_id, structure_label, direction, pnl_net, why_text, outcome_text from closed_trades where closed_at >= ? and closed_at < ? order by closed_at, id",
        window.from, window.to),
      rows<Pick<Tables<"teams">, "id" | "name">>("select id, name from teams order by id"),
      row<Pick<Tables<"daily_snapshots">, "date" | "account_value" | "spy_close_rebased">>(
        "select date, account_value, spy_close_rebased from daily_snapshots where date = ?", date),
      row<Pick<Tables<"site_meta">, "start_equity" | "experiment_start">>("select start_equity, experiment_start from site_meta order by id limit 1"),
      row<Pick<Tables<"daily_recaps">, "date" | "headline">>("select date, headline from daily_recaps where date < ? order by date desc limit 1", date),
      row<Pick<Tables<"daily_recaps">, "date" | "headline">>("select date, headline from daily_recaps where date > ? order by date limit 1", date),
    ]);
    return { recap, trades: trades.filter((t) => t.closed_at && easternDay(t.closed_at) === date), teams, snapshot, meta, previous, next };
  });

export const getArticles = createServerFn({ method: "GET" }).handler(async () => {
  const { rows, parseJson } = await import("./db.server");
  const list = await rows<Pick<Article, "slug" | "title" | "description" | "tags" | "published_at" | "updated_at">>(
    "select slug, title, description, tags, published_at, updated_at from articles where status = 'published' order by published_at desc, slug");
  return list.map((a) => fixArticle(a, (v) => parseJson<string[]>(v, [])));
});

export const getArticle = createServerFn({ method: "GET" })
  .inputValidator(z.object({ slug: z.string().min(1).max(200) }))
  .handler(async ({ data: { slug } }) => {
    const { rows, row, parseJson } = await import("./db.server");
    const raw = await row<Pick<Article, "slug" | "title" | "description" | "body_md" | "tags" | "published_at" | "updated_at">>(
      "select slug, title, description, body_md, tags, published_at, updated_at from articles where slug = ? and status = 'published'", slug);
    if (!raw) return null;
    const article = fixArticle(raw, (v) => parseJson<string[]>(v, []));
    let related: Array<ReturnType<typeof fixArticle<Pick<Article, "slug" | "title" | "description" | "tags" | "published_at" | "updated_at">>>> = [];
    if (article.tags.length) {
      const others = await rows<Pick<Article, "slug" | "title" | "description" | "tags" | "published_at" | "updated_at">>(
        "select slug, title, description, tags, published_at, updated_at from articles where status = 'published' and slug != ? order by published_at desc, slug", slug);
      related = others.map((a) => fixArticle(a, (v) => parseJson<string[]>(v, []))).filter((a) => a.tags.some((t) => article.tags.includes(t)));
    }
    return { article, related: related.slice(0, 3) };
  });
