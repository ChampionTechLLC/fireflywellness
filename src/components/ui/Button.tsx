import { button } from "@/styles";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  type?: "button" | "submit" | "reset";
  className?: string;
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
  className = "",
}: ButtonProps) {
  const classNames = `${button.base} ${variantClass[variant]} ${className}`.trim();
  if (href) {
    return (
      <a href={href} className={classNames}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={classNames}>
      {children}
    </button>
  );
}
