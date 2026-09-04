"use client"

import { Arimo } from "next/font/google"
import { motion, type Variants, useInView } from "framer-motion"
import { Check, Minus, ArrowUpRight } from "lucide-react"
import { useRef } from "react"

const arimo = Arimo({
  variable: "--font-arimo",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

type FeatureValue = boolean | "Limited" | "Unlimited"

interface Feature {
  id: string
  name: string
  description: string
  annual: FeatureValue
  lifetime: FeatureValue
}

const features: Feature[] = [
  {
    id: "01",
    name: "Personalized Workout Plans",
    description: "Programming adapted around your objective.",
    annual: true,
    lifetime: true,
  },
  {
    id: "02",
    name: "Nutrition Planning & Tracking",
    description: "Structured nutrition support and monitoring.",
    annual: true,
    lifetime: true,
  },
  {
    id: "03",
    name: "1-on-1 Coaching Sessions",
    description: "Direct access to personalized coaching.",
    annual: "Limited",
    lifetime: "Unlimited",
  },
  {
    id: "04",
    name: "Advanced Analytics",
    description: "Progress data, trends and performance tracking.",
    annual: true,
    lifetime: true,
  },
  {
    id: "05",
    name: "Fitness Challenges",
    description: "Structured challenges designed to create momentum.",
    annual: true,
    lifetime: true,
  },
  {
    id: "06",
    name: "Community Forum",
    description: "Access to the wider Axion performance network.",
    annual: true,
    lifetime: true,
  },
  {
    id: "07",
    name: "Early Feature Access",
    description: "First access to new Axion systems and tools.",
    annual: false,
    lifetime: true,
  },
  {
    id: "08",
    name: "Priority Support",
    description: "Accelerated support when you need it.",
    annual: false,
    lifetime: true,
  },
  {
    id: "09",
    name: "Offline Content",
    description: "Access selected training material without connection.",
    annual: false,
    lifetime: true,
  },
  {
    id: "10",
    name: "Custom Meal Prep Guides",
    description: "Practical nutrition guides built for execution.",
    annual: true,
    lifetime: true,
  },
  {
    id: "11",
    name: "Video Exercise Library",
    description: "A growing library of movement demonstrations.",
    annual: true,
    lifetime: true,
  },
  {
    id: "12",
    name: "Wearable Integration",
    description: "Connect performance data from supported devices.",
    annual: true,
    lifetime: true,
  },
]

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.045,
    },
  },
}

const rowVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const headerVariants: Variants = {
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

function FeatureStatus({
  value,
  active,
}: {
  value: FeatureValue
  active?: boolean
}) {
  if (value === "Unlimited") {
    return (
      <div className="flex items-center justify-center gap-2">
        <span className="h-1.5 w-1.5 bg-black" />
        <span className="font-mono text-[9px] uppercase tracking-[0.16em]">
          Unlimited
        </span>
      </div>
    )
  }

  if (value === "Limited") {
    return (
      <div className="flex items-center justify-center gap-2">
        <span className="h-1.5 w-1.5 bg-red-500" />
        <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-red-500">
          Limited
        </span>
      </div>
    )
  }

  if (value === true) {
    return (
      <div className="flex justify-center">
        <span
          className={`flex h-6 w-6 items-center justify-center border ${active
            ? "border-black/20 bg-black/10"
            : "border-red-600/20 bg-red-600/[0.05]"
            }`}
        >
          <Check
            className={`size-3.5 ${active ? "text-black" : "text-red-500"
              }`}
            strokeWidth={2.5}
          />
        </span>
      </div>
    )
  }

  return (
    <div className="flex justify-center">
      <span className="flex h-6 w-6 items-center justify-center border border-white/[0.05]">
        <Minus className="size-3 text-white/15" />
      </span>
    </div>
  )
}

export default function PricingFeatures() {
  const sectionRef = useRef<HTMLElement | null>(null)

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.12,
  })

  return (
    <section
      ref={sectionRef}
      className={`${arimo.className} relative overflow-hidden bg-[#050505] py-28 text-white lg:py-40`}
    >
      {/* ================================================================
          BACKGROUND
      ================================================================ */}

      <div className="pointer-events-none absolute inset-0">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,.55) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,.55) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Red atmosphere */}
        <div className="absolute right-[-180px] top-[30%] h-[550px] w-[550px] rounded-full bg-red-600/[0.025] blur-[160px]" />

        {/* Architectural lines */}
        <div className="absolute left-0 top-[18%] h-px w-full bg-white/[0.035]" />
        <div className="absolute left-0 bottom-[16%] h-px w-full bg-white/[0.035]" />

        {/* Center axis */}
        <div className="absolute left-1/2 top-0 hidden h-full w-px bg-white/[0.018] lg:block" />
      </div>

      {/* Corners */}
      <div className="pointer-events-none absolute left-5 top-8 h-10 w-10 border-l border-t border-white/[0.08] md:left-10" />
      <div className="pointer-events-none absolute right-5 top-8 h-10 w-10 border-r border-t border-white/[0.08] md:right-10" />

      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        {/* ================================================================
            SECTION HEADER
        ================================================================ */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="grid gap-10 lg:grid-cols-[0.7fr_2fr_0.8fr]">
            {/* Eyebrow */}
            <motion.div
              variants={headerVariants}
              className="flex items-start gap-3"
            >
              <span className="mt-1.5 h-1.5 w-1.5 bg-red-600 shadow-[0_0_12px_rgba(220,38,38,.8)]" />

              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-red-500">
                  AXION / SPECIFICATION
                </p>

                <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.18em] text-white/20">
                  System Capabilities
                </p>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.div variants={headerVariants}>
              <p className="mb-5 text-[9px] uppercase tracking-[0.3em] text-white/25">
                ACCESS MATRIX / 001
              </p>

              <h2 className="text-[clamp(2.8rem,6vw,6rem)] font-semibold leading-[0.88] tracking-[-0.055em]">
                Every tool.
                <br />
                <span className="text-white/25">
                  Nothing hidden.
                </span>
              </h2>

              <p className="mt-7 max-w-2xl text-sm leading-7 text-white/35">
                Compare exactly what each level of access unlocks.
                No artificial tiers. No unnecessary complexity.
                Just the infrastructure required to keep moving.
              </p>
            </motion.div>

            {/* Right metadata */}
            <motion.div
              variants={headerVariants}
              className="flex flex-col justify-end lg:items-end"
            >
              <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
                TOTAL SYSTEMS
              </p>

              <p className="mt-2 text-4xl font-semibold tracking-[-0.05em] text-white/80">
                12
              </p>

              <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.18em] text-white/20">
                VERIFIED CAPABILITIES
              </p>
            </motion.div>
          </div>

          {/* Header rule */}
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

          {/* ================================================================
              PLAN LEGEND
          ================================================================ */}

          <motion.div
            variants={headerVariants}
            className="mt-10 grid gap-3 lg:grid-cols-[1.5fr_0.75fr_0.75fr]"
          >
            <div className="hidden lg:block">
              <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
                SYSTEM COMPONENT
              </p>
            </div>

            {/* Annual */}
            <div className="relative overflow-hidden border border-white/[0.09] bg-[#090909]">
              <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-white/60" />
                  <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/45">
                    Annual / Quarterly
                  </span>
                </div>

                <span className="font-mono text-[8px] text-white/15">
                  001
                </span>
              </div>

              <div className="px-5 py-4">
                <p className="text-xs uppercase tracking-[0.1em] text-white/70">
                  Core Access
                </p>
              </div>
            </div>

            {/* Lifetime */}
            <div className="bg-[#DC2626] text-black">
              <div className="flex items-center justify-between border-b border-black/15 px-5 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-black" />
                  <span className="font-mono text-[8px] uppercase tracking-[0.2em]">
                    Lifetime
                  </span>
                </div>

                <span className="font-mono text-[8px] text-black/40">
                  002
                </span>
              </div>

              <div className="px-5 py-4">
                <p className="text-xs uppercase tracking-[0.1em]">
                  Permanent Access
                </p>
              </div>
            </div>
          </motion.div>

          {/* ================================================================
              FEATURE MATRIX
          ================================================================ */}

          <div className="mt-3 overflow-hidden border border-white/[0.08]">
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                variants={rowVariants}
                className="group relative grid grid-cols-[1fr_110px_110px] items-stretch border-b border-white/[0.055] last:border-b-0 lg:grid-cols-[1.5fr_0.75fr_0.75fr]"
              >
                {/* Hover scan */}
                <motion.div
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                  className="pointer-events-none absolute left-0 top-0 z-20 h-px w-1/3 bg-red-600"
                />

                {/* Feature information */}
                <div className="relative min-w-0 px-4 py-5 sm:px-6 lg:px-8 lg:py-6">
                  <div className="flex items-start gap-4">
                    <span className="hidden pt-0.5 font-mono text-[8px] tracking-[0.15em] text-white/15 sm:block">
                      {feature.id}
                    </span>

                    <div className="min-w-0">
                      <p className="text-xs font-medium uppercase tracking-[0.04em] text-white/75 transition-colors duration-300 group-hover:text-white">
                        {feature.name}
                      </p>

                      <p className="mt-1.5 max-w-lg text-[10px] leading-5 text-white/20 transition-colors duration-300 group-hover:text-white/35">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Annual */}
                <div className="flex items-center justify-center border-l border-white/[0.055] bg-white/[0.008] transition-colors duration-300 group-hover:bg-white/[0.018]">
                  <FeatureStatus value={feature.annual} />
                </div>

                {/* Lifetime */}
                <div className="flex items-center justify-center border-l border-white/[0.055] bg-red-600/[0.025] transition-colors duration-300 group-hover:bg-red-600/[0.055]">
                  <FeatureStatus
                    value={feature.lifetime}
                    active
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* ================================================================
              SYSTEM FOOTER
          ================================================================ */}

          <motion.div
            variants={headerVariants}
            className="mt-6 grid gap-5 border-t border-white/[0.07] pt-5 sm:grid-cols-3"
          >
            <div>
              <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
                CAPABILITY
              </p>

              <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-white/40">
                12 systems verified
              </p>
            </div>

            <div>
              <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
                DIFFERENCE
              </p>

              <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-white/40">
                Permanent access unlocks all
              </p>
            </div>

            <div className="sm:text-right">
              <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
                AXION / PROTOCOL
              </p>

              <div className="mt-1 inline-flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-[0.12em] text-white/40">
                  Inspect full system
                </span>

                <ArrowUpRight className="size-3 text-red-500" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}