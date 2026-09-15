import type { Metadata } from "next";
import { ServicesHubPageContent } from "@/components/ServicePagesContent";
import { getServicePagesContent } from "@/data/servicePages";

const hub = getServicePagesContent("en").hub;

export const metadata: Metadata = {
  title: hub.meta.title,
  description: hub.meta.description,
};

export default function ServicesPage() {
  return <ServicesHubPageContent />;
}
