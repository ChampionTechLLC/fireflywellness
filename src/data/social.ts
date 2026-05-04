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
  {
    id: "instagram",
    url: "https://www.instagram.com/fireflywellnesspllc/",
    icon: "/social/instagram.svg",
    label: "Instagram",
  },
  {
    id: "facebook",
    url: "https://www.facebook.com/fireflycounselingLLC/",
    icon: "/social/facebook.svg",
    label: "Facebook",
  },
];
