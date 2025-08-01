"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import Image from "next/image"
import { Arimo } from "next/font/google"
import { motion, useInView , Variants} from "framer-motion" // Import motion and useInView

import p1 from "../assets/p1.png"
import p2 from "../assets/p2.png"
import p3 from "../assets/p3.png"
import p4 from "../assets/p4.png"
import p5 from "../assets/p5.png"
import p6 from "../assets/p6.png"
import p7 from "../assets/p7.jpg"

const arimo = Arimo({
  variable: "--font-arimo",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

const testimonialsData = [
  {
    id: "test-1",
    avatar: p1,
    name: "JASON HARVEY",
    role: "SOMEFOLK",
    text: "Osmo is full of awesome (and easy to use) interactions that save so much time. They're visually powerful but also robust, and the best thing is, it's only going to get better as more even resources get added! Oh and it doesn't hurt that the dashboard looks sick too.",
  },
  {
    id: "test-2",
    avatar: p2,
    name: "FLAYKS",
    role: "DESIGNER & FRONT END DEV",
    text: "It's nice to get access to some creative dev best kept secrets - they're a great a source of inspiration for animations and interactions. Already found out some tricks for some issues that were giving me headaches before! Love how it explains the implementation rather than blindly copy-pasting it, making it much easier to customize.",
  },
  {
    id: "test-3",
    avatar: p3,
    name: "HUY (BY HUY)",
    role: "WEB DESIGNER & YOUTUBE CREATOR",
    text: "One of a kind platform for any developers out there. It's incredible to be able to see and learn how the pros implement their animations. If you love web animations and creative development, this platform this a no brainer—just sign up already.",
  },
  {
    id: "test-4",
    avatar: p4,
    name: "CASSIE EVANS",
    role: "DEVELOPER EDUCATOR",
    text: "Even if you know GSAP, you can apply abstract animations to real-world scenarios. Dennis and his team come to the rescue with a treasure trove of useful techniques. There's something for everyone, whether you copy or use the code as a jumping off point, you get the official GSAP stamp of approval.",
  },
  {
    id: "test-5",
    avatar: p5,
    name: "ALEX JOHNSON",
    role: "FITNESS ENTHUSIAST",
    text: "Axion has completely transformed my approach to fitness. The personalized plans are spot on, and the coaching is truly next level. I've seen results I never thought possible!",
  },
  {
    id: "test-6",
    avatar: p6,
    name: "SARAH LEE",
    role: "NUTRITION COACH",
    text: "As a nutrition coach, I appreciate Axion's holistic approach. Their nutrition planning tools are fantastic, and the integration with workout plans makes it easy for clients to stay on track.",
  },
  {
    id: "test-7",
    avatar: p7,
    name: "MARK DAVIS",
    role: "ATHLETE",
    text: "The fitness challenges keep me motivated and push my limits. Axion provides a competitive yet supportive environment that helps me achieve new personal bests consistently.",
  },
]

// Triple the testimonials data for infinite loop effect
const displayedTestimonials = [...testimonialsData, ...testimonialsData, ...testimonialsData]
const originalLength = testimonialsData.length

// Variants for the main container
const containerVariants : Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.5, // Delay after WhyChooseUs section
      when: "beforeChildren",
    },
  },
}

// Variants for text elements (title, trusted by)
const textVariants : Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

// Variants for avatar buttons
const avatarVariants : Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
}

// Variants for testimonial cards
const cardVariants : Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
}

export default function Testimonials() {
  const testimonialsSectionRef = useRef(null)
  const isInView = useInView(testimonialsSectionRef, { once: true, amount: 0.3 }) // Trigger when 30% in view

  // activeIndex refers to the index within the displayedTestimonials array
  // We start at the beginning of the middle section for seamless looping
  const [activeIndex, setActiveIndex] = useState(originalLength)
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const isScrolling = useRef(false) // To prevent re-triggering scroll during programmatic jumps

  // Function to scroll to a specific index
  const scrollToTestimonial = useCallback(
    (index: number, behavior: "smooth" | "auto") => {
      if (testimonialsRef.current) {
        const targetElement = testimonialsRef.current.children[index] as HTMLElement
        if (targetElement) {
          isScrolling.current = true
          testimonialsRef.current.scrollTo({
            left: targetElement.offsetLeft - (testimonialsRef.current.offsetWidth - targetElement.offsetWidth) / 2,
            behavior: behavior,
          })
          // Set a timeout to reset isScrolling after the scroll animation (if smooth)
          // or immediately if auto
          setTimeout(
            () => {
              isScrolling.current = false
            },
            behavior === "smooth" ? 500 : 0,
          ) // Adjust timeout based on scroll behavior
        }
      }
    },
    [], // Dependencies for useCallback
  )

  // Effect to scroll when activeIndex changes
  useEffect(() => {
    scrollToTestimonial(activeIndex, "smooth")
  }, [activeIndex, scrollToTestimonial])

  // Handle infinite loop logic on scroll
  useEffect(() => {
    const scrollContainer = testimonialsRef.current

    const handleScroll = () => {
      if (!scrollContainer || isScrolling.current) return

      const scrollLeft = scrollContainer.scrollLeft
      const cardWidth = (scrollContainer.children[0] as HTMLElement)?.offsetWidth + 16 // Card width + mx-2 (8px * 2)

      // Calculate the index of the card currently snapped into view (or closest to center)
      const currentSnappedIndex = Math.round(scrollLeft / cardWidth)

      // Teleportation logic
      if (currentSnappedIndex >= originalLength * 2) {
        // Scrolled past the second set, jump back to the start of the second set
        isScrolling.current = true
        scrollContainer.scrollLeft = originalLength * cardWidth
        setTimeout(() => (isScrolling.current = false), 0)
        setActiveIndex(originalLength) // Update active index to reflect the jump
      } else if (currentSnappedIndex < originalLength) {
        // Scrolled before the first set, jump forward to the start of the second set
        isScrolling.current = true
        scrollContainer.scrollLeft = originalLength * cardWidth
        setTimeout(() => (isScrolling.current = false), 0)
        setActiveIndex(originalLength) // Update active index to reflect the jump
      } else {
        // If within the middle section, update activeIndex normally
        setActiveIndex(currentSnappedIndex)
      }
    }

    scrollContainer?.addEventListener("scroll", handleScroll)
    return () => {
      scrollContainer?.removeEventListener("scroll", handleScroll)
    }
  }, [originalLength]) // Dependencies for useEffect

  const handleAvatarClick = (originalIdx: number) => {
    // When clicking an avatar, target the corresponding testimonial in the middle set
    setActiveIndex(originalIdx + originalLength)
  }

  const handleTestimonialClick = (index: number) => {
    setActiveIndex(index) // Directly set the clicked index
  }

  return (
    <motion.div
      ref={testimonialsSectionRef}
      className={`w-full min-h-[80vh] py-16 bg-black text-white mb-20 flex flex-col items-center ${arimo.className}`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"} // Animate based on inView status
      variants={containerVariants}
    >
      <motion.h1 className="text-center text-5xl tracking-tight" variants={textVariants}>
        We built Axion to help athletes <br />
        and achievers train smarter, <br />
        harder, and longer.
      </motion.h1>
      <div className="w-1/2 flex justify-center">
        <div
          className="w-[70%] h-[0.5px] bg-zinc-700 my-7"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
          }}
        ></div>
      </div>
      <motion.h2 className="text-sm text-zinc-400 mb-3" variants={textVariants}>
        Trusted by:
      </motion.h2>
      {/* Avatars Row */}
      <motion.div
        className="flex justify-center items-center mb-8"
        variants={{
          visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
        }}
      >
        {testimonialsData.map((testimonial, index) => (
          <motion.div key={testimonial.id} className="flex flex-col items-center gap-y-2" variants={avatarVariants}>
            <button
              onClick={() => handleAvatarClick(index)}
              className={`relative rounded-full transition-all duration-300 ease-in-out hover:border-[#DC2626] p-1
                          ${(activeIndex % originalLength) === index ? "border-2 border-[#DC2626]" : "border-2 border-transparent"}`}
              aria-label={`View testimonial from ${testimonial.name}`}
            >
              <Image
                src={testimonial.avatar || "/placeholder.svg"}
                alt={testimonial.name}
                width={48}
                height={48}
                className="rounded-full object-cover size-8"
              />
            </button>
            <span
              className={`text-xs font-medium text-white bg-zinc-800 uppercase tracking-wider py-1 px-1 rounded-[3px] transition-opacity duration-300 ${
                (activeIndex % originalLength) === index ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              {testimonial.name.split(" ")[0]}
            </span>
          </motion.div>
        ))}
      </motion.div>
      {/* Testimonials Slider */}
      <div className="relative w-full max-w-6xl">
        <div
          ref={testimonialsRef}
          className="flex overflow-x-scroll no-scrollbar w-full px-4 py-4 scroll-smooth snap-x snap-mandatory items-start relative z-10"
        >
          {displayedTestimonials.map((testimonial, index) => (
            <motion.div
              key={`${testimonial.id}-${index}`} // Unique key for duplicated items
              onClick={() => handleTestimonialClick(index)}
              className={`flex-shrink-0 w-[calc(100%-4rem)] md:w-[calc(50%-2rem)] lg:w-[calc(33.33%-2rem)] xl:w-[calc(33.33%-2rem)]
                          mx-1 p-5 bg-zinc-950 rounded-lg border-2 cursor-pointer
                          transition-all duration-300 ease-in-out transform snap-center
                          ${activeIndex === index ? "border-[#DC2626] scale-105" : "border-zinc-800 scale-95 opacity-70"}`}
              variants={cardVariants}
            >
              <p className="text-zinc-300 text-sm mb-4">{testimonial.text}</p>
              <div className="flex items-center mt-auto">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="rounded-full object-cover size-10 mr-3"
                />
                <div>
                  <p className="text-xs text-white">{testimonial.name}</p>
                  <p className="text-zinc-400 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Gradient overlays for slider */}
        <div className="pointer-events-none absolute inset-0 z-20 mask-gradient" />
      </div>
    </motion.div>
  )
}
