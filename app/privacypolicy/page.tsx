"use client"

import NavBar from "@/components/Nav"
import JoinUs from "@/components/JoinUs"
import { Footer } from "@/components/Footer"

import { Arimo } from "next/font/google"
import { motion, type Variants, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"

import bg from "../../assets/pexels-edgarlara-14265040.jpg"

const arimo = Arimo({
  variable: "--font-arimo",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

const privacySections = [
  {
    number: "01",
    title: "Information We Collect",
    intro:
      "We collect various types of information to provide and improve our services to you. This includes:",
    content: (
      <ul className="space-y-4">
        <li>
          <span className="italic text-red-500/80">
            Personal Identifiable Information (PII):
          </span>{" "}
          Such as your name, email address, and payment information when you
          register for an account or make a purchase.
        </li>

        <li>
          <span className="italic text-red-500/80">
            Usage Data:
          </span>{" "}
          Information on how the service is accessed and used, including IP
          addresses, browser types, pages visited, and time spent on those
          pages.
        </li>

        <li>
          <span className="italic text-red-500/80">
            Fitness and Health Data:
          </span>{" "}
          Information you provide related to your fitness goals, workout logs,
          nutrition intake, and biometric data (e.g., heart rate, calories
          burned) if you choose to share it.
        </li>
      </ul>
    ),
  },
  {
    number: "02",
    title: "How We Use Your Information",
    intro:
      "The information we collect is used for various purposes, including:",
    content: (
      <ul className="space-y-4">
        <li>
          To provide and maintain our service, including personalized workout
          and nutrition plans.
        </li>

        <li>To notify you about changes to our service.</li>

        <li>
          To allow you to participate in interactive features of our service
          when you choose to do so.
        </li>

        <li>To provide customer support.</li>

        <li>To monitor the usage of our service.</li>

        <li>To detect, prevent, and address technical issues.</li>

        <li>
          To provide you with news, special offers, and general information
          about other goods, services, and events which we offer that are
          similar to those that you have already purchased or enquired about
          unless you have opted not to receive such information.
        </li>
      </ul>
    ),
  },
  {
    number: "03",
    title: "Data Security",
    content: (
      <p>
        The security of your data is paramount to us. We implement a variety
        of security measures to maintain the safety of your personal
        information when you enter, submit, or access your personal
        information. These measures include encryption, firewalls, and secure
        socket layer (SSL) technology. However, no method of transmission over
        the Internet or method of electronic storage is 100% secure.
      </p>
    ),
  },
  {
    number: "04",
    title: "Your Data Protection Rights",
    intro:
      "Depending on your location, you may have the following data protection rights:",
    content: (
      <>
        <ul className="space-y-4">
          <li>The right to access, update, or delete the information we have on you.</li>
          <li>The right of rectification.</li>
          <li>The right to object.</li>
          <li>The right of restriction.</li>
          <li>The right to data portability.</li>
          <li>The right to withdraw consent.</li>
        </ul>

        <p className="mt-7">
          If you wish to exercise any of these rights, please contact us at{" "}
          <Link
            href="/contact"
            className="text-red-500 transition-colors hover:text-red-400"
          >
            support@axionfitness.com
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    number: "05",
    title: "Changes to This Privacy Policy",
    content: (
      <p>
        We may update our Privacy Policy from time to time. We will notify you
        of any changes by posting the new Privacy Policy on this page. You are
        advised to review this Privacy Policy periodically for any changes.
      </p>
    ),
  },
]

const revealVariants: Variants = {
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

const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -15,
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

const sidebarVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 18,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

export default function PrivacyPolicyPage() {
  const pageRef = useRef<HTMLElement | null>(null)

  const isInView = useInView(pageRef, {
    once: true,
    amount: 0.08,
  })

  return (
    <main className={`${arimo.className} min-h-screen bg-[#030303] text-white`}>
      <NavBar />

      <motion.section
        ref={pageRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative overflow-hidden pt-24"
      >
        {/* ========================================================= */}
        {/* CINEMATIC BACKGROUND                                      */}
        {/* ========================================================= */}

        <div className="pointer-events-none absolute inset-0">
          <Image
            src={bg}
            alt=""
            fill
            priority
            className="object-cover object-center opacity-[0.24]"
          />

          {/* Main cinematic dark layer */}
          <div className="absolute inset-0 bg-black/65" />

          {/* Stronger fade toward the document */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(
                  to bottom,
                  rgba(0,0,0,0.38) 0%,
                  rgba(0,0,0,0.55) 25%,
                  rgba(3,3,3,0.88) 55%,
                  rgba(3,3,3,0.98) 100%
                )
              `,
            }}
          />

          {/* Technical grid */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255,255,255,.5) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,.5) 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
            }}
          />

          {/* Red atmosphere */}
          <div className="absolute left-[55%] top-[12%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-red-600/[0.03] blur-[150px]" />

          {/* Architectural horizontal line */}
          <div className="absolute left-0 top-[42%] h-px w-full bg-white/[0.035]" />
        </div>


        <div className="relative z-10 mx-auto max-w-[1500px] px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32">

          {/* ========================================================= */}
          {/* SYSTEM HEADER                                             */}
          {/* ========================================================= */}

          <motion.div
            variants={revealVariants}
            className="flex items-center justify-between border-b border-white/[0.08] py-5"
          >
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 bg-red-600 shadow-[0_0_10px_rgba(220,38,38,.7)]" />

              <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-red-500">
                AXION / PRIVACY PROTOCOL
              </span>
            </div>

            <span className="hidden font-mono text-[8px] uppercase tracking-[0.22em] text-white/20 sm:block">
              LEGAL DOCUMENT / 001
            </span>
          </motion.div>

          {/* ========================================================= */}
          {/* HERO                                                       */}
          {/* ========================================================= */}

          <div className="grid gap-12 py-16 lg:grid-cols-[1fr_0.42fr] lg:items-end lg:py-24">
            <div>
              <motion.div
                variants={revealVariants}
                className="mb-6 flex items-center gap-3"
              >
                <span className="h-px w-10 bg-red-500" />

                <span className="font-mono text-[8px] uppercase tracking-[0.32em] text-white/30">
                  Completely Transparent
                </span>
              </motion.div>

              <motion.h1
                variants={revealVariants}
                className="
                  max-w-5xl
                  text-[clamp(4rem,8vw,9rem)]
                  font-semibold
                  leading-[0.78]
                  tracking-[-0.075em]
                "
              >
                <span className="block text-white">
                  Our Privacy
                </span>

                <span className="block text-white/30">
                  Policy.
                </span>
              </motion.h1>

              <motion.p
                variants={revealVariants}
                className="mt-8 max-w-xl text-sm leading-7 text-white/35"
              >
                How Axion collects, uses, protects and manages the information
                you choose to share with us.
              </motion.p>
            </div>

            {/* Legal metadata */}
            <motion.div
              variants={sidebarVariants}
              className="hidden justify-self-end lg:block"
            >
              <div className="w-[230px] border-l border-white/[0.08] pl-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[7px] uppercase tracking-[0.25em] text-white/20">
                    Document
                  </span>

                  <span className="font-mono text-[8px] text-red-500">
                    001
                  </span>
                </div>

                <div className="mt-7">
                  <p className="font-mono text-[7px] uppercase tracking-[0.25em] text-white/20">
                    Status
                  </p>

                  <p className="mt-2 text-sm text-white/60">
                    CURRENT / ACTIVE
                  </p>
                </div>

                <div className="mt-6 h-px bg-white/[0.08]">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.1,
                      delay: 0.4,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="h-px bg-red-600"
                  />
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/15">
                    Last Updated
                  </span>

                  <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-white/30">
                    AUG / 2025
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ========================================================= */}
          {/* DOCUMENT INTERFACE                                        */}
          {/* ========================================================= */}

          <div className="grid border-y border-white/[0.08] lg:grid-cols-[1fr_0.28fr]">

            {/* Document */}
            <div className="border-b border-white/[0.08] lg:border-b-0 lg:border-r">

              <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-5 md:px-8">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-red-500">
                    POLICY / 001
                  </span>

                  <span className="h-px w-8 bg-white/10" />

                  <span className="hidden font-mono text-[8px] uppercase tracking-[0.2em] text-white/20 sm:block">
                    Data Protection
                  </span>
                </div>

                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/10">
                  05 SECTIONS
                </span>
              </div>

              <div className="divide-y divide-white/[0.07]">
                {privacySections.map((section) => (
                  <motion.article
                    key={section.number}
                    variants={sectionVariants}
                    className="group relative px-5 py-10 md:px-8 md:py-12 lg:px-10"
                  >
                    {/* Red active edge */}
                    <div className="absolute left-0 top-0 h-full w-px bg-transparent transition-colors duration-500 group-hover:bg-red-600" />

                    <div className="grid gap-7 md:grid-cols-[90px_1fr]">

                      {/* Number */}
                      <div>
                        <span className="font-mono text-[10px] tracking-[0.2em] text-red-500/70">
                          {section.number}
                        </span>

                        <div className="mt-4 h-px w-8 bg-white/10 transition-all duration-500 group-hover:w-12 group-hover:bg-red-600/60" />
                      </div>

                      {/* Content */}
                      <div>
                        <h2 className="text-2xl font-medium tracking-[-0.04em] text-white md:text-3xl">
                          {section.title}
                        </h2>

                        {section.intro && (
                          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/45">
                            {section.intro}
                          </p>
                        )}

                        <div className="mt-6 max-w-2xl text-xs leading-7 text-white/30 md:text-sm">
                          {section.content}
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>

            {/* ======================================================= */}
            {/* SIDEBAR                                                  */}
            {/* ======================================================= */}

            <motion.aside
              variants={sidebarVariants}
              className="hidden lg:block"
            >
              <div className="sticky top-28">

                {/* Contents */}
                <div className="border-b border-white/[0.07] p-7">
                  <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-red-500">
                    DOCUMENT INDEX
                  </p>

                  <div className="mt-7 space-y-5">
                    {privacySections.map((section) => (
                      <div
                        key={section.number}
                        className="flex items-center gap-3"
                      >
                        <span className="font-mono text-[7px] text-white/15">
                          {section.number}
                        </span>

                        <span className="h-px w-3 bg-white/[0.08]" />

                        <span className="truncate text-[8px] uppercase tracking-[0.1em] text-white/20">
                          {section.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Privacy principle */}
                <div className="border-b border-white/[0.07] p-7">
                  <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-red-500">
                    AXION PRINCIPLE
                  </p>

                  <p className="mt-5 text-xl font-medium leading-tight tracking-[-0.03em] text-white/65">
                    Your data should work
                    <span className="text-white/25">
                      {" "}
                      for you.
                    </span>
                  </p>

                  <p className="mt-4 text-xs leading-6 text-white/25">
                    We aim to be clear about what information we collect and
                    why we need it.
                  </p>
                </div>

                {/* Contact */}
                <div className="p-7">
                  <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-red-500">
                    QUESTIONS
                  </p>

                  <p className="mt-4 text-sm leading-6 text-white/40">
                    Need clarification about your data?
                  </p>

                  <Link
                    href="/contact"
                    className="
                      group
                      mt-6
                      inline-flex
                      items-center
                      gap-3
                      border-b
                      border-white/10
                      pb-2
                      text-[9px]
                      uppercase
                      tracking-[0.15em]
                      text-white/50
                      transition-colors
                      hover:border-red-600
                      hover:text-white
                    "
                  >
                    Contact Support

                    <span className="text-red-500 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>

                {/* Data node */}
                <div className="relative mx-7 mt-8 h-32 overflow-hidden border border-white/[0.06]">
                  <div className="absolute inset-0 opacity-40">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `
                          linear-gradient(to right, rgba(255,255,255,.3) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(255,255,255,.3) 1px, transparent 1px)
                        `,
                        backgroundSize: "24px 24px",
                      }}
                    />
                  </div>

                  <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-600/30">
                    <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600 shadow-[0_0_12px_rgba(220,38,38,.8)]" />
                  </div>

                  <motion.div
                    initial={{ y: "-100%" }}
                    whileInView={{ y: "200%" }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.8,
                      delay: 0.8,
                      ease: "linear",
                    }}
                    className="absolute left-0 h-px w-full bg-gradient-to-r from-transparent via-red-500/70 to-transparent"
                  />

                  <span className="absolute bottom-3 left-3 font-mono text-[6px] uppercase tracking-[0.2em] text-white/15">
                    AXION / SECURE DATA NODE
                  </span>
                </div>
              </div>
            </motion.aside>
          </div>

          {/* ========================================================= */}
          {/* TELEMETRY                                                 */}
          {/* ========================================================= */}

          <motion.div
            variants={revealVariants}
            className="flex flex-col gap-4 border-b border-white/[0.08] py-5 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-center gap-3">
              <span className="h-1 w-1 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,.7)]" />

              <span className="font-mono text-[7px] uppercase tracking-[0.25em] text-white/20">
                PRIVACY SYSTEM ACTIVE
              </span>
            </div>

            <div className="flex items-center gap-5">
              <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/10">
                DATA PROTECTION / ENABLED
              </span>

              <span className="hidden h-px w-8 bg-white/10 sm:block" />

              <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-red-500/50">
                AXION / 2026
              </span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <JoinUs />
      <Footer />
    </main>
  )
}
