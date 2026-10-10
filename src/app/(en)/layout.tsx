import type { Metadata } from "next";
import { RootDocument } from "@/components/RootDocument";
import { rootMetadata } from "@/lib/pageMetadata";
import "../globals.css";

export const metadata: Metadata = {
  ...rootMetadata("en"),
  description:
    "Firefly Wellness offers therapy, ADHD testing, and psychiatric medication in Hinsdale, IL and nearby western suburbs.",
};

export default function EnglishLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootDocument locale="en">{children}</RootDocument>;
}
