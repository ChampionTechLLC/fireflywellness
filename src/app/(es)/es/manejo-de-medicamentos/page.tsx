import type { Metadata } from "next";
import { ServicePage, servicePageMetadata } from "@/components/LocalizedPages";

export const metadata: Metadata = servicePageMetadata("medicationManagement", "es");

export default function MedicationManagementPage() {
  return <ServicePage pageKey="medicationManagement" locale="es" />;
}
