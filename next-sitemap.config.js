/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://itsnosweat.net",
  generateRobotsTxt: true,
  trailingSlash: true,
  outDir: "./public",
  exclude: ["/projects", "/projects/**"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/projects/"],
      },
    ],
  },
};

module.exports = config;
