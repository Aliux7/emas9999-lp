"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let instance: { destroy(): void } | null = null;
    let cancelled = false;

    (async () => {
      const { default: LocomotiveScroll } = await import("locomotive-scroll");
      if (cancelled) return;
      instance = new LocomotiveScroll({
        lenisOptions: {
          duration: 1.15,
          lerp: 0.08,
          smoothWheel: true,
        },
      }) as unknown as { destroy(): void };
    })();

    return () => {
      cancelled = true;
      instance?.destroy();
    };
  }, [pathname]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return <div data-scroll-container>{children}</div>;
}
