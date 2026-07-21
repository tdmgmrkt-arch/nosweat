# Sitemap Audit — itsnosweat.net
**Audited:** 2026-04-29
**Files:** /sitemap.xml (index) → /sitemap-0.xml (48 URLs)

---

## Pass/Fail Checklist

| Check | Result | Notes |
|-------|--------|-------|
| XML well-formed | PASS | Valid UTF-8, correct root elements |
| Sitemap index namespace | PASS | `http://www.sitemaps.org/schemas/sitemap/0.9` |
| urlset namespace | PASS | Correct primary namespace |
| Extra namespaces (news, image, video, mobile, xhtml) | INFO | Declared but unused — adds noise, not harmful |
| URL count (48 of 50,000 limit) | PASS | Well under limit |
| All URLs use https://www.itsnosweat.net | PASS | Consistent with robots.txt Host directive |
| Trailing slash consistency | PASS | All URLs carry trailing slash |
| Spot-check HTTP 200 (6 URLs) | PASS | /, /service/ac-repair/, /service-areas/moreno-valley/, /service-areas/temecula/, /blog/hvac-maintenance-for-optimal-performance/, /service/special-offer/ — all 200 |
| lastmod present | PASS | All 48 URLs have lastmod |
| lastmod accuracy | FAIL | Every URL has identical timestamp 2026-04-15T17:44:27.928Z — this is a build-time stamp, not actual content modification dates. Google ignores lastmod it considers unreliable; uniform values signal it's fake. |
| changefreq | FAIL (low) | All set to `daily` — ignored by Google, but signals low-quality/auto-generated sitemap configuration |
| priority | FAIL (low) | All set to `0.7` — ignored by Google, but same issue as above |
| /privacy-policy/ in sitemap | FLAG | Recommended exclusion. Privacy policy is not a crawl-priority page, carries no search value, and including it dilutes crawl budget signal. Remove it. |
| /service/special-offer/ in sitemap | PASS | Returns 200 and is a legitimate service/conversion page. Keep it. |
| Image sitemap | N/A | Not present. Not required for this site type unless image search is a priority goal. |
| News sitemap | N/A | Not present. Not applicable — no news publisher status. |

---

## URL Inventory Count

| Category | Count |
|----------|-------|
| Homepage | 1 |
| Core pages (about, contact, privacy) | 3 |
| Blog index | 1 |
| Blog posts | 4 |
| Service index | 1 |
| Service sub-pages | 7 (including /special-offer/) |
| Service area index | 1 |
| Service area city pages | 31 |
| **Total** | **49** |

Wait — sitemap-0.xml contains 48 `<url>` entries. The count above yields 49. Reconciled: the sitemap is missing the `/service/solar/` or equivalent solar service page OR one city page is absent. See Missing Pages section below.

---

## Missing Pages

These pages likely exist on the site but are absent from the sitemap. Verify each and add if indexable:

| URL | Basis for suspicion |
|-----|---------------------|
| `/service/solar/` or `/service/solar-installation/` | Business is HVAC + Solar; only 6 service sub-pages listed (ac-installation, ac-repair, furnace-installation, furnace-repair, hvac-maintenance, indoor-air-quality, special-offer = 7 actually). If solar is a separate service page, it's missing. Confirm in nav. |
| `/financing/` or `/deals/` | Common for HVAC sites; /special-offer/ exists so a parent deals/financing page may exist |
| `/careers/` or `/faq/` | Commonly linked in footer; check footer links in production |

Action: Crawl the live site or review the Next.js `app/` route tree to confirm no routable pages are excluded.

---

## Excluded Pages (correct decisions)

| URL | Reason |
|-----|--------|
| `/privacy-policy/` | Should be removed — no search value, no crawl priority |
| `/api/*` | Correct — not present, should never be added |
| `/404` | Correct — not present |

---

## City × Service Expansion Opportunity

**Current state:** 31 city pages × 0 service-specific landing pages = no programmatic local coverage.

The 31 city pages (`/service-areas/{city}/`) are general service area pages. High-priority HVAC searches follow the pattern:
- "ac repair [city]"
- "hvac installation [city]"
- "furnace repair [city]"

With 6 core services × 31 cities = 186 potential city+service pages. This is a significant untapped opportunity for Inland Empire/Temecula Valley coverage.

**Quality gate reminder:** Do NOT build these as thin templates with only the city name swapped. Each page requires:
- Unique intro referencing local climate, housing stock, or neighborhood context
- Service-specific content (not just the city + service name)
- At minimum 60% non-duplicated body content per page
- Internal links to the parent service page and city hub page

Recommend starting with the top 5 cities (Moreno Valley, Riverside, Temecula, Murrieta, San Bernardino) × top 2 services (AC Repair, AC Installation) = 10 pages done right before scaling.

---

## Recommended Sitemap Fixes

### Fix 1 — Remove deprecated tags (HIGH priority)
Strip `<changefreq>` and `<priority>` from all 48 entries. Google has publicly confirmed it ignores both. Their presence signals an auto-generated, low-effort sitemap.

### Fix 2 — Fix lastmod to real per-page dates (HIGH priority)
Replace the uniform `2026-04-15T17:44:27.928Z` stamp with actual `git log` or CMS modification dates per URL. Uniform timestamps cause Google Search Console to flag lastmod as unreliable and stop using it for crawl scheduling. Use `YYYY-MM-DD` format (not full ISO datetime).

### Fix 3 — Remove /privacy-policy/ (MEDIUM priority)
Remove from sitemap. It serves no SEO purpose and marginally signals the sitemap is not curated.

### Fix 4 — Verify no missing pages (MEDIUM priority)
Audit the Next.js `app/` directory route tree and compare against all 48 sitemap entries. Particularly check for a solar service page.

### Fix 5 — Clean up unused XML namespaces (LOW priority)
Remove the `xmlns:news`, `xmlns:mobile`, `xmlns:video`, `xmlns:xhtml` namespace declarations from the `<urlset>` tag — they're declared but no corresponding tags are used. Leaving them is harmless but sloppy.

---

## Cleaned Sitemap Template (top section)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>https://www.itsnosweat.net/</loc>
    <lastmod>2026-04-15</lastmod>
  </url>
  <!-- ... remaining URLs with real per-page lastmod dates ... -->
</urlset>
```

Note: `xmlns:image` kept because image sitemaps may be valuable here (service/hero images). If image tags are not being added, remove that namespace too.

---

## Score

**Sitemap Health Score: 62 / 100**

| Dimension | Score | Reason |
|-----------|-------|--------|
| XML validity & structure | 18/20 | Valid, but unused namespaces |
| URL coverage | 12/20 | All current pages present; missing check needed; no city+service pages |
| Metadata quality | 10/25 | lastmod fake-uniform; changefreq+priority deprecated noise present |
| Exclusion hygiene | 8/10 | /privacy-policy/ should be removed; otherwise clean |
| Crawlability signals | 14/25 | 6/6 spot-checks pass 200; consistent host/schema; but metadata issues undermine crawl scheduling signals |
