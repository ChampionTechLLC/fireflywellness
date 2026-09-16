import type { MetadataRoute } from "next";
import { SITE_URL } from "@/constants";

const routes = [
  "/",
  "/services",
  "/therapy",
  "/adhd-testing",
  "/medication-management",
  "/careers",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((path) => ({
    url: new URL(path, SITE_URL).toString(),
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/services" ? 0.9 : 0.8,
  }));
}
