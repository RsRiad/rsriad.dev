"use client";
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import { cn } from "@/lib/utils";
import { RiArrowRightLine } from "@remixicon/react";

/**
 * Updated interactiveHoverButtonVariants:
 * - Modified ONLY the `default` variant
 * - Added nested `.arrow` styling so the icon is controlled internally
 */
const interactiveHoverButtonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap text-sm font-medium transition-all outline-none select-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        /**
         * ✅ Custom default variant
         * - Light background → dark background on hover
         * - Arrow is a circular badge with inverted colors on hover
         */
        default: `
          relative overflow-hidden
          bg-transparent rounded-full

          py-0 pl-2 pr-0

          /* Light mode */
          text-black

          /* Dark mode */
          dark:text-white

          transition-colors duration-300

          /* Hover fill layer */
          before:absolute before:inset-0
          before:rounded-full
          before:-translate-x-[102%]
          before:transition-transform before:duration-500
          before:z-0

          /* Fill color adapts */
          before:bg-black
          dark:before:bg-white

          hover:before:translate-x-0

          /* Content above */
          [&_.content]:relative
          [&_.content]:z-10

          /* Text flips on hover */
          hover:[&_.content]:text-white
          dark:hover:[&_.content]:text-black

          /* Arrow */
          [&_.arrow]:relative
          [&_.arrow]:z-10
          [&_.arrow]:flex
          [&_.arrow]:items-center
          [&_.arrow]:justify-center
          [&_.arrow]:size-8
          [&_.arrow]:rounded-full

          /* Arrow contrast */
          [&_.arrow]:bg-black [&_.arrow]:text-white
          dark:[&_.arrow]:bg-white dark:[&_.arrow]:text-black
        `,
        alternate: `
          relative overflow-hidden
          bg-black rounded-full
          dark:bg-white

          py-0 pl-2 pr-0

          /* Light mode */
          text-white
          border border-transparent

          /* Dark mode */
          dark:text-black
          dark:border-transparent

          transition-colors duration-300

          /* Hover fill layer */
          before:absolute before:inset-0
          before:rounded-full
          before:-translate-x-[102%]
          before:transition-transform before:duration-500
          before:z-0

          /* Fill color adapts */
          before:bg-white
          dark:before:bg-black

          hover:before:translate-x-0

          /* Content above */
          [&_.content]:relative
          [&_.content]:z-10

          /* Text flips on hover */
          hover:[&_.content]:text-black
          dark:hover:[&_.content]:text-white

          /* Arrow */
          [&_.arrow]:relative
          [&_.arrow]:z-10
          [&_.arrow]:flex
          [&_.arrow]:items-center
          [&_.arrow]:justify-center
          [&_.arrow]:size-8
          [&_.arrow]:rounded-full

          /* Arrow contrast */
          [&_.arrow]:bg-neutral-200 [&_.arrow]:text-black
          dark:[&_.arrow]:bg-neutral-800 dark:[&_.arrow]:text-white
        `,
        outline:
          "border border-border bg-input/30 hover:bg-input/50 hover:text-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-muted hover:text-foreground",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-auto",
        sm: "text-sm px-4 py-2",
        lg: "text-base px-6 py-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof interactiveHoverButtonVariants> {
  asChild?: boolean;
  showArrow?: boolean;
  text?: string;
}

export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(
  (
    {
      className,
      variant = "default",
      size = "default",
      asChild = false,
      showArrow = true,
      children,
      text,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot.Root : "button";

    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center gap-2",
          interactiveHoverButtonVariants({ variant, size, className }),
        )}
        {...props}
      >
        <span className="content pl-3 pr-1 py-3">{children || text}</span>

        {showArrow && (
          <span className="arrow ml-1">
            <RiArrowRightLine size={16} />
          </span>
        )}
      </Comp>
    );
  },
);

InteractiveHoverButton.displayName = "InteractiveHoverButton";
