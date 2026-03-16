import { image } from "@/styles";

type ImageProps = {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
};

export function Image({ src, alt, className = "", width, height }: ImageProps) {
  return (
    <div className={`${image.wrapper} ${className}`.trim()}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className={image.img}
        width={width}
        height={height}
      />
    </div>
  );
}
