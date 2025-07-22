/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
    unoptimized: true,
  },
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/(.*)",
        has: [{ type: "host", value: "www.spincityagora.my.id" }],
        destination: "https://spincityagora.my.id/:path*",
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
