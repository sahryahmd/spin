"use client"
import Image from "next/image"

const BowlingSection = () => {
  return (
    <section
      id="bowling"
      className="py-20 bg-gradient-to-b from-white to-[#864581]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#864581] mb-4">
            SPIN BOWLING ALLEY
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the thrill of bowling in our state-of-the-art facility
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <Image
              src="/spincitymain.webp"
              alt="SPIN BOWLING ALLEY"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-[#864581] mb-4">
                Modern Bowling Lanes
              </h3>
              <p className="text-gray-600">
                Enjoy our 20 premium bowling lanes equipped with the latest
                scoring systems and comfortable seating areas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-[#864581] mb-4">
                Perfect for Everyone
              </h3>
              <p className="text-gray-600">
                Whether you're a professional bowler or just looking for fun,
                our facility caters to all skill levels.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-[#864581] mb-4">
                Additional Features
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Professional bowling equipment rental</li>
                <li>• Snack bar and refreshments</li>
                <li>• Party packages available</li>
                <li>• League play opportunities</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://wa.me/6288290275999"
            className="inline-block bg-[#864581] text-white px-8 py-3 rounded-full hover:bg-[#751F46] transition-colors text-lg font-semibold"
          >
            Book Your Lane Now
          </a>
        </div>
      </div>
    </section>
  )
}

export default BowlingSection
