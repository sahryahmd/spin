"use client"
import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade } from "swiper/modules"
import Image from "next/image"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-fade"

const slides = [
  {
    id: 1,
    image: "/1.jpg",
  },
  {
    id: 2,
    image: "/2.jpg",
  },
  {
    id: 3,
    image: "/3.jpg",
  },
  {
    id: 4,
    image: "/4.jpg",
  },
  {
    id: 5,
    image: "/5.jpg",
  },
  {
    id: 6,
    image: "/6.jpg",
  },
  {
    id: 7,
    image: "/7.jpg",
  },
  {
    id: 8,
    image: "/8.jpg",
  },
  {
    id: 9,
    image: "/9.jpg",
  },
]

const Slideshow = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative w-full h-screen">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt="Slideshow image"
                fill
                className="object-cover"
                priority={slide.id === 1}
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slideshow
