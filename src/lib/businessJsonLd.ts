import type { Address } from "@/data/location";
import { socialLinks } from "@/data/social";

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
