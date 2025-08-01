"use client"

import { useState, useRef } from "react"
import { Arimo } from "next/font/google"
import { motion, useInView , Variants} from "framer-motion"

import AnimatedCounter from "./ui/AnimatedCounter"
import DecryptionText from "./ui/DecryptionText" // Import the new component

const arimo = Arimo({
  variable: "--font-arimo",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

// Variants for the main container
const containerVariants : Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.1, // Delay after previous section
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
}

// Variants for text elements (title, description)
const textVariants : Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

// Variants for pricing cards
const cardVariants : Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
}

export default function Plan() {
  const [selectedPeriod, setSelectedPeriod] = useState<"annually" | "quarterly">("annually")
  const planRef = useRef(null)
  const isInView = useInView(planRef, { once: true, amount: 0.3 }) // Trigger animations when 30% in view

  const currentPrice = selectedPeriod === "annually" ? 21 : 25
  const currentPriceUnit = selectedPeriod === "annually" ? "mo" : "mo" // Still "mo" for quarterly
  const currentBilledText = selectedPeriod === "annually" ? "$240 Billed annually" : "$75 Billed quarterly"
  const currentSavingText = selectedPeriod === "annually" ? "you're saving $60 a year" : "save 20% on an annual plan"

  return (
    <motion.div
      ref={planRef}
      className={`w-full h-[120vh] bg-black ${arimo.className} text-white p-7 items-center flex flex-col mb-36`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.h1 className="text-5xl tracking-tight text-center mb-3" variants={textVariants}>
        One plan, constant updates.
      </motion.h1>
      <motion.p className="text-sm text-center text-zinc-400 mb-16" variants={textVariants}>
        Access everything Axion has to offer — from expert routines to nutritional guides — <br />
        and connect with a community that trains with intention. Join now and lock in your rate for life. <br />
        No hidden charges. No surprises. Just progress.
      </motion.p>
      <div className="flex justify-center items-center w-full h-full gap-5 px-36">
        {/* Annual Plan Card */}
        <motion.div
          className="w-[60%] h-full border border-zinc-800 bg-zinc-950 rounded-md flex flex-col justify-end items-center px-10 pb-7"
          variants={cardVariants}
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <h1 className="text-center text-6xl ">
              <AnimatedCounter from={selectedPeriod === "annually" ? 25 : 21} to={currentPrice} duration={0.8} />
            </h1>
            <div className="w-[2px] h-12 rotate-20 bg-white"></div>
            <h1 className="text-6xl">
              <DecryptionText text={currentPriceUnit} duration={0.5} />
            </h1>
          </div>
          <div className="grid grid-cols-[40%,60%,40%] items-center w-full gap-1 mb-12">
            <div className="flex justify-center w-full">
              <div
                className="w-[90%] h-[0.5px] bg-zinc-600"
                style={{
                  maskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
                  WebkitMaskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
                }}
              ></div>
            </div>
            <h2 className="text-xs text-center uppercase">
              <DecryptionText text={currentBilledText} duration={0.8} />
            </h2>
            <div className="flex justify-center w-full">
              <div
                className="w-[90%] h-[0.5px] bg-zinc-600"
                style={{
                  maskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
                  WebkitMaskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
                }}
              ></div>
            </div>
          </div>
          <div className="bg-zinc-900 rounded-[3px] flex gap-5 px-2 py-1 border border-zinc-800 mb-1">
            <motion.button
              onClick={() => setSelectedPeriod("quarterly")}
              className={`py-2 px-3 rounded-[3px] transition-colors duration-75 ${
                selectedPeriod === "quarterly" ? "bg-zinc-800 border border-zinc-600" : ""
              }`}
              whileHover={{ backgroundColor: selectedPeriod === "annually" ? "#3f3f46" : undefined }} // bg-zinc-700
            >
              Quarterly
            </motion.button>
            <motion.button
              onClick={() => setSelectedPeriod("annually")}
              className={`py-2 px-3 rounded-[3px] transition-colors duration-75 ${
                selectedPeriod === "annually" ? "bg-zinc-800 border border-zinc-600" : ""
              }`}
              whileHover={{ backgroundColor: selectedPeriod === "quarterly" ? "#3f3f46" : undefined }} // bg-zinc-700
            >
              Annually
            </motion.button>
          </div>
          <h1 className="text-zinc-400 text-xs text-center uppercase tracking-widest mb-14">
            <DecryptionText text={currentSavingText} duration={0.8} />
          </h1>
          <h1 className="text-center text-sm text-zinc-300 mb-5">
            One simple plan. Full access to everything — workouts, <br />
            nutrition, tools, and community. Just $60 a year.
          </h1>
          <motion.button whileHover={{scale : 1.05 , cursor : 'pointer'}} className="w-full tracking-tight h-10 rounded-[3px] bg-white text-black">
            Become an Axion Member
          </motion.button>
        </motion.div>
        {/* Lifetime Plan Card */}
        <motion.div
          className="w-[60%] h-full bg-[#DC2626] rounded-md flex flex-col justify-end items-center px-10 pb-7 text-black"
          variants={cardVariants}
        >
          <h1 className="text-center text-6xl mb-2">$599</h1>
          <div className="grid grid-cols-[40%,60%,40%] items-center w-full gap-1 mb-12">
            <div className="flex justify-center w-full">
              <div
                className="w-[90%] h-[0.5px] bg-black"
                style={{
                  maskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
                  WebkitMaskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
                }}
              ></div>
            </div>
            <h2 className="text-xs text-center uppercase">$240 Billed annually</h2>
            <div className="flex justify-center w-full">
              <div
                className="w-[90%] h-[0.5px] bg-black"
                style={{
                  maskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
                  WebkitMaskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
                }}
              ></div>
            </div>
          </div>
          <div className="bg-red-800 rounded-[3px] px-2 py-1 border border-red-900 mb-1">
            <button className="h-full py-2 px-3">Limited availability</button>
          </div>
          <h1 className="text-zinc-800 text-xs text-center uppercase tracking-widest mb-14">next price tier: €750</h1>
          <h1 className="text-center text-sm text-black mb-5">
            No complicated tiers, just one plan that gives you full access to our Vault. Save with the yearly option.
          </h1>
          <div className="relative w-full">
            <motion.button whileHover={{scale : 1.05 , cursor : 'pointer'}} className="w-full tracking-tight h-[44px] rounded-[3px] bg-black text-white">
              Become a Lifetime Member
            </motion.button>
            <h4 className="text-black absolute top-2 right-20 text-[8px]">TM</h4>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
