"use client"
import Image from "next/image"

const Maps = () => {
  return (
    <section id="contact" className="bg-[#751F46] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
            <Image
              src="/maps.PNG"
              alt="Location Map"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Location Info */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-white mb-6">Find Us</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Address
                </h3>
                <p className="text-gray-200">
                  Jl. Agora, Kelapa Gading, Jakarta Utara
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Opening Hours
                </h3>
                <p className="text-gray-200">Monday - Sunday: 10:00 - 22:00</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Contact
                </h3>
                <p className="text-gray-200">Phone: (021) 1234-5678</p>
                <p className="text-gray-200">Email: info@spincityagora.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Maps
