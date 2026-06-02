import React from "react";
import Link from "next/link";
import { SparklesText } from "@/components/ui/sparkles-text";
import {
  GithubIcon,
  LinkedinIcon,
  FacebookIcon,
  WhatsAppIcon,
} from "@/components/social-icons";
import { RotateWords } from "../ui/rotate-words";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-white transition-colors duration-300 dark:bg-white dark:text-black pt-16 pb-4 px-6 md:px-12 lg:px-20 overflow-hidden select-none">
      {/* Top Heading */}
      <div className="max-w-5xl mx-auto mb-16">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight">
          <SparklesText>
            {" "}
            <div className="flex gap-4">
              Let's{" "}
              <RotateWords text=" " words={["design", "build", "create"]} />
            </div>
          </SparklesText>{" "}
          <span className="block text-neutral-400 dark:text-neutral-500">
            incredible work together
            <span className="text-white dark:text-black"> !</span>
          </span>
        </h2>
      </div>

      {/* Main Contact & Social Row */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-neutral-800 dark:border-neutral-200">
        {/* Email */}
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-2">
            Email
          </p>
          <a
            href="mailto:rsriad00@gmail.com"
            className="text-lg font-medium hover:text-neutral-400 dark:hover:text-neutral-500 transition-colors duration-200"
          >
            rsriad00@gmail.com
          </a>
        </div>

        {/* Call Me */}
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-2">
            Call me
          </p>
          <a
            href="tel:+8801703750565"
            className="text-lg font-medium hover:text-neutral-400 dark:hover:text-neutral-500 transition-colors duration-200"
          >
            +880 1703-750565
          </a>
        </div>

        {/* Social Icons from social-icons.jsx */}
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-3">
            Social
          </p>
          <div className="flex items-center gap-3">
            {/* GitHub with Counter Bubble style */}
            <a
              href="https://github.com/RsRiad"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-neutral-800 dark:border-neutral-300 bg-neutral-900 dark:bg-neutral-50 text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
            >
              <GithubIcon className="w-4 h-4 text-white dark:text-black" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/rsriad"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-neutral-800 dark:border-neutral-300 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4 text-white dark:text-black" />
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com/i.am.riad01"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-neutral-800 dark:border-neutral-300 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-4 h-4 text-white dark:text-black" />
            </a>
          </div>
        </div>
      </div>

      {/* Menus and Copyright Secondary Row */}
      <div className="max-w-5xl mx-auto pt-8 grid grid-cols-2 md:grid-cols-3 gap-8 text-sm font-medium">
        {/* Menu Navigation */}
        <div>
          <p className="text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3">
            Menu
          </p>
          <div className="grid grid-cols-2 gap-y-2">
            <Link
              href="/"
              className="hover:text-neutral-400 dark:hover:text-neutral-500 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/contact"
              className="hover:text-neutral-400 dark:hover:text-neutral-500 transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/blogs"
              className="hover:text-neutral-400 dark:hover:text-neutral-500 transition-colors"
            >
              Blogs
            </Link>
            <Link
              href="/rss"
              className="hover:text-neutral-400 dark:hover:text-neutral-500 transition-colors"
            >
              RSS
            </Link>
          </div>
        </div>

        {/* Other Navigation */}
        <div>
          <p className="text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3">
            Other
          </p>
          <div className="flex flex-col gap-y-2">
            <Link
              href="/uses"
              className="hover:text-neutral-400 dark:hover:text-neutral-500 transition-colors"
            >
              Uses
            </Link>
            <Link
              href="/privacy"
              className="hover:text-neutral-400 dark:hover:text-neutral-500 transition-colors"
            >
              Privacy policy
            </Link>
          </div>
        </div>

        {/* Copyright Text */}
        <div className="col-span-2 md:col-span-1 flex md:justify-end items-end text-neutral-500 dark:text-neutral-400 text-xs mt-4 md:mt-0">
          <p>© {currentYear} Designed and developed by Riad</p>
        </div>
      </div>

      {/* Large Backdrop Text Effect */}
      {/* <div className="w-full text-center mt-12 select-none pointer-events-none translate-y-8 md:translate-y-16 lg:translate-y-20">
        <h1 className="text-[14vw] font-bold tracking-tight uppercase text-white dark:text-black leading-none">
          RAWHA
        </h1>
      </div> */}

      <div className="w-full max-w-5xl mx-auto relative translate-y-1/4 md:translate-y-16 lg:translate-y-20 text-center mt-12 select-none pointer-events-none">
        <svg viewBox="0 0 61.3 13" className="w-full h-auto">
          <text
            x="0"
            y="12"
            className="fill-white dark:fill-black opacity-100 font-bold"
          >
            RAWHA
          </text>
        </svg>
      </div>
    </footer>
  );
}
