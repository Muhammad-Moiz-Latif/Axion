import type React from "react"
import Image from "next/image"
import Nike from "../assets/nike.png"
import Adidas from "../assets/adidas.png"
import UnderArmour from "../assets/Under_Armour.png"
import Puma from "../assets/Puma.png"
import AppleHealth from "../assets/AppleHealth.png"
import GymShark from "../assets/GymShark.png"
import OptimumNutrition from "../assets/OptimumNutrition.png"

const logos = [
  { src: Nike, alt: "Nike Logo" },
  { src: Adidas, alt: "Adidas Logo" },
  { src: UnderArmour, alt: "Under Armour Logo" },
  { src: Puma, alt: "Puma Logo" },
  { src: AppleHealth, alt: "Apple Health Logo" },
  { src: GymShark, alt: "Gym Shark Logo" },
  { src: OptimumNutrition, alt: "Optimum Nutrition Logo" },
]

const numVisibleLogos = 4
const totalLogos = logos.length
const innerContainerWidthPercentage = 100
const slideTranslationPercentage = (totalLogos * 100) / numVisibleLogos
import { Arimo } from "next/font/google";

const arimo = Arimo({
    variable: '--font-arimo',
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
});

export default function LogoSlider() {
  const duplicatedLogos = [...logos, ...logos]

  return (
    <div className={`w-full py-5 overflow-hidden relative mt-2 mb-10 ${arimo.className} text-white`}>
        {/* <h1 className="text-center text-zinc-400 mb-3">Partners in <span className="text-white">performance.</span></h1> */}
      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0 z-10 mask-gradient" />

      {/* Scrolling logos */}
      <div
        className="flex animate-slide-left"
        style={
          {
            width: `${innerContainerWidthPercentage}%`,
            "--slide-translation": `-${slideTranslationPercentage}%`,
          } as React.CSSProperties
        }
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-4 flex items-center justify-center"
            style={{ width: `${100 / numVisibleLogos}%` }}
          >
            <Image
              src={logo.src || "/placeholder.svg"}
              alt={logo.alt}
              className="size-20 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
