import type { Metadata } from "next";
import { MedicationManagementPageContent } from "@/components/ServicePagesContent";
import { MedicationPageJsonLd } from "@/components/MedicationPageJsonLd";
import { getServicePagesContent } from "@/data/servicePages";
import { buildPageMetadata } from "@/lib/pageMetadata";

const page = getServicePagesContent("en").medicationManagement;

export const metadata: Metadata = buildPageMetadata({
  title: page.meta.title,
  description: page.meta.description,
  path: "/medication-management",
});

export default function MedicationManagementPage() {
  return (
    <>
      <MedicationPageJsonLd />
      <MedicationManagementPageContent />
    </>
  );
}
