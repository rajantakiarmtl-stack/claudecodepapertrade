const MINUS = "−";
export function signedMoney(n: number | null | undefined, digits = 0): string {
  if (n == null || Number.isNaN(Number(n))) return "—";
  const v = Number(n);
  const abs = Math.abs(v).toLocaleString("en-US", { minimumFractionDigits: digits, maximumFractionDigits: digits });
  return `${v > 0 ? "+" : v < 0 ? MINUS : "±"}$${abs}`;
}
export function money(n: number | null | undefined): string {
  if (n == null) return "—";
  return `$${Number(n).toLocaleString("en-US", { maximumFractionDigits: 0 })}`;
}
export function signedPct(n: number | null | undefined, digits = 2): string {
  if (n == null || Number.isNaN(Number(n))) return "—";
  const v = Number(n);
  return `${v > 0 ? "+" : v < 0 ? MINUS : "±"}${Math.abs(v).toFixed(digits)}%`;
}
export function pct(n: number | null | undefined, digits = 0): string {
  if (n == null) return "—";
  return `${Number(n).toFixed(digits)}%`;
}
export function tone(n: number | null | undefined): "gain" | "loss" | "flat" {
  if (n == null) return "flat";
  return Number(n) > 0 ? "gain" : Number(n) < 0 ? "loss" : "flat";
}
const ET = "America/New_York";
export function etDateTime(iso: string | null | undefined): string {
  if (!iso) return "—";
  return new Date(iso).toLocaleString("en-US", { timeZone: ET, month: "short", day: "numeric", hour: "numeric", minute: "2-digit" }) + " ET";
}
export function etTime(iso: string | null | undefined): string {
  if (!iso) return "—";
  return new Date(iso).toLocaleTimeString("en-US", { timeZone: ET, hour: "numeric", minute: "2-digit" });
}
export function shortDate(d: string | null | undefined): string {
  if (!d) return "—";
  const date = d.length === 10 ? new Date(d + "T12:00:00Z") : new Date(d);
  return date.toLocaleDateString("en-US", { timeZone: ET, month: "short", day: "numeric", year: "numeric" });
}
export function daysBetween(from: string | null | undefined, to = new Date()): number {
  if (!from) return 0;
  return Math.max(0, Math.floor((to.getTime() - new Date(from).getTime()) / 86400000));
}

export function experimentDays(snapshots: readonly { date: string }[], start: string | null | undefined) {
  let count = 0;
  const byDate = new Map<string, number>();
  if (start) {
    for (const snapshot of snapshots) {
      byDate.set(snapshot.date, snapshot.date >= start ? ++count : 0);
    }
  }
  return { count, byDate };
}
