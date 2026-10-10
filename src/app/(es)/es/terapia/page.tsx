import type { Metadata } from "next";
import { ServicePage, servicePageMetadata } from "@/components/LocalizedPages";

export const metadata: Metadata = servicePageMetadata("therapy", "es");

export default function TherapyPage() {
  return <ServicePage pageKey="therapy" locale="es" />;
}
