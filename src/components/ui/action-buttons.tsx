"use client";

import Link from "next/link";
import { Download } from "lucide-react";
import { Shine } from "@/components/ui/shine";
import { cn } from "@/lib/utils";

interface ActionButtonProps {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  download?: boolean;
  external?: boolean;
}

/**
 * Primary red CTA button used across the site (e.g. "View Projects", "Contact me").
 */
export function PrimaryActionButton({
  href,
  children,
  icon,
  className,
  download,
  external,
}: ActionButtonProps) {
  return (
    <Link
      href={href}
      {...(download ? { download: true } : {})}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "group flex items-center gap-2 justify-center",
        "bg-rose-600 hover:bg-rose-700 text-white",
        "px-6 py-3.5 rounded-full text-sm font-semibold",
        "shadow-sm shadow-rose-600/10",
        "hover:shadow-md hover:scale-[1.02] active:scale-[0.98] shrink-0",
        className,
      )}
    >
      {icon}
      <span>{children}</span>
    </Link>
  );
}

/**
 * Outline "Download CV" button with a shine effect, reused across the site.
 */
export function DownloadCVButton({ className }: { className?: string }) {
  return (
    <Shine className="rounded-full">
      <Link
        href="/documents/CV.pdf"
        download
        className={cn(
          "flex items-center gap-2 justify-center",
          "border border-neutral-300 dark:border-neutral-700",
          "hover:bg-neutral-50 dark:hover:bg-white/10",
          "text-neutral-700 dark:text-neutral-200",
          "px-6 py-3.5 rounded-full text-sm font-semibold",
          "hover:scale-[1.02] active:scale-[0.98] shrink-0",
          className,
        )}
      >
        <Download className="w-4 h-4" />
        <span>Download CV</span>
      </Link>
    </Shine>
  );
}
