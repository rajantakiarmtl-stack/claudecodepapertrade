import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/legal-page";

export const Route = createFileRoute("/privacy")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Privacy Policy · Show The Tape" },
      { name: "description", content: "What Show The Tape collects, why, who processes it, and your rights under Québec and Canadian law." },
      { property: "og:title", content: "Privacy Policy · Show The Tape" },
      { property: "og:description", content: "What Show The Tape collects, why, who processes it, and your rights." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://showthetape.com/privacy" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://showthetape.com/privacy" }],
  }),
  component: () => (
    <LegalPage
      title="Privacy Policy"
      updated="November 22, 2026"
      sections={[
        { h: "Who we are.", p: "Show The Tape (\"we\") runs showthetape.com. Person responsible for the protection of personal information: the site operator, reachable at privacy@showthetape.com." },
        { h: "What we collect.", p: "Your email address, the date and wording of your consent, and basic technical data (IP address, browser type) needed to run and secure the site. We do not collect payment or brokerage information." },
        { h: "Why.", p: "To send you the daily recap and occasional updates you asked for, to secure the site and prevent abuse, and to understand overall site use." },
        { h: "Service providers.", p: "We use Lovable/Supabase (hosting and database), Cloudflare (domain, security) and beehiiv (email delivery). Some of these providers store data outside Québec and Canada, including in the United States, where it may be accessible to local authorities. We assessed these transfers and require providers to protect your information." },
        { h: "Consent and withdrawal.", p: "We email you only with your express consent. Every email has an unsubscribe link, and you can withdraw consent at any time by unsubscribing or writing to privacy@showthetape.com." },
        { h: "Retention.", p: "We keep your email while you are subscribed and delete it within 90 days after you unsubscribe, unless the law requires otherwise." },
        { h: "Your rights.", p: "You may access, correct or delete your information, withdraw consent, and file a complaint with the Commission d'accès à l'information du Québec or the Office of the Privacy Commissioner of Canada. Write to privacy@showthetape.com; we respond within 30 days." },
        { h: "Cookies and analytics.", p: "We use only essential browser storage (to remember that you signed up) and Cloudflare Web Analytics, which counts page visits without cookies and without tracking individuals. We do not sell your information or use advertising trackers." },
        { h: "Security.", p: "We use reasonable safeguards. If a confidentiality incident creates a risk of serious injury, we will notify you and the authorities as required by law." },
        { h: "Changes.", p: "We will post any changes here with a new date." },
      ]}
    />
  ),
});
