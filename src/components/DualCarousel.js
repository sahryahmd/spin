"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import Image from "next/image"
import { FaInstagram } from "react-icons/fa"

// Import Swiper styles
import "swiper/css"
import "swiper/css/autoplay"

const images = [
  "/8.jpg",
  "/1.jpg",
  "/9.jpg",
  "/2.jpg",
  "/10.jpg",
  "/3.jpg",
  "/12.jpg",
  "/6.jpg",
  "/13.jpg",
  "/7.jpg",
  "/11.jpg",
]

// Tambahkan array untuk gambar portrait
const portraitImages = [
  "/7.jpg",
  "/8.jpg",
  "/9.jpg",
  "/10.jpg",
  "/12.jpg",
  "/13.jpg",
]

const DualCarousel = () => {
  return (
    <div
      className="w-full py-8"
      style={{
        background:
          "radial-gradient(circle at 0% 0%, #751F46 3%, #fff 15%, #fff 80%, #751F46 100%)",
      }}
    >
      <div className="w-full relative flex flex-col items-center">
        <div className="w-full mb-4">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={10}
            slidesPerView={2}
            loop={true}
            speed={3000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            className="mySwiper"
          >
            {[...images, ...images].map((image, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`relative w-full rounded-lg overflow-hidden ${
                    portraitImages.includes(image)
                      ? "aspect-[3/4] w-3/4 mx-auto bg-[#751F46]"
                      : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    style={{
                      objectFit: "cover",
                      ...(portraitImages.includes(image)
                        ? { aspectRatio: "3/4" }
                        : {}),
                    }}
                    className={`hover:scale-110 transition-transform duration-300 ${
                      portraitImages.includes(image) ? "portrait-img" : ""
                    }`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Social Media Button - absolute center between carousels */}
        <div
          className="w-full flex justify-center relative z-10"
          style={{ marginTop: "-32px", marginBottom: "-32px" }}
        >
          <a
            href="https://www.instagram.com/spincitybowling/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-md text-white font-semibold text-lg shadow-xl bg-[#751F46] hover:bg-[#864581] backdrop-blur-md"
            aria-label="Instagram Spin City Agora"
            style={{ boxShadow: "0 4px 24px 0 rgba(0,0,0,0.25)" }}
          >
            <FaInstagram size={24} />
            Follow us on Instagram
          </a>
        </div>

        {/* Second Row - Right to Left */}
        <div className="w-full mt-4">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={10}
            slidesPerView={2}
            loop={true}
            speed={3000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            className="mySwiper"
          >
            {[...images, ...images].map((image, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`relative w-full rounded-lg overflow-hidden ${
                    portraitImages.includes(image)
                      ? "aspect-[3/4] w-3/4 mx-auto bg-[#751F46]"
                      : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    style={{
                      objectFit: "cover",
                      ...(portraitImages.includes(image)
                        ? { aspectRatio: "3/4" }
                        : {}),
                    }}
                    className={`hover:scale-110 transition-transform duration-300 ${
                      portraitImages.includes(image) ? "portrait-img" : ""
                    }`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default DualCarousel
