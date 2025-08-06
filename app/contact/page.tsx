"use client"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import NavBar from "@/components/Nav"
import JoinUs from "@/components/JoinUs"
import { Footer } from "@/components/Footer"

import { Arimo } from "next/font/google"
import { motion, type Variants } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Linkedin, Youtube } from "lucide-react" // Icons for contact info

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

const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

const itemVariant: Variants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};


export default function ContactPage() {
    const pageRef = useRef(null)
    const isInView = useInView(pageRef, { once: true, amount: 0.1 })

    return (
        <motion.div
            ref={pageRef}
            className={`flex min-h-screen flex-col items-center justify-center bg-black ${arimo.className}`}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={pageContainerVariants}
        >
            <NavBar />

            {/* Contact Hero Section */}
            <motion.section
                className="w-full py-24 text-white text-center flex flex-col items-center justify-center mt-14"
                variants={sectionVariants}
            >
                <motion.h1 className="text-6xl font-semibold tracking-tight mb-4" variants={sectionVariants}>
                    Get In Touch
                </motion.h1>
                <motion.p className="text-sm text-zinc-400 max-w-2xl" variants={sectionVariants}>
                    Have questions, feedback, or just want to say hello? We&apos;d love to hear from you.
                </motion.p>
            </motion.section>

            {/* Contact Form and Info Section */}
            <motion.section
                className="w-full max-w-6xl mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-2 gap-12"
                variants={sectionVariants}
            >
                {/* Contact Form */}
                <motion.div className="bg-zinc-950 p-8 rounded-lg shadow-lg border border-zinc-800" variants={itemVariants}>
                    <h2 className="text-3xl font-semibold text-white mb-6 tracking-tight">Send Us a Message</h2>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="sr-only">
                                Your Name
                            </label>
                            <Input
                                id="name"
                                type="text"
                                placeholder="Your Name"
                                className="w-full bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 focus:border-[#DC2626] focus:ring-0 outline-none transition-all duration-300"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">
                                Your Email
                            </label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Your Email"
                                className="w-full bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 focus:border-[#DC2626] focus:ring-0 outline-none transition-all duration-300"
                            />
                        </div>
                        <div>
                            <label htmlFor="subject" className="sr-only">
                                Subject
                            </label>
                            <Input
                                id="subject"
                                type="text"
                                placeholder="Subject"
                                className="w-full bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 focus:border-[#DC2626] focus:ring-0 outline-none transition-all duration-300"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="sr-only">
                                Your Message
                            </label>
                            <Textarea
                                id="message"
                                placeholder="Your Message"
                                rows={5}
                                className="w-full bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 focus:border-[#DC2626] focus:ring-0 outline-none transition-all duration-300"
                            />
                        </div>
                        <motion.button
                            type="submit"
                            className="w-full bg-[#DC2626] text-white py-3 rounded-[3px] text-base font-medium cursor-pointer hover:bg-red-700 transition-colors duration-200"
                            whileHover={{ scale: 1.02, boxShadow: "0 0 15px rgba(220, 38, 38, 0.6)" }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Send Message
                        </motion.button>
                    </form>
                </motion.div>

                {/* Contact Information */}
                <motion.div className="space-y-8" variants={itemVariants}>
                    <div className="bg-zinc-950 p-8 rounded-lg shadow-lg border border-zinc-800">
                        <h3 className="text-3xl font-semibold text-white mb-6 tracking-tight">Contact Information</h3>
                        <div className="space-y-4 text-zinc-300">
                            <div className="flex items-center gap-3">
                                <Mail className="size-6 text-[#DC2626]" />
                                <p className="text-lg">support@axionfitness.com</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="size-6 text-[#DC2626]" />
                                <p className="text-lg">+1 (555) 123-4567</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin className="size-6 text-[#DC2626] mt-1" />
                                <p className="text-lg">
                                    123 Fitness Blvd,
                                    <br />
                                    Suite 456,
                                    <br />
                                    Metropolis, CA 90210
                                </p>
                            </div>
                        </div>
                        <motion.div variants={itemVariant} className="flex flex-col items-start justify-center w-full gap-2 mt-8">
                            <h3 className="text-3xl font-semibold text-white tracking-tight mb-6">Social Media</h3>
                            <div className='flex justify-center gap-12 w-full mb-4'>
                                <motion.button whileHover={{ scale: 1.05, cursor: 'pointer' }}
                                    whileTap={{ scale: 0.95 }}><Instagram className="h-8 w-8 text-[#DC2626]" /></motion.button>
                                <motion.button whileHover={{ scale: 1.05, cursor: 'pointer' }}
                                    whileTap={{ scale: 0.95 }}><Facebook className="h-8 w-8 text-[#DC2626]" /></motion.button>
                                <motion.button whileHover={{ scale: 1.05, cursor: 'pointer' }}
                                    whileTap={{ scale: 0.95 }}><Twitter className="h-8 w-8 text-[#DC2626]" /></motion.button>
                                <motion.button whileHover={{ scale: 1.05, cursor: 'pointer' }}
                                    whileTap={{ scale: 0.95 }}><Linkedin className="h-8 w-8 text-[#DC2626]" /></motion.button>
                                <motion.button whileHover={{ scale: 1.05, cursor: 'pointer' }}
                                    whileTap={{ scale: 0.95 }}><Youtube className="h-8 w-8 text-[#DC2626]" /></motion.button>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.section>

            <JoinUs />
            <Footer />
        </motion.div>
    )
}
