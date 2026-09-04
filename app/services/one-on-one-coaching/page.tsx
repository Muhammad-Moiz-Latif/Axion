"use client";

import { Arimo } from "next/font/google";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import {
    Activity,
    ArrowUpRight,
    Brain,
    Crosshair,
    MessageSquare,
    Radio,
    Shield,
    Target,
    Timer,
    UserRound,
    Zap,
} from "lucide-react";
import { useRef } from "react";

import NavBar from "@/components/Nav";
import JoinUs from "@/components/JoinUs";
import { Footer } from "@/components/Footer";

const arimo = Arimo({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const reveal: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

const stagger = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const signals = [
    {
        index: "01",
        icon: Target,
        label: "OBJECTIVE",
        title: "Define the target",
        description:
            "Every coaching relationship begins with a precise understanding of where you are and where you intend to go.",
    },
    {
        index: "02",
        icon: Activity,
        label: "ASSESSMENT",
        title: "Read the signal",
        description:
            "Training history, performance patterns, recovery and real-world constraints become part of the decision.",
    },
    {
        index: "03",
        icon: Brain,
        label: "ADAPTATION",
        title: "Adjust the system",
        description:
            "Your program evolves with you. No rigid templates. No guessing. Just decisions informed by the work.",
    },
];

const principles = [
    {
        number: "01",
        title: "Direct access",
        copy: "A real coach inside your performance loop.",
        icon: MessageSquare,
    },
    {
        number: "02",
        title: "Continuous adaptation",
        copy: "Your plan responds to what your body is telling us.",
        icon: Radio,
    },
    {
        number: "03",
        title: "Deliberate execution",
        copy: "Every session has a reason. Every adjustment has a purpose.",
        icon: Crosshair,
    },
];

export default function CoachingPage() {
    const protocolRef = useRef<HTMLDivElement>(null);
    const protocolInView = useInView(protocolRef, {
        once: true,
        amount: 0.2,
    });

    const commandRef = useRef<HTMLDivElement>(null);
    const commandInView = useInView(commandRef, {
        once: true,
        amount: 0.2,
    });

    return (
        <main
            className={`${arimo.className} relative min-h-screen overflow-hidden bg-black text-white`}
        >
            {/* =========================================================
          GLOBAL ATMOSPHERE
      ========================================================= */}

            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                {/* technical grid */}
                <div
                    className="absolute inset-0 opacity-[0.035]"
                    style={{
                        backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.8) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.8) 1px, transparent 1px)
            `,
                        backgroundSize: "64px 64px",
                    }}
                />

                {/* center axis */}
                <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/[0.045]" />

                {/* red atmospheric field */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="absolute left-1/2 top-[15%] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-red-600/[0.045] blur-[150px]"
                />

                {/* scan line */}
                <motion.div
                    initial={{ y: "-10%" }}
                    animate={{ y: "110%" }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent"
                />
            </div>

            <NavBar />

            {/* =========================================================
          HERO
      ========================================================= */}

            <section className="relative min-h-[92vh] border-b border-white/[0.08] mt-20">
                {/* architectural corners */}
                <div className="absolute left-6 top-8 h-14 w-14 border-l border-t border-white/20 md:left-10" />
                <div className="absolute right-6 top-8 h-14 w-14 border-r border-t border-white/20 md:right-10" />

                <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.08]" />

                <div className="mx-auto flex min-h-[92vh] max-w-[1500px] flex-col px-6 pb-14 pt-28 md:px-10 lg:px-16">
                    {/* top telemetry */}
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-2 gap-8 border-b border-white/[0.08] pb-5 md:grid-cols-4"
                    >
                        <motion.div variants={reveal}>
                            <p className="text-[9px] uppercase tracking-[0.28em] text-zinc-600/80">
                                AXION / COACHING
                            </p>
                            <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-zinc-300/75">
                                Human Performance Division
                            </p>
                        </motion.div>

                        <motion.div variants={reveal}>
                            <p className="text-[9px] uppercase tracking-[0.28em] text-zinc-600/80">
                                MODULE
                            </p>
                            <p className="mt-2 font-mono text-[10px] text-zinc-300/75">
                                03 / 04
                            </p>
                        </motion.div>

                        <motion.div variants={reveal}>
                            <p className="text-[9px] uppercase tracking-[0.28em] text-zinc-600/80">
                                PROTOCOL
                            </p>
                            <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-zinc-300/75">
                                Individual
                            </p>
                        </motion.div>

                        <motion.div
                            variants={reveal}
                            className="flex items-center gap-2 md:justify-end"
                        >
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
                            <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-red-400">
                                Live coaching system
                            </span>
                        </motion.div>
                    </motion.div>

                    {/* hero body */}
                    <div className="relative flex flex-1 items-center py-20">
                        {/* giant index */}
                        <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 font-mono text-[18rem] font-bold leading-none tracking-[-0.1em] text-white/[0.025] lg:text-[28rem]">
                            03
                        </div>

                        <div className="relative z-10 grid w-full gap-14 lg:grid-cols-[1fr_320px] lg:items-end">
                            <div>
                                <motion.div
                                    initial={{ width: 0, opacity: 0 }}
                                    animate={{ width: 90, opacity: 1 }}
                                    transition={{ duration: 0.9, delay: 0.2 }}
                                    className="mb-7 h-px bg-red-500"
                                />

                                <motion.p
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7 }}
                                    className="mb-5 text-[10px] uppercase tracking-[0.38em] text-red-400"
                                >
                                    PRIVATE PERFORMANCE PROTOCOL
                                </motion.p>

                                <motion.h1
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 1,
                                        delay: 0.1,
                                        ease: [0.16, 1, 0.3, 1],
                                    }}
                                    className="max-w-5xl text-[clamp(3.5rem,8vw,8.5rem)] font-semibold leading-[0.88] tracking-[-0.065em]"
                                >
                                    Training
                                    <br />
                                    <span className="text-zinc-600/80">gets personal.</span>
                                </motion.h1>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.35 }}
                                    className="mt-10 flex max-w-2xl items-start gap-5"
                                >
                                    <div className="mt-1 h-10 w-px bg-red-500/70" />

                                    <p className="text-sm leading-7 text-zinc-400/75 md:text-base">
                                        One coach. One athlete. One evolving system.
                                        <br />
                                        Your training is no longer something you follow.
                                        <span className="text-zinc-200/95">
                                            {" "}
                                            It becomes something we build.
                                        </span>
                                    </p>
                                </motion.div>
                            </div>

                            {/* hero command card */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 0.9,
                                    delay: 0.5,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className="relative border border-white/[0.1] bg-white/[0.015] p-5 backdrop-blur-sm"
                            >
                                <div className="absolute left-0 top-0 h-8 w-8 border-l border-t border-red-500/70" />
                                <div className="absolute bottom-0 right-0 h-8 w-8 border-b border-r border-white/20" />

                                <div className="mb-8 flex items-center justify-between border-b border-white/[0.08] pb-4">
                                    <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-zinc-600/80">
                                        COACH / ATHLETE
                                    </span>

                                    <span className="flex items-center gap-2 font-mono text-[9px] text-red-400">
                                        <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                                        CONNECTED
                                    </span>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <p className="text-[9px] uppercase tracking-[0.25em] text-zinc-600/80">
                                            SESSION STATE
                                        </p>
                                        <p className="mt-2 text-sm text-zinc-200/95">
                                            Adaptive / Active
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-[9px] uppercase tracking-[0.25em] text-zinc-600/80">
                                            NEXT DECISION
                                        </p>
                                        <p className="mt-2 text-sm text-zinc-200/95">
                                            Performance review
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-[9px] uppercase tracking-[0.25em] text-zinc-600/80">
                                            RESPONSE TIME
                                        </p>
                                        <p className="mt-2 font-mono text-sm text-zinc-200/95">
                                            &lt; 24H
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-8 border-t border-white/[0.08] pt-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[9px] uppercase tracking-[0.25em] text-zinc-600/80">
                                            SYSTEM STATUS
                                        </span>
                                        <span className="font-mono text-[10px] text-zinc-300/75">
                                            03 / ONLINE
                                        </span>
                                    </div>

                                    <div className="mt-3 h-px overflow-hidden bg-white/[0.08]">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: "78%" }}
                                            transition={{ duration: 1.5, delay: 1 }}
                                            className="h-full bg-red-500"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* bottom metadata */}
                    <div className="grid border-t border-white/[0.08] pt-5 md:grid-cols-3">
                        <div>
                            <p className="text-[9px] uppercase tracking-[0.25em] text-zinc-600/80">
                                INPUT
                            </p>
                            <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-zinc-400/75">
                                Your body / your life / your objective
                            </p>
                        </div>

                        <div className="mt-5 md:mt-0">
                            <p className="text-[9px] uppercase tracking-[0.25em] text-zinc-600/80">
                                ENGINE
                            </p>
                            <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-zinc-400/75">
                                Human judgement + performance data
                            </p>
                        </div>

                        <div className="mt-5 md:mt-0 md:text-right">
                            <p className="text-[9px] uppercase tracking-[0.25em] text-zinc-600/80">
                                OUTPUT
                            </p>
                            <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-zinc-400/75">
                                Adaptation / execution / progress
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
          THE DIFFERENCE
      ========================================================= */}

            <section className="relative border-b border-white/[0.08]">
                <div className="mx-auto max-w-[1500px] px-6 py-28 md:px-10 lg:px-16">
                    <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
                        <div>
                            <div className="flex items-center gap-3">
                                <span className="h-px w-8 bg-red-500" />
                                <span className="text-[9px] uppercase tracking-[0.3em] text-zinc-500">
                                    WHY COACHING
                                </span>
                            </div>

                            <h2 className="mt-8 max-w-md text-4xl font-semibold leading-[0.95] tracking-[-0.04em] md:text-6xl">
                                A program can guide you.
                                <br />
                                <span className="text-zinc-600/80">A coach can read you.</span>
                            </h2>
                        </div>

                        <div className="lg:pt-14">
                            <p className="max-w-2xl text-lg leading-8 text-zinc-400/75">
                                There is a limit to what a static program can understand.
                                Fatigue changes. Schedule changes. Performance changes.
                                Motivation changes.
                            </p>

                            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300/75">
                                Coaching exists inside that uncertainty. We observe the
                                signal, interpret the context and make the next decision.
                            </p>

                            <div className="mt-10 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.25em] text-zinc-600/80">
                                <Zap className="h-3 w-3 text-red-500" />
                                Human intelligence layer activated
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
          PROTOCOL
      ========================================================= */}

            <section
                ref={protocolRef}
                className="relative border-b border-white/[0.08]"
            >
                <div className="mx-auto max-w-[1500px] px-6 py-28 md:px-10 lg:px-16">
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        animate={protocolInView ? "visible" : "hidden"}
                    >
                        <motion.div
                            variants={reveal}
                            className="mb-14 flex items-end justify-between border-b border-white/[0.08] pb-6"
                        >
                            <div>
                                <p className="text-[9px] uppercase tracking-[0.3em] text-red-400">
                                    AXION / COACHING PROTOCOL
                                </p>

                                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
                                    The coaching loop.
                                </h2>
                            </div>

                            <span className="hidden font-mono text-[9px] uppercase tracking-[0.25em] text-zinc-600/80 md:block">
                                03 STAGES / 01 OBJECTIVE
                            </span>
                        </motion.div>

                        <div className="grid border-l border-white/[0.08] md:grid-cols-3">
                            {signals.map((signal, index) => {
                                const Icon = signal.icon;

                                return (
                                    <motion.article
                                        key={signal.index}
                                        variants={reveal}
                                        className={`group relative min-h-[330px] border-r border-white/[0.08] ${index !== 0 ? "border-t md:border-t-0" : ""
                                            }`}
                                    >
                                        {/* hover scan */}
                                        <motion.div
                                            initial={{ scaleX: 0, originX: 0 }}
                                            whileHover={{ scaleX: 1 }}
                                            transition={{ duration: 0.45 }}
                                            className="absolute left-0 right-0 top-0 h-px bg-red-500"
                                        />

                                        {/* number */}
                                        <span className="absolute right-5 top-5 font-mono text-6xl font-bold text-white/[0.035]">
                                            {signal.index}
                                        </span>

                                        <div className="flex h-full flex-col justify-between p-7">
                                            <div>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex h-10 w-10 items-center justify-center border border-white/[0.1]">
                                                        <Icon className="h-4 w-4 text-zinc-400/75 transition-colors duration-300 group-hover:text-red-400" />
                                                    </div>

                                                    <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-zinc-700">
                                                        0{index + 1}
                                                    </span>
                                                </div>

                                                <p className="mt-10 text-[9px] uppercase tracking-[0.28em] text-red-400">
                                                    {signal.label}
                                                </p>

                                                <h3 className="mt-3 text-2xl font-medium tracking-[-0.03em]">
                                                    {signal.title}
                                                </h3>
                                            </div>

                                            <p className="max-w-sm text-sm leading-6 text-zinc-500">
                                                {signal.description}
                                            </p>
                                        </div>
                                    </motion.article>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* =========================================================
          LIVE COMMAND CENTER
      ========================================================= */}

            <section
                ref={commandRef}
                className="relative border-b border-white/[0.08]"
            >
                <div className="mx-auto max-w-[1500px] px-6 py-28 md:px-10 lg:px-16">
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        animate={commandInView ? "visible" : "hidden"}
                    >
                        <motion.div variants={reveal}>
                            <p className="text-[9px] uppercase tracking-[0.3em] text-red-400">
                                AXION / COMMAND CENTER
                            </p>

                            <div className="mt-5 flex flex-col justify-between gap-6 border-b border-white/[0.08] pb-7 md:flex-row md:items-end">
                                <h2 className="max-w-3xl text-4xl font-semibold leading-[0.95] tracking-[-0.045em] md:text-7xl">
                                    The coach is part of
                                    <br />
                                    <span className="text-zinc-600/80">the system.</span>
                                </h2>

                                <p className="max-w-xs text-sm leading-6 text-zinc-500">
                                    Your training does not disappear into an app after the
                                    session ends.
                                </p>
                            </div>
                        </motion.div>

                        {/* command visualization */}
                        <motion.div
                            variants={reveal}
                            className="mt-14 grid gap-px border border-white/[0.1] bg-white/[0.1] lg:grid-cols-[1.1fr_0.9fr]"
                        >
                            {/* left visual */}
                            <div className="relative min-h-[500px] overflow-hidden bg-black p-6 md:p-10">
                                {/* circles */}
                                <div className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]" />
                                <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-500/10" />
                                <div className="absolute left-1/2 top-1/2 h-[160px] w-[160px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.08]" />

                                {/* crosshair */}
                                <div className="absolute left-1/2 top-1/2 h-[390px] w-px -translate-x-1/2 -translate-y-1/2 bg-white/[0.05]" />
                                <div className="absolute left-1/2 top-1/2 h-px w-[390px] -translate-x-1/2 -translate-y-1/2 bg-white/[0.05]" />

                                {/* rotating ring */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{
                                        duration: 18,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                    className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-red-500/20"
                                />

                                {/* central node */}
                                <motion.div
                                    animate={{
                                        scale: [1, 1.08, 1],
                                        opacity: [0.7, 1, 0.7],
                                    }}
                                    transition={{
                                        duration: 2.5,
                                        repeat: Infinity,
                                    }}
                                    className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-red-500/30 bg-red-500/[0.05]"
                                >
                                    <div className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_25px_rgba(220,38,38,0.8)]" />
                                </motion.div>

                                {/* telemetry labels */}
                                <div className="absolute left-6 top-6">
                                    <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-zinc-600/80">
                                        ATHLETE NODE
                                    </p>
                                    <p className="mt-2 font-mono text-xs text-zinc-300/75">
                                        AX-003
                                    </p>
                                </div>

                                <div className="absolute right-6 top-6 text-right">
                                    <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-zinc-600/80">
                                        SIGNAL
                                    </p>
                                    <p className="mt-2 font-mono text-xs text-red-400">
                                        ACTIVE
                                    </p>
                                </div>

                                <div className="absolute bottom-6 left-6">
                                    <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-zinc-600/80">
                                        CURRENT FOCUS
                                    </p>
                                    <p className="mt-2 text-sm text-zinc-300/75">
                                        Strength / Capacity
                                    </p>
                                </div>

                                <div className="absolute bottom-6 right-6 text-right">
                                    <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-zinc-600/80">
                                        ADAPTATION
                                    </p>
                                    <p className="mt-2 font-mono text-sm text-zinc-300/75">
                                        +18.4%
                                    </p>
                                </div>
                            </div>

                            {/* right data */}
                            <div className="bg-[#050505] p-6 md:p-10">
                                <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
                                    <div className="flex items-center gap-3">
                                        <UserRound className="h-4 w-4 text-zinc-500" />

                                        <span className="text-[9px] uppercase tracking-[0.28em] text-zinc-400/75">
                                            COACHING CHANNEL
                                        </span>
                                    </div>

                                    <span className="flex items-center gap-2 font-mono text-[9px] text-red-400">
                                        <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                                        ONLINE
                                    </span>
                                </div>

                                <div className="mt-8 space-y-1">
                                    <div className="flex items-end justify-between border-b border-white/[0.06] py-5">
                                        <div>
                                            <p className="text-[9px] uppercase tracking-[0.25em] text-zinc-600/80">
                                                LAST REVIEW
                                            </p>
                                            <p className="mt-2 text-sm text-zinc-200/95">
                                                Performance / Week 08
                                            </p>
                                        </div>

                                        <ArrowUpRight className="h-4 w-4 text-zinc-600/80" />
                                    </div>

                                    <div className="flex items-end justify-between border-b border-white/[0.06] py-5">
                                        <div>
                                            <p className="text-[9px] uppercase tracking-[0.25em] text-zinc-600/80">
                                                NEXT SESSION
                                            </p>
                                            <p className="mt-2 text-sm text-zinc-200/95">
                                                Thursday / 18:30
                                            </p>
                                        </div>

                                        <Timer className="h-4 w-4 text-zinc-600/80" />
                                    </div>

                                    <div className="flex items-end justify-between border-b border-white/[0.06] py-5">
                                        <div>
                                            <p className="text-[9px] uppercase tracking-[0.25em] text-zinc-600/80">
                                                CURRENT LOAD
                                            </p>
                                            <p className="mt-2 text-sm text-zinc-200/95">
                                                Optimal / 74%
                                            </p>
                                        </div>

                                        <Activity className="h-4 w-4 text-zinc-600/80" />
                                    </div>

                                    <div className="flex items-end justify-between py-5">
                                        <div>
                                            <p className="text-[9px] uppercase tracking-[0.25em] text-zinc-600/80">
                                                COACH RESPONSE
                                            </p>
                                            <p className="mt-2 text-sm text-zinc-200/95">
                                                Available
                                            </p>
                                        </div>

                                        <Shield className="h-4 w-4 text-zinc-600/80" />
                                    </div>
                                </div>

                                {/* message signal */}
                                <div className="mt-10 border border-red-500/20 bg-red-500/[0.035] p-5">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-8 w-8 items-center justify-center border border-red-500/30">
                                            <MessageSquare className="h-3.5 w-3.5 text-red-400" />
                                        </div>

                                        <div>
                                            <p className="text-[9px] uppercase tracking-[0.25em] text-red-400">
                                                SYSTEM MESSAGE
                                            </p>
                                            <p className="mt-1 text-xs text-zinc-300/75">
                                                Your next adjustment is ready.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* =========================================================
          PRINCIPLES
      ========================================================= */}

            <section className="relative border-b border-white/[0.08]">
                <div className="mx-auto max-w-[1500px] px-6 py-28 md:px-10 lg:px-16">
                    <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">
                        <div>
                            <p className="text-[9px] uppercase tracking-[0.3em] text-red-400">
                                COACHING PRINCIPLES
                            </p>

                            <h2 className="mt-6 text-4xl font-semibold leading-[0.95] tracking-[-0.04em] md:text-6xl">
                                Human where
                                <br />
                                <span className="text-zinc-600/80">it matters.</span>
                            </h2>
                        </div>

                        <div className="border-t border-white/[0.08]">
                            {principles.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.number}
                                        className="group grid grid-cols-[70px_1fr_auto] items-center gap-5 border-b border-white/[0.08] py-7"
                                    >
                                        <span className="font-mono text-[10px] text-zinc-700">
                                            {item.number}
                                        </span>

                                        <div>
                                            <h3 className="text-lg text-zinc-200/95 transition-colors duration-300 group-hover:text-white">
                                                {item.title}
                                            </h3>

                                            <p className="mt-1 text-sm text-zinc-600/80">
                                                {item.copy}
                                            </p>
                                        </div>

                                        <Icon className="h-4 w-4 text-zinc-700 transition-colors duration-300 group-hover:text-red-400" />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
          CLOSING STATEMENT
      ========================================================= */}

            <section className="relative overflow-hidden border-b border-white/[0.08]">
                <div className="absolute inset-0">
                    <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/[0.04] blur-[140px]" />
                </div>

                <div className="relative mx-auto max-w-[1500px] px-6 py-36 text-center md:px-10 lg:px-16">
                    <p className="text-[9px] uppercase tracking-[0.4em] text-red-400">
                        AXION / COACHING DIVISION
                    </p>

                    <h2 className="mx-auto mt-8 max-w-5xl text-[clamp(3rem,7vw,7.5rem)] font-semibold leading-[0.88] tracking-[-0.065em]">
                        You bring the
                        <br />
                        <span className="text-zinc-600/80">ambition.</span>
                    </h2>

                    <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-zinc-500 md:text-base">
                        We build the system around it.
                    </p>

                    <div className="mx-auto mt-12 flex max-w-md items-center justify-center gap-4">
                        <div className="h-px flex-1 bg-white/[0.08]" />

                        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-zinc-600/80">
                            READY / 03
                        </span>

                        <div className="h-px flex-1 bg-white/[0.08]" />
                    </div>
                </div>
            </section>

            {/* =========================================================
          GLOBAL CTA + FOOTER
      ========================================================= */}

            <JoinUs />

            <Footer />
        </main>
    );
}