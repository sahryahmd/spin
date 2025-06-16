"use client"

import { useEffect, useState } from "react"
import styles from "./RandomImageGallery.module.css"

const RandomImageGallery = () => {
  const [images, setImages] = useState([])

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
  const imageSizes = [
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
  ]

  useEffect(() => {
    // Create initial images for two rows
    const imagesPerRow = 5 // 5 images per row

    // Function to get spacing based on screen width
    const getSpacing = () => {
      const width = window.innerWidth
      if (width <= 768) {
        // Mobile
        return 10 // Closer spacing for mobile
      } else if (width <= 1024) {
        // Tablet
        return 15 // Medium spacing for tablet
      } else {
        // Desktop
        return 25 // Wider spacing for desktop
      }
    }

    const initialImages = Array.from(
      { length: imagesPerRow * 2 },
      (_, index) => {
        // Randomly select a size from imageSizes array
        const size = imageSizes[Math.floor(Math.random() * imageSizes.length)]

        // Calculate position based on row and index
        const row = Math.floor(index / imagesPerRow)
        const rowIndex = index % imagesPerRow
        const spacing = getSpacing()

        // Calculate initial positions with proper spacing
        const xPosition =
          row === 0
            ? rowIndex * spacing // Top row starts from left
            : 100 - rowIndex * spacing // Bottom row starts from right

        const yPosition = row * 40 + 10 // 40% height per row, 10% margin

        return {
          id: index,
          width: size.width,
          height: size.height,
          position: {
            x: xPosition,
            y: yPosition,
          },
          speed: 15, // Fixed speed for more consistent movement
          direction: row === 0 ? 1 : -1, // Top row moves right, bottom row moves left
          imageUrl: localImages[index % localImages.length],
        }
      }
    )

    setImages(initialImages)

    // Add resize listener to update spacing
    const handleResize = () => {
      setImages((prevImages) =>
        prevImages.map((img, index) => {
          const row = Math.floor(index / imagesPerRow)
          const rowIndex = index % imagesPerRow
          const spacing = getSpacing()

          const xPosition =
            row === 0 ? rowIndex * spacing : 100 - rowIndex * spacing

          return {
            ...img,
            position: {
              ...img.position,
              x: xPosition,
            },
          }
        })
      )
    }

    window.addEventListener("resize", handleResize)

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
    return () => {
      clearInterval(animationInterval)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

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
