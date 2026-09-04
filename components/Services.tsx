"use client"

import Image from "next/image"
import { Arimo } from "next/font/google"
import { motion, useInView, type Variants } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight, Activity, ChevronRight } from "lucide-react"
import { useRouter } from "next/navigation"

import workoutplan from "../assets/report.png"
import nutritionplanning from "../assets/meal.png"
import coaching from "../assets/whistle.png"
import routine from "../assets/calendar.png"

const arimo = Arimo({
  variable: "--font-arimo",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

const servicesData = [
  {
    id: "workout-plans",
    number: "01",
    title: "Personalized Workout Plans",
    shortTitle: "TRAINING",
    description:
      "Training architecture built around your body, your goals, and the way your performance evolves.",
    icon: workoutplan,
    href: "/services/personalized-workout-plans",
    metric: "ADAPTIVE",
  },
  {
    id: "nutrition-planning",
    number: "02",
    title: "Nutrition Planning",
    shortTitle: "NUTRITION",
    description:
      "Fuel your performance with nutrition strategies designed around your training demands.",
    icon: nutritionplanning,
    href: "/services/nutrition-planning",
    metric: "PRECISION",
  },
  {
    id: "one-on-one-coaching",
    number: "03",
    title: "1-on-1 Coaching",
    shortTitle: "COACHING",
    description:
      "Direct guidance, accountability, and adjustments from coaches who understand your progress.",
    icon: coaching,
    href: "/services/one-on-one-coaching",
    metric: "PERSONAL",
  },
  {
    id: "fitness-challenges",
    number: "04",
    title: "Fitness Challenges",
    shortTitle: "CHALLENGES",
    description:
      "Structured challenges that turn consistency into measurable momentum.",
    icon: routine,
    href: "/services/fitness-challenges",
    metric: "MOMENTUM",
  },
]

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
}

const revealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function Services() {
  const router = useRouter()
  const sectionRef = useRef<HTMLDivElement>(null)

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
  })

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={`
        relative
        w-full
        overflow-hidden
        bg-black
        px-5
        py-24
        text-white
        md:px-8
        md:py-32
        ${arimo.className}
      `}
    >
      {/* =====================================================
          AMBIENT BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* subtle vertical center light */}
        <div
          className="
            absolute
            left-1/2
            top-[20%]
            h-[500px]
            w-[500px]
            -translate-x-1/2
            rounded-full
            bg-[#DC2626]/[0.025]
            blur-[120px]
          "
        />

        {/* technical grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
          "
          style={{
            backgroundImage: `
              linear-gradient(to right, #ffffff 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1400px]">
        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <motion.div
          variants={revealVariants}
          className="
            mb-14
            flex
            flex-col
            justify-between
            gap-10
            md:mb-16
            md:flex-row
            md:items-end
          "
        >
          <div>
            {/* eyebrow */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#DC2626]" />

              <span className="text-[9px] font-medium tracking-[0.3em] text-zinc-500">
                AXION / PERFORMANCE SYSTEMS
              </span>
            </div>

            <h2
              className="
                max-w-3xl
                text-4xl
                font-medium
                leading-[1.02]
                tracking-[-0.045em]
                text-white
                sm:text-5xl
                md:text-6xl
              "
            >
              More than a workout.
              <br />

              <span className="text-zinc-600">
                A system built around you.
              </span>
            </h2>
          </div>

          {/* right metadata */}
          <div className="max-w-xs md:pb-1">
            <div className="mb-3 flex items-center gap-2">
              <Activity className="size-3 text-[#DC2626]" />

              <span className="text-[9px] uppercase tracking-[0.25em] text-zinc-500">
                Integrated approach
              </span>
            </div>

            <p className="text-xs leading-5 text-zinc-600">
              Training, nutrition, coaching and consistency working as one
              performance system.
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            SYSTEM INDEX
        ===================================================== */}

        <motion.div
          variants={revealVariants}
          className="
            mb-5
            flex
            items-center
            justify-between
            border-y
            border-zinc-900
            py-3
          "
        >
          <span className="text-[8px] uppercase tracking-[0.3em] text-zinc-700">
            Performance protocols
          </span>

          <span className="text-[8px] tabular-nums tracking-[0.2em] text-zinc-700">
            04 SYSTEMS / 01 OBJECTIVE
          </span>
        </motion.div>

        {/* =====================================================
            SERVICE GRID
        ===================================================== */}

        <div className="grid grid-cols-1 gap-2 lg:grid-cols-12">
          {/* ===================================================
              PRIMARY SERVICE
          =================================================== */}

          <motion.div
            variants={cardVariants}
            onClick={() => router.push(servicesData[0].href)}
            className="
              group
              relative
              min-h-[500px]
              cursor-pointer
              overflow-hidden
              border
              border-zinc-900
              bg-zinc-[950]
              p-7
              transition-colors
              duration-500
              hover:border-zinc-700
              lg:col-span-7
            "
          >
            {/* large background number */}
            <div
              className="
                pointer-events-none
                absolute
                -right-5
                -top-16
                select-none
                text-[260px]
                font-bold
                leading-none
                tracking-[-0.1em]
                text-white/[0.018]
              "
            >
              01
            </div>

            {/* red scanning line */}
            <motion.div
              className="
                absolute
                left-0
                top-0
                h-px
                w-full
                origin-left
                bg-[#DC2626]
                opacity-0
                transition-opacity
                duration-500
                group-hover:opacity-100
              "
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.6 }}
            />

            {/* top metadata */}
            <div className="relative flex items-start justify-between">
              <div className="flex items-center gap-3">
                <span className="text-[10px] tabular-nums text-[#DC2626]">
                  / {servicesData[0].number}
                </span>

                <span className="h-px w-8 bg-zinc-800" />

                <span className="text-[9px] uppercase tracking-[0.25em] text-zinc-600">
                  {servicesData[0].shortTitle}
                </span>
              </div>

              <ArrowUpRight
                className="
                  size-5
                  text-zinc-700
                  transition-all
                  duration-300
                  group-hover:-translate-y-1
                  group-hover:translate-x-1
                  group-hover:text-[#DC2626]
                "
              />
            </div>

            {/* center visual */}
            <div
              className="
                absolute
                left-1/2
                top-1/2
                flex
                -translate-x-1/2
                -translate-y-1/2
                items-center
                justify-center
              "
            >
              <div
                className="
                  absolute
                  size-44
                  rounded-full
                  border
                  border-zinc-900
                  transition-all
                  duration-700
                  group-hover:size-52
                  group-hover:border-[#DC2626]/30
                "
              />

              <div
                className="
                  absolute
                  size-28
                  rounded-full
                  border
                  border-zinc-800
                  transition-all
                  duration-700
                  group-hover:size-36
                "
              />

              <div
                className="
                  relative
                  flex
                  size-20
                  items-center
                  justify-center
                  border
                  border-zinc-800
                  bg-black
                  transition-all
                  duration-500
                  group-hover:border-[#DC2626]
                  group-hover:shadow-[0_0_50px_rgba(220,38,38,0.12)]
                "
              >
                <Image
                  src={servicesData[0].icon}
                  alt={servicesData[0].title}
                  className="
                    size-10
                    object-contain
                    opacity-50
                    grayscale
                    transition-all
                    duration-500
                    group-hover:scale-110
                    group-hover:opacity-100
                    group-hover:grayscale-0
                  "
                />
              </div>

              {/* crosshair */}
              <span className="absolute -top-4 left-1/2 h-8 w-px -translate-x-1/2 bg-zinc-800" />
              <span className="absolute -bottom-4 left-1/2 h-8 w-px -translate-x-1/2 bg-zinc-800" />
              <span className="absolute -left-4 top-1/2 h-px w-8 -translate-y-1/2 bg-zinc-800" />
              <span className="absolute -right-4 top-1/2 h-px w-8 -translate-y-1/2 bg-zinc-800" />
            </div>

            {/* bottom content */}
            <div className="absolute inset-x-7 bottom-7">
              <div className="mb-4 flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-[#DC2626]" />

                <span className="text-[8px] uppercase tracking-[0.25em] text-zinc-600">
                  {servicesData[0].metric}
                </span>
              </div>

              <h3
                className="
                  max-w-lg
                  text-3xl
                  font-medium
                  leading-tight
                  tracking-[-0.03em]
                  text-white
                  transition-colors
                  duration-300
                  group-hover:text-zinc-200
                  md:text-4xl
                "
              >
                {servicesData[0].title}
              </h3>

              <div className="mt-4 flex items-end justify-between gap-8">
                <p className="max-w-md text-xs leading-5 text-zinc-600 transition-colors duration-300 group-hover:text-zinc-400">
                  {servicesData[0].description}
                </p>

                <div className="hidden shrink-0 items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-zinc-700 transition-colors duration-300 group-hover:text-[#DC2626] sm:flex">
                  Explore
                  <ChevronRight className="size-3" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* ===================================================
              SECONDARY SERVICES
          =================================================== */}

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 lg:col-span-5 lg:grid-cols-1">
            {servicesData.slice(1).map((service) => (
              <ServiceRow
                key={service.id}
                service={service}
                onClick={() => router.push(service.href)}
              />
            ))}
          </div>
        </div>

        {/* =====================================================
            BOTTOM SYSTEM STATEMENT
        ===================================================== */}

        <motion.div
          variants={revealVariants}
          className="
            mt-5
            flex
            flex-col
            gap-4
            border-t
            border-zinc-900
            pt-5
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p className="text-[9px] uppercase tracking-[0.25em] text-zinc-700">
            Your body is the project.
          </p>

          <div className="flex items-center gap-3">
            <span className="text-[9px] tabular-nums text-zinc-700">
              AX / 04
            </span>

            <div className="h-px w-12 bg-zinc-800" />

            <span className="text-[9px] uppercase tracking-[0.25em] text-zinc-500">
              Start building
            </span>

            <span className="flex size-6 items-center justify-center border border-zinc-800">
              <ArrowUpRight className="size-3 text-[#DC2626]" />
            </span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

/* =========================================================
   SECONDARY SERVICE ROW
========================================================= */

function ServiceRow({
  service,
  onClick,
}: {
  service: (typeof servicesData)[number]
  onClick: () => void
}) {
  return (
    <motion.div
      variants={cardVariants}
      onClick={onClick}
      whileHover="hover"
      initial="initial"
      className="
        group
        relative
        min-h-[160px]
        cursor-pointer
        overflow-hidden
        border
        border-zinc-900
        bg-zinc-[950]
        p-5
        transition-colors
        duration-500
        hover:border-zinc-700
      "
    >
      {/* top red indicator */}
      <motion.div
        variants={{
          initial: {
            scaleX: 0,
          },
          hover: {
            scaleX: 1,
          },
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
        className="
          absolute
          left-0
          top-0
          h-px
          w-full
          origin-left
          bg-[#DC2626]
        "
      />

      {/* number + arrow */}
      <div className="flex items-center justify-between">
        <span className="text-[9px] tabular-nums text-zinc-700 transition-colors duration-300 group-hover:text-[#DC2626]">
          / {service.number}
        </span>

        <ArrowUpRight
          className="
            size-4
            text-zinc-700
            transition-all
            duration-300
            group-hover:-translate-y-1
            group-hover:translate-x-1
            group-hover:text-[#DC2626]
          "
        />
      </div>

      {/* service content */}
      <div className="mt-7 flex items-center gap-5">
        <div
          className="
            flex
            size-12
            shrink-0
            items-center
            justify-center
            border
            border-zinc-900
            bg-black
            transition-all
            duration-300
            group-hover:border-zinc-700
          "
        >
          <Image
            src={service.icon}
            alt={service.title}
            className="
              size-6
              object-contain
              opacity-40
              grayscale
              transition-all
              duration-300
              group-hover:scale-110
              group-hover:opacity-90
              group-hover:grayscale-0
            "
          />
        </div>

        <div className="min-w-0">
          <div className="mb-1 flex items-center gap-2">
            <span className="text-[8px] uppercase tracking-[0.2em] text-zinc-700">
              {service.metric}
            </span>
          </div>

          <h3
            className="
              text-lg
              font-medium
              leading-tight
              tracking-[-0.02em]
              text-zinc-300
              transition-colors
              duration-300
              group-hover:text-white
            "
          >
            {service.title}
          </h3>
        </div>
      </div>

      {/* description */}
      <p
        className="
          mt-4
          max-w-lg
          text-[10px]
          leading-4
          text-zinc-700
          transition-colors
          duration-300
          group-hover:text-zinc-500
        "
      >
        {service.description}
      </p>

      {/* background number */}
      <span
        className="
          pointer-events-none
          absolute
          -bottom-8
          -right-2
          select-none
          text-[110px]
          font-bold
          leading-none
          tracking-[-0.1em]
          text-white/[0.015]
        "
      >
        {service.number}
      </span>
    </motion.div>
  )
}