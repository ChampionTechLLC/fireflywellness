import { button } from "@/styles";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
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
  onClick,
}: ButtonProps) {
  const classNames = `${button.base} ${variantClass[variant]} ${className}`.trim();
  if (href) {
    return (
      <a href={href} className={classNames} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={classNames} onClick={onClick}>
      {children}
    </button>
  );
}
