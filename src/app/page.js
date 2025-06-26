"use client"
import React from "react"
import { useEffect } from "react"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import BowlingSection from "@/components/BowlingSection"
import QBilliardSection from "@/components/QBilliardSection"
import BarSection from "@/components/BarSection"
import Maps from "@/components/Maps"
import Footer from "@/components/Footer"
import DualCarousel from "@/components/DualCarousel"
import ReelsVideo from "@/components/ReelsVideo"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <BowlingSection />
      <DualCarousel />
      <QBilliardSection />
      <BarSection />
      <ReelsVideo
        sources={[
          "/qbilliard reyes.mp4",
          "/qbilliard reyes 2.mp4",
          "/qbilliard dj.mp4",
          "/qbilliard 3.mp4",
        ]}
      />
      <Maps />
      <Footer />
    </main>
  )
}
