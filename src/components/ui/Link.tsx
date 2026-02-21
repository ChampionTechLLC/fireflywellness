import { link } from "@/styles";

type LinkProps = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
};

export function Link({ href, children, external }: LinkProps) {
  const isExternal = external ?? href.startsWith("http");
  return (
    <a
      href={href}
      className={link.root}
      {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {children}
    </a>
  );
}
