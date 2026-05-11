import { BRAINCHECK_URL, TEMPUS_URL, TOVA_URL } from "@/constants";

const linkedLabels = {
  BrainCheck: BRAINCHECK_URL,
  "T.O.V.A.": TOVA_URL,
  Tempus: TEMPUS_URL,
} as const;

const linkedTextPattern = /(BrainCheck|T\.O\.V\.A\.|Tempus)/g;
const linkClassName =
  "text-inherit rounded underline underline-offset-2 transition-colors hover:text-heading focus:outline-none focus:ring-2 focus:ring-heading focus:ring-offset-2";

type LinkedTextProps = {
  children: string;
};

export function LinkedText({ children }: LinkedTextProps) {
  const parts = children.split(linkedTextPattern);

  return parts.map((part, i) => {
    const href = linkedLabels[part as keyof typeof linkedLabels];

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
