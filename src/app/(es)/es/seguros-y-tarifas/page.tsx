import type { Metadata } from "next";
import { FeesPage, feesMetadata } from "@/components/LocalizedPages";

export const metadata: Metadata = feesMetadata("es");

export default function InsuranceFeesPage() {
  return <FeesPage locale="es" />;
}
