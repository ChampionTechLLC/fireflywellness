import { typography } from "@/styles";

type TextVariant = keyof typeof typography;

const tagMap: Record<TextVariant, "h1" | "h2" | "h3" | "h4" | "p" | "span"> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  text: "p",
  subtitle: "p",
  link: "span",
};

type TextProps = {
  variant: TextVariant;
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  className?: string;
};

export function Text({ variant, children, as, className = "" }: TextProps) {
  const Tag = as ?? tagMap[variant];
  return (
    <Tag className={`${typography[variant]} ${className}`.trim()}>
      {children}
    </Tag>
  );
}
