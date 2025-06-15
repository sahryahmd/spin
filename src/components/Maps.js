"use client"

const Maps = () => {
  return (
    <section id="location" className="py-20 bg-[#751F46]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Location</h2>
          <p className="text-xl text-white/80">
            Find us at the heart of the city
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="h-[400px] rounded-lg overflow-hidden shadow-2xl">
            <a
              href="https://www.google.com/maps/place/Spincity+Bowling/@-6.1988713,106.8188768,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69f50073a6d489:0xec3143b21c06cdb8!8m2!3d-6.1988713!4d106.8214517!16s%2Fg%2F11y8wnvw3h?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/maps.png"
                alt="SPIN CITY AGORA Location"
                className="w-full h-full object-cover"
              />
            </a>
          </div>

          <div className="text-white">
            <h3 className="text-3xl font-bold mb-6">Visit Us</h3>
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-lg font-semibold">Address</p>
                  <p className="text-white/80">
                    M.H. Thamrin No.10, Kb. Melati, Kecamatan Tanah Abang, Kota
                    Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10230
                  </p>
                </div>
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-lg font-semibold">Opening Hours</p>
                  <p className="text-white/80">
                    Monday - Thursday: 10:00 AM - 10:00 PM
                    <br />
                    Friday - Sunday: 10:00 AM - 2:00 AM
                  </p>
                </div>
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-lg font-semibold">Contact</p>
                  <p className="text-white/80">Phone: 088290275999 </p>
                  <p className="text-white/80">
                    Email: spincity@spincitybowling.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Maps
