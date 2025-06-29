"use client"
import React, { useState, useEffect } from "react"
import { generateMetaKeywords } from "@/utils/seoUtils"

const KeywordDisplay = () => {
  const [keywords, setKeywords] = useState([])
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Ambil keyword dari localStorage
    const savedKeywords = JSON.parse(
      localStorage.getItem("websiteKeywords") || "[]"
    )
    setKeywords(savedKeywords.map((k) => k.keyword))

    // Tampilkan komponen setelah delay untuk animasi
    setTimeout(() => setIsVisible(true), 1000)
  }, [])

  if (keywords.length === 0) return null

  return (
    <div
      className={`transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 p-4 rounded-lg mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">
          🔍 Keyword yang Dioptimasi
        </h3>
        <div className="flex flex-wrap gap-2">
          {keywords.slice(0, 8).map((keyword, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full border border-blue-200 hover:bg-blue-200 transition-colors"
            >
              {keyword}
            </span>
          ))}
          {keywords.length > 8 && (
            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
              +{keywords.length - 8} more
            </span>
          )}
        </div>
        <p className="text-sm text-gray-600 mt-3">
          Keyword ini dioptimasi berdasarkan data dari Google Search Console
          untuk meningkatkan ranking SEO website.
        </p>
      </div>
    </div>
  )
}

export default KeywordDisplay
