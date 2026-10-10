import type { MetadataRoute } from "next";
import { SITE_URL } from "@/constants";
import { localizedRoutes } from "@/lib/routes";

/** English paths; Spanish twins come from the route map. Update a date when content meaningfully changes. */
const pages = [
  { path: "/", lastModified: "2026-10-10" },
  { path: "/services", lastModified: "2026-10-10" },
  { path: "/therapy", lastModified: "2026-10-10" },
  { path: "/adhd-testing", lastModified: "2026-10-10" },
  { path: "/medication-management", lastModified: "2026-10-10" },
  { path: "/anxiety-treatment", lastModified: "2026-10-10" },
  { path: "/depression-treatment", lastModified: "2026-10-10" },
  { path: "/insurance-fees", lastModified: "2026-10-10" },
  { path: "/careers", lastModified: "2026-10-02" },
] as const;

const absolute = (path: string) => new URL(path, SITE_URL).toString();

function priority(path: string) {
  if (path === "/") return 1;
  if (path === "/services") return 0.9;
  return 0.8;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap(({ path, lastModified }) => {
    const spanishPath =
      localizedRoutes[path as keyof typeof localizedRoutes] ?? null;
    const shared = {
      lastModified,
      changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
      priority: priority(path),
    };

    if (!spanishPath) return [{ url: absolute(path), ...shared }];

    const alternates = {
      languages: { en: absolute(path), es: absolute(spanishPath) },
    };

    return [
      { url: absolute(path), alternates, ...shared },
      { url: absolute(spanishPath), alternates, ...shared },
    ];
  });
}
