import type { MetadataRoute } from "next";
import { SITE_URL } from "@/constants";

/** Update a page's date when its content meaningfully changes. */
const pages = [
  { path: "/", lastModified: "2026-10-02" },
  { path: "/services", lastModified: "2026-10-02" },
  { path: "/therapy", lastModified: "2026-10-02" },
  { path: "/adhd-testing", lastModified: "2026-10-02" },
  { path: "/medication-management", lastModified: "2026-10-02" },
  { path: "/careers", lastModified: "2026-10-02" },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, lastModified }) => ({
    url: new URL(path, SITE_URL).toString(),
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/services" ? 0.9 : 0.8,
  }));
}
