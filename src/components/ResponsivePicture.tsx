'use client'

import { ImgHTMLAttributes, useState } from "react";
import { StaticImageData } from "next/image";

export interface PictureData {
  sources?: Record<string, string>;
  img: {
    src: string;
    w?: number;
    h?: number;
    width?: number;
    height?: number;
  };
}

export type ResponsivePictureSource = PictureData | StaticImageData | string;

export interface Props
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "srcSet"> {
  data: ResponsivePictureSource;
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

function parseImageData(data: ResponsivePictureSource) {
  if (typeof data === "string") {
    return {
      src: data,
      width: undefined as number | undefined,
      height: undefined as number | undefined,
      sources: undefined as Record<string, string> | undefined,
    };
  }

  if ("img" in data && data.img) {
    return {
      src: data.img.src,
      width: data.img.w ?? data.img.width,
      height: data.img.h ?? data.img.height,
      sources: data.sources,
    };
  }

  if ("src" in data && typeof data.src === "string") {
    return {
      src: data.src,
      width: data.width,
      height: data.height,
      sources: undefined as Record<string, string> | undefined,
    };
  }

  return {
    src: "",
    width: undefined,
    height: undefined,
    sources: undefined,
  };
}

export default function ResponsivePicture({
  data,
  sizes = "100vw",
  alt,
  className,
  loading = "lazy",
  showSkeleton = true,
  wrapperClassName = "",
  onLoad,
  ...rest
}: Props) {
  const { src, width, height, sources } = parseImageData(data);
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
        {sources &&
          order
            .filter((f) => Boolean(sources[f]))
            .map((f) => (
              <source
                key={f}
                type={MIME[f]}
                srcSet={sources[f]}
                sizes={sizes}
              />
            ))}
        <img
          src={src}
          width={width}
          height={height}
          alt={alt}
          loading={loading}
          decoding="async"
          onLoad={(e) => {
            setLoaded(true);
            onLoad?.(e);
          }}
          className={`relative transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          } ${className ?? ""}`}
          {...rest}
        />
      </picture>
    </div>
  );
}

