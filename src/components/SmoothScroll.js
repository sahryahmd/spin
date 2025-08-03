"use client"
import React from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const SmoothScroll = ({ children, speed = 1, className = "" }) => {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -100 * speed])

  return (
    <motion.div style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}

export default SmoothScroll
