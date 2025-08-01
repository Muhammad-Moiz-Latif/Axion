"use client"

import { useRef } from "react"

import { Arimo } from "next/font/google"
import Image from "next/image"
import { motion, type Variants } from "framer-motion"
import { useInView } from "framer-motion" // Import useInView

import datadriven from "../assets/data-driven.png"
import results from "../assets/results.png"
import personalization from "../assets/personalization.png"
import greek from "../assets/greek.png"
import star from "../assets/star.png"
import AnimatedCounter from "./ui/AnimatedCounter" // Import the new component

const arimo = Arimo({
  variable: "--font-arimo",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

// Variants for the main container
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.2, // Adjusted delay to trigger shortly after becoming visible
      when: "beforeChildren",
    },
  },
}

// Variants for text elements (title, description)
const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

// Variants for individual benefit cards
const benefitCardVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

// Variants for company stat cards (only for fade/slide, counter handles number animation)
const statCardContainerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

// Variants for the background Greek image
const greekImageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 0.6, scale: 1, transition: { duration: 1.5, ease: "easeOut" } }, // Subtle fade and scale
}

export default function WhyChooseUs() {
  const whyChooseUsRef = useRef(null) // Ref for the main container
  const isInView = useInView(whyChooseUsRef, { once: true, amount: 0.3 }) // Trigger when 30% in view

  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true, amount: 0.5 }) // Trigger stats animation when 50% in view

  return (
    <motion.div
      ref={whyChooseUsRef} // Attach ref to the main container
      className={`max-w-screen relative px-7 h-[100vh] bg-black text-white mb-32 flex flex-col ${arimo.className}`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"} // Animate based on inView status
      variants={containerVariants}
    >
      <motion.div
        className="absolute object-contain z-0 -top-30 right-7 size-[55rem] overflow-hidden"
        variants={greekImageVariants}
      >
        <Image src={greek || "/placeholder.svg"} alt="Greek Statue" fill className="object-contain" />
      </motion.div>

      <motion.h1 className="text-5xl mb-2 z-10 tracking-tight" variants={textVariants}>
        Why Choose Axion?
      </motion.h1>
      <motion.p className="text-sm text-zinc-400 mb-14 z-10 w-[33rem]" variants={textVariants}>
        This isn't just another stop — it's the shift you've been waiting for, the moment where discipline meets
        direction, and your fitness journey truly begins to transform.
      </motion.p>

      <div className="flex flex-col h-full w-full z-10">
        <div className="flex flex-col gap-3 h-full justify-start items-start mb-10">
          <motion.div className="flex flex-1 pl-4 w-[40%] gap-4 items-center" variants={benefitCardVariants}>
            <Image src={datadriven || "/placeholder.svg"} className="size-10" alt="Data-Driven Icon" />
            <div className="flex flex-col">
              <h1 className="text-2xl mb-1 tracking-tight">Data-Driven Precision</h1>
              <p className="text-sm text-zinc-400 text-start">
                Every plan we craft is powered by real metrics and tracked insights, ensuring progress you can clearly
                see and confidently measure.
              </p>
            </div>
          </motion.div>
          <motion.div className="flex flex-1 pl-4 w-[40%] gap-4 items-center" variants={benefitCardVariants}>
            <Image src={personalization || "/placeholder.svg"} className="size-10" alt="Personalization Icon" />
            <div className="flex flex-col">
              <h1 className="text-2xl mb-1 tracking-tight">Tailored to You</h1>
              <p className="text-sm text-zinc-400">
                No cookie-cutter programs here. Every workout and meal plan is carefully built around your unique body,
                lifestyle, and long-term goals.
              </p>
            </div>
          </motion.div>
          <motion.div className="flex flex-1 pl-4 w-[40%] gap-4 items-center" variants={benefitCardVariants}>
            <Image src={results || "/placeholder.2svg"} className="size-10" alt="Results Icon" />
            <div className="flex flex-col">
              <h1 className="text-2xl mb-1 tracking-tight">Results That Stick</h1>
              <p className="text-sm text-zinc-400">
                We blend science, structure, and long-term consistency to ensure your growth isn't just temporary — it's
                a real, lasting lifestyle shift.
              </p>
            </div>
          </motion.div>
        </div>
        {/* company stats */}
        <motion.div
          ref={statsRef} // Attach ref here
          className="w-full h-44 rounded-md border border-zinc-800 bg-black flex justify-evenly items-center"
          initial="hidden"
          animate={statsInView ? "visible" : "hidden"} // Animate based on inView status
          variants={{
            visible: { transition: { staggerChildren: 0.2, delayChildren: 0.2 } }, // Stagger children for stats
          }}
        >
          <motion.div
            className="flex flex-col flex-1 h-full justify-center items-center border border-r-zinc-800 border-y-black border-l-black rounded-l-md"
            variants={statCardContainerVariants}
          >
            <AnimatedCounter from={0} to={25} suffix="K+" className="text-5xl text-[#DC2626]" />
            <p className="text-zinc-400 text-sm">Active Users</p>
          </motion.div>
          <motion.div
            className="flex flex-col flex-1 h-full justify-center items-center border border-r-zinc-800 border-y-black border-l-black rounded-l-md"
            variants={statCardContainerVariants}
          >
            <AnimatedCounter from={0} to={98} suffix="%" className="text-5xl text-[#DC2626]" />
            <p className="text-zinc-400 text-sm">Client Retention</p>
          </motion.div>
          <motion.div
            className="flex flex-col flex-1 h-full justify-center items-center border border-r-zinc-800 border-y-black border-l-black rounded-l-md"
            variants={statCardContainerVariants}
          >
            <div className="flex gap-1 justify-center items-center">
              <AnimatedCounter from={0} to={4.9} className="text-5xl text-[#DC2626]" />
              <Image src={star || "/placeholder.svg"} className="size-7" alt="Star icon" />
            </div>
            <p className="text-zinc-400 text-sm">Avg. Rating</p>
          </motion.div>
          <motion.div className="flex flex-col flex-1 justify-center items-center" variants={statCardContainerVariants}>
            <AnimatedCounter from={0} to={120} suffix="+" className="text-5xl text-[#DC2626]" />
            <p className="text-zinc-400 text-sm">Programs Offered</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}
