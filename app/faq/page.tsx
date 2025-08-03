"use client"

import NavBar from "@/components/Nav"
import JoinUs from "@/components/JoinUs"
import { Footer } from "@/components/Footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import bg from '../../assets/brendan-stephens-0eFueVGCSqg-unsplash.jpg';
import Image from "next/image"
import { Arimo } from "next/font/google"
import { motion, type Variants } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

const arimo = Arimo({
  variable: "--font-arimo",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

const faqItems = [
  {
    question: "What is Axion Fitness?",
    answer:
      "Axion Fitness is a cutting-edge platform offering personalized workout plans, nutrition guidance, 1-on-1 coaching, and engaging fitness challenges. We use data-driven insights to help you achieve your fitness goals.",
  },
  {
    question: "How do your personalized workout plans work?",
    answer:
      "Our AI-powered system analyzes your biometrics, fitness level, and goals to create a dynamic workout plan that adapts as you progress. You'll receive detailed instructions and progress tracking.",
  },
  {
    question: "Do you offer nutrition planning?",
    answer:
      "Yes, we provide custom nutrition strategies that complement your workouts. Our plans help you optimize your diet for better recovery, muscle growth, and overall health.",
  },
  {
    question: "What kind of coaching is available?",
    answer:
      "We offer 1-on-1 coaching sessions with certified trainers who provide direct guidance, motivation, and feedback. You can connect with your coach virtually from anywhere.",
  },
  {
    question: "Are there fitness challenges?",
    answer:
      "Our platform features engaging fitness challenges and competitions to keep you motivated. Track your progress on leaderboards and earn rewards.",
  },
  {
    question: "What is the difference between the Annual/Quarterly and Lifetime plans?",
    answer:
      "The Annual/Quarterly plan provides access to all features on a recurring subscription basis. The Lifetime plan offers a one-time payment for permanent access to all current and future features, including early access and priority support.",
  },
  {
    question: "Can I try Axion Fitness for free?",
    answer:
      "While we don't offer a free trial, we do have a 30-day money-back guarantee if you're not satisfied with our service. Your satisfaction is our priority!",
  },
]

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

export default function FAQPage() {
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
      <Image
        src={
          bg ||
          "/placeholder.svg?height=1080&width=1920&query=abstract futuristic background, glowing lines, sense of journey"
        }
        alt="Abstract futuristic background with glowing lines"
        fill
        className="absolute object-cover inset-0 w-full h-full z-0 opacity-80"
        priority // Preload the hero image
      />



      {/* FAQ Hero Section */}
      <motion.section
        className="w-full py-24 text-white z-10 text-center flex flex-col items-center justify-center mt-14"
        variants={sectionVariants}
      >
        <motion.h1 className="text-[11px] uppercase text-zinc-500 tracking-tight mb-2" variants={sectionVariants}>
          FAQs
        </motion.h1>
        <motion.h1 className="text-6xl font-semibold tracking-tight mb-4" variants={sectionVariants}>
          Questions we think you<br />
          might like answers to
        </motion.h1>
        <motion.p className="text-sm text-zinc-400 max-w-2xl" variants={sectionVariants}>
          Find quick answers to the most common questions about Axion Fitness.
        </motion.p>
      </motion.section>

      {/* FAQ Accordion Section */}
      <motion.section
        className="w-full max-w-4xl mx-auto pt-16 pb-40 px-4 z-10"
        variants={sectionVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <motion.div key={index} variants={itemVariants} className="border-y border-zinc-800">
              <AccordionItem value={`item-${index}`} >
                <AccordionTrigger className="text-left text-md text-white hover:no-underline hover:text-[#DC2626] transition-colors duration-200">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400 text-sm py-3">{item.answer}</AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.section>


      <JoinUs />
      <Footer />
    </motion.div>
  )
}
