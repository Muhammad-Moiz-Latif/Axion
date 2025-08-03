"use client"

import NavBar from "@/components/Nav"
import JoinUs from "@/components/JoinUs"
import { Footer } from "@/components/Footer"

import { Arimo } from "next/font/google"
import { motion, type Variants } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import Link from "next/link"
import Image from "next/image" // Import Image component

import bg from "../../assets/pexels-edgarlara-14265040.jpg" // Your background image

const arimo = Arimo({
  variable: "--font-arimo",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

const pageContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
}

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
}

const contentItemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export default function PrivacyPolicyPage() {
  const pageRef = useRef(null)
  const isInView = useInView(pageRef, { once: true, amount: 0.1 })

  return (
    <motion.div
      ref={pageRef}
      // Removed bg-black from here to allow the image to show through
      className={`flex min-h-screen flex-col items-center justify-center ${arimo.className} relative`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={pageContainerVariants}
    >
      <NavBar />
      {/* Background Image */}
      <Image
        src={
          bg ||
          "/placeholder.svg?height=1080&width=1920&query=abstract futuristic background, glowing lines, sense of journey" ||
          "/placeholder.svg"
        }
        alt="Abstract futuristic background with glowing lines"
        fill
        className="absolute object-cover inset-0 opacity-50 z-0" // Ensure z-index is low
        priority // Preload the hero image
      />
      {/* Overlay for the background image */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Privacy Policy Hero Section */}
      <motion.section
        className="w-full pt-40 pb-24 text-white text-center z-10 flex flex-col items-center justify-center mt-14"
        variants={sectionVariants}
      >
        <motion.h1 className="text-[11px] uppercase text-zinc-600 tracking-tight mb-2" variants={sectionVariants}>
          (completely transparent)
        </motion.h1>
        <motion.h1 className="text-7xl font-semibold tracking-tight mb-4" variants={sectionVariants}>
          Our Privacy <br />
          Policy
        </motion.h1>
        <motion.p className=" text-white mt-2" variants={sectionVariants}>
          <span className="uppercase text-zinc-500 text-[11px]">current as of:</span>
          <br /> August 3, 2025
        </motion.p>
      </motion.section>

      {/* Privacy Policy Content */}
      <motion.section
        className="w-full max-w-4xl mx-auto bg-transparent py-16 px-4 z-10 text-white space-y-10"
        variants={sectionVariants}
      >
        <motion.div variants={contentItemVariants}>
          <h2 className="text-3xl font-semibold text-white mb-4 tracking-tight">1. Information We Collect</h2>
          <p className="text-zinc-300 mb-4">
            We collect various types of information to provide and improve our services to you. This includes:
          </p>
          <ul className="list-disc list-inside text-zinc-400 space-y-2 pl-4 text-sm">
            <li>
              <span className="italic text-red-800">Personal Identifiable Information (PII):</span> Such as your name,
              email address, and payment information when you register for an account or make a purchase.
            </li>
            <li>
              <span className=" text-red-800 italic">Usage Data:</span> Information on how the service is accessed and
              used, including IP addresses, browser types, pages visited, and time spent on those pages.
            </li>
            <li>
              <span className=" text-red-800 italic">Fitness and Health Data:</span> Information you provide related to
              your fitness goals, workout logs, nutrition intake, and biometric data (e.g., heart rate, calories burned)
              if you choose to share it.
            </li>
          </ul>
        </motion.div>

        <motion.div variants={contentItemVariants}>
          <h2 className="text-3xl font-semibold text-white mb-4 tracking-tight">2. How We Use Your Information</h2>
          <p className="text-zinc-300 mb-4">The information we collect is used for various purposes, including:</p>
          <ul className="list-disc list-inside text-zinc-400 space-y-2 pl-4 text-sm">
            <li>To provide and maintain our service, including personalized workout and nutrition plans.</li>
            <li>To notify you about changes to our service.</li>
            <li>To allow you to participate in interactive features of our service when you choose to do so.</li>
            <li>To provide customer support.</li>
            <li>To monitor the usage of our service.</li>
            <li>To detect, prevent, and address technical issues.</li>
            <li>
              To provide you with news, special offers, and general information about other goods, services, and events
              which we offer that are similar to those that you have already purchased or enquired about unless you have
              opted not to receive such information.
            </li>
          </ul>
        </motion.div>

        <motion.div variants={contentItemVariants}>
          <h2 className="text-3xl font-semibold text-white mb-4 tracking-tight">3. Data Security</h2>
          <p className="text-zinc-400 mb-4 text-sm">
            The security of your data is paramount to us. We implement a variety of security measures to maintain the
            safety of your personal information when you enter, submit, or access your personal information. These
            measures include encryption, firewalls, and secure socket layer (SSL) technology. However, no method of
            transmission over the Internet or method of electronic storage is 100% secure.
          </p>
        </motion.div>

        <motion.div variants={contentItemVariants}>
          <h2 className="text-3xl font-semibold text-white mb-4 tracking-tight">4. Your Data Protection Rights</h2>
          <p className="text-zinc-300 mb-4">
            Depending on your location, you may have the following data protection rights:
          </p>
          <ul className="list-disc list-inside text-zinc-400 space-y-2 pl-4 text-sm">
            <li>The right to access, update, or delete the information we have on you.</li>
            <li>The right of rectification.</li>
            <li>The right to object.</li>
            <li>The right of restriction.</li>
            <li>The right to data portability.</li>
            <li>The right to withdraw consent.</li>
          </ul>
          <p className="text-zinc-300 mt-4">
            If you wish to exercise any of these rights, please contact us at{" "}
            <Link href="/contact" className="text-[#DC2626] hover:underline">
              support@axionfitness.com
            </Link>
            .
          </p>
        </motion.div>

        <motion.div variants={contentItemVariants}>
          <h2 className="text-3xl font-semibold text-white mb-4 tracking-tight">
            5. Changes to This Privacy Policy
          </h2>
          <p className="text-zinc-400">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
          </p>
        </motion.div>
      </motion.section>

      <motion.div variants={contentItemVariants} className="z-10">
        <JoinUs />
        <Footer />
      </motion.div>

    </motion.div>
  )
}
