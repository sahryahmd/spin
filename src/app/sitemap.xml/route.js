export async function GET() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>https://www.spincityagora.my.id/</loc>\n    <lastmod>2024-06-07</lastmod>\n    <priority>1.0</priority>\n  </url>\n</urlset>`

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  })
}
