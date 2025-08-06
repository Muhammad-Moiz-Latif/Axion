"use client"

import { Arimo } from "next/font/google"
import Image from "next/image"
import { motion , type Variants } from "framer-motion"

import LightRays from "./ui/LightRays"
import CalorieStat from "./ui/CalorieStat"
import HeartRateStat from "./ui/HeartRateStat"
import MuscleActivation from "./ui/Muscle"
import BloodPressure from "./ui/BloodPressure"

import bg from "../assets/muscles-wallpaper-5120x2880-photoaidcom-greyscale.jpg"
import learnmore from "../assets/right-up.png"
import Link from "next/link"

const arimo = Arimo({
  variable: "--font-arimo",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

const textVariants  : Variants= {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
}

const buttonVariants : Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut", delay: 0.3 } },
}

export default function Hero() {
  return (
    <div className={`relative h-screen w-full text-white ${arimo.className} flex justify-center items-center`}>
      {/* Light Rays Layer */}
      <div style={{ width: "100%", height: "100%", position: "absolute", top: -10, zIndex: 10 }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1}
          lightSpread={1.9}
          rayLength={1}
          followMouse={true}
          mouseInfluence={0}
          noiseAmount={0.2}
          distortion={0.05}
          className="custom-rays"
        />
      </div>
      {/* Background Image Layer */}
      <Image
        src={bg || "/placeholder.svg"}
        alt="Muscular Background"
        fill
        className="absolute inset-0 top-7 w-full h-full object-cover z-0"
        priority // Preload the hero image
      />
      {/* Background stats for Image */}
      <div className="absolute left-[35%] top-[60%] z-20">
        <CalorieStat delay={0.5} />
      </div>
      <div className="absolute right-[35%] bottom-[45%] z-20">
        <HeartRateStat  />
      </div>
      <div className="absolute top-[40%] left-[35%] z-20">
        <MuscleActivation  />
      </div>
      <div className="absolute top-[45%] right-[32%] z-20">
        <BloodPressure  />
      </div>
      <div className="absolute bottom-8 flex flex-col gap-1 z-30">
        <motion.h1
          className="text-6xl text-center font-semibold"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <span className="text-[#DC2626]">Built.</span> Not Born.
        </motion.h1>
        <motion.p
          className="text-sm text-center text-zinc-400 leading-4 mb-2"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          We offer data-driven fitness training that tracks real progress.
        </motion.p>
        <motion.div
          className="flex justify-center items-center gap-2"
          initial="hidden"
          animate="visible"
          variants={buttonVariants}
        >
          <motion.button
            className="bg-[#DC2626] text-sm py-[11px] px-4 w-[9.5rem] rounded-[3px] cursor-pointer"
            whileHover={{ scale: 1.05, boxShadow: "0 0 10px rgba(220, 38, 38, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
           <Link href="/pricing">Become a member</Link>
          </motion.button>
          <motion.button
            className="py-[9px] text-sm w-[9rem] rounded-[3px] border-[1px] border-white flex justify-center items-center gap-1 cursor-pointer"
            whileHover={{ scale: 1.05, borderColor: "#DC2626", color: "#DC2626" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <span>Learn More</span>
            <Image src={learnmore || "/placeholder.svg"} className="size-4" alt="Learn more arrow" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}
