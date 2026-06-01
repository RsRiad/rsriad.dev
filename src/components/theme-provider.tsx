"use client";

import { createContext, useContext, useEffect, useState } from "react";

type ThemeSelection = "light" | "dark" | "system";
type Resolved = "light" | "dark";

const ThemeContext = createContext<{
  theme: ThemeSelection;
  resolvedTheme: Resolved;
  setTheme: (theme: ThemeSelection) => void;
}>({
  theme: "light",
  resolvedTheme: "light",
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeSelection>("system");
  const [resolvedTheme, setResolvedTheme] = useState<Resolved>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme") as ThemeSelection | null;
    if (stored) {
      setThemeState(stored);
      if (stored === "system") {
        const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setResolvedTheme(isDark ? "dark" : "light");
        document.documentElement.classList.toggle("dark", isDark);
      } else {
        setResolvedTheme(stored);
        document.documentElement.classList.toggle("dark", stored === "dark");
      }
    } else {
      // Default to system
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setResolvedTheme(isDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", isDark);
    }
  }, []);

  const setTheme = (next: ThemeSelection) => {
    setThemeState(next);
    localStorage.setItem("theme", next);
    
    let resolved: Resolved = next === "system" ? "light" : next;
    if (next === "system") {
      resolved = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    setResolvedTheme(resolved);
    // ThemeToggler handles the document.documentElement.classList.toggle when using the view transition
  };

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
