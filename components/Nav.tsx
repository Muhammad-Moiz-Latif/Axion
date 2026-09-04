"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Arimo } from "next/font/google"
import {
  ArrowUpRight,
  ChevronDown,
  Menu,
  X,
} from "lucide-react"
import { AnimatePresence, motion, type Variants } from "framer-motion"
import { usePathname } from "next/navigation"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import logo from "@/assets/AXION.png"

const arimo = Arimo({
  variable: "--font-arimo",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Pricing",
    href: "/pricing",
  },
  {
    name: "Services",
    href: "/services",
    dropdown: [
      {
        name: "Personalized Workout Plans",
        description: "Training built around your body",
        href: "/services/personalized-workout-plans",
      },
      {
        name: "Nutrition Planning",
        description: "Fuel your performance",
        href: "/services/nutrition-planning",
      },
      {
        name: "1-on-1 Coaching",
        description: "Direct guidance from your coach",
        href: "/services/one-on-one-coaching",
      },
      {
        name: "Fitness Challenges",
        description: "Push beyond your baseline",
        href: "/services/fitness-challenges",
      },
    ],
  },
  {
    name: "FAQ",
    href: "/faq",
  },
]

const navItemVariants: Variants = {
  initial: {
    opacity: 0,
    y: -8,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 + index * 0.06,
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
}

export default function NavBar() {
  const pathname = usePathname()

  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  const isServicesActive =
    pathname === "/services" ||
    pathname.startsWith("/services/")

  return (
    <>
      {/* =========================================================
          DESKTOP NAV
      ========================================================= */}

      <motion.nav
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`
          fixed
          top-5
          left-1/2
          -translate-x-1/2
          z-[100]
          hidden
          lg:flex
          items-center
          w-[calc(100%-73px)]
          max-w-[1280px]
          h-[62px]
          px-4
          rounded-[6px]
          border
          border-white/[0.10]
          bg-black/45
          backdrop-blur-xl
          shadow-[0_18px_50px_rgba(0,0,0,0.35)]
          ${arimo.className}
        `}
      >
        {/* =====================================================
            LEFT — BRAND
        ===================================================== */}

        <Link
          href="/"
          className="
            group
            flex
            items-center
            shrink-0
            w-[190px]
          "
        >
          <motion.div
            whileHover={{ scale: 1.035 }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="relative"
          >
            <Image
              src={logo}
              alt="Axion"
              width={120}
              height={38}
              priority
              className="
                size-16
                object-contain
              "
            />
          </motion.div>
        </Link>

        {/* =====================================================
            CENTER — NAVIGATION
        ===================================================== */}

        <div className="flex flex-1 justify-center">
          <div className="flex items-center gap-1">
            {navLinks.map((link, index) => {
              const active =
                link.name === "Services"
                  ? isServicesActive
                  : pathname === link.href

              if (link.dropdown) {
                return (
                  <motion.div
                    key={link.name}
                    custom={index}
                    variants={navItemVariants}
                    initial="initial"
                    animate="animate"
                    className="relative"
                    onMouseEnter={() => {
                      setHoveredLink(link.name)
                      setServicesOpen(true)
                    }}
                    onMouseLeave={() => {
                      setHoveredLink(null)
                    }}
                  >
                    <DropdownMenu
                      open={servicesOpen}
                      onOpenChange={setServicesOpen}
                      modal={false}
                    >
                      <DropdownMenuTrigger
                        className="
                          relative
                          flex
                          items-center
                          gap-1
                          px-4
                          py-2
                          text-[13px]
                          text-zinc-400
                          outline-none
                          transition-colors
                          duration-200
                          hover:text-white
                          data-[state=open]:text-white
                        "
                      >
                        <span>{link.name}</span>

                        <ChevronDown
                          className={`
                            size-[13px]
                            text-[#DC2626]
                            transition-transform
                            duration-300
                            ${servicesOpen ? "rotate-180" : ""}
                          `}
                        />

                        {/* Active indicator */}
                        {active && (
                          <motion.span
                            layoutId="active-nav"
                            className="
                              absolute
                              left-4
                              right-4
                              -bottom-[1px]
                              h-[1px]
                              bg-[#DC2626]
                            "
                          />
                        )}
                      </DropdownMenuTrigger>

                      <DropdownMenuContent
                        align="center"
                        sideOffset={12}
                        className="
                          w-[320px]
                          rounded-[5px]
                          border
                          border-white/[0.10]
                          bg-[#090909]/95
                          p-2
                          text-white
                          shadow-[0_25px_70px_rgba(0,0,0,0.65)]
                          backdrop-blur-2xl
                        "
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                      >
                        {/* Dropdown header */}

                        <div className="px-3 pb-2 pt-2">
                          <div className="flex items-center gap-2">
                            <span className="size-[5px] rounded-full bg-[#DC2626]" />

                            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-500">
                              Training Systems
                            </span>
                          </div>
                        </div>

                        <div className="h-px bg-white/[0.06] mb-1" />

                        {link.dropdown.map((item, itemIndex) => (
                          <DropdownMenuItem
                            key={item.name}
                            asChild
                            className="
                              group
                              cursor-pointer
                              rounded-[3px]
                              p-0
                              outline-none
                              focus:bg-white/[0.05]
                            "
                          >
                            <Link
                              href={item.href}
                              className="
                                flex
                                items-center
                                justify-between
                                w-full
                                px-3
                                py-3
                              "
                            >
                              <div className="flex items-center gap-3">
                                {/* Number */}

                                <span
                                  className="
                                    text-[9px]
                                    font-medium
                                    tabular-nums
                                    text-zinc-600
                                    transition-colors
                                    group-hover:text-[#DC2626]
                                  "
                                >
                                  0{itemIndex + 1}
                                </span>

                                <div>
                                  <div
                                    className="
                                      text-[12px]
                                      font-medium
                                      text-zinc-200
                                      transition-colors
                                      group-hover:text-white
                                    "
                                  >
                                    {item.name}
                                  </div>

                                  <div
                                    className="
                                      mt-0.5
                                      text-[10px]
                                      text-zinc-600
                                      transition-colors
                                      group-hover:text-zinc-500
                                    "
                                  >
                                    {item.description}
                                  </div>
                                </div>
                              </div>

                              <ArrowUpRight
                                className="
                                  size-3
                                  text-zinc-700
                                  opacity-0
                                  -translate-x-1
                                  translate-y-1
                                  transition-all
                                  duration-200
                                  group-hover:translate-x-0
                                  group-hover:translate-y-0
                                  group-hover:text-[#DC2626]
                                  group-hover:opacity-100
                                "
                              />
                            </Link>
                          </DropdownMenuItem>
                        ))}

                        <div className="mt-1 h-px bg-white/[0.06]" />

                        <Link
                          href="/services"
                          className="
                            mt-1
                            flex
                            items-center
                            justify-between
                            rounded-[3px]
                            px-3
                            py-2.5
                            text-[10px]
                            uppercase
                            tracking-[0.12em]
                            text-zinc-500
                            transition-colors
                            hover:bg-white/[0.04]
                            hover:text-white
                          "
                        >
                          <span>View all services</span>

                          <ArrowUpRight className="size-3" />
                        </Link>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </motion.div>
                )
              }

              return (
                <motion.div
                  key={link.name}
                  custom={index}
                  variants={navItemVariants}
                  initial="initial"
                  animate="animate"
                  className="relative"
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <Link
                    href={link.href}
                    className="
                      relative
                      block
                      px-4
                      py-2
                      text-[13px]
                      text-zinc-400
                      transition-colors
                      duration-200
                      hover:text-white
                    "
                  >
                    <motion.span
                      animate={{
                        y:
                          hoveredLink === link.name && !active
                            ? -1
                            : 0,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                    >
                      {link.name}
                    </motion.span>

                    {/* Active */}
                    {active && (
                      <motion.span
                        layoutId="active-nav"
                        className="
                          absolute
                          left-4
                          right-4
                          -bottom-[1px]
                          h-[1px]
                          bg-[#DC2626]
                        "
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 35,
                        }}
                      />
                    )}

                    {/* Hover */}
                    {!active &&
                      hoveredLink === link.name && (
                        <motion.span
                          className="
                            absolute
                            left-4
                            right-4
                            -bottom-[1px]
                            h-[1px]
                            origin-left
                            bg-white/60
                          "
                          initial={{
                            scaleX: 0,
                            opacity: 0,
                          }}
                          animate={{
                            scaleX: 1,
                            opacity: 1,
                          }}
                          transition={{
                            duration: 0.25,
                          }}
                        />
                      )}
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* =====================================================
            RIGHT — ACTIONS
        ===================================================== */}

        <motion.div
          custom={4}
          variants={navItemVariants}
          initial="initial"
          animate="animate"
          className="
            flex
            items-center
            justify-end
            gap-2
            w-[190px]
          "
        >
          <Link
            href="/login"
            className="
              flex
              items-center
              justify-center
              h-9
              px-4
              rounded-[3px]
              border
              border-white/[0.14]
              text-[12px]
              text-zinc-300
              transition-all
              duration-200
              hover:border-white/30
              hover:text-white
            "
          >
            Login
          </Link>

          <Link
            href="/pricing"
            className="
              group
              flex
              items-center
              gap-1.5
              h-9
              px-4
              rounded-[3px]
              bg-[#DC2626]
              text-[12px]
              font-medium
              text-white
              shadow-[0_0_0_rgba(220,38,38,0)]
              transition-all
              duration-300
              hover:shadow-[0_0_24px_rgba(220,38,38,0.25)]
            "
          >
            <span>Get Started</span>

            <ArrowUpRight
              className="
                size-3
                transition-transform
                duration-200
                group-hover:translate-x-[1px]
                group-hover:-translate-y-[1px]
              "
            />
          </Link>
        </motion.div>
      </motion.nav>

      {/* =========================================================
          MOBILE NAV
      ========================================================= */}

      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`
          fixed
          top-4
          left-4
          right-4
          z-[100]
          flex
          lg:hidden
          items-center
          justify-between
          h-[56px]
          px-4
          rounded-[5px]
          border
          border-white/[0.10]
          bg-black/50
          backdrop-blur-xl
          ${arimo.className}
        `}
      >
        <Link href="/">
          <Image
            src={logo}
            alt="Axion"
            width={105}
            height={34}
            priority
            className="h-[30px] w-auto object-contain"
          />
        </Link>

        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="
            flex
            items-center
            justify-center
            size-9
            rounded-[3px]
            border
            border-white/[0.10]
            text-white
            transition-colors
            hover:bg-white/[0.05]
          "
          aria-label="Toggle navigation"
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <X className="size-4" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
              >
                <Menu className="size-4" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </motion.nav>

      {/* =========================================================
          MOBILE MENU
      ========================================================= */}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -15,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            className={`
              fixed
              top-[82px]
              left-4
              right-4
              z-[99]
              lg:hidden
              overflow-hidden
              rounded-[5px]
              border
              border-white/[0.10]
              bg-[#080808]/95
              backdrop-blur-2xl
              shadow-[0_25px_70px_rgba(0,0,0,0.65)]
              ${arimo.className}
            `}
          >
            <div className="p-3">
              {navLinks.map((link, index) => {
                const active =
                  link.name === "Services"
                    ? isServicesActive
                    : pathname === link.href

                return (
                  <motion.div
                    key={link.name}
                    initial={{
                      opacity: 0,
                      x: -10,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.05,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`
                        relative
                        flex
                        items-center
                        justify-between
                        rounded-[3px]
                        px-3
                        py-3.5
                        text-[13px]
                        transition-colors
                        ${active
                          ? "bg-white/[0.05] text-white"
                          : "text-zinc-500 hover:bg-white/[0.03] hover:text-white"
                        }
                      `}
                    >
                      <span>{link.name}</span>

                      {active && (
                        <span className="size-[5px] rounded-full bg-[#DC2626]" />
                      )}
                    </Link>

                    {/* Mobile services */}
                    {link.dropdown && (
                      <div className="ml-3 border-l border-white/[0.07] pl-3">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="
                              block
                              py-2.5
                              text-[11px]
                              text-zinc-600
                              transition-colors
                              hover:text-white
                            "
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                )
              })}

              <div className="my-2 h-px bg-white/[0.07]" />

              <div className="grid grid-cols-2 gap-2 p-1">
                <Link
                  href="/login"
                  onClick={() => setMobileOpen(false)}
                  className="
                    flex
                    h-10
                    items-center
                    justify-center
                    rounded-[3px]
                    border
                    border-white/[0.10]
                    text-[12px]
                    text-zinc-300
                  "
                >
                  Login
                </Link>

                <Link
                  href="/pricing"
                  onClick={() => setMobileOpen(false)}
                  className="
                    flex
                    h-10
                    items-center
                    justify-center
                    rounded-[3px]
                    bg-[#DC2626]
                    text-[12px]
                    font-medium
                    text-white
                  "
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}