"use client"
import Image from "next/image"

const BowlingSection = () => {
  return (
    <section id="bowling" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#751F46] mb-4">Bowling</h2>
          <p className="text-xl text-gray-600">
            Experience the thrill of bowling at SPIN CITY AGORA
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/spincitymain.webp"
              alt="Bowling Alley"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#751F46] mb-6">
              State-of-the-Art Bowling Lanes
            </h3>
            <p className="text-gray-600 mb-6">
              Enjoy our modern bowling facilities with automatic scoring
              systems, comfortable seating, and a vibrant atmosphere. Perfect
              for both casual players and serious bowlers.
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BowlingSection
