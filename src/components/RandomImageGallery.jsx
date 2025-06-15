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

  // Define fixed sizes for landscape and portrait
  const imageSizes = {
    landscape: {
      width: 300,
      height: 200,
    },
    portrait: {
      width: 200,
      height: 300,
    },
  }

  useEffect(() => {
    // Create initial images for two rows
    const imagesPerRow = 5 // 5 images per row
    const initialImages = Array.from(
      { length: imagesPerRow * 2 },
      (_, index) => {
        // Randomly choose between landscape and portrait
        const isLandscape = Math.random() > 0.5
        const size = isLandscape ? imageSizes.landscape : imageSizes.portrait

        // Calculate position based on row and index
        const row = Math.floor(index / imagesPerRow)
        const rowIndex = index % imagesPerRow

        // Calculate initial positions with proper spacing
        const xPosition =
          row === 0
            ? rowIndex * 20 // Top row starts from left
            : 100 - rowIndex * 20 // Bottom row starts from right

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
