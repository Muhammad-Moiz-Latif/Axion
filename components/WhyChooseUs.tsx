"use client"

import { useRef } from "react"
import Image from "next/image"
import { Arimo } from "next/font/google"
import {
  motion,
  useInView,
  type Variants,
} from "framer-motion"
import {
  ArrowUpRight,
  Activity,
  Crosshair,
  Database,
  Target,
  ShieldCheck,
  Star,
} from "lucide-react"

import datadriven from "../assets/data-driven.png"
import personalization from "../assets/personalization.png"
import results from "../assets/results.png"
import greek from "../assets/greek.png"

import AnimatedCounter from "./ui/AnimatedCounter"

const arimo = Arimo({
  variable: "--font-arimo",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

const ease = [0.22, 1, 0.36, 1] as const

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const revealUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease,
    },
  },
}

const revealLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease,
    },
  },
}

const revealRight: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease,
    },
  },
}

const principles = [
  {
    number: "01",
    icon: Database,
    image: datadriven,
    title: "Data before assumption",
    description:
      "Every decision begins with measurable information. Training, recovery, nutrition and progression are shaped by what your body actually tells us.",
    metric: "MEASUREMENT",
  },
  {
    number: "02",
    icon: Target,
    image: personalization,
    title: "Built around you",
    description:
      "Your body, schedule, experience and objectives define the system. Nothing is pulled from a generic template.",
    metric: "ADAPTATION",
  },
  {
    number: "03",
    icon: ShieldCheck,
    image: results,
    title: "Progress that compounds",
    description:
      "We focus on sustainable performance rather than temporary intensity. Small, measurable improvements become long-term change.",
    metric: "CONSISTENCY",
  },
]

const stats = [
  {
    value: 25,
    suffix: "K+",
    label: "ACTIVE USERS",
    detail: "TRACKED",
  },
  {
    value: 98,
    suffix: "%",
    label: "CLIENT RETENTION",
    detail: "TRUSTED",
  },
  {
    value: 4.9,
    label: "AVERAGE RATING",
    detail: "VERIFIED",
    star: true,
    decimals: 1,
  },
  {
    value: 120,
    suffix: "+",
    label: "PROGRAMS",
    detail: "ENGINEERED",
  },
]

function CornerMarks() {
  return (
    <>
      <span className="absolute left-0 top-0 h-5 w-px bg-zinc-700" />
      <span className="absolute left-0 top-0 h-px w-5 bg-zinc-700" />

      <span className="absolute right-0 top-0 h-5 w-px bg-zinc-700" />
      <span className="absolute right-0 top-0 h-px w-5 bg-zinc-700" />

      <span className="absolute bottom-0 left-0 h-5 w-px bg-zinc-700" />
      <span className="absolute bottom-0 left-0 h-px w-5 bg-zinc-700" />

      <span className="absolute bottom-0 right-0 h-5 w-px bg-zinc-700" />
      <span className="absolute bottom-0 right-0 h-px w-5 bg-zinc-700" />
    </>
  )
}

function PrincipleCard({
  item,
}: {
  item: (typeof principles)[number]
}) {
  const Icon = item.icon

  return (
    <motion.div
      variants={revealLeft}
      className="group relative overflow-hidden border-t border-zinc-800 py-7"
    >
      {/* Hover scan */}
      <motion.div
        className="absolute left-0 top-0 h-px w-full origin-left bg-[#DC2626]"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease }}
      />

      <div className="flex gap-5">
        <div className="flex w-10 shrink-0 flex-col justify-between">
          <span className="font-mono text-[10px] tracking-[0.2em] text-zinc-600">
            {item.number}
          </span>

          <Icon
            size={16}
            strokeWidth={1.5}
            className="text-zinc-600 transition-colors duration-500 group-hover:text-[#DC2626]"
          />
        </div>

        <div className="flex-1">
          <div className="mb-2 flex items-center gap-3">
            <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#DC2626]">
              {item.metric}
            </span>

            <span className="h-px w-5 bg-zinc-800" />
          </div>

          <h3 className="mb-2 text-xl font-medium tracking-tight text-white">
            {item.title}
          </h3>

          <p className="max-w-xl text-sm leading-6 text-zinc-500">
            {item.description}
          </p>
        </div>

        <div className="hidden h-20 w-20 shrink-0 overflow-hidden border border-zinc-800 bg-zinc-950 md:block">
          <div className="relative h-full w-full">
            <Image
              src={item.image}
              alt=""
              fill
              className="object-contain p-5 opacity-40 grayscale transition-all duration-700 group-hover:scale-110 group-hover:opacity-80"
            />

            <div className="absolute left-2 top-2 h-2 w-2 border-l border-t border-zinc-700" />
            <div className="absolute bottom-2 right-2 h-2 w-2 border-b border-r border-zinc-700" />
          </div>
        </div>

        <ArrowUpRight
          size={17}
          strokeWidth={1.5}
          className="mt-1 text-zinc-700 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
        />
      </div>
    </motion.div>
  )
}

function TelemetryStat({
  stat,
  index,
}: {
  stat: (typeof stats)[number]
  index: number
}) {
  return (
    <motion.div
      variants={revealUp}
      className="group relative flex min-h-[150px] flex-1 flex-col justify-between border-zinc-800 p-6 md:border-r last:md:border-r-0"
    >
      {/* Top metadata */}
      <div className="flex items-center justify-between">
        <span className="font-mono text-[9px] tracking-[0.2em] text-zinc-600">
          0{index + 1}
        </span>

        <span className="flex items-center gap-2 font-mono text-[9px] tracking-[0.18em] text-zinc-600">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: [0, 1, 0.5, 1] }}
            viewport={{ once: true }}
            transition={{
              delay: 0.35 + index * 0.12,
              duration: 0.7,
            }}
            className="h-1.5 w-1.5 rounded-full bg-[#DC2626]"
          />

          {stat.detail}
        </span>
      </div>

      {/* Counter */}
      <div>
        <div className="flex items-center gap-2">
          <AnimatedCounter
            from={0}
            to={stat.value}
            suffix={stat.suffix}
            decimals={stat.decimals}
            duration={1.7}
            delay={0.2 + index * 0.16}
            className="text-4xl font-medium tracking-[-0.04em] text-white md:text-5xl"
          />

          {stat.star && (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.5,
                rotate: -20,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                rotate: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: 0.8 + index * 0.1,
                duration: 0.6,
                ease,
              }}
            >
              <Star
                size={19}
                fill="currentColor"
                className="text-[#DC2626]"
              />
            </motion.div>
          )}
        </div>

        <p className="mt-2 font-mono text-[9px] tracking-[0.2em] text-zinc-500">
          {stat.label}
        </p>
      </div>

      {/* Progress / scan line */}
      <motion.div
        className="absolute bottom-0 left-6 right-6 h-px origin-left bg-[#DC2626]"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          delay: 0.45 + index * 0.14,
          ease,
        }}
      />
    </motion.div>
  )
}

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
  })

  return (
    <section
      ref={sectionRef}
      className={`relative min-h-screen overflow-hidden bg-black text-white ${arimo.className}`}
    >
      {/* ====================================================== */}
      {/* BACKGROUND SYSTEM */}
      {/* ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #fff 1px, transparent 1px),
              linear-gradient(to bottom, #fff 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        <div className="absolute left-[-15%] top-[25%] h-[600px] w-[600px] rounded-full bg-red-950/20 blur-[180px]" />

        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black to-transparent" />
      </div>

      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="relative mx-auto max-w-[1280px] px-6 py-24 lg:px-8"
      >
        {/* ====================================================== */}
        {/* HEADER */}
        {/* ====================================================== */}

        <div className="mb-16">
          <motion.div
            variants={revealUp}
            className="mb-7 flex items-center justify-between border-b border-zinc-800 pb-4"
          >
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#DC2626]" />

              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-500">
                AXION / WHY AXION
              </span>
            </div>

            <div className="hidden items-center gap-6 font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-600 md:flex">
              <span>Protocol / 004</span>
              <span>System / Active</span>
            </div>
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-end">
            <motion.div variants={revealLeft}>
              <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.28em] text-[#DC2626]">
                The Axion difference
              </p>

              <h2 className="max-w-4xl text-5xl font-medium leading-[0.95] tracking-[-0.045em] md:text-7xl lg:text-[86px]">
                Built on evidence.
                <br />
                <span className="text-zinc-600">
                  Driven by progress.
                </span>
              </h2>
            </motion.div>

            <motion.div
              variants={revealRight}
              className="border-l border-zinc-800 pl-6"
            >
              <div className="mb-5 flex items-center gap-3">
                <Activity
                  size={16}
                  strokeWidth={1.5}
                  className="text-[#DC2626]"
                />

                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-500">
                  Integrated methodology
                </span>
              </div>

              <p className="text-sm leading-6 text-zinc-500">
                We combine training, nutrition, measurement and
                accountability into one system designed to make your
                progress visible.
              </p>
            </motion.div>
          </div>
        </div>

        {/* ====================================================== */}
        {/* MAIN AREA */}
        {/* ====================================================== */}

        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          {/* ================================================== */}
          {/* SUBJECT */}
          {/* ================================================== */}

          <motion.div
            variants={revealLeft}
            className="relative min-h-[520px] overflow-hidden border border-zinc-800 bg-zinc-950"
          >
            <CornerMarks />

            {/* Subject metadata */}
            <div className="absolute left-6 top-6 z-20">
              <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-zinc-600">
                Subject
              </p>

              <p className="mt-1 font-mono text-xs tracking-[0.15em] text-zinc-400">
                HUMAN / 001
              </p>
            </div>

            {/* Live status */}
            <div className="absolute right-6 top-6 z-20 flex items-center gap-2">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#DC2626]" />

              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-600">
                Analysis live
              </span>
            </div>

            {/* Greek sculpture */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 1.08,
              }}
              animate={
                isInView
                  ? {
                    opacity: 0.72,
                    scale: 1,
                  }
                  : {
                    opacity: 0,
                    scale: 1.08,
                  }
              }
              transition={{
                duration: 1.5,
                ease,
              }}
              className="absolute inset-0"
            >
              <Image
                src={greek}
                alt="Greek sculpture representing the human form"
                fill
                className="object-contain object-center grayscale"
              />
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/40" />

            {/* Moving diagnostic scan */}
            <motion.div
              initial={{ y: "-100%" }}
              animate={
                isInView
                  ? { y: "200%" }
                  : { y: "-100%" }
              }
              transition={{
                duration: 4,
                delay: 0.7,
                ease: "linear",
              }}
              className="pointer-events-none absolute left-0 right-0 z-10 h-px bg-gradient-to-r from-transparent via-[#DC2626]/70 to-transparent"
            />

            {/* Crosshair */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.7,
              }}
              animate={
                isInView
                  ? {
                    opacity: 1,
                    scale: 1,
                  }
                  : {
                    opacity: 0,
                    scale: 0.7,
                  }
              }
              transition={{
                duration: 0.8,
                delay: 1,
                ease,
              }}
              className="absolute left-1/2 top-[47%] z-20 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-white/10">
                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="h-14 w-14 rounded-full border border-white/10"
                />

                <Crosshair
                  size={18}
                  strokeWidth={1}
                  className="absolute text-[#DC2626]"
                />

                <span className="absolute -right-10 top-1/2 h-px w-10 bg-zinc-700" />
                <span className="absolute -left-10 top-1/2 h-px w-10 bg-zinc-700" />
                <span className="absolute -top-10 left-1/2 h-10 w-px bg-zinc-700" />
                <span className="absolute -bottom-10 left-1/2 h-10 w-px bg-zinc-700" />
              </div>
            </motion.div>

            {/* Bottom telemetry */}
            <div className="absolute bottom-6 left-6 right-6 z-20 flex items-end justify-between">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-600">
                  Analysis protocol
                </p>

                <p className="mt-1 text-sm text-zinc-300">
                  Precision / Adaptation / Performance
                </p>
              </div>

              <div className="text-right">
                <p className="font-mono text-[9px] tracking-[0.2em] text-zinc-600">
                  AX / 004
                </p>

                <p className="mt-1 font-mono text-[9px] tracking-[0.15em] text-[#DC2626]">
                  ONLINE
                </p>
              </div>
            </div>
          </motion.div>

          {/* ================================================== */}
          {/* PRINCIPLES */}
          {/* ================================================== */}

          <div className="flex flex-col">
            <motion.div
              variants={revealUp}
              className="mb-2 flex items-center justify-between"
            >
              <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-zinc-600">
                Performance principles
              </span>

              <span className="font-mono text-[9px] tracking-[0.18em] text-zinc-700">
                03 SYSTEMS / 01 OBJECTIVE
              </span>
            </motion.div>

            <div className="border-b border-zinc-800">
              {principles.map((item) => (
                <PrincipleCard
                  key={item.number}
                  item={item}
                />
              ))}
            </div>

            <motion.div
              variants={revealUp}
              className="mt-auto pt-10"
            >
              <div className="flex items-start justify-between gap-8">
                <div>
                  <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.22em] text-zinc-600">
                    Our objective
                  </p>

                  <p className="max-w-lg text-2xl leading-tight tracking-tight text-zinc-300">
                    Turn effort into something you can{" "}
                    <span className="text-white">
                      measure, understand
                    </span>{" "}
                    and repeat.
                  </p>
                </div>

                <ArrowUpRight
                  size={22}
                  strokeWidth={1}
                  className="shrink-0 text-[#DC2626]"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* ====================================================== */}
        {/* TELEMETRY */}
        {/* ====================================================== */}

        <motion.div
          variants={revealUp}
          className="mt-20"
        >
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-zinc-600">
                Performance telemetry
              </span>

              <span className="h-px w-8 bg-zinc-800" />

              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#DC2626]">
                Live data
              </span>
            </div>

            <span className="hidden font-mono text-[9px] tracking-[0.18em] text-zinc-700 md:block">
              AXION / 2026
            </span>
          </div>

          <motion.div
            variants={containerVariants}
            className="grid border border-zinc-800 bg-zinc-950 md:flex"
          >
            {stats.map((stat, index) => (
              <TelemetryStat
                key={stat.label}
                stat={stat}
                index={index}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* ====================================================== */}
        {/* FINAL STATEMENT */}
        {/* ====================================================== */}

        <motion.div
          variants={revealUp}
          className="relative mt-20 overflow-hidden border-y border-zinc-800 py-8"
        >
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div className="flex items-center gap-5">
              <span className="font-mono text-[10px] tracking-[0.2em] text-[#DC2626]">
                AX / 04
              </span>

              <span className="h-px w-10 bg-zinc-800" />

              <p className="text-sm text-zinc-500">
                The body is the project.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-600">
                Continue the system
              </span>

              <ArrowUpRight
                size={17}
                strokeWidth={1.5}
                className="text-[#DC2626]"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}