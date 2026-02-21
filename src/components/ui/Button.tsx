import { button } from "@/styles";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  type?: "button" | "submit" | "reset";
};

const variantClass = {
  primary: button.primary,
  secondary: button.secondary,
};

export function Button({
  children,
  variant = "primary",
  href,
  type = "button",
}: ButtonProps) {
  const className = `${button.base} ${variantClass[variant]}`;
  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
}
