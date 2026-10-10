import type { Metadata } from "next";
import { HomePage, homeMetadata } from "@/components/LocalizedPages";

export const metadata: Metadata = homeMetadata("en");

export default function Home() {
  return <HomePage locale="en" />;
}
