"use client"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import NavBar from "@/components/Nav"
import JoinUs from "@/components/JoinUs"
import { Footer } from "@/components/Footer"

import { Arimo } from "next/font/google"
import { motion, type Variants } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

const arimo = Arimo({
    variable: "--font-arimo",
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
})

const reveal: Variants = {
    hidden: {
        opacity: 0,
        y: 24,
        filter: "blur(6px)",
    },

    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
        },
    },
}

const fieldReveal: Variants = {
    hidden: {
        opacity: 0,
        x: -12,
    },

    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
        },
    },
}

const infoReveal: Variants = {
    hidden: {
        opacity: 0,
        x: 15,
    },

    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
        },
    },
}

export default function ContactPage() {
    const contactRef = useRef<HTMLElement | null>(null)

    const isInView = useInView(contactRef, {
        once: true,
        amount: 0.15,
    })

    return (
        <main className={`${arimo.className} min-h-screen bg-[#030303] text-white`}>
            <NavBar />

            {/* =========================================================
          CONTACT EXPERIENCE
      ========================================================= */}

            <motion.section
                ref={contactRef}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="relative min-h-screen overflow-hidden pt-24"
            >
                {/* =====================================================
            BACKGROUND SYSTEM
        ===================================================== */}

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

                <div
                    className="
            pointer-events-none
            absolute
            left-[45%]
            top-[25%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-red-600/[0.025]
            blur-[150px]
          "
                />

                {/* Architectural corners */}

                <div className="pointer-events-none absolute left-5 top-28 h-10 w-10 border-l border-t border-white/[0.08] md:left-10" />

                <div className="pointer-events-none absolute right-5 top-28 h-10 w-10 border-r border-t border-white/[0.08] md:right-10" />

                <div className="pointer-events-none absolute bottom-8 left-5 h-10 w-10 border-b border-l border-white/[0.08] md:left-10" />

                <div className="pointer-events-none absolute bottom-8 right-5 h-10 w-10 border-b border-r border-white/[0.08] md:right-10" />

                {/* =====================================================
            CONTENT
        ===================================================== */}

                <div className="relative mx-auto max-w-[1500px] px-6 pb-24 md:px-10 lg:px-14 lg:pb-32">
                    {/* ===================================================
              SYSTEM HEADER
          =================================================== */}

                    <motion.div
                        variants={reveal}
                        className="flex items-center justify-between border-b border-white/[0.08] py-5"
                    >
                        <div className="flex items-center gap-3">
                            <span className="size-1.5 bg-red-600 shadow-[0_0_10px_rgba(220,38,38,.7)]" />

                            <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-red-500">
                                AXION / CONTACT
                            </span>
                        </div>

                        <span className="hidden font-mono text-[8px] uppercase tracking-[0.22em] text-white/25 sm:block">
                            COMMUNICATION CHANNEL / 001
                        </span>
                    </motion.div>

                    {/* ===================================================
              HERO COPY
          =================================================== */}

                    <div className="grid gap-12 pb-20 pt-16 lg:grid-cols-[1fr_0.45fr] lg:items-end lg:pt-24">
                        <div>
                            <motion.div
                                variants={reveal}
                                className="mb-6 flex items-center gap-3"
                            >
                                <span className="h-px w-10 bg-red-500" />

                                <span className="text-[8px] uppercase tracking-[0.38em] text-white/35">
                                    Open Channel
                                </span>
                            </motion.div>

                            <motion.h1
                                variants={reveal}
                                className="
                  max-w-5xl
                  text-[clamp(4rem,8vw,9rem)]
                  font-semibold
                  leading-[0.78]
                  tracking-[-0.075em]
                "
                            >
                                <span className="block text-white">
                                    Start a
                                </span>

                                <span className="block text-white/35">
                                    conversation.
                                </span>
                            </motion.h1>

                            <motion.p
                                variants={reveal}
                                className="mt-8 max-w-xl text-sm leading-7 text-white/35"
                            >
                                Questions about Axion, membership, training or partnerships?
                                Send us a signal. Our team will get back to you.
                            </motion.p>
                        </div>

                        {/* =================================================
                RIGHT TELEMETRY
            ================================================= */}

                        <motion.div
                            variants={infoReveal}
                            className="hidden justify-self-end lg:block"
                        >
                            <div className="flex items-center gap-4">
                                <div className="h-px w-12 bg-white/10" />

                                <div className="text-right">
                                    <p className="font-mono text-[7px] uppercase tracking-[0.28em] text-white/25">
                                        Channel
                                    </p>

                                    <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.18em] text-white/50">
                                        HUMAN / SUPPORT
                                    </p>

                                    <div className="mt-2 flex items-center justify-end gap-2">
                                        <span className="size-1 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,.6)]" />

                                        <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/25">
                                            ONLINE
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* ===================================================
              CONTACT SYSTEM
          =================================================== */}

                    <div className="grid border-y border-white/[0.08] lg:grid-cols-[1.15fr_0.85fr]">
                        {/* =================================================
                FORM
            ================================================= */}

                        <motion.div
                            variants={reveal}
                            className="border-b border-white/[0.08] lg:border-b-0 lg:border-r"
                        >
                            {/* Form header */}

                            <div className="flex items-center justify-between border-b border-white/[0.07] px-6 py-5 md:px-8">
                                <div>
                                    <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-red-500">
                                        MESSAGE / 001
                                    </p>

                                    <h2 className="mt-2 text-lg font-medium tracking-[-0.02em] text-white">
                                        Send us a signal.
                                    </h2>
                                </div>

                                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/25">
                                    INPUT
                                </span>
                            </div>

                            <form className="p-6 md:p-8">
                                <div className="grid gap-7 md:grid-cols-2">
                                    {/* Name */}

                                    <motion.div variants={fieldReveal}>
                                        <label
                                            htmlFor="name"
                                            className="mb-3 block font-mono text-[7px] uppercase tracking-[0.25em] text-white/25"
                                        >
                                            01 / Name
                                        </label>

                                        <Input
                                            id="name"
                                            type="text"
                                            placeholder="YOUR NAME"
                                            className="
                                                h-12
                                                rounded-none
                                                border-0
                                                border-b
                                                border-white/10
                                                bg-transparent
                                                px-0
                                                text-[10px]
                                                uppercase
                                                tracking-[0.12em]
                                                text-white
                                                outline-none
                                                transition-colors
                                                placeholder:text-white/25
                                                focus:border-red-600
                                                focus-visible:ring-0
                                                focus-visible:ring-offset-0
                                            "
                                        />
                                    </motion.div>

                                    {/* Email */}

                                    <motion.div variants={fieldReveal}>
                                        <label
                                            htmlFor="email"
                                            className="mb-3 block font-mono text-[7px] uppercase tracking-[0.25em] text-white/25"
                                        >
                                            02 / Email
                                        </label>

                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="YOUR EMAIL"
                                            className="
                        h-12
                        rounded-none
                        border-0
                        border-b
                        border-white/10
                        bg-transparent
                        px-0
                        text-[10px]
                        uppercase
                        tracking-[0.12em]
                        text-white
                        outline-none
                        shadow-none
                        transition-colors
                        placeholder:text-white/25
                        focus:border-red-600
                        focus-visible:ring-0
                        focus-visible:ring-offset-0
                      "
                                        />
                                    </motion.div>
                                </div>

                                {/* Subject */}

                                <motion.div variants={fieldReveal} className="mt-7">
                                    <label
                                        htmlFor="subject"
                                        className="mb-3 block font-mono text-[7px] uppercase tracking-[0.25em] text-white/25"
                                    >
                                        03 / Subject
                                    </label>

                                    <Input
                                        id="subject"
                                        type="text"
                                        placeholder="WHAT CAN WE HELP WITH?"
                                        className="
                      h-12
                      rounded-none
                      border-0
                      border-b
                      border-white/10
                      bg-transparent
                      px-0
                      text-[10px]
                      uppercase
                      tracking-[0.12em]
                      text-white
                      outline-none
                      shadow-none
                      transition-colors
                      placeholder:text-white/25
                      focus:border-red-600
                      focus-visible:ring-0
                      focus-visible:ring-offset-0
                    "
                                    />
                                </motion.div>

                                {/* Message */}

                                <motion.div variants={fieldReveal} className="mt-7">
                                    <label
                                        htmlFor="message"
                                        className="mb-3 block font-mono text-[7px] uppercase tracking-[0.25em] text-white/25"
                                    >
                                        04 / Message
                                    </label>

                                    <Textarea
                                        id="message"
                                        placeholder="WRITE YOUR MESSAGE"
                                        rows={6}
                                        className="
                      min-h-[150px]
                      resize-none
                      rounded-none
                      border-0
                      border-b
                      border-white/10
                      bg-transparent
                      px-0
                      py-3
                      text-[10px]
                      uppercase
                      leading-6
                      tracking-[0.12em]
                      text-white
                      outline-none
                      shadow-none
                      transition-colors
                      placeholder:text-white/25
                      focus:border-red-600
                      focus-visible:ring-0
                      focus-visible:ring-offset-0
                    "
                                    />
                                </motion.div>

                                {/* Submit */}

                                <motion.div
                                    variants={fieldReveal}
                                    className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
                                >
                                    <p className="max-w-[250px] font-mono text-[7px] uppercase leading-5 tracking-[0.18em] text-white/25">
                                        Your information is used only to respond to your
                                        communication.
                                    </p>

                                    <motion.button
                                        type="submit"
                                        whileTap={{ scale: 0.98 }}
                                        className="
                      group
                      relative
                      flex
                      h-12
                      shrink-0
                      items-center
                      justify-center
                      overflow-hidden
                      bg-red-600
                      px-8
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.16em]
                      text-white
                    "
                                    >
                                        <span
                                            className="
                        absolute
                        inset-0
                        -translate-x-full
                        bg-white
                        transition-transform
                        duration-500
                        ease-[cubic-bezier(.22,1,.36,1)]
                        group-hover:translate-x-0
                      "
                                        />

                                        <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                                            Send Message
                                        </span>

                                        <span className="relative z-10 ml-4 transition-all duration-300 group-hover:translate-x-1 group-hover:text-black">
                                            →
                                        </span>
                                    </motion.button>
                                </motion.div>
                            </form>
                        </motion.div>

                        {/* =================================================
                INFORMATION PANEL
            ================================================= */}

                        <motion.div
                            variants={infoReveal}
                            className="relative"
                        >
                            {/* Contact details */}

                            <div className="border-b border-white/[0.07] p-6 md:p-8">
                                <div className="flex items-center justify-between">
                                    <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-red-500">
                                        DIRECTORY
                                    </p>

                                    <span className="font-mono text-[8px] text-white/10">
                                        01
                                    </span>
                                </div>

                                <div className="mt-8 space-y-7">
                                    {/* Email */}

                                    <div>
                                        <p className="font-mono text-[7px] uppercase tracking-[0.25em] text-white/25">
                                            Email
                                        </p>

                                        <a
                                            href="mailto:support@axionfitness.com"
                                            className="mt-2 block text-sm text-white/55 transition-colors hover:text-white"
                                        >
                                            support@axionfitness.com
                                        </a>
                                    </div>

                                    {/* Phone */}

                                    <div>
                                        <p className="font-mono text-[7px] uppercase tracking-[0.25em] text-white/25">
                                            Phone
                                        </p>

                                        <a
                                            href="tel:+15551234567"
                                            className="mt-2 block text-sm text-white/55 transition-colors hover:text-white"
                                        >
                                            +1 (555) 123-4567
                                        </a>
                                    </div>

                                    {/* Location */}

                                    <div>
                                        <p className="font-mono text-[7px] uppercase tracking-[0.25em] text-white/25">
                                            Location
                                        </p>

                                        <p className="mt-2 text-sm leading-6 text-white/45">
                                            123 Fitness Blvd,
                                            <br />
                                            Suite 456,
                                            <br />
                                            Metropolis, CA 90210
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* =================================================
                  RESPONSE INFO
              ================================================= */}

                            <div className="border-b border-white/[0.07] p-6 md:p-8">
                                <div className="flex items-center justify-between">
                                    <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-red-500">
                                        RESPONSE PROTOCOL
                                    </p>

                                    <span className="font-mono text-[8px] text-white/10">
                                        02
                                    </span>
                                </div>

                                <div className="mt-7">
                                    <div className="flex items-end justify-between">
                                        <span className="text-2xl font-medium tracking-[-0.04em] text-white/75">
                                            &lt; 24H
                                        </span>

                                        <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/25">
                                            Typical response
                                        </span>
                                    </div>

                                    <div className="mt-4 h-px bg-white/[0.08]">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "78%" }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 1.2,
                                                delay: 0.5,
                                                ease: [0.16, 1, 0.3, 1],
                                            }}
                                            className="h-px bg-red-600"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* =================================================
                  SOCIAL
              ================================================= */}

                            <div className="p-6 md:p-8">
                                <div className="flex items-center justify-between">
                                    <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-red-500">
                                        CONNECT
                                    </p>

                                    <span className="font-mono text-[8px] text-white/10">
                                        03
                                    </span>
                                </div>

                                <div className="mt-7 grid grid-cols-2 gap-x-8 gap-y-4">
                                    {["Instagram", "YouTube", "LinkedIn", "Facebook"].map(
                                        (social) => (
                                            <a
                                                key={social}
                                                href="#"
                                                className="group flex items-center justify-between border-b border-white/[0.06] pb-3 text-[9px] uppercase tracking-[0.12em] text-white/30 transition-colors hover:text-white"
                                            >
                                                <span>{social}</span>

                                                <span className="text-red-500 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                                                    ↗
                                                </span>
                                            </a>
                                        )
                                    )}
                                </div>
                            </div>

                            {/* Scan line */}

                            <motion.div
                                initial={{ x: "-100%" }}
                                whileInView={{ x: "100%" }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 1.8,
                                    delay: 0.6,
                                    ease: "linear",
                                }}
                                className="
                  pointer-events-none
                  absolute
                  left-0
                  top-0
                  h-px
                  w-1/3
                  bg-gradient-to-r
                  from-transparent
                  via-red-500
                  to-transparent
                "
                            />
                        </motion.div>
                    </div>

                    {/* ===================================================
              BOTTOM SYSTEM BAR
          =================================================== */}

                    <motion.div
                        variants={reveal}
                        className="flex flex-col gap-4 border-b border-white/[0.08] py-5 sm:flex-row sm:items-center sm:justify-between"
                    >
                        <div className="flex items-center gap-3">
                            <span className="size-1 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,.7)]" />

                            <span className="font-mono text-[7px] uppercase tracking-[0.25em] text-white/25">
                                COMMUNICATION CHANNEL ACTIVE
                            </span>
                        </div>

                        <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/10">
                            AXION / SUPPORT SYSTEM / 2026
                        </span>
                    </motion.div>
                </div>
            </motion.section>

            {/* =========================================================
          GLOBAL CTA
      ========================================================= */}

            <JoinUs />

            {/* =========================================================
          GLOBAL FOOTER
      ========================================================= */}

            <Footer />
        </main>
    )
}