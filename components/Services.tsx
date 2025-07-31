"use client"

import { Arimo } from "next/font/google"
import Image from "next/image"
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
    title: "Personalized Workout Plans",
    description: "Tailored fitness routines based on your body type, goals, and progress.",
    icon: workoutplan,
  },
  {
    id: "nutrition-planning",
    title: "Nutrition Planning",
    description: "Custom diet strategies that complement your workouts and optimize health.",
    icon: nutritionplanning,
  },
  {
    id: "one-on-one-coaching",
    title: "1-on-1 Coaching",
    description: "Direct guidance, motivation, and feedback from certified trainers.",
    icon: coaching,
  },
  {
    id: "fitness-challenges",
    title: "Fitness Challenges",
    description: "Engaging goals and competitions to keep you motivated and consistent.",
    icon: routine,
  },
]

export default function Services() {
  // Map service IDs to their corresponding flex classes for the uneven layout
  const serviceFlexClasses: { [key: string]: string } = {
    "workout-plans": "flex-2 rounded-tl-md",
    "nutrition-planning": "flex-[1.5] rounded-bl-md",
    "one-on-one-coaching": "flex-[1.9] rounded-tr-md",
    "fitness-challenges": "flex-2 rounded-br-md",
  }

  return (
    <div
      className={`w-full h-[45rem] p-8 bg-black flex items-center justify-center transition-all text-white ${arimo.className} duration-500 ease-in-out mb-32`}
    >
      <div className="w-full h-full rounded-md flex flex-col gap-9">
        <div className="flex justify-center items-center py-4">
          <h1 className="text-5xl text-center tracking-tight">
            Precision-crafted for those who want more <br />
            than just a workout.
          </h1>
        </div>

        {/* Grid view only (no onClick) */}
        <div className="w-full h-full grid grid-cols-2 gap-1 rounded-md">
          {/* Left Column */}
          <div className="flex flex-col w-full h-full gap-1">
            <div
              className={`flex-2 flex flex-col items-center justify-center p-6 rounded-md transition-all duration-300 hover:cursor-pointer ease-in-out
              bg-zinc-950 hover:scale-[1.02] border border-zinc-800 hover:border-[#DC2626] ${serviceFlexClasses["workout-plans"]}`}
            >
              <Image
                src={servicesData[0].icon || "/placeholder.svg"}
                alt={servicesData[0].title}
                className="size-16 mb-4"
              />
              <h3 className="text-4xl font-medium mb-2 text-white">{servicesData[0].title}</h3>
              <p className="text-zinc-400 text-center text-sm">{servicesData[0].description}</p>
            </div>

            <div
              className={`flex-[1.5] flex flex-col items-center justify-center p-6 rounded-md transition-all duration-300 hover:cursor-pointer ease-in-out
              bg-zinc-950 hover:scale-[1.02] border border-zinc-800 hover:border-[#DC2626] ${serviceFlexClasses["nutrition-planning"]}`}
            >
              <Image
                src={servicesData[1].icon || "/placeholder.svg"}
                alt={servicesData[1].title}
                className="size-16 mb-4"
              />
              <h3 className="text-4xl font-medium mb-2 text-white">{servicesData[1].title}</h3>
              <p className="text-zinc-400 text-center text-sm">{servicesData[1].description}</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col w-full h-full gap-1">
            <div
              className={`flex-[1.9] flex flex-col items-center justify-center p-6 rounded-md transition-all duration-300 hover:cursor-pointer ease-in-out
              bg-zinc-950 hover:scale-[1.02] border border-zinc-800 hover:border-[#DC2626] ${serviceFlexClasses["one-on-one-coaching"]}`}
            >
              <Image
                src={servicesData[2].icon || "/placeholder.svg"}
                alt={servicesData[2].title}
                className="size-16 mb-4"
              />
              <h3 className="text-4xl font-medium mb-2 text-white">{servicesData[2].title}</h3>
              <p className="text-zinc-400 text-center text-sm">{servicesData[2].description}</p>
            </div>

            <div
              className={`flex-2 flex flex-col items-center justify-center p-6 rounded-md transition-all duration-300 hover:cursor-pointer ease-in-out
              bg-zinc-950 hover:scale-[1.02] border border-zinc-800 hover:border-[#DC2626] ${serviceFlexClasses["fitness-challenges"]}`}
            >
              <Image
                src={servicesData[3].icon || "/placeholder.svg"}
                alt={servicesData[3].title}
                className="size-16 mb-4"
              />
              <h3 className="text-4xl font-medium mb-2 text-white">{servicesData[3].title}</h3>
              <p className="text-zinc-400 text-center text-sm">{servicesData[3].description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
