"use client"

import Image from "next/image"
import Link from "next/link"
import { Arimo } from "next/font/google"
import { motion, useInView, type Variants } from "framer-motion"
import { useRef } from "react"

import p1 from "../assets/p1.png"
import p2 from "../assets/p2.png"
import p3 from "../assets/p3.png"
import p4 from "../assets/p4.png"

const arimo = Arimo({
  variable: "--font-arimo",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const revealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
    filter: "blur(7px)",
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

const avatarVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.7,
    x: -8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function JoinUs() {
  const joinUsRef = useRef<HTMLElement | null>(null)

  const isInView = useInView(joinUsRef, {
    once: true,
    amount: 0.3,
  })

  const avatars = [p1, p2, p3, p4]

  return (
    <section
      ref={joinUsRef}
      className={`${arimo.className} relative overflow-hidden bg-[#050505] text-white`}
    >
      {/* ================================================================ */}
      {/* BACKGROUND                                                       */}
      {/* ================================================================ */}

      <div className="pointer-events-none absolute inset-0">
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

        <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/[0.05] blur-[140px]" />

        <div className="absolute left-0 top-1/2 h-px w-full bg-white/[0.04]" />
      </div>

      {/* ================================================================ */}
      {/* CORNERS                                                          */}
      {/* ================================================================ */}

      <div className="pointer-events-none absolute left-5 top-5 h-10 w-10 border-l border-t border-white/10 md:left-10 md:top-10" />

      <div className="pointer-events-none absolute right-5 top-5 h-10 w-10 border-r border-t border-white/10 md:right-10 md:top-10" />

      <div className="pointer-events-none absolute bottom-5 left-5 h-10 w-10 border-b border-l border-white/10 md:bottom-10 md:left-10" />

      <div className="pointer-events-none absolute bottom-5 right-5 h-10 w-10 border-b border-r border-white/10 md:bottom-10 md:right-10" />

      {/* ================================================================ */}
      {/* CONTENT                                                          */}
      {/* ================================================================ */}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
      >
        {/* Top line */}

        <motion.div
          variants={revealVariants}
          className="mb-12 flex items-center justify-between border-b border-white/[0.08] pb-5"
        >
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-red-600 shadow-[0_0_12px_rgba(220,38,38,.8)]" />

            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-red-500">
              AXION / ACCESS PROTOCOL
            </span>
          </div>

          <span className="hidden font-mono text-[9px] uppercase tracking-[0.2em] text-white/20 sm:block">
            FINAL STEP / 001
          </span>
        </motion.div>

        {/* Main */}

        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.7fr]">
          {/* LEFT */}

          <div>
            <motion.p
              variants={revealVariants}
              className="mb-5 text-[10px] uppercase tracking-[0.3em] text-white/30"
            >
              Your next phase starts here.
            </motion.p>

            <motion.h2
              variants={revealVariants}
              className="max-w-4xl text-[clamp(3rem,7vw,7.5rem)] font-semibold leading-[0.86] tracking-[-0.06em]"
            >
              Stop waiting.
              <br />

              <span className="text-white/30">
                Start training.
              </span>
            </motion.h2>

            <motion.p
              variants={revealVariants}
              className="mt-8 max-w-xl text-sm leading-7 text-white/35"
            >
              Join a performance system designed to
              evolve with you. Train with structure.
              Measure your progress. Build something
              that lasts.
            </motion.p>

            {/* Members */}

            <motion.div
              variants={revealVariants}
              className="mt-10 flex items-center gap-5"
            >
              <div className="flex items-center">
                {avatars.map((avatar, index) => (
                  <motion.div
                    key={index}
                    variants={avatarVariants}
                    className={`relative h-9 w-9 overflow-hidden rounded-full border border-[#050505] ${index !== 0 ? "-ml-2" : ""
                      }`}
                  >
                    <Image
                      src={avatar}
                      alt={`Axion member ${index + 1}`}
                      fill
                      sizes="36px"
                      className="object-cover grayscale"
                    />
                  </motion.div>
                ))}
              </div>

              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/60">
                  1,025+ ACTIVE MEMBERS
                </p>

                <p className="mt-1 text-[9px] uppercase tracking-[0.14em] text-white/20">
                  Training with intention
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT / ACCESS MODULE */}

          <motion.div
            variants={revealVariants}
            className="relative border border-white/[0.09] bg-[#090909]"
          >
            {/* Header */}

            <div className="flex items-center justify-between border-b border-white/[0.07] px-6 py-4">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/30">
                MEMBERSHIP
              </span>

              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-red-500">
                OPEN
              </span>
            </div>

            <div className="relative p-6 md:p-8">
              {/* Giant number */}

              <span className="pointer-events-none absolute right-4 top-2 font-mono text-[110px] leading-none text-white/[0.025]">
                01
              </span>

              <div className="relative">
                <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-red-500">
                  ACCESS REQUEST
                </p>

                <p className="mt-3 text-lg font-medium tracking-[-0.02em] text-white">
                  Become part of Axion.
                </p>

                <p className="mt-2 text-xs leading-6 text-white/30">
                  Full access to the training ecosystem,
                  tools, programming and community.
                </p>
              </div>

              {/* Status */}

              <div className="mt-10 space-y-4 border-y border-white/[0.07] py-5">
                {[
                  "Adaptive training system",
                  "Performance tracking",
                  "Nutrition & recovery tools",
                  "Axion member community",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center justify-between"
                  >
                    <span className="text-[10px] uppercase tracking-[0.12em] text-white/35">
                      {item}
                    </span>

                    <span className="font-mono text-[8px] text-red-500">
                      0{index + 1}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}

              <Link href="/pricing" className="block mt-7">
                <motion.div
                  initial="rest"
                  whileHover="hover"
                  className="relative flex h-12 items-center justify-center overflow-hidden hover:text-red-600 bg-red-600 text-white"
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
                    className="absolute inset-0 bg-white"
                  />

                  <span className="relative z-10 text-[10px] font-semibold  uppercase tracking-[0.15em] transition-colors">
                    Become an Axion Member
                  </span>

                  <motion.span
                    variants={{
                      rest: { x: 0 },
                      hover: { x: 5 },
                    }}
                    className="relative z-10 ml-4"
                  >
                    →
                  </motion.span>
                </motion.div>
              </Link>

              <p className="mt-4 text-center font-mono text-[8px] uppercase tracking-[0.18em] text-white/25">
                No hidden charges / No unnecessary tiers
              </p>
            </div>

            {/* Scan line */}

            <motion.div
              initial={{ x: "-100%" }}
              whileInView={{ x: "100%" }}
              viewport={{ once: true }}
              transition={{
                duration: 1.8,
                delay: 0.8,
                ease: "linear",
              }}
              className="pointer-events-none absolute left-0 top-0 h-px w-1/3 bg-gradient-to-r from-transparent via-red-500 to-transparent"
            />
          </motion.div>
        </div>

        {/* Bottom telemetry */}

        <motion.div
          variants={revealVariants}
          className="mt-16 flex flex-col gap-4 border-t border-white/[0.07] pt-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/25">
            AXION PERFORMANCE SYSTEM
          </span>

          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500" />

            <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/25">
              READY FOR INPUT
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}