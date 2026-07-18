'use client'

import { ImgHTMLAttributes, useState } from "react";

export interface PictureData {
  sources: Record<string, string>;
  img: { src: string; w: number; h: number };
}

interface Props extends Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  "src" | "srcSet"
> {
  data: PictureData;
  sizes?: string;
  alt: string;
  /** Show a shimmer placeholder underneath the image until it loads. Default true. */
  showSkeleton?: boolean;
  /** Wrapper class for the skeleton container (positioning). */
  wrapperClassName?: string;
}

const MIME: Record<string, string> = {
  avif: "image/avif",
  webp: "image/webp",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png",
};

export default function ResponsivePicture({
  data,
  sizes = "100vw",
  alt,
  className,
  loading = "lazy",
  showSkeleton = true,
  wrapperClassName = "",
  ...rest
}: Props) {
  const { sources, img } = data;
  const order = ["avif", "webp", "jpg", "jpeg", "png"];
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`relative h-full w-full overflow-hidden ${wrapperClassName}`}
    >
      {showSkeleton && (
        <div
          aria-hidden
          className={`skeleton-shimmer absolute inset-0 transition-opacity duration-500 ${
            loaded ? "opacity-0" : "opacity-100"
          }`}
        />
      )}
      <picture>
        {order
          .filter((f) => sources[f])
          .map((f) => (
            <source key={f} type={MIME[f]} srcSet={sources[f]} sizes={sizes} />
          ))}
        <img
          src={img.src}
          width={img.w}
          height={img.h}
          alt={alt}
          loading={loading}
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={`relative transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          } ${className ?? ""}`}
          {...rest}
        />
      </picture>
    </div>
  );
}
