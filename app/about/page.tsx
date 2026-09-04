"use client"

import NavBar from "@/components/Nav"
import AboutHero from "@/components/about-hero"
import AboutStory from "@/components/about-story"
import AboutValues from "@/components/about-values"
import JoinUs from "@/components/JoinUs"
import { Footer } from "@/components/Footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#030303] text-white">
      <NavBar />

      <AboutHero />
      <AboutStory />
      <AboutValues />

      <JoinUs />
      <Footer />
    </main>
  )
}