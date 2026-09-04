"use client";

import { Arimo } from "next/font/google";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import {
    Activity,
    Award,
    Crosshair,
    Flame,
    Flag,
    Medal,
    Radio,
    Trophy,
    Users,
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

const challengeStages = [
    {
        index: "01",
        icon: Flag,
        label: "ENTER",
        title: "Choose the mission",
        description:
            "Pick a challenge that demands something from you. Strength, consistency, endurance or discipline.",
    },
    {
        index: "02",
        icon: Crosshair,
        label: "EXECUTE",
        title: "Put in the work",
        description:
            "Every session moves your position. The leaderboard only responds to what you actually do.",
    },
    {
        index: "03",
        icon: Trophy,
        label: "ADVANCE",
        title: "Earn your position",
        description:
            "Finish the challenge. Beat your previous mark. Then find out what happens when you raise the standard.",
    },
];

const leaderboard = [
    {
        rank: "01",
        name: "ALEX M.",
        score: "9,842",
        change: "+184",
    },
    {
        rank: "02",
        name: "SAM R.",
        score: "9,410",
        change: "+162",
    },
    {
        rank: "03",
        name: "JORDAN K.",
        score: "9,106",
        change: "+141",
    },
    {
        rank: "04",
        name: "TAYLOR P.",
        score: "8,774",
        change: "+128",
    },
    {
        rank: "05",
        name: "YOU",
        score: "8,421",
        change: "+216",
    },
];

const challengeStats = [
    {
        icon: Users,
        label: "ACTIVE ATHLETES",
        value: "2,481",
    },
    {
        icon: Activity,
        label: "MISSIONS ACTIVE",
        value: "18",
    },
    {
        icon: Flame,
        label: "SESSIONS LOGGED",
        value: "64.2K",
    },
    {
        icon: Award,
        label: "RECORDS SET",
        value: "1,904",
    },
];

export default function FitnessChallengesPage() {
    const protocolRef = useRef<HTMLDivElement>(null);
    const protocolInView = useInView(protocolRef, {
        once: true,
        amount: 0.2,
    });

    const arenaRef = useRef<HTMLDivElement>(null);
    const arenaInView = useInView(arenaRef, {
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
                <div
                    className="absolute inset-0 opacity-[0.032]"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, rgba(255,255,255,0.8) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.8) 1px, transparent 1px)
                        `,
                        backgroundSize: "64px 64px",
                    }}
                />

                <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/[0.04]" />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="absolute left-1/2 top-[5%] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-red-600/[0.045] blur-[170px]"
                />

                <motion.div
                    initial={{ y: "-10%" }}
                    animate={{ y: "110%" }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent"
                />
            </div>

            <NavBar />

            {/* =========================================================
                HERO / ARENA ENTRY
            ========================================================= */}

            <section className="relative mt-20 min-h-[92vh] border-b border-white/[0.08]">
                <div className="absolute left-6 top-8 h-14 w-14 border-l border-t border-white/20 md:left-10" />
                <div className="absolute right-6 top-8 h-14 w-14 border-r border-t border-white/20 md:right-10" />

                <div className="mx-auto flex min-h-[92vh] max-w-[1500px] flex-col px-6 pb-14 pt-28 md:px-10 lg:px-16">
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-2 gap-8 border-b border-white/[0.08] pb-5 md:grid-cols-4"
                    >
                        <motion.div variants={reveal}>
                            <p className="text-[9px] uppercase tracking-[0.28em] text-zinc-600/80">
                                AXION / CHALLENGES
                            </p>
                            <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-zinc-300/70">
                                Performance Events Division
                            </p>
                        </motion.div>

                        <motion.div variants={reveal}>
                            <p className="text-[9px] uppercase tracking-[0.28em] text-zinc-600/80">
                                MODULE
                            </p>
                            <p className="mt-2 font-mono text-[10px] text-zinc-300/70">
                                04 / 04
                            </p>
                        </motion.div>

                        <motion.div variants={reveal}>
                            <p className="text-[9px] uppercase tracking-[0.28em] text-zinc-600/80">
                                PROTOCOL
                            </p>
                            <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-zinc-300/70">
                                Competition
                            </p>
                        </motion.div>

                        <motion.div
                            variants={reveal}
                            className="flex items-center gap-2 md:justify-end"
                        >
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
                            <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-red-400">
                                Arena / live
                            </span>
                        </motion.div>
                    </motion.div>

                    <div className="relative flex flex-1 items-center py-20">
                        <div className="pointer-events-none absolute right-[-2%] top-1/2 -translate-y-1/2 font-mono text-[18rem] font-bold leading-none tracking-[-0.1em] text-white/[0.022] lg:text-[28rem]">
                            04
                        </div>

                        <div className="relative z-10 grid w-full gap-16 lg:grid-cols-[1fr_380px] lg:items-end">
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
                                    PERFORMANCE / COMPETITION / MOMENTUM
                                </motion.p>

                                <motion.h1
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 1,
                                        delay: 0.1,
                                        ease: [0.16, 1, 0.3, 1],
                                    }}
                                    className="max-w-5xl text-[clamp(3.5rem,8vw,8.5rem)] font-semibold leading-[0.87] tracking-[-0.065em]"
                                >
                                    Give yourself
                                    <br />
                                    <span className="text-zinc-600/80">
                                        something to beat.
                                    </span>
                                </motion.h1>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.35 }}
                                    className="mt-10 flex max-w-2xl items-start gap-5"
                                >
                                    <div className="mt-1 h-10 w-px bg-red-500/70" />

                                    <p className="text-sm leading-7 text-zinc-400/75 md:text-base">
                                        Challenges turn intention into a deadline.
                                        <br />
                                        A target into a test. A workout into a statement.
                                    </p>
                                </motion.div>
                            </div>

                            {/* active challenge */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 0.9,
                                    delay: 0.5,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className="relative border border-white/[0.1] bg-white/[0.012] p-5"
                            >
                                <div className="absolute left-0 top-0 h-8 w-8 border-l border-t border-red-500/70" />
                                <div className="absolute bottom-0 right-0 h-8 w-8 border-b border-r border-white/20" />

                                <div className="mb-7 flex items-center justify-between border-b border-white/[0.08] pb-4">
                                    <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-zinc-600/80">
                                        ACTIVE MISSION
                                    </span>

                                    <span className="flex items-center gap-2 font-mono text-[9px] text-red-400">
                                        <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                                        LIVE
                                    </span>
                                </div>

                                <p className="text-[9px] uppercase tracking-[0.25em] text-zinc-600">
                                    CHALLENGE / 018
                                </p>

                                <h3 className="mt-3 text-2xl tracking-[-0.03em]">
                                    30 Day Engine
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-zinc-500">
                                    Complete 20 training sessions in 30 days.
                                </p>

                                <div className="mt-8">
                                    <div className="flex items-end justify-between">
                                        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-600">
                                            YOUR PROGRESS
                                        </span>

                                        <span className="font-mono text-sm text-zinc-200">
                                            14 / 20
                                        </span>
                                    </div>

                                    <div className="mt-3 h-1 bg-white/[0.07]">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: "70%" }}
                                            transition={{
                                                duration: 1.4,
                                                delay: 1,
                                            }}
                                            className="h-full bg-red-500"
                                        />
                                    </div>
                                </div>

                                <div className="mt-8 grid grid-cols-2 border-t border-white/[0.08] pt-4">
                                    <div>
                                        <p className="text-[8px] uppercase tracking-[0.2em] text-zinc-600">
                                            DAYS LEFT
                                        </p>
                                        <p className="mt-2 font-mono text-sm text-zinc-300">
                                            11
                                        </p>
                                    </div>

                                    <div className="text-right">
                                        <p className="text-[8px] uppercase tracking-[0.2em] text-zinc-600">
                                            CURRENT RANK
                                        </p>
                                        <p className="mt-2 font-mono text-sm text-red-400">
                                            #05
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <div className="grid border-t border-white/[0.08] pt-5 md:grid-cols-3">
                        <div>
                            <p className="text-[9px] uppercase tracking-[0.25em] text-zinc-600/80">
                                OBJECTIVE
                            </p>
                            <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-zinc-400/70">
                                Create pressure / create momentum
                            </p>
                        </div>

                        <div className="mt-5 md:mt-0">
                            <p className="text-[9px] uppercase tracking-[0.25em] text-zinc-600/80">
                                ENGINE
                            </p>
                            <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-zinc-400/70">
                                Community + competition
                            </p>
                        </div>

                        <div className="mt-5 md:mt-0 md:text-right">
                            <p className="text-[9px] uppercase tracking-[0.25em] text-zinc-600/80">
                                OUTPUT
                            </p>
                            <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-zinc-400/70">
                                Consistency / records / momentum
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                EDITORIAL
            ========================================================= */}

            <section className="relative border-b border-white/[0.08]">
                <div className="mx-auto max-w-[1500px] px-6 py-28 md:px-10 lg:px-16">
                    <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
                        <div>
                            <div className="flex items-center gap-3">
                                <span className="h-px w-8 bg-red-500" />
                                <span className="text-[9px] uppercase tracking-[0.3em] text-zinc-500">
                                    WHY CHALLENGES
                                </span>
                            </div>

                            <h2 className="mt-8 max-w-md text-4xl font-semibold leading-[0.95] tracking-[-0.04em] md:text-6xl">
                                Motivation
                                <br />
                                <span className="text-zinc-600/80">
                                    needs a target.
                                </span>
                            </h2>
                        </div>

                        <div className="lg:pt-14">
                            <p className="max-w-2xl text-lg leading-8 text-zinc-400/75">
                                A challenge creates a finish line where there used to be
                                another tomorrow. It gives your next session consequence.
                            </p>

                            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300/75">
                                Then competition adds another layer: other people are
                                moving too. Suddenly consistency is not an idea.
                                <span className="text-zinc-100">
                                    {" "}
                                    It is your position.
                                </span>
                            </p>

                            <div className="mt-10 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.25em] text-zinc-600/80">
                                <Radio className="h-3 w-3 text-red-500" />
                                Competitive signal detected
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                CHALLENGE PROTOCOL
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
                                    AXION / COMPETITION PROTOCOL
                                </p>

                                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
                                    Enter. Execute. Advance.
                                </h2>
                            </div>

                            <span className="hidden font-mono text-[9px] uppercase tracking-[0.25em] text-zinc-600/80 md:block">
                                03 STAGES / 01 MISSION
                            </span>
                        </motion.div>

                        <div className="grid border-l border-white/[0.08] md:grid-cols-3">
                            {challengeStages.map((stage, index) => {
                                const Icon = stage.icon;

                                return (
                                    <motion.article
                                        key={stage.index}
                                        variants={reveal}
                                        className={`group relative min-h-[330px] border-r border-white/[0.08] ${index !== 0
                                            ? "border-t md:border-t-0"
                                            : ""
                                            }`}
                                    >
                                        <motion.div
                                            initial={{ scaleX: 0, originX: 0 }}
                                            whileHover={{ scaleX: 1 }}
                                            transition={{ duration: 0.45 }}
                                            className="absolute left-0 right-0 top-0 h-px bg-red-500"
                                        />

                                        <span className="absolute right-5 top-5 font-mono text-6xl font-bold text-white/[0.03]">
                                            {stage.index}
                                        </span>

                                        <div className="flex h-full flex-col justify-between p-7">
                                            <div>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex h-10 w-10 items-center justify-center border border-white/[0.1]">
                                                        <Icon className="h-4 w-4 text-zinc-400/70 transition-colors group-hover:text-red-400" />
                                                    </div>

                                                    <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-zinc-700">
                                                        0{index + 1}
                                                    </span>
                                                </div>

                                                <p className="mt-10 text-[9px] uppercase tracking-[0.28em] text-red-400">
                                                    {stage.label}
                                                </p>

                                                <h3 className="mt-3 text-2xl font-medium tracking-[-0.03em]">
                                                    {stage.title}
                                                </h3>
                                            </div>

                                            <p className="max-w-sm text-sm leading-6 text-zinc-500">
                                                {stage.description}
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
                ARENA / LEADERBOARD
            ========================================================= */}

            <section
                ref={arenaRef}
                className="relative border-b border-white/[0.08]"
            >
                <div className="mx-auto max-w-[1500px] px-6 py-28 md:px-10 lg:px-16">
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        animate={arenaInView ? "visible" : "hidden"}
                    >
                        <motion.div variants={reveal}>
                            <p className="text-[9px] uppercase tracking-[0.3em] text-red-400">
                                AXION / PERFORMANCE ARENA
                            </p>

                            <div className="mt-5 flex flex-col justify-between gap-6 border-b border-white/[0.08] pb-7 md:flex-row md:items-end">
                                <h2 className="max-w-3xl text-4xl font-semibold leading-[0.95] tracking-[-0.045em] md:text-7xl">
                                    Your work has
                                    <br />
                                    <span className="text-zinc-600/80">
                                        a position.
                                    </span>
                                </h2>

                                <p className="max-w-xs text-sm leading-6 text-zinc-500">
                                    The leaderboard does not care about intentions.
                                    Only completed work moves the line.
                                </p>
                            </div>
                        </motion.div>

                        {/* arena */}
                        <motion.div
                            variants={reveal}
                            className="mt-14 grid gap-px border border-white/[0.1] bg-white/[0.1] lg:grid-cols-[1fr_0.85fr]"
                        >
                            {/* leaderboard */}
                            <div className="bg-[#050505] p-6 md:p-10">
                                <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
                                    <div className="flex items-center gap-3">
                                        <Medal className="h-4 w-4 text-zinc-600" />

                                        <span className="text-[9px] uppercase tracking-[0.28em] text-zinc-400/70">
                                            LIVE LEADERBOARD
                                        </span>
                                    </div>

                                    <span className="font-mono text-[9px] text-red-400">
                                        2,481 ATHLETES
                                    </span>
                                </div>

                                <div className="mt-3">
                                    {leaderboard.map((athlete, index) => (
                                        <motion.div
                                            key={athlete.rank}
                                            initial={{ opacity: 0, x: -15 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.5,
                                                delay: index * 0.08,
                                            }}
                                            className={`group grid grid-cols-[45px_1fr_90px_65px] items-center border-b border-white/[0.06] py-6 ${athlete.name === "YOU"
                                                ? "bg-red-500/[0.025]"
                                                : ""
                                                }`}
                                        >
                                            <span
                                                className={`font-mono text-[10px] ${athlete.name === "YOU"
                                                    ? "text-red-400"
                                                    : "text-zinc-700"
                                                    }`}
                                            >
                                                {athlete.rank}
                                            </span>

                                            <div className="flex items-center gap-3">
                                                {athlete.name === "YOU" && (
                                                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                                                )}

                                                <span
                                                    className={`text-xs ${athlete.name === "YOU"
                                                        ? "text-zinc-100"
                                                        : "text-zinc-400"
                                                        }`}
                                                >
                                                    {athlete.name}
                                                </span>
                                            </div>

                                            <span className="text-right font-mono text-xs text-zinc-300">
                                                {athlete.score}
                                            </span>

                                            <span className="text-right font-mono text-[9px] text-red-400">
                                                {athlete.change}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* challenge visual */}
                            <div className="relative min-h-[500px] overflow-hidden bg-black p-6 md:p-10">
                                <div className="absolute inset-0">
                                    <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.045]" />
                                    <div className="absolute left-1/2 top-1/2 h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-500/10" />
                                    <div className="absolute left-1/2 top-1/2 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]" />

                                    <div className="absolute left-1/2 top-1/2 h-[420px] w-px -translate-x-1/2 -translate-y-1/2 bg-white/[0.04]" />

                                    <div className="absolute left-1/2 top-1/2 h-px w-[420px] -translate-x-1/2 -translate-y-1/2 bg-white/[0.04]" />

                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{
                                            duration: 22,
                                            repeat: Infinity,
                                            ease: "linear",
                                        }}
                                        className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-red-500/20"
                                    />
                                </div>

                                <div className="relative z-10 flex h-full min-h-[420px] flex-col justify-between">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-zinc-600">
                                                CURRENT MISSION
                                            </p>

                                            <p className="mt-2 text-sm text-zinc-300">
                                                30 DAY ENGINE
                                            </p>
                                        </div>

                                        <div className="text-right">
                                            <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-zinc-600">
                                                STATUS
                                            </p>

                                            <p className="mt-2 flex items-center gap-2 font-mono text-[9px] text-red-400">
                                                <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                                                ACTIVE
                                            </p>
                                        </div>
                                    </div>

                                    <div className="relative mx-auto flex h-32 w-32 items-center justify-center rounded-full border border-red-500/20 bg-red-500/[0.025]">
                                        <div className="absolute inset-3 rounded-full border border-white/[0.06]" />

                                        <div className="text-center">
                                            <p className="font-mono text-3xl text-zinc-200">
                                                70%
                                            </p>
                                            <p className="mt-1 text-[8px] uppercase tracking-[0.25em] text-zinc-600">
                                                COMPLETE
                                            </p>
                                        </div>

                                        <motion.div
                                            animate={{
                                                scale: [1, 1.08, 1],
                                                opacity: [0.5, 1, 0.5],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                            }}
                                            className="absolute h-2 w-2 rounded-full bg-red-500 shadow-[0_0_20px_rgba(220,38,38,0.8)]"
                                        />
                                    </div>

                                    <div className="grid grid-cols-3 gap-4">
                                        <div>
                                            <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-600">
                                                SESSIONS
                                            </p>
                                            <p className="mt-2 font-mono text-sm text-zinc-300">
                                                14
                                            </p>
                                        </div>

                                        <div>
                                            <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-600">
                                                RANK
                                            </p>
                                            <p className="mt-2 font-mono text-sm text-red-400">
                                                #05
                                            </p>
                                        </div>

                                        <div className="text-right">
                                            <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-600">
                                                DAYS
                                            </p>
                                            <p className="mt-2 font-mono text-sm text-zinc-300">
                                                11
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* arena stats */}
                        <motion.div
                            variants={reveal}
                            className="mt-8 grid gap-px border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4"
                        >
                            {challengeStats.map((stat) => {
                                const Icon = stat.icon;

                                return (
                                    <div
                                        key={stat.label}
                                        className="bg-[#050505] p-6"
                                    >
                                        <Icon className="h-4 w-4 text-zinc-600" />

                                        <p className="mt-7 text-[8px] uppercase tracking-[0.25em] text-zinc-600">
                                            {stat.label}
                                        </p>

                                        <p className="mt-2 font-mono text-2xl tracking-[-0.04em] text-zinc-200">
                                            {stat.value}
                                        </p>
                                    </div>
                                );
                            })}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* =========================================================
                FINAL STATEMENT
            ========================================================= */}

            <section className="relative overflow-hidden border-b border-white/[0.08]">
                <div className="absolute inset-0">
                    <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/[0.04] blur-[160px]" />
                </div>

                <div className="relative mx-auto max-w-[1500px] px-6 py-36 text-center md:px-10 lg:px-16">
                    <p className="text-[9px] uppercase tracking-[0.4em] text-red-400">
                        AXION / PERFORMANCE EVENTS
                    </p>

                    <h2 className="mx-auto mt-8 max-w-5xl text-[clamp(3rem,7vw,7.5rem)] font-semibold leading-[0.88] tracking-[-0.065em]">
                        Stop waiting
                        <br />
                        <span className="text-zinc-600/80">
                            for motivation.
                        </span>
                    </h2>

                    <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-zinc-500 md:text-base">
                        Give yourself a mission. Then go see what you are capable of.
                    </p>

                    <div className="mx-auto mt-12 flex max-w-md items-center justify-center gap-4">
                        <div className="h-px flex-1 bg-white/[0.08]" />

                        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-zinc-600">
                            READY / 04
                        </span>

                        <div className="h-px flex-1 bg-white/[0.08]" />
                    </div>
                </div>
            </section>

            <JoinUs />

            <Footer />
        </main>
    );
}