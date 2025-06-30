"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { FaInstagram } from "react-icons/fa"
import { FaArrowRight } from "react-icons/fa"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  // Scroll event untuk transisi background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleCloseMenu = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsMenuOpen(false)
      setIsClosing(false)
    }, 400) // durasi animasi
  }

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-transparent">
      {/* Header: selalu ada, berisi hamburger atau X sesuai state */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-end h-20 relative">
        {!isMenuOpen && !isClosing && (
          <div className="flex items-center">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-[#751F46] focus:outline-none bg-white bg-opacity-80 hover:bg-opacity-100 hover:bg-[#FFD700] transition-colors"
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
        )}
        {(isMenuOpen || isClosing) && (
          <button
            onClick={handleCloseMenu}
            className="absolute top-3.5 text-white text-4xl font-bold focus:outline-none"
            aria-label="Close menu"
            style={{ zIndex: 60 }}
          >
            &times;
          </button>
        )}
      </div>
      {/* Menu fullscreen: tampil di semua mode saat hamburger diklik */}
      {(isMenuOpen || isClosing) && (
        <div
          className={`fixed inset-0 bg-[#751F46] z-50 flex flex-col items-center justify-center ${
            isClosing ? "animate-slideDown" : "animate-slideUp"
          }`}
        >
          {/* Spacer agar konten tidak tertutup header */}
          <div className="h-20" />
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
            {" "}
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
          <div className="w-full">
            <div className="block lg:hidden flex flex-col items-center">
              <a
                href="https://instagram.com/spincitybowling"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex flex-col items-center justify-center w-44 h-20 rounded-lg bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 hover:scale-110 transition-transform mx-auto"
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
            <a
              href="https://instagram.com/spincitybowling"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex flex-col items-center justify-center w-44 h-20 rounded-lg bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 hover:scale-110 transition-transform fixed right-10 bottom-10"
              aria-label="Instagram"
              style={{ zIndex: 60 }}
            >
              <FaInstagram className="text-white text-4xl mb-1" />
              <span className="text-white text-base font-semibold text-center leading-tight">
                See Our Instagram
              </span>
            </a>
            <div
              className="hidden lg:block fixed left-10 bottom-10 text-white text-base font-medium leading-snug w-64"
              style={{ zIndex: 60 }}
            >
              Agora Mall Lantai L2 Jl. M.H. Thamrin No.10,
              <br />
              Kb. Melati, Tanah Abang,
              <br />
              Jakarta Pusat
              <div className="mt-2">+62 882-9027-5999</div>
            </div>
          </div>
          <button
            onClick={() => {
              setIsMenuOpen(false)
              setTimeout(() => {
                const el = document.getElementById("promoform")
                if (el) el.scrollIntoView({ behavior: "smooth" })
              }, 300)
            }}
            className="mt-6 w-64 flex items-center justify-center gap-2 bg-[#FFD700] text-[#751F46] font-bold text-lg py-4 rounded-lg shadow hover:bg-yellow-400 transition-colors"
          >
            Get a Promo? Click Me <FaArrowRight className="text-2xl" />
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
