# Local SEO Audit — It's No Sweat Heat & Air
**Domain:** https://www.itsnosweat.net  
**Date:** 2026-04-29  
**Auditor:** Local SEO Specialist (Claude Sonnet 4.6)

---

## Local SEO Score: 68 / 100

| Dimension | Weight | Score | Weighted |
|---|---|---|---|
| GBP Signals | 25% | 55 | 13.75 |
| Reviews & Reputation | 20% | 72 | 14.40 |
| Local On-Page SEO | 20% | 78 | 15.60 |
| NAP Consistency & Citations | 15% | 74 | 11.10 |
| Local Schema Markup | 10% | 75 | 7.50 |
| Local Link & Authority Signals | 10% | 55 | 5.50 |
| **TOTAL** | | | **67.85 → 68** |

---

## Business Type

**SAB (Service-Area Business) with physical address disclosed**  
The site prominently displays a physical address (27950 Kalmia Ave, Moreno Valley, CA 92555) in the footer, contact page, and schema — while leading with service-area language throughout ("serving the Inland Empire," 31 city pages). This is technically a hybrid presentation. For a true SAB like an HVAC contractor, disclosing the physical address is standard and appropriate as it anchors the GBP listing geographically.

---

## Industry Vertical

**Home Services — HVAC (primary) + Residential Solar (secondary)**

The site is clearly HVAC-first. Solar appears only in the `/projects/` section with project data that references "Clifton Park, NY" and "Saratoga Springs, NY" — which are not in the Inland Empire service area. This is a significant content integrity issue (see Actions).

---

## NAP Consistency Audit

| Source | Name | Address | Phone |
|---|---|---|---|
| `companyInfo` (navigation.ts) | It's No Sweat Heat & Air | 27950 Kalmia Ave, Moreno Valley, CA 92555 | (951) 331-3310 |
| Footer (rendered) | It's No Sweat Heat & Air | 27950 Kalmia Ave, Moreno Valley, CA 92555 | (951) 331-3310 |
| Contact Page (visible) | It's No Sweat Heat & Air | Moreno Valley, CA (partial — no street in visible copy) | (951) 331-3310 |
| Contact Page Schema (JSON-LD) | It's No Sweat Heat & Air | Moreno Valley, CA only — **missing streetAddress, postalCode** | (951) 331-3310 |
| LocalBusiness Schema | It's No Sweat Heat & Air | 27950 Kalmia Ave, Moreno Valley, CA 92555 | +19513313310 |
| CityServiceArea Schema | It's No Sweat Heat & Air | 27950 Kalmia Ave, Moreno Valley, CA 92555 | +19513313310 |

**Discrepancies:**

1. **Contact page JSON-LD address is incomplete** — `addressLocality: "Moreno Valley"` and `addressRegion: "CA"` but `streetAddress` and `postalCode` are absent. This conflicts with the full address in the main LocalBusiness schema. Google may see two conflicting address signals for the same entity on different pages.

2. **Phone format inconsistency** — The `companyInfo.phone` display value is `(951) 331-3310` (NAP format). The `tel:` link is `tel:+19513313310` (E.164 format). This is technically correct per best practices, but the Contact page schema emits `"telephone": "(951) 331-3310"` (not E.164) while the LocalBusiness schema emits `"telephone": "+19513313310"` (E.164). Schema telephone format should be E.164 across all pages.

3. **Contact page schema telephone** — Uses display format `(951) 331-3310` rather than E.164 `+19513313310`. Minor but introduces inconsistency across schema blocks.

**NAP Verdict: PASS with minor issues.** The core NAP is consistent across the main sources. Two schema-level inconsistencies need fixing but are unlikely to cause ranking harm today.

---

## License Number Visibility

| Location | Status |
|---|---|
| Footer (bottom bar) | **Absent** — companyInfo.license = "Lic#: 1058772" exists in navigation.ts but is NOT rendered in the footer |
| Contact page sidebar | **Present** — rendered via `{companyInfo.license}` |
| About page visible copy | Mentions "licensed technicians" generically — number NOT visible |
| Blog author bios | **Present** — "California HVAC license #1058772" in every blog post author bio |
| LocalBusiness schema | **Absent** — no `hasCredential` or equivalent property |
| City pages | Mentions "Licensed & insured" as a trust signal — number NOT visible |

**Finding:** The license number appears in the contact page sidebar and all blog author bios, but is NOT in the footer bottom bar (high-visibility location for SABs) and NOT in the schema. For a California HVAC contractor, license visibility is a trust signal that builds E-E-A-T and supports GBP credibility. Recommend adding to footer and schema.

---

## Local Schema Markup Validation

### Primary LocalBusiness Schema (`/`)

| Property | Status | Notes |
|---|---|---|
| `@type` | PASS | `HVACBusiness` — correct industry subtype |
| `@id` | PASS | `https://www.itsnosweat.net/#business` |
| `name` | PASS | Matches NAP |
| `url` | PASS | |
| `telephone` | PASS | E.164 format (`+19513313310`) |
| `email` | PASS | |
| `address` (full PostalAddress) | PASS | Street, locality, region, postal, country all present |
| `geo` (GeoCoordinates) | **PARTIAL** | lat: 33.9425, lng: -117.2297 — only 4 decimal places. Recommended: 5 decimal places (e.g., 33.94250, -117.22970). Minor. |
| `openingHoursSpecification` | PASS | Mon-Fri 7:30-18:00, Sat 8:00-15:00 |
| `aggregateRating` | PASS | Pulls live from Google Places API with 24h ISR cache |
| `review` (individual items) | PASS | 3 live Review items with author, rating, body, datePublished |
| `areaServed` | **ISSUE** | Lists 30 City objects — **Sunnymead is missing** from the 31-city list (Sunnymead appears in `serviceAreaCities` but not in the schema `areaServed` array) |
| `hasOfferCatalog` | PASS | 6 HVAC services listed |
| `priceRange` | PASS | `$$` |
| `logo` | PASS | |
| `image` | PASS | |
| `sameAs` | PASS | GBP Maps URL included |
| `hasCredential` / license | **ABSENT** | License #1058772 not encoded in schema |

### CityServiceArea Schema (per city page)

| Property | Status | Notes |
|---|---|---|
| `@type` | PASS | `HVACBusiness` |
| `@id` | PASS | City-specific URI |
| `name` | PASS | `"It's No Sweat Heat & Air — {city}"` |
| `geo` | PASS | City-specific coordinates (30 cities mapped) |
| `areaServed` | PASS | Single City with containedInPlace (California) |
| `aggregateRating` | PASS | Live from API |
| `review` | **ISSUE** | Only 1 hardcoded review (`Derrick F.`) on every single city page — same static review on all 30 pages. Google may flag identical review items across 30+ pages. |
| `openingHoursSpecification` | PASS | |

### Contact Page Schema

| Property | Status | Notes |
|---|---|---|
| `@type` | PASS | `ContactPage` wrapping `HVACBusiness` mainEntity |
| `address` | **FAIL** | Missing `streetAddress` and `postalCode` in the address object |
| `telephone` | **FAIL** | `"(951) 331-3310"` — should be E.164 `"+19513313310"` |

---

## GBP Signals (On-Page Evidence)

| Signal | Status | Notes |
|---|---|---|
| Google Maps embed | **ABSENT** | No iframe map embed anywhere on the site |
| GBP place reference | PASS | `sameAs` in schema links to the correct GBP URL |
| Review widget | PARTIAL | Reviews shown via Google Places API carousel — live data but not a native Google review widget |
| GBP link in footer | PASS | Footer links to `gbpUrl` (Google Maps place URL) |
| "Leave a review" CTA | PASS | Footer has "Leave Us a Review" button linking to `g.page/r/` review URL |

**Manual GBP Audit Required (cannot assess from code):**

- [ ] Primary GBP category: Should be "HVAC Contractor" — verify this is NOT set to "Air Conditioning Contractor" alone (dual-category setup recommended: primary = HVAC Contractor, secondary = Air Conditioning Contractor, Heating Contractor)
- [ ] Secondary GBP categories: Add "Solar Energy Contractor" if solar is a real active service line
- [ ] GBP Services: Verify all 6 service types are listed with descriptions
- [ ] GBP Photos: Minimum 10 photos recommended — van exterior, team, job site photos, before/after
- [ ] Post cadence: Sterling Sky 18-day rule — new review or GBP post within last 18 days?
- [ ] Q&A section: Are questions present and answered?
- [ ] Attributes: "Women-led," "Veteran-led," "Emergency service," "Financing available" — confirm which apply
- [ ] Business hours: Match site (Mon-Fri 7:30-6pm, Sat 8am-3pm)
- [ ] Address: Confirm GBP address matches 27950 Kalmia Ave, Moreno Valley, CA 92555 exactly

---

## Review Health

| Metric | Value | Source |
|---|---|---|
| Aggregate rating (code) | 4.9 (fallback) | `FALLBACK_RATING` in google-rating.ts |
| Review count (code) | 78 (fallback) | `FALLBACK_RATING` |
| Live API integration | Configured | Google Places API (New) with 24h ISR cache |
| Reviews shown on site | 3 (homepage carousel) | Live from API, filtered min 4-star |
| Schema review items | 3 on homepage, 1 on each city page | Homepage: live. City pages: hardcoded static |
| Individual `Review` items | YES | Present on homepage and city schemas |
| Real reviewer names | YES | Live API pulls real Google reviewer names |
| Owner replies | YES (in reviews.ts) | But reviews.ts is not currently rendered on any page |
| Response rate (visible) | Not assessable | reviews.ts data has replies for 7/10 entries but this data is unused |

**Review health observations:**

1. The `reviews.ts` file contains 10 detailed reviews with owner replies — this content is not rendered anywhere on the site. This is a missed trust signal. A full review section on the homepage or About page would add E-E-A-T signals.

2. The hardcoded fallback rating (4.9, 78 reviews) will display if the Places API key is unset or the call fails. If the live count is higher, the fallback understates social proof. Verify the live API key is active in production.

3. City page schemas all contain the same single hardcoded review (Derrick F., 2024-06-15). Consider either removing per-city review items to reduce duplicate content signals, or rotating different reviews per city.

---

## City Page Quality Assessment

### Template Architecture

The city page template (`/service-areas/[city]/page.tsx`) uses:
- 4 hero text variations (A/B/C/D) — rotated across 30 cities
- 4 testimonial variations — rotated to match hero variation
- 4 CTA text variations — rotated to match hero variation
- 4 lead-in text variations per service block
- City-specific content loaded from data files (intro, service sections, FAQs, etc.)
- City-specific coordinates for schema geo
- Unique service area footer with current city highlighted

### Moreno Valley (Variation A — HQ city)

**Quality: EXCELLENT**

- Intro is uniquely written: references Moreno Valley's heat waves, rapid growth era homes, aging original HVAC equipment
- AC repair copy mentions "110°F outside" — climate-specific
- Furnace copy mentions "upper 30s overnight" — local climate signal
- IAQ copy references Inland Empire dust specifically
- Emergency copy references "100-degree Moreno Valley afternoon"
- FAQs are Moreno Valley-specific: "Why are Moreno Valley electric bills so high in summer?"
- No local landmark callouts or neighborhood references — opportunity gap
- No embedded map — opportunity gap
- Internal links to all 6 service pages — PASS

### Riverside (Variation B — major metro city)

**Quality: EXCELLENT**

- Intro references Riverside's "mid-century neighborhoods," "1980s developments," "eastern corridors" — genuine geo-specificity
- Notes Riverside's "older neighborhoods to the newest developments"
- AC repair discusses "catching components in the failing stage" — differentiated angle vs. Moreno Valley copy
- Emergency copy references "Riverside area" dispatch
- FAQs cover ductwork, variable-speed systems, maintenance agreements — distinct from Moreno Valley FAQs
- No neighborhood-level callouts (e.g., Woodcrest, La Sierra, University) — opportunity
- No embedded map

### Temecula (Variation B — southern anchor city)

**Quality: GOOD**

- Intro references Temecula homeowners investing in their properties — demographic tone match
- Maintenance copy is notably differentiated: references documentation and "certainty" angle suited to Temecula's higher-income demographic
- FAQs include SEER pros/cons with Temecula-specific runtime ("5-6 months")
- Emergency copy gives practical pre-visit checklist — different from other cities
- No wine country / Old Town / De Portola wine trail references — Temecula has strong local identity signals that are unused
- Furthest city from Moreno Valley HQ (40+ miles) — proximity disadvantage note

### General City Page Assessment

**Strong differentiators (city-to-city):**
- Every intro paragraph is uniquely written — no boilerplate copy-paste detected
- FAQs rotate topics across cities (not the same 5 questions)
- Common problems section is city-specific (Riverside's problems differ from Perris's)
- Service block lead-ins rotate across 4 variations with city name injection

**Weaknesses across all city pages:**
1. No local landmark or neighborhood references in any city page (e.g., "near Mt. San Jacinto," "in the Galleria area of Riverside," "near Temecula Valley Wine Country")
2. No embedded Google Map of service area on any city or location page
3. No "recent project" callout per city — projects.ts exists but project data references out-of-state locations (see below)
4. Trust bar shows hardcoded "25+ Years Experience" and "4.9-Star Rated" — not city-specific
5. Sunnymead city page missing geo coordinates in CityServiceAreaSchema (not in cityCoordinates map) — schema returns null for this city

### Doorway Page Test

PASS. Pages are not doorway pages — each has substantively unique intro, unique FAQ set, unique common-problems list, and unique emergency copy. The 4-variation system introduces structural repetition (hero text, CTAs, lead-ins) but the depth of city-specific content prevents thin-page classification.

---

## HVAC Industry-Specific Signals

| Signal | Status | Notes |
|---|---|---|
| Emergency / 24-7 availability | PASS | Footer "24-Hour Emergency" card, contact page emergency card, `emergencyHours: "24/7 Emergency Service"` in companyInfo |
| Emergency CTA on city pages | PASS | Dedicated "Fast & Emergency HVAC Repair in {city}" section on all city pages |
| Financing options | PARTIAL | Mentioned in 1 city page FAQ (Menifee area) but not visible site-wide. No financing page. No homepage mention. |
| Brand certifications | PARTIAL | "NATE-certified technician" in blog author bios only. No Trane Comfort Specialist, Carrier Factory Authorized, or brand partner badges visible anywhere. |
| Seasonal content | PARTIAL | Blog exists, but no heat-wave-preparedness or seasonal page is evident from data |
| Brand ticker | PASS | City pages show animated ticker: Goodman, York, Rheem, Amana, Carrier, Lennox, Trane, Bryant |
| Solar as second specialty | ISSUE | Projects page contains solar projects in New York — no Inland Empire solar projects. Solar is mentioned nowhere in navigation, services, or schema. If solar is a live service, it needs a service page and schema entry. |

---

## Citation Presence (Tier 1 Directories)

Cannot directly access Yelp/BBB via WebFetch in this audit. Manual verification required.

| Directory | Status | Action |
|---|---|---|
| Google Business Profile | Configured (GBP URL in schema/footer) | Manual audit checklist above |
| Yelp | Unknown | Search yelp.com for "It's No Sweat Heat Air Moreno Valley" |
| Better Business Bureau | Unknown | Search bbb.org for business name |
| Angi (formerly Angie's List) | Unknown | Verify listing and NAP |
| HomeAdvisor | Unknown | Verify listing |
| Thumbtack | Unknown | Verify listing |
| Houzz | Unknown | Relevant for home services |
| Facebook Business | Unknown | Verify NAP matches site exactly |
| Apple Maps | Unknown | Critical for iOS users |
| Bing Places | Unknown | Secondary but worth claiming |

**Citation note:** For AI visibility (Whitespark 2026), 3 of the top 5 AI visibility factors are citation-related. Consistent NAP across Tier 1 directories directly influences AI Overview appearances.

---

## Projects Page Issue (Critical)

The `/projects/` page pulls from `projects.ts`. The current project data contains:
- Solar inverter installation in **Clifton Park, NY**
- Solar maintenance for **Hubo Group** in **Saratoga Springs, NY**
- Additional out-of-state projects

These projects are from a different business or a template — they are not It's No Sweat Heat & Air projects. If this page is indexed, Google sees a Moreno Valley, CA HVAC business claiming project work in New York. This is a local relevance signal conflict and a credibility issue. **This page must be replaced with real Inland Empire project content or removed from the sitemap.**

---

## Top 10 Prioritized Actions

### Critical

**1. Replace or remove /projects/ page content**
The project data references New York solar jobs. Either replace with real Inland Empire HVAC/solar job case studies or `noindex` the page until real content is ready. Risk: Google indexes fake geographic signals that contradict the local SAB position.

**2. Fix Contact page schema address**
Add `streetAddress: "27950 Kalmia Ave"` and `postalCode: "92555"` to the contact page JSON-LD. Also change `telephone` to E.164 format. Inconsistent address schema across pages weakens entity disambiguation.

### High

**3. Add Google Maps embed to contact page (and optionally service-areas index)**
No Maps embed exists anywhere on the site. A Maps iframe on the contact page with the service area pinned is a GBP signal and a user trust signal. It directly associates the domain with the GBP listing in Google's understanding.

**4. Add license number to footer**
The license `Lic#: 1058772` is in `companyInfo.license` but is not rendered in the footer. Add it to the bottom bar alongside the copyright line. This is a high-visibility E-E-A-T signal for an HVAC contractor; California homeowners specifically look for license numbers.

**5. Add license to LocalBusiness schema**
Add `"hasCredential": { "@type": "EducationalOccupationalCredential", "credentialCategory": "license", "name": "California HVAC Contractor License #1058772" }` or use `"sameAs"` pointing to the CSLB license lookup URL for the license number.

**6. Add Sunnymead to LocalBusiness schema areaServed**
Currently 30 of 31 cities appear in the `areaServed` array — Sunnymead is missing. Also add Sunnymead coordinates to `cityCoordinates` in `city-service-area.tsx` so its city page emits a valid schema.

### Medium

**7. Add financing visibility site-wide**
Financing is mentioned in one city page FAQ. Create a visible "Financing Available" trust signal on the homepage, service pages, and contact page. Financing is a top conversion signal for high-ticket HVAC work and is listed as a GBP attribute.

**8. Add local landmark/neighborhood references to top city pages**
Moreno Valley, Riverside, and Temecula pages have strong copy but zero landmark mentions. Add 1-2 neighborhood or landmark callouts per city intro (e.g., "homeowners near Box Springs Mountain Reserve," "properties along Van Buren Boulevard," "homes in the De Luz or wine country area"). This signals genuine local knowledge to both users and crawlers.

**9. Render reviews.ts content on site**
The 10 detailed reviews with owner responses in `reviews.ts` are unused. Add a dedicated review section to the About page or create a `/reviews/` page. Owner responses are strong trust signals and show engagement — exactly what the 18-day review velocity rule rewards.

**10. Fix hardcoded city page review schema**
All 30 city page schemas emit the same hardcoded `Derrick F.` review. Either remove the `review` property from CityServiceAreaSchema (let the homepage carry individual reviews) or pull city-relevant reviews dynamically. Identical schema content across 30 pages is a thin-schema signal.

---

## Limitations & What Could Not Be Assessed

- **Live GBP data** — primary/secondary categories, photo count, post recency, review velocity, Q&A, attribute status — requires manual GBP access or DataForSEO `local_business_data`
- **Actual review count and rating** — fallback values (4.9, 78) are in code; live values depend on API key being active in production
- **Citation consistency across directories** — Yelp, BBB, Angi, HomeAdvisor not fetched (WebFetch blocked on authenticated pages)
- **Local pack rank positions** — requires DataForSEO `google_local_pack_serp` or manual SERP checks from Moreno Valley geo
- **Indexed page count** — requires Google Search Console access
- **Backlink profile / local link authority** — requires Ahrefs/Moz/Majestic; estimated 55/100 based on business age and review signals
- **Proximity factor** — accounts for 55.2% of local pack ranking variance (Search Atlas ML study); outside our control; noted for context
- **Core Web Vitals** — not assessed in this audit
