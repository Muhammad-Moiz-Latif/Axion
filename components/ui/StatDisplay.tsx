"use client"

import { motion , Variants} from "framer-motion"
import Image from "next/image"
import type { StaticImageData } from "next/image"

interface StatDisplayProps {
  icon: StaticImageData
  value: string
  unit: string
  lineRotation: string // Tailwind class for rotation, e.g., '-rotate-26'
  lineLength: string // Tailwind class for length, e.g., 'w-8'
  lineOffset: string // Tailwind class for offset, e.g., '-left-[30px] top-[12px]'
  statOffset: string // Tailwind class for stat box offset, e.g., '-left-[155px] top-[18px]'
  rotateStatBox?: string // Optional rotation for the stat box itself
  delay?: number // Stagger delay for the entire component
}

const containerVariants : Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger children within this component
      delayChildren: 0.3, // Delay before children start animating
    },
  },
}

const circleVariants : Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.3 } },
}

const lineVariants : Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: { scaleX: 1, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
}

const statBoxVariants : Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
}

const redLineVariants : Variants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.4, ease: "easeOut" } },
}

export default function StatDisplay({
  icon,
  value,
  unit,
  lineRotation,
  lineLength,
  lineOffset,
  statOffset,
  rotateStatBox,
  delay = 0,
}: StatDisplayProps) {
  return (
    <motion.div
      className={`flex justify-between items-center relative ${rotateStatBox || ""}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: delay }} // Stagger delay for the whole component
    >
      {/* Stat Box */}
      <motion.div
        className={`flex flex-col items-center absolute z-20 ${statOffset} ${rotateStatBox || ""}`}
        variants={statBoxVariants}
      >
        <div className="flex justify-end items-center w-full">
          <Image src={icon || "/placeholder.svg"} className="size-5 mr-1" alt={`${unit} icon`} />
          <h1 className="mr-[2px] text-xl font-medium">{value}</h1>
          <h1 className="text-[12px] mt-1 text-zinc-400">{unit}</h1>
        </div>
        <motion.div
          className="w-32 h-1 bg-[#DC2626] rounded-tl-full rounded-tr-full origin-left"
          variants={redLineVariants}
        ></motion.div>
      </motion.div>

      {/* Connecting Line */}
      <motion.div
        className={`${lineLength} h-[1px] bg-zinc-400 absolute z-10 ${lineRotation} ${lineOffset} origin-left`}
        variants={lineVariants}
      ></motion.div>

      {/* Base Line (always visible, part of the static structure) */}
      <div className={`${lineLength} h-[1px] bg-zinc-400 rounded-l-full`}></div>

      {/* Circle Node */}
      <motion.div className="size-[10px] bg-zinc-400 rounded-full" variants={circleVariants}></motion.div>
    </motion.div>
  )
}
