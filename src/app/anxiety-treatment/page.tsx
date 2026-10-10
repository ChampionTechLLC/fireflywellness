import type { Metadata } from "next";
import { AnxietyTreatmentPageContent } from "@/components/ServicePagesContent";
import { ServicePageJsonLd } from "@/components/ServicePageJsonLd";
import { getServicePagesContent } from "@/data/servicePages";
import { buildPageMetadata } from "@/lib/pageMetadata";

const page = getServicePagesContent("en").anxietyTreatment;

export const metadata: Metadata = buildPageMetadata({
  title: page.meta.title,
  description: page.meta.description,
  path: "/anxiety-treatment",
});

export default function AnxietyTreatmentPage() {
  return (
    <>
      <ServicePageJsonLd pageKey="anxietyTreatment" path="/anxiety-treatment" />
      <AnxietyTreatmentPageContent />
    </>
  );
}
