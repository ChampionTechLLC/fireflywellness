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

export function MedicationPageJsonLd() {
  const address = locationData[0];
  if (!address) return null;

  const page = getServicePagesContent("en").medicationManagement;
  const logoUrl = new URL(HERO_LOGO_URL, SITE_URL).toString();
  const pageUrl = new URL("/medication-management", SITE_URL).toString();
  const businessId = `${SITE_URL}/#medicalbusiness`;
  const serviceId = `${pageUrl}#service`;
  const faqId = `${pageUrl}#faq`;

  const medicalBusiness = {
    "@type": "MedicalBusiness",
    "@id": businessId,
    name: "Firefly Wellness, PLLC",
    alternateName: "Firefly Counseling",
    url: SITE_URL,
    image: logoUrl,
    logo: logoUrl,
    description: page.meta.description,
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

  const medicalTherapy = {
    "@type": "MedicalTherapy",
    "@id": serviceId,
    name: page.hero.title,
    description: page.meta.description,
    url: pageUrl,
    provider: { "@id": businessId },
  };

  const faqPage = page.faq
    ? {
        "@type": "FAQPage",
        "@id": faqId,
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
        about: { "@id": businessId },
        mainEntity: [
          { "@id": businessId },
          { "@id": serviceId },
          ...(faqPage ? [{ "@id": faqId }] : []),
        ],
      },
      medicalBusiness,
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
