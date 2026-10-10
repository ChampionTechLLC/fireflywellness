import type { Metadata } from "next";
import { CareersPageContent } from "@/components/CareersPageContent";
import { lcpcListing } from "@/data/careers";
import { buildPageMetadata } from "@/lib/pageMetadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Careers | Firefly Wellness",
  description: lcpcListing.intro[0],
  path: "/careers",
  locale: "en",
});

export default function CareersPage() {
  return <CareersPageContent />;
}
