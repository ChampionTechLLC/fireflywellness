import type { Metadata } from "next";
import { FeesPage, feesMetadata } from "@/components/LocalizedPages";

export const metadata: Metadata = feesMetadata("en");

export default function InsuranceFeesPage() {
  return <FeesPage locale="en" />;
}
