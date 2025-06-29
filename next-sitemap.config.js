/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://spincityagora.my.id",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
}
