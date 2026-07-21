"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const reducedMotionRef = useRef(prefersReducedMotion());

  useEffect(() => {
    if (reducedMotionRef.current) return;

    const lenis = new Lenis({
      lerp: 0.07,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.4,
      gestureOrientation: "vertical",
      syncTouch: true,
    });

    let rafId = 0;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    function onAnchorClick(e: MouseEvent) {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href?.startsWith("#")) return;

      e.preventDefault();

      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) {
        lenis.scrollTo(el, { offset: -20, duration: 1.2 });
      }
    }

    document.addEventListener("click", onAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", onAnchorClick);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
