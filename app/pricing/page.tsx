"use client"

import Plan from "@/components/Plan"
import PricingFeatures from "@/components/pricing-features"
import JoinUs from "@/components/JoinUs"
import Image from "next/image" // Import Image component
import { Arimo } from "next/font/google"
import { motion, type Variants } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import NavBar from "@/components/Nav"
import { Footer } from "@/components/Footer"
import bg from '../../assets/samsulek.png';

const arimo = Arimo({
  variable: "--font-arimo",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

// Variants for the main page container to trigger overall entrance
const pageContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2, // Stagger sections
    },
  },
}

// Variants for individual sections
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
}

export default function PricingPage() {
  const pageRef = useRef(null)
  const isInView = useInView(pageRef, { once: true, amount: 0.1 }) // Trigger when 10% of the page is in view

  return (
    <motion.div
      ref={pageRef}
      className={`flex min-h-screen flex-col items-center justify-center bg-black ${arimo.className}`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={pageContainerVariants}
    >
      <NavBar />
         
      {/* Pricing Hero Section */}
      <motion.section
        className="w-full pt-28 text-xs text-zinc-500 text-center flex flex-col items-center justify-center mt-14 z-10"
        variants={sectionVariants}
      >
        <motion.h1 className="font-semibold tracking-tight uppercase z-10" variants={sectionVariants}>
          Pricing.
        </motion.h1>
      
      </motion.section>

      {/* Plan Component */}
      <motion.section className="w-full z-10" variants={sectionVariants}>
        <Plan />
      </motion.section>

      {/* Pricing Features Section */}
      <motion.section className="w-full z-10" variants={sectionVariants}>
        <PricingFeatures />
      </motion.section>

      {/* Join Us Section */}
      <motion.section className="w-full z-10" variants={sectionVariants}>
        <JoinUs />
      </motion.section>

      {/* Footer Section */}
      <motion.section className="w-full z-10" variants={sectionVariants}>
        <Footer />
      </motion.section>
    </motion.div>
  )
}
