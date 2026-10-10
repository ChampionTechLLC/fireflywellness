import type { Metadata } from "next";
import { alt as ogImageAlt, size as ogImageSize } from "@/app/opengraph-image";
import { SITE_URL } from "@/constants";
import type { Locale } from "@/data/siteContent";
import { localizedPath, localizedRoutes } from "@/lib/routes";

const ogImage = {
  url: "/opengraph-image",
  width: ogImageSize.width,
  height: ogImageSize.height,
  alt: ogImageAlt,
};

const ogLocales: Record<Locale, string> = { en: "en_US", es: "es_US" };

/** Site-wide defaults for each language's root layout. */
export function rootMetadata(locale: Locale): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: "Firefly Wellness",
    openGraph: {
      siteName: "Firefly Wellness",
      type: "website",
      locale: ogLocales[locale],
    },
    twitter: {
      card: "summary_large_image",
    },
    icons: {
      icon: [
        { url: "/icon.png", type: "image/png", sizes: "512x512" },
        { url: "/favicon.png", type: "image/png", sizes: "64x64" },
      ],
      apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
    },
  };
}

type PageMetadataInput = {
  title: string;
  description: string;
  /** English path; the Spanish URL is derived from the route map. */
  path: string;
  locale: Locale;
};

export function buildPageMetadata({
  title,
  description,
  path,
  locale,
}: PageMetadataInput): Metadata {
  const url = localizedPath(path, locale);
  const hasSpanish = path in localizedRoutes;
  const otherLocale: Locale = locale === "en" ? "es" : "en";

  return {
    title,
    description,
    alternates: {
      canonical: url,
      ...(hasSpanish
        ? {
            languages: {
              en: path,
              es: localizedPath(path, "es"),
              "x-default": path,
            },
          }
        : {}),
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Firefly Wellness",
      type: "website",
      locale: ogLocales[locale],
      ...(hasSpanish ? { alternateLocale: [ogLocales[otherLocale]] } : {}),
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
