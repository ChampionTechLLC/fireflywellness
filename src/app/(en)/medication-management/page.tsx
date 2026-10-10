import type { Metadata } from "next";
import { ServicePage, servicePageMetadata } from "@/components/LocalizedPages";

export const metadata: Metadata = servicePageMetadata("medicationManagement", "en");

export default function MedicationManagementPage() {
  return <ServicePage pageKey="medicationManagement" locale="en" />;
}
