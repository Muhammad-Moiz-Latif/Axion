"use client"

import { Arimo } from "next/font/google"
import { motion, type Variants } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

const arimo = Arimo({
  variable: "--font-arimo",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

const values = [
  {
    number: "01",
    code: "MEASUREMENT",
    title: "Data before assumption.",
    description:
      "We use meaningful information to understand where you are, what is changing and what deserves attention.",
  },
  {
    number: "02",
    code: "ADAPTATION",
    title: "Built around you.",
    description:
      "Your training should respond to your body, your goals and your reality — not the other way around.",
  },
  {
    number: "03",
    code: "CONSISTENCY",
    title: "Progress that compounds.",
    description:
      "The best system is one you can keep using. Sustainable progress beats short-lived intensity.",
  },
  {
    number: "04",
    code: "INNOVATION",
    title: "Technology in service of people.",
    description:
      "We use modern tools, science and intelligent systems to make better decisions, not simply more complicated ones.",
  },
]

const reveal: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

export default function AboutValues() {
  const valuesRef = useRef<HTMLElement | null>(null)

  const isInView = useInView(valuesRef, {
    once: true,
    amount: 0.15,
  })

  return (
    <motion.section
      ref={valuesRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`${arimo.className} relative overflow-hidden bg-[#030303] text-white`}
    >
      {/* Background grid */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
          [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />

      <div className="relative mx-auto max-w-[1500px] px-6 py-24 md:px-10 lg:px-14 lg:py-32">
        {/* Header */}

        <motion.div
          variants={reveal}
          className="border-b border-white/[0.08] pb-10"
        >
          <div className="flex items-center gap-3">
            <span className="size-1.5 bg-red-600" />

            <span className="font-mono text-[8px] uppercase tracking-[0.28em] text-red-500">
              AXION / PRINCIPLES
            </span>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.55fr]">
            <h2 className="text-[clamp(3.5rem,7vw,8rem)] font-semibold leading-[0.8] tracking-[-0.07em]">
              What we
              <br />
              <span className="text-white/30">believe.</span>
            </h2>

            <p className="max-w-md self-end text-sm leading-7 text-white/30">
              Four principles shape every program, feature and decision inside
              the Axion system.
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            PRINCIPLE LIST
        ===================================================== */}

        <div className="mt-12">
          {values.map((value, index) => (
            <motion.div
              key={value.number}
              variants={reveal}
              transition={{
                delay: index * 0.08,
              }}
              className="
                group
                relative
                grid
                border-b
                border-white/[0.08]
                py-8
                transition-colors
                duration-500
                md:grid-cols-[100px_180px_1fr_auto]
                md:items-center
                md:gap-8
                lg:py-10
              "
            >
              {/* Hover scan */}

              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute bottom-0 left-0 h-px w-full origin-left bg-red-600"
              />

              {/* Number */}

              <div>
                <span className="font-mono text-[11px] tracking-[0.2em] text-red-500">
                  {value.number}
                </span>
              </div>

              {/* Code */}

              <div className="mt-3 md:mt-0">
                <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/20">
                  {value.code}
                </span>
              </div>

              {/* Main content */}

              <div className="mt-4 md:mt-0">
                <h3 className="text-2xl font-medium tracking-[-0.035em] text-white/80 transition-colors duration-300 group-hover:text-white md:text-3xl">
                  {value.title}
                </h3>

                <p className="mt-3 max-w-xl text-xs leading-6 text-white/25 transition-colors duration-300 group-hover:text-white/40">
                  {value.description}
                </p>
              </div>

              {/* Status */}

              <div className="mt-5 flex items-center gap-2 md:mt-0">
                <span className="size-1 rounded-full bg-red-500 opacity-40 transition-opacity duration-300 group-hover:opacity-100" />

                <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/15">
                  CORE
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* =====================================================
            CLOSING STATEMENT
        ===================================================== */}

        <motion.div
          variants={reveal}
          className="mt-20 grid gap-8 border-t border-white/[0.08] pt-8 md:grid-cols-[1fr_auto] md:items-end"
        >
          <p className="max-w-3xl text-[clamp(1.8rem,3.5vw,4rem)] font-medium leading-[0.95] tracking-[-0.045em] text-white/70">
            We are not here to make fitness
            <span className="text-white/25"> more complicated.</span>
            <br />
            We are here to make it
            <span className="text-red-600"> work.</span>
          </p>

          <div className="font-mono text-[7px] uppercase tracking-[0.25em] text-white/15">
            AXION / CORE PHILOSOPHY
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}