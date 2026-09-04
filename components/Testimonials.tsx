"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Arimo } from "next/font/google";
import {
  AnimatePresence,
  motion,
  useInView,
  type Variants,
} from "framer-motion";
import p1 from "../assets/p1.png"
import p2 from "../assets/p2.png"
import p3 from "../assets/p3.png"
import p4 from "../assets/p4.png"
import p5 from "../assets/p5.png"
import p6 from "../assets/p6.png"
import p7 from "../assets/p7.jpg"


const arimo = Arimo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

/* -------------------------------------------------------------------------- */
/* DATA                                                                       */
/* Keep your existing testimonial copy if you already have it.               */
/* -------------------------------------------------------------------------- */

const testimonialsData = [
  {
    id: 1,
    name: "Alex Morgan",
    role: "Performance Athlete",
    quote:
      "Axion completely changed the way I train. Every session has a purpose, every metric tells a story, and the results speak for themselves.",
    avatar: p1,
    category: "PERFORMANCE",
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Elite Runner",
    quote:
      "For the first time, my training actually feels built around me. Axion gave me structure, precision, and the confidence to keep pushing.",
    avatar: p2,
    category: "ENDURANCE",
  },
  {
    id: 3,
    name: "James Carter",
    role: "Strength Athlete",
    quote:
      "This isn't just another gym. The level of detail behind every program makes you realize how much potential you were leaving on the table.",
    avatar: p3,
    category: "STRENGTH",
  },
  {
    id: 4,
    name: "Emma Davis",
    role: "Professional Coach",
    quote:
      "The difference is consistency. Axion doesn't rely on motivation. It builds a system that keeps you moving forward.",
    avatar: p4,
    category: "COACHING",
  },
  {
    id: 5,
    name: "Daniel Brooks",
    role: "Hybrid Athlete",
    quote:
      "I came for better performance and stayed because the entire experience feels engineered. Nothing is random.",
    avatar: p5,
    category: "HYBRID",
  },
  {
    id: 6,
    name: "Olivia Taylor",
    role: "Fitness Athlete",
    quote:
      "Axion made training measurable without taking away the human side of it. I finally understand what progress actually looks like.",
    avatar: p6,
    category: "FITNESS",
  },
  {
    id: 7,
    name: "Michael Anderson",
    role: "Competitive Athlete",
    quote:
      "The system keeps adapting as I improve. That is what makes Axion different — the program evolves with you.",
    avatar: p7,
    category: "ATHLETICS",
  },
];

/* -------------------------------------------------------------------------- */
/* MOTION                                                                     */
/* -------------------------------------------------------------------------- */

const revealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

/* -------------------------------------------------------------------------- */
/* COMPONENT                                                                  */
/* -------------------------------------------------------------------------- */

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.15,
  });

  const [activeIndex, setActiveIndex] = useState(testimonialsData.length);
  const [isScrolling, setIsScrolling] = useState(false);

  /*
   * Three copies create the illusion of an infinite carousel.
   * Starting in the middle copy prevents the user from seeing the edge.
   */
  const infiniteTestimonials = [
    ...testimonialsData,
    ...testimonialsData,
    ...testimonialsData,
  ];

  /* ------------------------------------------------------------------------ */
  /* CENTER CARD                                                              */
  /* ------------------------------------------------------------------------ */

  const scrollToTestimonial = useCallback(
    (index: number, behavior: ScrollBehavior = "smooth") => {
      const container = carouselRef.current;

      if (!container) return;

      const cards = container.children;

      if (!cards[index]) return;

      const card = cards[index] as HTMLElement;

      const left =
        card.offsetLeft -
        container.clientWidth / 2 +
        card.offsetWidth / 2;

      setIsScrolling(true);

      container.scrollTo({
        left,
        behavior,
      });

      window.setTimeout(
        () => {
          setIsScrolling(false);
        },
        behavior === "smooth" ? 650 : 50
      );
    },
    []
  );

  /* ------------------------------------------------------------------------ */
  /* INITIAL POSITION                                                         */
  /* ------------------------------------------------------------------------ */

  useEffect(() => {
    const timer = window.setTimeout(() => {
      scrollToTestimonial(
        testimonialsData.length,
        "auto"
      );
    }, 50);

    return () => window.clearTimeout(timer);
  }, [scrollToTestimonial]);

  /* ------------------------------------------------------------------------ */
  /* SCROLL HANDLER                                                           */
  /* ------------------------------------------------------------------------ */

  const handleScroll = useCallback(() => {
    const container = carouselRef.current;

    if (!container || isScrolling) return;

    const cards = Array.from(container.children) as HTMLElement[];

    if (!cards.length) return;

    const center = container.scrollLeft + container.clientWidth / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(center - cardCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);

    /*
     * Teleport between copies when the user approaches an edge.
     * This happens without the user visually noticing.
     */
    if (closestIndex < testimonialsData.length) {
      const target =
        closestIndex + testimonialsData.length;

      window.requestAnimationFrame(() => {
        scrollToTestimonial(target, "auto");
        setActiveIndex(target);
      });
    }

    if (
      closestIndex >=
      testimonialsData.length * 2
    ) {
      const target =
        closestIndex - testimonialsData.length;

      window.requestAnimationFrame(() => {
        scrollToTestimonial(target, "auto");
        setActiveIndex(target);
      });
    }
  }, [
    isScrolling,
    scrollToTestimonial,
  ]);

  /* ------------------------------------------------------------------------ */
  /* AVATAR NAVIGATION                                                        */
  /* ------------------------------------------------------------------------ */

  const selectTestimonial = (originalIndex: number) => {
    const target =
      testimonialsData.length + originalIndex;

    setActiveIndex(target);

    scrollToTestimonial(target, "smooth");
  };

  /* ------------------------------------------------------------------------ */
  /* CURRENT DATA                                                             */
  /* ------------------------------------------------------------------------ */

  const currentOriginalIndex =
    ((activeIndex % testimonialsData.length) +
      testimonialsData.length) %
    testimonialsData.length;

  return (
    <section
      ref={sectionRef}
      className={`${arimo.className} relative overflow-hidden bg-[#050505] text-white`}
    >
      {/* ------------------------------------------------------------------ */}
      {/* BACKGROUND GRID                                                    */}
      {/* ------------------------------------------------------------------ */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,.5) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,.5) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        <div className="absolute left-1/2 top-[25%] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-red-600/[0.045] blur-[140px]" />

        <div className="absolute left-0 top-1/3 h-px w-full bg-white/[0.04]" />
        <div className="absolute bottom-1/4 left-0 h-px w-full bg-white/[0.03]" />
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* ARCHITECTURAL CORNERS                                               */}
      {/* ------------------------------------------------------------------ */}

      <div className="pointer-events-none absolute left-5 top-5 h-12 w-12 border-l border-t border-white/10 md:left-10 md:top-10" />

      <div className="pointer-events-none absolute right-5 top-5 h-12 w-12 border-r border-t border-white/10 md:right-10 md:top-10" />

      <div className="pointer-events-none absolute bottom-5 left-5 h-12 w-12 border-b border-l border-white/10 md:bottom-10 md:left-10" />

      <div className="pointer-events-none absolute bottom-5 right-5 h-12 w-12 border-b border-r border-white/10 md:bottom-10 md:right-10" />

      {/* ------------------------------------------------------------------ */}
      {/* MAIN                                                                */}
      {/* ------------------------------------------------------------------ */}

      <div className="relative mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">

        {/* -------------------------------------------------------------- */}
        {/* HEADER                                                          */}
        {/* -------------------------------------------------------------- */}

        <motion.div
          variants={staggerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-10 lg:grid-cols-[0.8fr_2fr_0.7fr]"
        >
          {/* System label */}

          <motion.div
            variants={revealVariants}
            className="flex items-start gap-3"
          >
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-600 shadow-[0_0_12px_rgba(220,38,38,.8)]" />

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-red-500">
                AXION / FIELD REPORTS
              </p>

              <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-white/30">
                Human Performance Division
              </p>
            </div>
          </motion.div>

          {/* Editorial heading */}

          <motion.div
            variants={revealVariants}
            className="max-w-4xl"
          >
            <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-white/35">
              Real people. Real adaptation.
            </p>

            <h2 className="text-[clamp(2.5rem,6vw,6.8rem)] font-semibold leading-[0.9] tracking-[-0.055em] text-white">
              The system works
              <br />

              <span className="text-white/35">
                when you do.
              </span>
            </h2>
          </motion.div>

          {/* Report number */}

          <motion.div
            variants={revealVariants}
            className="flex flex-col justify-end lg:items-end"
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/25">
              TESTIMONIAL INDEX
            </div>

            <div className="mt-2 flex items-baseline gap-2">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentOriginalIndex}
                  initial={{
                    opacity: 0,
                    y: 8,
                    filter: "blur(5px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    opacity: 0,
                    y: -8,
                    filter: "blur(5px)",
                  }}
                  transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="font-mono text-3xl font-medium text-white"
                >
                  {String(
                    currentOriginalIndex + 1
                  ).padStart(2, "0")}
                </motion.span>
              </AnimatePresence>

              <span className="font-mono text-sm text-white/20">
                / {String(testimonialsData.length).padStart(2, "0")}
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* -------------------------------------------------------------- */}
        {/* DIVIDER                                                         */}
        {/* -------------------------------------------------------------- */}

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={
            isInView
              ? { scaleX: 1, opacity: 1 }
              : { scaleX: 0, opacity: 0 }
          }
          transition={{
            duration: 1,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-16 origin-left border-t border-white/[0.08]"
        />

        {/* -------------------------------------------------------------- */}
        {/* AVATAR NAVIGATION                                               */}
        {/* -------------------------------------------------------------- */}

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerVariants}
          className="mt-8 flex items-center justify-between gap-6"
        >
          <motion.div
            variants={revealVariants}
            className="hidden items-center gap-3 sm:flex"
          >
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/25">
              SELECT REPORT
            </span>

            <span className="h-px w-8 bg-white/10" />
          </motion.div>

          <motion.div
            variants={revealVariants}
            className="flex items-center gap-2"
          >
            {testimonialsData.map(
              (testimonial, index) => {
                const isActive =
                  index === currentOriginalIndex;

                return (
                  <button
                    key={testimonial.id}
                    type="button"
                    onClick={() =>
                      selectTestimonial(index)
                    }
                    aria-label={`View testimonial from ${testimonial.name}`}
                    className="group relative"
                  >
                    <motion.div
                      animate={{
                        width: isActive
                          ? 46
                          : 30,
                        opacity: isActive ? 1 : 0.45,
                      }}
                      transition={{
                        duration: 0.45,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="relative h-10 overflow-hidden border border-white/10"
                    >
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        sizes="46px"
                        className={`object-cover grayscale transition-all duration-500 ${isActive
                          ? "grayscale-0"
                          : "group-hover:grayscale-0"
                          }`}
                      />

                      {isActive && (
                        <motion.div
                          layoutId="activeAvatar"
                          className="absolute inset-0 border border-red-600"
                          transition={{
                            duration: 0.45,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        />
                      )}

                      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-red-600/80" />
                    </motion.div>
                  </button>
                );
              }
            )}
          </motion.div>

          <motion.div
            variants={revealVariants}
            className="hidden font-mono text-[9px] uppercase tracking-[0.2em] text-white/20 md:block"
          >
            VERIFIED ATHLETE FEEDBACK
          </motion.div>
        </motion.div>

        {/* -------------------------------------------------------------- */}
        {/* TESTIMONIAL CAROUSEL                                            */}
        {/* -------------------------------------------------------------- */}

        <div className="relative mt-12">
          {/* Left fade */}

          <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-20 w-[8%] bg-gradient-to-r from-[#050505] to-transparent" />

          {/* Right fade */}

          <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-20 w-[8%] bg-gradient-to-l from-[#050505] to-transparent" />

          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-[8%] py-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {infiniteTestimonials.map(
              (testimonial, index) => {
                const isActive =
                  index === activeIndex;

                return (
                  <motion.article
                    key={`${testimonial.id}-${index}`}
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    animate={{
                      opacity: isActive ? 1 : 0.38,
                      y: isActive ? 0 : 8,
                      scale: isActive ? 1 : 0.96,
                    }}
                    transition={{
                      duration: 0.55,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    onClick={() => {
                      setActiveIndex(index);
                      scrollToTestimonial(
                        index,
                        "smooth"
                      );
                    }}
                    className={`group relative min-w-[84vw] snap-center cursor-pointer overflow-hidden border bg-[#090909] transition-colors duration-500 sm:min-w-[620px] lg:min-w-[700px] ${isActive
                      ? "border-red-600/60"
                      : "border-white/[0.07] hover:border-white/15"
                      }`}
                  >
                    {/* Top telemetry */}

                    <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4 md:px-7">
                      <div className="flex items-center gap-3">
                        <span
                          className={`h-1.5 w-1.5 rounded-full transition-all duration-500 ${isActive
                            ? "bg-red-500 shadow-[0_0_12px_rgba(220,38,38,.9)]"
                            : "bg-white/20"
                            }`}
                        />

                        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/35">
                          FIELD REPORT
                        </span>
                      </div>

                      <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
                        FR-{String(
                          testimonial.id
                        ).padStart(3, "0")}
                      </div>
                    </div>

                    {/* Main content */}

                    <div className="grid min-h-[430px] md:grid-cols-[190px_1fr]">
                      {/* Athlete profile */}

                      <div className="relative flex flex-col justify-between border-b border-white/[0.07] p-5 md:border-b-0 md:border-r md:p-7">
                        <div>
                          <div className="relative aspect-square w-full overflow-hidden border border-white/10">
                            <Image
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              fill
                              sizes="190px"
                              className={`object-cover grayscale transition-all duration-700 ${isActive
                                ? "scale-100 grayscale-0"
                                : "scale-105 grayscale"
                                }`}
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                            {/* Crosshair */}

                            <div className="pointer-events-none absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2">
                              <div className="absolute left-1/2 top-0 h-full w-px bg-white/25" />
                              <div className="absolute left-0 top-1/2 h-px w-full bg-white/25" />
                            </div>

                            {isActive && (
                              <motion.div
                                initial={{
                                  y: "-100%",
                                }}
                                animate={{
                                  y: "100%",
                                }}
                                transition={{
                                  duration: 2.8,
                                  repeat: Infinity,
                                  repeatDelay: 1.5,
                                  ease: "linear",
                                }}
                                className="absolute left-0 right-0 h-px bg-red-500/70 shadow-[0_0_12px_rgba(220,38,38,.8)]"
                              />
                            )}
                          </div>

                          <div className="mt-5">
                            <p className="text-sm font-semibold tracking-tight text-white">
                              {testimonial.name}
                            </p>

                            <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-white/30">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>

                        <div className="mt-8">
                          <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
                            DISCIPLINE
                          </p>

                          <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-red-500">
                            {testimonial.category}
                          </p>
                        </div>
                      </div>

                      {/* Quote */}

                      <div className="relative flex flex-col justify-between p-6 md:p-10 lg:p-12">
                        {/* Giant quote mark */}

                        <span className="pointer-events-none absolute right-7 top-3 select-none font-serif text-[150px] leading-none text-white/[0.025]">
                          “
                        </span>

                        <div className="relative">
                          <div className="mb-8 flex items-center gap-3">
                            <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-red-500">
                              VERIFIED
                            </span>

                            <span className="h-px w-10 bg-red-600/50" />
                          </div>

                          <AnimatePresence
                            mode="wait"
                          >
                            <motion.blockquote
                              key={testimonial.id}
                              initial={{
                                opacity: 0,
                                y: 18,
                                filter: "blur(8px)",
                              }}
                              animate={{
                                opacity: 1,
                                y: 0,
                                filter: "blur(0px)",
                              }}
                              exit={{
                                opacity: 0,
                                y: -14,
                                filter: "blur(8px)",
                              }}
                              transition={{
                                duration: 0.55,
                                ease: [
                                  0.22,
                                  1,
                                  0.36,
                                  1,
                                ],
                              }}
                              className="max-w-2xl text-[clamp(1.55rem,3vw,2.8rem)] font-medium leading-[1.12] tracking-[-0.035em] text-white"
                            >
                              “{testimonial.quote}”
                            </motion.blockquote>
                          </AnimatePresence>
                        </div>

                        {/* Bottom telemetry */}

                        <div className="mt-12">
                          <div className="mb-4 flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
                            <span>
                              SYSTEM RESPONSE
                            </span>

                            <span className="text-red-500">
                              POSITIVE
                            </span>
                          </div>

                          <div className="h-px bg-white/[0.08]">
                            <motion.div
                              animate={{
                                width: isActive
                                  ? "72%"
                                  : "18%",
                              }}
                              transition={{
                                duration: 0.8,
                                ease: [
                                  0.22,
                                  1,
                                  0.36,
                                  1,
                                ],
                              }}
                              className="h-full bg-red-600"
                            />
                          </div>

                          <div className="mt-4 flex items-center justify-between">
                            <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/15">
                              AXION PERFORMANCE LAB
                            </span>

                            <span className="font-mono text-[8px] text-white/15">
                              0{testimonial.id}
                            </span>
                          </div>
                        </div>

                        {/* Hover scan */}

                        <motion.div
                          initial={{
                            x: "-100%",
                            opacity: 0,
                          }}
                          whileHover={{
                            x: "100%",
                            opacity: 1,
                          }}
                          transition={{
                            duration: 0.9,
                            ease: "easeInOut",
                          }}
                          className="pointer-events-none absolute left-0 top-0 h-px w-1/2 bg-gradient-to-r from-transparent via-red-500/70 to-transparent"
                        />
                      </div>
                    </div>

                    {/* Active red edge */}

                    <motion.div
                      animate={{
                        opacity: isActive ? 1 : 0,
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                      className="absolute bottom-0 left-0 h-[2px] w-full bg-red-600"
                    />
                  </motion.article>
                );
              }
            )}
          </div>
        </div>

        {/* -------------------------------------------------------------- */}
        {/* BOTTOM CONTROL BAR                                              */}
        {/* -------------------------------------------------------------- */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={
            isInView
              ? {
                opacity: 1,
                y: 0,
              }
              : {
                opacity: 0,
                y: 15,
              }
          }
          transition={{
            duration: 0.7,
            delay: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-8 flex flex-col gap-5 border-t border-white/[0.07] pt-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-4">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
              DRAG TO EXPLORE
            </span>

            <div className="hidden h-px w-16 bg-white/10 sm:block" />

            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-red-500/70">
              LIVE FEEDBACK
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-1 w-1 rounded-full bg-red-500" />

            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
              SYSTEM STATUS
            </span>

            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/50">
              OPERATIONAL
            </span>
          </div>
        </motion.div>

        {/* -------------------------------------------------------------- */}
        {/* CLOSING STATEMENT                                               */}
        {/* -------------------------------------------------------------- */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={
            isInView
              ? {
                opacity: 1,
                y: 0,
              }
              : {
                opacity: 0,
                y: 25,
              }
          }
          transition={{
            duration: 0.8,
            delay: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-24 grid gap-8 border-t border-white/[0.08] pt-10 md:grid-cols-[1fr_auto]"
        >
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-red-500">
              AXION / PROOF OF WORK
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/35">
              Every result starts with a system.
              Every system gets better with the
              person inside it.
            </p>
          </div>

          <div className="flex items-end">
            <span className="text-[clamp(2rem,4vw,4rem)] font-semibold leading-none tracking-[-0.05em] text-white/10">
              PROGRESS
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}