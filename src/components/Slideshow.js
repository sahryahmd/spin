"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/effect-fade"

const slides = [
  {
    id: 1,
    image: "/bgmainsection.webp",
  },
  {
    id: 2,
    image: "/sectionqbill.webp",
  },
  {
    id: 3,
    image: "/spincitymain.webp",
  },
  {
    id: 4,
    image: "/1.jpg",
  },
  {
    id: 5,
    image: "/2.jpg",
  },
  {
    id: 6,
    image: "/3.jpg",
  },
  {
    id: 7,
    image: "/4.jpg",
  },
  {
    id: 8,
    image: "/5.jpg",
  },
]

const Slideshow = () => {
  return (
    <div className="relative h-screen">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative h-full w-full"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/50" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Content overlay */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-4 z-10">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Welcome to SPIN CITY AGORA
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Your Ultimate Entertainment Destination
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#bowling"
              className="bg-[#864581] text-white px-8 py-3 rounded-full hover:bg-[#751F46] transition-colors text-lg font-semibold"
            >
              Experience Bowling
            </a>
            <a
              href="#qbilliard"
              className="bg-[#751F46] text-white px-8 py-3 rounded-full hover:bg-[#864581] transition-colors text-lg font-semibold"
            >
              Play QBilliard
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  )
}

export default Slideshow
