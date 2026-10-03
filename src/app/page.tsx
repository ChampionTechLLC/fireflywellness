import type { Metadata } from "next";
import { HomePageContent } from "@/components/HomePageContent";
import { LocalBusinessJsonLd } from "@/components/LocalBusinessJsonLd";
import { buildPageMetadata } from "@/lib/pageMetadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Psychiatric Care & Therapy in Hinsdale | Firefly Wellness",
  description:
    "Firefly Wellness offers therapy, ADHD testing, and psychiatric medication in Hinsdale, IL—serving Oak Brook, Clarendon Hills, Western Springs, Westmont, and nearby western suburbs.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <LocalBusinessJsonLd />
      <HomePageContent />
    </>
  );
}
