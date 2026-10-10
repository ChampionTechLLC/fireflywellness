import type { Metadata } from "next";
import { FeesPageContent } from "@/components/FeesPageContent";
import { HomePageContent } from "@/components/HomePageContent";
import { LocalBusinessJsonLd } from "@/components/LocalBusinessJsonLd";
import { ServicePageJsonLd } from "@/components/ServicePageJsonLd";
import {
  ServicePageContent,
  ServicesHubPageContent,
} from "@/components/ServicePagesContent";
import { ServicesHubJsonLd } from "@/components/ServicesHubJsonLd";
import { SITE_URL } from "@/constants";
import { getFeesPageContent } from "@/data/feesPage";
import {
  getServicePagesContent,
  type ServicePagesContent,
} from "@/data/servicePages";
import { getSiteContent, type Locale } from "@/data/siteContent";
import { BUSINESS_ID } from "@/lib/businessJsonLd";
import { buildPageMetadata } from "@/lib/pageMetadata";
import { localizedPath } from "@/lib/routes";

type ServicePageKey = Exclude<keyof ServicePagesContent, "hub">;

const servicePagePaths: Record<ServicePageKey, string> = {
  therapy: "/therapy",
  adhdTesting: "/adhd-testing",
  medicationManagement: "/medication-management",
  anxietyTreatment: "/anxiety-treatment",
  depressionTreatment: "/depression-treatment",
};

export function homeMetadata(locale: Locale): Metadata {
  const { meta } = getSiteContent(locale).home;
  return buildPageMetadata({ ...meta, path: "/", locale });
}

export function HomePage({ locale }: { locale: Locale }) {
  return (
    <>
      <LocalBusinessJsonLd locale={locale} />
      <HomePageContent />
    </>
  );
}

export function servicesHubMetadata(locale: Locale): Metadata {
  const { meta } = getServicePagesContent(locale).hub;
  return buildPageMetadata({ ...meta, path: "/services", locale });
}

export function ServicesHubPage({ locale }: { locale: Locale }) {
  return (
    <>
      <ServicesHubJsonLd locale={locale} />
      <ServicesHubPageContent />
    </>
  );
}

export function servicePageMetadata(
  pageKey: ServicePageKey,
  locale: Locale,
): Metadata {
  const { meta } = getServicePagesContent(locale)[pageKey];
  return buildPageMetadata({
    ...meta,
    path: servicePagePaths[pageKey],
    locale,
  });
}

export function ServicePage({
  pageKey,
  locale,
}: {
  pageKey: ServicePageKey;
  locale: Locale;
}) {
  return (
    <>
      <ServicePageJsonLd pageKey={pageKey} locale={locale} />
      <ServicePageContent pageKey={pageKey} />
    </>
  );
}

export function feesMetadata(locale: Locale): Metadata {
  const { meta } = getFeesPageContent(locale);
  return buildPageMetadata({ ...meta, path: "/insurance-fees", locale });
}

export function FeesPage({ locale }: { locale: Locale }) {
  const page = getFeesPageContent(locale);
  const pageUrl = new URL(
    localizedPath("/insurance-fees", locale),
    SITE_URL,
  ).toString();

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
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        inLanguage: locale,
        mainEntity: page.faq.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

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
