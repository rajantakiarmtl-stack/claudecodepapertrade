import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";
import { z } from "zod";

// Ad-hoc, per-worker in-memory limit: best effort only (resets when a worker recycles).
const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60_000;
const MAX_HITS = 5;
function limited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_HITS;
}

export const subscribe = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      email: z.string().trim().toLowerCase().email().max(254),
      consent: z.literal(true),
      consentText: z.string().min(10).max(500),
      source: z.string().max(50).optional(),
    }),
  )
  .handler(async ({ data }) => {
    const req = getRequest();
    const ip =
      req.headers.get("cf-connecting-ip") ?? req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
    if (limited(ip)) return { ok: false as const, error: "Too many attempts. Try again in a few minutes." };

    const { exec, cfEnv } = await import("./db.server");
    try {
      await exec(
        "insert into signups (email, consent_text, source) values (?, ?, ?) on conflict(email) do nothing",
        data.email, data.consentText, data.source ?? "landing",
      );
    } catch (error) {
      console.error("signup insert failed", error);
      return { ok: false as const, error: "Could not save your signup. Please try again." };
    }

    const key = cfEnv.BEEHIIV_API_KEY;
    const pub = cfEnv.BEEHIIV_PUBLICATION_ID;
    if (key && pub) {
      try {
        const res = await fetch(`https://api.beehiiv.com/v2/publications/${pub}/subscriptions`, {
          method: "POST",
          headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
          body: JSON.stringify({ email: data.email, reactivate_existing: false, send_welcome_email: true, utm_source: "showthetape" }),
        });
        if (res.ok) await exec("update signups set synced_to_beehiiv = 1 where email = ?", data.email);
        else console.error(`beehiiv ${res.status}: ${await res.text()}`);
      } catch (e) {
        console.error("beehiiv request failed", e);
      }
    }
    return { ok: true as const };
  });
