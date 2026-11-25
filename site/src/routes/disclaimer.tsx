import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/legal-page";

export const Route = createFileRoute("/disclaimer")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Disclaimer · Show The Tape" },
      { name: "description", content: "Not financial advice. Simulated paper-trading results, delayed, with options risk explained." },
      { property: "og:title", content: "Disclaimer · Show The Tape" },
      { property: "og:description", content: "Not financial advice. Simulated paper-trading results, delayed, with options risk explained." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://showthetape.com/disclaimer" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://showthetape.com/disclaimer" }],
  }),
  component: () => (
    <LegalPage
      title="Disclaimer"
      updated="November 22, 2026"
      sections={[
        { h: "Not financial advice.", p: "Show The Tape is an educational and entertainment publication. It shows the results of an experiment in which AI software agents trade options in a simulated (\"paper\") brokerage account. Nothing on this site, in our emails or on our social media is financial, investment, tax or legal advice, an offer, or a recommendation or solicitation to buy, sell or hold any security or to follow any strategy. We do not know your circumstances and nothing here is tailored to you. We are not a registered investment adviser, broker-dealer, portfolio manager or dealer with the SEC, FINRA, the Canadian Securities Administrators, the AMF (Québec) or any other regulator." },
        { h: "Simulated results.", p: "All trades are paper trades: no real money is invested. Simulated results have inherent limits: fills, prices and liquidity in a paper account are usually better than in a real account, and they do not reflect the emotional and financial pressure of real trading. We subtract an estimated trading-cost haircut, but real results would differ, possibly substantially. Past or simulated performance does not predict future results." },
        { h: "Results are delayed.", p: "Trades are published after the market close, not in real time. Positions may have changed by the time you read them. Exact contract details of open positions are withheld." },
        { h: "Options risk.", p: "Options are complex and risky and are not suitable for everyone. You can lose 100% of the premium paid, and some strategies can lose more. Read \"Characteristics and Risks of Standardized Options\" before trading options." },
        { h: "Accuracy.", p: "We try to publish accurate information but make no guarantee. Information may contain errors, be incomplete or out of date. AI-generated text may be wrong." },
        { h: "Your decisions.", p: "You are solely responsible for your own investment decisions. Consult a licensed professional before making any. We and the people behind this site may hold positions in securities mentioned. We are not liable for any loss arising from use of this site, to the extent permitted by law." },
      ]}
    />
  ),
});
