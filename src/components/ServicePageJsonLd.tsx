import { SITE_URL } from "@/constants";
import { locationData } from "@/data/location";
import {
  getServicePagesContent,
  type ServicePagesContent,
} from "@/data/servicePages";
import type { Locale } from "@/data/siteContent";
import { BUSINESS_ID, medicalBusinessJsonLd } from "@/lib/businessJsonLd";
import { localizedPath, type EnglishPath } from "@/lib/routes";

type ServicePageKey = Exclude<keyof ServicePagesContent, "hub">;

const pagePaths: Record<ServicePageKey, EnglishPath> = {
  therapy: "/therapy",
  adhdTesting: "/adhd-testing",
  medicationManagement: "/medication-management",
  anxietyTreatment: "/anxiety-treatment",
  depressionTreatment: "/depression-treatment",
};

type ServicePageJsonLdProps = {
  pageKey: ServicePageKey;
  locale: Locale;
};

export function ServicePageJsonLd({ pageKey, locale }: ServicePageJsonLdProps) {
  const address = locationData[0];
  if (!address) return null;

  const page = getServicePagesContent(locale)[pageKey];
  const pageUrl = new URL(
    localizedPath(pagePaths[pageKey], locale),
    SITE_URL,
  ).toString();
  const serviceId = `${pageUrl}#service`;
  const faqId = `${pageUrl}#faq`;

  const medicalTherapy = {
    "@type": "MedicalTherapy",
    "@id": serviceId,
    name: page.hero.title,
    description: page.meta.description,
    url: pageUrl,
    provider: { "@id": BUSINESS_ID },
    ...(page.condition
      ? {
          relevantSpecialty: "Psychiatric",
          about: { "@type": "MedicalCondition", name: page.condition },
        }
      : {}),
  };

  const faqPage = page.faq
    ? {
        "@type": "FAQPage",
        "@id": faqId,
        inLanguage: locale,
        mainEntity: page.faq.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
    : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: page.meta.title,
        description: page.meta.description,
        inLanguage: locale,
        about: { "@id": BUSINESS_ID },
        mainEntity: [
          { "@id": BUSINESS_ID },
          { "@id": serviceId },
          ...(faqPage ? [{ "@id": faqId }] : []),
        ],
      },
      medicalBusinessJsonLd(address, page.meta.description),
      medicalTherapy,
      ...(faqPage ? [faqPage] : []),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
