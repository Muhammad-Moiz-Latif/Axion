"use client"

import Image from "next/image"
import { Arimo } from "next/font/google"
import { motion, type Variants } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

import heroBg from "../assets/nipples.jpg"

const arimo = Arimo({
  variable: "--font-arimo",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

const reveal: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

const smallReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

export default function AboutHero() {
  const heroRef = useRef<HTMLElement | null>(null)

  const isInView = useInView(heroRef, {
    once: true,
    amount: 0.2,
  })

  return (
    <motion.section
      ref={heroRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`${arimo.className} relative min-h-[88svh] overflow-hidden bg-[#030303] text-white`}
    >
      {/* =====================================================
          IMAGE
      ===================================================== */}

      <Image
        src={heroBg}
        alt="Abstract human performance imagery"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 object-cover object-center"
      />

      {/* =====================================================
          CINEMATIC TREATMENT
      ===================================================== */}

      <div className="absolute inset-0 bg-black/35" />

      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(90deg,rgba(0,0,0,.94)_0%,rgba(0,0,0,.68)_25%,rgba(0,0,0,.2)_55%,rgba(0,0,0,.3)_100%)]
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(180deg,rgba(0,0,0,.55)_0%,transparent_35%,rgba(0,0,0,.92)_100%)]
        "
      />

      {/* Red atmosphere */}

      <div
        className="
          pointer-events-none
          absolute
          left-[55%]
          top-[40%]
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-red-600/[0.035]
          blur-[150px]
        "
      />

      {/* =====================================================
          GRID
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
          [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />

      {/* =====================================================
          TOP SYSTEM BAR
      ===================================================== */}

      <div className="absolute left-0 right-0 top-0 z-30 px-6 pt-24 md:px-10 lg:px-14">
        <motion.div
          variants={smallReveal}
          className="flex items-center justify-between border-b border-white/[0.08] pb-4"
        >
          <div className="flex items-center gap-3">
            <span className="size-1.5 bg-red-600 shadow-[0_0_10px_rgba(220,38,38,.7)]" />

            <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-red-500">
              AXION / ABOUT
            </span>
          </div>

          <span className="hidden font-mono text-[8px] uppercase tracking-[0.22em] text-white/20 sm:block">
            DOSSIER / 001
          </span>
        </motion.div>
      </div>

      {/* =====================================================
          MAIN EDITORIAL COPY
      ===================================================== */}

      <div className="relative z-20 mx-auto flex min-h-[88svh] max-w-[1600px] items-end px-6 pb-28 pt-40 md:px-10 lg:px-14 lg:pb-32">
        <div className="max-w-[850px]">
          <motion.div
            variants={smallReveal}
            className="mb-7 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-red-500" />

            <span className="text-[8px] uppercase tracking-[0.38em] text-white/40">
              The Origin
            </span>
          </motion.div>

          <motion.h1
            variants={reveal}
            className="
              text-[clamp(4rem,8vw,9rem)]
              font-semibold
              leading-[0.78]
              tracking-[-0.075em]
            "
          >
            <span className="block text-white">
              Built on
            </span>

            <span className="block text-white/45">
              evidence.
            </span>

            <span className="block text-red-600">
              Driven by progress.
            </span>
          </motion.h1>

          <motion.div
            variants={reveal}
            className="mt-9 flex flex-col gap-8 sm:flex-row sm:items-end"
          >
            <p className="max-w-[410px] text-sm leading-7 text-white/45">
              Axion exists to close the gap between how people train and what
              actually moves human performance forward.
            </p>

            <div className="hidden h-12 w-px bg-white/10 sm:block" />

            <div className="max-w-[190px]">
              <p className="font-mono text-[8px] uppercase leading-[1.8] tracking-[0.22em] text-white/25">
                Measurement.
                <br />
                Adaptation.
                <br />
                Consistency.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          RIGHT-SIDE DOSSIER
      ===================================================== */}

      <motion.div
        variants={smallReveal}
        className="
          absolute
          right-6
          top-1/2
          z-20
          hidden
          -translate-y-1/2
          lg:block
          lg:right-14
        "
      >
        <div className="flex items-center gap-4">
          <div className="h-px w-12 bg-white/10" />

          <div className="text-right">
            <p className="font-mono text-[7px] uppercase tracking-[0.3em] text-white/20">
              Subject
            </p>

            <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.2em] text-white/45">
              AXION / 001
            </p>

            <p className="mt-1 font-mono text-[7px] uppercase tracking-[0.2em] text-red-500">
              ACTIVE
            </p>
          </div>
        </div>
      </motion.div>

      {/* =====================================================
          BOTTOM TELEMETRY
      ===================================================== */}

      <div className="absolute bottom-0 left-0 right-0 z-30 border-t border-white/[0.08] bg-black/40 backdrop-blur-md">
        <div className="flex h-[58px] items-center justify-between px-6 md:px-10">
          <div className="flex items-center gap-5">
            <span className="font-mono text-[7px] uppercase tracking-[0.28em] text-white/25">
              AXION / ORIGIN
            </span>

            <span className="hidden h-3 w-px bg-white/10 sm:block" />

            <span className="hidden font-mono text-[7px] uppercase tracking-[0.25em] text-white/15 sm:block">
              PERFORMANCE SYSTEM
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="size-1 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,.7)]" />

            <span className="font-mono text-[7px] uppercase tracking-[0.25em] text-white/25">
              SYSTEM ACTIVE
            </span>
          </div>
        </div>
      </div>

      {/* Corners */}

      <div className="pointer-events-none absolute bottom-20 left-6 z-30 size-6 border-b border-l border-white/10 md:left-10" />

      <div className="pointer-events-none absolute bottom-20 right-6 z-30 size-6 border-b border-r border-white/10 md:right-10" />
    </motion.section>
  )
}