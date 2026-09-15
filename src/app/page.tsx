import type { Metadata } from "next";
import { HomePageContent } from "@/components/HomePageContent";
import { LocalBusinessJsonLd } from "@/components/LocalBusinessJsonLd";
import { SITE_URL } from "@/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Therapy & Psychiatric Care in Hinsdale | Firefly Wellness",
  description:
    "Firefly Wellness offers therapy, ADHD testing, and psychiatric medication in Hinsdale, IL—serving Oak Brook, Clarendon Hills, Western Springs, Westmont, and nearby western suburbs.",
};

export default function Home() {
  return (
    <>
      <LocalBusinessJsonLd />
      <HomePageContent />
    </>
  );
}
