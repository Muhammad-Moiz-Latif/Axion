"use client"

import { Arimo } from "next/font/google"
import { motion, type Variants } from "framer-motion"
import { Check, X } from "lucide-react" // Import icons
import { useRef } from "react"
import { useInView } from "framer-motion"

const arimo = Arimo({
  variable: "--font-arimo",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

const features = [
  { name: "Personalized Workout Plans", annual: true, lifetime: true },
  { name: "Nutrition Planning & Tracking", annual: true, lifetime: true },
  { name: "1-on-1 Coaching Sessions", annual: "Limited", lifetime: "Unlimited" },
  { name: "Advanced Analytics & Progress Tracking", annual: true, lifetime: true },
  { name: "Exclusive Fitness Challenges", annual: true, lifetime: true },
  { name: "Community Forum Access", annual: true, lifetime: true },
  { name: "Early Access to New Features", annual: false, lifetime: true },
  { name: "Priority Support", annual: false, lifetime: true },
  { name: "Offline Content Access", annual: false, lifetime: true },
  { name: "Custom Meal Prep Guides", annual: true, lifetime: true },
  { name: "Video Exercise Library", annual: true, lifetime: true },
  { name: "Wearable Device Integration", annual: true, lifetime: true },
]

// Variants for the main container
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.05, // Stagger children for each feature row
    },
  },
}

// Variants for individual feature rows
const featureRowVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
}

export default function PricingFeatures() {
  const featuresRef = useRef(null)
  const isInView = useInView(featuresRef, { once: true, amount: 0.3 }) // Trigger when 30% in view

  return (
    <motion.div
      ref={featuresRef}
      className={`w-full py-16 bg-black text-white flex flex-col items-center ${arimo.className} mb-20`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.h1 className="text-5xl tracking-tight text-center mb-3" variants={featureRowVariants}>
        What&apos;s Included?
      </motion.h1>
      <motion.p className="text-sm text-center text-zinc-400 mb-12" variants={featureRowVariants}>
        Compare our plans and find the perfect fit for your fitness journey.
      </motion.p>

      <div className="w-full max-w-4xl border border-zinc-800 rounded-lg overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-3 bg-zinc-900 py-4 px-6 border-b border-zinc-800">
          <div className="text-left text-zinc-400 font-medium text-sm uppercase tracking-wider">Feature</div>
          <div className="text-center text-zinc-400 font-medium text-sm uppercase tracking-wider">Annual/Quarterly</div>
          <div className="text-center text-zinc-400 font-medium text-sm uppercase tracking-wider">Lifetime</div>
        </div>

        {/* Table Body */}
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="grid grid-cols-3 py-4 px-6 border-b border-zinc-900 last:border-b-0 items-center"
            variants={featureRowVariants}
          >
            <div className="text-left text-zinc-300 text-sm">{feature.name}</div>
            <div className="flex justify-center">
              {typeof feature.annual === "boolean" ? (
                feature.annual ? (
                  <Check className="size-5 text-[#DC2626]" />
                ) : (
                  <X className="size-5 text-zinc-500" />
                )
              ) : (
                <span className="text-zinc-300 text-sm">{feature.annual}</span>
              )}
            </div>
            <div className="flex justify-center">
              {typeof feature.lifetime === "boolean" ? (
                feature.lifetime ? (
                  <Check className="size-5 text-[#DC2626]" />
                ) : (
                  <X className="size-5 text-zinc-500" />
                )
              ) : (
                <span className="text-zinc-300 text-sm">{feature.lifetime}</span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
