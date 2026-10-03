import type { Metadata } from "next";
import { alt as ogImageAlt, size as ogImageSize } from "@/app/opengraph-image";

const ogImage = {
  url: "/opengraph-image",
  width: ogImageSize.width,
  height: ogImageSize.height,
  alt: ogImageAlt,
};

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function buildPageMetadata({
  title,
  description,
  path,
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: "Firefly Wellness",
      type: "website",
      locale: "en_US",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
