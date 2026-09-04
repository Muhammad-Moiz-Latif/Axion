"use client"

import Image from "next/image"
import Link from "next/link"
import { Arimo } from "next/font/google"
import { motion, useInView, type Variants } from "framer-motion"
import { useRef } from "react"

import logo from "../assets/AXION.png"

const arimo = Arimo({
  variable: "--font-arimo",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const revealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const linkVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -8,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export const Footer = () => {
  const footerRef = useRef<HTMLElement | null>(null)

  const isInView = useInView(footerRef, {
    once: true,
    amount: 0.15,
  })

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
    { name: "Privacy Policy", href: "/privacypolicy" },
  ]

  const socialLinks = [
    { name: "Instagram", href: "#" },
    { name: "YouTube", href: "#" },
    { name: "LinkedIn", href: "#" },
    { name: "Facebook", href: "#" },
  ]

  return (
    <footer
      ref={footerRef}
      className={`${arimo.className} relative overflow-hidden bg-[#030303] text-white`}
    >
      {/* ================================================================ */}
      {/* BACKGROUND                                                       */}
      {/* ================================================================ */}

      <div className="pointer-events-none absolute inset-0">
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

        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-red-600/[0.025] blur-[150px]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative mx-auto max-w-[1500px] px-5 pt-20 sm:px-8 lg:px-12 lg:pt-28"
      >
        {/* ============================================================ */}
        {/* TOP SYSTEM BAR                                                */}
        {/* ============================================================ */}

        <motion.div
          variants={revealVariants}
          className="flex items-center justify-between border-y border-white/[0.07] py-4"
        >
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 bg-red-600 shadow-[0_0_10px_rgba(220,38,38,.7)]" />

            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-red-500">
              AXION / SYSTEM DIRECTORY
            </span>
          </div>

          <span className="hidden font-mono text-[8px] uppercase tracking-[0.2em] text-white/20 sm:block">
            PERFORMANCE DIVISION / 2026
          </span>
        </motion.div>

        {/* ============================================================ */}
        {/* GIANT BRAND                                                   */}
        {/* ============================================================ */}

        <motion.div
          variants={revealVariants}
          className="relative overflow-hidden border-b border-white/[0.07]"
        >
          <h2 className="select-none whitespace-nowrap py-12 text-[clamp(5rem,17vw,17rem)] font-semibold leading-[0.72] tracking-[-0.09em] text-white/[0.055]">
            AXION
          </h2>

          <div className="absolute bottom-5 left-0 flex items-center gap-3">
            <span className="h-px w-8 bg-red-600" />

            <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/25">
              TRAIN WITH INTENTION
            </span>
          </div>
        </motion.div>

        {/* ============================================================ */}
        {/* MAIN GRID                                                     */}
        {/* ============================================================ */}

        <div className="grid border-b border-white/[0.07] lg:grid-cols-[1.3fr_0.7fr_0.7fr_1fr]">
          {/* Brand */}

          <motion.div
            variants={revealVariants}
            className="border-b border-white/[0.07] p-7 lg:border-b-0 lg:border-r lg:p-10"
          >
            <Image
              src={logo}
              alt="Axion"
              width={100}
              height={100}
              className="h-20 w-20 object-contain opacity-90"
            />

            <p className="mt-7 max-w-sm text-xs leading-6 text-white/30">
              A performance system built around
              measurement, adaptation and consistent
              progress.
            </p>

            <p className="mt-10 font-mono text-[8px] uppercase tracking-[0.2em] text-white/15">
              EST. / AXION PERFORMANCE LAB
            </p>
          </motion.div>

          {/* Navigation */}

          <motion.div
            variants={revealVariants}
            className="border-b border-white/[0.07] p-7 lg:border-b-0 lg:border-r lg:p-10"
          >
            <p className="mb-6 font-mono text-[8px] uppercase tracking-[0.22em] text-red-500">
              NAVIGATION
            </p>

            <motion.div
              variants={containerVariants}
              className="flex flex-col gap-3"
            >
              {quickLinks.map((link) => (
                <motion.div
                  key={link.name}
                  variants={linkVariants}
                >
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-xs uppercase tracking-[0.08em] text-white/40 transition-colors duration-300 hover:text-white"
                  >
                    <span className="w-0 overflow-hidden text-red-500 transition-all duration-300 group-hover:w-3">
                      →
                    </span>

                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Social */}

          <motion.div
            variants={revealVariants}
            className="border-b border-white/[0.07] p-7 lg:border-b-0 lg:border-r lg:p-10"
          >
            <p className="mb-6 font-mono text-[8px] uppercase tracking-[0.22em] text-red-500">
              CONNECT
            </p>

            <div className="flex flex-col gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="text-xs uppercase tracking-[0.08em] text-white/40 transition-colors duration-300 hover:text-white"
                >
                  {social.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact */}

          <motion.div
            variants={revealVariants}
            className="p-7 lg:p-10"
          >
            <p className="mb-6 font-mono text-[8px] uppercase tracking-[0.22em] text-red-500">
              CONTACT
            </p>

            <h3 className="text-xl font-medium tracking-[-0.025em]">
              Have a question?
            </h3>

            <p className="mt-3 max-w-xs text-xs leading-6 text-white/30">
              Our team is ready to help you find the
              right path into the Axion system.
            </p>

            <Link
              href="/contact"
              className="group mt-7 inline-flex items-center gap-4 border-b border-white/15 pb-2 text-[10px] uppercase tracking-[0.15em] text-white/60 transition-colors hover:border-red-600 hover:text-white"
            >
              Contact Support

              <span className="text-red-500 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </motion.div>
        </div>

        {/* ============================================================ */}
        {/* NEWSLETTER / SIGNUP                                           */}
        {/* ============================================================ */}

        <motion.div
          variants={revealVariants}
          className="grid gap-8 border-b border-white/[0.07] py-10 md:grid-cols-[1fr_auto]"
        >
          <div>
            <p className="font-mono text-[8px] uppercase tracking-[0.22em] text-red-500">
              AXION / SIGNAL
            </p>

            <p className="mt-3 text-sm text-white/40">
              Get occasional updates from the system.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
            <input
              type="email"
              placeholder="YOUR EMAIL"
              className="h-10 w-full border-b border-white/15 bg-transparent px-1 text-[10px] uppercase tracking-[0.12em] text-white outline-none transition-colors placeholder:text-white/20 focus:border-red-600 sm:w-64"
            />

            <motion.button
              whileHover={{
                backgroundColor: "#DC2626",
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="h-10 bg-white px-6 text-[10px] font-semibold uppercase tracking-[0.12em] text-black transition-colors"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>

        {/* ============================================================ */}
        {/* BOTTOM                                                        */}
        {/* ============================================================ */}

        <motion.div
          variants={revealVariants}
          className="flex flex-col gap-5 py-7 text-[8px] uppercase tracking-[0.18em] text-white/15 sm:flex-row sm:items-center sm:justify-between"
        >
          <span>
            © 2026 AXION. ALL RIGHTS RESERVED.
          </span>

          <div className="flex items-center gap-5">
            <span>Built with intention.</span>

            <span className="hidden h-px w-8 bg-white/10 sm:block" />

            <span className="text-red-500/60">
              SYSTEM ONLINE
            </span>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}