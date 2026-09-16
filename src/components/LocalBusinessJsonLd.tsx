import { HERO_LOGO_URL, SITE_URL } from "@/constants";
import { locationData } from "@/data/location";
import { socialLinks } from "@/data/social";

const areaServed = [
  "Hinsdale, IL",
  "Oak Brook, IL",
  "Clarendon Hills, IL",
  "Western Springs, IL",
  "Westmont, IL",
];

export function LocalBusinessJsonLd() {
  const address = locationData[0];
  if (!address) return null;

  const logoUrl = new URL(HERO_LOGO_URL, SITE_URL).toString();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Firefly Wellness, PLLC",
    alternateName: "Firefly Counseling",
    url: SITE_URL,
    image: logoUrl,
    logo: logoUrl,
    description:
      "Firefly Wellness offers therapy, ADHD testing, and psychiatric medication in Hinsdale, IL and nearby western suburbs.",
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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
