import type { Metadata } from "next";
import { MedicationManagementPageContent } from "@/components/ServicePagesContent";
import { getServicePagesContent } from "@/data/servicePages";

const page = getServicePagesContent("en").medicationManagement;

export const metadata: Metadata = {
  title: page.meta.title,
  description: page.meta.description,
};

export default function MedicationManagementPage() {
  return <MedicationManagementPageContent />;
}
