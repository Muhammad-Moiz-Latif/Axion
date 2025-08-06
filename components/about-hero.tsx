"use client"

import Image from "next/image"
import { Arimo } from "next/font/google"
import { motion, type Variants } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

// Placeholder image for the hero background
import heroBg from "../assets/nipples.jpg" // Using a more abstract image for About Us

const arimo = Arimo({
  variable: "--font-arimo",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

const textVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
}

export default function AboutHero() {
  const heroRef = useRef(null)
  const isInView = useInView(heroRef, { once: true, amount: 0.5 }) // Trigger when 50% in view

  return (
    <motion.section
      ref={heroRef}
      className={`relative w-full h-[80vh] ${arimo.className} flex flex-col items-center justify-center text-white text-center overflow-hidden`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
      }}
    >
      <Image
        src={
          heroBg ||
          "/placeholder.svg?height=1080&width=1920&query=abstract futuristic background, glowing lines, sense of journey"
        }
        alt="Abstract futuristic background with glowing lines"
        fill
        className="absolute object-cover inset-0 w-full h-full z-0 opacity-80"
        priority // Preload the hero image
      />
      {/* Overlay for the background image */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      <motion.h1 className="text-xs text-zinc-400 tracking-tight uppercase z-20 mb-4" variants={textVariants}>
        Our Story
      </motion.h1>
      <motion.h2 className="text-6xl font-semibold tracking-tight mb-4 z-20" variants={textVariants}>
        Built on Passion, <br /> Driven by Progress.
      </motion.h2>
      <motion.p className="text-sm text-zinc-400 max-w-3xl z-20" variants={textVariants}>
        At Axion, we believe in the power of transformation. We&apos;re more than a fitness platform; we&apos;re a community
        dedicated to unlocking human potential through data-driven training and unwavering support.
      </motion.p>
    </motion.section>
  )
}
