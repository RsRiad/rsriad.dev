"use client";

import { createContext, useContext, useEffect, useState, useSyncExternalStore } from "react";

export type ThemeSelection = "light" | "dark";

const ThemeContext = createContext<{
  theme: ThemeSelection;
  resolvedTheme: ThemeSelection;
  setTheme: (theme: ThemeSelection) => void;
}>({
  theme: "dark",
  resolvedTheme: "dark",
  setTheme: () => {},
});

const emptySubscribe = () => () => {};

function getInitialTheme(): ThemeSelection {
  if (typeof window === "undefined") return "dark";
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") {
    return stored;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const [theme, setThemeState] = useState<ThemeSelection>(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const setTheme = (next: ThemeSelection) => {
    setThemeState(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme: theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);


