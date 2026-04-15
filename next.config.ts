import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  trailingSlash: true,
  turbopack: {
    root: path.resolve(__dirname),
  },

  async redirects() {
    return [
      // ── Canonical host: www → non-www (301) ──
      // Fixes "orphaned sitemap pages" false positive in Semrush
      // where www.itsnosweat.net and itsnosweat.net are seen as two hosts.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.itsnosweat.net" }],
        destination: "https://itsnosweat.net/:path*",
        permanent: true,
      },

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
