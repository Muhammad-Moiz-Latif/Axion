"use client"

import { Arimo } from "next/font/google"

import Plan from "@/components/Plan"
import PricingFeatures from "@/components/pricing-features"
import JoinUs from "@/components/JoinUs"
import NavBar from "@/components/Nav"
import { Footer } from "@/components/Footer"

const arimo = Arimo({
  variable: "--font-arimo",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

export default function PricingPage() {
  return (
    <main
      className={`${arimo.className} relative min-h-screen overflow-hidden bg-[#050505] text-white`}
    >
      {/* ================================================================
          GLOBAL ATMOSPHERE
      ================================================================ */}

      <div className="pointer-events-none fixed inset-0 z-0">
        {/* Technical grid */}
        <div
          className="absolute inset-0 opacity-[0.028]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,.6) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,.6) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Fine center axis */}
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/[0.018]" />

        {/* Ambient red */}
        <div className="absolute left-1/2 top-[18%] h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-red-600/[0.025] blur-[180px]" />

        {/* Architectural horizontals */}
        <div className="absolute left-0 top-[17%] h-px w-full bg-white/[0.035]" />
        <div className="absolute left-0 top-[48%] h-px w-full bg-white/[0.025]" />
        <div className="absolute left-0 top-[79%] h-px w-full bg-white/[0.025]" />
      </div>

      {/* Corner architecture */}
      <div className="pointer-events-none fixed left-5 top-24 z-20 h-10 w-10 border-l border-t border-white/[0.08] md:left-10" />
      <div className="pointer-events-none fixed right-5 top-24 z-20 h-10 w-10 border-r border-t border-white/[0.08] md:right-10" />

      <NavBar />

      <div className="relative z-10">

        {/* ================================================================
            PLANS
        ================================================================ */}

        <section>
          <Plan />
        </section>

        {/* ================================================================
            FEATURE MATRIX
        ================================================================ */}

        <section>
          <PricingFeatures />
        </section>

        {/* ================================================================
            JOIN
        ================================================================ */}

        <section>
          <JoinUs />
        </section>

        {/* ================================================================
            FOOTER
        ================================================================ */}

        <Footer />
      </div>
    </main>
  )
}