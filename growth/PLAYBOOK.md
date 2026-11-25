# Show The Tape: Growth Team Playbook

Goal: grow real visitors to https://showthetape.com from ~0 organic visits to a steady daily climb, and turn
visitors into email subscribers. Judged weekly on: organic visits/day (Cloudflare Web Analytics), visits from
search engines (referrer google/bing/duckduckgo), new signups, pages indexed.

The team runs from the "Show The Tape growth" scheduled task in the owner's main session. The owner wants it
fully autonomous: never ask the owner to do things; never wait for approval for the routine work below.

## Current status (update when it changes)
- 2026-11-25: Journal/Learn pages, robots.txt, IndexNow key file and /tape noindex exist in the Lovable code but
  are NOT deployed yet: the Lovable workspace dropped to the free plan and ran out of credits before the build
  was verified, and the /sitemap.xml route is still missing. Until a verified deploy: still write and publish
  articles to the `articles` table (they appear once deployed), but skip IndexNow pings and the Saturday Lovable
  fix message.

## The team (`.claude/agents/`)
| Agent | Job |
|---|---|
| `growth-analyst` | Pulls metrics (Cloudflare RUM GraphQL, signups table), updates `growth/scoreboard.md`, says what worked |
| `seo-strategist` | Keyword and topic research (WebSearch), keeps `growth/keywords.md`, writes the next article brief |
| `content-writer` | Writes one article from a brief into `growth/articles/<slug>.md` (front matter + markdown) |
| `compliance-editor` | Fact-checks, removes strategy secrets and advice, checks quality and originality; PASS or FIX list |
| `seo-auditor` | Weekly technical audit of the Lovable project code (meta, schema, sitemap, internal links, speed) |

## Daily routine (every day, 18:23 ET)
1. Analyst: metrics for yesterday and the trailing 7 days; append one line to `growth/scoreboard.md`.
2. If a new `daily_recaps` row exists since the last run, its `/journal/<date>` page is already live: submit it
   to IndexNow (below).
3. Content (Mon, Wed, Fri, Sun): strategist brief → writer draft → compliance-editor. Publish only on PASS
   (max 2 fix rounds). Insert into `articles` via Lovable `query_database`, then IndexNow the URL + /learn.
4. Saturday: seo-auditor runs; fix findings that are small via one Lovable `send_message` (batched, at most one
   per week to save credits), then `deploy_project` (name "showthetape").
5. Sunday: weekly review in `growth/weekly/<date>.md`: what moved, top pages, top queries/topics, next week's
   3 bets. Change course when something isn't working for 2 weeks.
6. Commit growth/ files and push. Push-notify the owner only on a failure or a milestone (first search visit,
   first organic signup, 10/50/100 visits a day).

## Content strategy
- Unique angle nobody else has: a real, public, AI-agent options experiment with every loss shown. Lean on the
  real data (journal days, closed trades, team decisions told at a story level).
- Pillars: (1) the experiment itself (how AI agent teams trade, weekly scoreboards, lessons), (2) options
  education explained with our real trades as examples (spreads, 0DTE, costs, volatility, rotation),
  (3) honest paper-vs-real trading costs, (4) AI agents for traders (what works, what doesn't).
- Target long-tail, question-shaped queries with low competition first ("what is a put debit spread",
  "0DTE spread exit cost", "paper trading vs real fills"), not head terms.
- Every article: 900-1,800 words, one clear question answered in the first 100 words, original examples from
  our data, a table or worked example, 3+ internal links (journal days, other articles, the landing page),
  an FAQ section of 3-5 questions, and the signup CTA (rendered by the site).

## Hard rules (never break)
- Not financial advice: educate, never tell readers to buy, sell or hold anything; no return promises.
- Strategy secrecy: never publish rule names, thresholds, indicator settings, entry windows, sizing rules,
  playbook/experiment codes, or any open position's contract, strike or expiry.
- Truth: every number comes from the ledger, payload, site database or a cited source. No invented stats,
  testimonials, reviews, fake scarcity, or fake social proof.
- Clean growth only: no spam, no link schemes or bought links, no comment/forum spamming, no AI-generated
  content farms, no doorway pages, no cloaking, no posting from the owner's accounts.
- Paper trading is always labelled as simulated.

## IndexNow (Bing, Yandex, Seznam, Naver)
Key: d922cb66b2eaa23cfa8841c9e2e8a656 (served at https://showthetape.com/d922cb66b2eaa23cfa8841c9e2e8a656.txt).
This container can't reach api.indexnow.org, so submit from the site's database with pg_net:
```sql
select net.http_post(
  url := 'https://api.indexnow.org/indexnow',
  body := jsonb_build_object('host','showthetape.com','key','d922cb66b2eaa23cfa8841c9e2e8a656',
    'keyLocation','https://showthetape.com/d922cb66b2eaa23cfa8841c9e2e8a656.txt',
    'urlList', jsonb_build_array('https://showthetape.com/learn/<slug>')),
  headers := '{"Content-Type":"application/json"}'::jsonb);
-- check: select status_code, created from net._http_response order by created desc limit 5;
```

## Metrics query (Cloudflare GraphQL via the cloudflare MCP execute tool)
Account 838b5842f089501504f0d0f7ed029732, site tag 228a8e358a824f68907820c614650c6f, dataset
`rumPageloadEventsAdaptiveGroups` (dimensions: date, requestPath, refererHost, countryName; sum.visits).
Signups: Lovable project d3a9340a-7645-45e9-85a5-dbe70c6bc472, `select count(*) from signups` (exclude the
owner's own address, the first gmail signup on 2026-11-22).

## Known limits
- Google: no Search Console access yet, so Google discovers pages through the sitemap and links; this is slower.
  If the owner ever connects Search Console, submit the sitemap there.
- No social accounts by the owner's choice (until there is more data). Revisit at 4 weeks of results.
