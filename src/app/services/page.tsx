import type { Metadata } from "next";
import { ServicesHubPageContent } from "@/components/ServicePagesContent";
import { ServicesHubJsonLd } from "@/components/ServicesHubJsonLd";
import { getServicePagesContent } from "@/data/servicePages";
import { buildPageMetadata } from "@/lib/pageMetadata";

const hub = getServicePagesContent("en").hub;

export const metadata: Metadata = buildPageMetadata({
  title: hub.meta.title,
  description: hub.meta.description,
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <ServicesHubJsonLd />
      <ServicesHubPageContent />
    </>
  );
}
