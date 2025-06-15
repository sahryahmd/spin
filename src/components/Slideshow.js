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
    title: "Bowling",
    description: "Experience the thrill of bowling",
  },
  {
    id: 2,
    image: "/2.jpg",
    title: "QBilliard",
    description: "Enjoy a game of pool",
  },
  {
    id: 3,
    image: "/3.jpg",
    title: "Bar & Lounge",
    description: "Relax and unwind",
  },
  {
    id: 4,
    image: "/4.jpg",
    title: "Bowling",
    description: "Experience the thrill of bowling",
  },
  {
    id: 5,
    image: "/5.jpg",
    title: "QBilliard",
    description: "Enjoy a game of pool",
  },
  {
    id: 6,
    image: "/6.jpg",
    title: "Bar & Lounge",
    description: "Relax and unwind",
  },
  {
    id: 7,
    image: "/7.jpg",
    title: "Bowling",
    description: "Experience the thrill of bowling",
  },
  {
    id: 8,
    image: "/8.jpg",
    title: "QBilliard",
    description: "Enjoy a game of pool",
  },
  {
    id: 9,
    image: "/9.jpg",
    title: "Bar & Lounge",
    description: "Relax and unwind",
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
                alt={slide.title}
                fill
                className="object-cover"
                priority={slide.id === 1}
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h2 className="text-4xl md:text-6xl font-bold mb-4">
                  {slide.title}
                </h2>
                <p className="text-xl md:text-2xl">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slideshow
