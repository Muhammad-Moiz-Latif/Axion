"use client"

import Image from "next/image"
import { Arimo } from "next/font/google"
import { motion, type Variants } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

// Placeholder image for the story section
import storyImage from "../assets/greeko.png"

const arimo = Arimo({
  variable: "--font-arimo",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
}

const textVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const imageVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export default function AboutStory() {
  const storyRef = useRef(null)
  const isInView = useInView(storyRef, { once: true, amount: 0.3 })

  return (
    <motion.section
      ref={storyRef}
      className={`w-full py-20 px-4 bg-black text-white flex flex-col items-center ${arimo.className}`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div className="md:order-2" variants={imageVariants}>
          <Image
            src={
              storyImage ||
              "/placeholder.svg?height=500&width=700&query=diverse group of athletes collaborating, futuristic gym"
            }
            alt="Diverse group of athletes collaborating in a futuristic gym"
            width={700}
            height={500}
            className="rounded-lg size-[30rem] w-full object-contain border border-zinc-800 shadow-lg"
          />
        </motion.div>
        <motion.div className="md:order-1 space-y-6" variants={textVariants}>
          <h2 className="text-5xl font-semibold tracking-tight text-white">Our Journey</h2>
          <p className=" text-zinc-400 leading-relaxed">
            Axion was founded on the principle that true fitness is built, not born. We started with a vision to
            democratize elite training, making personalized, data-driven methodologies accessible to everyone. Our
            journey began with a small team of passionate trainers and tech innovators, united by a common goal: to
            redefine what's possible in personal fitness.
          </p>
          <p className=" text-zinc-400 leading-relaxed">
            From humble beginnings, we've grown into a thriving community, constantly evolving our platform with the
            latest in sports science and AI. Every feature, every program, and every piece of content is meticulously
            crafted to empower you, ensuring your progress is measurable, sustainable, and truly transformative. We're
            here to guide you through every rep, every meal, and every milestone.
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}
