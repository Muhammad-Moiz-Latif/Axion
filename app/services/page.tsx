"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image" // Import Image component for optimized background

import bg from "../../assets/bicep.png" // Import the background image

import NavBar from "@/components/Nav" // Corrected import path
import JoinUs from "@/components/JoinUs" // Corrected import path
import { Footer } from "@/components/Footer" // Corrected import path
import Services from "@/components/Services" // The existing Services component

import { Arimo } from "next/font/google"
import { motion, type Variants } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

const arimo = Arimo({
    variable: "--font-arimo",
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
})

// Variants for the main page container to trigger overall entrance
const pageContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut",
            when: "beforeChildren",
            staggerChildren: 0.2, // Stagger sections
        },
    },
}

// Variants for individual sections
const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
}

export default function ServicesPage() {
    const pageRef = useRef(null)
    const isInView = useInView(pageRef, { once: true, amount: 0.1 }) // Trigger when 10% of the page is in view

    return (
        <motion.div
            ref={pageRef}
            className={`flex min-h-screen flex-col overflow-hidden items-center justify-center bg-black ${arimo.className}`}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={pageContainerVariants}
        >
            <NavBar />


            {/* Services Overview (using the existing Services component) */}
            <motion.section className="w-full py-16 z-20" variants={sectionVariants}>
                <Services />
            </motion.section>


            <JoinUs />
            <Footer />
        </motion.div>
    )
}
