
'use client';

import * as React from 'react';
import { flushSync } from 'react-dom';

type ThemeSelection = 'light' | 'dark' | 'system';
type Resolved = 'light' | 'dark';

type ThemeState = {
  effective: ThemeSelection;
  resolved: Resolved;
};

type OriginInput =
  | MouseEvent
  | React.MouseEvent
  | { x: number; y: number }
  | DOMRect
  | undefined;

function getSystemEffective(): Resolved {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

function getOriginCoords(origin?: OriginInput): { x: number; y: number } {
  if (typeof window === 'undefined') return { x: 0, y: 0 };
  if (!origin) return { x: window.innerWidth / 2, y: window.innerHeight / 2 };

  if ('clientX' in origin) {
    return { x: origin.clientX, y: origin.clientY };
  }

  if ('left' in origin && 'top' in origin && 'width' in origin) {
    const rect = origin as DOMRect;
    return {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    };
  }

  if ('x' in origin && 'y' in origin) {
    return origin as { x: number; y: number };
  }

  return { x: window.innerWidth / 2, y: window.innerHeight / 2 };
}

type ChildrenRender =
  | React.ReactNode
  | ((state: {
      resolved: Resolved;
      effective: ThemeSelection;
      toggleTheme: (theme: ThemeSelection, origin?: OriginInput) => void;
    }) => React.ReactNode);

type ThemeTogglerProps = {
  theme: ThemeSelection;
  resolvedTheme: Resolved;
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

  React.useEffect(() => {
    if (
      preview &&
      theme === preview.effective &&
      resolvedTheme === preview.resolved
    ) {
      setPreview(null);
    }
  }, [theme, resolvedTheme, preview]);

  const toggleTheme = React.useCallback(
    async (theme: ThemeSelection, origin?: OriginInput) => {
      const resolved = theme === 'system' ? getSystemEffective() : theme;
      const { x, y } = getOriginCoords(origin);

      setCurrent({ effective: theme, resolved });
      onImmediateChange?.(theme);

      if (theme === 'system' && resolved === resolvedTheme) {
        setTheme(theme);
        return;
      }

      if (!document.startViewTransition) {
        flushSync(() => {
          setPreview({ effective: theme, resolved });
        });
        setTheme(theme);
        return;
      }

      await document.startViewTransition(() => {
        flushSync(() => {
          setPreview({ effective: theme, resolved });
          document.documentElement.classList.toggle(
            'dark',
            resolved === 'dark',
          );
        });
      }).ready;

      document.documentElement
        .animate(
          {
            clipPath: [
              `circle(0% at ${x}px ${y}px)`,
              `circle(150% at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 1200,
            easing: 'ease-in-out',
            pseudoElement: '::view-transition-new(root)',
          },
        )
        .finished.finally(() => {
          setTheme(theme);
        });
    },
    [onImmediateChange, resolvedTheme, setTheme],
  );

  return (
    <React.Fragment {...props}>
      {typeof children === 'function'
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

export {
  ThemeToggler,
  type ThemeTogglerProps,
  type ThemeSelection,
  type Resolved,
};