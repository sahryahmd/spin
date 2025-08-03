/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://spincityagora.my.id",
  generateRobotsTxt: true,
  exclude: ["/admin", "/api"],
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.8,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/admin", "/api"] },
    ],
  },
}
