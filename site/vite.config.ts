// @lovable.dev/vite-tanstack-config already includes TanStack Start, React, Tailwind, tsconfig paths and
// nitro (Cloudflare Worker target). Do NOT add those plugins again.
// Hosting: Cloudflare Workers (worker "showthetape"), data in Cloudflare D1 (binding DB).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    server: { entry: "server" },
  },
  nitro: {
    preset: "cloudflare-module",
    cloudflare: {
      nodeCompat: true,
      deployConfig: true,
      wrangler: {
        name: "showthetape",
        compatibility_date: "2026-11-01",
        d1_databases: [
          { binding: "DB", database_name: "showthetape", database_id: "beb29444-a75b-47d8-a66c-8efbe74cb945" },
        ],
        vars: { BEEHIIV_PUBLICATION_ID: "pub_83f46803-ca52-47bb-8c22-ca8bda44d720" },
        observability: { enabled: true },
      },
    },
  },
});
