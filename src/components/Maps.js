"use client"
import Image from "next/image"

const Maps = () => {
  return (
    <section id="contact" className="bg-[#751F46] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <a
            href="https://www.google.com/maps/place/Spincity+Bowling/@-6.1988713,106.8188768,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69f50073a6d489:0xec3143b21c06cdb8!8m2!3d-6.1988713!4d106.8214517!16s%2Fg%2F11y8wnvw3h?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden hover:scale-105 transition-all duration-300">
              <Image
                src="/maps.PNG"
                alt="Location Map"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </a>

          {/* Location Info */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-white mb-6">Find Us</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Address
                </h3>
                <p className="text-gray-200">
                  Agora Mall Lantai L2 Jl. M.H. Thamrin No.10, Kb. Melati,
                  Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus
                  Ibukota Jakarta 10230
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Opening Hours
                </h3>
                <p className="text-gray-200">
                  Sunday - Thursday: 10:00 AM - 22:00 PM
                </p>
                <p className="text-gray-200">
                  Friday - Saturday: 10:00 AM - 02:00 AM
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Contact
                </h3>
                <p className="text-gray-200">Phone: +62 882-9027-5999</p>
                <p className="text-gray-200">
                  Email: spincity@spincitybowling.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Maps
