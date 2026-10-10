import type { Locale } from "@/data/siteContent";

/** English path → Spanish path. English is the canonical key used in data files. */
export const localizedRoutes = {
  "/": "/es",
  "/services": "/es/servicios",
  "/therapy": "/es/terapia",
  "/adhd-testing": "/es/evaluacion-tdah",
  "/medication-management": "/es/manejo-de-medicamentos",
  "/anxiety-treatment": "/es/tratamiento-de-ansiedad",
  "/depression-treatment": "/es/tratamiento-de-depresion",
  "/insurance-fees": "/es/seguros-y-tarifas",
} as const;

export type EnglishPath = keyof typeof localizedRoutes;

const englishBySpanish = Object.fromEntries(
  Object.entries(localizedRoutes).map(([en, es]) => [es, en]),
) as Record<string, EnglishPath>;

/**
 * Maps an internal English href (optionally with a #hash) to the given locale.
 * External URLs and English-only pages are returned unchanged.
 */
export function localizedPath(href: string, locale: Locale): string {
  if (locale === "en" || !href.startsWith("/")) return href;

  const [path, hash] = href.split("#");
  const target = localizedRoutes[(path || "/") as EnglishPath];
  if (!target) return href;

  return hash ? `${target}#${hash}` : target;
}

/** Returns the locale a pathname belongs to. */
export function localeFromPath(pathname: string): Locale {
  return pathname === "/es" || pathname.startsWith("/es/") ? "es" : "en";
}

/** Returns the same page in the other language, falling back to that language's home. */
export function alternatePath(pathname: string): string {
  if (localeFromPath(pathname) === "es") {
    return englishBySpanish[pathname] ?? "/";
  }
  return localizedRoutes[pathname as EnglishPath] ?? "/es";
}
