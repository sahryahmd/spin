"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-[#751F46]/70 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              {/* <div className="relative w-16 h-16 mr-4">
                <Image
                  src="/logo.png"
                  alt="SPIN CITY AGORA Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div> */}
              <span className="hidden md:block text-2xl font-bold text-white">
                SPIN CITY AGORA
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#bowling"
              className="text-white hover:bg-[#864581] transition-colors"
            >
              Bowling
            </Link>
            <Link
              href="#qbilliard"
              className="text-white hover:bg-[#864581] transition-colors"
            >
              QBilliard
            </Link>
            <Link
              href="#bar"
              className="text-white hover:bg-[#864581] transition-colors"
            >
              Bar & Lounge
            </Link>
            <Link
              href="#contact"
              className="bg-[#751F46] text-white px-4 py-2 rounded-full hover:bg-[#864581] transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#751F46] focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#bowling"
              className="block px-3 py-2 text-gray-700 hover:text-[#864581] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Bowling
            </Link>
            <Link
              href="#qbilliard"
              className="block px-3 py-2 text-gray-700 hover:text-[#751F46] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              QBilliard
            </Link>
            <Link
              href="#bar"
              className="block px-3 py-2 text-gray-700 hover:text-[#751F46] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Bar & Lounge
            </Link>
            <Link
              href="#contact"
              className="block px-3 py-2 text-gray-700 hover:text-[#751F46] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
