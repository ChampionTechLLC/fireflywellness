import type { Metadata } from "next";
import { ServicesHubPage, servicesHubMetadata } from "@/components/LocalizedPages";

export const metadata: Metadata = servicesHubMetadata("es");

export default function ServicesPage() {
  return <ServicesHubPage locale="es" />;
}
