"use client"

import { Arimo } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { motion, type Variants } from "framer-motion"
import { useEffect, useState } from "react"
import LightRays from "./ui/LightRays"
import CalorieStat from "./ui/CalorieStat"
import HeartRateStat from "./ui/HeartRateStat"
import MuscleActivation from "./ui/Muscle"
import BloodPressure from "./ui/BloodPressure"
import bg from "../assets/muscles-wallpaper-5120x2880-photoaidcom-greyscale.jpg"

const arimo = Arimo({
  variable: "--font-arimo",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

const reveal: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

const fastReveal: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
}

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      setMousePosition({ x, y })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <>
      {/* =========================================================
          HERO - CINEMATIC MASTER
      ========================================================= */}
      <section
        className={`
          relative
          h-[100svh]
          min-h-[680px]
          w-full
          overflow-hidden
          bg-black
          text-white
          ${arimo.className}
        `}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* IMAGE */}
        <Image
          src={bg}
          alt="Athlete back under dramatic lighting"
          fill
          priority
          sizes="100vw"
          className="
            absolute inset-0 z-0
            object-cover object-center
            transition-transform duration-[8s] ease-out
          "
          style={{
            transform: `scale(${isHovering ? 1.02 : 1}) translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)`,
          }}
        />

        {/* CINEMATIC OVERLAYS - MORE TRANSPARENT */}
        <div className="absolute inset-0 z-[1] bg-black/15" />
        <div className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(0,0,0,.75)_0%,rgba(0,0,0,.30)_28%,rgba(0,0,0,.02)_50%,rgba(0,0,0,.10)_100%)]" />
        <div className="absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(0,0,0,.08)_0%,transparent_40%,rgba(0,0,0,.80)_100%)]" />

        {/* Subtle mouse-follow light */}
        <div
          className="pointer-events-none absolute inset-0 z-[2]"
          style={{
            background: `radial-gradient(circle at ${50 + mousePosition.x * 10}% ${30 + mousePosition.y * 5}%, rgba(220,38,38,0.035) 0%, transparent 60%)`,
          }}
        />

        {/* LIGHT RAYS - MORE VISIBLE */}
        <div className="pointer-events-none absolute inset-0 top-[-10px] z-[5] opacity-[0.9]">
          <LightRays
            raysOrigin="top-center"
            raysColor="#ffffff"
            raysSpeed={0.55}
            lightSpread={1.9}
            rayLength={1}
            followMouse={true}
            mouseInfluence={0.025}
            noiseAmount={0.12}
            distortion={0.025}
            flickerOnAppear
            className="custom-rays"
          />
        </div>

        {/* Very subtle grid */}
        <div
          className="
            pointer-events-none absolute inset-0 z-[6]
            opacity-[0.025]
            [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)]
            [background-size:80px_80px]
          "
        />

        {/* =========================================================
            TOP HEADER - MINIMAL
        ========================================================= */}
        <header className="absolute left-0 right-0 top-0 z-40 px-6 pt-6 md:px-10 md:pt-7">
          <div className="flex items-center justify-between">
            {/* Brand */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fastReveal}
              className="flex items-center gap-3"
            >
              <div className="relative flex size-7 items-center justify-center">
                <div className="absolute inset-0 border border-white/10 bg-white/[0.02]" />
                <div className="size-1.5 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,.6)] animate-pulse" />
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/80">
                  Spartan
                </p>
                <p className="mt-0.5 text-[7px] uppercase tracking-[0.3em] text-zinc-500">
                  Performance Lab
                </p>
              </div>
            </motion.div>

            {/* Minimal status */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fastReveal}
              transition={{ delay: 0.12 }}
              className="flex items-center gap-3"
            >
              <span className="size-1 rounded-full bg-green-500 shadow-[0_0_6px_rgba(34,197,94,.5)] animate-pulse" />
              <span className="text-[8px] uppercase tracking-[0.22em] text-zinc-500">
                Online
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 h-px origin-left bg-gradient-to-r from-red-500/20 via-white/5 to-transparent"
          />
        </header>

        {/* =========================================================
            CENTER STATEMENT - TRANSPARENT & ELEGANT
        ========================================================= */}
        <div className="absolute left-1/2 top-[26%] z-30 w-full -translate-x-1/2 px-6 text-center md:top-[24%]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={reveal}
            transition={{ delay: 0.22 }}
            className="flex items-center justify-center gap-3"
          >
            <span className="h-px w-8 bg-red-500/30" />
            <span className="text-[7px] font-medium uppercase tracking-[0.38em] text-zinc-400/60">
              Human Performance
            </span>
            <span className="h-px w-8 bg-red-500/30" />
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={reveal}
            transition={{ delay: 0.32 }}
            className="
              mt-32
              text-[clamp(4.5rem,10vw,10rem)]
              font-bold
              leading-[0.82]
              tracking-[-0.07em]
              [text-shadow:0_0_80px_rgba(0,0,0,0.3)]
            "
          >
            <div className="flex flex-col items-center">
              <span className="block text-white/75 tracking-[-0.08em]">
                Built.
              </span>
              <span className="block text-zinc-500/50 -mt-4 md:-mt-6 lg:-mt-8 tracking-[-0.06em]">
                Not Born.
              </span>
            </div>
          </motion.h1>

          {/* =========================================================
    MANIFESTO - SYSTEM STATEMENT
========================================================= */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={reveal}
            transition={{ delay: 0.44 }}
            className="mx-auto mt-7 flex max-w-[360px] items-center justify-center gap-4"
          >
            {/* left signal */}
            <div className="hidden h-8 w-px bg-gradient-to-b from-transparent via-red-500/30 to-transparent sm:block" />

            <div className="text-left">

              {/* statement */}
              <p
                className="
                  text-[9px]
                  font-light
                  leading-[1.55]
                  tracking-[0.10em]
                  text-zinc-400/65
                  [text-shadow:0_1px_12px_rgba(0,0,0,0.6)]
                "
              >
                The body is the project.
                <br />
                <span className="text-zinc-500/50">
                  The work is the proof.
                </span>
              </p>
            </div>

            {/* right signal */}
            <div className="hidden h-8 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent sm:block" />
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={reveal}
            transition={{ delay: 0.54 }}
            className="mt-4 flex items-center justify-center gap-3"
          >
            <Link
              href="/pricing"
              className="
              group relative flex h-9 items-center justify-center
              overflow-hidden bg-red-600/80 backdrop-blur-sm px-6
              text-[8px] font-semibold uppercase tracking-[0.2em]
              transition-all duration-300
              hover:bg-red-500 hover:scale-[1.03]
              shadow-lg shadow-red-500/10
              border border-white/5
            "
            >
              <span className="relative z-10">Join</span>
              <span className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-500 group-hover:translate-x-0" />
            </Link>

            <Link
              href="#about"
              className="
      group flex h-9 items-center gap-2
      border border-white/15 bg-white/[0.02] backdrop-blur-sm px-6
      text-[8px] uppercase tracking-[0.2em] text-zinc-400/60
      transition-all duration-300
      hover:border-white/25 hover:text-zinc-300 hover:bg-white/[0.05]
    "
            >
              Discover
              <span className="text-[13px] text-zinc-600/50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-zinc-400">
                →
              </span>
            </Link>
          </motion.div>
        </div>

        {/* =========================================================
            BODY-ANCHORED STATS (UNCHANGED POSITIONS)
        ========================================================= */}
        <div className="absolute left-[35%] top-[60%] z-20">
          <CalorieStat delay={0.5} />
        </div>
        <div className="absolute right-[35%] bottom-[45%] z-20">
          <HeartRateStat />
        </div>
        <div className="absolute top-[40%] left-[35%] z-20">
          <MuscleActivation />
        </div>
        <div className="absolute top-[45%] right-[32%] z-20">
          <BloodPressure />
        </div>



        {/* Corner marks */}
        <div className="pointer-events-none absolute bottom-[72px] left-6 z-30 size-4 border-b border-l border-white/5 md:left-10" />
        <div className="pointer-events-none absolute bottom-[72px] right-6 z-30 size-4 border-b border-r border-white/5 md:right-10" />
      </section>
    </>
  )
}