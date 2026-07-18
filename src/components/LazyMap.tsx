'use client'

import { useEffect, useRef, useState } from "react";

interface Props {
  src: string;
  title: string;
  className?: string;
}

/**
 * Lazy-mounts a Google Maps iframe only when the container is close to the viewport.
 * Shows a shimmering skeleton until the iframe finishes loading (no flash).
 */
export function LazyMap({ src, title, className = "" }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setInView(true);
            io.disconnect();
            break;
          }
        }
      },
      { rootMargin: "300px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [inView]);

  return (
    <div ref={ref} className={`relative overflow-hidden bg-surface ${className}`}>
      {/* Skeleton */}
      <div
        aria-hidden
        className={`absolute inset-0 transition-opacity duration-500 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="skeleton-shimmer h-full w-full" />
      </div>
      {inView && (
        <iframe
          title={title}
          src={src}
          loading="lazy"
          className={`relative h-full w-full border-0 transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          onLoad={() => setLoaded(true)}
        />
      )}
    </div>
  );
}