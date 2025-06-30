"use client"
import Link from "next/link"
// import Slideshow from "./Slideshow"

const Hero = () => {
  return (
    <div className="relative h-screen">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/bg-section.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-4 z-20">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Welcome to SPIN CITY AGORA
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Your Ultimate Entertainment Destination
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#bowling"
              className="bg-[#864581] text-white px-8 py-3 rounded-full hover:bg-[#751F46] transition-colors text-lg font-semibold"
            >
              Experience Bowling
            </Link>
            <Link
              href="#qbilliard"
              className="bg-[#751F46] text-white px-8 py-3 rounded-full hover:bg-[#864581] transition-colors text-lg font-semibold"
            >
              Play QBilliard
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  )
}

export default Hero
