import { locationData } from "@/data/location";
import { getSiteContent, type Locale } from "@/data/siteContent";
import { medicalBusinessJsonLd } from "@/lib/businessJsonLd";

export function LocalBusinessJsonLd({ locale }: { locale: Locale }) {
  const address = locationData[0];
  if (!address) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    ...medicalBusinessJsonLd(
      address,
      getSiteContent(locale).home.meta.description,
    ),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
