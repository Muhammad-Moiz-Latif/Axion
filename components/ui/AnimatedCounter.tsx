"use client"

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
  type Transition,
} from "framer-motion"
import { useEffect, useRef, useState } from "react"

interface AnimatedCounterProps {
  from: number
  to: number
  suffix?: string
  prefix?: string
  duration?: number
  delay?: number
  decimals?: number
  className?: string
}

export default function AnimatedCounter({
  from,
  to,
  suffix = "",
  prefix = "",
  duration = 1.5,
  delay = 0,
  decimals,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)

  const isInView = useInView(ref, {
    once: true,
    amount: 0.6,
  })

  const count = useMotionValue(from)

  const smoothCount = useSpring(count, {
    stiffness: 100,
    damping: 25,
    mass: 0.5,
  })

  const [displayValue, setDisplayValue] = useState(
    formatValue(from, decimals)
  )

  useMotionValueEvent(smoothCount, "change", (latest) => {
    setDisplayValue(formatValue(latest, decimals))
  })

  useEffect(() => {
    if (!isInView) return

    const transition: Transition = {
      duration,
      delay,
      ease: [0.22, 1, 0.36, 1],
    }

    const controls = animate(count, to, transition)

    return () => controls.stop()
  }, [isInView, count, to, duration, delay])

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        y: 10,
        filter: "blur(5px)",
      }}
      animate={
        isInView
          ? {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }
          : undefined
      }
      transition={{
        duration: 0.65,
        delay: Math.max(delay - 0.12, 0),
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {prefix}
      {displayValue}
      {suffix}
    </motion.span>
  )
}

function formatValue(value: number, decimals?: number) {
  if (typeof decimals === "number") {
    return value.toFixed(decimals)
  }

  if (!Number.isInteger(value)) {
    return value.toFixed(1)
  }

  return Math.round(value).toString()
}