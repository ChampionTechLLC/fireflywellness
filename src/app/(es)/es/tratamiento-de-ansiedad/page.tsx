import type { Metadata } from "next";
import { ServicePage, servicePageMetadata } from "@/components/LocalizedPages";

export const metadata: Metadata = servicePageMetadata("anxietyTreatment", "es");

export default function AnxietyTreatmentPage() {
  return <ServicePage pageKey="anxietyTreatment" locale="es" />;
}
