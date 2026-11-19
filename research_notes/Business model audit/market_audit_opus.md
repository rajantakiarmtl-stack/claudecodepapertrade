# Market demand and willingness-to-pay audit: small-cap/biotech "real filings, not hype" risk check

Auditor scope: market demand, willingness to pay (WTP), competition, acquisition. Legal/unit economics and data/technical edge are covered by other auditors, but an overall verdict is given here.

Audit date: 2026-11-19.

**Method caveat:** direct fetches of competitor sites failed in this environment. dilutiontracker.com, biopharmcatalyst.com, fdatracker.com, rttnews.com and trustmrr.com did not resolve. Every price and feature below therefore comes from search-engine excerpts and third-party pages, and several of them conflict. Treat prices as indicative and confirm them on the live pages before making any decision that depends on an exact number.

---

## Verdict

**Weak, as currently specified. Confidence: about 70%.**

It becomes "Viable with changes" only if the target customer and the distribution model change (see the "Changes that most improve the odds" section). The data pipeline is buildable and the problem is real, but the business has four problems:

1. The thesis aims at the **segment least likely to pay**: novice, hype-driven traders.
2. It offers **features that are already free** across at least eight sites.
3. It prices **below** the incumbents it would have to displace for the segment that does pay, experienced small-cap day traders. That segment already uses DilutionTracker, often bundled free by its broker.
4. The 1,000-payer target implies a conversion rate **10–30 times** above the category benchmark.

---

## 1. Competitive landscape: the core features are already free

### Dilution (the thesis's lead feature)

| Product | Price (indicative) | What's free | Source |
|---|---|---|---|
| DilutionTracker | About $49–60/mo, or $468–588/yr. Sources conflict, and a 70%-off promo was seen in 2026 | Free account shows cash runway and historical shares outstanding, but not the dilution rating. Also "open-access tickers" with limited daily views | [DayTradeReview via search](https://daytradereview.com/dilution-tracker-review), [FindMyMoat](https://www.findmymoat.com/vs/dilution-tracker-vs-the-fly-pro), [FindMyMoat](https://www.findmymoat.com/vs/calcbench-vs-dilution-tracker) |
| DilutionTracker via broker | **$0** to active clients of Cobra Trading and Centerpoint/Clear Street who meet volume thresholds (single-reviewer claim) | Entire paid product | [Curved Trading review](https://curvedtrading.com/articles/en/reviews/dilutiontracker-review/), [Centerpoint perks](https://centerpointsecurities.com/?p=25379) |
| AskEdgar | Pro $59/mo, 7-day trial; API dilution monitor $30–100/mo | Trial only | [AskEdgar pricing](https://askedgar.io/pricing), [API pricing](https://askedgar.io/api-pricing) |
| Tapeboard | Free / Pro $39/mo (about $24–31/mo annual) / Terminal $79/mo | Free: 7 days of S-1/S-3/F-1/F-3/424B filings with shelf and ATM tags, plus share-count history | [Tapeboard pricing](https://tapeboard.com/pricing), [Tapeboard vs DT](https://tapeboard.com/compare/dilutiontracker-alternative) |
| StockTitan | Free / $19.99 / $59.99 / $89.99 per month | Free: SEC filings and offerings feed with AI ("Rhea-AI") summaries on a 1–2 min delay | [StockTitan FAQ](https://stocktitan.net/faq), [Offerings feed](https://stocktitan.net/news/offerings.html) |
| CurvedTrading | Content/education site | Per-ticker dilution risk score and a public methodology page | [Methodology](https://curvedtrading.com/methodology/dilution-risk-score/) |
| **PumpProof** | **Free** | **Ticker in, 0–100 pump-and-dump risk score from SEC filings (shelf, ATM, going concern, late crowd arrival), every flag linked to its source document.** This is almost exactly the "real filings, not hype" pitch | [Product Hunt](https://www.producthunt.com/p/pumpproof) |
| PennyTune | Free, open-source CLI | Dilution and risk signals from SEC filings | [DEV.to](https://dev.to/lavellehatcherjr/penny-stock-due-diligence-from-your-terminal-a-free-cli-134b) |
| Edge to Trade, FlashSEC, Stocks Leak (launched June 2026) | Paid | n/a | [Edge to Trade](https://edgetotrade.com/features/dilution), [Stocks Leak](https://guygentile.com/articles/stocksleak-launch-real-time-sec-dilution-radar-for-traders) |

**Conclusion:** a free, filing-linked dilution and pump-risk page for any ticker **already exists**, in PumpProof, CurvedTrading, Tapeboard's free tier, StockTitan's free feed and DilutionTracker's free tier. The paid layer is a crowded field of at least six vendors priced at $39–60/mo, plus a market leader that brokers give away to the heaviest users. The founder's free page is not differentiated, and the $19 paid tier is below the price where serious buyers sit.

### FDA/biotech catalyst calendar

| Product | Price | Free? | Source |
|---|---|---|---|
| Benzinga FDA calendar | Free web; API is paid | Yes: exact dates, estimated dates, historical outcomes | [Benzinga FDA](https://www.benzinga.com/fda-calendar/pdufa), [historical](https://www.benzinga.com/fda-calendar/historical) |
| FDATracker | Free standard calendar; enhanced version needs sign-up | Yes: PDUFA and AdCom | [FDATracker](https://www.fdatracker.com/fda-calendar/) |
| RTTNews | Free 30-day email calendar; full calendar $99/mo | Partly | [RTTNews free](https://www.rttnews.com/products/fdacatalystcalendar.aspx), [paid](https://www.rttnews.com/products/biotechfdacalendar.aspx) |
| BiopharmaWatch | Free PDUFA calendar; Elite Plus about $189/mo; API from $99/mo | Yes | [PDUFA calendar](https://biopharmawatch.com/PDUFA-calendar), [subscription](https://biopharmawatch.com/subscription) |
| Merlintrader | Free calendar plus a filterable Google Sheet and 300+ ticker hubs | Yes | [Free calendar](https://www.merlintrader.com/free-catalyst-calendar/) |
| Dansfera | Free live catalyst calendar (PDUFA, AdCom, Phase 3 readouts) | Yes | [Dansfera](https://www.dansfera.com/) |
| TipRanks FDA calendar | Free view | Yes | [TipRanks](https://tipranks.com/calendars/fda) |
| Fintel biotech catalysts | Paid (Bronze about $15, Silver about $30, Gold $95/mo; unverified) | Preview only | [Fintel](https://fintel.io/bio-catalysts), [NexusFi](https://nexusfi.com/d/data-providers/fintel/) |
| BioPharmCatalyst | Paid tiers up to Elite/Elite Plus; 7-day trial; frequent "$1 for 3 months" and annual-sale promos; about 550 companies covered | Limited | [PRWeb](https://www.prweb.com/releases/biopharmcatalyst-introduces-enhanced-suite-of-tools-for-biotech-investment-community-805651582.html), [Scientist.com promo](https://info.scientist.com/biopharmcatalyst), [BusinessWire](https://www.businesswire.com/news/home/20240711495417/en) |
| BiopharmIQ | Custom quotes (search snippets show about $250/mo); aimed at corporate/BD, not retail | No | [BiopharmIQ pricing](https://www.biopharmiq.com/pricing) |

**Conclusion:** the FDA/PDUFA calendar is **fully commoditized at $0**, with at least seven free options. Ranking "high-impact" events by lead asset, market cap and cash is a nice touch but not a reason to pay. BioPharmCatalyst, the paid incumbent, still has to run $1-for-3-months promos, which signals limited WTP even among biotech specialists. The biotech universe is also small (about 550 covered names). Do not expect the calendar to carry subscriptions. At best it is SEO and email-capture bait.

### Insider, 13D/G and red flags

OpenInsider is free. Fintel, Quiver and SecForm4 cover Form 4. SEC trading suspensions and OTC tier status are public. A combined view of all of this has some value, but no single component has WTP on its own.

---

## 2. Do novice, pump-prone traders pay for research tools? Mostly no.

1. **The target user seeks hype rather than protection from it.** Leuz, Meyer, Muhn, Soltes and Hackethal studied about 470 illegal tout campaigns and found that a meaningful share of participants were experienced, aggressive short-term traders who **sought out** pump-and-dumps, believing they could exit first. The authors' original assumption, that warning flags would deter buyers, did not hold for this group ([HBS Working Knowledge](https://www.library.hbs.edu/working-knowledge/experienced-investors-who-think-they-can-beat-the-scam), [Chicago Booth Review](https://www.chicagobooth.edu/review/not-all-pump-and-dump-investors-are-gullible), [Phys.org](https://phys.org/news/2018-01-investors-stock-swindles.pdf)). Investors who followed touts lost about 31% on average. A "risk check" sells to the cautious minority, not to the core of the hype crowd.
2. **Where novices do spend, they buy picks and alerts, not risk analysis.** Paid penny-stock Discords charge about $20–100/mo, and Investors Underground charges about $3,564/yr ([Medium](https://medium.com/stock-trading/this-discord-stock-trading-group-is-helping-people-rake-in-large-gains-b49127424122), [Webull roundup](https://www.webull.com/news/15261439196161024), [Mel Magazine](https://melmagazine.com/en-us/story/discord-stock-trading-servers)). The thing they pay for is "tell me what will go up." A tool that mostly says "this is dangerous" sells against the user's own motivation.
3. **The current scam vector bypasses research tools entirely.** Bloomberg found that about a quarter of the 250+ companies listed on Nasdaq's smallest tier since 2023 were promoted in WhatsApp groups and then crashed or were suspended ([Bloomberg](https://www.bloomberg.com/graphics/2026-wall-street-apparent-pump-and-dump-investor-scam/)). FINRA says many victims "appear to be victims of social media scams" ([Investment Executive](https://www.investmentexecutive.com/news/from-the-regulators/ramp-and-dump-schemes-on-the-rise-finra-warns/)). These victims are groomed in private chats by fake advisers ([WSJ via Tiger](https://www-web.itiger.com/news/2543672848)). They are not Googling "TICKER dilution". The people most hurt are the least reachable by SEO and the least likely to pay $19/mo for a check they don't know they need.
4. **Demand is episodic.** A trader needs a risk check when a ticker starts running, which is a one-off lookup that a free page satisfies. A subscription needs a recurring job, such as alerts on a watchlist. Novices rarely hold stable watchlists of small caps for months. That points to high churn (see §3).
5. **The segment that does pay is experienced day traders who already have tools.** The DilutionTracker reviewer opens it "every time a small cap starts running" and gets it free through the broker ([Curved Trading](https://curvedtrading.com/articles/en/reviews/dilutiontracker-review/)). These users want speed (real-time filing parsing), float, borrow and short data, and warrant/convert detail. A free-government-data stack at $19 will be slower and shallower than the incumbents for exactly this user.
6. **Reddit evidence:** searches found no organic r/pennystocks or r/Biotechplays consensus that paid dilution or catalyst tools are must-haves. Those communities mainly circulate free sources (EDGAR, free calendars, DD posts). This is absence of evidence rather than proof, and the interview test in §6 checks it directly.

---

## 3. Conversion and the 1,000-payer goal

| Assumption | Registrations or visitors needed for 1,000 payers |
|---|---|
| Quiver benchmark, 0.7% (750K registered, about 5K paying, about $2M ARR, 7 staff, $2.5M VC raised) ([IB Madison](https://ibmadison.com/doubling-down-on-data/)) | about **143,000 registrations** |
| Generic freemium, 2–5% | 20,000–50,000 registrations |
| Founder's plan: 1,000 of 5,000–10,000 users | requires **10–20%**, a hard-paywall rate, which is inconsistent with a free per-ticker SEO strategy |

- **Churn makes it worse.** B2C subscription churn runs about 6.5%/mo on average ([Recurly benchmarks](https://recurly.com/research/churn-rate-benchmarks), [Chargebee](https://chargebee.com/blog/churn-benchmarks-churn-rate-retention-strategies)). Trading tools also follow market cycles. OTC Markets' non-professional data revenue fell **32%** in Q1 2026 and then rose **47%** in Q2, and its non-pro users fell from about 12.3K (FY24) to 10.1K (FY25) ([OTCM Q1 2026](https://in.marketscreener.com/news/otc-markets-group-reports-first-quarter-2026-financial-results-delivering-strong-revenue-operating-ce7f58d2df8af32d), [Q2 2026](https://www.stocktitan.net/news/OTCM/otc-markets-group-reports-second-quarter-2026-financial-results-5p6rzknsc39g.html), [StockAnalysis](https://stockanalysis.com/quote/otc/OTCM/financials/metrics/)). At 8% monthly churn, holding 1,000 payers means adding about **80 new payers every month**, which is about 4,000–11,000 new registrations a month at 0.7–2% conversion.
- **Realistic 12–24 month outcome for a solo founder (auditor's estimate):** 50–300 paying users, or about $1–6K MRR. Reaching 1,000 at $19 within 24 months probably has **under a 15% chance**, and much less without a breakout distribution channel. Quiver took years, VC funding and a team to reach 5K payers, and it had a more viral dataset (congressional trades).
- **SEO is the plausible channel but slow and contested.** Fintel, StockTitan (about 1.6–2.0M visits/mo, about 40% from Google; [Semrush](https://www.semrush.com/website/stocktitan.net/overview/)), Quiver, Benzinga, TipRanks and Merlintrader already rank for per-ticker small-cap and biotech queries. A new domain in a YMYL finance niche typically needs 6–12+ months to rank. Thin programmatic ticker pages also risk Google's scaled-content policies. One indie fintech founder reported "6 users, 0 MRR" after four months and concluded that SEO beats social, slowly ([Indie Hackers, EarningsScores](https://www.indiehackers.com/post/earningsscores-month-3-update-6-users-0-mrr-and-the-lesson-that-seo-beats-social-media-10x-for-fintech-eca5425950)).
- **Other channels:**
  - Reddit and Stocktwits: high reach, but self-promotion is policed, and r/pennystocks is about 1.9M members ([mirror](https://r-weld.vercel.app/r/pennystocks)).
  - X/FinTwit: useful for one-off virality, for example "this trending ticker has a $100M ATM on file."
  - Discord bots: the best fit, because they sit where the hype is.
  - Broker and newsletter partnerships: the way DilutionTracker reached its distribution.
  - Affiliate revenue from broker sign-ups: monetizes free users without needing a subscription.

---

## 4. Audience size and 2025–2026 activity

- **Retail is near record activity overall:** about $5.4T of retail stock and ETF trading in 2025, up about 47% and the highest since at least 2014. Retail is about 20–25% of volume, peaking around 35% in April 2025 ([Fortune/Vanda](https://fortune.com/2026/02/23/what-is-retail-trading-dumb-money-stock-markets-5-4-trillion-activity-2025/), [AP via WTOP](https://wtop.com/national/2026/02/from-dabblers-to-day-traders-small-investors-impact-on-wall-street-grows-even-in-volatile-market/)).
- **OTC dollar volume** was $691B in 2025, up 44.5%, but about $610B of it was international securities, not the U.S. pink-sheet microcaps the thesis targets ([OTC Markets](https://blog.otcmarkets.com/2026/01/14/otc-markets-2025-year-end-review-dollar-volume-up-44-5-to-691b/)).
- **The new-investor influx has cooled** (FINRA Foundation, Dec 2025, n = 2,861) ([ThinkAdvisor](https://www.thinkadvisor.com/amp/2025/12/05/pandemic-era-surge-of-new-investors-is-over/), [FINRA Foundation](https://www.finrafoundation.org/sites/finrafoundation/files/2025-11/NFCS_Investor_Survey_Report_White_Paper.pdf)). About 24% of investors get information from social media, skewing young. The "newer traders" pool is not growing fast.
- **Biotech** had a strong 12 months to April 2026 (XBI up about 58–81% trailing; about $12.7B of biotech ETP inflows YTD by April, from low-quality sources). That is supportive but cyclical. Biotech retail interest historically collapses in drawdowns.
- **Community sizes:** r/pennystocks about 1.9M, r/smallstreetbets about 511K ([Hive Index](https://thehiveindex.com/communities/r-smallstreetbets/)). r/Biotechplays is much smaller (no reliable count found).
- **Auditor's estimate of the serviceable paying market:** perhaps 50–200K U.S. retail traders pay for any small-cap or biotech tool today. Most of them are active day traders already served by DilutionTracker, Benzinga Pro, StockTitan, Tapeboard and others. The audience is large enough for a small business, but the thesis's chosen sub-segment (novices fleeing hype) has the lowest WTP inside it.

---

## 5. Top five reasons this fails

1. **Wrong customer.** Novice, hype-driven traders want upside tips. The research shows many knowingly chase pumps, and warnings do not deter them. Those who do want protection need it once per ticker, and a free page satisfies that. Low WTP plus high churn.
2. **Free substitutes for every core feature.** There are at least seven free FDA calendars and at least five free filing-linked dilution or pump-risk views, including PumpProof's near-identical free concept. The "combined checklist" is a thin wedge that a competitor (Tapeboard, StockTitan, Fintel) can ship in a sprint.
3. **The paying segment is locked up and underserved by a $0-data stack.** Serious small-cap traders already pay $39–60/mo, or get DilutionTracker free from their broker. What they value (speed, float, borrow, short interest, warrant terms, real-time pricing) is what the free-government-data constraint cannot deliver.
4. **The conversion and channel math don't close.** 1,000 payers needs about 50–143K registrations at realistic conversion. SEO takes 6–12+ months against entrenched domains. Churn of 6–10%/mo, amplified by market cycles, means running fast to stand still.
5. **Accuracy risk on a trust product.** A product sold as "real filings, not hype" loses credibility after one wrong PDUFA date or one mis-parsed shelf or ATM capacity. PDUFA dates scraped from press releases and 8-Ks are especially error-prone. Incumbents have staff who curate this data; a solo founder doesn't.

(Secondary risk: biotech catalysts are a small, cyclical niche of about 550 names, and the incumbent BioPharmCatalyst runs constant promotions, which suggests that segment is saturated.)

---

## 6. Changes that most improve the odds

1. **Change the customer, not just the features.** Pick one of two directions:
   - **(a) Experienced small-cap and biotech day traders.** Sell the one thing they lack, such as fast, accurate structured alerts on new 424B5s, ATM usage and warrant-exercise filings for a watchlist, delivered to Discord or Telegram within seconds, at $29–39/mo.
   - **(b) The protection-minded "careful retail" segment.** Retirees, Gen-Z beginners and parents of beginners, reached through education and finfluencers rather than through the pump crowd.

   Don't try to serve both.
2. **Distribute where the hype happens.** A **Discord or Telegram bot** (and later a browser extension) that auto-annotates any cashtag posted in a chat with its filing flags ("$XYZ: active $50M ATM, 4 months of cash runway, reverse split 6 months ago"). This turns a destination site nobody visits into ambient presence in the channels where pumps spread. Monetize per server ($20–100/mo per community) or B2B2C. One server owner can bring hundreds of users.
3. **B2B and white-label.** Sell the filing-flags API or widget to brokers, newsletters, Discord trading-group owners and finfluencers. This is how DilutionTracker reached heavy users through brokers. AskEdgar already prices a dilution API at $30–100/mo. Ten B2B accounts at $200–500/mo beat 300 retail subscribers on revenue and churn.
4. **Monetize free traffic without a subscription:** broker affiliate payouts (often $50–200+ per funded account), sponsorships, and a cheap "lifetime" or one-off report. Keep the subscription for alerts only.
5. **Drop or demote the FDA calendar as a paid feature.** It is fully commoditized. Keep it as free SEO and email capture.
6. **Reset the goal.** Use "first 100 payers in 6 months at ≥$25/mo with <6% monthly churn" as the go/no-go milestone, not "1,000 before any data spend."

---

## 7. Three cheap validation tests (under $200 each, under 4 weeks), run before buying any subscription

### Test 1: Pre-order fake door on trending tickers (about $100–150, 2–3 weeks)

- **Setup:**
  - Hand-build (or semi-automate) 20–30 "filing risk check" pages for tickers trending that week on r/pennystocks, Stocktwits and X.
  - Each page shows a free snapshot.
  - A CTA reads: "Get alerts when this ticker files a new offering, founding price $99/yr. Pay now; refunded if we don't launch in 60 days." Use Stripe Payment Links.
  - Drive traffic with value-first posts and comments, such as screenshots of real ATM or shelf facts on trending names, plus about $100 of Reddit or X ads.
- **Measure:** unique visitors, email sign-ups, paid pre-orders.
- **Pass:** at least 1,000 visitors, at least 3% email capture, **and at least 10 paid pre-orders** (about 1% visitor-to-paid).
- **Fail:** fewer than 4 pre-orders from at least 1,000 visitors, **or** you can't reach 1,000 visitors in 3 weeks (that is a distribution failure, which is also fatal).

### Test 2: Concierge alert service, then ask for money (about $0–50, 4 weeks)

- **Setup:**
  - Recruit 30–50 small-cap or biotech traders (Discord servers, r/smallstreetbets, Biotechplays, X DMs).
  - For 2 weeks, manually or with a script, send each person filing alerts for their 5–10 watchlist tickers by email or a Discord DM. Use EDGAR RSS only, so there is no paid data.
  - At day 14, ask them to pay $19/mo to continue (a Stripe link).
- **Measure:** the share who open or engage with alerts in week 2, and the paid conversion at the ask.
- **Pass:** at least 40% still engaged in week 2 **and at least 10% (≥4 of 40) pay.**
- **Fail:** fewer than 2 payers, or more than 60% go silent by week 2. Silence would confirm that the job is episodic rather than recurring.

### Test 3: Switching and price interviews with current tool payers (about $150, 2–3 weeks)

- **Setup:**
  - Run 15 thirty-minute interviews with traders who trade small caps or biotech at least weekly. Offer a $10 gift card each.
  - Ask about:
    - what they used for their last 3 small-cap or biotech trades;
    - what they pay for today and why;
    - the last time dilution or a catalyst burned them;
    - a Van Westendorp price ladder;
    - what would make them cancel their current tool or add this one.
  - Also run one "Discord bot" concept question, for example: "Would your server owner pay $X for auto-flagging cashtags?"
- **Pass:**
  - at least 6 of 15 currently pay for a comparable tool (proves WTP exists);
  - **and** at least 5 of 15 name the same specific, unmet need this product could fill (proves a wedge);
  - **and** the median "acceptable" price is at least $19.
- **Fail:** most say free sources (DilutionTracker free tier, Benzinga, StockTitan, EDGAR) are enough, **or** the unmet needs are scattered, **or** the only unmet needs are price, float, short or options data, which the $0 constraint can't provide.

**Decision rule:**
- Buy subscriptions (Tiingo and others) only if **at least two of the three tests pass**.
- If all three fail, do not build the consumer product. At most, pursue the B2B and API angle by pitching 10 Discord owners or newsletter writers directly.
- If only Test 3 passes with a clear wedge, rebuild the plan around that wedge.

---

## Summary

**Verdict: Weak (about 70% confidence).**

- The problem is real: ramp-and-dumps are a regulatory crisis in 2025–2026, and retail activity is near record levels.
- The proposed business is aimed at the wrong customer. The core features are free elsewhere, PumpProof is close to a direct clone at $0, and the calendar is fully commoditized.
- The price sits below the incumbents for the segment that actually pays, which already uses DilutionTracker at about $49–60 or gets it free from its broker.
- The 1,000-payer target implies conversion 10–30 times above the category benchmark.
- The best routes to viability are a narrower paying segment (active traders, fast structured dilution alerts at $29–39) and distribution embedded in hype channels (a Discord or Telegram bot), or B2B and white-label sales.
- Run the three tests above before spending on data.
