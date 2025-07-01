"use client"
import React, { useEffect, useRef } from "react"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import BowlingSection from "@/components/BowlingSection"
import QBilliardSection from "@/components/QBilliardSection"
import BarSection from "@/components/BarSection"
import Maps from "@/components/Maps"
import Footer from "@/components/Footer"
import DualCarousel from "@/components/DualCarousel"
import ReelsVideo from "@/components/ReelsVideo"
import PromoForm from "@/components/PromoForm"
import "locomotive-scroll/dist/locomotive-scroll.css"
// import KeywordDisplay from "@/components/KeywordDisplay"

export default function Home() {
  const scrollRef = useRef(null)

  useEffect(() => {
    let scroll
    import("locomotive-scroll").then((LocomotiveScroll) => {
      scroll = new LocomotiveScroll.default({
        el: scrollRef.current,
        smooth: true,
        lerp: 0.08,
        multiplier: 1,
        class: "is-reveal",
      })
    })
    return () => {
      if (scroll) scroll.destroy()
    }
  }, [])

  return (
    <div ref={scrollRef} data-scroll-container>
      <main className="min-h-screen">
        <section data-scroll-section>
          <Hero data-scroll data-scroll-speed="1.2" />
        </section>

        <div className="max-w-6xl mx-auto px-6" data-scroll-section>
          {/* <KeywordDisplay /> */}
        </div>
        <section data-scroll-section>
          <BowlingSection data-scroll data-scroll-speed="0.8" />
        </section>
        <section data-scroll-section>
          <DualCarousel data-scroll data-scroll-speed="1" />
        </section>
        <section data-scroll-section>
          <QBilliardSection data-scroll data-scroll-speed="1.1" />
        </section>
        <section data-scroll-section>
          <BarSection data-scroll data-scroll-speed="0.9" />
        </section>
        <section data-scroll-section>
          <ReelsVideo
            sources={[
              "/qbilliard reyes.mp4",
              "/qbilliard reyes 2.mp4",
              "/qbilliard dj.mp4",
              "/qbilliard 3.mp4",
            ]}
            data-scroll
            data-scroll-speed="1.3"
          />
        </section>
        <section data-scroll-section>
          <Maps data-scroll data-scroll-speed="1" />
        </section>
        <section data-scroll-section>
          <PromoForm data-scroll data-scroll-speed="1" />
        </section>
        <section data-scroll-section>
          <Footer />
        </section>
      </main>
    </div>
  )
}
