import type { Metadata } from "next";
import { RootDocument } from "@/components/RootDocument";
import { rootMetadata } from "@/lib/pageMetadata";
import "../globals.css";

export const metadata: Metadata = {
  ...rootMetadata("es"),
  description:
    "Firefly Wellness ofrece terapia, evaluación de TDAH y medicación psiquiátrica en español en Hinsdale, IL y los suburbios del oeste cercanos.",
};

export default function SpanishLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootDocument locale="es">{children}</RootDocument>;
}
