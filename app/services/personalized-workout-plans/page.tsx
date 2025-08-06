"use client"

import { motion, type Variants } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import NavBar from "@/components/Nav"
import JoinUs from "@/components/JoinUs"
import { Footer } from "@/components/Footer"
import { Arimo } from "next/font/google"
import { Activity, Flame, Award } from "lucide-react"
import AnimatedCounter from "@/components/ui/AnimatedCounter"

const arimo = Arimo({
    variable: "--font-arimo",
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
})

// Animation variants
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

const heroTextVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
}

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, ease: "easeOut" },
    },
}

const chartContainerVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut",
            when: "beforeChildren",
            staggerChildren: 0.1,
        },
    },
}

export default function DashboardPage() {
    const pageRef = useRef(null)
    const isInView = useInView(pageRef, { once: true, amount: 0.1 })

    // Data for the "Progress at a Glance" cards
    const progressData = [
        {
            icon: Activity,
            title: "Workouts Completed",
            value: 120,
            description: "Total sessions logged this year.",
        },
        {
            icon: Flame,
            title: "Calories Burned",
            value: 85000,
            description: "Estimated calories expended.",
        },
        {
            icon: Award,
            title: "Personal Bests",
            value: 15,
            description: "New records achieved across exercises.",
        },
    ]

    return (
        <motion.div
            ref={pageRef}
            className={`flex min-h-screen flex-col items-center justify-center bg-black ${arimo.className}`}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={pageContainerVariants}
        >
            <NavBar />

            {/* Dashboard Hero Section */}
            <motion.section
                className="relative w-full mt-28 h-[70vh] flex flex-col items-center justify-center text-white text-center overflow-hidden"
                variants={sectionVariants}
            >
                <div className="absolute inset-0 bg-black z-10" />
                <motion.div className="z-20 max-w-6xl px-6">
                    <motion.h1 className="text-xs text-zinc-500 uppercase mb-3 font-medium" variants={heroTextVariants}>
                        (Your Progress Hub)
                    </motion.h1>
                    <motion.h2
                        className="text-6xl md:text-8xl leading-22 font-medium tracking-tight mb-5 bg-gradient-to-r from-white via-zinc-100 to-zinc-300 bg-clip-text text-transparent"
                        variants={heroTextVariants}
                    >
                        Your Fitness Journey,
                        <br />
                        <span className="text-[#DC2626]">Visualized.</span>
                    </motion.h2>
                    <motion.p className="text-sm text-zinc-400 max-w-4xl" variants={heroTextVariants}>
                        Track every milestone, analyze your performance, and stay motivated with a <br />
                        clear overview of your progress.
                    </motion.p>
                    <motion.div
                        className="mt-12"
                        variants={heroTextVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link href="/pricing">
                            <Button className="bg-[#DC2626] hover:bg-red-700 text-white py-6 px-12 rounded-md transition-all duration-300 shadow-lg hover:shadow-red-500/25">
                                View Detailed Analytics
                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>
            </motion.section>

            <div className="px-8 flex justify-center w-full my-20">
                <div
                    className="w-[70%] h-[0.5px] bg-zinc-700"
                    style={{
                        maskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
                        WebkitMaskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
                    }}
                ></div>
            </div>

            {/* Progress at a Glance Section (Cards) */}
            <motion.section className="w-full pb-24 px-8 text-white" variants={sectionVariants}>
                <div className="max-w-7xl mx-auto">
                    <motion.div className="text-center mb-24" variants={cardVariants}>
                        <h2 className="text-6xl font-medium mb-3 tracking-tight">Progress at a Glance</h2>
                        <p className="text-sm text-zinc-400 max-w-3xl mx-auto">
                            Quick insights into your key fitness achievements.
                        </p>
                    </motion.div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {progressData.map((item) => (
                            <motion.div
                                key={item.title}
                                className="bg-gradient-to-br from-zinc-950 to-black border border-zinc-800 rounded-2xl p-8 shadow-2xl text-center group"
                                variants={cardVariants}
                                whileHover={{ y: -10, scale: 1.02, borderColor: "#DC2626", cursor: "pointer" }}
                                transition={{ duration: 0.3 }}
                            >
                                <item.icon className="size-16 text-[#DC2626] mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                                <AnimatedCounter from={0} to={item.value} className="text-6xl text-white mb-2"/>
                                <p className="text-xl text-zinc-200 mb-2">{item.title}</p>
                                <p className="text-zinc-400 text-sm">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </motion.section>

            {/* Enhanced Charts Section */}
            <motion.section className="w-full mt-10 py-24 px-6 text-white relative overflow-hidden" variants={sectionVariants}>
                <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
                    <motion.div className="text-center" variants={cardVariants}>
                        <h2 className="text-6xl font-medium tracking-tight mb-3">
                            Your Performance <span className="text-[#DC2626]">Overview</span>
                        </h2>
                        <p className="text-sm text-zinc-400 max-w-3xl mx-auto">
                            Dive deep into your data with comprehensive visualizations.
                        </p>
                    </motion.div>

                    <div className="relative w-full max-w-7xl h-[700px] flex justify-center items-center">
                        {/* Main Central Chart */}
                        <motion.div
                            className="w-[800px] h-[400px] z-10 bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl shadow-2xl"
                            variants={chartContainerVariants}
                            whileHover={{ scale: 1.02, y: -5 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="p-6 h-full">
                                <h3 className="text-xl font-semibold text-white mb-2">Workout Progress</h3>
                                <p className="text-sm text-zinc-400 mb-4">Monthly volume and intensity tracking</p>
                                <div className="h-[300px] relative">
                                    <svg className="w-full h-full" viewBox="0 0 400 250">
                                        {/* Grid lines */}
                                        <defs>
                                            <pattern id="grid" width="40" height="25" patternUnits="userSpaceOnUse">
                                                <path d="M 40 0 L 0 0 0 25" fill="none" stroke="#374151" strokeWidth="0.5" opacity="0.3" />
                                            </pattern>
                                        </defs>
                                        <rect width="100%" height="100%" fill="url(#grid)" />

                                        {/* Main trend line */}
                                        <path
                                            d="M 20 200 Q 100 180 150 120 T 280 80 T 380 40"
                                            stroke="#DC2626"
                                            strokeWidth="3"
                                            fill="none"
                                            strokeLinecap="round"
                                        />

                                        {/* Area under curve */}
                                        <path
                                            d="M 20 200 Q 100 180 150 120 T 280 80 T 380 40 L 380 230 L 20 230 Z"
                                            fill="url(#redGradient)"
                                            opacity="0.2"
                                        />

                                        {/* Data points */}
                                        {[20, 80, 150, 220, 280, 340, 380].map((x, i) => (
                                            <circle
                                                key={i}
                                                cx={x}
                                                cy={200 - (i * 25)}
                                                r="4"
                                                fill="#DC2626"
                                                stroke="#fff"
                                                strokeWidth="2"
                                            />
                                        ))}

                                        <defs>
                                            <linearGradient id="redGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                                <stop offset="0%" stopColor="#DC2626" stopOpacity="0.3" />
                                                <stop offset="100%" stopColor="#DC2626" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </motion.div>

                        {/* Left Floating Chart - Rotated */}
                        <motion.div
                            className="absolute left-10 bottom-25 w-[280px] h-[240px] z-30 bg-gradient-to-br from-zinc-950 to-zinc-900 border border-zinc-700 rounded-xl shadow-xl -rotate-6"
                            variants={chartContainerVariants}
                            whileHover={{
                                scale: 1.05,
                                rotate: -5,
                                zIndex: 30,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <div className="p-4 h-full">
                                <h4 className="text-sm font-semibold text-white mb-1">Body Composition</h4>
                                <p className="text-xs text-zinc-500 mb-3">Muscle vs Fat ratio</p>
                                <div className="h-[160px] relative">
                                    <svg className="w-full h-full" viewBox="0 0 240 140">
                                        {/* Bar chart */}
                                        {[
                                            { x: 20, height: 80, color: '#DC2626' },
                                            { x: 50, height: 95, color: '#DC2626' },
                                            { x: 80, height: 110, color: '#DC2626' },
                                            { x: 110, height: 85, color: '#6B7280' },
                                            { x: 140, height: 70, color: '#6B7280' },
                                            { x: 170, height: 55, color: '#6B7280' },
                                        ].map((bar, i) => (
                                            <rect
                                                key={i}
                                                x={bar.x}
                                                y={140 - bar.height}
                                                width="18"
                                                height={bar.height}
                                                fill={bar.color}
                                                rx="2"
                                                opacity="0.8"
                                            />
                                        ))}

                                    </svg>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Floating Chart - Rotated */}
                        <motion.div
                            className="absolute right-10 top-25 w-[280px] h-[240px] z-30 bg-gradient-to-br from-zinc-950 to-zinc-900 border border-zinc-700 rounded-xl shadow-xl rotate-6"
                            variants={chartContainerVariants}
                            whileHover={{
                                scale: 1.05,
                                rotate: 5,
                                zIndex: 30,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <div className="p-4 h-full">
                                <h4 className="text-sm font-semibold text-white mb-1">Weekly Activity</h4>
                                <p className="text-xs text-zinc-500 mb-3">Calories burned per day</p>
                                <div className="h-[160px] relative">
                                    <svg className="w-full h-full" viewBox="0 0 240 140">
                                        {/* Area chart */}
                                        <path
                                            d="M 20 120 L 50 100 L 80 90 L 110 105 L 140 85 L 170 110 L 200 95 L 220 100"
                                            stroke="#DC2626"
                                            strokeWidth="2"
                                            fill="none"
                                        />

                                        <path
                                            d="M 20 120 L 50 100 L 80 90 L 110 105 L 140 85 L 170 110 L 200 95 L 220 100 L 220 130 L 20 130 Z"
                                            fill="url(#areaGradient)"
                                            opacity="0.3"
                                        />

                                        {/* Data points */}
                                        {[20, 50, 80, 110, 140, 170, 200, 220].map((x, i) => (
                                            <circle
                                                key={i}
                                                cx={x}
                                                cy={120 - (Math.sin(i) * 15 + 15)}
                                                r="3"
                                                fill="#DC2626"
                                                opacity="0.8"
                                            />
                                        ))}

                                        <defs>
                                            <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                                <stop offset="0%" stopColor="#DC2626" stopOpacity="0.4" />
                                                <stop offset="100%" stopColor="#DC2626" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>

                                        {/* Day labels */}
                                        <text x="20" y="135" fill="#6B7280" fontSize="8">M</text>
                                        <text x="50" y="135" fill="#6B7280" fontSize="8">T</text>
                                        <text x="80" y="135" fill="#6B7280" fontSize="8">W</text>
                                        <text x="110" y="135" fill="#6B7280" fontSize="8">T</text>
                                        <text x="140" y="135" fill="#6B7280" fontSize="8">F</text>
                                        <text x="170" y="135" fill="#6B7280" fontSize="8">S</text>
                                        <text x="200" y="135" fill="#6B7280" fontSize="8">S</text>
                                    </svg>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            <JoinUs />
            <Footer />
        </motion.div>
    )
}