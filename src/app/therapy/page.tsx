import type { Metadata } from "next";
import { TherapyPageContent } from "@/components/ServicePagesContent";
import { getServicePagesContent } from "@/data/servicePages";

const page = getServicePagesContent("en").therapy;

export const metadata: Metadata = {
  title: page.meta.title,
  description: page.meta.description,
};

export default function TherapyPage() {
  return <TherapyPageContent />;
}
