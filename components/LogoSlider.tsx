"use client"

import type React from "react"
import Image from "next/image"
import { Arimo } from "next/font/google"
import { motion, useInView, type Variants } from "framer-motion"
import { useRef } from "react"

import Nike from "../assets/nike.png"
import Adidas from "../assets/adidas.png"
import UnderArmour from "../assets/Under_Armour.png"
import Puma from "../assets/Puma.png"
import AppleHealth from "../assets/AppleHealth.png"
import GymShark from "../assets/GymShark.png"
import OptimumNutrition from "../assets/OptimumNutrition.png"

const arimo = Arimo({
  variable: "--font-arimo",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

const logos = [
  { src: Nike, alt: "Nike", label: "NIKE" },
  { src: Adidas, alt: "Adidas", label: "ADIDAS" },
  { src: UnderArmour, alt: "Under Armour", label: "UNDER ARMOUR" },
  { src: Puma, alt: "Puma", label: "PUMA" },
  { src: AppleHealth, alt: "Apple Health", label: "APPLE HEALTH" },
  { src: GymShark, alt: "Gymshark", label: "GYMSHARK" },
  { src: OptimumNutrition, alt: "Optimum Nutrition", label: "OPTIMUM NUTRITION" },
]

const duplicatedLogos = [...logos, ...logos]

const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const eyebrowVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 8,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.15,
    },
  },
}

const marqueeVariants: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.25,
    },
  },
}

export default function LogoSlider() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.35,
  })

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants}
      className={`
                relative
                w-full
                overflow-hidden
                bg-black
                text-white
                ${arimo.className}
            `}
    >
      {/* =====================================================
                TOP ARCHITECTURAL LINE
            ===================================================== */}

      <div className="relative mx-auto w-full max-w-[1500px] px-6 md:px-10">
        <div className="relative h-px w-full bg-zinc-900">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
                            absolute
                            left-1/2
                            top-0
                            h-px
                            w-24
                            -translate-x-1/2
                            origin-center
                            bg-[#DC2626]
                        "
          />
        </div>
      </div>

      {/* =====================================================
                SECTION INTRO
            ===================================================== */}

      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 pt-10 pb-8 md:pt-12 md:pb-10">
        <motion.div
          variants={eyebrowVariants}
          className="mb-4 flex items-center gap-3"
        >
          <span className="h-px w-6 bg-[#DC2626]" />

          <span className="text-[9px] font-medium tracking-[0.28em] text-zinc-500">
            PERFORMANCE ECOSYSTEM
          </span>

          <span className="h-px w-6 bg-[#DC2626]" />
        </motion.div>

        <motion.div
          variants={eyebrowVariants}
          className="flex flex-col items-center text-center"
        >
          <h2 className="text-sm font-medium tracking-[0.16em] text-zinc-300">
            TRAINED.
            <span className="mx-2 text-[#DC2626]">TRACKED.</span>
            PROVEN.
          </h2>

          <p className="mt-3 max-w-md text-[11px] leading-5 tracking-wide text-zinc-600">
            Connected with the tools and platforms that power modern
            performance.
          </p>
        </motion.div>
      </div>

      {/* =====================================================
                LOGO MARQUEE
            ===================================================== */}

      <motion.div
        variants={marqueeVariants}
        className="relative w-full"
      >
        {/* Left fade */}
        <div
          className="
                        pointer-events-none
                        absolute
                        left-0
                        top-0
                        z-20
                        h-full
                        w-24
                        bg-gradient-to-r
                        from-black
                        to-transparent
                        md:w-40
                    "
        />

        {/* Right fade */}
        <div
          className="
                        pointer-events-none
                        absolute
                        right-0
                        top-0
                        z-20
                        h-full
                        w-24
                        bg-gradient-to-l
                        from-black
                        to-transparent
                        md:w-40
                    "
        />

        {/* Actual marquee */}
        <div
          className="
                        flex
                        w-max
                        animate-axion-marquee
                        will-change-transform
                    "
        >
          {duplicatedLogos.map((logo, index) => (
            <LogoItem
              key={`${logo.label}-${index}`}
              logo={logo}
            />
          ))}
        </div>
      </motion.div>

      {/* =====================================================
                BOTTOM METADATA
            ===================================================== */}

      <div className="mx-auto max-w-[1500px] px-6 md:px-10">
        <div className="flex items-center justify-between border-t border-zinc-900 py-4">
          <span className="text-[8px] uppercase tracking-[0.25em] text-zinc-700">
            Integrated performance
          </span>

          <div className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-[#DC2626]" />

            <span className="text-[8px] uppercase tracking-[0.2em] text-zinc-700">
              Live ecosystem
            </span>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

/* =========================================================
   LOGO ITEM — Brighter default state
========================================================= */

function LogoItem({
  logo,
}: {
  logo: {
    src: typeof Nike
    alt: string
    label: string
  }
}) {
  return (
    <motion.div
      whileHover={{
        opacity: 1,
        scale: 1.05,
      }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
      className="
                group
                flex
                h-20
                w-[170px]
                flex-shrink-0
                items-center
                justify-center
                px-8
                md:w-[210px]
                md:px-10
            "
    >
      <div className="relative flex flex-col items-center justify-center">
        <Image
          src={logo.src}
          alt={logo.alt}
          width={80}
          height={50}
          className="
                        h-9
                        w-20
                        object-contain
                        grayscale
                        opacity-70
                        transition-all
                        duration-300
                        group-hover:grayscale-0
                        group-hover:opacity-100
                    "
        />

        {/* tiny identity marker */}
        <div
          className="
                        absolute
                        -bottom-4
                        left-1/2
                        h-px
                        w-0
                        -translate-x-1/2
                        bg-[#DC2626]
                        transition-all
                        duration-300
                        group-hover:w-5
                    "
        />
      </div>
    </motion.div>
  )
}