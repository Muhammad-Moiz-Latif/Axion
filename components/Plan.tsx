"use client"

import { useState, useRef } from "react"
import { Arimo } from "next/font/google"
import { motion, useInView, AnimatePresence, type Variants } from "framer-motion"
import AnimatedCounter from "./ui/AnimatedCounter"
import Link from "next/link"

const arimo = Arimo({
  variable: "--font-arimo",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const revealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 45,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function Plan() {
  const [selectedPeriod, setSelectedPeriod] = useState<"annually" | "quarterly">("annually")

  const planRef = useRef<HTMLElement | null>(null)

  const isInView = useInView(planRef, {
    once: true,
    amount: 0.2,
  })

  const currentPrice = selectedPeriod === "annually" ? 21 : 25
  const previousPrice = selectedPeriod === "annually" ? 25 : 21

  const currentBilledText =
    selectedPeriod === "annually"
      ? "$240 BILLED ANNUALLY"
      : "$75 BILLED QUARTERLY"

  const currentSavingText =
    selectedPeriod === "annually"
      ? "YOU'RE SAVING $60 / YEAR"
      : "SAVE 20% WITH ANNUAL ACCESS"

  return (
    <section
      ref={planRef}
      className={`${arimo.className} relative min-h-screen overflow-hidden bg-[#050505] text-white`}
    >
      {/* ================================================================ */}
      {/* BACKGROUND                                                        */}
      {/* ================================================================ */}

      <div className="pointer-events-none absolute inset-0">
        {/* Technical grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
                            linear-gradient(to right, rgba(255,255,255,.5) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,.5) 1px, transparent 1px)
                        `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Center ambient red */}
        <div className="absolute left-1/2 top-[42%] h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-red-600/[0.045] blur-[150px]" />

        {/* Horizontal architecture */}
        <div className="absolute left-0 top-[22%] h-px w-full bg-white/[0.04]" />
        <div className="absolute left-0 bottom-[20%] h-px w-full bg-white/[0.035]" />

        {/* Vertical center line */}
        <div className="absolute left-1/2 top-0 hidden h-full w-px bg-white/[0.025] lg:block" />
      </div>

      {/* ================================================================ */}
      {/* CORNERS                                                           */}
      {/* ================================================================ */}

      <div className="pointer-events-none absolute left-5 top-5 h-12 w-12 border-l border-t border-white/10 md:left-10 md:top-10" />
      <div className="pointer-events-none absolute right-5 top-5 h-12 w-12 border-r border-t border-white/10 md:right-10 md:top-10" />
      <div className="pointer-events-none absolute bottom-5 left-5 h-12 w-12 border-b border-l border-white/10 md:bottom-10 md:left-10" />
      <div className="pointer-events-none absolute bottom-5 right-5 h-12 w-12 border-b border-r border-white/10 md:bottom-10 md:right-10" />

      {/* ================================================================ */}
      {/* CONTENT                                                           */}
      {/* ================================================================ */}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
      >
        {/* ============================================================ */}
        {/* HEADER                                                        */}
        {/* ============================================================ */}

        <div className="grid gap-10 lg:grid-cols-[0.8fr_2fr_0.7fr]">
          {/* Label */}
          <motion.div
            variants={revealVariants}
            className="flex items-start gap-3"
          >
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-600 shadow-[0_0_12px_rgba(220,38,38,.8)]" />

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-red-500">
                AXION / ACCESS PROTOCOL
              </p>

              <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-white/30">
                Membership Division
              </p>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.div
            variants={revealVariants}
            className="max-w-4xl"
          >
            <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-white/30">
              Choose your level of commitment.
            </p>

            <h2 className="text-[clamp(2.7rem,6vw,6.5rem)] font-semibold leading-[0.88] tracking-[-0.055em]">
              One system.
              <br />
              <span className="text-white/30">
                No compromises.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-sm leading-7 text-white/35">
              Full access to the Axion training ecosystem —
              intelligent programming, nutrition, tools and
              a community built around intentional progress.
            </p>
          </motion.div>

          {/* Status */}
          <motion.div
            variants={revealVariants}
            className="flex flex-col justify-end lg:items-end"
          >
            <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/20">
              MEMBERSHIP STATUS
            </p>

            <div className="mt-3 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500 shadow-[0_0_10px_rgba(220,38,38,.8)]" />

              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/60">
                OPEN FOR ACCESS
              </span>
            </div>
          </motion.div>
        </div>

        {/* ============================================================ */}
        {/* DIVIDER                                                        */}
        {/* ============================================================ */}

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={
            isInView
              ? { scaleX: 1, opacity: 1 }
              : { scaleX: 0, opacity: 0 }
          }
          transition={{
            duration: 1,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-16 origin-left border-t border-white/[0.08]"
        />

        {/* ============================================================ */}
        {/* PLAN AREA — ALIGNED BORDERS & BUTTONS                       */}
        {/* ============================================================ */}

        <div className="mt-12 grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
          {/* ========================================================== */}
          {/* ANNUAL / STANDARD                                           */}
          {/* ========================================================== */}

          <motion.div
            variants={cardVariants}
            className="group relative flex flex-col overflow-hidden border border-white/[0.09] bg-[#090909]"
          >
            {/* Top telemetry */}
            <div className="flex items-center justify-between border-b border-white/[0.07] px-6 py-4 md:px-8">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 bg-white/70" />
                <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/40">
                  CORE ACCESS
                </span>
              </div>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
                PLAN / 001
              </span>
            </div>

            <div className="relative flex flex-1 flex-col justify-between p-6 md:p-10">
              {/* Giant background number - BIGGER */}
              <span className="pointer-events-none absolute -right-4 top-8 select-none text-[200px] font-semibold leading-none tracking-[-0.1em] text-white/[0.025]">
                01
              </span>

              <div className="relative">
                <p className="text-[10px] uppercase tracking-[0.22em] text-red-500">
                  FULL AXION ACCESS
                </p>
                <h3 className="mt-3 text-2xl font-medium tracking-[-0.03em] text-white">
                  Annual Membership
                </h3>
                <p className="mt-2 max-w-md text-xs leading-6 text-white/30">
                  The complete Axion system with everything
                  required to train, recover and progress
                  with intention.
                </p>
              </div>

              {/* Price - BIGGER DIGITS */}
              <div className="relative mt-12">
                <div className="flex items-end gap-4">
                  <span className="mb-2 text-3xl font-light text-white/50">
                    $
                  </span>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedPeriod}
                      initial={{
                        opacity: 0,
                        y: 18,
                        filter: "blur(8px)",
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                      }}
                      exit={{
                        opacity: 0,
                        y: -18,
                        filter: "blur(8px)",
                      }}
                      transition={{
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <AnimatedCounter
                        from={previousPrice}
                        to={currentPrice}
                        duration={0.8}
                        className="text-[clamp(3.5rem,6vw,6rem)] font-semibold tracking-[-0.05em]"
                      />
                    </motion.div>
                  </AnimatePresence>

                  <div className="mb-3 h-10 w-px rotate-[18deg] bg-white/20" />
                  <span className="mb-2 text-2xl text-white/35">
                    / mo
                  </span>
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <div className="h-px flex-1 bg-white/[0.08]" />

                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentBilledText}
                      initial={{
                        opacity: 0,
                        y: 5,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: -5,
                      }}
                      transition={{ duration: 0.25 }}
                      className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/30"
                    >
                      {currentBilledText}
                    </motion.span>
                  </AnimatePresence>

                  <div className="h-px flex-1 bg-white/[0.08]" />
                </div>
              </div>

              {/* Controls */}
              <div className="relative mt-12">
                <div className="flex w-fit border border-white/[0.09] bg-black p-1">
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedPeriod("quarterly")
                    }
                    className={`relative px-5 py-2.5 text-[10px] uppercase tracking-[0.12em] transition-colors ${selectedPeriod === "quarterly"
                      ? "text-white"
                      : "text-white/30 hover:text-white/60"
                      }`}
                  >
                    {selectedPeriod === "quarterly" && (
                      <motion.div
                        layoutId="periodSelector"
                        className="absolute inset-0 border border-white/20 bg-white/[0.07]"
                        transition={{
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      />
                    )}
                    <span className="relative z-10">
                      Quarterly
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setSelectedPeriod("annually")
                    }
                    className={`relative px-5 py-2.5 text-[10px] uppercase tracking-[0.12em] transition-colors ${selectedPeriod === "annually"
                      ? "text-white"
                      : "text-white/30 hover:text-white/60"
                      }`}
                  >
                    {selectedPeriod === "annually" && (
                      <motion.div
                        layoutId="periodSelector"
                        className="absolute inset-0 border border-red-600/60 bg-red-600/[0.08]"
                        transition={{
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      />
                    )}
                    <span className="relative z-10">
                      Annually
                    </span>
                  </button>
                </div>

                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentSavingText}
                    initial={{
                      opacity: 0,
                      y: 6,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -6,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="mt-4 font-mono text-[9px] uppercase tracking-[0.2em] text-red-500"
                  >
                    {currentSavingText}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Bottom - Fixed height for alignment */}
              <div className="relative mt-auto pt-12">
                <div className="mb-6 border-t border-white/[0.07] pt-5">
                  <p className="max-w-xl text-xs leading-6 text-white/35">
                    One simple plan. Full access to workouts,
                    nutrition, performance tools and the
                    Axion community.
                  </p>
                </div>

                <Link href="/pricing">
                  <motion.div
                    whileHover="hover"
                    initial="rest"
                    className="relative flex h-12 w-full items-center justify-center overflow-hidden bg-white text-black"
                  >
                    <motion.div
                      variants={{
                        rest: { x: "-101%" },
                        hover: { x: "0%" },
                      }}
                      transition={{
                        duration: 0.45,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="absolute inset-0 bg-red-600"
                    />

                    <span className="relative z-10 text-[11px] font-semibold uppercase tracking-[0.12em]">
                      Become an Axion Member
                    </span>

                    <motion.span
                      variants={{
                        rest: { x: 0 },
                        hover: { x: 5 },
                      }}
                      className="relative z-10 ml-4 text-sm"
                    >
                      →
                    </motion.span>
                  </motion.div>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* ========================================================== */}
          {/* LIFETIME — ALIGNED WITH ANNUAL CARD                       */}
          {/* ========================================================== */}

          <motion.div
            variants={cardVariants}
            className="group relative flex flex-col overflow-hidden bg-[#DC2626] text-black"
          >
            {/* Top telemetry */}
            <div className="flex items-center justify-between border-b border-black/15 px-6 py-4 md:px-8">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 bg-black" />
                <span className="font-mono text-[9px] uppercase tracking-[0.22em]">
                  LIFETIME ACCESS
                </span>
              </div>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-black/45">
                PLAN / 002
              </span>
            </div>

            <div className="relative flex flex-1 flex-col justify-between p-6 md:p-10">
              {/* Giant number - BIGGER */}
              <span className="pointer-events-none absolute -right-4 top-8 select-none text-[200px] font-semibold leading-none tracking-[-0.1em] text-black/[0.07]">
                02
              </span>

              <div className="relative">
                <p className="text-[10px] uppercase tracking-[0.22em] text-black/60">
                  PERMANENT ACCESS
                </p>
                <h3 className="mt-3 text-2xl font-medium tracking-[-0.03em]">
                  Lifetime Membership
                </h3>
                <p className="mt-2 max-w-sm text-xs leading-6 text-black/60">
                  One payment. Permanent access to the
                  Axion ecosystem and every future update.
                </p>
              </div>

              {/* Price - BIGGER DIGITS */}
              <div className="relative mt-12">
                <div className="flex items-end gap-3">
                  <span className="mb-2 text-3xl font-light text-black/50">
                    $
                  </span>
                  <span className="text-[clamp(4.5rem,8vw,8rem)] font-semibold leading-none tracking-[-0.07em]">
                    599
                  </span>
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <div className="h-px flex-1 bg-black/20" />
                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-black/50">
                    LIFETIME PLAN
                  </span>
                  <div className="h-px flex-1 bg-black/20" />
                </div>
              </div>

              {/* Availability */}
              <div className="relative mt-12">
                <div className="flex w-fit items-center gap-2 border border-black/20 bg-black/10 px-3 py-2">
                  <span className="h-1.5 w-1.5 bg-black" />
                  <span className="text-[9px] uppercase tracking-[0.15em]">
                    Limited availability
                  </span>
                </div>
                <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.18em] text-black/50">
                  NEXT PRICE TIER: €750
                </p>
              </div>

              {/* Bottom - Matches annual card height */}
              <div className="relative mt-auto pt-12">
                <div className="mb-6 border-t border-black/15 pt-5">
                  <p className="max-w-sm text-xs leading-6 text-black/65">
                    No complicated tiers. No recurring
                    commitment. One permanent key to the
                    complete Axion Vault.
                  </p>
                </div>

                <motion.button
                  type="button"
                  whileHover="hover"
                  initial="rest"
                  className="relative flex h-12 w-full items-center justify-center overflow-hidden bg-black text-white"
                >
                  <motion.div
                    variants={{
                      rest: {
                        y: "101%",
                      },
                      hover: {
                        y: "0%",
                      },
                    }}
                    transition={{
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute inset-0 bg-white"
                  />

                  <span className="relative z-10 text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors">
                    Become a Lifetime Member
                  </span>

                  <motion.span
                    variants={{
                      rest: {
                        x: 0,
                      },
                      hover: {
                        x: 5,
                      },
                    }}
                    className="relative z-10 ml-4 text-sm"
                  >
                    →
                  </motion.span>
                </motion.button>
              </div>
            </div>

            {/* Hover scan */}
            <motion.div
              initial={{
                x: "-100%",
                opacity: 0,
              }}
              whileHover={{
                x: "100%",
                opacity: 1,
              }}
              transition={{
                duration: 0.9,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute left-0 top-0 h-px w-1/2 bg-black/40"
            />
          </motion.div>
        </div>

        {/* ============================================================ */}
        {/* BOTTOM SYSTEM BAR                                              */}
        {/* ============================================================ */}

        <motion.div
          variants={revealVariants}
          className="mt-8 grid gap-5 border-t border-white/[0.07] pt-5 sm:grid-cols-3"
        >
          <div>
            <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
              ACCESS
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-white/45">
              Full ecosystem
            </p>
          </div>

          <div>
            <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
              COMMITMENT
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-white/45">
              Built for consistency
            </p>
          </div>

          <div className="sm:text-right">
            <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
              AXION / 2026
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-white/45">
              Train with intention
            </p>
          </div>
        </motion.div>

      </motion.div>
    </section>
  )
}