"use client"

import Image from "next/image"
import { Arimo } from "next/font/google"
import { motion, type Variants } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

import storyImage from "../assets/greeko.png"

const arimo = Arimo({
  variable: "--font-arimo",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

const reveal: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

export default function AboutStory() {
  const storyRef = useRef<HTMLElement | null>(null)

  const isInView = useInView(storyRef, {
    once: true,
    amount: 0.2,
  })

  return (
    <motion.section
      ref={storyRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`${arimo.className} relative overflow-hidden bg-[#050505] text-white`}
    >
      {/* Grid */}

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

      <div className="relative mx-auto max-w-[1500px] px-6 py-24 md:px-10 lg:px-14 lg:py-36">
        {/* Header */}

        <motion.div
          variants={reveal}
          className="mb-16 flex items-center justify-between border-b border-white/[0.08] pb-5"
        >
          <div className="flex items-center gap-3">
            <span className="size-1.5 bg-red-600" />

            <span className="font-mono text-[8px] uppercase tracking-[0.28em] text-red-500">
              AXION / ORIGIN
            </span>
          </div>

          <span className="hidden font-mono text-[8px] uppercase tracking-[0.22em] text-white/15 sm:block">
            FILE / 002
          </span>
        </motion.div>

        {/* Main layout */}

        <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          {/* =================================================
              IMAGE
          ================================================= */}

          <motion.div
            variants={reveal}
            className="relative mx-auto w-full max-w-[620px]"
          >
            <div className="relative aspect-[4/5] overflow-hidden border border-white/[0.08] bg-[#090909]">
              <Image
                src={storyImage}
                alt="Classical human figure representing human potential"
                fill
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-contain grayscale opacity-85"
              />

              {/* Image treatment */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

              {/* Scan */}

              <motion.div
                initial={{ y: "-100%" }}
                whileInView={{ y: "100%" }}
                viewport={{ once: true }}
                transition={{
                  duration: 2.2,
                  delay: 0.5,
                  ease: "linear",
                }}
                className="
                  pointer-events-none
                  absolute
                  left-0
                  top-0
                  h-px
                  w-full
                  bg-gradient-to-r
                  from-transparent
                  via-red-500/70
                  to-transparent
                "
              />

              {/* Subject label */}

              <div className="absolute bottom-5 left-5">
                <p className="font-mono text-[7px] uppercase tracking-[0.28em] text-white/25">
                  SUBJECT
                </p>

                <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.18em] text-white/60">
                  HUMAN / 001
                </p>
              </div>

              <div className="absolute right-5 top-5 font-mono text-[7px] uppercase tracking-[0.2em] text-red-500">
                ANALYSIS ACTIVE
              </div>
            </div>
          </motion.div>

          {/* =================================================
              STORY
          ================================================= */}

          <div>
            <motion.p
              variants={reveal}
              className="font-mono text-[8px] uppercase tracking-[0.3em] text-red-500"
            >
              Why Axion exists
            </motion.p>

            <motion.h2
              variants={reveal}
              className="
                mt-5
                max-w-3xl
                text-[clamp(3rem,5.5vw,6.5rem)]
                font-semibold
                leading-[0.84]
                tracking-[-0.06em]
              "
            >
              Fitness should
              <br />
              <span className="text-white/35">be measurable.</span>
            </motion.h2>

            <motion.div
              variants={reveal}
              className="mt-10 max-w-xl space-y-6"
            >
              <p className="text-sm leading-7 text-white/45">
                Axion was founded on a simple belief: human potential deserves
                more than guesswork.
              </p>

              <p className="text-sm leading-7 text-white/30">
                We started with a vision to make the principles behind elite
                performance accessible to everyone. Training should respond to
                the person doing it — not force every person into the same
                system.
              </p>

              <p className="text-sm leading-7 text-white/30">
                That means measuring what matters, adapting when the data
                changes, and building habits that can survive beyond a single
                workout. Technology is simply the instrument. The objective is
                human progress.
              </p>
            </motion.div>

            {/* Methodology strip */}

            <motion.div
              variants={reveal}
              className="mt-12 grid grid-cols-3 border-y border-white/[0.08]"
            >
              <div className="border-r border-white/[0.08] py-5 pr-4">
                <p className="font-mono text-[7px] uppercase tracking-[0.2em] text-red-500">
                  01
                </p>

                <p className="mt-2 text-[9px] uppercase tracking-[0.1em] text-white/40">
                  Measure
                </p>
              </div>

              <div className="border-r border-white/[0.08] px-4 py-5">
                <p className="font-mono text-[7px] uppercase tracking-[0.2em] text-red-500">
                  02
                </p>

                <p className="mt-2 text-[9px] uppercase tracking-[0.1em] text-white/40">
                  Adapt
                </p>
              </div>

              <div className="py-5 pl-4">
                <p className="font-mono text-[7px] uppercase tracking-[0.2em] text-red-500">
                  03
                </p>

                <p className="mt-2 text-[9px] uppercase tracking-[0.1em] text-white/40">
                  Progress
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}