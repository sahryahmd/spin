"use client"
import React from "react"
import { motion } from "framer-motion"
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
import StructuredData from "@/components/StructuredData"
import SmoothScroll from "@/components/SmoothScroll"
// import KeywordDisplay from "@/components/KeywordDisplay"

export default function Home() {
  return (
    <div>
      <StructuredData />
      <main className="min-h-screen">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Hero />
        </motion.section>

        <motion.div
          className="max-w-6xl mx-auto px-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* <KeywordDisplay /> */}
        </motion.div>

        <SmoothScroll speed={0.8}>
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <BowlingSection />
          </motion.section>
        </SmoothScroll>

        <SmoothScroll speed={1}>
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <DualCarousel />
          </motion.section>
        </SmoothScroll>

        <SmoothScroll speed={1.1}>
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <QBilliardSection />
          </motion.section>
        </SmoothScroll>

        <SmoothScroll speed={0.9}>
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <BarSection />
          </motion.section>
        </SmoothScroll>

        <SmoothScroll speed={1.3}>
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ReelsVideo
              sources={[
                "/qbilliard reyes.mp4",
                "/qbilliard reyes 2.mp4",
                "/qbilliard dj.mp4",
                "/qbilliard 3.mp4",
              ]}
            />
          </motion.section>
        </SmoothScroll>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Maps />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <PromoForm />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Footer />
        </motion.section>
      </main>
    </div>
  )
}
