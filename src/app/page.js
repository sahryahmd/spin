"use client"
import { useEffect } from "react"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import BowlingSection from "@/components/BowlingSection"
import QBilliardSection from "@/components/QBilliardSection"
import BarSection from "@/components/BarSection"
import Maps from "@/components/Maps"
import Footer from "@/components/Footer"
import RandomImageGallery from "@/components/RandomImageGallery"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <Hero />
      <BowlingSection />
      <RandomImageGallery />
      <QBilliardSection />
      <BarSection />
      <Maps />
      <Footer />
    </main>
  )
}
