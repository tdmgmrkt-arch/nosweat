const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// Map a route to the most likely page file under src/app/.
const routeToFile = (route) => {
  const trimmed = route === "/" ? "" : route.replace(/\/$/, "");
  return [
    `src/app${trimmed}/page.tsx`,
    `src/app${trimmed}/page.ts`,
  ];
};

const lastmodCache = new Map();
const getGitLastmod = (route) => {
  if (lastmodCache.has(route)) return lastmodCache.get(route);
  let date = new Date().toISOString();
  for (const candidate of routeToFile(route)) {
    const abs = path.join(process.cwd(), candidate);
    if (!fs.existsSync(abs)) continue;
    try {
      const out = execSync(`git log -1 --format=%cI -- "${candidate}"`, { stdio: ["ignore", "pipe", "ignore"] })
        .toString()
        .trim();
      if (out) date = out;
    } catch {
      // fall through to default
    }
    break;
  }
  lastmodCache.set(route, date);
  return date;
};

/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://www.itsnosweat.net",
  generateRobotsTxt: true,
  trailingSlash: true,
  outDir: "./public",
  exclude: ["/projects", "/projects/**", "/privacy-policy"],
  // Strip changefreq/priority — Google ignores both and their presence flags
  // auto-generated padding. Use real per-route lastmod from git history.
  transform: async (_cfg, route) => ({
    loc: route,
    lastmod: getGitLastmod(route),
  }),
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/", disallow: ["/projects/"] },
      // Explicit AI crawler allow-list — removes ambiguity for conservative
      // crawler implementations and signals active AI-search intent.
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
    ],
  },
};

module.exports = config;
