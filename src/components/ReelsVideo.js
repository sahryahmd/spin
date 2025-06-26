"use client"
import React, { useRef, useEffect, useState } from "react"

const ReelsVideo = ({ sources }) => {
  const [hasMounted, setHasMounted] = useState(false)
  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) return null

  return (
    <div
      style={{
        width: "100%",
        padding: "2rem 0 4rem 0",
        background:
          "radial-gradient(circle at 0% 0%, #751F46 3%, #fff 15%, #fff 80%, #751F46 100%)",
        display: "flex",
        flexWrap: "wrap",
        gap: "24px",
        justifyContent: "center",
        alignItems: "flex-start",
        // margin: "2rem 0",
      }}
    >
      {sources.map((src, idx) => (
        <VideoOnHover key={idx} src={src} />
      ))}
    </div>
  )
}

function VideoOnHover({ src }) {
  const videoRef = useRef(null)
  const [isHover, setIsHover] = useState(false)

  const handleMouseEnter = () => {
    setIsHover(true)
    videoRef.current && videoRef.current.play()
  }
  const handleMouseLeave = () => {
    setIsHover(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <div
      style={{
        width: "320px",
        aspectRatio: "9/16",
        overflow: "hidden",
        borderRadius: "16px",
        transition: "transform 0.4s ease-in, box-shadow 0.4s ease-in",
        transform: isHover ? "scale(1.05)" : "scale(1)",
        boxShadow: isHover
          ? "0 12px 32px 0 rgba(117,31,70,0.35), 0 0 0 4px rgba(117,31,70,0.15)"
          : "0 4px 16px rgba(0,0,0,0.2)",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={src}
        muted
        playsInline
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  )
}

export default ReelsVideo
