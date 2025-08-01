"use client"

import Image from "next/image"
import { Arimo } from "next/font/google"
import { motion, useInView , Variants } from "framer-motion"
import { useRef } from "react"

import logo from "../assets/AXION.png"

const arimo = Arimo({
  variable: "--font-arimo",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

// Variants for the main container
const containerVariants : Variants =  {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.5, // Delay after previous section (JoinUs)
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
}

// Variants for individual child elements
const itemVariants : Variants =  {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const linkItemVariants : Variants =  {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
}

export const Footer = () => {
  const footerRef = useRef(null)
  const isInView = useInView(footerRef, { once: true, amount: 0.2 }) // Trigger when 20% in view

  return (
    <motion.div
      ref={footerRef}
      className={`w-full min-h-96 bg-black pt-10 px-7 ${arimo.className} text-white flex flex-col gap-10 justify-end`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Main content grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 items-end">
        {/* Logo and description */}
        <motion.div className="flex flex-col relative w-full h-full" variants={itemVariants}>
          <Image
            src={logo || "/placeholder.svg"}
            className="size-32 absolute top-0 object-contain"
            alt="Company Logo"
          />
          <motion.p className="text-sm text-zinc-300 md:max-w-none mt-24 pl-6" variants={itemVariants}>
            You read this far, might as well sign up.
          </motion.p>
          <div className="flex gap-3 pl-6 mt-5">
            <input
              className="text-xs border-b border-b-zinc-400 bg-transparent text-white placeholder-zinc-500 focus:outline-none focus:border-[#DC2626] pb-1"
              placeholder="First name"
              type="text"
            />
            <input
              className="text-xs border-b border-b-zinc-400 bg-transparent text-white placeholder-zinc-500 focus:outline-none focus:border-[#DC2626] pb-1"
              placeholder="johndoe@osmo.supply"
              type="email"
            />
          </div>
          <motion.button
            className="bg-zinc-800 w-20 mt-3 ml-6 text-sm px-3 py-1 rounded-[3px]"
            variants={itemVariants}
            whileHover={{ scale: 1.05, backgroundColor: "#3f3f46" }} // bg-zinc-700
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Sign up
          </motion.button>
        </motion.div>
        {/* Links section */}
        <div className="flex flex-col sm:flex-row justify-around md:justify-start gap-8 sm:gap-10 md:gap-10">
          {/* Quick Links */}
          <motion.div
            className="flex flex-col items-center sm:items-start pl-0 md:pl-24"
            variants={{
              visible: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } },
            }}
          >
            <motion.h1 className="mb-3 text-[#DC2626] text-xs" variants={itemVariants}>
              Quick Links
            </motion.h1>
            <ul className="flex flex-col gap-2 text-center sm:text-left">
              {["About Us", "Contact Us", "FAQ", "Privacy Policy", "Services"].map((link, index) => (
                <motion.li
                  key={index}
                  className="text-md text-zinc-300 cursor-pointer hover:text-[#DC2626] transition-colors duration-300 tracking-tight"
                  variants={linkItemVariants}
                  whileHover={{ x: 5 }}
                >
                  {link}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          {/* Social Links */}
          <motion.div
            className="flex flex-col items-center sm:items-start"
            variants={{
              visible: { transition: { staggerChildren: 0.05, delayChildren: 0.3 } },
            }}
          >
            <motion.h1 className="mb-3 text-[#DC2626] text-xs" variants={itemVariants}>
              Social Links
            </motion.h1>
            <ul className="flex flex-col gap-2 text-center sm:text-left">
              {["Facebook", "Instagram", "Twitter", "LinkedIn", "YouTube"].map((social, index) => (
                <motion.li
                  key={index}
                  className="text-md text-zinc-300 cursor-pointer hover:text-[#DC2626] transition-colors duration-300 tracking-tight"
                  variants={linkItemVariants}
                  whileHover={{ x: 5 }}
                >
                  {social}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
        {/* Contact Box */}
        <motion.div
          className="flex flex-col rounded-xl p-6 gap-2 items-center justify-center border border-zinc-900 text-center hover:border-[#DC2626] transition-all duration-300"
          variants={itemVariants}
        >
          <motion.h1 className="text-xl cursor-pointer" variants={itemVariants}>
            Contact Us
          </motion.h1>
          <motion.p className="text-zinc-300 text-sm mb-3" variants={itemVariants}>
            Have questions? Reach out to our support team.
          </motion.p>
          <motion.button
            className="bg-[#DC2626] w-full sm:w-1/2 py-2 text-white rounded-[3px] text-base hover:bg-[#DC2626] transition-all duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.05, boxShadow: "0 0 10px rgba(220, 38, 38, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Contact Support
          </motion.button>
        </motion.div>
      </div>
      {/* Bottom section */}
      <motion.div className="w-full flex flex-col gap-5 mt-20" variants={itemVariants}>
        <div className="text-center text-zinc-300 mb-5 text-xs md:text-sm">
          © Copyright 2025, All Rights Reserved by Moiz Latif
        </div>
      </motion.div>
    </motion.div>
  )
}
