/**
 * Location/address data for the practice.
 */

export type Address = {
  address1: string;
  address2?: string;
  city: string;
  state: string;
  zip: string;
  fax?: string;
  /** Google Maps embed iframe src (Share > Embed a map). */
  mapEmbedUrl?: string;
};

export const locationData: Address[] = [
  {
    address1: "15 Spinning Wheel Road",
    address2: "Suite 232",
    city: "Hinsdale",
    state: "IL",
    zip: "60521",
    fax: "779-220-0850",
    mapEmbedUrl: "https://www.google.com/maps?q=15+Spinning+Wheel+Road,Suite+232,Hinsdale,IL+60521&output=embed&z=12",
  },
];
