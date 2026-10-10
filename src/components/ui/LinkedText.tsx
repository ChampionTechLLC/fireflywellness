"use client";

import NextLink from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { BRAINCHECK_URL, TEMPUS_URL, TOVA_URL } from "@/constants";

const externalLabels = {
  BrainCheck: BRAINCHECK_URL,
  "T.O.V.A.": TOVA_URL,
  Tempus: TEMPUS_URL,
} as const;

const PROVIDER_HREF = "/#clinicians";
const providerLabels = new Set([
  "Psychiatric-Mental Health Nurse Practitioner (PMHNP)",
  "PMHNP",
]);

// Longer provider phrase must come before "PMHNP" so the full phrase wins.
const linkedTextPattern =
  /(Psychiatric-Mental Health Nurse Practitioner \(PMHNP\)|PMHNP|BrainCheck|T\.O\.V\.A\.|Tempus)/g;
const linkClassName =
  "text-inherit rounded underline underline-offset-2 transition-colors hover:text-heading focus:outline-none focus:ring-2 focus:ring-heading focus:ring-offset-2";

type LinkedTextProps = {
  children: string;
};

export function LinkedText({ children }: LinkedTextProps) {
  const { localize } = useLanguage();
  const parts = children.split(linkedTextPattern);
  const firstProviderIndex = parts.findIndex((part) => providerLabels.has(part));

  return parts.map((part, i) => {
    if (providerLabels.has(part)) {
      if (i !== firstProviderIndex) return part;
      return (
        <NextLink
          key={`${part}-${i}`}
          href={localize(PROVIDER_HREF)}
          className={linkClassName}
        >
          {part}
        </NextLink>
      );
    }

    const href = externalLabels[part as keyof typeof externalLabels];

    if (!href) {
      return part;
    }

    return (
      <a
        key={`${part}-${i}`}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClassName}
      >
        {part}
      </a>
    );
  });
}
