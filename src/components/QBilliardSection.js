"use client"
import Image from "next/image"

const QBilliardSection = () => {
  return (
    <section
      id="qbilliard"
      className="py-20 bg-gradient-to-b from-white to-[#751F46]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#751F46] mb-4">QBilliard</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the art of billiards in our premium gaming environment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-[#751F46] mb-4">
                Professional Tables
              </h3>
              <p className="text-gray-600">
                Experience our collection of high-quality billiard tables,
                maintained to professional standards.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-[#751F46] mb-4">
                Perfect Environment
              </h3>
              <p className="text-gray-600">
                Enjoy a sophisticated atmosphere with proper lighting and
                comfortable seating areas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-[#751F46] mb-4">
                Additional Services
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Professional equipment rental</li>
                <li>• Expert coaching available</li>
                <li>• Tournament organization</li>
                <li>• Private event bookings</li>
              </ul>
            </div>
          </div>

          <div className="relative h-[400px] rounded-2xl overflow-hidden order-1 md:order-2">
            <Image
              src="/sectionqbill.webp"
              alt="QBilliard"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://wa.me/6288290275999"
            className="inline-block bg-[#751F46] text-white px-8 py-3 rounded-full hover:bg-[#864581] transition-colors text-lg font-semibold"
          >
            Reserve a Table
          </a>
        </div>
      </div>
    </section>
  )
}

export default QBilliardSection
