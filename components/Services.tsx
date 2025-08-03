"use client"
import { Arimo } from "next/font/google"
import Image from "next/image"
import { motion, useInView , Variants } from "framer-motion" // Import useInView
import { useRouter } from "next/navigation" // Import useRouter
import { useRef } from "react" // Import useRef

import workoutplan from "../assets/report.png"
import nutritionplanning from "../assets/meal.png"
import coaching from "../assets/whistle.png"
import routine from "../assets/calendar.png"

const arimo = Arimo({
  variable: "--font-arimo",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

const servicesData = [
  {
    id: "workout-plans",
    title: "Personalized Workout Plans",
    description: "Tailored fitness routines based on your body type, goals, and progress.",
    icon: workoutplan,
    href: "/services/personalized-workout-plans",
  },
  {
    id: "nutrition-planning",
    title: "Nutrition Planning",
    description: "Custom diet strategies that complement your workouts and optimize health.",
    icon: nutritionplanning,
    href: "/services/nutrition-planning",
  },
  {
    id: "one-on-one-coaching",
    title: "1-on-1 Coaching",
    description: "Direct guidance, motivation, and feedback from certified trainers.",
    icon: coaching,
    href: "/services/one-on-one-coaching",
  },
  {
    id: "fitness-challenges",
    title: "Fitness Challenges",
    description: "Engaging goals and competitions to keep you motivated and consistent.",
    icon: routine,
    href: "/services/fitness-challenges",
  },
]

// Animation variants for the main container
const containerVariants : Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.6, // Delay after LogoSlider
      when: "beforeChildren", // Animate container before children
    },
  },
}

// Animation variants for text elements
const textVariants : Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

// Animation variants for individual service cards
const cardVariants : Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export default function Services() {
  const router = useRouter()
  const servicesRef = useRef(null)
  const isInView = useInView(servicesRef, { once: true, amount: 0.3 }) // Trigger when 30% in view

  // Map service IDs to their corresponding flex classes for the uneven layout
  const serviceFlexClasses: { [key: string]: string } = {
    "workout-plans": "flex-2 rounded-tl-md",
    "nutrition-planning": "flex-[1.5] rounded-bl-md",
    "one-on-one-coaching": "flex-[1.9] rounded-tr-md",
    "fitness-challenges": "flex-2 rounded-br-md",
  }

  const handleServiceClick = (href: string) => {
    router.push(href)
  }

  return (
    <motion.div
      ref={servicesRef}
      className={`w-full h-[45rem] p-8 bg-black flex items-center justify-center transition-all text-white ${arimo.className} duration-500 ease-in-out mb-32`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"} // Animate based on inView status
      variants={containerVariants}
    >
      <div className="w-full h-full rounded-md flex flex-col gap-9">
        <motion.div className="flex justify-center items-center py-4" variants={textVariants}>
          <h1 className="text-5xl text-center tracking-tight">
            Precision-crafted for those who want more <br />
            than just a workout.
          </h1>
        </motion.div>
        {/* Grid view only (no onClick) */}
        <div className="w-full h-full grid grid-cols-2 gap-1 rounded-md">
          {/* Left Column */}
          <div className="flex flex-col w-full h-full gap-1">
            {/* Personalized Workout Plans */}
            <motion.div
              className={`flex-2 flex flex-col items-center justify-center p-6 rounded-md transition-all duration-300 hover:cursor-pointer ease-in-out
                           bg-zinc-950 hover:scale-[1.02] border border-zinc-800 hover:border-[#DC2626] ${serviceFlexClasses["workout-plans"]}`}
              onClick={() => handleServiceClick(servicesData[0].href)}
              variants={cardVariants}
            >
              <Image
                src={servicesData[0].icon || "/placeholder.svg"}
                alt={servicesData[0].title}
                className="size-16 mb-4"
              />
              <h3 className="text-4xl font-medium mb-2 text-white">{servicesData[0].title}</h3>
              <p className="text-zinc-400 text-center text-sm">{servicesData[0].description}</p>
            </motion.div>
            {/* Nutrition Planning */}
            <motion.div
              className={`flex-[1.5] flex flex-col items-center justify-center p-6 rounded-md transition-all duration-300 hover:cursor-pointer ease-in-out
                           bg-zinc-950 hover:scale-[1.02] border border-zinc-800 hover:border-[#DC2626] ${serviceFlexClasses["nutrition-planning"]}`}
              onClick={() => handleServiceClick(servicesData[1].href)}
              variants={cardVariants}
            >
              <Image
                src={servicesData[1].icon || "/placeholder.svg"}
                alt={servicesData[1].title}
                className="size-16 mb-4"
              />
              <h3 className="text-4xl font-medium mb-2 text-white">{servicesData[1].title}</h3>
              <p className="text-zinc-400 text-center text-sm">{servicesData[1].description}</p>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col w-full h-full gap-1">
            {/* 1-on-1 Coaching */}
            <motion.div
              className={`flex-[1.9] flex flex-col items-center justify-center p-6 rounded-md transition-all duration-300 hover:cursor-pointer ease-in-out
                           bg-zinc-950 hover:scale-[1.02] border border-zinc-800 hover:border-[#DC2626] ${serviceFlexClasses["one-on-one-coaching"]}`}
              onClick={() => handleServiceClick(servicesData[2].href)}
              variants={cardVariants}
            >
              <Image
                src={servicesData[2].icon || "/placeholder.svg"}
                alt={servicesData[2].title}
                className="size-16 mb-4"
              />
              <h3 className="text-4xl font-medium mb-2 text-white">{servicesData[2].title}</h3>
              <p className="text-zinc-400 text-center text-sm">{servicesData[2].description}</p>
            </motion.div>
            {/* Fitness Challenges */}
            <motion.div
              className={`flex-2 flex flex-col items-center justify-center p-6 rounded-md transition-all duration-300 hover:cursor-pointer ease-in-out
                           bg-zinc-950 hover:scale-[1.02] border border-zinc-800 hover:border-[#DC2626] ${serviceFlexClasses["fitness-challenges"]}`}
              onClick={() => handleServiceClick(servicesData[3].href)}
              variants={cardVariants}
            >
              <Image
                src={servicesData[3].icon || "/placeholder.svg"}
                alt={servicesData[3].title}
                className="size-16 mb-4"
              />
              <h3 className="text-4xl font-medium mb-2 text-white">{servicesData[3].title}</h3>
              <p className="text-zinc-400 text-center text-sm">{servicesData[3].description}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
