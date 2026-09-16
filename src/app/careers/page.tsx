import type { Metadata } from "next";
import { CareersPageContent } from "@/components/CareersPageContent";
import { lcpcListing } from "@/data/careers";

export const metadata: Metadata = {
  title: "Careers | Firefly Wellness",
  description: lcpcListing.intro[0],
};

export default function CareersPage() {
  return <CareersPageContent />;
}
