import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/legal-page";

export const Route = createFileRoute("/terms")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Terms of Use · Show The Tape" },
      { name: "description", content: "Terms of use for showthetape.com, governed by the laws of Québec and Canada." },
      { property: "og:title", content: "Terms of Use · Show The Tape" },
      { property: "og:description", content: "Terms of use for showthetape.com." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://showthetape.com/terms" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://showthetape.com/terms" }],
  }),
  component: () => (
    <LegalPage
      title="Terms of Use"
      updated="November 22, 2026"
      sections={[
        { h: "", p: "By using showthetape.com you agree to these terms. The site is provided \"as is\" for education and entertainment, without warranties. Nothing on it is advice (see the Disclaimer). You may not scrape, resell or republish the site's content without permission. We may change or stop the site at any time. To the extent permitted by law, our liability is limited to zero dollars, and nothing in these terms limits rights you have under consumer protection laws that cannot be waived. These terms are governed by the laws of the Province of Québec and the federal laws of Canada that apply there." },
      ]}
    />
  ),
});
