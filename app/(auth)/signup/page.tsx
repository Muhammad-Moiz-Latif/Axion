"use client"

import { Arimo } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import {
    ArrowRight,
    ChevronLeft,
    LockKeyhole,
    Mail,
    ShieldCheck,
    UserRound,
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
            staggerChildren: 0.07,
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
            duration: 0.5,
            ease: "easeOut",
        },
    },
}

export default function SignupPage() {
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

            <div className="absolute inset-0 bg-black/60" />

            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />

            {/* =========================================================
          HEADER
      ========================================================= */}

            <motion.header
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute left-3 top-0 z-30 flex w-full items-center justify-between px-6 py-5 md:px-10"
            >
                <Link
                    href="/"
                    className="group flex items-center gap-3"
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
            </motion.header>

            {/* =========================================================
          CONTENT
      ========================================================= */}

            <motion.div
                variants={pageVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 grid min-h-screen w-full grid-cols-1 lg:grid-cols-[1fr_0.9fr]"
            >

                {/* =======================================================
            LEFT
        ======================================================= */}

                <section className="hidden min-h-screen flex-col justify-center px-10 pb-14 lg:flex xl:px-16">

                    <motion.div
                        variants={fadeUp}
                        className="mb-8 flex items-center gap-3"
                    >
                        <span className="h-px w-10 bg-[#DC2626]" />

                        <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400">
                            Begin your protocol
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={fadeUp}
                        className="max-w-xl text-6xl font-semibold leading-[0.94] tracking-[-0.05em] xl:text-7xl"
                    >
                        Your next
                        <br />
                        version is
                        <br />
                        <span className="text-[#DC2626]">built.</span>
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        className="mt-6 max-w-md text-sm leading-6 text-zinc-400"
                    >
                        AXION turns training into something measurable.
                        Build the body. Track the work. See what changes.
                    </motion.p>

                    <motion.div
                        variants={fadeUp}
                        className="mt-10 flex items-center gap-3"
                    >
                        <span className="size-1.5 rounded-full bg-[#DC2626] shadow-[0_0_10px_rgba(220,38,38,0.8)]" />

                        <span className="text-[9px] uppercase tracking-[0.25em] text-zinc-600">
                            Precision training system
                        </span>
                    </motion.div>
                </section>

                {/* =======================================================
            FORM
        ======================================================= */}

                <section className="flex items-center justify-center border-l border-white/[0.05] bg-black/30 px-5 py-24 backdrop-blur-[2px] sm:px-8 lg:px-12 xl:px-20">

                    <motion.div
                        variants={fadeUp}
                        className="w-full max-w-[430px]"
                    >

                        {/* heading */}
                        <div className="mb-8">
                            <div className="mb-4 flex items-center gap-2">
                                <span className="text-[10px] uppercase tracking-[0.25em] text-[#DC2626]">
                                    New member
                                </span>

                                <span className="h-px w-8 bg-[#DC2626]/50" />
                            </div>

                            <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                                Start building.
                            </h2>

                            <p className="mt-3 text-sm leading-6 text-zinc-500">
                                Create your account and start your performance journey.
                            </p>
                        </div>

                        <form className="space-y-4">

                            {/* name */}
                            <motion.div variants={fadeUp}>
                                <label
                                    htmlFor="name"
                                    className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-zinc-500"
                                >
                                    Full name
                                </label>

                                <div className="relative">
                                    <UserRound className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-zinc-600" />

                                    <Input
                                        id="name"
                                        type="text"
                                        placeholder="Your name"
                                        autoComplete="name"
                                        className="pl-11"
                                    />
                                </div>
                            </motion.div>

                            {/* email */}
                            <motion.div variants={fadeUp}>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-zinc-500"
                                >
                                    Email address
                                </label>

                                <div className="relative">
                                    <Mail className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-zinc-600" />

                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="you@example.com"
                                        autoComplete="email"
                                        className="pl-11"
                                    />
                                </div>
                            </motion.div>

                            {/* password */}
                            <motion.div variants={fadeUp}>
                                <label
                                    htmlFor="password"
                                    className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-zinc-500"
                                >
                                    Password
                                </label>

                                <div className="relative">
                                    <LockKeyhole className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-zinc-600" />

                                    <Input
                                        id="password"
                                        type="password"
                                        placeholder="Create a secure password"
                                        autoComplete="new-password"
                                        className="pl-11"
                                    />
                                </div>

                                <div className="mt-2 flex gap-1">
                                    <span className="h-[2px] flex-1 bg-zinc-800" />
                                    <span className="h-[2px] flex-1 bg-zinc-800" />
                                    <span className="h-[2px] flex-1 bg-zinc-800" />
                                    <span className="h-[2px] flex-1 bg-zinc-900" />
                                </div>

                                <p className="mt-1 text-[9px] text-zinc-700">
                                    Use at least 8 characters.
                                </p>
                            </motion.div>

                            {/* submit */}
                            <motion.div
                                variants={fadeUp}
                                className="pt-2"
                            >
                                <Button
                                    type="submit"
                                    className="group h-12 w-full justify-between px-5"
                                >
                                    <span>Create your account</span>

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

                                Register with Google
                            </Button>
                        </motion.div>

                        {/* login */}
                        <motion.div
                            variants={fadeUp}
                            className="mt-8 text-center"
                        >
                            <p className="text-xs text-zinc-600">
                                Already a member?
                                <Link
                                    href="/login"
                                    className="ml-2 text-zinc-300 transition-colors hover:text-[#DC2626]"
                                >
                                    Sign in
                                </Link>
                            </p>
                        </motion.div>

                        {/* security */}
                        <motion.div
                            variants={fadeUp}
                            className="mt-10 flex items-center justify-center gap-2 text-[9px] uppercase tracking-[0.18em] text-zinc-700"
                        >
                            <ShieldCheck className="size-3.5" />
                            Your data stays yours
                        </motion.div>

                    </motion.div>
                </section>
            </motion.div>

            {/* bottom metadata */}
            <div className="pointer-events-none absolute bottom-5 left-13 z-20 hidden items-center gap-3 text-[8px] uppercase tracking-[0.25em] text-zinc-700 lg:flex">
                <span>AXN / 002</span>
                <span className="h-px w-8 bg-zinc-800" />
                <span>Member onboarding</span>
            </div>
        </main>
    )
}