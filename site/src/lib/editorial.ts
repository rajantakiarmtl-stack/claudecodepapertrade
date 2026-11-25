export const SITE_URL = "https://showthetape.com";
export const EDUCATIONAL_NOTE = "Educational content, not financial advice.";

export function pageHead(title: string, description: string, path: string, type = "website", structured?: Record<string, unknown>) {
  const url = `${SITE_URL}${path}`;
  return {
    meta: [
      { title: `${title} · Show The Tape` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} · Show The Tape` },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: `${title} · Show The Tape` },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: structured ? [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", ...structured }).replace(/</g, "\\u003c") }] : [],
  };
}

export function excerpt(text: string | null, fallback: string) {
  return text?.replace(/\s+/g, " ").trim().slice(0, 160) || fallback;
}

export function easternDay(iso: string): string {
  const parts = new Intl.DateTimeFormat("en-US", { timeZone: "America/New_York", year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(new Date(iso));
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  return `${get("year")}-${get("month")}-${get("day")}`;
}

export function dayTradeWindow(date: string) {
  const start = Date.parse(`${date}T00:00:00Z`);
  return { from: new Date(start).toISOString(), to: new Date(start + 2 * 86400000).toISOString() };
}

export function snapshotReturn(value: number | null | undefined, start: number | null | undefined) {
  return value != null && start != null && start > 0 ? (value / start - 1) * 100 : null;
}

export function headingId(text: string) {
  return text.toLowerCase().normalize("NFKD").replace(/[^\p{L}\p{N}\s-]/gu, "").trim().replace(/\s+/g, "-") || "section";
}
