import { HERO_LOGO_URL, SITE_URL } from "@/constants";
import type { Address } from "@/data/location";
import { socialLinks } from "@/data/social";

export const BUSINESS_ID = `${SITE_URL}/#medicalbusiness`;

const areaServed = [
  "Hinsdale, IL",
  "Oak Brook, IL",
  "Clarendon Hills, IL",
  "Western Springs, IL",
  "Westmont, IL",
];

export function businessLocationJsonLd(address: Address) {
  return {
    ...(address.latitude != null && address.longitude != null
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude: address.latitude,
            longitude: address.longitude,
          },
        }
      : {}),
    ...(address.googleBusinessUrl ? { hasMap: address.googleBusinessUrl } : {}),
    sameAs: [
      ...socialLinks.map((link) => link.url),
      ...(address.googleBusinessUrl ? [address.googleBusinessUrl] : []),
    ],
  };
}

export function medicalBusinessJsonLd(address: Address, description: string) {
  const logoUrl = new URL(HERO_LOGO_URL, SITE_URL).toString();

  return {
    "@type": "MedicalBusiness",
    "@id": BUSINESS_ID,
    name: "Firefly Wellness, PLLC",
    alternateName: "Firefly Counseling",
    url: SITE_URL,
    image: logoUrl,
    logo: logoUrl,
    description,
    availableLanguage: ["English", "Spanish"],
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
    ...businessLocationJsonLd(address),
  };
}
