"use client";

import { Arimo } from "next/font/google";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import {
    Activity,
    ArrowUp,
    BatteryCharging,
    Brain,
    Droplets,
    Flame,
    Gauge,
    ScanLine,
    Target,
    Timer,
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

const nutritionSignals = [
    {
        index: "01",
        icon: Target,
        label: "PRECISION",
        title: "Know what you need",
        description:
            "Nutrition starts with your objective. Energy requirements, body composition and training demands establish the baseline.",
    },
    {
        index: "02",
        icon: Timer,
        label: "TIMING",
        title: "Fuel the moment",
        description:
            "What you consume matters. When you consume it can determine how effectively you train, recover and perform.",
    },
    {
        index: "03",
        icon: Activity,
        label: "ADAPTATION",
        title: "Adjust with output",
        description:
            "Your nutrition evolves alongside your training load, recovery patterns and changing performance demands.",
    },
];

const fuelSystems = [
    {
        number: "01",
        label: "ENERGY",
        value: "2,480",
        unit: "KCAL",
        icon: Flame,
    },
    {
        number: "02",
        label: "PROTEIN",
        value: "184",
        unit: "G",
        icon: BatteryCharging,
    },
    {
        number: "03",
        label: "HYDRATION",
        value: "2.8",
        unit: "L",
        icon: Droplets,
    },
    {
        number: "04",
        label: "RECOVERY",
        value: "92",
        unit: "%",
        icon: Brain,
    },
];

export default function NutritionPlanningPage() {
    const protocolRef = useRef<HTMLDivElement>(null);
    const protocolInView = useInView(protocolRef, {
        once: true,
        amount: 0.2,
    });

    const labRef = useRef<HTMLDivElement>(null);
    const labInView = useInView(labRef, {
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
                    className="absolute left-[58%] top-[12%] h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-red-600/[0.035] blur-[160px]"
                />

                <motion.div
                    initial={{ y: "-10%" }}
                    animate={{ y: "110%" }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/15 to-transparent"
                />
            </div>

            <NavBar />

            {/* =========================================================
                HERO
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
                                AXION / NUTRITION
                            </p>
                            <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-zinc-300/70">
                                Metabolic Intelligence Division
                            </p>
                        </motion.div>

                        <motion.div variants={reveal}>
                            <p className="text-[9px] uppercase tracking-[0.28em] text-zinc-600/80">
                                MODULE
                            </p>
                            <p className="mt-2 font-mono text-[10px] text-zinc-300/70">
                                02 / 04
                            </p>
                        </motion.div>

                        <motion.div variants={reveal}>
                            <p className="text-[9px] uppercase tracking-[0.28em] text-zinc-600/80">
                                PROTOCOL
                            </p>
                            <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-zinc-300/70">
                                Precision Fuel
                            </p>
                        </motion.div>

                        <motion.div
                            variants={reveal}
                            className="flex items-center gap-2 md:justify-end"
                        >
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
                            <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-red-400">
                                Metabolic system / active
                            </span>
                        </motion.div>
                    </motion.div>

                    <div className="relative flex flex-1 items-center py-20">
                        <div className="pointer-events-none absolute right-[-2%] top-1/2 -translate-y-1/2 font-mono text-[18rem] font-bold leading-none tracking-[-0.1em] text-white/[0.022] lg:text-[28rem]">
                            02
                        </div>

                        <div className="relative z-10 grid w-full gap-16 lg:grid-cols-[1fr_360px] lg:items-end">
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
                                    FUEL / RECOVERY / PERFORMANCE
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
                                    Feed the
                                    <br />
                                    <span className="text-zinc-600/80">performance.</span>
                                </motion.h1>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.35 }}
                                    className="mt-10 flex max-w-2xl items-start gap-5"
                                >
                                    <div className="mt-1 h-10 w-px bg-red-500/70" />

                                    <p className="text-sm leading-7 text-zinc-400/75 md:text-base">
                                        Nutrition is not restriction.
                                        <br />
                                        It is the infrastructure behind your output,
                                        recovery and adaptation.
                                    </p>
                                </motion.div>
                            </div>

                            {/* metabolic readout */}
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
                                        FUEL PROFILE
                                    </span>

                                    <span className="flex items-center gap-2 font-mono text-[9px] text-red-400">
                                        <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                                        CALIBRATED
                                    </span>
                                </div>

                                <div className="space-y-5">
                                    {[
                                        ["ENERGY", "2,480", "KCAL"],
                                        ["PROTEIN", "184", "G"],
                                        ["CARBS", "276", "G"],
                                        ["FATS", "72", "G"],
                                    ].map(([label, value, unit]) => (
                                        <div
                                            key={label}
                                            className="flex items-end justify-between"
                                        >
                                            <span className="text-[9px] uppercase tracking-[0.25em] text-zinc-600/80">
                                                {label}
                                            </span>

                                            <div>
                                                <span className="font-mono text-sm text-zinc-200/90">
                                                    {value}
                                                </span>
                                                <span className="ml-2 font-mono text-[8px] text-zinc-600">
                                                    {unit}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 border-t border-white/[0.08] pt-4">
                                    <div className="flex justify-between">
                                        <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-zinc-600">
                                            DAILY READINESS
                                        </span>
                                        <span className="font-mono text-[9px] text-red-400">
                                            92%
                                        </span>
                                    </div>

                                    <div className="mt-3 h-px bg-white/[0.08]">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: "92%" }}
                                            transition={{ duration: 1.4, delay: 1 }}
                                            className="h-full bg-red-500"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <div className="grid border-t border-white/[0.08] pt-5 md:grid-cols-3">
                        <div>
                            <p className="text-[9px] uppercase tracking-[0.25em] text-zinc-600/80">
                                INPUT
                            </p>
                            <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-zinc-400/70">
                                Objective / body / training load
                            </p>
                        </div>

                        <div className="mt-5 md:mt-0">
                            <p className="text-[9px] uppercase tracking-[0.25em] text-zinc-600/80">
                                ENGINE
                            </p>
                            <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-zinc-400/70">
                                Nutrition science + adaptation
                            </p>
                        </div>

                        <div className="mt-5 md:mt-0 md:text-right">
                            <p className="text-[9px] uppercase tracking-[0.25em] text-zinc-600/80">
                                OUTPUT
                            </p>
                            <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-zinc-400/70">
                                Energy / recovery / performance
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
                                    THE FUEL PRINCIPLE
                                </span>
                            </div>

                            <h2 className="mt-8 max-w-md text-4xl font-semibold leading-[0.95] tracking-[-0.04em] md:text-6xl">
                                You cannot
                                <br />
                                <span className="text-zinc-600/80">
                                    out-train poor fuel.
                                </span>
                            </h2>
                        </div>

                        <div className="lg:pt-14">
                            <p className="max-w-2xl text-lg leading-8 text-zinc-400/75">
                                Your body is constantly making decisions with the resources
                                you give it. Energy availability. Protein. Hydration.
                                Micronutrients. Recovery.
                            </p>

                            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300/75">
                                Axion turns those variables into a system designed around
                                your actual training and your actual life.
                            </p>

                            <div className="mt-10 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.25em] text-zinc-600/80">
                                <ScanLine className="h-3 w-3 text-red-500" />
                                Nutritional intelligence layer active
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                FUEL PROTOCOL
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
                                    AXION / FUEL PROTOCOL
                                </p>

                                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
                                    Precision by design.
                                </h2>
                            </div>

                            <span className="hidden font-mono text-[9px] uppercase tracking-[0.25em] text-zinc-600/80 md:block">
                                03 VARIABLES / 01 SYSTEM
                            </span>
                        </motion.div>

                        <div className="grid border-l border-white/[0.08] md:grid-cols-3">
                            {nutritionSignals.map((signal, index) => {
                                const Icon = signal.icon;

                                return (
                                    <motion.article
                                        key={signal.index}
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
                                            {signal.index}
                                        </span>

                                        <div className="flex h-full flex-col justify-between p-7">
                                            <div>
                                                <div className="flex h-10 w-10 items-center justify-center border border-white/[0.1]">
                                                    <Icon className="h-4 w-4 text-zinc-400/70 transition-colors group-hover:text-red-400" />
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
                METABOLIC LAB
            ========================================================= */}

            <section
                ref={labRef}
                className="relative border-b border-white/[0.08]"
            >
                <div className="mx-auto max-w-[1500px] px-6 py-28 md:px-10 lg:px-16">
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        animate={labInView ? "visible" : "hidden"}
                    >
                        <motion.div variants={reveal}>
                            <p className="text-[9px] uppercase tracking-[0.3em] text-red-400">
                                AXION / METABOLIC LAB
                            </p>

                            <div className="mt-5 flex flex-col justify-between gap-6 border-b border-white/[0.08] pb-7 md:flex-row md:items-end">
                                <h2 className="max-w-3xl text-4xl font-semibold leading-[0.95] tracking-[-0.045em] md:text-7xl">
                                    Fuel is a
                                    <br />
                                    <span className="text-zinc-600/80">
                                        performance variable.
                                    </span>
                                </h2>

                                <p className="max-w-xs text-sm leading-6 text-zinc-500">
                                    Your nutrition should respond to your output — not
                                    exist beside it.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={reveal}
                            className="mt-14 grid gap-px border border-white/[0.1] bg-white/[0.1] md:grid-cols-2 lg:grid-cols-4"
                        >
                            {fuelSystems.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.number}
                                        className="group relative min-h-[270px] bg-[#050505] p-6"
                                    >
                                        <div className="absolute right-5 top-5 font-mono text-[9px] text-zinc-700">
                                            {item.number}
                                        </div>

                                        <Icon className="h-4 w-4 text-zinc-600 transition-colors group-hover:text-red-400" />

                                        <div className="mt-16">
                                            <p className="text-[9px] uppercase tracking-[0.25em] text-zinc-600">
                                                {item.label}
                                            </p>

                                            <div className="mt-3 flex items-baseline gap-2">
                                                <span className="font-mono text-4xl tracking-[-0.05em] text-zinc-200">
                                                    {item.value}
                                                </span>

                                                <span className="font-mono text-[9px] text-red-400">
                                                    {item.unit}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="absolute bottom-6 left-6 right-6">
                                            <div className="h-px bg-white/[0.07]">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{
                                                        width:
                                                            item.number === "01"
                                                                ? "82%"
                                                                : item.number === "02"
                                                                    ? "91%"
                                                                    : item.number === "03"
                                                                        ? "74%"
                                                                        : "92%",
                                                    }}
                                                    viewport={{ once: true }}
                                                    transition={{
                                                        duration: 1.2,
                                                        delay: 0.15,
                                                    }}
                                                    className="h-full bg-red-500/70"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </motion.div>

                        <motion.div
                            variants={reveal}
                            className="mt-8 grid gap-6 md:grid-cols-3"
                        >
                            <div className="border border-white/[0.08] p-6">
                                <Gauge className="h-4 w-4 text-zinc-600" />
                                <p className="mt-6 text-[9px] uppercase tracking-[0.25em] text-zinc-600">
                                    TRAINING DEMAND
                                </p>
                                <p className="mt-2 text-sm text-zinc-300">
                                    High output / strength cycle
                                </p>
                            </div>

                            <div className="border border-white/[0.08] p-6">
                                <ArrowUp className="h-4 w-4 text-red-500" />
                                <p className="mt-6 text-[9px] uppercase tracking-[0.25em] text-zinc-600">
                                    FUEL RESPONSE
                                </p>
                                <p className="mt-2 text-sm text-zinc-300">
                                    Increased intake / active
                                </p>
                            </div>

                            <div className="border border-red-500/20 bg-red-500/[0.025] p-6">
                                <Zap className="h-4 w-4 text-red-400" />
                                <p className="mt-6 text-[9px] uppercase tracking-[0.25em] text-red-400">
                                    SYSTEM INSIGHT
                                </p>
                                <p className="mt-2 text-sm leading-6 text-zinc-300">
                                    Fuel the work you want your body to produce.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* =========================================================
                CLOSING
            ========================================================= */}

            <section className="relative overflow-hidden border-b border-white/[0.08]">
                <div className="absolute inset-0">
                    <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/[0.035] blur-[150px]" />
                </div>

                <div className="relative mx-auto max-w-[1500px] px-6 py-36 text-center md:px-10 lg:px-16">
                    <p className="text-[9px] uppercase tracking-[0.4em] text-red-400">
                        AXION / NUTRITION DIVISION
                    </p>

                    <h2 className="mx-auto mt-8 max-w-5xl text-[clamp(3rem,7vw,7.5rem)] font-semibold leading-[0.88] tracking-[-0.065em]">
                        Build the fuel.
                        <br />
                        <span className="text-zinc-600/80">
                            Build the output.
                        </span>
                    </h2>

                    <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-zinc-500 md:text-base">
                        Precision nutrition for the work ahead.
                    </p>
                </div>
            </section>

            <JoinUs />

            <Footer />
        </main>
    );
}