# Open-source GitHub projects for a retail "pre-trade check" tool built on free public data

Method: repo metadata (stars, last push `pushed_at`, SPDX license, archived flag) came from the GitHub Search API (`gh api search/repositories`) on 2026-11-18. Direct `gh api repos/...` reads were denied in this session. Feature details came from WebFetch of the GitHub README pages. "License" means GitHub's detected SPDX ID unless noted otherwise. "none" means GitHub detected no license file, which by default gives **no reuse rights**. Every repo listed below was confirmed to exist via the Search API.

## Catalog (as of 2026-11-18)

| Repo | Stars | Last push | License | Category / note |
|---|---|---|---|---|
| [dgunning/edgartools](https://github.com/dgunning/edgartools) | 2,859 | 2026-11-17 | MIT | SEC parser (10-K/Q, 8-K, XBRL, Form 3/4/5, 13F, N-PORT, ADV) |
| [jadchaar/sec-edgar-downloader](https://github.com/jadchaar/sec-edgar-downloader) | 723 | 2026-06-22 | MIT | Filing downloader |
| [sec-edgar/sec-edgar](https://github.com/sec-edgar/sec-edgar) | 1,423 | 2025-12-09 | Apache-2.0 | Bulk filing downloader |
| [manusimidt/py-xbrl](https://github.com/manusimidt/py-xbrl) | 154 | 2026-11-09 | **GPL-3.0** | XBRL/iXBRL parser |
| [lefterisloukas/edgar-crawler](https://github.com/lefterisloukas/edgar-crawler) | 555 | 2025-07-18 | **GPL-3.0** | 10-K item-section extraction to JSON |
| [SEC-API-io/sec-api-python](https://github.com/SEC-API-io/sec-api-python) | 325 | 2026-04-13 | MIT (client only; the API is paid) | Commercial SEC API client |
| [SEC-API-io/sec-api-node](https://github.com/SEC-API-io/sec-api-node) | 314 | 2026-04-29 | none | Commercial SEC API client |
| [Arelle/Arelle](https://github.com/Arelle/Arelle) | 260 | 2026-11-17 | NOASSERTION (not auto-detected) | Reference XBRL platform |
| [stefanoamorelli/sec-edgar-mcp](https://github.com/stefanoamorelli/sec-edgar-mcp) | 387 | 2026-11-01 | **AGPL-3.0** | SEC EDGAR MCP server |
| [sd3v/openinsiderData](https://github.com/sd3v/openinsiderData) | 84 | 2026-08-30 | none | OpenInsider scraper |
| [btopn/OpenInsider-MCP](https://github.com/btopn/OpenInsider-MCP) | 105 | 2026-08-07 | MIT | MCP server over OpenInsider data |
| [martinshkreli/13F](https://github.com/martinshkreli/13F) | 88 | 2025-04-30 | none | 13F analyzer (removes options holdings) |
| [CodeWritingCow/sec-web-scraper-13f](https://github.com/CodeWritingCow/sec-web-scraper-13f) | 49 | 2023-08-12 | MIT, **archived** | 13F scraper |
| [LuxAlgo/market-trackers](https://github.com/LuxAlgo/market-trackers) | 50 | 2026-11-02 | MIT | 18-dataset public-record pipeline (congress, insider, 13F, short volume, clinical trials, FDA, etc.) |
| [LuxAlgo/market-trackers-data](https://github.com/LuxAlgo/market-trackers-data) | 27 | 2026-09-24 | **CC0-1.0** | Daily data dumps from the pipeline above |
| [timothycarambat/senate-stock-watcher-data](https://github.com/timothycarambat/senate-stock-watcher-data) | 101 | 2021-03-16 | none | Stale Senate PTR JSON mirror |
| [TattooedHead/house-stock-watcher-data](https://github.com/TattooedHead/house-stock-watcher-data) | 1 | 2026-11-17 | none | Small, recent House PTR data repo |
| [LosingLoonies-Youtube/congress-trading-investigation](https://github.com/LosingLoonies-Youtube/congress-trading-investigation) | 48 | 2026-08-01 | MIT | Backtests of copying congressional trades |
| [daviddme/capitol-alpha-terminal](https://github.com/daviddme/capitol-alpha-terminal) | 13 | 2026-09-10 | none | Politician-trade terminal with backtests and "copyability" leaderboards |
| [unitedstates/congress-legislators](https://github.com/unitedstates/congress-legislators) | 2,471 | 2026-11-15 | CC0-1.0 | Member and committee metadata (for joining to trades) |
| [samgozman/short-fork](https://github.com/samgozman/short-fork) | 54 | 2026-10-16 | MIT | Multiples, insider selling, short-volume charts |
| [samgozman/tightshorts](https://github.com/samgozman/tightshorts) / [finra-short-api](https://github.com/samgozman/finra-short-api) | 14 / 12 | 2026-04-11 | MIT, **archived** | FINRA short-volume charts, parser and screener |
| [Yuvrajchandra/failstodeliver](https://github.com/Yuvrajchandra/failstodeliver) | 9 | 2021-03-17 | MIT | SEC FTD downloader (old) |
| [amor71/FINRAShortData](https://github.com/amor71/FINRAShortData) | 6 | 2022-09-23 | GPL-3.0 | FINRA daily short-data processor |
| [jvfe/pytrials](https://github.com/jvfe/pytrials) | 61 | 2026-08-04 | NOASSERTION | ClinicalTrials.gov API wrapper |
| [sachsmc/rclinicaltrials](https://github.com/sachsmc/rclinicaltrials) | 63 | 2019-04-18 | NOASSERTION | R ClinicalTrials.gov wrapper (old) |
| [jason5ng32/OhEarningsCal](https://github.com/jason5ng32/OhEarningsCal) | 570 | 2026-11-09 | none | Earnings dates as subscribable calendar (ICS) feeds |
| [wenboyu2/yahoo-earnings-calendar](https://github.com/wenboyu2/yahoo-earnings-calendar) | 193 | 2023-01-29 | MIT | Yahoo earnings-calendar scraper (stale) |
| [s-kerin/finance_calendars](https://github.com/s-kerin/finance_calendars) | 80 | 2021-08-22 | MIT | Nasdaq earnings, IPO and dividend calendar wrapper (stale) |
| [LemaireJean-Baptiste/eventstudy](https://github.com/LemaireJean-Baptiste/eventstudy) | 70 | 2023-12-22 | GPL-3.0 | Python financial event-study package |
| [setzler/eventStudy](https://github.com/setzler/eventStudy) | 75 | 2023-03-21 | MIT | R event-study package (econometrics, not market-model CARs) |
| [DocAMYMEI/CRATES](https://github.com/DocAMYMEI/CRATES) | 238 | 2025-06-22 | NOASSERTION | Cross-asset event-study toolkit |
| [lit26/finvizfinance](https://github.com/lit26/finvizfinance) | 1,789 | 2026-11-16 | MIT | Finviz scraper library (Finviz's terms apply to the data) |
| [mariostoev/finviz](https://github.com/mariostoev/finviz) | 1,370 | 2026-11-01 | MIT | Unofficial Finviz API |
| [deepentropy/tvscreener](https://github.com/deepentropy/tvscreener) | 1,770 | 2026-11-01 | Apache-2.0 | TradingView screener API wrapper |
| [xang1234/stock-screener](https://github.com/xang1234/stock-screener) | 423 | 2026-11-17 | Apache-2.0 | CANSLIM/Minervini screener, 80+ filters, breadth, group rank |
| [pkjmesra/PKScreener](https://github.com/pkjmesra/PKScreener) / [pranjal-joshi/Screeni-py](https://github.com/pranjal-joshi/Screeni-py) | 410 / 709 | 2026-10 / 2026-09 | MIT | NSE India breakout screeners (patterns are reusable) |
| [greeksoup/greeksoup-desk](https://github.com/greeksoup/greeksoup-desk) | 44 | 2026-11-16 | MIT | Local 16-screen research desk |
| [openbq-org/OpenBB](https://github.com/openbq-org/OpenBB) (badges still say OpenBB-finance/OpenBB) | 75,507 | 2026-11-15 | Apache-2.0 per LICENSE (GitHub shows NOASSERTION) | All-in-one data platform |
| [daniel3303/Equibles](https://github.com/daniel3303/Equibles) | 246 | 2026-11-18 | **AGPL-3.0** + CLA | Self-hosted financial-data MCP server and web portal |
| [JerBouma/FinanceToolkit](https://github.com/JerBouma/FinanceToolkit) | 5,535 | 2026-11-17 | MIT | Ratios and models library |
| [JerBouma/FinanceDatabase](https://github.com/JerBouma/FinanceDatabase) | 9,637 | 2026-11-17 | MIT | Database of 300k+ symbols with classifications |
| [simonlin1212/global-stock-data](https://github.com/simonlin1212/global-stock-data) | 1,889 | 2026-11-02 | Apache-2.0 | Zero-auth official-source toolkit with compliance tiers |
| [defeat-beta/defeatbeta-api](https://github.com/defeat-beta/defeatbeta-api) | 801 | 2026-11-10 | Apache-2.0 | Yahoo-Finance-alternative dataset API |
| [ranaroussi/yfinance](https://github.com/ranaroussi/yfinance) | 25,949 | 2026-11-15 | Apache-2.0 | Yahoo data (Yahoo's terms apply to the data) |
| [fidetolabs/qanat](https://github.com/fidetolabs/qanat) | 334 | 2026-11-14 | MIT | Point-in-time metrics platform for valuation and screening |
| [financial-datasets/mcp-server](https://github.com/financial-datasets/mcp-server) | 2,329 | 2025-06-05 | MIT | MCP server for a paid API |
| [alphavantage/alpha_vantage_mcp](https://github.com/alphavantage/alpha_vantage_mcp) | 227 | 2026-10-03 | MIT | Official Alpha Vantage MCP server |
| [Alex2Yang97/yahoo-finance-mcp](https://github.com/Alex2Yang97/yahoo-finance-mcp) | 371 | 2026-09-19 | MIT | Yahoo Finance MCP server |
| [massive-com/mcp_massive](https://github.com/massive-com/mcp_massive) | 404 | 2026-11-03 | MIT | MCP server for Massive.com (paid) |
| [alpacahq/alpaca-mcp-server](https://github.com/alpacahq/alpaca-mcp-server) | 1,096 | 2026-11-13 | MIT | Broker MCP server (trading, data) |
| [virattt/ai-hedge-fund](https://github.com/virattt/ai-hedge-fund) | 64,738 | 2026-11-09 | MIT | Multi-agent LLM "fund" |
| [virattt/dexter](https://github.com/virattt/dexter) | 27,847 | 2026-09-23 | none | Autonomous financial-research agent |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | 122,992 | 2026-11-17 | Apache-2.0 | Multi-agent LLM trading framework |
| [AI4Finance-Foundation/FinRobot](https://github.com/AI4Finance-Foundation/FinRobot) | 8,446 | 2026-10-24 | Apache-2.0 | AI-agent platform for finance |
| [agentii-ai/agentii-investment-intelligence](https://github.com/agentii-ai/agentii-investment-intelligence) | 210 | 2026-11-09 | Apache-2.0 | 25 equity-research agent skills |
| [wilsonfreitas/awesome-quant](https://github.com/wilsonfreitas/awesome-quant) | 30,696 | 2026-11-18 | none | Curated list for discovery |

Sources: GitHub Search API results for each repo listed (queries run 2026-11-18). Each repo URL above is its own source.

## Which repos give the most reusable, permissively licensed building blocks?

### Takeaway
The strongest permissive building blocks for a closed-source SaaS are **edgartools (MIT)**, **LuxAlgo market-trackers (MIT code, CC0 data)**, **OpenBB (now Apache-2.0)**, **simonlin1212/global-stock-data (Apache-2.0)**, **FinanceDatabase and FinanceToolkit (MIT)** and **sec-edgar-downloader / sec-edgar (MIT / Apache)**. **Equibles is the most feature-complete reference design, but it is AGPL-3.0**, so use it for ideas only. **py-xbrl, edgar-crawler (GPL-3.0) and sec-edgar-mcp (AGPL-3.0)** need care.

### Cited Findings
**SEC parsing**
- edgartools is MIT and parses 10-K, 10-Q, 8-K (with Item-level search such as Item 1.05), Form 3/4/5, 13F, N-PORT and proxies into typed Python objects and DataFrames. — [edgartools](https://github.com/dgunning/edgartools)
  - Its XBRL statements are standardized across filers, with Q4 derived from the 10-K and TTM values.
  - It also has full-text search since 2001, filing-to-markdown conversion for RAG, and an MCP server.
  - It stays within the SEC's 10 requests/second fair-access limit and has caching and offline storage.
  - Paid hosted options exist (edgar.tools).

**Public-record pipeline**
- LuxAlgo/market-trackers is "MIT code, CC0 data." — [LuxAlgo/market-trackers](https://github.com/LuxAlgo/market-trackers)
  - It ingests 18 primary sources: Senate eFD, House Clerk, EDGAR Forms 3/4/5, 13F-HR, USAspending, Senate LDA lobbying, FINRA Reg SHO daily short volume, ClinicalTrials.gov API v2, openFDA Drugs@FDA, CFTC COT, FEC, GovInfo, Fed feeds, Wikipedia pageviews and PatentsView.
  - It is a TypeScript monorepo with `core`, `mcp` and `cli` packages and zod schemas. It stores data in SQLite or Postgres, uses per-source watermarks for incremental sync, and runs daily canaries for source health.
  - Outputs are JSON deltas plus Parquet snapshots, RSS feeds per ticker and per member, and an MCP server.
  - Some sources, such as FINRA's OTC/ATS transparency product, are excluded from the dumps on licensing grounds.
  - At snapshot time its health board marked Senate eFD, House Clerk and CFTC COT as stale.
- The CC0 daily dumps are published in [LuxAlgo/market-trackers-data](https://github.com/LuxAlgo/market-trackers-data), which also contains a zero-build static explorer (explorer/index.html). — [LuxAlgo/market-trackers](https://github.com/LuxAlgo/market-trackers)

**OpenBB**
- The OpenBB LICENSE file now reads "All files in this repository are licensed under the Apache License, Version 2.0" (Copyright 2021-2026 OpenBB Inc.). — [OpenBB LICENSE](https://raw.githubusercontent.com/OpenBB-finance/OpenBB/develop/LICENSE)
- OpenBB moved from MIT to AGPL in May 2024. The V5 docs state that V5 is Apache-2.0 while V4 and earlier releases stay AGPL-3.0, and they cite PR #7677. — [OpenBB blog: license change to AGPL](https://openbb.co/blog/license-change-openbb-platform-goes-agpl/); [OpenBB docs license FAQ](https://docs.openbb.co/odp/python/faqs/license)
  - The date of the switch to Apache-2.0 was not found.
- The GitHub search API lists the repo under `openbq-org/OpenBB` with license NOASSERTION, while the README badges point to OpenBB-finance/OpenBB. — [GitHub openbq-org/OpenBB](https://github.com/openbq-org/OpenBB)
- OpenBB is now positioned as the "Open Data Platform" (ODP). It exposes data to Python, Excel, MCP and REST, and `openbb-api` launches a FastAPI server on port 6900. The UI ("OpenBB Workspace", pro.openbb.co) is a separate enterprise product. — [OpenBB README](https://github.com/openbq-org/OpenBB)

**global-stock-data**
- simonlin1212/global-stock-data is Apache-2.0. — [global-stock-data](https://github.com/simonlin1212/global-stock-data)
  - It grades each of its 18 sources by terms of use: S = commercial use and redistribution allowed; B = verify before commercial use, no redistribution; C = permission needed; D = terms prohibit automated access.
  - Examples: SEC EDGAR, Treasury, CFTC, Fed, NY Fed and BLS are tier S. FINRA short volume is tier B. CBOE options are tier C. Yahoo Finance and the Nasdaq earnings calendar are tier D.
  - It states that "official" does not mean "free to use."
  - Its Form 4 parser outputs trade date, shares, price, holdings after the trade, and the 10b5-1 checkbox. It also has a same-day filing stream, a 13F parser, and an "EDGAR frames" market screener over any XBRL tag.

**Equibles**
- Equibles is AGPL-3.0 with a CLA. — [Equibles](https://github.com/daniel3303/Equibles)

**Others**
- FinanceDatabase (MIT, 9.6k stars) is a database of 300k+ symbols across equities, ETFs, funds, indices, currencies, crypto and money markets. — [FinanceDatabase](https://github.com/JerBouma/FinanceDatabase)
- py-xbrl and edgar-crawler are GPL-3.0. sec-edgar-mcp is AGPL-3.0. — [py-xbrl](https://github.com/manusimidt/py-xbrl); [edgar-crawler](https://github.com/lefterisloukas/edgar-crawler); [sec-edgar-mcp](https://github.com/stefanoamorelli/sec-edgar-mcp)
- unitedstates/congress-legislators (CC0) provides member and committee data from 1789 to the present in YAML, JSON and CSV. — [congress-legislators](https://github.com/unitedstates/congress-legislators)

### Inferences
- **Recommended core stack for a closed SaaS:** edgartools for SEC data, market-trackers' ingest patterns and CC0 dumps for congress, insider, 13F, short-volume, ClinicalTrials and openFDA data, congress-legislators for committee joins, and FinanceDatabase for symbol and sector mapping.
  - All of these are MIT, Apache or CC0.
  - Market-trackers' CC0 dumps could also seed a backfill without writing scrapers.
- **OpenBB is no longer an AGPL risk for V5 code**, but anything forked from a V4-era tag stays AGPL. Pin to a V5 release.
- **GPL libraries (py-xbrl, edgar-crawler) used purely server-side** are generally not "distributed," so GPL obligations are not triggered for SaaS. AGPL closes that gap.
  - Avoid embedding Equibles or sec-edgar-mcp code.
  - Running Equibles unmodified as a separate internal service is a legal gray area that needs counsel.
- **The code license is not the data license.** global-stock-data's S/B/C/D tiering is the right mental model.
  - Wrappers around Finviz, Yahoo (yfinance), TradingView (tvscreener) and Nasdaq calendars are MIT or Apache code, but the underlying terms are restrictive, so they are unsuitable for a commercial product.

### Gaps
- Could not read the full OpenBB provider list or the exact date it moved to Apache-2.0. The reason for the `openbq-org` org name was not explained on the page.
- The defeatbeta-api README body did not render. Its data provenance (Yahoo-derived data on Hugging Face?) and data license are unconfirmed, beyond the Apache-2.0 code license and the description "open-source alternative to Yahoo Finance's market data APIs." — [defeatbeta-api](https://github.com/defeat-beta/defeatbeta-api)
- FinanceToolkit's data dependency (it is believed to require a Financial Modeling Prep key) was not verified in this session.

## Which features are already commoditized (free open source) vs. which are gaps?

### Takeaway
SEC filing parsing, XBRL fundamentals, Form 4 and 13F parsing, FINRA daily short volume, technical indicators, and MCP tool wrappers are thoroughly commoditized. Gaps or weakly served areas:
- reliable, maintained **congressional trade** ingestion (the original Stock Watcher projects are stale or dead);
- **FTD dashboards** (only stale micro-repos);
- **FDA PDUFA / biotech catalyst calendars** (no maintained OSS project found, apart from Equibles' FDA advisory-committee scraper and LuxAlgo's openFDA and ClinicalTrials ingestion);
- maintained, permissively licensed **earnings calendars** from free sources;
- packaged **earnings-drift / event-study** tooling;
- most importantly, a **synthesized per-ticker "pre-trade checklist"** that combines these signals with a retail-friendly verdict.

### Cited Findings
**Commoditized**
- **SEC parsing:** edgartools (MIT, active), sec-edgar-downloader (MIT), sec-edgar (Apache) and several XBRL tools are all available. — [edgartools](https://github.com/dgunning/edgartools); [sec-edgar-downloader](https://github.com/jadchaar/sec-edgar-downloader); [sec-edgar](https://github.com/sec-edgar/sec-edgar)
- **Insider trades and 13F:** both are covered by edgartools, global-stock-data, market-trackers and Equibles. OpenInsider-specific projects are small: openinsiderData has 84 stars and no license, and OpenInsider-MCP has 105 stars and is MIT. — [openinsiderData](https://github.com/sd3v/openinsiderData); [OpenInsider-MCP](https://github.com/btopn/OpenInsider-MCP)

**Congressional trades**
- timothycarambat/senate-stock-watcher-data was last pushed 2021-03-16 and has no license. — [senate-stock-watcher-data](https://github.com/timothycarambat/senate-stock-watcher-data)
- The house-stock-watcher-data repo under the same owner did not show up in the Search API. A third-party blog (around June 2026, per search snippet) reports that the HouseStockWatcher S3 bucket now returns 403 AccessDenied, and recommends pulling House Clerk PTRs and efdsearch.senate.gov directly. — [orthogonal.info blog (search snippet only; the page could not be fetched)](https://orthogonal.info/housestockwatcher-is-dead-heres-how-to-pull-the-latest-house-trades-yourself/)
  - This is a single unofficial report, and no operator statement was found.
- Maintained congressional ingestion exists in LuxAlgo market-trackers (Senate eFD and House Clerk, with an intraday fast lane) and in Equibles. — [market-trackers](https://github.com/LuxAlgo/market-trackers); [Equibles](https://github.com/daniel3303/Equibles)
- Congressional copy-trade backtests exist: congress-trading-investigation (MIT, 48 stars) and capitol-alpha-terminal (no license; "backtests on their real exits, copyability leaderboards"). — [congress-trading-investigation](https://github.com/LosingLoonies-Youtube/congress-trading-investigation); [capitol-alpha-terminal](https://github.com/daviddme/capitol-alpha-terminal)

**Short volume and FTD**
- **FINRA short volume:** the dedicated OSS is small or archived. TightShorts and finra-short-api are MIT and archived. FINRAShortData (GPL-3.0) was last pushed in 2022. — [tightshorts](https://github.com/samgozman/tightshorts); [finra-short-api](https://github.com/samgozman/finra-short-api); [FINRAShortData](https://github.com/amor71/FINRAShortData)
  - The data is covered inside larger toolkits: global-stock-data (short volume plus short interest with days-to-cover) and Equibles (short volume, FTD, short interest, `GetShortSqueezeScores`). — [global-stock-data](https://github.com/simonlin1212/global-stock-data); [Equibles](https://github.com/daniel3303/Equibles)
- **FTD:** the only dedicated repo found was failstodeliver (MIT, 9 stars, last push 2021). — [failstodeliver](https://github.com/Yuvrajchandra/failstodeliver)

**Catalysts**
- No maintained OSS PDUFA or biotech catalyst tracker was found. A search for "pdufa OR fda calendar OR biotech catalyst" returned zero repos above 3 stars. — GitHub Search API (2026-11-18)
- Equibles scrapes the FDA.gov advisory-committee meeting calendar (`GetFdaAdvisoryCommitteeMeetings`). — [Equibles](https://github.com/daniel3303/Equibles)
- LuxAlgo ingests ClinicalTrials.gov v2 and openFDA Drugs@FDA. — [market-trackers](https://github.com/LuxAlgo/market-trackers)
- ClinicalTrials.gov wrappers are small: pytrials has 61 stars (active 2026-08) and rclinicaltrials 63 stars (2019). — [pytrials](https://github.com/jvfe/pytrials); [rclinicaltrials](https://github.com/sachsmc/rclinicaltrials)

**Earnings calendars**
- OhEarningsCal (570 stars, active, no license) publishes earnings dates as calendar subscriptions. The Yahoo and Nasdaq calendar scrapers are MIT but stale (2021-2023). — [OhEarningsCal](https://github.com/jason5ng32/OhEarningsCal); [yahoo-earnings-calendar](https://github.com/wenboyu2/yahoo-earnings-calendar); [finance_calendars](https://github.com/s-kerin/finance_calendars)
- global-stock-data rates the Nasdaq earnings calendar as tier D, meaning the terms prohibit automated access. — [global-stock-data](https://github.com/simonlin1212/global-stock-data)

**Event studies and screeners**
- **Event study / drift:** the Python eventstudy package is GPL-3.0 (2023). CRATES has no standard license detected. No PEAD-specific maintained repo surfaced. — [eventstudy](https://github.com/LemaireJean-Baptiste/eventstudy); [CRATES](https://github.com/DocAMYMEI/CRATES)
- **Screeners:** xang1234/stock-screener (Apache-2.0, active) offers 80+ filters, CANSLIM/Minervini rules, breadth and group rank across 12 markets. qanat (MIT) computes point-in-time metrics for valuation and screening. — [stock-screener](https://github.com/xang1234/stock-screener); [qanat](https://github.com/fidetolabs/qanat)

**Paid Equibles Cloud features**
- Equibles Cloud charges for earnings transcripts, live quotes, options with Greeks, guidance, buybacks/ATM programs, an IPO feed, valuation multiples, a screener, index add/delete forecasts and portfolio tracking. Its free tier allows 100 requests/day. — [Equibles](https://github.com/daniel3303/Equibles)

### Inferences
- Commoditized building blocks should be reused, not rebuilt. The differentiation is in synthesis and UX.
  - One "pre-trade check" page per ticker would combine: insider cluster buys or sells, 10b5-1 flags, Form 144 proposed sales, congressional trades, short-volume ratio plus FTD spikes, upcoming earnings, FDA or clinical-trial catalysts, dilution risk (S-3/ATM/424B filings, 8-K items) and 13F ownership changes.
  - Each check would carry a plain-language explanation and a primary-source link.
- Equibles' paid tier is a useful signal of what a vendor considers monetizable beyond free data: options/Greeks, transcripts, guidance and dilution (ATM) tracking.
  - **Dilution/ATM tracking from free EDGAR filings** looks like an open gap worth building, since it is a premium item there.
- The congressional-data space has churned. A product that owns its own Senate eFD and House Clerk ingestion (PDF parsing for House PTRs), with health monitoring like LuxAlgo's canaries, has a durability advantage.

### Gaps
- No search was run for dilution, ATM or S-3 tracker repos specifically.
- A dedicated SEC FTD dashboard with an active OSS project was not found. This is absence of evidence from a limited search.
- The search for "capitol trades OR quiver OR house stock watcher" returned mostly irrelevant results, so smaller congressional clones may exist that were not surfaced.

## What UX patterns do popular projects use?

### Takeaway
The dominant patterns are:
- a **per-ticker hub with tabs** for each public-record dataset (Equibles);
- **leaderboard dashboards** ("top insider buys in the last 90 days", "most-shorted", "largest short volume");
- a **Cmd+K universal ticker search** with editable watchlists (greeksoup-desk);
- **month-grid catalyst calendars** and **ICS calendar subscriptions** (OhEarningsCal);
- **RSS feeds per ticker or member** (LuxAlgo);
- visible **data-source health / staleness boards**;
- increasingly, **MCP tool surfaces** that expose the same data to AI agents.

### Cited Findings
**Equibles**
- Architecture: .NET 10 (C#) services in Docker Compose, comprising `db` (ParadeDB, which is Postgres with pgvector and pg_search/BM25), `web` (:8080), `mcp` (:8081) and a scraper `worker`. — [Equibles](https://github.com/daniel3303/Equibles)
  - Optional Ollama embeddings (Qwen3-Embedding-0.6B) enable vector search.
  - MCP runs over streamable HTTP or stdio, and tools return Markdown by default.
  - FINRA and FRED keys are optional; without them those scrapers skip.
- Web portal: per-stock pages with tabs for holdings, short data, filings, financials, insiders, Form 144, NPORT, N-CEN, Form D and congressional trades. Charts include SMA, EMA, RSI, MACD, Bollinger Bands and performance vs. SPY.
- Other screens: a 90-day insider dashboard (top buys, top sells, large transactions), a most-shorted leaderboard, institution comparison and a "Smart Money Index", a holdings screener with CSV export, global search across stocks, institutions, insiders and members, and a system health/status page.
- MCP tools (README says 71, the About text says 64), grouped as: 13F (about 23, e.g. GetTopHolders, CompareInstitutionPortfolios), insider (GetInsiderTransactions, GetForm144ProposedSales), filings (SearchDocuments, ReadDocumentLines), XBRL (GetFinancialStatement, GetRevenueBreakdown), economic (GetEconomicCalendar), CFTC, volatility (GetPutCallRatios), FDA, congress (GetCongressionalTrades, GetMemberNetWorth), short data (GetShortVolume, GetShortSqueezeScores), prices/technicals and government contracts.

**greeksoup-desk**
- greeksoup-desk (MIT) is a local Python web app on localhost:8765 using TradingView Lightweight Charts (Apache-2.0, attribution required). It has 16 screens. — [greeksoup-desk](https://github.com/greeksoup/greeksoup-desk)
  - Calendar: earnings, ex-dividend dates and filings on month grids.
  - Funds: 13F with quarter-over-quarter changes, plus a 13D/G activist feed.
  - Flow: put/call ratio, OI walls, expected move, unusual strikes.
  - Short: FINRA short interest and daily short-volume ratio.
  - Capitol: trades for your own names and tracked members.
  - Risk: beta, drawdown, correlation, a 5% stress line, sector concentration.
  - Home: a Form 4 insider tape and an earnings countdown.
  - Cmd+K "any ticker" search.
  - It also has a market-session status dot and a transparent "Tell us" diagnostics button.

**LuxAlgo**
- RSS 2.0 feeds per dataset, ticker and congress member. A static GitHub Pages explorer. A data-health board showing per-source staleness. — [market-trackers](https://github.com/LuxAlgo/market-trackers)

**Calendars**
- OhEarningsCal delivers earnings dates as calendar-app subscriptions. — [OhEarningsCal](https://github.com/jason5ng32/OhEarningsCal)

**Data-source trust labels**
- global-stock-data labels every source with a compliance tier and notes semantic caveats, for example that the daily short-volume figure counts that day's short-sale trades, not open short positions. — [global-stock-data](https://github.com/simonlin1212/global-stock-data)

**AI agent projects**
- ai-hedge-fund (MIT, 64.7k stars) is now a terminal app using the Financial Datasets API. It has backtesting with an equity curve vs. a benchmark, paper trading with an approval step before trades, a kill switch, and a hash-chained session ledger. It carries an "educational and research purposes only" disclaimer. — [ai-hedge-fund](https://github.com/virattt/ai-hedge-fund)
  - The README did not list its investor-persona agents on the fetched page.
- financial-datasets/mcp-server (MIT) exposes 10 tools: get_income_statements, get_balance_sheets, get_cash_flow_statements, get_current_stock_price, get_historical_stock_prices, get_company_news, and four crypto tools. It requires a paid API key, and its last push was 2025-06-05. — [financial-datasets/mcp-server](https://github.com/financial-datasets/mcp-server)
- The Alpha Vantage MCP server is official and MIT-licensed. — [alpha_vantage_mcp](https://github.com/alphavantage/alpha_vantage_mcp)
  - Observed directly in this session's tool list: it exposes INSIDER_TRANSACTIONS, INSTITUTIONAL_HOLDINGS, CONGRESS_TRADES, EARNINGS_CALENDAR, EARNINGS_ESTIMATES, NEWS_SENTIMENT, technical indicators, and TOOL_LIST/TOOL_GET/TOOL_CALL meta-tools for progressive tool discovery.
- TradingAgents (Apache-2.0, about 123k stars) and FinRobot (Apache-2.0, 8.4k stars) are the largest multi-agent finance frameworks. — [TradingAgents](https://github.com/TauricResearch/TradingAgents); [FinRobot](https://github.com/AI4Finance-Foundation/FinRobot)

### Inferences
- UX ideas worth borrowing for a retail pre-trade check:
  1. A single ticker page with a traffic-light checklist summary at the top, and drill-down tabs per dataset (Equibles' tab model).
  2. A Cmd+K ticker search.
  3. A "last updated / source health" badge on every check (LuxAlgo canaries).
  4. A plain-English caveat tooltip on every metric, e.g. short volume is not short interest (global-stock-data).
  5. ICS and RSS subscriptions for catalysts and for insider or congress alerts on a watchlist.
  6. Leaderboards ("cluster insider buys this week", "highest short-volume ratio") as acquisition and SEO pages.
  7. An agent/MCP endpoint that mirrors the checks, using Alpha Vantage-style meta-tools to keep the tool count manageable.
- The popular agent projects (ai-hedge-fund, TradingAgents) mostly rely on paid data APIs (Financial Datasets). A free-public-data MCP surface is less commoditized, with Equibles (AGPL) and LuxAlgo (MIT) as the main examples.
- Every popular project carries prominent "not investment advice" disclaimers and human-approval gates. A pre-trade tool should copy that framing.

### Gaps
- Equibles' exact MCP tool count is inconsistent (64 vs. 71) on its own page.
- Screenshots and visual layouts were not inspected. The UX notes come from README text only.
- FinRobot, TradingAgents and dexter feature details were not fetched because of tool-call budget limits. Only metadata was verified.
