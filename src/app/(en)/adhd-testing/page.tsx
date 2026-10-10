import type { Metadata } from "next";
import { ServicePage, servicePageMetadata } from "@/components/LocalizedPages";

export const metadata: Metadata = servicePageMetadata("adhdTesting", "en");

export default function AdhdTestingPage() {
  return <ServicePage pageKey="adhdTesting" locale="en" />;
}
