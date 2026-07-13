"use client"

import { CSSProperties, ReactElement, useEffect, useRef, useState, useCallback } from "react"
import { motion } from "motion/react"

import { cn } from "@/lib/utils"

interface Sparkle {
  id: string
  x: string
  y: string
  color: string
  delay: number
  scale: number
  lifespan: number
}

const Sparkle: React.FC<Sparkle> = ({ id, x, y, color, delay, scale }) => {
  return (
    <motion.svg
      key={id}
      className="pointer-events-none absolute z-20"
      initial={{ opacity: 0, left: x, top: y }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, scale, 0],
        rotate: [75, 120, 150],
      }}
      transition={{ duration: 0.8, repeat: Infinity, delay }}
      width="21"
      height="21"
      viewBox="0 0 21 21"
    >
      <path
        d="M9.82531 0.843845C10.0553 0.215178 10.9446 0.215178 11.1746 0.843845L11.8618 2.72026C12.4006 4.19229 12.3916 6.39157 13.5 7.5C14.6084 8.60843 16.8077 8.59935 18.2797 9.13822L20.1561 9.82534C20.7858 10.0553 20.7858 10.9447 20.1561 11.1747L18.2797 11.8618C16.8077 12.4007 14.6084 12.3916 13.5 13.5C12.3916 14.6084 12.4006 16.8077 11.8618 18.2798L11.1746 20.1562C10.9446 20.7858 10.0553 20.7858 9.82531 20.1562L9.13819 18.2798C8.59932 16.8077 8.60843 14.6084 7.5 13.5C6.39157 12.3916 4.19225 12.4007 2.72023 11.8618L0.843814 11.1747C0.215148 10.9447 0.215148 10.0553 0.843814 9.82534L2.72023 9.13822C4.19225 8.59935 6.39157 8.60843 7.5 7.5C8.60843 6.39157 8.59932 4.19229 9.13819 2.72026L9.82531 0.843845Z"
        fill={color}
      />
    </motion.svg>
  )
}

interface SparklesTextProps {
  /**
   * @default <div />
   * @type ReactElement
   * @description
   * The component to be rendered as the text
   * */
  as?: ReactElement

  /**
   * @default ""
   * @type string
   * @description
   * The className of the text
   */
  className?: string

  /**
   * @required
   * @type ReactNode
   * @description
   * The content to be displayed
   * */
  children: React.ReactNode

  /**
   * @default 10
   * @type number
   * @description
   * The count of sparkles
   * */
  sparklesCount?: number

  /**
   * @default "{first: '#9E7AFF', second: '#FE8BBB'}"
   * @type string
   * @description
   * The colors of the sparkles
   * */
  colors?: {
    first: string
    second: string
  }
}

export const SparklesText: React.FC<SparklesTextProps> = ({
  children,
  colors = { first: "#9E7AFF", second: "#FE8BBB" },
  className,
  sparklesCount = 10,
  ...props
}) => {
  const [sparkles, setSparkles] = useState<Sparkle[]>(() => {
    const generateInitial = (): Sparkle => {
      const starX = `${Math.random() * 100}%`
      const starY = `${Math.random() * 100}%`
      const color = Math.random() > 0.5 ? colors.first : colors.second
      const delay = Math.random() * 2
      const scale = Math.random() * 1 + 0.3
      const lifespan = Math.random() * 10 + 5
      const id = `${starX}-${starY}-${Date.now()}`
      return { id, x: starX, y: starY, color, delay, scale, lifespan }
    }
    return Array.from({ length: sparklesCount }, generateInitial)
  })
  const containerRef = useRef<HTMLDivElement>(null)
  const isVisibleRef = useRef(false)
  const rafIdRef = useRef<number>(0)
  const lastUpdateRef = useRef(0)

  const generateStar = useCallback((): Sparkle => {
    const starX = `${Math.random() * 100}%`
    const starY = `${Math.random() * 100}%`
    const color = Math.random() > 0.5 ? colors.first : colors.second
    const delay = Math.random() * 2
    const scale = Math.random() * 1 + 0.3
    const lifespan = Math.random() * 10 + 5
    const id = `${starX}-${starY}-${Date.now()}`
    return { id, x: starX, y: starY, color, delay, scale, lifespan }
  }, [colors.first, colors.second])

  useEffect(() => {

    // Use IntersectionObserver to pause animation when off-screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting
        if (entry.isIntersecting) {
          // Restart animation loop when visible
          lastUpdateRef.current = performance.now()
          const animate = (now: number) => {
            if (!isVisibleRef.current) return

            // Throttle updates to ~5fps (every 200ms) instead of the old 10fps (100ms)
            // The sparkle visuals are driven by CSS/motion animations, so the JS update
            // rate only controls how often sparkles get regenerated — 5fps is plenty.
            if (now - lastUpdateRef.current >= 200) {
              lastUpdateRef.current = now
              setSparkles((currentSparkles) =>
                currentSparkles.map((star) => {
                  if (star.lifespan <= 0) {
                    return generateStar()
                  } else {
                    return { ...star, lifespan: star.lifespan - 0.2 }
                  }
                })
              )
            }
            rafIdRef.current = requestAnimationFrame(animate)
          }
          rafIdRef.current = requestAnimationFrame(animate)
        } else {
          cancelAnimationFrame(rafIdRef.current)
        }
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      observer.disconnect()
      cancelAnimationFrame(rafIdRef.current)
    }
  }, [colors.first, colors.second, sparklesCount, generateStar])

  return (
    <div
      ref={containerRef}
      className={cn("text-6xl font-bold", className)}
      {...props}
      style={
        {
          "--sparkles-first-color": `${colors.first}`,
          "--sparkles-second-color": `${colors.second}`,
        } as CSSProperties
      }
    >
      <span className="relative inline-block">
        {sparkles.map((sparkle) => (
          <Sparkle key={sparkle.id} {...sparkle} />
        ))}
        <strong>{children}</strong>
      </span>
    </div>
  )
}

