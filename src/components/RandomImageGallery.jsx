"use client"

import { useEffect, useState } from "react"
import styles from "./RandomImageGallery.module.css"

const RandomImageGallery = () => {
  const [images, setImages] = useState([])
  const [isMobile, setIsMobile] = useState(false)

  // Array of local images from public folder
  const localImages = [
    "/1.jpg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg",
    "/7.jpg",
    "/8.jpg",
    "/9.jpg",
    "/spincitymain.webp",
    "/bgmainsection.webp",
    "/sectionqbill.webp",
  ]

  // Define fixed sizes for landscape images with different dimensions
  const imageSizes = {
    desktop: [
      {
        width: 300,
        height: 200,
      },
      {
        width: 350,
        height: 220,
      },
      {
        width: 280,
        height: 180,
      },
      {
        width: 320,
        height: 210,
      },
      {
        width: 290,
        height: 190,
      },
    ],
    mobile: [
      {
        width: 160,
        height: 107,
      },
      {
        width: 180,
        height: 120,
      },
      {
        width: 150,
        height: 100,
      },
      {
        width: 170,
        height: 113,
      },
      {
        width: 155,
        height: 103,
      },
    ],
  }

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    // Create initial images for two rows
    const imagesPerRow = isMobile ? 3 : 5 // 3 images per row for mobile, 5 for desktop

    const getSpacing = () => {
      if (isMobile) {
        return 30 // Adjusted spacing for mobile
      }
      const width = window.innerWidth
      if (width <= 1024) {
        // Tablet
        return 15
      } else {
        // Desktop
        return 25
      }
    }

    const initialImages = Array.from(
      { length: imagesPerRow * 2 },
      (_, index) => {
        // Randomly select a size from imageSizes array
        const sizeArray = isMobile ? imageSizes.mobile : imageSizes.desktop
        const size = sizeArray[Math.floor(Math.random() * sizeArray.length)]

        // Calculate position based on row and index
        const row = Math.floor(index / imagesPerRow)
        const rowIndex = index % imagesPerRow
        const spacing = getSpacing()

        // Calculate initial positions with proper spacing
        const xPosition =
          row === 0
            ? rowIndex * spacing // Top row starts from left
            : 100 - rowIndex * spacing // Bottom row starts from right

        // Adjusted vertical spacing for mobile
        const yPosition = row * (isMobile ? 40 : 40) + (isMobile ? 10 : 10)

        return {
          id: index,
          width: size.width,
          height: size.height,
          position: {
            x: xPosition,
            y: yPosition,
          },
          speed: isMobile ? 12 : 15, // Adjusted speed for mobile
          direction: row === 0 ? 1 : -1, // Top row moves right, bottom row moves left
          imageUrl: localImages[index % localImages.length],
        }
      }
    )

    setImages(initialImages)

    // Animation loop
    const animate = () => {
      setImages((prevImages) =>
        prevImages.map((img) => {
          const newX = img.position.x + (img.speed * img.direction) / 100

          // Reset position when reaching boundaries
          if (img.direction === 1 && newX > 100) {
            return {
              ...img,
              position: { ...img.position, x: -20 }, // Reset to left side
            }
          } else if (img.direction === -1 && newX < -20) {
            return {
              ...img,
              position: { ...img.position, x: 100 }, // Reset to right side
            }
          }

          return {
            ...img,
            position: { ...img.position, x: newX },
          }
        })
      )
    }

    const animationInterval = setInterval(animate, 50)
    return () => clearInterval(animationInterval)
  }, [isMobile]) // Re-run when mobile state changes

  return (
    <div className={styles.galleryContainer}>
      {images.map((img) => (
        <div
          key={img.id}
          className={styles.imageWrapper}
          style={{
            width: `${img.width}px`,
            height: `${img.height}px`,
            left: `${img.position.x}%`,
            top: `${img.position.y}%`,
            animationDuration: `${img.speed}s`,
          }}
        >
          <img
            src={img.imageUrl}
            alt={`Gallery image ${img.id}`}
            className={styles.image}
          />
        </div>
      ))}
    </div>
  )
}

export default RandomImageGallery
