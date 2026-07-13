"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center whitespace-nowrap text-sm font-medium transition-colors outline-none select-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "relative overflow-hidden",
        outline:
          "border border-border bg-transparent hover:bg-muted hover:text-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-muted hover:text-foreground",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-6 py-2 gap-2",
        sm: "h-8 rounded-md px-4 text-xs gap-1.5",
        lg: "h-12 rounded-md px-8 text-base gap-2",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function MagneticWrapper({
  children,
  className,
  strength = 0.3,
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = React.useCallback(
    (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      x.set(distanceX * strength);
      y.set(distanceY * strength);
    },
    [x, y, strength],
  );

  const handleMouseLeave = React.useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      className={cn("inline-block", className)}
    >
      {children}
    </motion.div>
  );
}

function InteractiveHoverButtonContent({
  children,
  showArrow = true,
}: {
  children: React.ReactNode;
  showArrow?: boolean;
}) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.span
      className="relative flex items-center gap-2 z-10"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={false}
    >
      <span className="relative overflow-hidden h-[1.2em] flex items-center">
        <motion.span
          className="flex flex-col"
          animate={{ y: isHovered ? "-50%" : "0%" }}
          transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
        >
          <span className="block leading-[1.2em]">{children}</span>
          <span className="block leading-[1.2em]">{children}</span>
        </motion.span>
      </span>
      {showArrow && (
        <motion.span
          className="flex items-center justify-center"
          animate={{
            x: isHovered ? 4 : 0,
            rotate: isHovered ? -45 : 0,
          }}
          transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
        >
          <ArrowRight size={16} strokeWidth={2.5} />
        </motion.span>
      )}
    </motion.span>
  );
}

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  showArrow = true,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    showArrow?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";
  const isDefault = variant === "default";

  const buttonContent = isDefault ? (
    <InteractiveHoverButtonContent showArrow={showArrow}>
      {children}
    </InteractiveHoverButtonContent>
  ) : (
    <>{children}</>
  );

  const buttonElement = (
    <Comp
      className={cn(
        buttonVariants({ variant, size, className }),
        isDefault &&
          "relative rounded-full bg-transparent text-black dark:text-white border border-black/10 dark:border-white/10 py-0 pl-5 pr-0 h-10 transition-colors duration-500 hover:text-white dark:hover:text-black",
      )}
      {...props}
    >
      {isDefault && (
        <>
          {/* Background fill */}
          <motion.span
            className="absolute inset-0 rounded-full bg-black dark:bg-white z-0"
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            style={{ originX: 0.5, originY: 0.5 }}
          />
          {/* Content */}
          <span className="relative z-10 flex items-center gap-2">
            {buttonContent}
          </span>
        </>
      )}
      {!isDefault && buttonContent}
    </Comp>
  );

  if (isDefault) {
    return (
      <MagneticWrapper className="inline-block" strength={0.25}>
        {buttonElement}
      </MagneticWrapper>
    );
  }

  return buttonElement;
}

export { Button, buttonVariants };
