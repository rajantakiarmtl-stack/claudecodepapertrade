# Free Market-Structure Data (SROs / Exchanges) and Free Options Data: Commercial-Use Terms

> **Method note (read first):** This session's network blocked direct fetches of finra.org, developer.finra.org, cboe.com, cdn.cboe.com, opraplan.com and nasdaqtrader.com (proxy "connect_rejected"). All findings below come from web-search results and the excerpts of primary documents that the search tool surfaced. Quoted text is the excerpt the search tool returned from the named primary document. It is **not** a full read of the document. Every verdict should be checked against the live terms page before launch. The research date is 2026-11-18.

## Q1. FINRA: what do its terms say about commercial use of Reg SHO files, short interest, OTC/ATS transparency and the FINRA API?

### Takeaway
None of FINRA's free channels permit commercial use. The finra.org website terms (which cover the cdn.finra.org Reg SHO daily files and the website pages) limit use to "non-commercial personal or professional use" and bar database creation and bulk scraping. The free FINRA API "Equity Data" terms (which cover short interest, Reg SHO short volume and OTC/ATS data via the Query API) have the same non-commercial limit. Developers may pass data to end users only for those users' non-commercial use. **Verdict for a paid retail tool: Not OK without a separate commercial license from FINRA.**

### Cited Findings
- **finra.org Terms of Use:** "Subject to Restrictions, below, the content and material provided through the FINRA Website shall be used ONLY for your own non-commercial personal or professional use." The same terms, as the search tool summarized them, also bar creating a database from site content and bulk scraping or data mining. — [FINRA Terms of Use](https://www.finra.org/terms-of-use)
- **FINRA Data catalog, Short Sale Volume page:** "Data is free for non-commercial use." Short sale volume is also available through the Query API. — [FINRA Short Sale Volume catalog](https://www.finra.org/finra-data/browse-catalog/short-sale-volume)
- **FINRA API, Specific Terms for Equity Data** (covers the "otcMarket" dataset group, including short interest; last updated Dec 20, 2022 per the search result):
  - "Developer and its Authorized Users may access and use the Equity Data only for Developer's non-commercial personal or professional use."
  - Redistribution to end users is allowed only "for such End Users' non-commercial personal or professional use only."
  - "End Users shall not be permitted to further redistribute."
  - Source: [FINRA Specific Terms for Equity Data](https://developer.finra.org/specific-terms-equity-data)
- **FINRA API Terms of Service (revised 03/2026):** grants a "limited, nonexclusive license" to "Licensed Data". The developer must identify FINRA as the owner and source of Licensed Data and of derived output: "Developer shall identify FINRA as the owner and source of that Licensed Data, unless the product-specific Specific Terms provide otherwise." — [FINRA API ToS PDF (03-2026)](https://developer.finra.org/sites/default/files/2026-03/FINRA%20-%20API%20Terms%20of%20Service%20(03-2026).pdf); [FINRA API ToS page](https://developer.finra.org/finra-api-terms-service)
- **OTC Transparency (ATS and non-ATS weekly data):** the site requires agreeing to terms before access and requires attribution: "Attribution shall be given to FINRA in all copyrightable works which are created using the information contained on this website." The excerpt did not show the full use restriction. — [OTC Transparency Data](https://otctransparency.finra.org/otctransparency/AtsIssueData)
- **Commercial licensing:** FINRA's commercial instrument for transparency data is the Transparency Services Participation Agreement, a non-exclusive, non-transferable license. Related FINRA agreements restrict use; for example, the Non-Real-Time TRACE agreement says "Vendor may use the TRACE End-of-Day Data Report for internal purposes only." — [FINRA Transparency Services Participation Agreement (2025)](https://www.finra.org/sites/default/files/2025-08/transparency-services-participation-agreement-2025.pdf); [Non-Real-Time TRACE Data Agreement](https://www.finra.org/sites/default/files/FINRA_Non-Real-Time_TRACE-Data-Agreement.pdf)
- **Unverified claim about AI use:** a third-party GitHub README for an MCP connector says the Reg SHO daily files fall under the general finra.org terms, including a bar on use "in conjunction with machine learning or other AI programs". It says the API data falls under Equity Specific Terms §2.3. I could not confirm this AI clause in FINRA's own text. — [pipeworx-io/mcp-finra (GitHub)](https://github.com/pipeworx-io/mcp-finra)
- **Contents and timing of Reg SHO files:** FINRA publishes "Daily Short Sale Volume Files and Monthly Short Sale Transaction Files" for off-exchange (TRF/ADF/ORF) trades, at the SEC's request. — [FINRA TRF Regulation SHO 2019](https://www.finra.org/filing-reporting/trf/trf-regulation-sho-2019)
- **Short volume vs short interest:** FINRA states that "the Short Sale Files do not—and are not intended to—equate to bi-monthly reported short interest position information." — [FINRA Information Notice 05/10/19](https://www.finra.org/rules-guidance/notices/information-notice-051019)

### Inferences
- FINRA is a private SRO, so its compilations are governed by contract (the terms of use and API terms) as well as any copyright. Facts are not copyrightable. However, accessing the files through finra.org or the API binds the user to these terms, and the terms say non-commercial use only. Displaying raw or lightly transformed FINRA short volume or short interest to paying subscribers would breach those terms as written.
- "Professional use" does not mean commercial use. A paid SaaS that charges users for access to FINRA-derived numbers is very likely "commercial" under any normal reading.
- Commercial redistributors (for example, Ortex and Fintel) appear to license this data. That is an inference from the existence of the Transparency Services Participation Agreement. I did not see their contracts.
- **Interpretation pitfalls to show users:**
  - Reg SHO daily "ShortVolume" covers only off-exchange (FINRA TRF/ADF/ORF) trades. It is not a position.
  - Market-maker hedging and riskless-principal trades inflate it routinely, so ratios of 40–60% are normal.
  - Short interest is a twice-monthly position snapshot with a reporting lag of about 1–2 weeks.
  - FINRA's own notice warns that the two do not equate (cited above).

### Gaps
- I could not read the full finra.org Terms of Use or the full Equity Specific Terms text (host blocked). I could not confirm whether a 2026 revision of the Equity Specific Terms exists, or what API rate limits apply.
- I found no FINRA fee schedule for a commercial license covering short interest, Reg SHO volume or OTC Transparency redistribution.
- I could not verify the AI/ML clause.

## Q2. Cboe: market statistics (put/call ratios, volume), VIX history, delayed quotes, and data terms

### Takeaway
Cboe's website terms allow viewing and downloading "one copy" for "personal non-commercial use". This covers the daily market statistics pages (put/call ratios), the VIX historical CSVs and the delayed quotes pages. Cboe's market data agreements bar furnishing data to third parties without a distribution agreement. **Verdict: Not OK for raw redistribution in a paid tool. Licensing is needed (for example, Cboe Global Data Agreement or DataShop/LiveVol). Unclear for highly aggregated derived metrics.**

### Cited Findings
- **Cboe website terms** (last updated Nov 16, 2022 per the search result): "You may view, print and download one copy of the Materials for your personal non-commercial use in connection with products and services offered by Cboe." — [Terms and Conditions for Use of Cboe Websites](https://www.cboe.com/terms)
- **VIX historical data:** "daily closing values of the Cboe Volatility Index® (VIX Index) are available" via links on Cboe's VIX historical data page. The excerpt showed no separate license, so the website terms presumably apply. — [Cboe VIX Historical Data](https://www.cboe.com/tradable-products/vix/vix-historical-data/)
- **Cboe Global Data Agreement** (updated Aug 1, 2026): recipients may "commingle, and use for their own internal purposes any Data received (i) directly from Cboe, or (ii) from another authorized Data provider". Distribution goes only to authorized parties. — [Cboe Global Data Agreement](https://cdn.cboe.com/resources/membership/Data_Agreement.pdf)
- **Cboe Market Data Policies** (effective Sept 1, 2026): "Data Recipient shall make no use or distribution of any Data except in compliance with the terms of the Data Agreement." The policies define a Non-Professional user as a natural person using data for personal, non-commercial purposes. — [Cboe Market Data Policies](https://cdn.cboe.com/resources/membership/Market_Data_Policies.pdf)
- **Cboe Subscriber Agreement:** "Subscriber may not sell, lease, furnish, or otherwise permit or provide access to Data to any other..." — [Cboe Subscriber Agreement](https://cdn.cboe.com/resources/membership/Subscriber_Agreement.pdf)
- **Cboe DataShop/LiveVol Historical Market Data Subscriber Agreement** (paid): "Subscriber's redistribution of the Data is for display only." Display of derived data is also permitted. The agreement bars use "as input data in the" creation of index-type products. This is a paid path to legal display. — [Historical Market Data Subscriber Agreement](https://datashop.cboe.com/documents/Historical_Market_Data_Subscriber_Agreement.pdf)
- **Cboe Reg SHO threshold list:** Cboe publishes a daily list for BZX-listed securities. — [Cboe Reg SHO Threshold List](https://ww2.cboe.com/us/equities/market_statistics/reg_sho_threshold)

### Inferences
- A single daily market-wide number such as the total/equity/index put/call ratio is a fact. Cboe's contractual terms still apply to scraping it from cboe.com. The risk of enforcement against a small site citing a daily P/C ratio is probably low, but this is not legal clearance.
- Cboe "delayed quotes" pages are OPRA- and exchange-sourced data. Re-displaying them also triggers OPRA vendor obligations (see Q6).

### Gaps
- I could not fetch the market-statistics page itself, so I could not confirm the current CSV endpoints, update times or rate limits.
- I found no Cboe policy specific to VIX index values. VIX is a Cboe index, and index-data licensing may apply separately.

## Q3. OCC volume and open interest statistics

### Takeaway
OCC publishes free daily and monthly volume, open interest, series and flex reports. I found no OCC terms-of-use language addressing commercial redistribution. **Verdict: Unclear.** Because OCC volume and OI statistics derive from exchange-supplied data, OCC's own agreements with exchanges limit how OCC itself redistributes that data.

### Cited Findings
- OCC's market data reports include "volume, open interest, series & trading data and contract adjustment information". Open interest offerings include "Daily Open Interest, Futures Open Interest and historical reports". — [OCC Flex Reports / Market Data](https://www.theocc.com/market-data/market-data-reports/series-and-trading-data/flex-reports)
- OCC publishes monthly volume reports (example: April 2026). — [OCC April 2026 Monthly Volume Report](https://www.theocc.com/newsroom/views/2026/05-04-april-2026-monthly-volume-report)
- OCC's 2025 amended Participant Exchange Agreement contains these clauses:
  - "OCC may not use Exchange Data to create or calculate any index or other financial instrument, investment product, or investment strategy without an Exchange's prior consent."
  - "The Exchanges also would retain the right to audit OCC's use and redistribution of Exchange Data."
  - Source: [Federal Register, OCC New RPEA (2025-05-29)](https://www.federalregister.gov/documents/2025/05/29/2025-09624/self-regulatory-organizations-the-options-clearing-corporation-notice-of-filing-of-proposed-rule)

### Inferences
- Aggregate, end-of-day, per-underlying open interest is probably the most defensible free options data point. It is not quote data, so OPRA's real-time/delayed quote regime likely does not apply. Its status as "OPRA Data" is unconfirmed.
- OCC's website terms still need review before scraping.

### Gaps
- I could not find theocc.com website terms of use, rate limits or the API/format details for the OI report.

## Q4. Nasdaq Trader: symbol directory, short interest, trade halt RSS, Reg SHO list

### Takeaway
Nasdaq Trader's symbol lookup states that the data is for internal, non-commercial use unless separately licensed. The Trade Halt RSS feed is free but governed by its own terms, and I could not confirm whether those terms permit commercial redisplay. Nasdaq.com's general license is "personal, non-commercial". **Verdict:**
- Symbol directory: Not OK as written for commercial redistribution of the file. Practical risk from using tickers as identifiers is low, and it is common practice.
- Halts RSS: Unclear.
- Nasdaq.com short interest pages: Not OK (personal, non-commercial).

### Cited Findings
- **Symbol Lookup / Symbol Directory:** the data is for internal, non-commercial use unless separately licensed from Nasdaq. "Nasdaq and its licensors retain all right, title and interest information including, but not limited to the symbols." — [Nasdaq Trader Symbol Directory](https://www.nasdaqtrader.com/trader.aspx?id=symbollookup&iss=z&typ=All_Issues&mth=contains)
- **CUSIP restriction:** for the Daily List and fundamental files, distributors cannot be authorized to receive "the daily list or fundamental data files including CUSIP Data unless they have a license in place with CUSIP." — [Nasdaq Daily List spec](https://www.nasdaqtrader.com/content/technicalsupport/specifications/dataproducts/dlcompletespec.pdf)
- **Trade Halt RSS terms:**
  - "NASDAQ OMX requires that all subscribers to the Trade Halt RSS Feed adhere to the following terms and conditions."
  - "Subscribers are prohibited from editing, modifying, misrepresenting..." (the excerpt is truncated here).
  - "The Feed is owned, except as otherwise expressly stated, by NASDAQ OMX."
  - Nasdaq may change the terms at any time, and continued use binds the subscriber.
  - Source: [Trade Halt RSS Feed Terms and Conditions](https://www.nasdaqtrader.com/content/administrationsupport/agreementstrading/THRSSFeedTermsCond.pdf)
- "The Trade Halt RSS Feed is a free service that provides the same trade halt and trade pause information listed on the Trading Halts page." — [Nasdaq Trade Halt RSS](https://nasdaqtrader.com/Trader.aspx?id=TradeHaltRSS)
- A third-party listing says the halt feed should not be polled more than once per minute. This is unverified. — [polyresearchrobotics listing](https://www.polyresearchrobotics.com/strategies/resources/nasdaq-trader-news-and-alerts-rss-incl-trade-halt-feed-nasdaq-inc-nasdaqtrader-c)
- **Nasdaq.com legal:** "Nasdaq grants you a personal, limited, revocable, non-exclusive, non-assignable, non-sublicensable and non-transferable license to use the Services solely for your personal, non-commercial use." — [Nasdaq Legal](https://www.nasdaq.com/legal)
- **Nasdaq Reg SHO Threshold List:** published daily on nasdaqtrader.com with symbol, market category and threshold flag. — [Nasdaq Reg SHO Threshold List](https://www.nasdaqtrader.com/trader.aspx?id=regshothreshold)
- **Nasdaq trading hours change:** Nasdaq Equity Trader Alert 2026-64 concerns changes to nasdaqtrader.com files for Nasdaq Global Trading Hours. File timing and format may be changing. — [ETA 2026-64](https://www.nasdaqtrader.com/TraderNews.aspx?id=ETA2026-64)

### Inferences
- Symbols and listing exchange are facts. Using the directory internally to build a ticker universe, without republishing the file, is the lowest-risk use.
- Halt events (symbol, time, reason code) are facts, and many sites re-display them. The RSS terms' "no editing/modifying/misrepresenting" clause suggests redisplay is contemplated if the content is unaltered. This is unconfirmed.

### Gaps
- I could not read the full Trade Halt RSS terms or nasdaqtrader.com's general terms.
- I found no Nasdaq short interest page terms beyond the Nasdaq.com general legal terms.

## Q5. NYSE: short interest, Reg SHO threshold lists, TAQ samples; exchange Reg SHO threshold lists generally

### Takeaway
Reg SHO threshold lists are mandated public postings. NYSE, NYSE Arca, Nasdaq, Cboe BZX and FINRA (OTC) publish them daily. I found no terms specific to the lists. **Verdict: Commercial display of threshold-list facts is likely OK with conditions (attribution, no implied endorsement), but this rests on inference and is Unclear on the contract terms.** I found no information on NYSE short interest or TAQ samples.

### Cited Findings
- Threshold security definition: fails of 10,000 or more shares and at least 0.5% of shares outstanding, for five consecutive settlement days. — [Nasdaq Reg SHO page](https://www.nasdaqtrader.com/trader.aspx?id=regshothreshold); [SEC Key Points About Reg SHO](https://www.sec.gov/investor/pubs/regsho.htm)
- NYSE and NYSE Arca post a list for every settlement day, and the list is not generated on bank holidays when DTCC is closed. — [NYSE Reg SHO](https://www.nyse.com/regulation/nyse/public-info); [NYSE Arca Reg SHO](https://www.nyse.com/regulation/nyse-arca/public-info)
- A security trading on several markets appears only on the list of the SRO that holds its primary listing. A 2025 SEC petition lists NYSE, Nasdaq, FINRA OTC and BATS (Cboe BZX) as the publishers. — [SEC petition 4-848 (2025)](https://www.sec.gov/files/rules/petitions/2025/petn4-848.pdf)

### Inferences
- The lists exist to inform the public under SEC Rule 203(c)(6). That supports displaying the facts (symbol is on the list, date added), with low legal risk. Site terms of use still nominally apply.

### Gaps
- I found nothing on NYSE short interest publication terms, NYSE TAQ free sample licensing, or nyse.com website terms. Searches returned no relevant results.

## Q6. Free options data (chains, IV, OI): OPRA delayed-data rules, broker API terms, proxies

### Takeaway
No free source of options chains or quotes was found that permits commercial display.
- **OPRA:** delayed data (15+ minutes old) carries no per-user display fees. However, OPRA requires every vendor redistributing delayed data to sign a Vendor Agreement with Exhibit A. OPRA's fee schedule applies a redistribution fee to delayed redistribution as well: $1,500 per month, or $650 per month for query-only, per older and 2025 schedules. Only historical-only redistribution is exempt.
- **Broker APIs:** Alpaca's terms bar commercial redistribution. I could not verify Tradier or IBKR terms.
- **Best free options-adjacent paths:**
  - Compute realized volatility and historical earnings moves from licensed price data.
  - Display end-of-day aggregate OI from OCC (Unclear terms).
  - Pay a licensed vendor whose license covers display to your users.

### Cited Findings
- **OPRA definitions:** "current" means "information relates to transactions completed within the immediately preceding 15 minutes", and "delayed" means "information that is no longer current". OPRA does not charge usage-based or device-based fees for delayed data. — [OPRA](https://www.opraplan.com/)
- **OPRA vendor requirement:** "a Vendor must agree to a Vendor Agreement with OPRA with an Exhibit A regardless of whether the Vendor intends to redistribute options information on a 'current' or a 'delayed' basis." — [OPRA](https://www.opraplan.com/)
- **OPRA fee schedule:** a redistribution fee is the "monthly fee payable by every vendor that redistributes OPRA Data to any person, whether on a current or delayed basis". Vendors whose redistribution is limited solely to historical data are exempt. The amounts are $1,500 per month and $650 per month for query-only. A 2025 SEC filing exhibit shows the same schedule. — [OPRA Fee Schedule](https://cdn.opraplan.com/documents/OPRA_Fee_Schedule.pdf); [SEC OPRA-2025-02 Exhibit](https://www.sec.gov/files/rules/sro/nms/2025/34-104267-ex1.pdf)
- **Conflicting secondary source:** Theta Data (May 2026) claims there are no OPRA fees for using or redistributing data delayed over 15 minutes, though you "may need to still register as a data vendor". Marketdata.app and sentisense.ai say the redistribution fee still applies to delayed data. OPRA's own fee-schedule wording supports the latter. — [Theta Data OPRA fee guide](https://www.thetadata.net/articles/2026-05-29-opra-fee-guide-for-options-market-data); [Marketdata.app OPRA fees](https://www.marketdata.app/education/options/opra-fees/); [sentisense.ai](https://sentisense.ai/blog/unusual-whales-api-alternatives-options-flow-apis-2026/)
- A 2011 OPRA filing references the $650 rate for a hosted solution displaying only delayed data. Delayed displays must carry labeling such as "OPRA data delayed 15 minutes" (per the Exhibit A, as reported by search). — [SEC 34-64819 (2011)](https://www.sec.gov/files/rules/sro/nms/2011/34-64819.pdf); [OPRA Exhibit A](https://assets.website-files.com/5ba40927ac854d8c97bc92d7/5bf421eeb7c4f5989640ffbc_exhibit_A.pdf)
- **Alpaca:**
  - "Content is provided exclusively for personal and noncommercial access and use." Republishing or publicly displaying content for a commercial enterprise requires Alpaca's express prior written consent.
  - The customer agreement says: "I agree not to reproduce, distribute, sell or commercially exploit the market data in any manner without consent."
  - Alpaca's plans incorporate the Nasdaq Global Subscriber Agreement and the NYSE display agreement. The NYSE non-professional tier is personal, non-business use only.
  - Sources: [Alpaca Terms & Conditions](https://files.alpaca.markets/disclosures/library/Alpaca+Terms+_+Conditions.pdf); [Alpaca Customer Agreement](https://files.alpaca.markets/disclosures/library/AcctAppMarginAndCustAgmt.pdf); [NYSE Market Data Display Services Agreement (Alpaca library)](https://files.alpaca.markets/disclosures/library/NYSE+Market+Data+Display+Services+Agreement.pdf)
- A GitHub issue cites Alpaca support's position that API data cannot be redistributed. This is a secondhand source. — [GitHub issue](https://github.com/ethereum007/usmarket/issues/3)

### Inferences
- **Practical cost floor for legally showing delayed options chains as a vendor:** about $650–$1,500 per month to OPRA, plus administrative reporting. A licensed data vendor that sublicenses display rights may be cheaper.
- **The "historical only" exemption** could allow showing end-of-day option data from prior days without the redistribution fee. Its exact definition is unverified and needs OPRA confirmation.
- **Broker API data:** retail broker APIs (Alpaca; likely Tradier and IBKR, unverified) license data for the account holder's own use. Re-serving it to your paying users is almost certainly prohibited unless the broker has a vendor/display agreement covering your app.
- **Safe proxies that need no options license:**
  - Realized volatility (close-to-close, Parkinson, Garman-Klass) from licensed OHLC prices.
  - Historical earnings-day move distributions.
  - Your own model IV estimates, clearly labeled as not market IV.
  - The underlying price data still needs a display license, but end-of-day or delayed equity data is cheap or free under UTP/CTA delayed policies (Q7).

### Gaps
- I could not access OPRA's current (2026) fee schedule or Vendor Agreement text directly.
- I could not find the definition of "historical" data in OPRA's terms.
- I found no Tradier or IBKR redistribution terms. Searches surfaced none.

## Q7. Exchange derived-data and delayed-data policies (UTP / CTA / Nasdaq / NYSE / Cboe): when is derived data fee-exempt?

### Takeaway
- **UTP (Nasdaq-listed securities):** UTP delayed data (15+ minutes) carries no charge on controlled products. Derived data that "cannot be reverse engineered" and is not a "reasonable facsimile" of the source can be non-fee-liable. Examples include calculations "upon multiple UTP security symbols". Distribution of non-fee-liable derived data does not require recipients to sign agreements.
- **CTA (NYSE-listed):** requires a 15-minute delay and a "Prices delayed 15 minutes" label.
- Vendors redistributing still need the vendor agreement. **Verdict: OK with conditions** for delayed equity prices and multi-symbol derived analytics. A vendor agreement is typically still required, and fee exemptions are product-specific.

### Cited Findings
- **UTP Data Policies (Sept 2023), delayed data:** "Vendors are permitted to delay UTP Information and there is no charge for UTP Delayed Information distributed on Controlled Products, if delayed for the appropriate timeframe" (15 minutes). — [UTP Data Policies (Sept 2023)](https://www.utpplan.com/DOC/Datapolicies.pdf)
- **UTP derived data definition:** "The Derived Data cannot be reverse engineered to recreate the Information, and the Derived Data cannot be used to create other data that is recognized to be a reasonable facsimile for the UTP Information." Derived data calculated "upon multiple UTP security symbols from the UTP Data Feeds is currently not fee liable." — [UTP Data Policies](https://www.utpplan.com/DOC/Datapolicies.pdf)
- **UTP real-time volume with delayed prices:** "Vendors are permitted to distribute each issue's Real-Time volume along with Delayed Last Sale Information or Delayed Quotation information at no additional charge." — [UTP Data Policies (2017)](https://www.utpplan.com/DOC/APPLICATION_UTP_DATA_POLICIES-2017-10-Redline.pdf)
- **UTP agreements for derived data:** "distribution of non-fee liable Derived Data does not require the Recipient to sign the applicable Agreements." Redistributing vendors remain subject to the vendor agreement and delayed policy. — [UTP Data Policies](https://www.utpplan.com/DOC/Datapolicies.pdf)
- **CTA (NYSE):** delayed last sale and bid-asked prices must be delayed at least 15 minutes. "Prices delayed 15 minutes" must be conspicuously displayed on all screens displaying delayed data. — [CTA Exhibit A](https://www.nyse.com/publicdocs/ctaplan/notifications/trader-update/Exhibit%20A%20-%20CTA%20-%20Internal%20and%20External%20Distribution.pdf)
- **Nasdaq US Equities and Options Data Policies:** there "may not be a charge for the usage of the delayed data, depending upon the product". The policies list a 15-minute delay for products such as Nasdaq Basic and Nasdaq Last Sale. The document is a few years old. — [Nasdaq US Equities and Options Data Policies](https://www.nasdaqtrader.com/content/AdministrationSupport/Policy/USEquitiesandOptionsDataPolicies.pdf)
- **Cboe:** the Cboe Market Data Policies (Sept 2026) govern derived and delayed use under the Data Agreement. — [Cboe Market Data Policies](https://cdn.cboe.com/resources/membership/Market_Data_Policies.pdf)

### Inferences
- **For a startup**, the cheapest legally clean structure is:
  1. Buy end-of-day or delayed equity data from a vendor whose license permits display to your subscribers.
  2. Compute multi-symbol or aggregate analytics, such as sector breadth, rankings, realized-vol screens and scores, that cannot reconstruct prices. These analytics are likely non-fee-liable under UTP.
  3. Label delayed prices as required.
- **Single-symbol derived values** (for example, a moving average of one stock) are more borderline than multi-symbol calculations. The UTP text explicitly exempts "multiple symbol" calculations.

### Gaps
- No 2026 versions of the UTP, CTA or Nasdaq policies were confirmed. The newest UTP document seen is Sept 2023.
- I found no NYSE proprietary-feed derived-data policy text.
- I did not find the Cboe derived-data clauses verbatim.

## Summary verdict table (for the report writer)

| Source | Contents / frequency / format (where found) | Terms excerpt | Verdict for paid retail display |
|---|---|---|---|
| FINRA Reg SHO daily files (cdn.finra.org) | Daily off-exchange short volume, pipe-delimited text; monthly transaction files | "ONLY for your own non-commercial personal or professional use" | **Not OK** without a FINRA license |
| FINRA short interest (website/API) | Twice-monthly positions | Equity Specific Terms: "only for Developer's non-commercial personal or professional use"; "End Users shall not be permitted to further redistribute" | **Not OK** |
| FINRA OTC Transparency / ATS | Weekly ATS and non-ATS volume by issue | Attribution required; full use terms not seen | **Not OK / Unclear** (likely non-commercial) |
| FINRA API (free tier) | Query API, same datasets | Non-commercial; FINRA attribution | **Not OK** for commercial use |
| Cboe market stats / VIX history / delayed quotes | Daily P/C ratios, volume; VIX daily closes (CSV) | "one copy... for your personal non-commercial use" | **Not OK** (raw); **Unclear** (aggregated facts) |
| Cboe DataShop/LiveVol (paid) | Historical options data | "redistribution... is for display only" | **OK with conditions** (paid license) |
| OCC volume / OI | Daily and monthly reports | No terms found | **Unclear** |
| Nasdaq symbol directory | Nightly ticker files | "internal, non-commercial use unless separately licensed" | **Not OK** to republish the file; internal use is low risk |
| Nasdaq Trade Halt RSS | Real-time halts, free RSS | Own terms; no edit/modify; full text not seen | **Unclear** |
| Nasdaq.com pages (short interest etc.) | — | "solely for your personal, non-commercial use" | **Not OK** |
| Reg SHO threshold lists (NYSE, Nasdaq, Cboe, FINRA) | Daily, every settlement day | No specific terms found; mandated public posting | **Likely OK with conditions** (Unclear) |
| OPRA delayed options data | 15+ minutes delayed | Vendor Agreement + Exhibit A required; redistribution fee "whether on a current or delayed basis" ($650–$1,500/mo) | **OK with conditions** (paid OPRA vendor) |
| Broker APIs (Alpaca) | Real-time/delayed quotes | "personal and noncommercial"; no commercial exploitation without consent | **Not OK** |
| UTP/CTA delayed and derived equity data | 15+ minutes delayed; multi-symbol derived data | "no charge for UTP Delayed Information"; multi-symbol derived data "not fee liable" | **OK with conditions** |
| Realized vol / earnings-move proxies | Computed from licensed prices | Depends on the price-data license | **OK** (if the underlying price license allows display) |
