// Utility untuk mengelola SEO dan keyword dari Google Search Console

export const generateMetaKeywords = (keywords = []) => {
  // Ambil keyword dari localStorage atau parameter
  const savedKeywords =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("websiteKeywords") || "[]")
      : []

  const allKeywords = [...keywords, ...savedKeywords.map((k) => k.keyword)]

  // Gabungkan dengan keyword default
  const defaultKeywords = [
    "bowling",
    "billiard",
    "bar",
    "lounge",
    "hiburan",
    "Jakarta",
    "Spin City",
    "Agora",
    "tempat nongkrong",
    "event",
    "keluarga",
    "olahraga",
    "minuman",
    "makanan",
    "pusat hiburan",
    "Jakarta Pusat",
    "DKI Jakarta",
  ]

  const combinedKeywords = [...new Set([...allKeywords, ...defaultKeywords])]

  return combinedKeywords.join(", ")
}

export const generateStructuredData = (keywords = []) => {
  const savedKeywords =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("websiteKeywords") || "[]")
      : []

  const allKeywords = [...keywords, ...savedKeywords.map((k) => k.keyword)]

  return {
    "@context": "https://schema.org",
    "@type": "EntertainmentBusiness",
    name: "SPIN CITY AGORA",
    description:
      "Tempat hiburan terbaik di Jakarta: Bowling, Billiard, Bar & Lounge.",
    keywords: allKeywords.join(", "),
    image: "https://www.spincityagora.my.id/logo.png",
    url: "https://www.spincityagora.my.id/",
    telephone: "+6288290275999",
    email: "spincity@spincitybowling.com",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Jl. M.H. Thamrin No.10, Kb. Melati, Kecamatan Tanah Abang",
      addressLocality: "Jakarta Pusat",
      addressRegion: "DKI Jakarta",
      postalCode: "10230",
      addressCountry: "ID",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "10:00",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday", "Saturday"],
        opens: "10:00",
        closes: "02:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/spincityagora",
      "https://www.facebook.com/spincityagora",
    ],
  }
}

export const analyzeSearchConsoleData = (data) => {
  // Analisis data dari Google Search Console
  const analysis = {
    highPerformingKeywords: [],
    lowPerformingKeywords: [],
    opportunities: [],
    recommendations: [],
  }

  data.forEach((item) => {
    // Keyword dengan CTR tinggi dan posisi rendah = opportunity
    if (item.ctr > 10 && item.position > 5) {
      analysis.opportunities.push({
        keyword: item.query,
        reason: "CTR tinggi tapi posisi rendah",
        action: "Optimalkan konten dan meta tags",
      })
    }

    // Keyword dengan impression tinggi tapi CTR rendah
    if (item.impressions > 500 && item.ctr < 5) {
      analysis.lowPerformingKeywords.push({
        keyword: item.query,
        reason: "Impression tinggi tapi CTR rendah",
        action: "Perbaiki meta description dan title",
      })
    }

    // Keyword dengan performa baik
    if (item.clicks > 100 && item.position < 3) {
      analysis.highPerformingKeywords.push({
        keyword: item.query,
        clicks: item.clicks,
        position: item.position,
      })
    }
  })

  // Generate recommendations
  if (analysis.opportunities.length > 0) {
    analysis.recommendations.push(
      "Fokus optimasi pada keyword dengan CTR tinggi tapi posisi rendah"
    )
  }

  if (analysis.lowPerformingKeywords.length > 0) {
    analysis.recommendations.push(
      "Perbaiki meta description untuk keyword dengan CTR rendah"
    )
  }

  return analysis
}

export const generateContentSuggestions = (keywords) => {
  const suggestions = []

  keywords.forEach((keyword) => {
    const keywordLower = keyword.toLowerCase()

    if (keywordLower.includes("bowling")) {
      suggestions.push({
        keyword: keyword,
        contentType: "section",
        suggestion:
          "Tambahkan section khusus bowling dengan detail fasilitas, harga, dan booking",
      })
    }

    if (keywordLower.includes("billiard")) {
      suggestions.push({
        keyword: keyword,
        contentType: "section",
        suggestion:
          "Buat section billiard dengan informasi meja, turnamen, dan fasilitas",
      })
    }

    if (keywordLower.includes("bar") || keywordLower.includes("lounge")) {
      suggestions.push({
        keyword: keyword,
        contentType: "section",
        suggestion:
          "Tampilkan menu minuman, live music, dan suasana bar/lounge",
      })
    }

    if (keywordLower.includes("jakarta")) {
      suggestions.push({
        keyword: keyword,
        contentType: "location",
        suggestion: "Optimalkan informasi lokasi dan akses transportasi",
      })
    }
  })

  return suggestions
}

export const updateMetaTags = (keywords) => {
  if (typeof window === "undefined") return

  // Update meta keywords
  let metaKeywords = document.querySelector('meta[name="keywords"]')
  if (!metaKeywords) {
    metaKeywords = document.createElement("meta")
    metaKeywords.name = "keywords"
    document.head.appendChild(metaKeywords)
  }
  metaKeywords.content = generateMetaKeywords(keywords)

  // Update structured data
  let structuredData = document.querySelector(
    'script[type="application/ld+json"]'
  )
  if (structuredData) {
    structuredData.innerHTML = JSON.stringify(generateStructuredData(keywords))
  }
}

export const exportKeywordsForSEO = () => {
  const savedKeywords =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("websiteKeywords") || "[]")
      : []

  const seoData = {
    keywords: savedKeywords.map((k) => k.keyword),
    metaKeywords: generateMetaKeywords(),
    structuredData: generateStructuredData(),
    recommendations: generateContentSuggestions(
      savedKeywords.map((k) => k.keyword)
    ),
  }

  return seoData
}
