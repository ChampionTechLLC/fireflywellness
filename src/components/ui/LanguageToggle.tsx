"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { languageToggle } from "@/styles";
import type { Locale } from "@/data/siteContent";

const options: Array<{ locale: Locale; label: string }> = [
  { locale: "en", label: "EN" },
  { locale: "es", label: "ES" },
];

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { locale, setLocale, content } = useLanguage();

  return (
    <div
      className={`${languageToggle.root} ${className}`.trim()}
      role="group"
      aria-label={content.language.toggleLabel}
    >
      {options.map((option) => {
        const active = option.locale === locale;
        const label =
          option.locale === "en"
            ? content.language.english
            : content.language.spanish;

        return (
          <button
            key={option.locale}
            type="button"
            className={`${languageToggle.option} ${
              active ? languageToggle.active : languageToggle.inactive
            }`}
            aria-label={label}
            aria-pressed={active}
            onClick={() => setLocale(option.locale)}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
