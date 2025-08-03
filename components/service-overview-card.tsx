"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, type Variants } from "framer-motion"

interface ServiceOverviewCardProps {
  id: string
  title: string
  description: string
  icon: string
  href: string
  variants: Variants // Pass Framer Motion variants
}

// Variants for individual cards
const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export default function ServiceOverviewCard({ id, title, description, icon, href }: ServiceOverviewCardProps) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center p-6 rounded-md transition-all duration-300 hover:cursor-pointer ease-in-out
                 bg-zinc-950 hover:scale-[1.02] border border-zinc-800 hover:border-[#DC2626]"
      variants={cardVariants}
      whileHover={{ scale: 1.02, borderColor: "#DC2626" }}
      whileTap={{ scale: 0.98 }}
    >
      <Link href={href} className="flex flex-col items-center text-center">
        <img src={icon || "/placeholder.svg"} alt={title} className="size-16 mb-4" />
        <h3 className="text-4xl font-medium mb-2 text-white tracking-tight">{title}</h3>
        <p className="text-zinc-400 text-center text-sm">{description}</p>
      </Link>
    </motion.div>
  )
}
