import type { Metadata } from "next";
import { AdhdTestingPageContent } from "@/components/ServicePagesContent";
import { AdhdTestingPageJsonLd } from "@/components/AdhdTestingPageJsonLd";
import { getServicePagesContent } from "@/data/servicePages";
import { buildPageMetadata } from "@/lib/pageMetadata";

const page = getServicePagesContent("en").adhdTesting;

export const metadata: Metadata = buildPageMetadata({
  title: page.meta.title,
  description: page.meta.description,
  path: "/adhd-testing",
});

export default function AdhdTestingPage() {
  return (
    <>
      <AdhdTestingPageJsonLd />
      <AdhdTestingPageContent />
    </>
  );
}
