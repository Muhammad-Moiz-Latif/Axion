import type { Metadata } from "next"

import "@/app/globals.css"

import NavBar from "@/components/Nav"
import { Footer } from "@/components/Footer"
import JoinUs from "@/components/JoinUs"

export const metadata: Metadata = {
  title: "AXION — Built. Not Born.",
  description:
    "Data-driven fitness training designed to track real progress, build strength, and transform performance.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* =====================================================
          GLOBAL NAVIGATION
          Fixed independently from page content.
      ===================================================== */}

      <NavBar />

      {/* =====================================================
          PAGE CONTENT
      ===================================================== */}

      <main className="relative z-[1] w-full">
        {children}
      </main>

      {/* =====================================================
          GLOBAL CTA / JOIN SECTION
      ===================================================== */}

      <div className="relative z-[2]">
        <JoinUs />
      </div>

      {/* =====================================================
          GLOBAL FOOTER
      ===================================================== */}

      <footer className="relative z-[2]">
        <Footer />
      </footer>
    </div>
  )
}