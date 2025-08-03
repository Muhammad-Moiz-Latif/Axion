"use client"

import { Arimo } from "next/font/google"
import { motion, type Variants } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { Brain, Target, Users, Zap } from "lucide-react" // Example icons

const arimo = Arimo({
  variable: "--font-arimo",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

const valuesData = [
  {
    icon: Brain,
    title: "Data-Driven Excellence",
    description: "Leveraging insights to optimize every aspect of your training and nutrition.",
  },
  {
    icon: Target,
    title: "Unwavering Progress",
    description: "Committed to continuous improvement and measurable results for every member.",
  },
  {
    icon: Users,
    title: "Empowering Community",
    description: "Fostering a supportive environment where everyone thrives together.",
  },
  {
    icon: Zap,
    title: "Innovative Solutions",
    description: "Constantly evolving with cutting-edge technology and methodologies.",
  },
]

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

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
}

export default function AboutValues() {
  const valuesRef = useRef(null)
  const isInView = useInView(valuesRef, { once: true, amount: 0.3 })

  return (
    <motion.section
      ref={valuesRef}
      className={`w-full py-20 px-4 bg-black text-white flex flex-col items-center ${arimo.className}`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      <motion.h2 className="text-5xl tracking-tight text-center mb-12" variants={cardVariants}>
        Our Core Values
      </motion.h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {valuesData.map((value, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center p-6 bg-zinc-950 rounded-lg border border-zinc-800 hover:border-[#DC2626] transition-colors duration-300"
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
          >
            <value.icon className="size-16 text-[#DC2626] mb-4" />
            <h3 className="text-xl mb-2 tracking-tight">{value.title}</h3>
            <p className="text-zinc-400 text-sm">{value.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
