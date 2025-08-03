"use client"

import Image from "next/image"
import { motion, type Variants } from "framer-motion"
import { Check } from "lucide-react" // Import icons
import bg from '../assets/pexels-michal-packo-1012387829-28078293.jpg'
import type { ServiceContentBlock } from "@/lib/service-data"

interface ServiceDetailSectionProps {
  block: ServiceContentBlock
  index: number // For staggered animation delay
}

// Variants for each content block
const blockVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      delay: 0.1, // Small delay for each block
    },
  },
}

// Variants for inner elements (e.g., text, image) within a block
const innerItemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export default function ServiceDetailSection({ block, index }: ServiceDetailSectionProps) {
  return (
    <motion.div
      className="w-full max-w-6xl mx-auto py-16 px-4"
      variants={blockVariants}
      initial="hidden"
      animate="visible"
    >
      {block.type === "text" && (
        <div className="bg-zinc-950 p-10 rounded-xl border border-zinc-800 text-center shadow-2xl">
          <motion.h2 className="text-4xl font-semibold text-white mb-4 tracking-tight" variants={innerItemVariants}>
            {block.title}
          </motion.h2>
          <motion.p className="text-zinc-400 text-lg max-w-3xl mx-auto" variants={innerItemVariants}>
            {block.description}
          </motion.p>
        </div>
      )}

      {block.type === "image-text" && (
        <div
          className={`flex flex-col md:flex-row items-center gap-10 bg-zinc-950 p-8 rounded-xl border border-zinc-800 shadow-2xl ${
            block.layout === "right" ? "md:flex-row-reverse" : ""
          }`}
        >
          <motion.div className="md:w-2/3" variants={innerItemVariants}>
            <Image
              src={bg.src || "/placeholder.svg"}
              alt={block.imageAlt}
              width={800} // Increased width for better display
              height={500} // Increased height for better display
              className="rounded-lg object-cover w-full h-auto border border-zinc-700 shadow-xl"
            />
          </motion.div>
          <motion.div className="md:w-1/3 space-y-4" variants={innerItemVariants}>
            <h2 className="text-4xl font-semibold text-white tracking-tight">{block.title}</h2>
            <p className="text-zinc-400 text-lg">{block.description}</p>
          </motion.div>
        </div>
      )}

      {block.type === "features" && (
        <div className="bg-zinc-950 p-10 rounded-xl border border-zinc-800 text-center shadow-2xl">
          <motion.h2 className="text-4xl font-semibold text-white mb-8 tracking-tight" variants={innerItemVariants}>
            {block.title}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {block.features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-3 bg-zinc-900 p-6 rounded-lg border border-zinc-700 hover:border-[#DC2626] transition-colors duration-300 shadow-md"
                variants={innerItemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <Check className="size-7 text-[#DC2626] flex-shrink-0 mt-1" />
                <p className="text-zinc-300 text-lg text-left">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {block.type === "steps" && (
        <div className="bg-zinc-950 p-10 rounded-xl border border-zinc-800 text-center shadow-2xl">
          <motion.h2 className="text-4xl font-semibold text-white mb-8 tracking-tight" variants={innerItemVariants}>
            {block.title}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {block.steps.map((step, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col items-center text-center bg-zinc-900 p-6 rounded-lg border border-zinc-700 hover:border-[#DC2626] transition-colors duration-300 shadow-md"
                variants={innerItemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="size-16 bg-[#DC2626] rounded-full flex items-center justify-center text-white text-3xl font-bold mb-4">
                  {idx + 1}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2 tracking-tight">{step.title}</h3>
                <p className="text-zinc-400 text-md">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  )
}
