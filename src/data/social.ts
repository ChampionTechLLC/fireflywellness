/**
 * Social media links for the "follow firefly" section.
 * Icon paths are static assets under public/social/ (e.g. /social/instagram.svg).
 */

export type SocialLink = {
  id: string;
  url: string;
  icon: string;
  label: string;
};

export const socialLinks: SocialLink[] = [
  { id: "instagram", url: "https://instagram.com", icon: "/social/instagram.svg", label: "Instagram" },
  { id: "facebook", url: "https://facebook.com", icon: "/social/facebook.svg", label: "Facebook" },
  { id: "twitter", url: "https://twitter.com", icon: "/social/twitter.svg", label: "Twitter" },
  { id: "linkedin", url: "https://linkedin.com", icon: "/social/linkedin.svg", label: "LinkedIn" },
];
