"use client"
import { useEffect } from "react"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import BowlingSection from "@/components/BowlingSection"
import QBilliardSection from "@/components/QBilliardSection"
import BarSection from "@/components/BarSection"
import Maps from "@/components/Maps"
import Footer from "@/components/Footer"
import DualCarousel from "@/components/DualCarousel"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <Hero />
      <BowlingSection />
      <DualCarousel />
      <QBilliardSection />
      <BarSection />
      <Maps />
      <Footer />
    </main>
  )
}
