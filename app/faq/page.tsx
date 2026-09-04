"use client"

import NavBar from "@/components/Nav"
import JoinUs from "@/components/JoinUs"
import { Footer } from "@/components/Footer"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import bg from "../../assets/brendan-stephens-0eFueVGCSqg-unsplash.jpg"
import Image from "next/image"
import { Arimo } from "next/font/google"
import { motion, type Variants, useInView } from "framer-motion"
import { useRef } from "react"

const arimo = Arimo({
  variable: "--font-arimo",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

const faqItems = [
  {
    question: "What is Axion Fitness?",
    answer:
      "Axion Fitness is a performance platform built around personalized training, nutrition guidance, coaching, and measurable progress. The system is designed to give you structure while adapting to your goals, performance, and development over time.",
  },
  {
    question: "How do your personalized workout plans work?",
    answer:
      "Your training is built around your current fitness level, goals, available equipment, and progression. As you train and record results, your programming can evolve so that the system continues to challenge you without losing sight of recovery and consistency.",
  },
  {
    question: "Do you offer nutrition planning?",
    answer:
      "Yes. Axion provides nutrition guidance designed to work alongside your training. The goal is not simply to give you a meal plan, but to create a practical strategy that supports performance, recovery, body composition, and long-term adherence.",
  },
  {
    question: "What kind of coaching is available?",
    answer:
      "Axion offers 1-on-1 coaching with certified trainers who can provide guidance, feedback, accountability, and adjustments to your training approach. Coaching can be accessed remotely, allowing you to stay connected wherever you train.",
  },
  {
    question: "Are there fitness challenges?",
    answer:
      "Yes. Challenges are designed to introduce additional structure and accountability into your training. You can track progress, compete with other members, and use milestones as another way to stay consistent.",
  },
  {
    question: "What is the difference between Annual/Quarterly and Lifetime plans?",
    answer:
      "Annual and Quarterly memberships provide access through a recurring subscription. Lifetime provides permanent access through a one-time payment, including access to current features and eligible future updates, along with additional member benefits.",
  },
  {
    question: "Can I try Axion for free?",
    answer:
      "Axion does not currently offer a free trial. If you are not satisfied with the service, our 30-day money-back guarantee gives you time to evaluate whether the system is right for you.",
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

const itemVariants: Variants = {
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

const statusVariants: Variants = {
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

export default function FAQPage() {
  const faqRef = useRef<HTMLElement | null>(null)

  const isInView = useInView(faqRef, {
    once: true,
    amount: 0.12,
  })

  return (
    <main className={`${arimo.className} min-h-screen bg-[#030303] text-white`}>
      <NavBar />

      <motion.section
        ref={faqRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative min-h-screen overflow-hidden pt-24"
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
            className="object-cover object-center"
          />

          {/* Heavy cinematic darkening */}
          <div className="absolute inset-0 bg-black/65" />

          {/* Darker lower area for the FAQ interface */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(
                  to bottom,
                  rgba(0,0,0,0.45) 0%,
                  rgba(0,0,0,0.55) 28%,
                  rgba(3,3,3,0.82) 58%,
                  rgba(3,3,3,0.98) 100%
                )
              `,
            }}
          />

          {/* Subtle red atmosphere */}
          <div className="absolute left-[58%] top-[18%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-red-600/[0.035] blur-[150px]" />

          {/* Technical grid */}
          <div
            className="absolute inset-0 opacity-[0.028]"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255,255,255,.5) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,.5) 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
            }}
          />

          {/* Horizontal architectural line */}
          <div className="absolute left-0 top-[46%] h-px w-full bg-white/[0.035]" />
        </div>

        {/* Architectural corners */}
        <div className="pointer-events-none absolute bottom-8 left-5 z-10 h-10 w-10 border-b border-l border-white/[0.08] md:left-10" />
        <div className="pointer-events-none absolute bottom-8 right-5 z-10 h-10 w-10 border-b border-r border-white/[0.08] md:right-10" />

        {/* ========================================================= */}
        {/* CONTENT                                                    */}
        {/* ========================================================= */}

        <div className="relative z-10 mx-auto max-w-[1500px] px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32">

          {/* System header */}
          <motion.div
            variants={revealVariants}
            className="flex items-center justify-between border-b border-white/[0.08] py-5"
          >
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 bg-red-600 shadow-[0_0_10px_rgba(220,38,38,.7)]" />

              <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-red-500">
                AXION / KNOWLEDGE BASE
              </span>
            </div>

            <span className="hidden font-mono text-[8px] uppercase tracking-[0.22em] text-white/25 sm:block">
              FREQUENTLY ASKED / 001
            </span>
          </motion.div>

          {/* Hero */}
          <div className="grid gap-12 py-16 lg:grid-cols-[1fr_0.42fr] lg:items-end lg:py-24">
            <div>
              <motion.div
                variants={revealVariants}
                className="mb-6 flex items-center gap-3"
              >
                <span className="h-px w-10 bg-red-500" />

                <span className="font-mono text-[8px] uppercase tracking-[0.32em] text-white/30">
                  System Reference
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
                  Questions.
                </span>

                <span className="block text-white/30">
                  Clear answers.
                </span>
              </motion.h1>

              <motion.p
                variants={revealVariants}
                className="mt-8 max-w-xl text-sm leading-7 text-white/35"
              >
                Everything you need to understand the Axion system, from
                training and nutrition to membership, coaching and progression.
              </motion.p>
            </div>

            {/* Status readout */}
            <motion.div
              variants={statusVariants}
              className="hidden justify-self-end lg:block"
            >
              <div className="w-[220px] border-l border-white/[0.08] pl-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[7px] uppercase tracking-[0.25em] text-white/25">
                    Knowledge
                  </span>

                  <span className="font-mono text-[8px] text-red-500">
                    07
                  </span>
                </div>

                <div className="mt-7">
                  <p className="font-mono text-[7px] uppercase tracking-[0.25em] text-white/25">
                    Protocol
                  </p>

                  <p className="mt-2 text-sm text-white/60">
                    INFORMATION / ACTIVE
                  </p>
                </div>

                <div className="mt-6 h-px bg-white/[0.08]">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "82%" }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.2,
                      delay: 0.4,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="h-px bg-red-600"
                  />
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/25">
                    Database
                  </span>

                  <span className="flex items-center gap-2 font-mono text-[7px] uppercase tracking-[0.2em] text-white/25">
                    <span className="h-1 w-1 rounded-full bg-red-500" />
                    Online
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* FAQ interface */}
          <div className="grid border-y border-white/[0.08] lg:grid-cols-[1fr_0.28fr]">
            {/* Accordion */}
            <motion.div
              variants={revealVariants}
              className="border-b border-white/[0.08] bg-black/25 backdrop-blur-[2px] lg:border-b-0 lg:border-r"
            >
              <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-5 md:px-8">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-red-500">
                    FAQ / 001
                  </span>

                  <span className="h-px w-8 bg-white/10" />

                  <span className="hidden font-mono text-[8px] uppercase tracking-[0.2em] text-white/25 sm:block">
                    Reference Library
                  </span>
                </div>

                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/10">
                  {faqItems.length.toString().padStart(2, "0")} ENTRIES
                </span>
              </div>

              <Accordion
                type="single"
                collapsible
                className="w-full"
              >
                {faqItems.map((item, index) => (
                  <motion.div
                    key={item.question}
                    variants={itemVariants}
                  >
                    <AccordionItem
                      value={`item-${index}`}
                      className="border-b border-white/[0.07] px-5 last:border-b-0 md:px-8"
                    >
                      <AccordionTrigger
                        className="
                          group
                          py-7
                          text-left
                          hover:no-underline
                          [&>svg]:hidden
                        "
                      >
                        <div className="flex w-full items-start gap-5">
                          <span
                            className="
                              pt-1
                              font-mono
                              text-[8px]
                              tracking-[0.2em]
                              text-white/25
                              transition-colors
                              duration-300
                              group-data-[state=open]:text-red-500
                            "
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span
                            className="
                              flex-1
                              text-sm
                              font-medium
                              leading-6
                              tracking-[-0.01em]
                              text-white/65
                              transition-colors
                              duration-300
                              group-hover:text-white
                              group-data-[state=open]:text-white
                              md:text-base
                            "
                          >
                            {item.question}
                          </span>

                          <span
                            className="
                              flex
                              h-6
                              w-6
                              shrink-0
                              items-center
                              justify-center
                              border
                              border-white/10
                              font-mono
                              text-[11px]
                              font-normal
                              text-white/30
                              transition-all
                              duration-300
                              group-hover:border-white/20
                              group-hover:text-white
                              group-data-[state=open]:border-red-600
                              group-data-[state=open]:bg-red-600
                              group-data-[state=open]:text-white
                            "
                          >
                            <span className="transition-transform duration-300 group-data-[state=open]:rotate-45">
                              +
                            </span>
                          </span>
                        </div>
                      </AccordionTrigger>

                      <AccordionContent
                        className="
                          pb-8
                          pl-10
                          pr-8
                          text-xs
                          leading-7
                          text-white/30
                          md:pl-[3.25rem]
                          md:pr-16
                          md:text-sm
                        "
                      >
                        <div className="relative border-l border-red-600/40 pl-5">
                          <span className="absolute -left-[3px] top-2 h-1.5 w-1.5 bg-red-600" />

                          {item.answer}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </motion.div>

            {/* Right-side metadata */}
            <motion.aside
              variants={statusVariants}
              className="hidden lg:block"
            >
              <div className="sticky top-28">
                <div className="border-b border-white/[0.07] p-7">
                  <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-red-500">
                    INDEX
                  </p>

                  <div className="mt-7 space-y-4">
                    {faqItems.map((item, index) => (
                      <div
                        key={item.question}
                        className="flex items-center gap-3"
                      >
                        <span className="font-mono text-[7px] text-white/25">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="h-px w-3 bg-white/[0.08]" />

                        <span className="truncate text-[8px] uppercase tracking-[0.1em] text-white/25">
                          {item.question}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-7">
                  <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-red-500">
                    NEED MORE
                  </p>

                  <p className="mt-4 text-sm leading-6 text-white/45">
                    Can&apos;t find what you&apos;re looking for?
                  </p>

                  <a
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
                  </a>
                </div>

                {/* Diagnostic decoration */}
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

                  <span className="absolute bottom-3 left-3 font-mono text-[6px] uppercase tracking-[0.2em] text-white/25">
                    AXION / DATA NODE
                  </span>
                </div>
              </div>
            </motion.aside>
          </div>

          {/* Bottom telemetry */}
          <motion.div
            variants={revealVariants}
            className="flex flex-col gap-4 border-b border-white/[0.08] py-5 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-center gap-3">
              <span className="h-1 w-1 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,.7)]" />

              <span className="font-mono text-[7px] uppercase tracking-[0.25em] text-white/25">
                KNOWLEDGE SYSTEM ACTIVE
              </span>
            </div>

            <div className="flex items-center gap-5">
              <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/10">
                {faqItems.length.toString().padStart(2, "0")} RESPONSES
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
