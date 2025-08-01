"use client"

import { useState } from "react"
import Image from "next/image"
import { Arimo } from "next/font/google"
import { ArrowDown } from "lucide-react"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

import logo from "@/assets/AXION.png" // Assuming this path is correct for your logo asset

const arimo = Arimo({
  variable: "--font-arimo",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Pricing", href: "/pricing" },
  {
    name: "Services",
    href: "/services",
    dropdown: [
      { name: "Personalized Workout Plans", href: "/services#workout-plans" },
      { name: "Nutrition Planning", href: "/services#nutrition-planning" },
      { name: "1-on-1 Coaching", href: "/services#one-on-one-coaching" },
      { name: "Fitness Challenges", href: "/services#fitness-challenges" },
    ],
  },
  { name: "FAQ", href: "/faq" },
]

export default function NavBar() {
  const pathname = usePathname()
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full h-14 flex justify-between items-center px-6 text-white ${arimo.className} backdrop-blur-md bg-black/20 z-50`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.div whileHover={{ scale: 1.1, cursor: "pointer" }}>
        <Image src={logo || "/placeholder.svg"} className="size-32 object-contain" alt="Axion logo" />
      </motion.div>

      <div className="flex gap-10 text-[15px] pl-16">
        {navLinks.map((link) => (
          <div
            key={link.name}
            className="relative flex items-center"
            onMouseEnter={() => {
              setHoveredLink(link.name)
              if (link.name === "Services") setIsServicesDropdownOpen(true)
            }}
            onMouseLeave={() => {
              setHoveredLink(null)
              if (link.name === "Services") setIsServicesDropdownOpen(false)
            }}
          >
            {link.dropdown ? (
              <DropdownMenu open={isServicesDropdownOpen} onOpenChange={setIsServicesDropdownOpen}>
                <DropdownMenuTrigger className="flex items-center gap-0.5 outline-none focus:outline-none">
                  <span className="relative z-10">{link.name}</span>
                  <ArrowDown className="text-[#DC2626] size-4 transition-transform duration-200 ui-open:rotate-180" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-zinc-900 border border-zinc-700 text-white">
                  {link.dropdown.map((item) => (
                    <DropdownMenuItem key={item.name} className="hover:bg-zinc-800 cursor-pointer">
                      <a href={item.href}>{item.name}</a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <a href={link.href} className="relative block py-1">
                <motion.span
                  className="relative z-10"
                  initial={{ y: 0 }}
                  animate={{ y: hoveredLink === link.name && pathname !== link.href ? -2 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.name}
                </motion.span>
                {/* Active link indicator */}
                {pathname === link.href && (
                  <motion.span
                    layoutId="underline"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-white"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                {/* Hover effect for non-active links */}
                {pathname !== link.href && hoveredLink === link.name && (
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-white"
                    initial={{ opacity: 0, y: 5, scaleX: 0 }}
                    animate={{ opacity: 1, y: 0, scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </a>
            )}
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <motion.button
          className="bg-transparent border-[1px] border-white text-white w-[6.2rem] h-9 rounded-[3px] text-[15px] cursor-pointer"
          whileHover={{ scale: 1.05, borderColor: "#DC2626", color: "#DC2626" }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          Login
        </motion.button>
        <motion.button
          className="w-[6.2rem] h-9 text-white bg-[#DC2626] rounded-[3px] text-[15px] cursor-pointer"
          whileHover={{ scale: 1.05, boxShadow: "0 0 10px rgba(220, 38, 38, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          Get Started
        </motion.button>
      </div>
    </motion.nav>
  )
}
