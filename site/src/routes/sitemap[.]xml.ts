import { createFileRoute } from "@tanstack/react-router";
import { SITE_URL } from "@/lib/editorial";

const STATIC = ["/", "/journal", "/learn", "/disclaimer", "/privacy", "/terms"];
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Public URLs only: /tape (gated dashboard) is never listed.
export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const { rows } = await import("@/lib/db.server");
        const [days, articles] = await Promise.all([
          rows<{ date: string }>("select date from daily_recaps order by date desc"),
          rows<{ slug: string; updated_at: string | null; published_at: string | null }>(
            "select slug, updated_at, published_at from articles where status = 'published' order by published_at desc",
          ),
        ]);
        const lastDay = days[0]?.date;
        const urls: Array<{ loc: string; lastmod?: string }> = [
          ...STATIC.map((p) => ({ loc: `${SITE_URL}${p}`, lastmod: p === "/" || p === "/journal" ? lastDay : undefined })),
          ...days.map((d) => ({ loc: `${SITE_URL}/journal/${d.date}`, lastmod: d.date })),
          ...articles.map((a) => ({ loc: `${SITE_URL}/learn/${a.slug}`, lastmod: (a.updated_at ?? a.published_at ?? "").slice(0, 10) || undefined })),
        ];
        const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
          .map((u) => `  <url><loc>${esc(u.loc)}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ""}</url>`)
          .join("\n")}\n</urlset>\n`;
        return new Response(body, { headers: { "content-type": "application/xml; charset=utf-8", "cache-control": "public, max-age=3600" } });
      },
    },
  },
});
