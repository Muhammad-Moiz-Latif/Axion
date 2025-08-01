"use client"

import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect } from "react"

interface DecryptionTextProps {
  text: string
  duration?: number
  delay?: number
  className?: string
}

const chars = "!@#$%^&*()_+{}[]|:;\"'<>,.?/~`" // Characters for decryption effect

export default function DecryptionText({ text, duration = 0.8, delay = 0, className }: DecryptionTextProps) {
  const progress = useMotionValue(0) // Progress from 0 to 1

  // Function to get a random character
  const getRandomChar = () => chars[Math.floor(Math.random() * chars.length)]

  // Use useTransform to create the decryption effect
  const decryptedText = useTransform(progress, (latest) => {
    const numCharsToReveal = Math.floor(latest * text.length)
    const revealedPart = text.substring(0, numCharsToReveal)
    const scrambledPart = Array.from({ length: text.length - numCharsToReveal })
      .map(() => getRandomChar())
      .join("")
    return revealedPart + scrambledPart
  })

  useEffect(() => {
    const controls = animate(progress, 1, {
      duration: duration,
      ease: "easeOut",
      delay: delay,
      onComplete: () => {
        // Ensure the final text is exactly the target text
        decryptedText.set(text)
      },
    })

    return controls.stop
  }, [text, duration, delay, progress, decryptedText])

  return <motion.span className={className}>{decryptedText}</motion.span>
}
