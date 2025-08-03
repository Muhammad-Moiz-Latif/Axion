"use client"

import NavBar from "@/components/Nav"
import AboutHero from "@/components/about-hero";
import AboutStory from "@/components/about-story"
import AboutValues from "@/components/about-values"
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

const pageContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
}

export default function AboutPage() {
  const pageRef = useRef(null)
  const isInView = useInView(pageRef, { once: true, amount: 0.1 })

  return (
    <motion.div
      ref={pageRef}
      className={`flex min-h-screen flex-col items-center justify-center bg-black ${arimo.className}`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={pageContainerVariants}
    >
      <NavBar />
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <JoinUs />
      <Footer />
    </motion.div>
  )
}
