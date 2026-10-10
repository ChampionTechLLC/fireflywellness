"use client";

import { createContext, useContext, useMemo, type ReactNode } from "react";
import { getSiteContent, type Locale } from "@/data/siteContent";
import { localizedPath } from "@/lib/routes";

type LanguageContextValue = {
  locale: Locale;
  content: ReturnType<typeof getSiteContent>;
  /** Maps an English internal href to the current locale's route. */
  localize: (href: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      content: getSiteContent(locale),
      localize: (href) => localizedPath(href, locale),
    }),
    [locale],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}
