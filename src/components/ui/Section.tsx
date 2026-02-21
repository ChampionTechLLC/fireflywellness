import { section } from "@/styles";

type SectionVariant = "white" | "green";

type SectionProps = {
  variant: SectionVariant;
  children: React.ReactNode;
};

const variantClass = {
  white: section.white,
  green: section.green,
};

const innerClass = {
  white: section.innerGreen,
  green: section.innerGreen,
};

export function Section({ variant, children }: SectionProps) {
  return (
    <section className={`${section.outer} ${variantClass[variant]}`}>
      <div className={innerClass[variant]}>{children}</div>
    </section>
  );
}
