import type { Metadata } from "next";
import { FeesPageContent } from "@/components/FeesPageContent";
import { SITE_URL } from "@/constants";
import { getFeesPageContent } from "@/data/feesPage";
import { buildPageMetadata } from "@/lib/pageMetadata";

const page = getFeesPageContent("en");

export const metadata: Metadata = buildPageMetadata({
  title: page.meta.title,
  description: page.meta.description,
  path: "/insurance-fees",
});

const pageUrl = new URL("/insurance-fees", SITE_URL).toString();

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: page.meta.title,
      description: page.meta.description,
      about: { "@id": `${SITE_URL}/#medicalbusiness` },
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: page.faq.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ],
};

export default function InsuranceFeesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FeesPageContent />
    </>
  );
}
