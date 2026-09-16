import { HERO_LOGO_URL, SITE_URL } from "@/constants";
import { locationData } from "@/data/location";
import { getServicePagesContent } from "@/data/servicePages";
import { socialLinks } from "@/data/social";

const areaServed = [
  "Hinsdale, IL",
  "Oak Brook, IL",
  "Clarendon Hills, IL",
  "Western Springs, IL",
  "Westmont, IL",
];

export function ServicesHubJsonLd() {
  const address = locationData[0];
  if (!address) return null;

  const hub = getServicePagesContent("en").hub;
  const logoUrl = new URL(HERO_LOGO_URL, SITE_URL).toString();
  const servicesUrl = new URL("/services", SITE_URL).toString();
  const businessId = `${SITE_URL}/#medicalbusiness`;

  const serviceListId = `${servicesUrl}#servicelist`;
  const faqId = `${servicesUrl}#faq`;

  const medicalBusiness = {
    "@type": "MedicalBusiness",
    "@id": businessId,
    name: "Firefly Wellness, PLLC",
    alternateName: "Firefly Counseling",
    url: SITE_URL,
    image: logoUrl,
    logo: logoUrl,
    description: hub.meta.description,
    ...(address.phone
      ? { telephone: address.phone.replace(/\./g, "-") }
      : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: [address.address1, address.address2]
        .filter(Boolean)
        .join(", "),
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.zip,
      addressCountry: "US",
    },
    areaServed: areaServed.map((name) => ({
      "@type": "City",
      name,
    })),
    sameAs: socialLinks.map((link) => link.url),
  };

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
        url: new URL(offering.href, SITE_URL).toString(),
        provider: { "@id": businessId },
      },
    })),
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": faqId,
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
        about: { "@id": businessId },
        mainEntity: [
          { "@id": businessId },
          { "@id": serviceListId },
          { "@id": faqId },
        ],
      },
      medicalBusiness,
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
