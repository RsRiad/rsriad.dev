"use client";

import { motion, AnimatePresence } from "motion/react";
import { Moon, Sun, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "@/providers/theme-provider";
import { ThemeToggler } from "@/components/ui/theme-toggler";
import {
  Highlight,
  HighlightItem,
} from "@/components/ui/highlight";

export function Navbar() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Blogs", href: "/blogs" },
    { label: "Memories", href: "/memories" },
    { label: "Contact", href: "/contact" },
  ];

  const renderThemeToggler = () => (
    <ThemeToggler
      theme={theme as "light" | "dark"}
      resolvedTheme={resolvedTheme as "light" | "dark"}
      setTheme={setTheme}
    >
      {({ effective, toggleTheme }) => {
        const nextTheme = effective === "dark" ? "light" : "dark";

        return (
          <button
            onClick={(e) => {
              try {
                // Play a subtle switch sound (you can change the URL to a local file in /public, e.g., '/switch.mp3')
                const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3');
                audio.volume = 0.4;
                audio.play().catch(() => {});
              } catch (err) {}
              toggleTheme(nextTheme, e);
            }}
            className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors flex items-center justify-center border border-transparent dark:border-white/10"
            aria-label="Toggle theme"
          >
            {effective === "dark" ? (
              <Moon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            ) : (
              <Sun className="w-4 h-4 text-yellow-500" />
            )}
          </button>
        );
      }}
    </ThemeToggler>
  );

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit px-4"
        data-lenis-prevent
      >
        <nav
          className="
          flex items-center gap-4 md:gap-6
          rounded-full px-4 py-2
          backdrop-blur-lg
          transition-colors duration-300
          border
          bg-gradient-to-r
          from-white/55
          via-white/35
          to-white/55
          border-black/10
          shadow-[0_8px_30px_rgb(0,0,0,0.08)]
          dark:from-white/10
          dark:via-white/5
          dark:to-white/10
          dark:border-white/10
        "
        >
          {" "}
          {/* Avatar + Name */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="relative w-8 h-8 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 ring-2 ring-gray-100 dark:ring-gray-700">
              <Image
                src="/images/profile.png"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="Md. Rawha Siddiqi Riad"
                fill
                className="object-cover"
                priority
              />
            </div>
            <span className="text-sm font-semibold text-gray-900 dark:text-white whitespace-nowrap">
              Md. Rawha Siddiqi Riad
            </span>
          </Link>
          {/* Desktop Links */}
          <div className="hidden md:flex items-center text-sm font-medium text-gray-500 dark:text-gray-400">
            <Highlight
              mode="parent"
              hover
              controlledItems
              containerClassName="flex items-center"
              className="bg-gray-100 dark:bg-white/10 rounded-full"
            >
              {navItems.map((item) => (
                <HighlightItem key={item.href} value={item.href} asChild>
                  <Link
                    href={item.href}
                    className="px-4 py-2 hover:text-gray-900 dark:hover:text-white transition-colors relative z-10"
                  >
                    {item.label}
                  </Link>
                </HighlightItem>
              ))}
            </Highlight>
          </div>
          {/* Mobile Menu Button & Theme Toggler */}
          <div className="flex items-center gap-2 md:pl-3 md:border-l border-gray-200 dark:border-white/15">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex items-center gap-1.5 text-sm font-medium text-gray-900 dark:text-white px-4 py-1.5 rounded-full border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
            >
              {isMobileMenuOpen ? "Close" : "Menu"}{" "}
              <ChevronDown
                className={`w-4 h-4 transition-transform ${isMobileMenuOpen ? "rotate-180" : ""}`}
              />
            </button>
            {renderThemeToggler()}
          </div>
        </nav>
      </motion.header>

      {/* Mobile Full Screen Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-gray-50 dark:bg-[#0a0a0a] flex flex-col items-center justify-center"
            data-lenis-prevent
          >
            {/* Menu Links */}
            <div className="flex flex-col items-center gap-6 mt-16">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-medium text-gray-900 dark:text-white hover:text-gray-500 dark:hover:text-gray-300 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
