import NextLink from "next/link";
import { serviceIcons } from "@/data/serviceIcons";
import { link } from "@/styles";
import { Text } from "./Text";

export function ServiceIcon({ src }: { src: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      aria-hidden="true"
      width={100}
      height={100}
      className="h-16 w-16 shrink-0 md:h-[100px] md:w-[100px]"
    />
  );
}

type ServiceListItemProps = {
  title: string;
  blurb: React.ReactNode;
  href?: string;
  learnMore?: string;
  icon?: string;
};

export function ServiceListItem({
  title,
  blurb,
  href,
  learnMore,
  icon,
}: ServiceListItemProps) {
  const iconSrc = icon ?? (href ? serviceIcons[href] : undefined);

  return (
    <div className="flex items-start gap-4 md:gap-6">
      {iconSrc ? <ServiceIcon src={iconSrc} /> : null}
      <div className="flex flex-col gap-2">
        <Text variant="h3">{title}</Text>
        <Text variant="text">{blurb}</Text>
        {href && learnMore ? (
          <NextLink href={href} className={`${link.root} self-start`}>
            {learnMore}
          </NextLink>
        ) : null}
      </div>
    </div>
  );
}
