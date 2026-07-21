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
    position === "top" ? "to top" : position === "bottom" ? "to bottom" : undefined

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
      {/* Glassmorphic translucent background gradient */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(${gradientDirection}, transparent 0%, hsl(var(--background) / 0.05) 20%, hsl(var(--background) / 0.25) 50%, hsl(var(--background) / 0.6) 80%, hsl(var(--background) / 0.75) 100%)`,
        }}
      />

      {/* Progressive Blur Layer 1: Light Blur */}
      <div
        className="absolute inset-0"
        style={{
          backdropFilter: "blur(2px)",
          WebkitBackdropFilter: "blur(2px)",
          maskImage: `linear-gradient(${gradientDirection}, transparent 0%, black 30%, black 100%)`,
          WebkitMaskImage: `linear-gradient(${gradientDirection}, transparent 0%, black 30%, black 100%)`,
        }}
      />

      {/* Progressive Blur Layer 2: Medium Blur */}
      <div
        className="absolute inset-0"
        style={{
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          maskImage: `linear-gradient(${gradientDirection}, transparent 25%, black 60%, black 100%)`,
          WebkitMaskImage: `linear-gradient(${gradientDirection}, transparent 25%, black 60%, black 100%)`,
        }}
      />

      {/* Progressive Blur Layer 3: Deep Blur */}
      <div
        className="absolute inset-0"
        style={{
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          maskImage: `linear-gradient(${gradientDirection}, transparent 50%, black 90%, black 100%)`,
          WebkitMaskImage: `linear-gradient(${gradientDirection}, transparent 50%, black 90%, black 100%)`,
        }}
      />
    </div>
  )
}
