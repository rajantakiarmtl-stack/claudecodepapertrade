# Competitive Landscape and Retail Demand: Alt-Data / Pre-Trade Research Tools (as of Nov 2026)

> Method note: Direct fetches of vendor pricing pages (fintel.io, quiverquant.com, unusualwhales.com, dilutiontracker.com) were blocked by this session's network allowlist (DNS failure), so every figure below comes from web-search snippets. Most come from third-party review, affiliate or competitor comparison sites, which often disagree. Treat all prices as **indicative (UNVERIFIED against vendor pages)** unless marked otherwise. Primary Reddit threads were hard to reach via search; the complaint evidence is thinner than ideal.

## 1. Competitor profiles: data, pricing, free vs paid, traction, complaints

### Takeaway
The market clusters into (a) free or near-free government-data mirrors (OpenInsider, Capitol Trades, WhaleWisdom free tier), (b) $10-$30/mo alt-data and community tools (Quiver, Stocktwits Edge, Danelfin Plus, Barchart Premier, Simply Wall St, MarketBeat, TipRanks, Seeking Alpha), (c) $40-$80/mo trader tools (Unusual Whales, Finviz Elite, TrendSpider, Koyfin upper tiers, SecForm4, Fiscal.ai Pro, Earnings Whispers), and (d) $100+/mo pro news and terminal products (Benzinga Pro upper tiers, Perplexity Max). No profiled tool is built around a per-ticker "pre-trade risk" view. Dilution is a separate niche (DilutionTracker, DilutionWatch, Tapeboard).

### Cited Findings

**Unusual Whales (options flow, dark pool, congress trades, GEX)**
- Free tier delays data: options flow about 2 days late, news about 15 minutes late, alerts about 30 minutes late — [Tapeboard vs Unusual Whales](https://tapeboard.com/alternatives/unusual-whales) (competitor page)
- Paid: $48/mo monthly or $528/yr (about $44/mo) — [HoldingsIntel vs Unusual Whales](https://www.holdingsintel.com/vs/unusual-whales). Another source says $50/mo Premium (May 2026) — [TradingToolsHub pricing guide 2026](https://tradingtoolshub.com/blog/unusual-whales-pricing-guide-2026/). A third gives $448/yr annual — [OptionsTradingIQ review](https://optionstradingiq.com/unusual-whales-review/). These figures conflict.
- The API is priced separately from the dashboard and has been repriced more than once — [FlashAlpha](https://flashalpha.com/articles/unusual-whales-alternative-gex-dealer-positioning-analytics) (competitor)
- Traction: the newsletter is reported at more than 360,000 subscribers (date unclear; this is newsletter reach, not paid users) — [Reletter](https://reletter.com/publications/unusualwhales-newsletter). I found no verified paid-subscriber or revenue figure.
- Complaints: beginners get confused when they use flow data as a standalone signal; auto-renewal billing draws consistent complaints; the mobile apps are weaker than the web app; the tool is a poor fit for long-term holders — [Bullish Bears review](https://bullishbears.com/unusual-whales-review/), [DayTradingToolkit review 2026](https://daytradingtoolkit.com/reviews/unusual-whales-review), [OptionsTradingIQ](https://optionstradingiq.com/unusual-whales-review/)
- Acquisition: it runs many SEO landing pages ("lp/" pages for reviews, pricing, discount, and "vs" competitor pages) — [UW Reddit reviews LP](https://unusualwhales.com/lp/unusual-whales-reddit-reviews), [UW vs InsiderFinance](https://unusualwhales.com/lp/unusual-whales-vs-insiderfinance). It also sells enterprise plans — [UW Enterprise](https://unusualwhales.com/enterprise)

**Quiver Quantitative (congress trades, lobbying, gov contracts, insider, WSB sentiment, strategies)**
- Mid-2025: about $2M ARR, 750,000 registered free users, and more than 5,000 users paying about $30/mo. About 75% of revenue comes from web subscriptions and 25% from B2B/API — [In Business Madison, "Doubling down on data"](https://ibmadison.com/doubling-down-on-data/) (most credible traction figure found)
- The implied free-to-paid ratio is about 0.7% (5,000 / 750,000; registered users, not MAU) — calculated from the source above
- Price points: $25/mo with a 7-day trial — [NexusFi](https://nexusfi.com/d/data-providers/quiver-quantitative/); "$10-25/mo" — [Pineify](https://pineify.app/alternatives/quiver-quant). Ticker pages advertise "50% off your first year" — [Quiver CCJ page](https://www.quiverquant.com/congresstrading/stock/CCJ)
- Premium and API are separate subscriptions billed separately — [Quiver Premium vs API](https://www.quiverquant.com/premium-vs-api/)
- The iOS app is small: about 8.3K installs and about 2.2K MAU (third-party estimate) — [AppGoblin](https://appgoblin.info/apps/1568546369)
- Acquisition: programmatic per-ticker SEO pages (/congresstrading/stock/{TICKER}) — [Quiver RIVN](https://www.quiverquant.com/congresstrading/stock/RIVN); plus a beehiiv newsletter — [Quiver newsletter](https://quiverquant.beehiiv.com/p/quiver-premium-sneak-peak)
- Third-party estimates ($3M revenue, 40K users) conflict with the figures above — [Prospeo](https://prospeo.io/c/quiver-quantitative-revenue)

**Fintel (13F/ownership, insider, short interest, borrow rates, Short Squeeze Score)**
- Tiers: free public access plus Bronze, Silver and Gold paid tiers. Dollar amounts were not found — [FindMyMoat Fintel vs Stock Rover](https://www.findmymoat.com/vs/fintel-vs-stock-rover)
- The Short Squeeze Score is a multi-factor model scored 0-100 (50 = average). Short interest comes from FINRA's twice-monthly data — [Fintel FDVA short squeeze page](https://fintel.io/ss/us/fdva)
- Criticism: the score is proprietary and not fully documented — [Tapeboard vs Fintel](https://tapeboard.pages.dev/compare/fintel-alternative) (competitor)
- Acquisition: per-ticker short-squeeze SEO pages (/ss/us/{ticker}) and pages in many languages (zh-hant, zh-hans) — [Fintel zh-hant](https://fintel.io/zh-hant/); its data is cited in Nasdaq articles — [Nasdaq FTEL](https://www.nasdaq.com/articles/fitell-nasdaq-ftel-next-big-short-squeeze)

**OpenInsider / SecForm4 / WhaleWisdom / Capitol Trades**
- OpenInsider is free and a longtime favorite. Its cluster-buy and buy-only filters are highlights — [TIKR blog](https://www.tikr.com/blog/5-best-free-tools-to-track-insider-and-billionaire-hedge-fund-buying), [FindMyMoat insider tracker list](https://www.findmymoat.com/list/insider-trading-trackers)
- SecForm4 is paid-only, from $44.95/mo with a 7-day trial — [FindMyMoat SecForm4](https://www.findmymoat.com/vs/sec-edgar-company-filings-full-text-search-search-filings-vs-secform4-com)
- WhaleWisdom: free with no signup, paid from about $99/yr — [FindMyMoat insider list](https://www.findmymoat.com/list/free/insider-trading-trackers)
- Capitol Trades is completely free and has no email alerts — [DayTradeReview Insider Alerts review](https://daytradereview.com/insider-alerts-review), [NexusFi](https://nexusfi.com/d/data-providers/capitol-trades/)
- A newer congress tracker, Disclosed Capitol, offers a free feed and politician profiles. An account adds watchlists and alerts — [Disclosed Capitol plans](https://www.disclosedcapitol.com/plans)

**Finviz Elite / Koyfin / TrendSpider**
- Finviz Elite costs about $39.50/mo or $299.50/yr and is still a refresh-based screener, not a streaming one — [DayTradingz](https://daytradingz.com/finviz-alternatives/). AlphaSignal gives $39.99/mo or $299/yr — [AlphaSignal](https://alphasignal-56o.pages.dev/blog/trendspider-vs-finviz/)
- Koyfin's prices conflict: Plus $25 and Pro $65/mo per [ChartingLens](https://chartinglens.com/blog/best-finviz-alternatives), versus Plus $39 and Premium $79/mo per [Toolradar](https://toolradar.com/compare/finviz-vs-koyfin). It has a free tier.
- TrendSpider's prices conflict: $39/mo Basic and $79/mo Elite (annual) per [AlphaSignal](https://alphasignal-56o.pages.dev/blog/trendspider-vs-finviz/); $49.95/mo Essential per [DayTradingz](https://daytradingz.com/trendspider-alternatives/); from $54/mo per [Toolradar](https://toolradar.com/compare/finviz-vs-trendspider)

**Danelfin (AI score)**
- Free, Plus $29/mo, Pro $79/mo (pricing "subject to change") — [SoftwareFinder](https://softwarefinder.com/artificial-intelligence/danelfin)

**Earnings Whispers**
- Consumer "Investor" tier: $49.95/mo or $499.95/yr per one comparison, versus $25/mo per a review (conflict). Institutional data is "contact us" — [NexusFi](https://nexusfi.com/d/data-providers/earnings-whispers/), [DayTradeReview](https://daytradereview.com/earnings-whispers-review), [EW institutional](https://www.earningswhispers.com/institutional-data)

**BioPharmCatalyst / RTTNews FDA calendar**
- BioPharmCatalyst's free content includes a biotech IPO calendar, company info and daily or weekly updates. The premium price was not found — [U. Michigan Kresge guide](https://kresgeguides.bus.umich.edu/ESFIN329629)
- RTTNews: no data found.

**MarketBeat / TipRanks / Seeking Alpha**
- Seeking Alpha Premium costs $299/yr in 2026 (it was $239 in 2023 and $269 in 2024). Discounts to about $269 are frequent — [Financer review](https://financer.com/invest/seeking-alpha-premium-review/), [SA sitewide sale 2026](https://subscriptions.seekingalpha.com/lp_premium_sitewide_sale_2026/)
- MarketBeat All Access: $399/yr (about $33/mo) per one source, versus $249/yr or $29/mo monthly per another (conflict) — [TradingTools.review](https://tradingtools-directory.pages.dev/compare/marketbeat-vs-seeking-alpha/), [TheSmartInvestor](https://thesmartinvestor.com/investing/marketbeat-all-access-review)
- TipRanks Premium: $359/yr (about $30/mo), with no monthly plan — [TheSmartInvestor](https://thesmartinvestor.com/investing/seeking-alphavs-tipranks-premium)

**Stock Rover / Simply Wall St / Barchart**
- Stock Rover: $29-$79/mo ($348-$948/yr), self-reported and "verified Aug 2026" — [Stock Rover comparison page](https://www.stockrover.com/?p=46607) (vendor-biased)
- Simply Wall St: Premium $131.40/yr, Unlimited $258/yr — same [Stock Rover page](https://www.stockrover.com/?p=46607). Other sources say from $7.99/mo or $10.95/mo (conflict)
- Barchart Premier starts at $19.95/mo — [SourceForge compare](https://www.sourceforge.net/software/compare/Barchart-vs-Stock-Rover) (not confirmed by Barchart)

**ORTEX**
- ORTEX published "A New Pricing Structure for ORTEX", but the search snippet contained no figures — [ORTEX article](https://public.ortex.com/articles/a-new-pricing-structure-for-ortex). The price is UNVERIFIED.

**Benzinga Pro**
- Prices conflict widely: Basic about $37/mo, Essential about $197/mo, Pro Plus about $457/mo (with API and squawk) per [Subger](https://subger.com/en/service/benzinga-pro-sub); from $27/mo per [Capterra UK](https://capterra.co.uk/software/1031277/benzinga-pro); Basic $366.96/yr per [CreditDonkey](https://www.creditdonkey.com/benzinga/)

**Stocktwits**
- Edge costs $22.95/mo or $229.50/yr; Ad-Free costs $85/yr. Edge adds historical sentiment and advanced search — [Bullish Bears](https://bullishbears.com/stocktwits-review/), [Yespress (Oct 2026)](https://yespress.io/stocktwits)
- Users: the company claims more than 10M users (March 2026 PR, not MAU) — [Yespress](https://yespress.io/stocktwits). Benzinga cites 6M registered and more than 5M monthly (undated) — [Benzinga](https://benzinga.com/z/28114022)

**Dilution niche (DilutionTracker, DilutionWatch, Tapeboard)**
- DilutionTracker covers warrants, converts, cash runway, offering history and filing alerts for small caps. The price was not found — [Curved Trading](https://curvedtrading.com/articles/en/atm-offerings-shelf-registrations/), [Stock Dork review](https://www.thestockdork.com/?p=255335)
- DilutionWatch has a proprietary 0-100 composite dilution risk score with a float-risk sub-score (float, ADV, short %). Short-interest data appears to be paid — [DilutionWatch](https://dilutionwatch.com/)
- Tapeboard is a free alternative showing S-1, S-3, F-1, F-3 and 424B filings from the last 7 days with shelf and ATM tags — [Tapeboard vs DilutionTracker](https://tapeboard.com/compare/dilutiontracker-alternative)

**AI-native tools**
- Fiscal.ai (formerly FinChat; rebranded June 17, 2025). The free plan includes 10 annual and 6 quarterly periods of financials, 1 dashboard and 10 Copilot prompts per month. Pro is $49/mo and Max is $99/mo (as of Oct 1, 2026). It has a ChatGPT/Codex plugin and an API/MCP product — [Ryan O'Connell review](https://ryanoconnellfinance.com/fiscal-ai-review/), [DayTradingToolkit](https://daytradingtoolkit.com/reviews/finchat-review), [ToolCenter](https://www.toolcenter.ai/en/articles/finchat-review-2026). Other sources say "from $24" or "from $39" (conflict)
- Perplexity Finance: Core Finance is free; Pro is about $20/mo; it has earnings hubs, filing analysis, heatmaps and price alerts. A Plaid-linked "Portfolio" feature launched around March 2026. "Computer for Professional Finance" launched May 2026 (the date conflicts) on the Max tier at about $200/mo — [HelmTerminal](https://helmterminal.dev/blog/perplexity-stock-research), [GadgetBond](https://gadgetbond.com/perplexity-computer-for-professional-finance-launch/), [AIWiki](https://aiwiki.ai/wiki/perplexity_finance)
- Accuracy issue: a May 2026 test found Perplexity misread a thinly covered company's 10-K revenue by 1,000x — [HelmTerminal](https://helmterminal.dev/blog/perplexity-stock-research)

### Inferences
- The free layer for raw Form 4, congress and 13F data is effectively commoditized (OpenInsider, Capitol Trades, WhaleWisdom free tier, and now Alpha Vantage APIs). Reselling these raw feeds alone is weak. The value is in synthesis, alerts and context.
- Quiver is the best public benchmark for an alt-data retail SaaS: roughly $2M ARR from about 5K payers at about $30/mo after several years and 750K registrations. That is a ceiling-setting data point for a niche alt-data site.
- Per-ticker SEO pages are the dominant acquisition channel among these tools (Quiver, Fintel, Unusual Whales landing pages, MarketBeat).
- AI research assistants (Fiscal.ai, Perplexity) are converging on about $20-$50/mo and compete on fundamentals Q&A, not on event-risk checks. Their documented accuracy problems on small caps leave room for a deterministic, source-linked checklist.

### Gaps
- Official current prices for Fintel, ORTEX, DilutionTracker, BioPharmCatalyst, RTTNews, Capitol Trades (any paid tier) and Koyfin could not be verified (fetch blocked; snippets missing or conflicting).
- I found no Rallies.ai information.
- I found no Similarweb traffic numbers in the snippets.
- Unusual Whales revenue and paid subscriber count were not found.

## 2. Price points and conversion/churn benchmarks

### Takeaway
Retail willingness to pay clusters at about $20-$30/mo (or $200-$360/yr annual-only plans) for research and alt-data tools, and at about $40-$50/mo for active-trader tools (flow, scanners). Free-to-paid conversion in this category appears to be very low, about 1% or less of registrations (Quiver), versus generic freemium benchmarks of 2-5%.

### Cited Findings
- Quiver: about 0.7% of registered users pay about $30/mo — [IB Madison](https://ibmadison.com/doubling-down-on-data/)
- Generic subscription apps: freemium conversion averages 2-5%, with top performers at 6-8% (citing RevenueCat 2025) — [Phiture](https://phiture.com/mobilegrowthstack/how-to-determine-paywall-features-and-pricing-with-user-surveys/), [Adapty](https://adapty.io/blog/freemium-app-monetization-strategies/)
- Hard paywalls have a median download-to-paid conversion of 12.1% versus 2.2% for freemium — [ContentGrip](https://www.contentgrip.com/subscription-app-growth-playbook/)
- Finance apps benchmark lower on engagement; users open finance apps a few times a week — [Parsa VC benchmarks](https://parsa.substack.com/p/consumer-subscription-kpi-benchmarks-retention-engagement-and-conversion-rates-9ac13b57c3d3), [Plotline](https://plotline.so/blog/increase-free-to-paid-conversions-app)
- Annual-only or annual-led pricing is common: TipRanks has no monthly plan ($359/yr); Seeking Alpha is $299/yr; Stocktwits Edge is $229.50/yr — sources in Section 1
- Price creep: Seeking Alpha went from $239 to $269 to $299 between 2023 and 2026 — [Financer](https://financer.com/invest/seeking-alpha-premium-review/)
- Persistent first-year discounts (Quiver 50% off the first year; SA sitewide sales) — sources in Section 1

### Inferences
- A sweet spot for a new pre-trade check tool is probably about $15-$29/mo (or about $150-$250/yr), with a generous free per-ticker page for SEO. Charging $50+ requires real-time data or options flow, which is expensive to license.
- Delayed-data freemium (the Unusual Whales model) is the most common conversion lever: free is useful but late, and paid is real-time plus alerts.

### Gaps
- I found no published churn rates for any retail-investing SaaS.
- I found no category-specific trial-to-paid data.

## 3. Features that drive paid conversion

### Takeaway
Across tiers, the features paywalled consistently are real-time data versus delayed, alerts (email or push on filings, insider trades, flow), unlimited history, screeners, and proprietary scores. Alerts are the clearest dividing line between the free and paid tiers.

### Cited Findings
- The Unusual Whales free tier delays flow, news and alerts; paid removes the delay — [Tapeboard](https://tapeboard.com/alternatives/unusual-whales)
- Disclosed Capitol gates watchlists, alerts and higher usage limits behind an account; Capitol Trades has no alerts, which reviewers flag as a weakness — [Disclosed Capitol](https://www.disclosedcapitol.com/plans), [DayTradeReview](https://daytradereview.com/insider-alerts-review)
- DilutionTracker's paid features are offering history, cash-need context, dilution ratings and filing alerts — [Stock Dork](https://www.thestockdork.com/?p=255335)
- Proprietary scores as the paid hook: Fintel Short Squeeze Score, DilutionWatch dilution score, Danelfin AI score, TipRanks Smart Score — [Fintel](https://fintel.io/ss/us/fdva), [DilutionWatch](https://dilutionwatch.com/), [SoftwareFinder](https://softwarefinder.com/artificial-intelligence/danelfin)
- Fiscal.ai meters history depth and AI prompts on the free tier — [Ryan O'Connell](https://ryanoconnellfinance.com/fiscal-ai-review/)
- Stocktwits Edge sells historical sentiment and advanced search — [Yespress](https://yespress.io/stocktwits)

### Inferences
- For a pre-trade tool, the natural paywall is: free single-ticker checklist (delayed), paid watchlist-wide alerts when a risk flag flips (new 424B5, Form 4 sale, earnings date confirmed, borrow fee spike), and a portfolio scan.

### Gaps
- I found no A/B or survey data quantifying which feature drives conversion; the evidence above is inferred from how products are packaged.

## 4. Retail pain points in pre-trade research (Reddit and forum evidence)

### Takeaway
The recurring pains are: entering options positions without noticing upcoming earnings (IV crush, gaps), buying small caps right before ATM or shelf dilution, and having to piece together EDGAR, FINRA and calendar data by hand. Traders already use informal multi-item checklists, which signals demand for automation.

### Cited Findings
- A trader skipped the earnings-date check on an NOK call trade and then made it a mandatory pre-trade step — [blog](https://saltwaterbrc-net.pages.dev/blog/nok-earnings-lesson)
- A seller forgot earnings were that week, and the position hit max loss after a 12% drop — [ApexVol](https://apexvol.com/avoid/earnings-trading-mistakes)
- r/options: a trader asked why puts bought the day before earnings went nowhere; the answer was IV crush — [r/options thread (mirror)](https://lr.sudovanilla.org/r/options/comments/97ys23/deleted_by_user/e4e2c60/?context=3); NVDA calls fell while the stock rose — [Moomoo community](https://moomoo.com/community/feed/nvidia-nvda-us-can-anyone-answer-why-i-bought-calls-113521463132566)
- "Right on direction, still down" is a recurring theme — [Paragon Signals archive](https://buttondown.com/Paragon-Signals/archive/you-were-right-and-still-lost-money/)
- Dilution checks are manual today: find S-3 filings from the past 3 years and confirm they are effective; compare shelf size to market cap ("$200M on a $20M company" is an exit-liquidity setup); search for 424B5 filings and "at-the-market" or "equity distribution agreement"; apply the baby-shelf limit (1/3 of float per 12 months if public float is under $75M); look for unexplained stock-issuance proceeds — [Curved Trading ATM guide](https://curvedtrading.com/articles/en/investing/atm-offerings-shelf-registrations/), [Curved Trading dilution checklist](https://curvedtrading.com/articles/en/how/how-to-spot-dilution-sec-filings/)
- Small-cap offering announcements are associated with average declines of about 20-30% — [Stock Dork](https://www.thestockdork.com/?p=255335) (citing research; underlying study not verified)
- DIY one-page checklists already exist (float, insider buying, dilution, short interest, cash flow, next earnings date, 1-10 score) — [AI Driven Trading Substack](https://aidriventrading.substack.com/p/an-10x-high-risk-stock-model-i-follow); a Stocks Under Rocks post advises 5-9 items on one page, including insider selling and short interest — [Stocks Under Rocks](https://stocksunderrocks.substack.com/p/investment-checklists); the TradeBuddy day-trading checklist includes catalysts and dilution risk — [Scribd](https://www.scribd.com/document/461369966/TradeBuddy-Trading-Checklist)

### Inferences
- Earnings-date and IV-crush surprises are the most universal pain, affecting all options traders. Dilution is the most acute pain for small-cap and day traders, and the costliest per incident.

### Gaps
- Direct Reddit threads from r/stocks, r/Daytrading and r/algotrading were not surfaced by search. Lockup expirations, FDA-date surprises and ex-dividend (early-assignment) complaints were not directly evidenced in this pass and need a targeted Reddit search.

## 5. Gap analysis: is anyone doing a combined pre-trade check or trade risk score?

### Takeaway
I found no product that combines dilution, catalysts (earnings, FDA, lockup, ex-div), insider activity, short and borrow data, and earnings-reaction history into one per-ticker pre-trade page or score. Each tool scores a single dimension (Fintel for squeeze, DilutionWatch for dilution, Danelfin for an AI rating). This looks like a real gap.

### Cited Findings
- A search for a combined tool returned only single-dimension scores (DilutionWatch) and DIY templates, with "no single ready-made tool" combining the factors — [DilutionWatch](https://dilutionwatch.com/), [Substack checklist](https://aidriventrading.substack.com/p/an-10x-high-risk-stock-model-i-follow), [JournalPlus template](https://journalplus.co/templates/risk-management-checklist/)
- Single-factor scores exist: Fintel Short Squeeze Score (0-100) — [Fintel](https://fintel.io/ss/us/fdva); DilutionWatch dilution score with float, ADV and short % — [DilutionWatch](https://dilutionwatch.com/)
- Opaque scores draw criticism ("proprietary, not fully documented") — [Tapeboard](https://tapeboard.pages.dev/compare/fintel-alternative)
- Free building blocks exist: EDGAR (Form 4, S-3, 424B), FINRA short interest, earnings calendars — [Curved Trading](https://curvedtrading.com/articles/en/how/how-to-spot-dilution-sec-filings/)

### Inferences
- Underserved "pre-trade check" use cases retail traders would plausibly pay $15-$30/mo for:
  1. **Event-in-window warning**: does an earnings date, ex-dividend date, FDA PDUFA/AdCom date, lockup expiry or index rebalance fall before my option expiry or planned exit? Include the historical earnings move versus the current implied move.
  2. **Dilution risk flag**: an effective shelf, an active ATM (424B5), baby-shelf capacity remaining, outstanding warrants and converts, months of cash runway, and recent S-1/F-1 filings, all with links to filings.
  3. **Insider and congress pulse**: net open-market buys and sells over 90 days, with 10b5-1 versus discretionary sales separated and cluster buys flagged.
  4. **Short and borrow context**: SI % of float, days to cover, borrow fee and availability trend (FINRA data is twice-monthly; borrow data is usually licensed).
  5. **Portfolio or watchlist sweep with alerts** when any flag changes. This is the natural paid tier.
- Differentiation: transparent, rule-based flags with source links rather than a black-box score. This answers the "opaque score" criticism and the AI-hallucination issue (Perplexity's 1,000x 10-K error).
- Acquisition playbook seen in competitors: free per-ticker pages ("{TICKER} pre-trade check / dilution / next earnings") for SEO, a newsletter, social or X presence (Unusual Whales), "vs" comparison landing pages, and an API or MCP for developers (Fiscal.ai, Quiver).

### Gaps
- I did not search for or verify regulatory framing language (not-investment-advice disclaimers, the publisher's exclusion under the Investment Advisers Act / Lowe v. SEC). The industry norm is generic, impersonal content with "not investment advice" disclaimers, but this is unverified here and needs a targeted check of competitor terms pages.
- I could not confirm whether TipRanks, MarketBeat or Benzinga have added an aggregated per-ticker risk or catalyst panel in 2026 (fetch blocked).
