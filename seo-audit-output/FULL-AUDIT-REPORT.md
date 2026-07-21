# Full SEO Audit — itsnosweat.net

**Site:** It's No Sweat Heat & Air — HVAC + Solar service-area business, Moreno Valley CA
**Stack:** Next.js (App Router) on Vercel
**Audit date:** 2026-04-29
**Pages crawled:** 48 (full sitemap)
**Agents run:** 10 (technical, content, schema, sitemap, performance, visual, geo, local, sxo, backlinks)

---

## SEO Health Score: **68 / 100**

Weighted composite (per skill scoring):

| Category | Weight | Score | Contribution |
|---|---:|---:|---:|
| Technical SEO | 22% | 71 | 15.62 |
| Content Quality | 23% | 61 | 14.03 |
| On-Page SEO (SXO + Visual blend) | 20% | 66 | 13.10 |
| Schema / Structured Data | 10% | 62 | 6.20 |
| Performance (CWV — mobile lab) | 10% | 90 | 9.00 |
| AI Search Readiness (GEO) | 10% | 67 | 6.70 |
| Images | 5% | 75 | 3.75 |
| **Composite** | 100% | | **68.40** |

**Backlinks:** insufficient data — `seo-backlinks` skill scripts not deployed. Informational only, not scored.
**Local SEO** scored 68 separately — folded into the SXO + content + schema scores above; surfaced fully in the Local section below.

---

## Executive Summary

### Business type detected
Local Service / SAB hybrid. Physical HQ at 27950 Kalmia Ave, Moreno Valley CA 92555. Service area covers 31 Inland Empire cities. Dual-vertical: HVAC (well-developed) + Solar (phantom — no service page, only a blog post and an out-of-region projects page).

### Top 5 Critical Issues
1. **`aggregateRating` in HVACBusiness schema sitewide** — violates explicit project rule. Injected by the global schema component on every page, including the second HVACBusiness block on the Moreno Valley city page. Sitewide one-file fix.
2. **`/projects/` page leaks New York solar jobs onto a Moreno Valley HVAC domain** — directly undermines local relevance and entity coherence. Page is `noindex, nofollow` and Disallowed in robots, but it's still publicly reachable and crawled.
3. **Corona city page 404s** — there's a link to `/service-areas/corona/` somewhere in the site that resolves to a dead page. Crawl waste + trust signal hit.
4. **Canonical tags entirely missing across all 48 routes** — no `<link rel="canonical">` and no `og:url` on any page. With `trailingSlash: true` enabled, both with-slash and no-slash variants are reachable (the no-slash is 308 redirected, but Google still benefits from explicit canonicals).
5. **Solar is a phantom offering** — only touchpoint is `/blog/how-to-buy-the-right-solar-panels/` which targets an unwinnable national keyword. No `/service/solar/` page exists. Either build the service or remove the solar references entirely.

### Top 5 Quick Wins
1. **Strip `aggregateRating` from the global HVACBusiness schema component** — single-file edit, sitewide impact, restores compliance with project rule.
2. **Add canonical tags via `generateMetadata` `alternates: { canonical }`** — one pattern propagated through layouts/route metadata, fixes all 48 URLs.
3. **Add security headers in `next.config.js`** — CSP, X-Frame-Options, Referrer-Policy, X-Content-Type-Options, Permissions-Policy. ~10 lines, immediate technical-score lift.
4. **Surface license number in the footer** — `companyInfo.license` is already in code, just not rendered. Direct E-E-A-T signal both for QRG raters and California homeowner trust.
5. **Add FAQPage schema to existing FAQ blocks on city pages** — the FAQ content is already written on Moreno Valley, Riverside, Temecula et al. Schema is a 30-minute addition with measurable rich-snippet upside.

---

## Technical SEO — 71/100

**Strengths**
- robots.txt correct (`Allow: /` with `/projects/` disallowed, declares Host + Sitemap)
- HSTS enabled (`max-age=63072000`)
- 308 trailing-slash redirect working in both directions
- Apex → www 307, http → https 308 — clean redirect ladder, single hop
- Vercel edge cache hits, X-Nextjs-Prerender confirms SSR/SSG
- Mobile viewport meta on all pages

**Critical**
- **No canonical tags on any page** — verified across homepage, service, city, and blog samples. Highest-impact technical fix.
- **No security headers beyond HSTS** — CSP, X-Frame-Options, Referrer-Policy, Permissions-Policy, X-Content-Type-Options all absent.

**Medium**
- `/projects/` returns 200 with 139 KB HTML and `noindex, nofollow` meta. Cleaner: 410 Gone or migrate to a real, location-relevant projects gallery.
- IndexNow not implemented — Bing/Yandex indexing speed-up untapped.

### Spot-checked URLs

| URL | Status | Canonical | Robots |
|---|---|---|---|
| `/` | 200 | **missing** | n/a |
| `/service/ac-repair/` | 200 | **missing** | index, follow |
| `/service-areas/moreno-valley/` | 200 | **missing** | index, follow |
| `/blog/hvac-maintenance-for-optimal-performance/` | 200 | **missing** | index, follow |

---

## Content Quality — 61/100

**E-E-A-T verdict: mixed.** Trust + Authoritativeness are strong (license #, NATE, BBB A+, named co-founder Justin Jaszewski, real Google reviews). Experience is weak (no first-person narrative, no job photos, no case studies). Expertise is technically accurate but underutilized in body copy.

### Word counts vs. minimums

| Page | Words | Floor | Verdict |
|---|---:|---:|---|
| Homepage | ~679 | 500 | Pass (barely) |
| `/service/ac-repair/` | ~586 | 800 | **FAIL (-214)** |
| `/service-areas/moreno-valley/` | ~2,179 | 500 | Pass |
| `/service-areas/riverside/` | ~2,306 | 500 | Pass |
| `/about-us/` | ~848 | — | Adequate |
| `/blog/hvac-maintenance-for-optimal-performance/` | ~689 | 1,500 | **FAIL (-811)** |
| `/service-areas/corona/` | — | — | **404** |

Reading level sits at grade 8–10 across the site — appropriate for a homeowner audience.

**City page differentiation: confirmed strong.** Moreno Valley uses a heat-failure urgency framing; Riverside leads with housing-stock eras. Distinct intros, FAQ sets, and CTA copy. NOT doorway pages.

### Top issues
1. Blog posts are critically thin (689 words vs. 1,500 floor).
2. Service pages thin (AC Repair at 586 vs. 800 floor) and lack process / FAQ depth.
3. Solar blog post targets a query the site cannot win against Solar.com / SolarReviews.

### Top quick wins
1. Expand each service page to 900+ words with a "What to Expect" process section + 5-question FAQ.
2. Move license # and NATE cert into rendered body copy (currently only in schema).
3. Fix or 301-redirect the Corona 404.

---

## On-Page SEO + Search Experience — 66/100 (blend)

**Page-type mismatches** (SXO):

| Page | Severity | Issue |
|---|---|---|
| `/blog/how-to-buy-the-right-solar-panels/` | **Critical** | HVAC blog cannot beat Solar.com / SolarReviews / EcoWatch on a national query. Wrong keyword. |
| `/service/ac-repair/` | High | No geographic anchor. Google rewards `[city] ac repair` URL patterns. |
| `/blog/signs-that-your-ac-needs-repair/` | Medium | 5 signs at ~1,200 words vs. competitors' 8–10 signs at 1,500–2,500 words. Featured snippet unreachable at current depth. |
| `/contact-us/` | Medium | 12+ form fields kill the emergency-homeowner persona. |
| `/service-areas/moreno-valley/` | Aligned | Correct type, ~3,500 words, solid. Depth gap vs. competitors with per-service city sub-pages. |

**Above-the-fold mobile audit (visual):** Homepage and Moreno Valley pass cleanly. **AC Repair mobile fails** — no CTA above the fold; the services accordion consumes the viewport. **Blog mobile fails** — sidebar conversion widget vanishes, leaving zero conversion path.

**Brand consistency: premium.** Blue/red palette, mascot, typography hierarchy all execute at a high level. No AI-slop.

**Weakest persona served:** solar-curious homeowner (53/100). Only solar touchpoint is an unwinnable blog post authored by an HVAC tech with no visible solar credentials.

---

## Schema / Structured Data — 62/100

### Detected
| Page | Types |
|---|---|
| Homepage | HVACBusiness, Organization |
| `/service/ac-repair/` | HVACBusiness, Organization, Service, BreadcrumbList |
| `/service-areas/moreno-valley/` | HVACBusiness (×2), Organization, FAQPage, BreadcrumbList |
| Blog post | HVACBusiness, Organization, Article, BreadcrumbList |
| `/about-us/` | HVACBusiness, Organization only |
| `/contact-us/` | HVACBusiness, Organization, ContactPage, BreadcrumbList |

`llms.txt` present and well-formed.

### Errors
- **Critical:** `aggregateRating` injected into HVACBusiness sitewide — violates project rule.
- **High:** Organization block missing `@id` (blog post's `publisher` references `#organization` but the block never declares it — broken knowledge graph link).
- **Medium:** Article `image` is a plain string URL, not an `ImageObject` with width/height. `dateModified === datePublished` (always).
- **Medium:** BreadcrumbList missing on `/about-us/`.
- **Medium:** Contact page HVACBusiness `mainEntity` missing `streetAddress` + `postalCode`. Phone uses display format `(951) 331-3310` instead of E.164 `+19513313310` (the main HVACBusiness schema is correct — these schemas conflict).

### Top missing
1. **WebSite** schema on homepage (blocks Sitelinks Search Box eligibility).
2. **Person** schema on `/about-us/` for Justin Jaszewski with `hasCredential` for NATE + license #1058772.
3. **Organization @id** declaration to repair the publisher reference.

---

## Performance — 90/100 (mobile lab, simulated 3G)

| Page | Lighthouse Mobile | LCP | CLS | TBT | FCP |
|---|---:|---:|---:|---:|---:|
| Homepage | 90 | 3.5 s | 0 | 70 ms | 1.1 s |
| `/service/ac-repair/` | 88 | 3.6 s | 0 | 66 ms | — |

**LCP element:** hero `<img>` served via `/_next/image/` proxy (`homepagehero1.webp` / `ac-repair-new.webp`).

### Blockers preventing 100
1. **LCP at 3.5 s** (target ≤2.5 s) — the Next.js image-optimization proxy adds a round-trip hop under 3G throttle. Hero already has `fetchpriority=high` + preload. Fix path: serve hero as a direct edge-cached static asset bypassing `/_next/image/`, or accept lab limit and target CrUX field data.
2. **140 KB unused JavaScript** across three chunks — dynamic-import any below-fold component (reviews carousel, modal, map widget).
3. **Render-blocking CSS chunk** with 150 ms exposure.

**Practical ceiling on simulated 3G mobile: 95–97.** A perfect 100 with a full-bleed hero is not realistic; the right goal is LCP under 2.5 s in CrUX field data (TTFB is already 17 ms via Vercel edge — real users almost certainly pass).

---

## AI Search Readiness (GEO) — 67/100

| Dimension | Score |
|---|---:|
| Citability | 62 |
| Structural Readability | 72 |
| Multi-Modal Content | 55 |
| Authority & Brand Signals | 63 |
| Technical Accessibility | 78 |

**llms.txt:** present, decent (65/100). 7 sections covering About, Contact, Services, Service Areas, Key Pages, Credentials. Missing: bio details, warranty/financing, testimonial summaries, 40–60 word direct-answer openers.

**AI crawler access:** permissive but not explicit. GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, Google-Extended, CCBot all implicitly allowed; none named.

**Citability strengths:** city-page FAQs are H3-question headed with 100–150 word self-contained answers. DOE 5%-per-year efficiency stat is well-attributed and extractable.

**Citability weaknesses:** blog headings are declarative, not interrogative. Passage lengths run 80–120 words — below the 134–167 word LLM-citation optimum. No definition blocks. Founded year missing ("over 25 years" without a specific year weakens entity confidence).

### Top GEO improvements
1. Surface credentials in rendered body text (license #, NATE) — currently only in schema.
2. Expand blog passages to 134–167 words per section.
3. Convert blog H2/H3 to interrogative form (city pages already do this — extend to blog).

---

## Local SEO — 68/100

**Business type:** Hybrid SAB. Physical address disclosed, service-area positioning leads.

**NAP verdict: PASS** with two schema bugs (contact page missing streetAddress + postalCode; phone format mismatch).

**City pages: STRONG** — confirmed differentiated, not doorway. Gap: zero local landmark / neighborhood mentions; no embedded Google Map on any page; Sunnymead missing geo coordinates in schema.

**Industry-specific gaps:**
- No financing visibility (buried in one FAQ — homeowner trust signal + GBP attribute).
- No emergency / 24-7 framing prominent above fold on conversion pages.
- No Trane/Carrier/Lennox certification badges visible (if held).
- Solar phantom: New York solar projects on a Moreno Valley HVAC domain.

**License #1058772** is in `companyInfo.license` in code but not rendered in footer.

### Top local fixes
1. Remove or replace `/projects/` (NY solar jobs).
2. Fix contact-page schema (full address + E.164 phone).
3. Add Google Maps embed on contact page.
4. Surface license # in footer.
5. Add financing badge sitewide.

---

## Sitemap — 62/100

XML valid, all 6 spot-checked URLs return 200, consistent www + https + trailing slashes, 48 URLs (well under limits).

**Issues:**
1. Every entry has identical `lastmod` of `2026-04-15T17:44:27.928Z` — Google ignores uniform `lastmod`.
2. `changefreq=daily` and `priority=0.7` on all 48 — both tags are ignored by Google and signal auto-generated padding.
3. `/privacy-policy/` shouldn't be in the sitemap.

**Expansion opportunity:** 31 cities × 0 service-specific landing pages = no programmatic local landing pages. Top 5 cities × 2 services (AC Repair, AC Installation) = 10 properly-written pages would be the right first move.

---

## Backlinks — Insufficient Data

`seo-backlinks` skill scripts are not deployed (only `SKILL.md` + `LICENSE.txt` on disk). Common Crawl harmonic centrality and rank cannot be retrieved. No Moz / Bing Webmaster credentials configured.

**Estimate (contextual, not measured):** low-to-medium tier (~20–80 referring domains). Domain has been live for years on legacy WordPress, typical IE local-SAB profile.

**Citation gaps to verify** (priority order):
- **Critical:** Google Business Profile, CSLB License Verification (cslb.ca.gov)
- **High:** Yelp, BBB, Angi, HomeAdvisor, Nextdoor
- **Medium:** Houzz, Moreno Valley Chamber, Riverside County / IE regional chamber

This category is informational and not part of the composite score.

---

## Visual / Mobile

**Above-the-fold pass/fail:**

| Page | Desktop | Mobile |
|---|---|---|
| Homepage | Pass | Pass |
| AC Repair | **Fail** | **Fail** |
| Moreno Valley | Pass | Pass |
| Contact | Pass | Pass |
| Blog | Soft fail | **Fail** |

**Brand: premium.** Blue/red palette deliberate, mascot crisp, typography hierarchy clean.

10 screenshots saved to `seo-audit-output/screenshots/`.

---

## Files

- `seo-audit-output/FULL-AUDIT-REPORT.md` (this file)
- `seo-audit-output/ACTION-PLAN.md` (prioritized fix list)
- `seo-audit-output/schema.md`, `local.md`, `sitemap.md`, `sxo.md` (specialist findings)
- `seo-audit-output/screenshots/*.png` (10 desktop + mobile)
- `seo-audit-output/raw/` (homepage HTML, robots.txt, sitemaps, headers)

Six specialist reports (technical, content, performance, visual, geo, backlinks) returned findings inline in agent transcripts; their content is consolidated above.
