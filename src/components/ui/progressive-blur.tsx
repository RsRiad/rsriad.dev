"use client"

import React from "react"

import { cn } from "@/lib/utils"

export interface ProgressiveBlurProps {
  className?: string
  height?: string
  position?: "top" | "bottom" | "both"
  blurLevels?: number[]
  children?: React.ReactNode
}

export function ProgressiveBlur({
  className,
  height = "30%",
  position = "bottom",
}: ProgressiveBlurProps) {
  // Lightweight CSS gradient replacement for the original 8-layer backdrop-filter blur.
  // The previous implementation stacked 8 divs each with backdrop-filter: blur(Npx)
  // (up to 64px), causing massive GPU overhead and scroll jank on mobile devices.
  // This gradient overlay achieves a similar visual fade-out effect at near-zero cost.

  const gradientDirection =
    position === "top" ? "to bottom" : position === "bottom" ? "to top" : undefined

  if (position === "both") {
    return (
      <>
        <ProgressiveBlur className={className} height={height} position="top" />
        <ProgressiveBlur className={className} height={height} position="bottom" />
      </>
    )
  }

  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-x-0 z-10",
        className,
        position === "top" ? "top-0" : "bottom-0"
      )}
      style={{ height }}
    >
      {/* Primary gradient overlay — replaces 8 stacked backdrop-filter blur layers */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-[--bg] via-[--bg-via] to-transparent"
        style={{
          "--bg": "hsl(var(--background))",
          "--bg-via": "hsl(var(--background) / 0.85)",
          backgroundImage: `linear-gradient(${gradientDirection}, transparent 0%, hsl(var(--background) / 0.1) 20%, hsl(var(--background) / 0.4) 45%, hsl(var(--background) / 0.75) 70%, hsl(var(--background)) 100%)`,
        } as React.CSSProperties}
      />
      {/* Single lightweight backdrop-blur layer for a subtle frosted effect */}
      <div
        className="absolute inset-0"
        style={{
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          maskImage: `linear-gradient(${gradientDirection}, transparent 0%, black 60%)`,
          WebkitMaskImage: `linear-gradient(${gradientDirection}, transparent 0%, black 60%)`,
        }}
      />
    </div>
  )
}
