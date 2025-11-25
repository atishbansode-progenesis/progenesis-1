/** @type {import('next-sitemap').IConfig} */

export default {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://progenesisivf.com",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/_next/', '/api/']
      }
    ]
  },
  exclude: ['**/*'],  // Exclude all, custom script generates sitemaps
};