<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->

- Public dashboard data is read in the browser from public-read tables via `src/lib/tape-data.ts`; signups are written only by the `subscribe` server function (`src/lib/subscribe.functions.ts`) with the admin client, because the signups table has no public policies.
- Mount the analytics beacon once at the end of the root document body so every page shares one script.
- Keep the homepage share-image tags in its leaf head, not the root, so other pages do not inherit its image.

- Public editorial pages prime TanStack Query in SSR loaders using session-free publishable reads with safe projections; never query open positions for journal content, so public HTML contains only closed results.
- Published articles alone are public; keep drafts out of readers, related lists and sitemap queries to preserve publication boundaries.
- Sitemap static inventory comes from required route decisions; database collections paginate with stable unique ordering and fail rather than emit partial XML.
- All newsletter entry points reuse the consent-based signup form and existing subscribe handler to keep consent and storage behavior consistent.
