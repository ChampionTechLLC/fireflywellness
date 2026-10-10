import type { Metadata } from "next";
import { DepressionTreatmentPageContent } from "@/components/ServicePagesContent";
import { ServicePageJsonLd } from "@/components/ServicePageJsonLd";
import { getServicePagesContent } from "@/data/servicePages";
import { buildPageMetadata } from "@/lib/pageMetadata";

const page = getServicePagesContent("en").depressionTreatment;

export const metadata: Metadata = buildPageMetadata({
  title: page.meta.title,
  description: page.meta.description,
  path: "/depression-treatment",
});

export default function DepressionTreatmentPage() {
  return (
    <>
      <ServicePageJsonLd
        pageKey="depressionTreatment"
        path="/depression-treatment"
      />
      <DepressionTreatmentPageContent />
    </>
  );
}
