"use client"

const BarSection = () => {
  return (
    <section
      id="bar"
      className="py-20 bg-gradient-to-b from-[#751F46] to-[#864581]"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Bar & Lounge</h2>
          <p className="text-xl text-white/80">
            Enjoy premium drinks and cocktails in our stylish bar setting
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-lg overflow-hidden shadow-2xl">
            <img
              src="/7.jpg"
              alt="Bar"
              className="w-full h-[400px] object-cover"
            />
          </div>

          <div className="text-white">
            <h3 className="text-3xl font-bold mb-6">Experience Our Bar</h3>
            <p className="text-lg mb-6">
              Step into our sophisticated bar and lounge area where you can
              unwind with expertly crafted cocktails and premium spirits. Our
              skilled bartenders create unique drinks that perfectly complement
              your entertainment experience.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 mt-1">
                  <svg
                    className="w-6 h-6 text-white"
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
                <p className="ml-3 text-lg">
                  Extensive selection of premium spirits and cocktails
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 mt-1">
                  <svg
                    className="w-6 h-6 text-white"
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
                <p className="ml-3 text-lg">
                  Live music and entertainment on weekends
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 mt-1">
                  <svg
                    className="w-6 h-6 text-white"
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
                <p className="ml-3 text-lg">
                  Comfortable seating and modern ambiance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BarSection
