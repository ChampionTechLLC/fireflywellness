import type { Metadata } from "next";
import { ServicePage, servicePageMetadata } from "@/components/LocalizedPages";

export const metadata: Metadata = servicePageMetadata("depressionTreatment", "en");

export default function DepressionTreatmentPage() {
  return <ServicePage pageKey="depressionTreatment" locale="en" />;
}
