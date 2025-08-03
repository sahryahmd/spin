"use client"
import Image from "next/image"
import Link from "next/link"

const BowlingSection = () => {
  return (
    <section id="bowling" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#751F46] mb-4">
            Bowling Jakarta Pusat - SPIN CITY AGORA MALL
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            Temukan tempat bowling terbaik di Jakarta Pusat dengan fasilitas
            modern dan suasana nyaman
          </p>
          <p className="text-lg text-gray-500">
            SPIN CITY AGORA MALL menyediakan pengalaman bowling terbaik di
            jantung ibukota dengan teknologi terbaru
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl hover:scale-105 transition-all duration-300">
            <Image
              src="/spincitymain.webp"
              alt="Bowling Alley"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#751F46] mb-6">
              Jalur Bowling Modern di Jakarta Pusat
            </h2>
            <p className="text-gray-600 mb-6">
              Nikmati fasilitas bowling modern dengan sistem scoring otomatis,
              area duduk yang nyaman, dan suasana yang vibrant. Perfect untuk
              pemain casual maupun bowler serius di Jakarta Pusat. SPIN CITY
              AGORA MALL menyediakan 12 jalur bowling dengan teknologi terbaru
              untuk pengalaman bowling terbaik di Jakarta Pusat.
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
                <p className="ml-3 text-gray-600">12 Modern Bowling Lanes</p>
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
                <p className="ml-3 text-gray-600">Automatic Scoring Systems</p>
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
                <p className="ml-3 text-gray-600">Comfortable Seating Areas</p>
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
                <p className="ml-3 text-gray-600">
                  Harga Terjangkau: Weekday Rp 25.000, Weekend Rp 30.000
                </p>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl mt-6">
              <h3 className="text-lg font-semibold text-[#751F46] mb-3">
                Booking Bowling Jakarta Pusat
              </h3>
              <p className="text-gray-600 mb-3">
                Untuk reservasi jalur bowling di Jakarta Pusat, hubungi kami:
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p>
                  <strong>Telepon:</strong> +62 882-9027-5999
                </p>
                <p>
                  <strong>WhatsApp:</strong> +62 882-9027-5999
                </p>
                <p>
                  <strong>Email:</strong> spincity@spincitybowling.com
                </p>
              </div>
            </div>
            <Link
              href="http://wa.me/6288290275999"
              className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#751F46] hover:bg-[#8B254E] transition-colors duration-200"
            >
              Order Now
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BowlingSection
