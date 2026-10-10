import type { Metadata } from "next";
import { ServicesHubPage, servicesHubMetadata } from "@/components/LocalizedPages";

export const metadata: Metadata = servicesHubMetadata("en");

export default function ServicesPage() {
  return <ServicesHubPage locale="en" />;
}
