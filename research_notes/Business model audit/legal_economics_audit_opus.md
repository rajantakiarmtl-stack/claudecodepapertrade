# Devil's-advocate audit: small-cap and biotech "real filings, not hype" risk checker

Audit date: 2026-11-19. Lens: legal and regulatory risk, unit economics, distribution, founder execution. This audit builds on the prior report (`reports/Free trading data sources and features.md`) and adds new web research. Several primary sites (law.cornell.edu, cassels.com, trustmrr.com) could not be fetched from this environment. Those findings rest on search-engine excerpts and are marked. This is not legal advice. Every legal point below has to be confirmed by Canadian (Québec) and U.S. counsel.

---

## 1. Verdict

**Weak, as currently specified.** Confidence: **70%**.

The product is buildable and the legal risks can be managed. The business is the weak part. Four findings drive the verdict.

1. **A solo founder already tried this niche, with poor results.** "Dilutracker", a one-person bootstrapped dilution tool, shows **$1,455 MRR from 16 subscriptions and $7,217 in all-time revenue**, and its founder is selling it ([TrustMRR listing via search](https://trustmrr.com/startup/dilutracker)). The established incumbent, DilutionTracker, charges about **$49–$74/mo** and covers 2,300+ small and mid caps ([FindMyMoat](https://www.findmymoat.com/vs/dilution-tracker-vs-sec-gov-edgar); [DayTradeReview](https://daytradereview.com/dilution-tracker-review)). AskEdgar sells dilution and offering data at **$59/mo** ([AskEdgar pricing](https://askedgar.io/pricing)). StockTitan pushes every SEC filing for 10,000+ tickers with an AI impact score from 1 to 5, free on a one-to-two-minute delay ([StockTitan](https://www.stocktitan.net/how-our-feeds-work)). Benzinga runs a free FDA calendar, and BioPharmCatalyst offers a freemium one ([Benzinga FDA](https://www.benzinga.com/fda); [Benzinga on BPC](https://www.benzinga.com/general/biotech/19/07/14113089/biopharmcatalyst-a-research-tool-for-a-volatile-sector)). The "nobody combines it" gap is real but thin. Mostly it is a bundling gap, not a data gap.
2. **The conversion math needs traffic a solo founder is unlikely to reach in 24 months.** At a realistic 0.1% visit-to-paid rate and 9% monthly churn, **1,000 payers needs about 90,000 qualified visits every month, sustained**. The base case below reaches about **$3.4K MRR at month 24**, not $19K.
3. **The main free channel, per-ticker SEO, is being squeezed from three directions.** Google AI Overviews cut clicks by about 47–61% on the queries where they appear ([Pew via roundup](https://www.bloggersideas.com/?p=2161911); [Seer via PPC Land](https://ppc.land/google-ai-overviews-reduce-organic-ctr-61-paid-traffic-68/); [Ahrefs via Exposure Ninja](https://exposureninja.com/blog/google-ai-overviews-cut-publisher-clicks-by-39-8-what-cmos-should-do-next/)). Google's 2026 updates targeted scaled programmatic pages ([Digital Applied](https://www.digitalapplied.com/blog/programmatic-seo-after-march-2026-surviving-scaled-content-ban)). And incumbents with ten-year-old domains already own these keywords.
4. **The stated audience is the least likely to pay.** Novice OTC traders chasing Discord hype want upside, not a "this is risky" page. The traders who do pay for dilution data are experienced small-cap day traders, and they already pay DilutionTracker and expect institutional-grade accuracy.

**What would upgrade this to "Viable with changes":** (a) validate demand before building (pre-sales; see section 9); (b) narrow to one wedge that competitors do poorly, such as biotech catalyst plus cash-runway plus dilution for sub-$500M biotechs, aimed at experienced traders, not novices; (c) make distribution the main job: a daily public "filings that matter" feed on X, StockTwits and a newsletter, rather than programmatic SEO alone; (d) treat it as a side project with a $5K MRR goal, not a $19K MRR plan.

---

## 2. Legal and regulatory risk

### 2.1 Defamation and trade libel from issuers. Rating: medium likelihood, high severity

**What the case law shows.** Issuers sue critics often, and courts usually dismiss suits over short reports framed as opinion. Silvercorp v. Anthion (dismissed as protected opinion), Eros (dismissed), Cassava (dropped, and a judge then found plausible allegations that Cassava sued with actual malice) ([Harvard CorpGov](https://corpgov.law.harvard.edu/2012/10/18/lawsuit-against-short-sellers-dismissed-on-constitutional-grounds/); [Akin Gump](https://www.akingump.com/en/insights/alerts/new-york-court-dismisses-public-company-s-defamation-lawsuit); [Stockopedia on Cassava](https://www.stockopedia.com/share-prices/filana-therapeutics-NAQ:FLNA/news/biotech-firm-drops-defamation-suit-against-short-sellers-after-researcher-charged-019e6da1-4397-72b8-b308-0a815d451f36/)). Claims built on specific, provably false facts do survive. One of Techtronic's libel claims was allowed to proceed in 2025 ([Bloomberg Law](https://news.bloomberglaw.com/litigation/techtronics-libel-suit-against-short-seller-moves-forward)). Small caps sue platforms as well as authors. Quantum Cyber reportedly named **Stocktwits** as a defendant alongside a research firm ([BriefGlance](https://briefglance.com/companies/quantum-cyber-n-v/pulses/67376), a weak source). Datavault AI sued "Doe" posters on Stocktwits and LinkedIn and then Wolfpack Research ([Newsworthy](https://newsworthy.ai/curated/datavault-ai-inc-files-lawsuit-alleging-securities-fraud-and-def/202516851)). NanoViricides tried to unmask a Seeking Alpha author and lost ([Nieman Lab](https://www.niemanlab.org/2014/07/seeking-alpha-doesnt-have-to-reveal-the-identity-of-a-user-who-slammed-a-stock/)). Farmland Partners did unmask "Rota Fortunae".

**Why this product is exposed differently from a short seller.**
- **Your flags are factual assertions, not opinion.** "Active ATM", "SEC suspension", "shell company" and "non-reporting" are checkable facts. The opinion defense that saved most short sellers does not cover a wrong fact. Your defense is accuracy.
- **Section 230 does not cover content you generate.** The AOL stock-quote case protected AOL because third parties "alone created" the data ([EFF on Ben Ezra v. AOL](https://www.eff.org/issues/cda230/cases/ben-ezra-weinstein-co-v-america-online-inc)). Your algorithmic flags are your own content. Courts are split on algorithmic outputs ([Benesch](https://www.beneschlaw.com/insight/can-an-algorithm-commit-a-tort-the-circuit-split-over-section-230/pdf/)).
- **Québec is worse for defendants than common law.** Defamation there is ordinary fault-based liability under art. 1457 C.C.Q. Negligence can be enough, and truth is not a complete defense on its own ([Carter-Ruck Canada guide](https://international-media-law-guide.carter-ruck.com/law-guides/canada/); [CIPPIC](https://archived.cippic.ca/en/defamation-and-slapps); *Bou Malhab*). Anti-SLAPP protection there is art. 51 C.C.P. (dismissal of abusive proceedings), which is weaker than Ontario s.137.1 or BC's PPPA.
- **The most likely failures are data errors.** Examples: ticker reuse maps an old company's SEC suspension onto a new issuer; a terminated ATM is still shown as active; a warrant count is double-counted after a reverse split; an "8-K PDUFA date" is parsed from the wrong drug. With thousands of auto-generated pages, some errors are statistically certain.
- **The litigants match your target names.** Promoted microcaps in a "ramp" are exactly the issuers that sue, and suing generates PR for them. Even a meritless suit costs real money to defend. (No source found for typical defense costs. Five-figure CAD sums are a reasonable working assumption.)

**Mitigations (required, not optional):**
- Show facts with a quote from, and a link to, the filing. Avoid evaluative badges like "RED FLAG" or "High dilution risk". Use "3 of 6 dilution conditions present (see filings)", with the rule definitions published.
- Add a "data as of / last verified" stamp and a one-click **issuer correction channel** with a 48-hour SLA. Write down a correction policy and follow it. Prompt correction is your best evidence of good faith under Québec fault analysis.
- Hold no positions in covered names, or publish a trading policy. This blocks the "malice and motive" theory used against short sellers.
- Gate low-confidence parses: if the parser is not sure, show "unverified, see filing" instead of a flag.
- Incorporate before launch so the founder's personal assets are separated. Buy **media liability coverage**, not just tech E&O, because many tech E&O policies exclude defamation. Typical tech E&O runs about CAD $500–3,000/yr for small firms ([Summit](https://ai.summitcover.ca/tech-saas-cgl-eo-cyber-2025-costs); [Ratehub](https://www.ratehub.ca/insurance/business-insurance/professional-liability-insurance)). Media liability for financial content may cost more. Get quotes.

### 2.2 Securities-adviser registration

**U.S. (Advisers Act publisher exclusion).** *Lowe v. SEC* (1985) excludes bona fide publications of general and regular circulation that offer impersonal, disinterested commentary rather than "tipster" or touting material, and that are not timed to specific market activity ([Lowe text, govinfo](https://www.govinfo.gov/content/pkg/USREPORTS-472/pdf/USREPORTS-472-181.pdf); [MTSU summary](https://firstamendment.mtsu.edu/article/lowe-v-securities-and-exchange-commission/)). *Lingley v. Seeking Alpha* (S.D.N.Y., Aug. 2024) extended this to a modern subscription site. Content that updates "in response to ongoing market conditions" can still be "general and regular", and calling it "personalized" did not defeat the exclusion ([Katten](https://katten.com/insights/advisories/judge-dismisses-case-against-seeking-alpha-implications-for-publishers-of-financial-information); [GT Law](https://www.gtlaw.com/en/insights/2024/8/no-need-for-seeking-alpha-to-seek-registration)).

- **Watchlist alerts:** probably inside the exclusion if every subscriber watching ticker X gets the same factual alert ("new 424B5 filed"). Alerts are the riskiest feature because they are triggered by events. Keep them factual and identical for all users, and never add "consider selling".
- **"High-impact" catalyst markers:** acceptable if they follow a published rule (for example, "PDUFA date for a lead asset and market cap under $500M"). A proprietary score that ranks stocks to act on starts to look like a recommendation. Rename it "Scheduled binary event" with the rule disclosed.
- **Red lines:** any input of position size, cost basis or portfolio; "your risk"; buy/sell or "avoid"; Discord or chat Q&A about specific tickers; any founder positions in covered names.

**Canada (NI 31-103 s.8.25 "advising generally").** The exemption covers advice not tailored to the needs of the recipient. CSA/CIRO Staff Notice 31-369 (Dec. 11, 2025) says regulators read it narrowly. It also states that disclosure of financial interests is required even when the exemption applies, and that "not financial advice" boilerplate does not shield against the business trigger ([BCSC PDF](https://www.bcsc.bc.ca/-/media/PWS/New-Resources/Securities-Law/Instruments-and-Policies/Policy-3/31369-CSA-and-CIRO-Staff-Notice-December-11-2025.pdf); [DLA Piper](https://www.dlapiper.com/insights/publications/2026/01/canadian-regulators-put-social-media-promoters-on-notice); [Mondaq](https://www.mondaq.com/canada/securities/1755906/investor-protection-in-the-age-of-finfluencers-guidance-from-canadian-securities-regulators)). The notice also flags paid referral arrangements with registrants (for example, broker affiliate deals) under NI 31-103 referral rules. **Do not take broker affiliate money without counsel.**

**Québec.** Securities Act s.148: no one may act as an adviser unless registered ([2009 amending act](https://www.publicationsduquebec.gouv.qc.ca/fileadmin/Fichiers_client/lois_et_reglements/LoisAnnuelles/en/2009/2009C25A.PDF)). Regulation 31-103 applies in Québec as the AMF's concordant rule, so s.8.25 is available. The AMF is an active enforcer, and counsel should confirm there is no Québec-specific gloss. Verdict: **the product as described is probably inside the exemptions if it stays impersonal and factual.** The founder should get a written opinion before charging money.

### 2.3 Marketing to novice and vulnerable traders

No rule bans selling a research tool to novices. The regulatory climate is hostile to the surrounding ecosystem, though. CSA issued an April 2026 investor alert on social-media "ramp and dump" schemes via Discord, Telegram and WhatsApp ([NSSC](https://nssc.novascotia.ca/sites/default/files/docs/2026-04-16%20CSA%20Investor%20Alert%20Ramp%20and%20Dump%20clean%20cl%20107.pdf)). The SEC charged eight Twitter/Discord influencers in a $100M pump case ([GRIP](https://grip.globalrelay.com/eight-influencers-charged-in-100m-pump-and-dump-market-manipulation-scheme)). The SEC keeps a standing social-media-rumor alert ([Investor.gov](https://www.investor.gov/news-alerts/investor-alerts/updated-investor-alert-social-media-investing-stock-rumors)). The risks for this product:

- **Implied safety.** A "risk check" that shows no flags invites "your site said it was clean" claims. Never show "safe", "low risk" or green-check language. Use "No flags found in filings checked; absence of flags is not safety."
- **Québec Consumer Protection Act.** Consumer contracts generally cannot exclude liability for your own fault. Distance-contract and subscription-cancellation rules also apply. Your U.S.-style "as-is, no liability" ToS will be partly unenforceable against Québec consumers. Counsel should review it.
- **Touting adjacency.** If your pages rank for "{ticker} stock" during a pump, promoters may cite your neutral "catalyst" page as validation. Avoid hype-adjacent copy ("upcoming catalyst!").

### 2.4 Québec Law 25 (privacy) and Bill 96 (French)

- **Law 25** has no small-business exemption. The CEO (you) is the privacy officer by default. You must publish a privacy policy, keep a breach register, and do a **privacy impact assessment before sending personal information outside Québec**. That covers Supabase (U.S. region), Stripe, email vendors and analytics. Penalties reach CAD $25M or 4% of worldwide turnover ([CFIB Law 25](https://cfib-fcei.ca/quebec-law-25); [Hilotech wiki](https://hilotech.ca/en/wiki/law-25)). The work is cheap to do at the start and painful to retrofit. Collect only email, watchlist tickers and billing data. No portfolio import, and no broker OAuth.
- **Bill 96 / Charter of the French Language.** If you have an establishment in Québec and target the Québec market, commercial website content and **contracts of adhesion (ToS, subscription terms) must be available in French, with the French version provided first** ([CFIB Law 14](https://cfib-fcei.ca/en/site/qc-law-14-bill-96); [Gowling](https://gowlingwlg.com/insights-resources/articles/2022/quebec-bill-96-impacts-and-key-considerations/)). Budget for French ToS and privacy policy at minimum, and a French UI if you market in Québec. Counsel should advise on whether a U.S.-targeted English site qualifies for relief.

### 2.5 Payments

Stripe says it "is not able to support many financial services businesses, including investment ... services". Its list is representative, not exhaustive. A Japan-specific clause bars "tools on how to profit through trading" ([Stripe FAQ](https://support.stripe.com/questions/prohibited-and-restricted-business-list-faqs); [ConductAtlas](https://conductatlas.com/platform/stripe/stripe-restricted-businesses-list/japan-financial-trading-advisory-services-prohibited/)). A data and research subscription is usually accepted, but expect a review. Describe the business as "SEC-filing research data subscription". Never use "signals", "alerts to profit" or "trade ideas". Keep a backup processor ready, and never hold annual prepayments you could not refund if the account were frozen. Fees on a Canadian account are about **2.9% + CA$0.30 domestic, plus about 0.8% for international cards, plus about 2% for currency conversion** ([Venn](https://www.venn.ca/resources/stripe-fees-in-canada-for-cross-border-and-fx-sales); [Xero](https://www.xero.com/my/pricing-plans/pricing-and-fees-for-stripe/)). For a mostly U.S. audience, open a USD settlement account to avoid the FX fee.

### 2.6 Data-rights gaps that undercut the OTC promise (new finding)

- **The OTC/pink-sheet audience is where free U.S. government data is weakest.** Many Pink issuers publish under OTC Markets' Alternative Reporting Standard on OTC Markets' own disclosure service, not on EDGAR (background knowledge; verify). OTC tier labels, "Caveat Emptor" and "Shell Risk" are **OTC Markets' proprietary designations**. OTC Markets licenses derived data at about **$1,500–2,500/mo** ([OTCM fee schedule](https://www.otcmarkets.com/market-data/fee-schedule); [OTCM Market Data Policies](https://www.otcmarkets.com/files/OTCM%20Market%20Data%20Policies-v4.0.pdf)). Without that license you can show only EDGAR facts: the shell-company check box on the 10-K cover, SEC trading suspensions, enforcement releases, and "no EDGAR filings in N months". That is useful, but not the full "OTC red-flag" product the pitch implies.
- **The Tiingo price is unconfirmed.** Current Tiingo pages say redistribution is by quote through sales, with no public price ([Tiingo docs](https://api.tiingo.com/documentation); [Massive vs Tiingo](https://massive.com/compare/massive-vs-tiingo.md)). The prior report's $250/mo figure may be stale. Get a written quote before you plan around it.

---

## 3. Unit economics and a 24-month P&L

### 3.1 Benchmarks

| Metric | Benchmark | Source |
|---|---|---|
| Registration to paid (finance data freemium) | ~0.7% (Quiver: 5K paid / 750K registered) | [IB Madison](https://ibmadison.com/doubling-down-on-data/) |
| Freemium trial to paid, day 35 (apps) | 2.1% median (hard paywall 10.7%) | [RevenueCat SOSA 2026 via PPC Land](https://ppc.land/95-of-annual-app-subscribers-who-cancel-never-return-revenuecat-finds/) |
| One-year retention of payers | ~27–28% | Same |
| Healthy monthly churn (generic subscription) | ~4%; consumer categories 10–20% | [Recurly](https://docs.recurly.com/docs/subscriber-churn-benchmarks); [Stripe](https://stripe.com/resources/more/customer-churn-rates-101) |
| Trading tools | No public benchmark found. Usage is tied to market activity, and traders cancel in quiet tapes. Assume 8–13% monthly on monthly plans. | Inference |
| Direct solo comparable | Dilutracker: 16 subs, $1,455 MRR, founder selling | [TrustMRR via search](https://trustmrr.com/startup/dilutracker) |

### 3.2 Model (scratch model; launch in month 4 after a 3-month build)

Assumptions. Visit-to-paid is measured per monthly unique visit. Net ARPU is after Stripe fees and an annual-plan mix ($179/yr ≈ $14.92/mo).

| | Bear | Base | Bull |
|---|---|---|---|
| Monthly visits at launch → month 24 | 500 → 15K | 1.5K → 50K | 3K → 200K |
| Visit → paid per month | 0.05% | 0.10% | 0.20% |
| Monthly churn | 13% | 9% | 6% |
| Net ARPU | $15.5 | $16 | $16.5 |

**Revenue table (MRR, USD):**

| Month | Bear payers / MRR | Base payers / MRR | Bull payers / MRR |
|---|---|---|---|
| 6 | 1 / $12 | 5 / $80 | 21 / $350 |
| 9 | 2 / $30 | 12 / $200 | 58 / $960 |
| 12 | 3 / $50 | 24 / $380 | 124 / $2,040 |
| 18 | 10 / $160 | 73 / $1,160 | 469 / $7,730 |
| 24 | 28 / $440 | 211 / $3,370 | 1,675 / $27,600 |
| 24-month cumulative revenue | ~$2.6K | ~$19.8K | ~$141K |
| $5K MRR reached | Never in 24 months | ~month 27–30 | ~month 16 |
| $19K MRR reached | Never | Not within 36 months unless traffic keeps compounding | ~month 23 |

**The key constraint:** steady-state payers ≈ (monthly visits × visit-to-paid rate) ÷ churn. For 1,000 payers:

| Visit → paid | Churn 6% | Churn 9% | Churn 13% |
|---|---|---|---|
| 0.05% | 120K visits/mo | 180K | 260K |
| 0.10% | 60K | **90K** | 130K |
| 0.20% | 30K | 45K | 65K |

The bull case needs 200K monthly visits by month 24 *and* best-in-class conversion. That is roughly what happens if the product catches a viral moment in a small-cap mania. Probability estimate: about 10–15%.

### 3.3 Costs, 24 months (USD unless noted; these are estimates)

| Item | When | Cost |
|---|---|---|
| Supabase | Free in build; Pro at launch | $25/mo base + compute; a Small or Medium instance takes it to ~$60–150/mo ([MakerKit](https://makerkit.dev/blog/saas/supabase-pricing)) |
| Worker host (Hetzner/Fly/Railway) | Build | $5–25/mo |
| Transactional email (Resend/Postmark) | Launch | $0–20/mo, rising with alert volume |
| AI coding subscriptions | Now | $20–200/mo (largest discretionary line) |
| Domain, Cloudflare, uptime, error tracking | Build | ~$10/mo |
| Stripe | Per charge | ~3.7% + $0.30 per international card charge; on $19 that is ≈ $1.00 (5.3%) |
| Incorporation (federal or Québec) | Before launch | ~CAD $300–1,000 one-time |
| Legal opinion (securities + defamation-aware ToS + Law 25 + French ToS) | Before charging | ~CAD $4K–12K (estimate; get fixed-fee quotes) |
| French translation of ToS, privacy policy and key UI | Before launch | ~CAD $500–2,000 |
| Insurance: media liability + tech E&O + cyber | Before launch | ~CAD $1.5K–4K/yr (estimate; quote required) |
| Price data license (Tiingo or other) | After traction gate | Quote-based; plan for $250–500/mo |
| OTC Markets derived data | Probably never at this scale | $1,500–2,500/mo |

**24-month cash P&L (base case, excluding founder salary).** Revenue ~$19.8K. Costs ~$18–28K: infrastructure ~$2.5K, AI tools ~$2.5–4.8K, legal ~$3–9K, insurance ~$2–5K, a price license from month 14 ~$2.5–5K, and miscellaneous. **Result: roughly −$8K to +$2K cash, for about 1,500–2,500 unpaid founder hours.** The bear case loses about $15–20K. The bull case clears about $100K.

---

## 4. Distribution: can a solo founder get 50–100K qualified visits a month?

| Channel | Reality in 2026 | Verdict |
|---|---|---|
| **Programmatic per-ticker SEO** | AI Overviews cut organic clicks ~47–61% where they appear, and finance queries trigger them often ([upgrowth fintech](https://upgrowth.in/why-fintech-organic-traffic-dropped-ai-overviews/)). Google's 2026 core and spam updates hit thin templated pages ([Digital Applied](https://www.digitalapplied.com/blog/scaled-content-abuse-google-march-update-ai-pages-decimated)). Yahoo, MarketBeat, StockTitan, Fintel and Stocktwits already rank on "{TICKER} stock". New domains take 6–12+ months to earn trust on YMYL (finance) topics. | **Supporting channel only.** Long-tail queries such as "{ticker} ATM offering", "{ticker} reverse split history" and "{ticker} PDUFA" are winnable but low volume. Ship 500 deep pages, not 10,000 thin ones. |
| **Google Ads** | Financial Services Verification extends to the U.S. and Canada in early 2027 ([Google blog](https://blog.google/products/ads-commerce/financial-services-verification-united-states-canada/); [Search Engine Land](https://searchengineland.com/google-expands-financial-services-ad-verification-to-the-us-and-canada-497503)). Whether research publishers fall in scope is unclear. Finance CPCs are high. | **Do not rely on it.** With LTV ≈ $16 × ~8 months ≈ $130, paid search almost certainly loses money. |
| **Meta ads** | Financial-products Special Ad Category with restricted targeting in the U.S. and Canada ([Meta dev docs](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/special-ad-category); [Meta policy](https://transparency.meta.com/policies/ad-standards/restricted-goods-services/financial-services/)). | Poor fit and expensive. Skip. |
| **Reddit** | r/pennystocks banned all forms of promotion in 2021; sister subreddits ban personal websites and newsletters ([Bloomberg](https://www.bloomberg.com/news/articles/2021-01-15/penny-stock-reddit-thread-cracks-down-on-shills-as-users-surge); [Infobae](https://www.infobae.com/en/2021/01/15/penny-stock-reddit-thread-cracks-down-on-shills-as-users-surge)). | Value-first posts only (for example, a full dilution breakdown with no link). Slow, and accounts get banned. |
| **X / StockTwits / Bluesky** | Where the target audience lives. "Real filings" threads on hyped tickers can spread. | **The best channel, but it is a daily content job.** Post 1–3 filing breakdowns a day on the tickers trending that day. Every post invites issuer anger, so it is also defamation exposure (see 2.1). |
| **YouTube / TikTok** | Small-cap educators have audiences (for example, Curved Trading writes dilution guides). | **Partnerships or affiliates beat creating your own videos.** Pay rev-share, not CPM. Check the CSA 31-369 disclosure rules before paying finfluencers. |
| **Newsletter** ("This week's dilution and FDA calendar") | Cheapest owned channel. | **Do it from day 1.** It is also the best validation instrument. |
| **AI-assistant citations (GEO)** | LLMs cite structured, sourced pages. | Small upside. Structured data and an llms.txt are cheap to add. |

**Bottom line on distribution:** the founder has to become a daily content creator on X/StockTwits plus a weekly newsletter writer. The product is secondary to that. Founders who want to "build the site and let SEO work" fail in this category.

---

## 5. Market timing

- Retail activity is near a cycle high. Sub-$1 stocks were a record **~47% of U.S. equity volume on June 12, 2025** (Goldman, via [iTiger](https://www.itiger.com/news/2548501774) and [IEX](https://www.iex.io/article/subdollar-stock-trading-surge)). Citadel reported May–June 2026 cash-equity ADV **65% above 2025** (Citadel H1 2026 report as quoted in a search summary; primary URL not retrieved, so verify). Bloomberg describes meme traders "growing up" rather than disappearing ([Bloomberg Opinion](https://www.bloomberg.com/opinion/articles/2025-11-26/after-gamestop-meme-stock-traders-are-growing-up)). Retail flow rotated into heavily shorted small caps in mid-2026.
- Biotech: RBC says XBI is **up ~80% over the past year**, much of it since June 2026, and 55% of surveyed investors now call biotech fairly valued ([RBC CM, Sept 2026](https://www.rbccm.com/en/insights/2026/09/whats-driving-biotechs-latest-rally)). Stocktwits retail sentiment on XBI nevertheless hit a record low of 21/100 ([Stocktwits](https://stocktwits.com/news-articles/markets/equity/biotech-next-breakout-trade-sentiment-never-been-lower/cZZniz5R7xX)). Institutional money is in; retail is not, yet.
- **What this means:** a 3–6 month build means launch in roughly Q2 2026-27, possibly after the retail small-cap wave has peaked. Small-cap mania produces signups, and its end produces churn. The 2021 cycle showed OTC volume up ~10–20x and then collapsing ([Sherwood](https://www.sherwood.news/business/penny-stock-trades-exploded-over-counter-markets/); [IBKR](https://www.interactivebrokers.com/campus/traders-insight/securities/stocks/pennies-from-heaven/)). A biotech-catalyst angle is less cyclical than OTC hype, because PDUFA dates keep coming. That is another reason to lead with biotech.

---

## 6. Execution: what kills solo fintech data side projects

1. **Data QA does not scale with AI-written code.** Dilution facts live in prose: S-3 and 424B5 text, warrant exercise terms, ATM agreements, reset clauses. They are not in XBRL. AI coding assistants help you write the parser. They do not catch the 5% of filings with odd structures, and those errors become the defamation risk. Competitors like DilutionTracker reportedly rely on human review.
2. **Maintenance treadmill:** EDGAR format changes, ticker reuse, reverse splits, CIK and share-class mapping, ClinicalTrials.gov API changes, FDA AdCom page scraping breaking.
3. **Distribution never happens.** The founder keeps building features because building is more comfortable than daily posting (a common Indie Hackers pattern: "don't conflate sign-ups with validated demand", [IH post](https://www.indiehackers.com/post/closed-my-project-after-a-one-week-validation-sharing-the-lesson-because-i-wish-id-known-it-going-in-1f16f5fc51)).
4. **Cyclical churn reads as failure.** A quiet tape halves engagement, and the founder loses motivation.
5. **Compliance overhead lands on one person:** Law 25, Bill 96 French, issuer complaints, Stripe reviews, sales tax (GST/QST registration above CAD $30K; U.S. state SaaS nexus later).
6. **Incumbent response.** DilutionTracker or StockTitan can add a catalyst tab in a sprint, and ChatGPT or Perplexity can read a 424B5 on demand for free.

---

## 7. Top 5 kill risks (ranked)

1. **Distribution shortfall.** Monthly qualified traffic never reaches ~50–90K, so the product plateaus at $1–4K MRR, like Dilutracker. *Probability: high (~60%).*
2. **Commoditized value proposition.** DilutionTracker, AskEdgar, StockTitan, Benzinga and BioPharmCatalyst, plus general LLMs reading filings, leave a bundle with weak pricing power at $19. *High.*
3. **Wrong customer.** Novices do not pay for warnings, and experts already pay incumbents and demand accuracy a solo parser cannot yet deliver. *Medium-high.*
4. **Accuracy failure becomes a legal event.** A wrong flag on a litigious promoted microcap brings a demand letter or suit, plus Québec fault-based liability. Even a win costs money and months. *Low-medium likelihood, very high severity.*
5. **Founder burnout and maintenance load across a cyclical market.** Parsing upkeep, daily content and compliance for 24 months, mostly unpaid. *Medium-high.*

(Honorable mention: a Stripe account freeze, and the OTC data gap in section 2.6 that makes the "pink-sheet red flags" pitch partly undeliverable for free.)

---

## 8. Legal must-dos before launch (in order)

1. **Incorporate** (CBCA or Québec) and contract in the company's name. Open a business bank account and a USD Stripe account.
2. **Get a fixed-fee legal opinion** from Canadian securities counsel with Québec/AMF experience, plus a U.S. securities lawyer if possible. It should cover: s.8.25 and Québec s.148 for the exact feature list (alerts, "scheduled binary event" markers, calendar export); *Lowe*/*Lingley* fit; a founder trading and disclosure policy; and **no broker affiliate or referral deals**.
3. **Draft ToS and disclaimers with counsel:** not advice; impersonal general information; no warranty of accuracy; issuer correction process; Québec CPA-compliant liability and cancellation terms; **French versions first** (Bill 96).
4. **Law 25 package:** designate yourself privacy officer and publish your contact details; publish the privacy policy (French and English); complete a PIA for U.S. processors (Supabase region, Stripe, email, analytics); keep a breach register; use consent-based analytics and cookies; collect minimal data (no portfolios).
5. **Wording and design rules:** no "safe", "buy", "sell" or "avoid"; no green checkmarks; flags are "conditions present per filings", with quotes and links; publish the methodology; add a confidence gate on parses; show a "last verified" timestamp on every flag.
6. **Correction and takedown SOP:** an issuer contact form, a 48-hour review, a change log, and a preservation policy.
7. **Insurance:** media liability (defamation) + tech E&O + cyber, bound before the public launch.
8. **Data compliance:** EDGAR User-Agent and rate limits; no FINRA, Cboe or OTC Markets data; TradingView widgets with attribution intact; a written price-vendor license before showing any stored prices.
9. **Stripe onboarding:** describe the business accurately as "SEC filing research data subscription" and keep a fallback processor.

---

## 9. Minimum spend plan, tied to milestones

| Phase | Gate to enter | Buy | Do not buy yet | Monthly burn |
|---|---|---|---|---|
| **0. Validate (4–6 weeks)** | Now | Domain, free newsletter tool (Beehiiv/Buttondown free), one AI coding sub you already use | Supabase Pro, any data license, any paid ads | < $40 |
| | | Post 1–2 filing breakdowns a day on X/StockTwits on trending small caps and biotechs. Publish a weekly "dilution + FDA calendar" newsletter, built semi-manually. Offer a **founding-member pre-sale ($99/yr) through Stripe Payment Links**. | | |
| **Kill/go gate A** | After 6 weeks | **Go if ≥ 500 newsletter subscribers AND ≥ 25 pre-paid founding members.** Otherwise stop or pivot, which saves you the build. | | |
| **1. Build MVP (8–12 weeks)** | Gate A passed | Supabase free tier → Pro ($25) only at launch; worker VPS ($5–10); email (free tier); incorporation; **legal opinion + ToS + French (CAD $5–14K total)**; insurance quote | Tiingo or any price license; OTC Markets data; app development | ~$50–100 + one-time legal |
| | | Scope: biotech + small-cap dilution + runway + insider + 13D + catalyst calendar for **≤ 1,500 tickers** with confidence gating. Skip full OTC coverage. | | |
| **2. Paid launch** | Legal opinion received, insurance bound | Supabase Pro, transactional email, error monitoring | Paid ads | ~$100–150 |
| **Gate B** | 3 months after launch | **Continue if ≥ 75 payers and monthly churn < 10%.** If < 30 payers, wind down or sell. | | |
| **3. Price data** | ≥ 75–100 payers, or ≥ $1.2K MRR for 2 consecutive months | Written-quote price display license (Tiingo, or compare Marketstack, Intrinio, Databento); ship price-derived checks | OPRA, FINRA, OTC Markets | ~$400–700 |
| **4. Scale** | ≥ $5K MRR | Part-time data QA contractor (the best accuracy and legal hedge), creator rev-share deals, app shell (PWA first) | Native apps before $10K MRR | Scales with revenue |

**Rule of thumb:** keep total committed spend before Gate B under about **CAD $15K** (most of it legal and insurance). Never let recurring costs exceed about 50% of trailing MRR after month 9.

---

## 10. Summary

The idea is legally manageable and technically feasible. It is commercially **weak as specified**. The niche has free or cheap incumbents. A direct solo comparable stalled at about $1.5K MRR. The free distribution channel (per-ticker SEO) is being compressed by AI Overviews and Google's spam policies. Paid finance ads are restricted. And the stated novice audience is the least willing to pay for risk warnings. Base case: **about $3.4K MRR at month 24, with $5K MRR around months 27–30. The $19K MRR target (1,000 × $19) is only reachable in a bull case (~10–15% likely) that needs about 200K monthly visits.** The biggest legal exposure is not adviser registration, which stays manageable if the product remains impersonal and factual. It is **defamation from factual parsing errors about litigious microcaps**, made worse by Québec's fault-based standard. Add the Law 25 and Bill 96 overhead. Validate with a newsletter, a daily X presence and a founding-member pre-sale before spending on the build. Get the legal opinion and media insurance before charging anyone.
