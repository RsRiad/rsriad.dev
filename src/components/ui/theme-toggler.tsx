"use client";

import * as React from "react";
import { flushSync } from "react-dom";

type ThemeSelection = "light" | "dark";

type ThemeState = {
  effective: ThemeSelection;
  resolved: ThemeSelection;
};

type OriginInput =
  | MouseEvent
  | React.MouseEvent
  | Element
  | { x: number; y: number }
  | DOMRect
  | undefined;

function getOriginCoords(origin?: OriginInput): { x: number; y: number } {
  if (typeof window === "undefined") return { x: 0, y: 0 };
  if (!origin) return { x: window.innerWidth / 2, y: window.innerHeight / 2 };

  // 1. If an Element (e.g. HTMLButtonElement) is passed
  if (typeof Element !== "undefined" && origin instanceof Element) {
    const rect = origin.getBoundingClientRect();
    return {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    };
  }

  // 2. If a React Event or DOM Event is passed
  if (typeof origin === "object" && origin !== null) {
    const ev = origin as Record<string, unknown>;
    const targetEl = (ev.currentTarget || ev.target) as Element | undefined;
    if (targetEl && typeof targetEl.getBoundingClientRect === "function") {
      const rect = targetEl.getBoundingClientRect();
      return {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      };
    }

    // 3. Fallback to click coordinates clientX/clientY if non-zero
    if (
      typeof ev.clientX === "number" &&
      typeof ev.clientY === "number" &&
      (ev.clientX !== 0 || ev.clientY !== 0)
    ) {
      return { x: ev.clientX as number, y: ev.clientY as number };
    }

    // 4. If DOMRect or DOMRect-like object
    if (
      typeof ev.left === "number" &&
      typeof ev.top === "number" &&
      typeof ev.width === "number" &&
      typeof ev.height === "number"
    ) {
      return {
        x: (ev.left as number) + (ev.width as number) / 2,
        y: (ev.top as number) + (ev.height as number) / 2,
      };
    }

    // 5. If { x, y }
    if (typeof ev.x === "number" && typeof ev.y === "number") {
      return { x: ev.x as number, y: ev.y as number };
    }
  }

  return { x: window.innerWidth / 2, y: window.innerHeight / 2 };
}

type ChildrenRender =
  | React.ReactNode
  | ((state: {
      resolved: ThemeSelection;
      effective: ThemeSelection;
      toggleTheme: (theme: ThemeSelection, origin?: OriginInput) => void;
    }) => React.ReactNode);

type ThemeTogglerProps = {
  theme: ThemeSelection;
  resolvedTheme: ThemeSelection;
  setTheme: (theme: ThemeSelection) => void;
  onImmediateChange?: (theme: ThemeSelection) => void;
  children?: ChildrenRender;
};

function ThemeToggler({
  theme,
  resolvedTheme,
  setTheme,
  onImmediateChange,
  children,
  ...props
}: ThemeTogglerProps) {
  const [preview, setPreview] = React.useState<ThemeState | null>(null);
  const [current, setCurrent] = React.useState<ThemeState>({
    effective: theme,
    resolved: resolvedTheme,
  });

  if (
    preview &&
    theme === preview.effective &&
    resolvedTheme === preview.resolved
  ) {
    setPreview(null);
  }

  const toggleTheme = React.useCallback(
    async (nextTheme: ThemeSelection, origin?: OriginInput) => {
      const { x, y } = getOriginCoords(origin);
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y),
      );

      setCurrent({ effective: nextTheme, resolved: nextTheme });
      onImmediateChange?.(nextTheme);

      if (!document.startViewTransition) {
        flushSync(() => {
          setPreview({ effective: nextTheme, resolved: nextTheme });
          document.documentElement.classList.toggle(
            "dark",
            nextTheme === "dark",
          );
        });
        setTheme(nextTheme);
        return;
      }

      await document.startViewTransition(() => {
        flushSync(() => {
          setPreview({ effective: nextTheme, resolved: nextTheme });
          document.documentElement.classList.toggle(
            "dark",
            nextTheme === "dark",
          );
        });
      }).ready;

      document.documentElement
        .animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${endRadius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 700,
            easing: "ease-in-out",
            pseudoElement: "::view-transition-new(root)",
          },
        )
        .finished.finally(() => {
          setTheme(nextTheme);
        });
    },
    [onImmediateChange, setTheme],
  );

  return (
    <React.Fragment {...props}>
      {typeof children === "function"
        ? children({
            effective: current.effective,
            resolved: current.resolved,
            toggleTheme,
          })
        : children}
      <style>{`::view-transition-old(root), ::view-transition-new(root){animation:none;mix-blend-mode:normal;}`}</style>
    </React.Fragment>
  );
}

export { ThemeToggler, type ThemeTogglerProps, type ThemeSelection };
