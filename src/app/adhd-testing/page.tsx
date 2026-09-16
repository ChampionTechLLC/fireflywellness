import type { Metadata } from "next";
import { AdhdTestingPageContent } from "@/components/ServicePagesContent";
import { AdhdTestingPageJsonLd } from "@/components/AdhdTestingPageJsonLd";
import { getServicePagesContent } from "@/data/servicePages";

const page = getServicePagesContent("en").adhdTesting;

export const metadata: Metadata = {
  title: page.meta.title,
  description: page.meta.description,
};

export default function AdhdTestingPage() {
  return (
    <>
      <AdhdTestingPageJsonLd />
      <AdhdTestingPageContent />
    </>
  );
}
