"use client"

import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

interface AnimatedCounterProps {
  from: number
  to: number
  suffix?: string
  duration?: number
  delay?: number
  className?: string
}

export default function AnimatedCounter({
  from,
  to,
  suffix = "",
  duration = 1.5,
  delay = 0,
  className,
}: AnimatedCounterProps) {
  const count = useMotionValue(from)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const [displayValue, setDisplayValue] = useState(from)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest)
    })

    if (isInView) {
      const controls = animate(count, to, {
        duration: duration,
        ease: "easeOut",
        delay: delay,
      })
      return () => {
        controls.stop()
        unsubscribe()
      }
    }
  }, [isInView, count, to, duration, delay, rounded])

  return (
    <motion.span ref={ref} className={className}>
      {displayValue}
      {suffix}
    </motion.span>
  )
}
