"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getSiteContent, type Locale } from "@/data/siteContent";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  content: ReturnType<typeof getSiteContent>;
};

const LANGUAGE_STORAGE_KEY = "fireflywellness-language";

const LanguageContext = createContext<LanguageContextValue | null>(null);

function isLocale(value: string | null): value is Locale {
  return value === "en" || value === "es";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const storedLocale = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);

    if (isLocale(storedLocale)) {
      queueMicrotask(() => setLocaleState(storedLocale));
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, locale);
  }, [locale]);

  const value = useMemo<LanguageContextValue>(() => {
    const setLocale = (nextLocale: Locale) => setLocaleState(nextLocale);

    return {
      locale,
      setLocale,
      toggleLocale: () =>
        setLocaleState((currentLocale) =>
          currentLocale === "en" ? "es" : "en",
        ),
      content: getSiteContent(locale),
    };
  }, [locale]);

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
