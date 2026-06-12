"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ children, text, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative w-auto cursor-pointer overflow-hidden rounded-full border border-neutral-300 dark:border-neutral-700 bg-background p-2 px-6 text-center font-semibold text-sm",
        className,
      )}
      {...props}
    >
      <span className="relative z-10 inline-block translate-x-1 transition-all duration-500 group-hover:translate-x-12 group-hover:opacity-0">
        {children || text}
      </span>
      <div className="absolute inset-0 z-20 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-white dark:text-black opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
        <span>{children || text}</span>
        <ArrowRight className="w-4 h-4" />
      </div>
      <div className="absolute left-[20%] top-[40%] h-1 w-1 rounded-full bg-neutral-900 dark:bg-white transition-all duration-500 group-hover:left-0 group-hover:top-0 group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:rounded-none" />
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";
