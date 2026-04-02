/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://itsnosweat.net",
  generateRobotsTxt: true,
  trailingSlash: true,
  outDir: "./public",
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};

module.exports = config;
