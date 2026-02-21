import { image } from "@/styles";

type ImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export function Image({ src, alt, className = "" }: ImageProps) {
  return (
    <div className={`${image.wrapper} ${className}`.trim()}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className={image.img}
      />
    </div>
  );
}
