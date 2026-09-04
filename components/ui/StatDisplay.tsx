"use client"

import { motion, type Variants } from "framer-motion"
import Image from "next/image"
import type { StaticImageData } from "next/image"

interface StatDisplayProps {
  icon: StaticImageData
  value: string
  unit: string
  lineRotation: string
  lineLength: string
  lineOffset: string
  statOffset: string
  rotateStatBox?: string
  delay?: number
}

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const nodeVariants: Variants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },

  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 240,
      damping: 18,
    },
  },
}

const lineVariants: Variants = {
  hidden: {
    scaleX: 0,
    opacity: 0,
  },

  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

const statVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 8,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
    },
  },
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
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      transition={{ delay }}
      className={`
        relative
        flex
        items-center
        justify-between
        ${rotateStatBox || ""}
      `}
    >

      {/* =====================================================
          ANCHOR NODE
      ===================================================== */}

      <motion.div
        variants={nodeVariants}
        className="
          relative
          z-30
          size-[9px]
          shrink-0
          rounded-full
          border
          border-white/50
          bg-[#DC2626]
          shadow-[0_0_0_3px_rgba(220,38,38,.08),0_0_14px_rgba(220,38,38,.65)]
        "
      >

        {/* tiny pulse */}
        <motion.div
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.7, 0, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
          }}
          className="
            absolute
            inset-[-3px]
            rounded-full
            border
            border-red-500/40
          "
        />

      </motion.div>


      {/* =====================================================
          CONNECTING LINE
      ===================================================== */}

      <motion.div
        variants={lineVariants}
        className={`
          absolute
          z-10
          h-px
          origin-left
          bg-gradient-to-r
          from-red-500/80
          via-white/35
          to-white/5
          ${lineLength}
          ${lineRotation}
          ${lineOffset}
        `}
      />


      {/* =====================================================
          ORIGINAL BASE LINE
      ===================================================== */}

      <div
        className={`
          ${lineLength}
          h-px
          rounded-l-full
          bg-white/10
        `}
      />


      {/* =====================================================
          STAT LABEL
      ===================================================== */}

      <motion.div
        variants={statVariants}
        className={`
          absolute
          z-40
          ${statOffset}
          ${rotateStatBox || ""}
        `}
      >

        <div
          className="
            relative
            min-w-[128px]
            border-l
            border-white/15
            bg-black/45
            px-3
            py-2.5
            backdrop-blur-md
          "
        >

          {/* red measurement tick */}

          <div className="absolute left-[-1px] top-0 h-4 w-px bg-red-500" />


          {/* top row */}

          <div className="flex items-center justify-between gap-5">

            <div className="flex items-center gap-1.5">

              <Image
                src={icon}
                alt=""
                className="size-3.5 object-contain opacity-75"
              />

              <span className="text-[7px] font-medium uppercase tracking-[0.22em] text-zinc-500">
                {unit}
              </span>

            </div>

            <span className="text-[6px] uppercase tracking-[0.2em] text-zinc-700">
              LIVE
            </span>

          </div>


          {/* value */}

          <div className="mt-1 flex items-baseline gap-1">

            <span className="text-[21px] font-medium leading-none tracking-[-0.04em] text-white">
              {value}
            </span>

            <span className="text-[7px] uppercase tracking-[0.18em] text-zinc-600">
              measured
            </span>

          </div>


          {/* measurement bar */}

          <div className="mt-2 flex items-center gap-1">

            <span className="h-[2px] w-6 bg-red-500" />

            <span className="h-px w-3 bg-white/10" />

            <span className="h-px w-2 bg-white/10" />

          </div>

        </div>

      </motion.div>

    </motion.div>
  )
}