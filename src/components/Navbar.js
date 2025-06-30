"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { FaInstagram } from "react-icons/fa"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Scroll event untuk transisi background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 bg-[#751F46] shadow-lg`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo kiri */}
        <Link href="/" className="flex items-center">
          <div className="relative w-12 h-12 mr-3">
            <Image
              src="/logo.png"
              alt="SPIN CITY AGORA Logo"
              width={48}
              height={48}
              className="object-contain"
              priority
            />
          </div>
          <span className="text-2xl font-bold text-white tracking-wide">
            SPIN CITY AGORA
          </span>
        </Link>
        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-12">
          <Link
            href="#bowling"
            className="text-white font-semibold text-lg hover:text-[#FFD700] transition-colors px-2 py-1"
          >
            Bowling
          </Link>
          <Link
            href="#qbilliard"
            className="text-white font-semibold text-lg hover:text-[#FFD700] transition-colors px-2 py-1"
          >
            QBilliard
          </Link>
          <Link
            href="#bar"
            className="text-white font-semibold text-lg hover:text-[#FFD700] transition-colors px-2 py-1"
          >
            Bar & Lounge
          </Link>
          <Link
            href="#contact"
            className="bg-white text-[#751F46] font-bold text-lg px-6 py-2 rounded-full hover:bg-[#FFD700] hover:text-[#751F46] transition-colors shadow"
          >
            Contact Us
          </Link>
        </div>
        {/* Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#FFD700] focus:outline-none"
            aria-label="Open menu"
          >
            <svg
              className="h-7 w-7"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile menu fullscreen */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#751F46] z-50 flex flex-col items-center justify-center md:hidden animate-slideUp">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 text-white text-4xl font-bold focus:outline-none"
            aria-label="Close menu"
          >
            &times;
          </button>
          <Link
            href="#bowling"
            className="text-white text-5xl mb-6 font-black transition-all duration-200 transform hover:text-[#FFD700] hover:scale-110"
            onClick={() => setIsMenuOpen(false)}
          >
            Bowling
          </Link>
          <Link
            href="#qbilliard"
            className="text-white text-5xl mb-6 font-black transition-all duration-200 transform hover:text-[#FFD700] hover:scale-110"
            onClick={() => setIsMenuOpen(false)}
          >
            QBilliard
          </Link>
          <Link
            href="#bar"
            className="text-white text-5xl mb-6 font-black transition-all duration-200 transform hover:text-[#FFD700] hover:scale-110"
            onClick={() => setIsMenuOpen(false)}
          >
            Bar & Lounge
          </Link>
          <Link
            href="#contact"
            className="text-white text-5xl mb-6 font-black transition-all duration-200 transform hover:text-[#FFD700] hover:scale-110"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>
          <a
            href="https://instagram.com/spincitybowling"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 flex flex-col items-center justify-center w-44 h-20 rounded-lg bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 hover:scale-110 transition-transform"
            aria-label="Instagram"
          >
            <FaInstagram className="text-white text-4xl mb-1" />
            <span className="text-white text-base font-semibold text-center leading-tight">
              See Our Instagram
            </span>
          </a>
          <div className="mt-6 text-white text-center text-base font-medium leading-snug w-64">
            Agora Mall Lantai L2 Jl. M.H. Thamrin No.10,
            <br />
            Kb. Melati, Tanah Abang,
            <br />
            Jakarta Pusat
          </div>
          <div className="mt-2 text-white text-center text-base font-medium w-64">
            +62 882-9027-5999
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
