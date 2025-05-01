/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://yourdomain.com", // Replace with your domain
  generateRobotsTxt: true, // Generates robots.txt
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/private"], // Add private routes
      },
    ],
    additionalSitemaps: [
      "https://yourdomain.com/server-sitemap.xml", // For dynamic routes if needed
    ],
  },
  exclude: ["/admin*", "/secret*"], // Exclude private pages
  // Optional: For dynamic routes (like blog posts)
  transform: async (config: unknown, path: unknown) => {
    return {
      loc: path, // => https://yourdomain.com/path
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};
