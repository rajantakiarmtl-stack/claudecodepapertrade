# Free U.S. Federal and Canadian Government Financial/Economic Data Sources: Commercial-Use Terms and Contents

**Method note (read first):** This session's network blocked direct page fetches (WebFetch failed with DNS errors for fred.stlouisfed.org, www.sec.gov, www.law.cornell.edu, and www.sedarplus.ca). All "Cited Findings" therefore come from web-search excerpts of the linked pages, not full-page reads. Quotes are search-engine excerpts and should be re-checked against the live page before any legal reliance. Anything drawn from the researcher's background knowledge, and not confirmed by a search result this session, is kept in **Inferences** and labelled **[UNVERIFIED, background knowledge]**. Sources with no search coverage this session (CFTC COT, USASpending, SAM.gov, Treasury Fiscal Data, Treasury par yield curve, EIA, USDA, NOAA, Federal Register, USPTO, SEC FTD/DERA datasets, Drugs@FDA, FDA advisory calendar) are covered only in Inferences/Gaps.

---

## Q1. Is the data truly public domain (17 USC 105) or subject to terms? (Per-source catalog and verdicts)

### Takeaway
Most U.S. federal agency data (SEC EDGAR, BLS, BEA, Treasury, CFTC, Fed Board H.15, EIA, USDA, NOAA, Federal Register, USASpending, openFDA core data) is U.S. government work and is effectively free for commercial use, subject to access rules such as rate limits, User-Agent headers and API keys. The big exceptions are (a) third-party copyrighted series redistributed via FRED (S&P/Case-Shiller, ICE BofA, Moody's, etc.), (b) congressional STOCK Act/financial disclosure reports, which carry a statutory commercial-use bar under 5 U.S.C. 13107(c), and (c) Canadian SEDAR+ and SEDI, whose terms prohibit scraping and commercial redistribution. Statistics Canada (Open Licence) and GDELT explicitly allow commercial use with attribution. The Bank of Canada likely does too, but that is unconfirmed.

### Cited Findings

**FRED (St. Louis Fed)**
- The FRED API terms state that series "may be owned by third parties and subject to copyright restrictions", and that neither the St. Louis Fed's provision of the API nor your use of it overrides the data owners' "copyrights, requirements and restrictions." — [FRED API Terms of Use](https://fred.stlouisfed.org/docs/api/terms_of_use.html)
- Copyrighted series "contain the word 'Copyright' in their notes" and can be found by searching 'copyright' on FRED or via the `fred/series/search` API. — [FRED API Terms of Use](https://fred.stlouisfed.org/docs/api/terms_of_use.html)
- FRED's legal terms prohibit redistributing "any third party's proprietary content, including any graphs, maps, images, logos, data, or datasets, for commercial use without first obtaining express written permission from the data provider." — [FRED Legal Notices](https://fred.stlouisfed.org/legal/)
- Without the copyright holder's express written permission, copyrighted series "may only be used for non-commercial educational or personal use." — [FRED Legal Notices / Terms](https://fred.stlouisfed.org/legal/terms/)
- FRED labels some series "Public Domain: Citation requested" and others "Copyrighted: Citation required". According to the search excerpt, these may be used "for internal commercial uses and may be displayed in textbooks, newsletters, or reports to clients provided that appropriate attribution is given." The excerpt was truncated, so verify the full clause. — [FRED Legal Notices](https://fred.stlouisfed.org/legal/)
- FRED add-in terms: before using third-party-owned series "for anything other than personal use, you must contact the data owner to obtain permission." — [FRED Add-in Legal](https://fred.stlouisfed.org/fred-addin/legal.html)
- **Verdict: OK with conditions.** Public-domain series (e.g., BLS/BEA/Treasury/Fed Board originals) are fine. Any series whose notes say "Copyright" is **Not OK** for a paid product without a license from the owner.

**SEC EDGAR (all APIs and datasets)**
- The SEC's current maximum request rate is 10 requests/second, and the SEC "reserves the right to limit request rates to preserve fair access for all users." — [SEC: Accessing EDGAR Data](https://www.sec.gov/os/accessing-edgar-data)
- Automated tools must "declare your user agent in request headers" with a company name and admin contact email. Third-party documentation reports HTTP 403 responses without one. — [SEC: Accessing EDGAR Data](https://www.sec.gov/os/accessing-edgar-data); [edgartools SEC compliance](https://edgartools.readthedocs.io/en/stable/resources/sec-compliance/)
- The SEC says "anyone can access and download this information for free." — [SEC: Accessing EDGAR Data (legacy)](https://www.sec.gov/edgar/searchedgar/accessing-edgar-data.htm)
- Search results did not surface an SEC statement on public-domain status or reuse. See Gaps.
- **Verdict: Commercial OK (high confidence on practice, statement not verified this session)**, conditioned on fair-access compliance.

**Congressional financial disclosures (House Clerk / Senate eFD, STOCK Act PTRs)**
- 5 U.S.C. 13107(c) makes it unlawful to obtain or use a report "for any unlawful purpose," "for any commercial purpose, other than by news and communications media for dissemination to the general public," for credit-rating decisions, or for soliciting money. — [OGE / 5 CFR 2634 via eCFR](https://www.ecfr.gov/current/title-5/chapter-XVI/subchapter-B/part-2634); [uscode.house.gov ch. 131](https://uscode.house.gov/view.xhtml?path=/prelim@title5/part4/chapter131&edition=prelim); [customsmobile mirror of 5 USC 13107](https://www.customsmobile.com/uscode/5/13107)
- The Attorney General may bring a civil action against "any person who obtains or uses a report for any purpose prohibited." The Senate Ethics Committee warns that violators "may be subject to civil penalties and any other remedy available under statutory or common law." — [Senate Ethics: Financial Disclosure](https://www.ethics.senate.gov/public/index.cfm/financialdisclosure)
- OGE lists a penalty cap of $25,132, an inflation-adjusted figure. A secondary source cites "up to $10,000" (the original statutory figure). — [OGE individual disclosures](https://www.oge.gov/web/oge.nsf/Officials%20Individual%20Disclosures%20Search%20Collection?OpenForm=); [quantvps blog](https://www.quantvps.com/blog/congressional-stock-trading-rules-and-data-sources)
- Under 13107(b)(2), requesters must give their name, occupation and address and acknowledge awareness of the prohibitions. Reports are retained for 6 years. — [customsmobile 5 USC 13107](https://www.customsmobile.com/uscode/5/13107)
- The STOCK Act requires periodic transaction reports within 30 to 45 days of a qualifying trade. — [Wikipedia: STOCK Act](https://en.wikipedia.org/wiki/STOCK_Act)
- Quiver says it "downloads those disclosures, parses them for stock trades, fetches the stock's performance and calculates returns." Its API is tiered: the Hobbyist tier (about $300/yr) carries no commercial rights, and a "Startup" tier with commercial rights is for companies under $1M revenue (secondary source). — [Quiver Congress Trading](https://www.quiverquant.com/congresstrading/); [yieldtheory comparison](https://www.yieldtheory.app/research/best-congress-stock-trackers)
- I found no source stating how Capitol Trades, Quiver or Unusual Whales legally justify their use under 13107. No DOJ enforcement against such trackers turned up.
- In an FEC matter under a different statute (2 U.S.C. 438), a news-style website was not automatically exempt, and its commercial use of the data was treated as a question of fact. This is an analogy only. — [FEC MUR 6053](https://www.fec.gov/files/legal/murs/6053/10044264486.pdf)
- **Verdict: Not OK / Unclear (high legal risk).** The only statutory carve-out is "news and communications media for dissemination to the general public." A paywalled trader tool is a weak fit. Licensing from a vendor that holds the risk (e.g., Quiver's commercial tier) shifts but does not eliminate the question.

**BLS API**
- Registered users get 500 queries/day and unregistered users 25/day. Registration requires an email and organization name, and keys "must renew registration at least once a year." — [BLS API FAQs](https://www.bls.gov/developers/api_faqs.htm); [BLS API features](https://www.bls.gov/bls/api_features.htm)
- The terms ask users to "cite the date that data were accessed or retrieved using the API", and say BLS may "terminate or deny a user's access... at any time." Search excerpts showed no commercial-use restriction. — [BLS API Terms of Service](https://www.bls.gov/developers/termsOfService.htm)
- **Verdict: Commercial OK** (cite source and access date; respect limits).

**BEA API**
- Search did not return BEA's terms of service. A secondary guide says registration (UserID) is required and gives "no hard limit", unsourced. — [datasetiq guide](https://www.datasetiq.com/blog/api-access-economic-data-guide)
- **Verdict: Likely Commercial OK (Unclear on exact terms).** See Inferences/Gaps.

**openFDA**
- A free API key is recommended. "Signing up for an API key means you agree to our terms of service." Without a key, limits are 240 req/min and 1,000 req/day per IP. With a key, 240 req/min and 120,000 req/day per key. Users expecting more should "contact us." — [openFDA Authentication](https://open.fda.gov/apis/authentication)
- The terms (via a third-party excerpt) say "Some data on openFDA may not be public domain, such as copies of copyrightable works made available to the FDA by private entities," and that FDA may monitor use. — [openFDA Authentication](https://open.fda.gov/apis/authentication) (verify at open.fda.gov/terms)
- **Verdict: Commercial OK with conditions.** Core adverse-event, recall and approval data is public, but drug label text and other third-party-submitted works may carry copyright.

**ClinicalTrials.gov API v2**
- No official terms page was retrieved. Secondary sources say there is no authentication or formal quota, and that the docs recommend about 3 requests/second (one source says about 50/min/IP) with HTTP 429 on excess. They recommend bulk downloads or the AACT database for large pulls. — [BioMCP docs](https://glama.ai/mcp/servers/@genomoncology/biomcp/blob/117cbf50ecab72819025bb21cc6d6d20afec27d5/docs/backend-services-reference/04-clinicaltrials-gov.md); [IntuitionLabs v2 pipeline PDF](https://intuitionlabs.ai/pdfs/clinicaltrials-gov-api-v2-pipeline.pdf)
- **Verdict: Likely Commercial OK (Unclear).** Verify the NLM terms page.

**Kenneth French Data Library (Dartmouth Tuck)**
- The data is free with no key or agreement. One guide says use is fine "provided appropriate scholarly attribution is cited". Code projects show the files carrying "Copyright … Kenneth R. French." — [CASRAI guide](https://casrai.org/guides/kenneth-french-data-library); [FamaFrenchData GitHub](https://github.com/piotrek-orlowski/FamaFrenchData); [Data Library](https://mba.tuck.dartmouth.edu/pages/faculty/ken.french/data_library.html)
- **Verdict: Unclear.** The data is copyrighted, and I found no explicit commercial license. Displaying derived factor exposures is probably low-risk, but redistributing raw files in a paid product needs permission.

**GDELT**
- GDELT's datasets are "available for unlimited and unrestricted use for any academic, commercial, or governmental use of any kind without fee". Users "may redistribute, rehost, republish, and mirror any of the GDELT datasets in any form", provided "any use or redistribution of the data must include a citation to the GDELT Project and a link to this website." — [GDELT About](https://www.gdeltproject.org/about.html)
- GDELT Cloud (gdeltcloud.com) is a separate service with different, non-commercial plan terms. BigQuery access carries Google billing. — [GDELT Cloud Acceptable Use](https://gdeltcloud.com/acceptable-use)
- **Verdict: Commercial OK** (citation plus link required). GDELT's derived news metadata does not license the underlying news article text.

**Canada: SEDAR+**
- The terms are an agreement with the Alberta Securities Commission. They prohibit "using any robot, spider or other automatic device, software program or manual process to monitor, access, scrape, copy or interfere with any web pages." — [SEDAR+ Terms of Use](https://www.sedarplus.ca/onlinehelp/terms-of-use/); [systems.securities-administrators.ca](https://systems.securities-administrators.ca/terms-of-use/)
- The terms permit "limited unaltered extracts or unaltered copies of the Public Information for informational, educational, research, or internal use." The 2022 SEDAR terms barred "frequent, public, commercial or mass distribution of Public Information." "Any unauthorized use, reproduction, modification or distribution of the Content... is strictly prohibited." — [SEDAR Terms of Use (Nov 2022 PDF)](https://www.securities-administrators.ca/wp-content/uploads/2023/02/SEDAR_Terms_of_Use.pdf); [SEDAR+ Terms](https://www.sedarplus.ca/onlinehelp/terms-of-use/)
- The filer agreement license "does not grant the Electronic Filer any right or license to Public Information accessed through the SEDAR+ Public Website." — [SEDAR+ EFA (Apr 2023)](https://www.newsfilecorp.com/filing/sedar/sedar-plus/sedar-plus-efa.pdf)
- A third-party project advises written ASC/CSA authorization before automated collection or redistribution. — [ULDataProfessor/SEDAR-Data](https://github.com/ULDataProfessor/SEDAR-Data/blob/master/docs/sedar-plus-and-data-access.md)
- **Verdict: Not OK** for scraping or commercial redistribution without a license from the ASC/CSA. Two versions of the terms exist, so confirm the current one.

**Canada: SEDI (insider reports)**
- The public terms bar "Any use, copying or reproduction of all or any part of the Proprietary Content, directly or indirectly, for commercial purposes or any distribution, re-transmission, republication, repackaging, modification, sale, dissemination or other exploitation". "Any unauthorized use... is strictly prohibited". The ASC is "the CSA member authorized to grant licenses." — [SEDI Terms of Use – Public](https://sedi.ca/sedi/disclaimer_en.html)
- **Verdict: Not OK** without an ASC license.

**Canada: Bank of Canada Valet API**
- The Bank's terms prohibit circumventing its limits on "request number or frequency", explicitly covering Valet. The how-to guide says "no cost" and tells users to follow the terms. — [Bank of Canada Terms](https://www.bankofcanada.ca/terms/); [Valet API how-to](https://www.bankofcanada.ca/valet-api-how-to/)
- A secondary source quotes the terms as allowing use, copying, distribution and transmission with attribution: "You must attribute the Bank of Canada as the source of the content, and indicate if changes were made." The logo and wordmark may not be used commercially without authorization. Exchange rates are "for statistical and analytical use only", not FX trade benchmarks. — [browser-use Bank of Canada skill page (secondary)](https://browser-use.com/skills/bank-of-canada)
- **Verdict: Likely Commercial OK with attribution (unverified against primary text).**

**Canada: Statistics Canada**
- The Open Licence FAQ "specifically allows its further distribution for both commercial and non-commercial ventures. There are no fees for any such use." "You must always acknowledge Statistics Canada as the source of the information." — [StatCan Open Licence FAQ](https://statcan.gc.ca/eng/reference/licence-faq); [StatCan Open Licence](https://statcan.gc.ca/reference/licence)
- Users may not imply endorsement. Government of Canada official symbols may not be reproduced without written authorization. Older (2007) StatCan pages that prohibited commercial redistribution are superseded. — [StatCan copyright page](https://www.statcan.gc.ca/en/reference/copyright-droit-auteur-eng); [2007 archived conditions](https://bac-lac.wayback.archive-it.org/web/20071116004607/http://www.statcan.ca/english/reference/conditions.htm)
- **Verdict: Commercial OK** with attribution.

**Federal Reserve Board H.15 / Data Download Program**
- H.15 historical data is available via the DDP (`federalreserve.gov/datadownload/Build.aspx?rel=H15`), with bulk ZIP downloads. — [H.15 data file](https://www.federalreserve.gov/releases/h15/data/Business_day/H15_TB_M3.txt)
- No search results addressed copyright or licensing.
- **Verdict: Likely Commercial OK (see Inferences).**

### Inferences
- **17 USC 105 baseline [UNVERIFIED, background knowledge]:** works of the U.S. Government are not copyrightable. This covers BLS, BEA, Treasury, CFTC, Fed Board staff-produced data, EIA, USDA, NOAA, Census and Federal Register content. The Federal Reserve Banks (including St. Louis/FRED) are not federal agencies in the copyright sense, so FRED's own terms govern. SEC filings are authored by private filers, not the government. Copyright in filed documents is rarely asserted, and reuse of EDGAR filings is an established industry practice (all major data vendors redistribute them). The legal footing there is practice and the SEC's free-access posture, not 17 USC 105 itself.
- **FRED third-party series [UNVERIFIED, background knowledge]:** commonly copyrighted series include S&P/Case-Shiller home price indices (S&P Dow Jones Indices), ICE BofA bond indices and OAS spreads (ICE Data Indices; FRED cut these to a rolling 3-year history in 2020 under ICE's licensing), Moody's seasoned Aaa/Baa yields, Wilshire indices (removed from FRED in 2024), the S&P 500 and Dow Jones (FRED carries only about 10 years), NASDAQ indices, CBOE VIX, University of Michigan consumer sentiment, and the Chicago Fed/NFCI. The safe pattern is to filter by each series' `notes` field for "Copyright" and source those series from the originating agency (e.g., Moody's yields have no public-domain substitute; Treasury yields can come from Treasury directly).
- **Fed H.15 [UNVERIFIED, background knowledge]:** the Board removed ICE-sourced LIBOR and swap rates from H.15 years ago, apparently for licensing reasons. The remaining H.15 series (fed funds, Treasury CMT, T-bills, commercial paper) are Board/Treasury-sourced and generally treated as public domain.
- **Other U.S. sources [UNVERIFIED, background knowledge; verdict Commercial OK unless noted]:**
  - *Treasury Fiscal Data API* (api.fiscaldata.treasury.gov): no key, JSON/CSV/XML, Daily Treasury Statement, debt to the penny, auctions, average interest rates. Data is public domain.
  - *Treasury daily par yield curve*: XML/CSV feed published after market close, about 3:30 to 6 pm ET.
  - *CFTC Commitments of Traders*: weekly, Tuesday positions released Friday 3:30 pm ET. Free bulk files plus a Socrata API at publicreporting.cftc.gov. Public domain.
  - *USASpending.gov API*: no key, public domain. Useful for contractor (ticker-mapped) award flows.
  - *SAM.gov API*: requires an API key tied to a SAM account. Some entity data is restricted ("FOUO"/sensitive), but public opportunities and entity data are fine. Daily rate limits depend on account role (roughly 10 to 1,000 per day, unverified).
  - *EIA API v2*: free key, public domain, asks for attribution to EIA. Weekly petroleum status is Wednesday 10:30 am ET, natural gas storage Thursday 10:30 am ET.
  - *USDA NASS QuickStats, ERS and WASDE*: public domain, with the WASDE monthly report the key one for ag futures.
  - *NOAA/NCEI*: public domain, but some NOAA products include WMO/third-party data with restrictions.
  - *Federal Register API*: no key, public domain.
  - *USPTO Open Data Portal / PatentsView*: patent data is public domain. PatentsView has historically stated its data is CC BY 4.0, and its API now requires a key (unverified this session).
  - *Drugs@FDA*: downloadable zip, public domain.
  - *FDA advisory committee calendar*: HTML only, no API. Requires scraping fda.gov, which has no published scraping ban (unverified).
- **SEC datasets [UNVERIFIED, background knowledge]:**
  - *submissions API* (data.sec.gov/submissions/CIK##########.json): filing index per CIK, updated in near real time.
  - *companyfacts / companyconcept / frames* (data.sec.gov/api/xbrl/...): XBRL financial facts. Frames give one concept across all companies for a period.
  - *Full-text search* (efts.sec.gov): 2001 onward, not an officially documented API.
  - *Forms 3/4/5*: XML since 2003. Form 4 is due within 2 business days.
  - *13F*: quarterly, 45 days after quarter end. Structured 13F data sets are on the SEC's DERA page.
  - *13D/13G*: structured XML required since Dec 2024 under the amended beneficial-ownership rules. The 13D deadline is now 5 business days.
  - *8-K*: item numbers are in the submissions/index metadata.
  - *N-PORT*: public quarterly-lagged data sets.
  - *Fails-to-Deliver*: published twice monthly with about a 2-week lag.
  - *DERA Financial Statement Data Sets*: quarterly zips. Insider Transactions Data Sets are quarterly.
  - All are public, and the same 10 req/s plus User-Agent rule applies to data.sec.gov.
- **Practical recommendation:** for a paid trader tool, the green-light set is EDGAR (all), BLS, BEA, Treasury, the Fed Board, CFTC, EIA, USDA, USASpending, openFDA (excluding label text, pending check), ClinicalTrials.gov, the Federal Register, USPTO, GDELT, StatCan and probably the Bank of Canada. The red-light set is FRED copyrighted series, raw congressional disclosures (statutory), SEDAR+ and SEDI (contractual), and French library raw files (copyright).

### Gaps
- Full verbatim FRED terms (internal-commercial clause truncated) could not be fetched because the host was blocked.
- I found no SEC statement on copyright or public-domain status of sec.gov content, and the full "Privacy and Security" fair-access text was not fetched.
- I found no primary-source terms for BEA, ClinicalTrials.gov, the Treasury Fiscal Data API, CFTC, USASpending, SAM.gov, EIA, USPTO/PatentsView, the Federal Register, NOAA or USDA. These verdicts rest on background knowledge.
- I found no evidence of how Capitol Trades and Unusual Whales legally justify congressional-trade use, and no DOJ enforcement history under 13107(c) against data aggregators.
- The full text of the Bank of Canada terms reuse clause was not seen directly, only via a secondary source.
- French Data Library: no explicit license or commercial-use statement located.

---

## Q2. Any restrictions on bulk scraping, caching, or commercial resale?

### Takeaway
U.S. federal sources restrict access (rate limits, keys, User-Agent) rather than reuse. Canadian securities regulators (SEDAR+, SEDI) explicitly prohibit both scraping and commercial redistribution. FRED restricts commercial redistribution of third-party series, and congressional disclosures are restricted by statute.

### Cited Findings
- **SEC:** 10 req/s maximum, User-Agent with company name and email required, and the SEC can rate-limit to preserve fair access. — [SEC: Accessing EDGAR Data](https://www.sec.gov/os/accessing-edgar-data)
- **SEC:** "does not allow botnets or automated tools to crawl the site" without following its guidelines (search summary). — [SEC: Accessing EDGAR Data](https://www.sec.gov/os/accessing-edgar-data)
- **openFDA:** 240/min and 120k/day with a key. — [openFDA Authentication](https://open.fda.gov/apis/authentication)
- **BLS:** 500/day registered, with annual key renewal. — [BLS API FAQs](https://www.bls.gov/developers/api_faqs.htm)
- **Bank of Canada:** may not circumvent request number or frequency limits. — [Bank of Canada Terms](https://www.bankofcanada.ca/terms/)
- **ClinicalTrials.gov:** about 3 req/s recommended, with HTTP 429 on excess (secondary). — [BioMCP docs](https://glama.ai/mcp/servers/@genomoncology/biomcp/blob/117cbf50ecab72819025bb21cc6d6d20afec27d5/docs/backend-services-reference/04-clinicaltrials-gov.md)
- **SEDAR+:** scraping, robots and "manual process to... copy" are prohibited, and the ASC may limit or block access. — [SEDAR+ Terms of Use](https://www.sedarplus.ca/onlinehelp/terms-of-use/)
- **SEDI:** commercial "re-transmission, republication, repackaging... sale" is prohibited. — [SEDI Terms – Public](https://sedi.ca/sedi/disclaimer_en.html)
- **FRED:** commercial redistribution of third-party data requires express written permission. — [FRED Legal](https://fred.stlouisfed.org/legal/)
- **GDELT:** redistribution, rehosting and mirroring are expressly permitted with citation plus link. — [GDELT About](https://www.gdeltproject.org/about.html)
- **StatCan:** commercial redistribution is expressly permitted with attribution. — [StatCan Licence FAQ](https://statcan.gc.ca/eng/reference/licence-faq)

### Inferences
- Caching and storing derived results from U.S. public-domain sources is unrestricted. The binding constraints are polite crawling (SEC: stay well under 10 req/s; use the nightly bulk zips `companyfacts.zip` and `submissions.zip` instead of per-CIK polling [UNVERIFIED, background knowledge]).
- For Canada, the compliant route for issuer filings and insider trades is a commercial data license (from the CSA/ASC or a licensed redistributor). Building on scraped SEDAR+/SEDI data exposes the product to contract and possibly copyright claims.
- For FRED, a pipeline should ingest only series without "Copyright" in their notes, or pull the same series directly from the originating U.S. agency.

### Gaps
- Whether SEDAR+ offers a paid bulk/commercial data feed, and its price, was not found.
- Whether SAM.gov's API terms restrict commercial redisplay of entity data was not verified.

---

## Q3. What's the practical data quality / gotchas (amendments, PDF-only, latency)?

### Takeaway
Key gotchas: congressional PTRs are partly scanned or handwritten PDFs with 30 to 45 day lags and value ranges, not exact amounts. SEC XBRL contains restatements and duplicate facts across filings. FRED's third-party histories are truncated. Bank of Canada FX is not a trading benchmark. BLS keys expire annually.

### Cited Findings
- STOCK Act PTRs are due within 30 to 45 days of the trade, so data is inherently lagged. — [Wikipedia: STOCK Act](https://en.wikipedia.org/wiki/STOCK_Act)
- The House Clerk's financial disclosure search is the official access point. — [House Clerk Financial Disclosure](https://disclosures-clerk.house.gov/FinancialDisclosure/ViewSearch)
- Bank of Canada rates are "for statistical and analytical use only" (secondary). — [browser-use BoC page](https://browser-use.com/skills/bank-of-canada)
- BLS keys must be renewed annually, and users should cite the retrieval date. — [BLS API FAQs](https://www.bls.gov/developers/api_faqs.htm); [BLS ToS](https://www.bls.gov/developers/termsOfService.htm)
- Quiver's process (download, parse, compute returns) shows that congressional data needs custom parsing. — [Quiver](https://www.quiverquant.com/congresstrading/)

### Inferences [UNVERIFIED, background knowledge]
- **House PTRs:** the House Clerk publishes an annual XML/ZIP index of filings (`FD.zip`), but the PTR documents themselves are PDFs. Electronic filings are machine-generated, while paper filings are scanned images needing OCR. Senate eFD is HTML for electronic PTRs, with scanned PDFs for paper ones. The Senate site requires accepting a terms-of-use acknowledgment (13107 prohibitions) before search. Amounts are ranges ($1,001 to $15,000, etc.), and amendments and late filings are common.
- **SEC XBRL companyfacts:** the same fact appears in multiple filings (original plus later 10-K comparatives). Deduplicate using the `frame` field or the latest `filed` date. Restatements in amended 10-K/A filings change history. Custom (extension) tags and sign conventions vary, and Q4 values are often only derivable as FY minus 9M.
- **Form 4:** amendments (4/A) supersede earlier filings. Footnotes carry weighted-average prices, and transaction codes (P/S/A/M/F/G) must be filtered to find open-market trades.
- **13F:** 45-day lag, long positions only. Pre-2023 value fields were in thousands and are now in dollars (a units change). Confidential treatment can delay holdings.
- **FTD:** about a 2-week lag. Counts are cumulative fails, not daily new fails.
- **CFTC COT:** Tuesday data released Friday, delayed further by government holidays and shutdowns.
- **FRED:** values are revised (ALFRED vintages exist). ICE BofA series show only a rolling 3 years.
- **openFDA:** FAERS adverse events are unverified, lag by a quarter, and contain duplicates. Recall (enforcement) data updates weekly.
- **ClinicalTrials.gov:** sponsor-reported, with frequent date updates. v2 changed field names from the legacy API.
- **GDELT:** 15-minute updates, high noise and duplicates. Tone scores are machine-generated.
- **French library:** monthly updates, with history occasionally revised when CRSP data is revised.

### Gaps
- I could not confirm the current format of House Clerk PTR electronic filings (whether structured XML per PTR is now offered) or Senate eFD's current terms text.
- Exact latency figures for most sources were not verified via primary sources this session.
