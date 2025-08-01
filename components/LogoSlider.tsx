"use client"

import type React from "react"
import Image from "next/image"
import { Arimo } from "next/font/google"
import { motion, useInView , Variants } from "framer-motion" // Import useInView
import { useRef } from "react" // Import useRef

import Nike from "../assets/nike.png"
import Adidas from "../assets/adidas.png"
import UnderArmour from "../assets/Under_Armour.png"
import Puma from "../assets/Puma.png"
import AppleHealth from "../assets/AppleHealth.png"
import GymShark from "../assets/GymShark.png"
import OptimumNutrition from "../assets/OptimumNutrition.png"

const arimo = Arimo({
  variable: "--font-arimo",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

const logos = [
  { src: Nike, alt: "Nike Logo" },
  { src: Adidas, alt: "Adidas Logo" },
  { src: UnderArmour, alt: "Under Armour Logo" },
  { src: Puma, alt: "Puma Logo" },
  { src: AppleHealth, alt: "Apple Health Logo" },
  { src: GymShark, alt: "Gym Shark Logo" },
  { src: OptimumNutrition, alt: "Optimum Nutrition Logo" },
]

const numVisibleLogos = 4 // Number of logos to show at a time
const totalLogos = logos.length

// Calculate the width of the inner container for the infinite scroll.
// It needs to be twice the width of the original set of logos to allow for seamless looping.
const innerContainerWidthPercentage = 100 // e.g., (2 * 7 * 100) / 4 = 350%
// The animation needs to slide by the width of the original set of logos.
const slideTranslationPercentage = (totalLogos * 100) / numVisibleLogos // e.g., (7 * 100) / 4 = 175%

const containerVariants : Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.5, // Delay after Hero section
    },
  },
}

export default function LogoSlider() {
  const logoSliderRef = useRef(null)
  const isInView = useInView(logoSliderRef, { once: true, amount: 0.5 }) // Trigger when 50% in view

  // Duplicate logos to create a seamless loop
  const duplicatedLogos = [...logos, ...logos]

  return (
    <motion.div
      ref={logoSliderRef}
      className={`w-full py-5 overflow-hidden relative mt-2 mb-10 ${arimo.className} text-white`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"} // Animate based on inView status
      variants={containerVariants}
    >
      {/* <h1 className="text-center text-zinc-400 mb-3">Partners in <span className="text-white">performance.</span></h1> */}
      <div className="px-8 flex justify-center">
        <div
          className="w-[70%] h-[0.5px] bg-zinc-700 mb-7"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
          }}
        ></div>
      </div>
      <div className="pointer-events-none absolute inset-0 z-10 mask-gradient" />
      {/* Scrolling logos */}
      <div
        className="flex animate-slide-left"
        style={
          {
            width: `${innerContainerWidthPercentage}%`,
            // Apply the custom animation variable for the translation
            "--slide-translation": `-${slideTranslationPercentage}%`,
          } as React.CSSProperties
        } // Type assertion for custom CSS properties
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-4 flex items-center justify-center"
            style={{ width: `${100 / numVisibleLogos}%` }} // Each logo takes up 1/numVisibleLogos of the visible width
          >
            <Image
              src={logo.src || "/placeholder.svg"}
              alt={logo.alt}
              className="size-20 object-contain" // Adjust height as needed
            />
          </div>
        ))}
      </div>
    </motion.div>
  )
}
