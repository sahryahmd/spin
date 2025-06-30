import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata = {
  title: "SPIN CITY AGORA | Strike Some Fun!",
  description:
    "Tempat hiburan terbaik di Jakarta: Bowling, Billiard, Bar & Lounge. Kunjungi SPIN CITY AGORA sekarang!",
  openGraph: {
    title: "SPIN CITY AGORA - Bowling, Billiard, Bar & Lounge Jakarta",
    description:
      "Tempat hiburan terbaik di Jakarta: Bowling, Billiard, Bar & Lounge.",
    url: "https://www.spincityagora.my.id/",
    siteName: "SPIN CITY AGORA",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "SPIN CITY AGORA Logo",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SPIN CITY AGORA - Bowling, Billiard, Bar & Lounge Jakarta",
    description:
      "Tempat hiburan terbaik di Jakarta: Bowling, Billiard, Bar & Lounge.",
    images: ["/logo.png"],
    site: "@spincityagora",
  },
  metadataBase: new URL("https://www.spincityagora.my.id"),
  alternates: {
    canonical: "https://www.spincityagora.my.id/",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="bowling, billiard, bar, lounge, hiburan, Jakarta, Spin City, Agora, tempat nongkrong, event, keluarga, olahraga, minuman, makanan, pusat hiburan, Jakarta Pusat, DKI Jakarta"
        />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EntertainmentBusiness",
              name: "SPIN CITY AGORA",
              description:
                "Tempat hiburan terbaik di Jakarta: Bowling, Billiard, Bar & Lounge.",
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
                  dayOfWeek: [
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                  ],
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
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  )
}
