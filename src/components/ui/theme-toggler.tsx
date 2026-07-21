"use client";

import * as React from "react";

type ThemeSelection = "light" | "dark";

type ChildrenRender =
  | React.ReactNode
  | ((state: {
      resolved: ThemeSelection;
      effective: ThemeSelection;
      toggleTheme: (theme: ThemeSelection) => void;
    }) => React.ReactNode);

type ThemeTogglerProps = {
  theme: ThemeSelection;
  resolvedTheme: ThemeSelection;
  setTheme: (theme: ThemeSelection) => void;
  children?: ChildrenRender;
};

function ThemeToggler({
  theme,
  resolvedTheme,
  setTheme,
  children,
}: ThemeTogglerProps) {
  const toggleTheme = React.useCallback(
    (nextTheme: ThemeSelection) => {
      setTheme(nextTheme);
    },
    [setTheme],
  );

  return (
    <>
      {typeof children === "function"
        ? children({
            effective: theme,
            resolved: resolvedTheme,
            toggleTheme,
          })
        : children}
    </>
  );
}

export { ThemeToggler, type ThemeTogglerProps, type ThemeSelection };
