# Action Plan — itsnosweat.net

**Health Score:** 68/100 → target 85+ in 30 days with the items below.
**Stack:** Next.js App Router on Vercel. Most fixes are 1-file changes with sitewide reach.

Each item has: **Effort** (S = ≤1hr, M = 1–4hr, L = 4hr+) and **Impact** (signal strength).

---

## Critical (fix this week)

### 1. Strip `aggregateRating` from HVACBusiness schema sitewide
**Effort:** S · **Impact:** High · **Owner:** web-developer
Violates the explicit project rule. The global schema component injects it on every page, including the second HVACBusiness block on `/service-areas/moreno-valley/`. Individual `Review` array items can stay. One file in `components/schema/*` or `lib/schema/*` — find and delete the `aggregateRating` field, deploy.

### 2. Add canonical tags to all 48 routes
**Effort:** S · **Impact:** Critical
Use Next.js App Router `generateMetadata` `alternates: { canonical }`. Pattern:
```ts
export async function generateMetadata({ params }) {
  return {
    alternates: { canonical: `https://www.itsnosweat.net/${params.slug}/` }
  }
}
```
Apply to root layout for static routes; per-route generateMetadata for dynamic. Add `og:url` matching canonical in same pass.

### 3. Resolve `/projects/` page
**Effort:** S · **Impact:** High · **Owner:** chief-of-staff decision first
NY solar jobs on a Moreno Valley HVAC domain undermine local entity coherence. Three options:
- (a) **Replace** with real Inland Empire HVAC project gallery (preferred — turns the page into a local trust asset)
- (b) **410 Gone** until (a) is ready
- (c) Leave as `noindex` (current — wastes crawl budget, doesn't fix the entity confusion if anyone visits)

### 4. Fix or redirect `/service-areas/corona/` (404)
**Effort:** S · **Impact:** Medium-High
A city link resolving to a 404 is a trust + crawl penalty. Either build the page (Corona is a legitimate IE service-area) or 301 to `/service-areas/`.

### 5. Decide on solar — build it or remove it
**Effort:** L (build) or S (remove) · **Impact:** Critical to entity coherence
- If solar is real: build `/service/solar/` (HVAC SAB pattern — 900+ words, FAQ, schema), add to nav + footer + sitemap, retarget the solar blog to a local-intent query like "solar installation Moreno Valley CA."
- If solar is aspirational: remove the solar blog post and any solar references in copy.

---

## High (fix within 1 week)

### 6. Add security headers in `next.config.js`
**Effort:** S · **Impact:** Medium-High
```js
async headers() {
  return [{ source: '/(.*)', headers: [
    { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
    { key: 'X-Content-Type-Options', value: 'nosniff' },
    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
    { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
    { key: 'Content-Security-Policy', value: "default-src 'self'; ..." }, // tune for GA4/GTM
  ]}]
}
```

### 7. Fix contact-page schema
**Effort:** S · **Impact:** Medium-High
Add `streetAddress: "27950 Kalmia Ave"` and `postalCode: "92555"` to the contact page's `mainEntity` PostalAddress. Switch `telephone` to E.164 `+19513313310` to match the main HVACBusiness schema.

### 8. Add WebSite schema to homepage
**Effort:** S · **Impact:** Medium
Unlocks Sitelinks Search Box. Standard JSON-LD with `potentialAction: SearchAction`.

### 9. Repair Organization `@id`
**Effort:** S · **Impact:** Medium
Blog `publisher` references `#organization` but the Organization block never declares that `@id`. One-line fix.

### 10. Add FAQPage schema to existing FAQ blocks
**Effort:** S · **Impact:** Medium-High
City pages (Moreno Valley, Riverside, Temecula) and the special-offer page already have written FAQ content. Mark up with FAQPage JSON-LD. Likely a shared `<FaqSection>` component — schema can be auto-emitted from the same data.

### 11. Surface license # in footer
**Effort:** S · **Impact:** Medium
`companyInfo.license` (1058772) is in code, just not rendered. Add to footer NAP block: `Lic# 1058772`.

### 12. Add Google Maps embed on contact page
**Effort:** S · **Impact:** Medium
Single iframe pointing to the Moreno Valley HQ — strongest GBP-association signal available.

### 13. Expand each service page to 900+ words
**Effort:** M (per page × 7 pages) · **Owner:** seo-writer
Add per service: "What to Expect" 3-4 step process section + 5-question FAQ with FAQPage schema. AC Repair page is the priority (currently 586 words, missing the 800 floor by -214).

### 14. Add above-fold CTA to AC Repair + blog mobile
**Effort:** S · **Impact:** High for conversion
- AC Repair mobile: inject a sticky in-hero phone + "Free Estimate" CTA
- Blog mobile: full-width inline CTA block (red button + phone) right after the intro paragraph — the desktop sidebar widget vanishes on mobile

### 15. Sitemap cleanup
**Effort:** S · **Impact:** Low-Medium
- Strip `<changefreq>` and `<priority>` from every entry (Google ignores them; their presence signals padding).
- Replace uniform build-timestamp `lastmod` with real per-route `lastmod` from `git log --format="%ci" -- <file>`.
- Remove `/privacy-policy/` from the sitemap.

---

## Medium (fix within 1 month)

### 16. Build top-priority city × service combo pages
**Effort:** L · **Owner:** seo-writer
Start with 5 priority cities (Moreno Valley, Riverside, Temecula, Murrieta, Menifee) × 2 services (AC Repair, AC Installation) = 10 pages. Pattern: `/service-areas/<city>/<service>/`. Each must be substantively differentiated, not a token-replaced template.

### 17. Expand blog posts to meet 1,500-word floor
**Effort:** M (per post × 4 posts)
HVAC Maintenance is currently 689 words (-811 from floor). Signs Your AC Needs Repair has 5 signs vs. competitors' 8–10 (-300 to -1,300 words to match top-10 SERP depth).

### 18. Convert blog headings to interrogative form
**Effort:** S
"Spring Checklist: Preparing Your AC" → "How Should You Prepare Your AC for Spring?" One-pass find-and-replace across `/blog/*`. City pages already follow this pattern.

### 19. Move Justin's credentials into rendered body copy
**Effort:** S
Currently only in JSON-LD. Add visible text on `/about-us/`: "California HVAC License #1058772 · NATE-Certified · BBB Accredited A+." LLMs and QRG raters read rendered text, not schema.

### 20. Expand `llms.txt`
**Effort:** S
Add: founder bio summary (Justin, NATE, 25+ years), warranty + financing details, top 3 testimonial quotes, 40–60 word direct-answer openers per service.

### 21. Add explicit AI crawler allow rules to robots.txt
**Effort:** S
```
User-agent: GPTBot
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Google-Extended
Allow: /
```
Removes ambiguity for conservative crawler implementations.

### 22. Add BreadcrumbList to `/about-us/`
**Effort:** S

### 23. Upgrade Article schema images to ImageObject + fix dateModified
**Effort:** S
Article `image` should be `ImageObject` with `url`, `width`, `height`. `dateModified` should reflect actual last-edit, not equal `datePublished`.

### 24. Add Person schema to `/about-us/`
**Effort:** S
Justin Jaszewski with `hasCredential` (NATE + license #1058772), `jobTitle: "Co-Founder"`. Strong E-E-A-T anchor.

### 25. Local trust signals on city pages
**Effort:** M
Add per-city: 1 local landmark or neighborhood mention, 1 climate/local-heat data point, embedded Google Map, "recent project in [city]" callout.

### 26. Founded year + financing badge sitewide
**Effort:** S
Replace "over 25 years" with "Founded 20XX" (entity anchor). Add a footer badge: "Financing Available · 0% APR" if accurate.

---

## Low (backlog)

### 27. Implement IndexNow
**Effort:** M
Drop a key file in `/public/`, ping `api.indexnow.org` on Vercel deploy. Faster Bing/Yandex indexing.

### 28. Performance: bypass `/_next/image/` proxy for hero LCP
**Effort:** M
Serve hero as a direct static AVIF at the Vercel edge. Cuts ~300–500 ms off LCP under 3G throttle. Lab score 90 → ~95. Real-world CrUX likely already passes.

### 29. Dynamic-import below-fold JS chunks
**Effort:** M
140 KB unused JS on homepage. `dynamic()` import for reviews carousel, modals, map widget.

### 30. Citation building (when backlinks data available)
**Effort:** L · ongoing
Verify/claim: GBP, CSLB, Yelp, BBB, Angi, HomeAdvisor, Nextdoor, Houzz, Moreno Valley Chamber, IE regional chamber. Owner: local-seo specialist.

### 31. Deploy `seo-backlinks` skill scripts
**Effort:** M
Skill manifest references scripts that don't exist on disk. Run the install for Common Crawl + Moz/Bing API support so the next audit produces real backlink metrics.

---

## Suggested 30-day rollout

**Week 1 (Critical + bundled schema fixes — single PR):**
Items 1, 2, 3 (decide), 4, 6, 7, 8, 9, 10, 11, 12, 15, 21, 22, 23, 24

**Week 2 (Solar decision + content):**
Item 5 (solar build or remove), 13 (start with AC Repair page), 14, 18, 19, 20, 26

**Weeks 3–4 (content depth):**
Items 13 (remaining service pages), 17 (blog expansion), 16 (10 city × service combo pages), 25

**Backlog:** 27, 28, 29, 30, 31

---

## Estimated score lift

Hitting Weeks 1–2 alone: 68 → ~80.
Adding Weeks 3–4 (content depth + city × service combos): ~85–88.
Performance ceiling caps composite at ~92 unless hero LCP work in #28 is done.
