"use client"

import { Arimo } from 'next/font/google'
import { motion, type Variants } from "framer-motion"
import Link from "next/link"
import Image from "next/image" // Import Image component

import logo from '../../../assets/AXION.png'; // Import the logo asset
import bg from '../../../assets/legpress.jpg'; // Import the image asset

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const arimo = Arimo({
    variable: "--font-arimo",
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
})

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
            staggerChildren: 0.1,
        },
    },
}

// Variants for text elements (title, description, links)
const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

// Variants for input fields and buttons
const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

// Variants for the logo
const logoVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut", delay: 0.2 } },
}

export default function Login() {
    return (
        <motion.div
            className={`min-h-screen flex items-center justify-center bg-black text-white ${arimo.className} relative`}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            {/* Background Image Layer */}
            <Image
                src={bg || "/placeholder.svg"}
                alt="Leg Press Machine in Gym"
                fill
                className="absolute inset-0 w-full h-full object-cover z-0"
                priority // Preload the background image
            />
            {/* Overlay for the background image, to darken it */}
            <div className="absolute inset-0 bg-black/50 z-0" />

            <motion.div
                className="relative z-10 w-full max-w-md overflow-hidden p-8 space-y-6 bg-zinc-950 rounded-lg shadow-lg border border-zinc-800 "
                variants={containerVariants} // Apply container variants to the card itself
            >
                <motion.div
                    className="flex justify-center items-center overflow-hidden rounded-full bg-zinc-950  w-32 h-32 mx-auto -mt-12 mb-4 shadow-md transition-all ease-in-out"
                    variants={logoVariants} whileHover={{ scale: "1.3", cursor: "pointer" }}
                >
                    <Link href="/"> <Image
                        src={logo}
                        alt="Axion logo"
                        width={128}
                        height={128}
                        className="object-contain scale-125" // Scale up to compensate for padding
                        priority
                    /></Link>
                </motion.div>

                <motion.div className="text-center" variants={textVariants}>
                    <h1 className="text-5xl font-semibold tracking-tight text-[#DC2626] mb-2">Welome Back!</h1>
                    <p className="text-sm text-zinc-400">Access your personalized fitness journey.</p>
                </motion.div>

                <form className="space-y-4">
                    <motion.div variants={itemVariants}>
                        <label htmlFor="email" className="sr-only">
                            Email or Username
                        </label>
                        <Input
                            id="email"
                            type="text"
                            placeholder="Email or Username"
                            className="w-full bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 focus:border-[#DC2626] focus:ring-0 outline-none transition-all duration-300"
                        />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <label htmlFor="password" className="sr-only">
                            Password
                        </label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="Password"
                            className="w-full bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 focus:border-[#DC2626] focus:ring-0 outline-none transition-all duration-300"
                        />
                    </motion.div>

                    <motion.div variants={itemVariants} whileHover={{ scale: 1.02, boxShadow: "0 0 15px rgba(220, 38, 38, 0.6)" }}
                        whileTap={{ scale: 0.98 }}>
                        <Button
                            type="submit"
                            className="w-full bg-[#DC2626] text-white py-2 rounded-[3px] text-base font-medium cursor-pointer hover:bg-red-700 transition-colors duration-200"

                        >
                            Login
                        </Button>
                    </motion.div>

                    <motion.div variants={itemVariants} whileHover={{ scale: 1.02, borderColor: "#DC2626" }}
                        whileTap={{ scale: 0.98 }}>
                        <Button
                            type="button" // Use type="button" for non-form submission buttons
                            className="w-full bg-transparent border border-zinc-700 text-white py-2 rounded-[3px] text-base font-medium cursor-pointer hover:bg-zinc-800 transition-colors duration-200 flex items-center justify-center gap-2"

                        >
                            {/* Placeholder for Google Icon */}
                            <span className="size-5 flex items-center justify-center">G</span>
                            Sign in with Google
                        </Button>
                    </motion.div>
                </form>

                <motion.div className="text-center text-sm space-y-2" variants={textVariants}>
                    <Link href="#" className="text-zinc-400 hover:text-[#DC2626] transition-colors duration-200">
                        Forgot Password?
                    </Link>
                    <p className="text-zinc-500">
                        Don't have an account?{" "}
                        <Link href="/signup" className="text-[#DC2626] hover:underline transition-colors duration-200">
                            Sign Up
                        </Link>
                    </p>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}
