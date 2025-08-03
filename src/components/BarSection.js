"use client"
import Image from "next/image"

const BarSection = () => {
  return (
    <section id="bar" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#751F46] mb-4">
            Bar & Lounge Jakarta - SPIN CITY AGORA MALL
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            Bar modern dengan menu minuman lengkap dan suasana nyaman di Jakarta
            Pusat
          </p>
          <p className="text-lg text-gray-500">
            Nikmati suasana bar & lounge terbaik di SPIN CITY AGORA MALL dengan
            live entertainment
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl hover:scale-105 transition-all duration-300">
            <Image
              src="/4.jpg"
              alt="Bar & Lounge"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#751F46] mb-6">
              Bar & Lounge Premium di Jakarta Pusat
            </h2>
            <p className="text-gray-600 mb-6">
              Nikmati pilihan minuman dan cocktail yang dipilih dengan teliti
              dalam suasana yang sophisticated. Perfect untuk gathering casual
              maupun acara khusus di Jakarta Pusat. SPIN CITY AGORA MALL
              menyediakan bar & lounge terbaik dengan live entertainment.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="flex-shrink-0 w-6 h-6 text-[#751F46]">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="ml-3 text-gray-600">Signature Cocktails</p>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 w-6 h-6 text-[#751F46]">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="ml-3 text-gray-600">Comfortable Seating</p>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 w-6 h-6 text-[#751F46]">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="ml-3 text-gray-600">Live Entertainment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BarSection
