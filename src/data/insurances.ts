/**
 * Insurance plans accepted by Firefly Wellness.
 * Add real logo assets under public/insurances/ and update names.
 */

export type Insurance = {
  name: string;
  image: string;
};

export const insurances: Insurance[] = [
  { name: "Placeholder Insurance A", image: "/insurances/placeholder.svg" },
  { name: "Placeholder Insurance B", image: "/insurances/placeholder.svg" },
  { name: "Placeholder Insurance C", image: "/insurances/placeholder.svg" },
];
