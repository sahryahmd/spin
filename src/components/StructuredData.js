"use client"
import { useEffect } from "react"

const StructuredData = () => {
  useEffect(() => {
    // Add structured data for SPIN CITY AGORA MALL
    const mallStructuredData = {
      "@context": "https://schema.org",
      "@type": "EntertainmentBusiness",
      name: "SPIN CITY AGORA MALL",
      alternateName: "Spin City Agora Mall",
      description:
        "SPIN CITY AGORA MALL - Pusat hiburan terbaik di Jakarta Pusat dengan fasilitas bowling, billiard, bar & lounge modern.",
      url: "https://www.spincityagora.my.id",
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
      geo: {
        "@type": "GeoCoordinates",
        latitude: -6.2088,
        longitude: 106.8456,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
          opens: "10:00",
          closes: "22:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Friday", "Saturday"],
          opens: "10:00",
          closes: "02:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Sunday"],
          opens: "10:00",
          closes: "22:00",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "SPIN CITY AGORA MALL Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Bowling Jakarta Pusat",
              description:
                "12 jalur bowling modern dengan teknologi terbaru di Jakarta Pusat",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Billiard Jakarta",
              description:
                "8 meja billiard premium dengan kualitas terbaik di Jakarta",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Bar & Lounge Jakarta",
              description:
                "Bar modern dengan menu minuman lengkap dan suasana nyaman",
            },
          },
        ],
      },
      sameAs: ["https://instagram.com/spincitybowling"],
      image: "https://www.spincityagora.my.id/logo.png",
      priceRange: "$$",
      currenciesAccepted: "IDR",
    }

    // Add structured data for Bowling Service
    const bowlingStructuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Bowling Jakarta Pusat",
      description:
        "Tempat bowling terbaik di Jakarta Pusat dengan 12 jalur modern dan teknologi terbaru",
      provider: {
        "@type": "EntertainmentBusiness",
        name: "SPIN CITY AGORA MALL",
      },
      areaServed: {
        "@type": "City",
        name: "Jakarta Pusat",
      },
      serviceType: "Bowling",
      offers: {
        "@type": "Offer",
        price: "25000",
        priceCurrency: "IDR",
        description: "Harga bowling weekday di Jakarta Pusat",
      },
    }

    // Add structured data for Billiard Service
    const billiardStructuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Billiard Jakarta",
      description:
        "Meja billiard premium dengan 8 meja berkualitas tinggi di Jakarta",
      provider: {
        "@type": "EntertainmentBusiness",
        name: "SPIN CITY AGORA MALL",
      },
      areaServed: {
        "@type": "City",
        name: "Jakarta Pusat",
      },
      serviceType: "Billiard",
      offers: {
        "@type": "Offer",
        price: "30000",
        priceCurrency: "IDR",
        description: "Harga billiard per jam di Jakarta",
      },
    }

    // Add FAQ structured data
    const faqStructuredData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Di mana lokasi SPIN CITY AGORA MALL?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SPIN CITY AGORA MALL berlokasi di Jl. M.H. Thamrin No.10, Kb. Melati, Kecamatan Tanah Abang, Jakarta Pusat, DKI Jakarta 10230.",
          },
        },
        {
          "@type": "Question",
          name: "Berapa harga bowling di Jakarta Pusat?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Harga bowling di SPIN CITY AGORA MALL Jakarta Pusat: Weekday Rp 25.000/jalur, Weekend Rp 30.000/jalur, Sepatu Bowling Rp 5.000/pasang.",
          },
        },
        {
          "@type": "Question",
          name: "Jam operasional SPIN CITY AGORA MALL?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Senin - Kamis: 10:00 - 22:00, Jumat - Sabtu: 10:00 - 02:00, Minggu: 10:00 - 22:00.",
          },
        },
        {
          "@type": "Question",
          name: "Apakah ada fasilitas billiard di Jakarta Pusat?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ya, SPIN CITY AGORA MALL menyediakan 8 meja billiard premium dengan kualitas terbaik di Jakarta Pusat.",
          },
        },
      ],
    }

    // Add all structured data to the page
    const addStructuredData = (data, id) => {
      const script = document.createElement("script")
      script.type = "application/ld+json"
      script.id = id
      script.textContent = JSON.stringify(data)
      document.head.appendChild(script)
    }

    addStructuredData(mallStructuredData, "mall-structured-data")
    addStructuredData(bowlingStructuredData, "bowling-structured-data")
    addStructuredData(billiardStructuredData, "billiard-structured-data")
    addStructuredData(faqStructuredData, "faq-structured-data")

    // Cleanup function
    return () => {
      const scripts = [
        "mall-structured-data",
        "bowling-structured-data",
        "billiard-structured-data",
        "faq-structured-data",
      ]
      scripts.forEach((id) => {
        const script = document.getElementById(id)
        if (script) {
          script.remove()
        }
      })
    }
  }, [])

  return null
}

export default StructuredData
