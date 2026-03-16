/**
 * Insurance plans accepted by Firefly Wellness.
 * Logo assets live under public/photos/insurance/.
 */

export type Insurance = {
  name: string;
  image: string;
};

export const insurances: Insurance[] = [
  { name: "Insurance", image: "/photos/insurance/1546_2.jpg" },
  { name: "Cigna", image: "/photos/insurance/1680709703cigna-logo-png_1.png" },
  { name: "Blue Cross Blue Shield", image: "/photos/insurance/bcbs_2.png" },
  { name: "Humana", image: "/photos/insurance/humana-logo_1.png" },
  { name: "Lyra", image: "/photos/insurance/lyra_1.png" },
  { name: "Medicare", image: "/photos/insurance/medicare-insurance_1.png" },
  { name: "TriWest", image: "/photos/insurance/triwest-insurance_1.png" },
  { name: "United Healthcare", image: "/photos/insurance/uhc-logo_2.png" },
];
