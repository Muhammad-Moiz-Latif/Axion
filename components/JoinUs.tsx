"use client"

import { Arimo } from 'next/font/google'
import Image from "next/image"
import { motion, useInView, Variants } from "framer-motion"
import { useRef } from "react"

import p1 from "../assets/p1.png"
import p2 from "../assets/p2.png"
import p3 from "../assets/p3.png"
import p4 from "../assets/p4.png"

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
      delay: 0.5, // Delay after previous section (Plan)
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
}

// Variants for text elements
const textVariants : Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

// Variants for individual avatars
const avatarVariants : Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
}

// Variants for buttons
const buttonVariants : Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.3 } },
}

export default function JoinUs() {
  const joinUsRef = useRef(null)
  const isInView = useInView(joinUsRef, { once: true, amount: 0.3 }) // Trigger when 30% in view

  const avatars = [p1, p2, p3, p4]

  return (
    <motion.div
      ref={joinUsRef}
      className={`w-full h-[50vh] bg-black text-white ${arimo.className} flex flex-col items-center`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="flex justify-center w-full mb-10">
        <div
          className="w-[90%] h-[0.5px] bg-zinc-700"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
          }}
        ></div>
      </div>
      <motion.h1 className="text-5xl text-center tracking-tight mb-5" variants={textVariants}>
        Let's make this official, sign up
        <br />
        and start your journey
      </motion.h1>
      <motion.div
        className="flex gap-3 items-center mb-5"
        variants={{
          visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
        }}
      >
        <div className="flex">
          {avatars.map((avatar, index) => (
            <motion.div key={index} variants={avatarVariants}>
              <Image src={avatar || "/placeholder.svg"} className="rounded-full size-5 object-contain" alt={`Avatar ${index + 1}`} />
            </motion.div>
          ))}
        </div>
        <motion.h1 className="text-xs text-zinc-400" variants={textVariants}>
          1025+ active members
        </motion.h1>
      </motion.div>
      <motion.button
        className="bg-[#DC2626] text-white text-sm tracking-tight px-5 py-3 rounded-[3px]"
        variants={buttonVariants}
        whileHover={{ scale: 1.05, boxShadow: "0 0 10px rgba(220, 38, 38, 0.5)" }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        Become a member
      </motion.button>
      <div className="flex justify-center w-full mt-10">
        <div
          className="w-[90%] h-[0.5px] bg-zinc-700"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
          }}
        ></div>
      </div>
    </motion.div>
  )
}
