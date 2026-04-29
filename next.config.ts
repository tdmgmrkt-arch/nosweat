import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  trailingSlash: true,
  turbopack: {
    root: path.resolve(__dirname),
  },

  async headers() {
    // CSP starter — permissive enough not to break the live site, tight enough to
    // pass basic security audits. Add allowlist entries when new third-party scripts
    // are introduced (GA4, GTM, Meta Pixel, chat widget, etc.).
    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://*.vercel-insights.com https://va.vercel-scripts.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com data:",
      "img-src 'self' data: blob: https:",
      "connect-src 'self' https://www.google-analytics.com https://*.vercel-insights.com https://*.vercel-scripts.com",
      "frame-src 'self' https://www.google.com",
      "frame-ancestors 'self'",
      "base-uri 'self'",
      "form-action 'self' https://*.gohighlevel.com https://*.leadconnectorhq.com",
    ].join("; ");

    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
          { key: "Content-Security-Policy", value: csp },
        ],
      },
    ];
  },

  async redirects() {
    return [
      // ── Legacy root-level blog posts → /blog/[slug]/ ──
      {
        source: "/how-to-buy-the-right-solar-panels/",
        destination: "/blog/how-to-buy-the-right-solar-panels/",
        permanent: true,
      },
      {
        source: "/signs-that-your-ac-needs-repair/",
        destination: "/blog/signs-that-your-ac-needs-repair/",
        permanent: true,
      },
      {
        source: "/hvac-maintenance-for-optimal-performance/",
        destination: "/blog/hvac-maintenance-for-optimal-performance/",
        permanent: true,
      },
      {
        source: "/how-to-choose-the-right-ac-repair-company/",
        destination: "/blog/how-to-choose-the-right-ac-repair-company/",
        permanent: true,
      },

      // ── Legacy WordPress template route ──
      {
        source: "/blog/blog-single/",
        destination: "/blog/",
        permanent: true,
      },

      // ── Legacy solar footer page ──
      {
        source: "/home-solar/footer/",
        destination: "/",
        permanent: true,
      },

      // ── Duplicate privacy/terms pages → canonical privacy-policy ──
      {
        source: "/no-sweat-heat-and-air-terms-conditions-privacy-policy/",
        destination: "/privacy-policy/",
        permanent: true,
      },
      {
        source: "/its-no-sweat-heating-and-air-privacy-policy-terms-and-conditions/",
        destination: "/privacy-policy/",
        permanent: true,
      },

      // ── Verbose project slugs → cleaner slugs ──
      {
        source: "/projects/massry-center-restaurant-heating-panel-gallery/",
        destination: "/projects/massry-center-heating-panel/",
        permanent: true,
      },
      {
        source: "/projects/sensor-technologies-ltd-solar-cooling-system/",
        destination: "/projects/sensor-technologies-solar-cooling/",
        permanent: true,
      },
      {
        source: "/projects/hubo-group-solar-panel-maintenance/",
        destination: "/projects/hubo-group-solar-maintenance/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
