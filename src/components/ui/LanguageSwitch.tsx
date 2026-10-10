"use client";

import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/LanguageProvider";
import { alternatePath } from "@/lib/routes";
import { languageSwitch } from "@/styles";

/**
 * Plain anchor (not next/link): each language has its own root layout,
 * so switching always needs a full document load.
 */
export function LanguageSwitch() {
  const pathname = usePathname();
  const { locale, content } = useLanguage();
  const otherLocale = locale === "en" ? "es" : "en";

  return (
    <a
      href={alternatePath(pathname)}
      hrefLang={otherLocale}
      lang={otherLocale}
      aria-label={content.languageSwitch.ariaLabel}
      className={languageSwitch.link}
    >
      {content.languageSwitch.label}
    </a>
  );
}
