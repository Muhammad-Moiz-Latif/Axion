"use client"

import { Arimo } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import type { Variants } from "framer-motion";
import {
    ArrowRight,
    ChevronLeft,
    LockKeyhole,
    Mail,
    ShieldCheck,
} from "lucide-react"

import logo from "../../../assets/AXION.png"
import bg from "../../../assets/legpress.jpg"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const arimo = Arimo({
    variable: "--font-arimo",
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
})

const pageVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
        },
    },
}

const fadeUp: Variants = {
    hidden: {
        opacity: 0,
        y: 18,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.55,
            ease: "easeOut",
        },
    },
}

export default function Login() {
    return (
        <main
            className={`relative min-h-screen overflow-hidden bg-black text-white ${arimo.className}`}
        >
            {/* =========================================================
          BACKGROUND
      ========================================================= */}

            <Image
                src={bg}
                alt="Athlete training on a leg press"
                fill
                priority
                className="object-cover object-center"
            />

            {/* cinematic image treatment */}
            <div className="absolute inset-0 bg-black/55" />

            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/35" />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />

            {/* =========================================================
          TOP BRAND BAR
      ========================================================= */}

            <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute left-3 top-0 z-30 flex w-full items-center justify-between px-6 py-5 md:px-10"
            >
                <Link
                    href="/"
                    className="group flex items-center gap-3 "
                >
                    <div className="relative flex size-20 items-center justify-center overflow-hidden  bg-black/50 backdrop-blur-md">
                        <Image
                            src={logo}
                            alt="AXION"
                            width={44}
                            height={44}
                            className="scale-[1.35] object-contain transition-transform duration-300 group-hover:scale-[1.5]"
                        />
                    </div>
                </Link>

                <Link
                    href="/"
                    className="flex items-center gap-2 text-xs text-zinc-500 transition-colors hover:text-white"
                >
                    <ChevronLeft className="size-3.5" />
                    Return to site
                </Link>
            </motion.div>

            {/* =========================================================
          MAIN
      ========================================================= */}

            <motion.div
                variants={pageVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 flex min-h-screen w-full items-center"
            >
                <div className="grid w-full grid-cols-1 lg:grid-cols-[1.15fr_0.85fr]">

                    {/* =====================================================
              LEFT EDITORIAL PANEL - MOVED HIGHER & CENTERED
          ===================================================== */}

                    <section className="hidden min-h-screen flex-col justify-center px-10 pb-14 lg:flex xl:px-16">
                        <motion.div
                            variants={fadeUp}
                            className="mb-8 flex items-center gap-3"
                        >
                            <span className="h-px w-10 bg-[#DC2626]" />

                            <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400">
                                Performance intelligence
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={fadeUp}
                            className="max-w-2xl text-6xl font-semibold leading-[0.95] tracking-[-0.045em] xl:text-7xl"
                        >
                            Train with
                            <br />
                            <span className="text-[#DC2626]">intent.</span>
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            className="mt-6 max-w-md text-sm leading-6 text-zinc-400"
                        >
                            Your training, nutrition and progress — measured,
                            understood and built around you.
                        </motion.p>

                        {/* small biometric HUD */}
                        <motion.div
                            variants={fadeUp}
                            className="mt-10 flex items-center gap-8"
                        >
                            <div>
                                <div className="mb-1 text-[9px] uppercase tracking-[0.2em] text-zinc-600">
                                    System
                                </div>

                                <div className="flex items-center gap-2 text-xs text-zinc-300">
                                    <span className="size-1.5 rounded-full bg-[#DC2626] shadow-[0_0_8px_#DC2626]" />
                                    Online
                                </div>
                            </div>

                            <div className="h-8 w-px bg-zinc-800" />

                            <div>
                                <div className="mb-1 text-[9px] uppercase tracking-[0.2em] text-zinc-600">
                                    Tracking
                                </div>

                                <div className="text-xs text-zinc-300">
                                    Active
                                </div>
                            </div>
                        </motion.div>
                    </section>

                    {/* =====================================================
              RIGHT AUTH PANEL
          ===================================================== */}

                    <section className="flex min-h-screen items-center justify-center px-5 py-24 sm:px-8 lg:min-h-screen lg:border-l lg:border-white/[0.06] lg:bg-black/25 lg:px-12 lg:backdrop-blur-[2px] xl:px-20">

                        <motion.div
                            variants={fadeUp}
                            className="w-full max-w-[430px]"
                        >

                            {/* heading */}
                            <div className="mb-9">
                                <div className="mb-4 flex items-center gap-2">
                                    <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#DC2626]">
                                        Member access
                                    </span>

                                    <span className="h-px w-8 bg-[#DC2626]/50" />
                                </div>

                                <h2 className="text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
                                    Welcome back.
                                </h2>

                                <p className="mt-3 text-sm leading-6 text-zinc-500">
                                    Continue where your progress left off.
                                </p>
                            </div>

                            {/* form */}
                            <form className="space-y-5">

                                <motion.div variants={fadeUp}>
                                    <label
                                        htmlFor="email"
                                        className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-zinc-500"
                                    >
                                        Email or username
                                    </label>

                                    <div className="relative">
                                        <Mail className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-zinc-600" />

                                        <Input
                                            id="email"
                                            type="text"
                                            placeholder="you@example.com"
                                            autoComplete="username"
                                            className="pl-11"
                                        />
                                    </div>
                                </motion.div>

                                <motion.div variants={fadeUp}>
                                    <div className="mb-2 flex items-center justify-between">
                                        <label
                                            htmlFor="password"
                                            className="block text-[10px] uppercase tracking-[0.18em] text-zinc-500"
                                        >
                                            Password
                                        </label>

                                        <Link
                                            href="/forgot-password"
                                            className="text-[11px] text-zinc-600 transition-colors hover:text-[#DC2626]"
                                        >
                                            Forgot password?
                                        </Link>
                                    </div>

                                    <div className="relative">
                                        <LockKeyhole className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-zinc-600" />

                                        <Input
                                            id="password"
                                            type="password"
                                            placeholder="Enter your password"
                                            autoComplete="current-password"
                                            className="pl-11"
                                        />
                                    </div>
                                </motion.div>

                                <motion.div
                                    variants={fadeUp}
                                    className="pt-2"
                                >
                                    <Button
                                        type="submit"
                                        className="group h-12 w-full justify-between px-5"
                                    >
                                        <span>Enter AXION</span>

                                        <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                                    </Button>
                                </motion.div>
                            </form>

                            {/* divider */}
                            <div className="my-7 flex items-center gap-4">
                                <div className="h-px flex-1 bg-zinc-900" />

                                <span className="text-[9px] uppercase tracking-[0.2em] text-zinc-700">
                                    or
                                </span>

                                <div className="h-px flex-1 bg-zinc-900" />
                            </div>

                            {/* google */}
                            <motion.div variants={fadeUp}>
                                <Button
                                    type="button"
                                    variant="outline"
                                    className="h-12 w-full border-zinc-800 bg-black/30"
                                >
                                    <span className="flex size-5 items-center justify-center text-sm font-semibold">
                                        G
                                    </span>

                                    Continue with Google
                                </Button>
                            </motion.div>

                            {/* signup */}
                            <motion.div
                                variants={fadeUp}
                                className="mt-8 text-center"
                            >
                                <p className="text-xs text-zinc-600">
                                    New to AXION?
                                    <Link
                                        href="/signup"
                                        className="ml-2 text-zinc-300 transition-colors hover:text-[#DC2626]"
                                    >
                                        Create an account
                                    </Link>
                                </p>
                            </motion.div>

                            {/* security */}
                            <motion.div
                                variants={fadeUp}
                                className="mt-12 flex items-center justify-center gap-2 text-[9px] uppercase tracking-[0.18em] text-zinc-700"
                            >
                                <ShieldCheck className="size-3.5" />
                                Secure member authentication
                            </motion.div>

                        </motion.div>
                    </section>
                </div>
            </motion.div>

            {/* =========================================================
          BOTTOM EDGE MARK
      ========================================================= */}

            <div className="pointer-events-none absolute bottom-5 left-13 z-20 hidden items-center gap-3 text-[8px] uppercase tracking-[0.25em] text-zinc-700 lg:flex">
                <span>AXN / 001</span>
                <span className="h-px w-8 bg-zinc-800" />
                <span>Performance division</span>
            </div>
        </main>
    )
}