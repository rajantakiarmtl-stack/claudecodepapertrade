// Server-only access to the Cloudflare D1 database (binding "DB"). Never import from browser code.

type D1Value = string | number | null;
interface D1Result<T> { results: T[] }
interface D1Stmt { bind(...v: D1Value[]): D1Stmt; all<T>(): Promise<D1Result<T>>; first<T>(): Promise<T | null>; run(): Promise<unknown> }
interface D1 { prepare(sql: string): D1Stmt }

export interface Env { DB: D1; BEEHIIV_API_KEY?: string; BEEHIIV_PUBLICATION_ID?: string }
// nitro's cloudflare-module handler sets globalThis.__env__ to the Worker env on every request.
export const cfEnv = new Proxy({} as Env, {
  get: (_t, k) => {
    const e = (globalThis as { __env__?: Env }).__env__;
    if (!e) throw new Error("Cloudflare env is not available");
    return e[k as keyof Env];
  },
});

export async function rows<T>(sql: string, ...params: D1Value[]): Promise<T[]> {
  return (await cfEnv.DB.prepare(sql).bind(...params).all<T>()).results;
}
export async function row<T>(sql: string, ...params: D1Value[]): Promise<T | null> {
  return cfEnv.DB.prepare(sql).bind(...params).first<T>();
}
export async function exec(sql: string, ...params: D1Value[]) {
  return cfEnv.DB.prepare(sql).bind(...params).run();
}

// JSON-in-TEXT columns (Postgres arrays/jsonb before the move to D1).
export function parseJson<T>(v: unknown, fallback: T): T {
  if (typeof v !== "string") return (v as T) ?? fallback;
  try { return JSON.parse(v) as T; } catch { return fallback; }
}
