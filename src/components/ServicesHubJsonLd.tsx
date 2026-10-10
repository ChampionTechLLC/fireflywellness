import { SITE_URL } from "@/constants";
import { locationData } from "@/data/location";
import { getServicePagesContent } from "@/data/servicePages";
import type { Locale } from "@/data/siteContent";
import { BUSINESS_ID, medicalBusinessJsonLd } from "@/lib/businessJsonLd";
import { localizedPath } from "@/lib/routes";

export function ServicesHubJsonLd({ locale }: { locale: Locale }) {
  const address = locationData[0];
  if (!address) return null;

  const hub = getServicePagesContent(locale).hub;
  const servicesUrl = new URL(
    localizedPath("/services", locale),
    SITE_URL,
  ).toString();
  const serviceListId = `${servicesUrl}#servicelist`;
  const faqId = `${servicesUrl}#faq`;

  const serviceList = {
    "@type": "ItemList",
    "@id": serviceListId,
    name: hub.offeringsTitle,
    itemListElement: hub.offerings.map((offering, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "MedicalTherapy",
        name: offering.title,
        description: offering.blurb,
        url: new URL(localizedPath(offering.href, locale), SITE_URL).toString(),
        provider: { "@id": BUSINESS_ID },
      },
    })),
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": faqId,
    inLanguage: locale,
    mainEntity: hub.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${servicesUrl}#webpage`,
        url: servicesUrl,
        name: hub.meta.title,
        description: hub.meta.description,
        inLanguage: locale,
        about: { "@id": BUSINESS_ID },
        mainEntity: [
          { "@id": BUSINESS_ID },
          { "@id": serviceListId },
          { "@id": faqId },
        ],
      },
      medicalBusinessJsonLd(address, hub.meta.description),
      serviceList,
      faqPage,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
