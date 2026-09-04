"use client"

import { Arimo } from "next/font/google"
import {
    motion,
    type Variants,
    useInView,
} from "framer-motion"
import {
    Activity,
    ArrowUpRight,
    BarChart3,
    Flame,
    Target,
    TrendingUp,
    Zap,
} from "lucide-react"
import { useRef } from "react"

import NavBar from "@/components/Nav"
import JoinUs from "@/components/JoinUs"
import { Footer } from "@/components/Footer"

const arimo = Arimo({
    variable: "--font-arimo",
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
})

/* ========================================================================
   MOTION
======================================================================== */

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.05,
        },
    },
}

const reveal: Variants = {
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

const cardReveal: Variants = {
    hidden: {
        opacity: 0,
        y: 35,
        scale: 0.98,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
        },
    },
}

/* ========================================================================
   DATA
======================================================================== */

const metrics = [
    {
        index: "01",
        label: "WORKOUTS",
        value: "120",
        unit: "SESSIONS",
        description: "Completed training sessions this year.",
        icon: Activity,
    },
    {
        index: "02",
        label: "ENERGY",
        value: "85K",
        unit: "KCAL",
        description: "Estimated energy expenditure.",
        icon: Flame,
    },
    {
        index: "03",
        label: "PERSONAL BESTS",
        value: "15",
        unit: "RECORDS",
        description: "New performance records established.",
        icon: Target,
    },
]

const weeklyData = [42, 64, 51, 78, 68, 91, 84]

/* ========================================================================
   SMALL COMPONENTS
======================================================================== */

function CornerMarks() {
    return (
        <>
            <div className="pointer-events-none absolute left-4 top-4 h-8 w-8 border-l border-t border-white/[0.1]" />
            <div className="pointer-events-none absolute right-4 top-4 h-8 w-8 border-r border-t border-white/[0.1]" />
            <div className="pointer-events-none absolute bottom-4 left-4 h-8 w-8 border-b border-l border-white/[0.1]" />
            <div className="pointer-events-none absolute bottom-4 right-4 h-8 w-8 border-b border-r border-white/[0.1]" />
        </>
    )
}

function TelemetryLabel({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/25">
            {children}
        </span>
    )
}

/* ========================================================================
   PAGE
======================================================================== */

export default function DashboardPage() {
    const overviewRef = useRef<HTMLElement | null>(null)
    const metricsRef = useRef<HTMLElement | null>(null)
    const analyticsRef = useRef<HTMLElement | null>(null)

    const overviewInView = useInView(overviewRef, {
        once: true,
        amount: 0.2,
    })

    const metricsInView = useInView(metricsRef, {
        once: true,
        amount: 0.15,
    })

    const analyticsInView = useInView(analyticsRef, {
        once: true,
        amount: 0.15,
    })

    return (
        <main
            className={`${arimo.className} relative min-h-screen overflow-hidden bg-[#050505] text-white`}
        >
            {/* ==================================================================
          GLOBAL ATMOSPHERE
      ================================================================== */}

            <div className="pointer-events-none fixed inset-0 z-0">
                <div
                    className="absolute inset-0 opacity-[0.028]"
                    style={{
                        backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,.6) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,.6) 1px, transparent 1px)
            `,
                        backgroundSize: "80px 80px",
                    }}
                />

                <div className="absolute left-1/2 top-[20%] h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-red-600/[0.025] blur-[180px]" />

                <div className="absolute left-0 top-[18%] h-px w-full bg-white/[0.035]" />
                <div className="absolute left-0 top-[51%] h-px w-full bg-white/[0.025]" />
                <div className="absolute left-0 top-[82%] h-px w-full bg-white/[0.025]" />

                <div className="absolute left-1/2 top-0 hidden h-full w-px bg-white/[0.018] lg:block" />
            </div>

            <NavBar />

            <div className="relative z-10">

                {/* ==================================================================
            HERO / MODULE INTRO
        ================================================================== */}

                <section
                    ref={overviewRef}
                    className="relative mx-auto max-w-[1500px] px-5 pb-20 pt-36 sm:px-8 lg:px-12 lg:pb-28 lg:pt-32"
                >
                    <CornerMarks />

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={overviewInView ? "visible" : "hidden"}
                    >
                        <div className="grid gap-12 lg:grid-cols-[0.7fr_2fr_0.7fr]">

                            {/* LEFT SYSTEM ID */}
                            <motion.div
                                variants={reveal}
                                className="flex items-start gap-3"
                            >
                                <span className="mt-1.5 h-1.5 w-1.5 bg-red-600 shadow-[0_0_12px_rgba(220,38,38,.8)]" />

                                <div>
                                    <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-red-500">
                                        AXION / PERFORMANCE
                                    </p>

                                    <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
                                        Intelligence Division
                                    </p>

                                    <p className="mt-8 font-mono text-[8px] uppercase tracking-[0.2em] text-white/15">
                                        MODULE / 01
                                    </p>
                                </div>
                            </motion.div>

                            {/* CENTER HERO */}
                            <motion.div variants={reveal}>
                                <p className="mb-5 text-[9px] uppercase tracking-[0.3em] text-white/25">
                                    PROGRESS INTELLIGENCE SYSTEM
                                </p>

                                <h1 className="text-[clamp(3.5rem,8vw,8rem)] font-semibold leading-[0.83] tracking-[-0.065em]">
                                    Your performance.
                                    <br />
                                    <span className="text-white/25">
                                        Measured in motion.
                                    </span>
                                </h1>

                                <p className="mt-8 max-w-xl text-sm leading-7 text-white/35">
                                    Every session becomes a signal. Every milestone
                                    becomes data. Track the work, understand the
                                    trend and see exactly how your performance is
                                    moving.
                                </p>
                            </motion.div>

                            {/* RIGHT STATUS */}
                            <motion.div
                                variants={reveal}
                                className="flex flex-col justify-end lg:items-end"
                            >
                                <TelemetryLabel>
                                    SYSTEM STATUS
                                </TelemetryLabel>

                                <div className="mt-3 flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 animate-pulse bg-red-500 shadow-[0_0_12px_rgba(220,38,38,.8)]" />

                                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/60">
                                        LIVE / TRACKING
                                    </span>
                                </div>

                                <p className="mt-5 font-mono text-[8px] uppercase tracking-[0.18em] text-white/15">
                                    DATA STREAM / ACTIVE
                                </p>
                            </motion.div>
                        </div>

                        {/* SYSTEM BAR */}
                        <motion.div
                            variants={reveal}
                            className="mt-16 border-t border-white/[0.08] pt-5"
                        >
                            <div className="grid gap-5 sm:grid-cols-3">
                                <div>
                                    <TelemetryLabel>OBJECTIVE</TelemetryLabel>
                                    <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-white/45">
                                        Understand progression
                                    </p>
                                </div>

                                <div>
                                    <TelemetryLabel>INPUT</TelemetryLabel>
                                    <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-white/45">
                                        Training data
                                    </p>
                                </div>

                                <div className="sm:text-right">
                                    <TelemetryLabel>OUTPUT</TelemetryLabel>
                                    <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-white/45">
                                        Measurable adaptation
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </section>

                {/* ==================================================================
            METRICS
        ================================================================== */}

                <section
                    ref={metricsRef}
                    className="relative mx-auto max-w-[1500px] px-5 pb-32 sm:px-8 lg:px-12 lg:pb-44"
                >
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={metricsInView ? "visible" : "hidden"}
                    >
                        {/* SECTION HEADER */}
                        <motion.div
                            variants={reveal}
                            className="mb-10 flex items-end justify-between border-b border-white/[0.07] pb-5"
                        >
                            <div>
                                <TelemetryLabel>
                                    PERFORMANCE TELEMETRY
                                </TelemetryLabel>

                                <h2 className="mt-3 text-3xl font-medium tracking-[-0.035em] sm:text-4xl">
                                    Progress at a glance.
                                </h2>
                            </div>

                            <div className="hidden items-center gap-2 sm:flex">
                                <span className="h-1.5 w-1.5 bg-red-600" />
                                <TelemetryLabel>
                                    03 PRIMARY SIGNALS
                                </TelemetryLabel>
                            </div>
                        </motion.div>

                        {/* METRIC GRID */}
                        <div className="grid gap-px border border-white/[0.07] bg-white/[0.07] lg:grid-cols-3">
                            {metrics.map((metric) => {
                                const Icon = metric.icon

                                return (
                                    <motion.div
                                        key={metric.index}
                                        variants={cardReveal}
                                        className="group relative min-h-[330px] overflow-hidden bg-[#080808] p-7 transition-colors duration-500 hover:bg-[#0b0b0b] sm:p-9"
                                    >
                                        {/* Background number */}
                                        <span className="pointer-events-none absolute -right-2 top-0 text-[170px] font-semibold leading-none tracking-[-0.1em] text-white/[0.025] transition-colors duration-500 group-hover:text-red-600/[0.045]">
                                            {metric.index}
                                        </span>

                                        {/* Scan */}
                                        <motion.div
                                            initial={{ x: "-110%" }}
                                            whileHover={{ x: "220%" }}
                                            transition={{
                                                duration: 0.9,
                                                ease: "easeInOut",
                                            }}
                                            className="pointer-events-none absolute left-0 top-0 h-px w-1/3 bg-red-600"
                                        />

                                        <div className="relative flex h-full flex-col justify-between">

                                            <div className="flex items-start justify-between">
                                                <div>
                                                    <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-red-500">
                                                        {metric.label}
                                                    </p>

                                                    <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.18em] text-white/20">
                                                        SIGNAL / {metric.index}
                                                    </p>
                                                </div>

                                                <Icon
                                                    className="size-4 text-white/20 transition-colors duration-300 group-hover:text-red-500"
                                                    strokeWidth={1.5}
                                                />
                                            </div>

                                            <div>
                                                <div className="flex items-end gap-3">
                                                    <span className="text-[clamp(4rem,7vw,6.5rem)] font-semibold leading-none tracking-[-0.07em]">
                                                        {metric.value}
                                                    </span>

                                                    <span className="mb-2 font-mono text-[8px] uppercase tracking-[0.18em] text-white/25">
                                                        {metric.unit}
                                                    </span>
                                                </div>

                                                <div className="mt-7 border-t border-white/[0.07] pt-4">
                                                    <p className="max-w-xs text-[10px] leading-5 text-white/30">
                                                        {metric.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </motion.div>
                </section>

                {/* ==================================================================
            ANALYTICS
        ================================================================== */}

                <section
                    ref={analyticsRef}
                    className="relative overflow-hidden border-y border-white/[0.05] bg-[#070707]"
                >
                    <div className="mx-auto max-w-[1500px] px-5 py-28 sm:px-8 lg:px-12 lg:py-40">

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate={analyticsInView ? "visible" : "hidden"}
                        >
                            {/* HEADER */}
                            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.7fr_0.7fr]">

                                <motion.div
                                    variants={reveal}
                                    className="flex items-start gap-3"
                                >
                                    <span className="mt-1.5 h-1.5 w-1.5 bg-red-600" />

                                    <div>
                                        <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-red-500">
                                            AXION / ANALYTICS
                                        </p>

                                        <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.18em] text-white/20">
                                            Performance Model
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div variants={reveal}>
                                    <p className="mb-5 text-[9px] uppercase tracking-[0.3em] text-white/25">
                                        TREND ANALYSIS / 30 DAYS
                                    </p>

                                    <h2 className="text-[clamp(3rem,6vw,6rem)] font-semibold leading-[0.86] tracking-[-0.055em]">
                                        See the work.
                                        <br />
                                        <span className="text-white/25">
                                            See the adaptation.
                                        </span>
                                    </h2>
                                </motion.div>

                                <motion.div
                                    variants={reveal}
                                    className="flex flex-col justify-end lg:items-end"
                                >
                                    <TelemetryLabel>
                                        CURRENT TREND
                                    </TelemetryLabel>

                                    <div className="mt-2 flex items-center gap-2">
                                        <TrendingUp className="size-4 text-red-500" />

                                        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/60">
                                            +24.8%
                                        </span>
                                    </div>
                                </motion.div>
                            </div>

                            {/* ANALYTICS PANEL */}
                            <motion.div
                                variants={cardReveal}
                                className="relative mt-16 overflow-hidden border border-white/[0.08] bg-[#050505]"
                            >
                                <CornerMarks />

                                {/* PANEL HEADER */}
                                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.07] px-5 py-4 sm:px-7">
                                    <div className="flex items-center gap-3">
                                        <Activity className="size-3 text-red-500" />

                                        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/45">
                                            WORKOUT PERFORMANCE
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-5">
                                        <TelemetryLabel>
                                            VOLUME
                                        </TelemetryLabel>

                                        <span className="font-mono text-[9px] text-white/60">
                                            +24.8%
                                        </span>

                                        <TelemetryLabel>
                                            PERIOD / 30D
                                        </TelemetryLabel>
                                    </div>
                                </div>

                                {/* CHART */}
                                <div className="relative h-[390px] p-5 sm:h-[470px] sm:p-8">

                                    {/* horizontal chart lines */}
                                    <div className="absolute inset-x-8 top-16 bottom-16 flex flex-col justify-between">
                                        {[0, 1, 2, 3, 4].map((line) => (
                                            <div
                                                key={line}
                                                className="h-px w-full bg-white/[0.045]"
                                            />
                                        ))}
                                    </div>

                                    {/* vertical chart lines */}
                                    <div className="absolute inset-x-8 top-16 bottom-16 flex justify-between">
                                        {[0, 1, 2, 3, 4, 5, 6].map((line) => (
                                            <div
                                                key={line}
                                                className="h-full w-px bg-white/[0.025]"
                                            />
                                        ))}
                                    </div>

                                    {/* SVG */}
                                    <svg
                                        className="absolute inset-x-8 top-16 bottom-16 h-[calc(100%-8rem)] w-[calc(100%-4rem)] overflow-visible"
                                        viewBox="0 0 700 300"
                                        preserveAspectRatio="none"
                                    >
                                        <defs>
                                            <linearGradient
                                                id="axionArea"
                                                x1="0"
                                                y1="0"
                                                x2="0"
                                                y2="1"
                                            >
                                                <stop
                                                    offset="0%"
                                                    stopColor="#DC2626"
                                                    stopOpacity="0.18"
                                                />
                                                <stop
                                                    offset="100%"
                                                    stopColor="#DC2626"
                                                    stopOpacity="0"
                                                />
                                            </linearGradient>
                                        </defs>

                                        {/* area */}
                                        <motion.path
                                            d="
                        M 0 245
                        C 70 235, 80 220, 120 210
                        C 170 198, 175 180, 230 175
                        C 280 168, 285 145, 340 155
                        C 390 165, 405 130, 455 125
                        C 510 118, 525 92, 565 98
                        C 610 104, 650 68, 700 42
                        L 700 300
                        L 0 300
                        Z
                      "
                                            fill="url(#axionArea)"
                                            initial={{ opacity: 0 }}
                                            animate={
                                                analyticsInView
                                                    ? { opacity: 1 }
                                                    : { opacity: 0 }
                                            }
                                            transition={{ duration: 1.2, delay: 0.4 }}
                                        />

                                        {/* line */}
                                        <motion.path
                                            d="
                        M 0 245
                        C 70 235, 80 220, 120 210
                        C 170 198, 175 180, 230 175
                        C 280 168, 285 145, 340 155
                        C 390 165, 405 130, 455 125
                        C 510 118, 525 92, 565 98
                        C 610 104, 650 68, 700 42
                      "
                                            fill="none"
                                            stroke="#DC2626"
                                            strokeWidth="2"
                                            vectorEffect="non-scaling-stroke"
                                            strokeLinecap="round"
                                            initial={{
                                                pathLength: 0,
                                                opacity: 0,
                                            }}
                                            animate={
                                                analyticsInView
                                                    ? {
                                                        pathLength: 1,
                                                        opacity: 1,
                                                    }
                                                    : {
                                                        pathLength: 0,
                                                        opacity: 0,
                                                    }
                                            }
                                            transition={{
                                                pathLength: {
                                                    duration: 1.8,
                                                    ease: [0.22, 1, 0.36, 1],
                                                },
                                                opacity: {
                                                    duration: 0.4,
                                                },
                                            }}
                                        />

                                        {/* data points */}
                                        {[0, 1, 2, 3, 4, 5, 6].map((point, i) => {
                                            const x = [0, 120, 230, 340, 455, 565, 700][i]
                                            const y = [245, 210, 175, 155, 125, 98, 42][i]

                                            return (
                                                <motion.circle
                                                    key={point}
                                                    cx={x}
                                                    cy={y}
                                                    r="4"
                                                    fill="#050505"
                                                    stroke="#DC2626"
                                                    strokeWidth="2"
                                                    initial={{ scale: 0, opacity: 0 }}
                                                    animate={
                                                        analyticsInView
                                                            ? { scale: 1, opacity: 1 }
                                                            : { scale: 0, opacity: 0 }
                                                    }
                                                    transition={{
                                                        delay: 0.7 + i * 0.08,
                                                        duration: 0.3,
                                                    }}
                                                />
                                            )
                                        })}
                                    </svg>

                                    {/* y-axis */}
                                    <div className="absolute left-2 top-16 bottom-16 hidden flex-col justify-between sm:flex">
                                        {["100", "80", "60", "40", "20"].map((value) => (
                                            <span
                                                key={value}
                                                className="font-mono text-[7px] text-white/15"
                                            >
                                                {value}
                                            </span>
                                        ))}
                                    </div>

                                    {/* x-axis */}
                                    <div className="absolute bottom-5 left-8 right-8 flex justify-between">
                                        {["W1", "W2", "W3", "W4", "W5", "W6", "NOW"].map(
                                            (label) => (
                                                <span
                                                    key={label}
                                                    className="font-mono text-[7px] uppercase tracking-[0.12em] text-white/15"
                                                >
                                                    {label}
                                                </span>
                                            ),
                                        )}
                                    </div>
                                </div>

                                {/* PANEL FOOTER */}
                                <div className="grid border-t border-white/[0.07] sm:grid-cols-3">
                                    <div className="border-b border-white/[0.07] px-6 py-5 sm:border-b-0 sm:border-r">
                                        <TelemetryLabel>BASELINE</TelemetryLabel>
                                        <p className="mt-2 text-xl font-medium tracking-tight">
                                            62.4
                                        </p>
                                    </div>

                                    <div className="border-b border-white/[0.07] px-6 py-5 sm:border-b-0 sm:border-r">
                                        <TelemetryLabel>PEAK</TelemetryLabel>
                                        <p className="mt-2 text-xl font-medium tracking-tight">
                                            91.8
                                        </p>
                                    </div>

                                    <div className="px-6 py-5">
                                        <TelemetryLabel>ADAPTATION</TelemetryLabel>
                                        <div className="mt-2 flex items-center gap-2">
                                            <Zap className="size-3 text-red-500" />
                                            <p className="text-xl font-medium tracking-tight">
                                                +24.8%
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* SECONDARY DATA ROW */}
                            <div className="mt-4 grid gap-4 lg:grid-cols-2">

                                {/* Activity */}
                                <motion.div
                                    variants={cardReveal}
                                    className="group relative overflow-hidden border border-white/[0.08] bg-[#090909] p-6 sm:p-8"
                                >
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <TelemetryLabel>
                                                WEEKLY ACTIVITY
                                            </TelemetryLabel>

                                            <p className="mt-2 text-xs uppercase tracking-[0.08em] text-white/55">
                                                Calories / day
                                            </p>
                                        </div>

                                        <BarChart3 className="size-4 text-white/20" />
                                    </div>

                                    <div className="mt-10 flex h-32 items-end gap-2">
                                        {weeklyData.map((value, index) => (
                                            <div
                                                key={index}
                                                className="group/bar relative flex-1"
                                            >
                                                <motion.div
                                                    initial={{ height: 0 }}
                                                    animate={
                                                        analyticsInView
                                                            ? { height: `${value}%` }
                                                            : { height: 0 }
                                                    }
                                                    transition={{
                                                        duration: 0.7,
                                                        delay: 0.3 + index * 0.07,
                                                        ease: [0.22, 1, 0.36, 1],
                                                    }}
                                                    className="absolute bottom-0 w-full bg-white/[0.1] transition-colors duration-300 group-hover/bar:bg-red-600"
                                                />

                                                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-mono text-[7px] text-white/15">
                                                    {["M", "T", "W", "T", "F", "S", "S"][index]}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Insight */}
                                <motion.div
                                    variants={cardReveal}
                                    className="relative overflow-hidden border border-red-600/20 bg-red-600 p-6 text-black sm:p-8"
                                >
                                    <span className="pointer-events-none absolute -right-5 -top-10 text-[180px] font-semibold leading-none tracking-[-0.1em] text-black/[0.07]">
                                        01
                                    </span>

                                    <div className="relative flex h-full flex-col justify-between">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <span className="h-1.5 w-1.5 bg-black" />

                                                <span className="font-mono text-[8px] uppercase tracking-[0.2em]">
                                                    SYSTEM INSIGHT
                                                </span>
                                            </div>

                                            <ArrowUpRight className="size-4" />
                                        </div>

                                        <div className="mt-12">
                                            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-black/55">
                                                PERFORMANCE SIGNAL
                                            </p>

                                            <h3 className="mt-3 max-w-md text-3xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-4xl">
                                                Your consistency is becoming measurable.
                                            </h3>

                                            <p className="mt-5 max-w-md text-xs leading-6 text-black/60">
                                                Your recent training volume is trending upward.
                                                Keep the signal moving.
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ==================================================================
            FINAL CTA
        ================================================================== */}

                <JoinUs />

                <Footer />
            </div>
        </main>
    )
}