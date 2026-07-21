# Schema.org Structured Data Audit
**Site:** https://www.itsnosweat.net
**Client:** It's No Sweat Heat & Air — Moreno Valley CA
**Audited:** 2026-04-29
**Pages sampled:** 6 (homepage, /service/ac-repair/, /service-areas/moreno-valley/, /blog/hvac-maintenance-for-optimal-performance/, /about-us/, /contact-us/)

---

## 1. Schema Detected Per Page

| Page | Schema Types Present |
|---|---|
| `/` (homepage) | HVACBusiness, Organization |
| `/service/ac-repair/` | HVACBusiness, Organization, Service, BreadcrumbList |
| `/service-areas/moreno-valley/` | HVACBusiness (global), Organization, HVACBusiness (local), FAQPage, BreadcrumbList |
| `/blog/hvac-maintenance-for-optimal-performance/` | HVACBusiness, Organization, Article, BreadcrumbList |
| `/about-us/` | HVACBusiness, Organization |
| `/contact-us/` | HVACBusiness, Organization, BreadcrumbList, ContactPage |

**Not found on any page:** WebSite (with SearchAction), Person (standalone for About page)

**llms.txt:** PRESENT at https://www.itsnosweat.net/llms.txt — well-formed, comprehensive.

---

## 2. Validation Results

### CRITICAL — aggregateRating in HVACBusiness (ALL pages)

**FLAG: aggregateRating present on every page's HVACBusiness block — violates project rule.**

The global HVACBusiness schema injected site-wide includes:
```json
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "4.9",
  "reviewCount": "78",
  "bestRating": "5",
  "worstRating": "1"
}
```
Per the explicit project constraint, `aggregateRating` must NOT appear in the LocalBusiness/HVACBusiness schema. Remove it from the global schema component. The `review` array (individual Review items) can stay.

The Moreno Valley service-area page has a second HVACBusiness block (`@id: /service-areas/moreno-valley/#business`) that also includes `aggregateRating` — same fix required there.

---

### VALIDATION — Page-by-Page

#### Homepage `/`
| Check | Result |
|---|---|
| @context = https://schema.org | PASS |
| HVACBusiness: name | PASS — "It's No Sweat Heat & Air" |
| HVACBusiness: address (full PostalAddress) | PASS |
| HVACBusiness: telephone | PASS — "+19513313310" |
| HVACBusiness: geo | PASS — lat/long present |
| HVACBusiness: openingHoursSpecification | PASS — Mon-Fri + Sat |
| HVACBusiness: priceRange | PASS — "$$" |
| HVACBusiness: areaServed | PASS — 30 cities |
| HVACBusiness: hasOfferCatalog | PASS — 6 services |
| HVACBusiness: sameAs | PARTIAL — only Google Maps URL; missing Yelp, Facebook, BBB if applicable |
| HVACBusiness: image | PASS — absolute URL |
| HVACBusiness: aggregateRating | FAIL — present, must be removed (project rule) |
| Organization: @id | FAIL — no @id on Organization block (should reference `#organization`) |
| Organization: sameAs | FAIL — missing |
| WebSite schema | FAIL — absent; no SearchAction sitelinks eligibility |
| BreadcrumbList | N/A — homepage, not required |

#### `/service/ac-repair/`
| Check | Result |
|---|---|
| Service: @type | PASS |
| Service: name | PASS |
| Service: description | PASS |
| Service: image | PASS — absolute URL |
| Service: url | PASS — absolute |
| Service: serviceType | PASS |
| Service: provider (HVACBusiness with @id) | PASS |
| Service: areaServed | PARTIAL — uses `State: California`; better to use same city list or `AdministrativeArea` |
| Service: offers | FAIL — no Offer with price/priceSpecification (recommended for Service rich results) |
| BreadcrumbList | PASS — 3-level, all absolute URLs |
| FAQPage | FAIL — service page has FAQ-like HTML content (confirmed by HTML inspection) but no FAQPage schema |

#### `/service-areas/moreno-valley/`
| Check | Result |
|---|---|
| Local HVACBusiness block | PASS — separate @id for city page |
| areaServed: City with containedInPlace | PASS |
| FAQPage | PRESENT — 5 well-formed Q&A pairs |
| FAQPage: Question/Answer types | PASS |
| aggregateRating in local HVACBusiness | FAIL — same project rule violation |
| BreadcrumbList | PASS — 3-level |
| Note on FAQPage | INFO — FAQPage is restricted from Google rich results for commercial sites (Aug 2023). Schema is still valuable for AI/LLM citation signals. No action needed to remove; flag for awareness. |

#### `/blog/hvac-maintenance-for-optimal-performance/`
| Check | Result |
|---|---|
| Article: @type | PASS — uses Article (BlogPosting would be slightly more precise but Article is valid) |
| Article: headline | PASS |
| Article: description | PASS |
| Article: datePublished | PASS — ISO 8601 (2024-09-10) |
| Article: dateModified | PARTIAL — equals datePublished; should be updated to actual last-modified date |
| Article: image | PARTIAL — plain string URL; Google recommends ImageObject with width/height |
| Article: author (@type Person) | PASS |
| Article: author url/sameAs | FAIL — no `url` or `sameAs` on Person author (reduces E-E-A-T signal) |
| Article: publisher (@type Organization, @id) | PASS — references `#organization` @id |
| Article: publisher logo (ImageObject) | PASS |
| Article: mainEntityOfPage | PASS |
| BreadcrumbList | PASS — 3-level |

#### `/about-us/`
| Check | Result |
|---|---|
| Schema types present | HVACBusiness (global), Organization only |
| BreadcrumbList | FAIL — absent; all internal pages should have BreadcrumbList |
| Person schema for Justin Jaszewski | FAIL — About page is the natural home for a Person block with credentials, license, sameAs. Absent. |

#### `/contact-us/`
| Check | Result |
|---|---|
| ContactPage | PASS |
| ContactPage: mainEntity (HVACBusiness) | PASS |
| ContactPage: mainEntity address | PARTIAL — missing streetAddress and postalCode (only locality/region/country) |
| BreadcrumbList | PASS — 2-level |

---

## 3. Missing Schema Opportunities (Priority Order)

### Priority 1 — CRITICAL: Remove aggregateRating from HVACBusiness
Affects every page. Project rule violation. Remove `aggregateRating` block from the global HVACBusiness component. Individual `review` items can remain.

### Priority 2 — HIGH: WebSite schema (homepage)
Currently absent. Enables Google Sitelinks Search Box eligibility. Add to homepage only.

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.itsnosweat.net/#website",
  "name": "It's No Sweat Heat & Air",
  "url": "https://www.itsnosweat.net",
  "publisher": {
    "@id": "https://www.itsnosweat.net/#organization"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.itsnosweat.net/?s={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
```

### Priority 3 — HIGH: Fix Organization @id and add sameAs (homepage / global)
The Organization block lacks `@id`, preventing cross-page graph linking. Fix:

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.itsnosweat.net/#organization",
  "name": "It's No Sweat Heat & Air",
  "url": "https://www.itsnosweat.net",
  "logo": "https://www.itsnosweat.net/images/logo-main.webp",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "(951) 331-3310",
    "contactType": "customer service",
    "availableLanguage": "English",
    "areaServed": "US"
  },
  "sameAs": [
    "https://www.google.com/maps/place/It's+No+Sweat+Heat+%26+Air/@33.9539147,-117.1799244,17z/data=!3m1!4b1!4m6!3m5!1s0x80dca783bcab7ba5:0x36d6067dbc87d6fd!8m2!3d33.9539148!4d-117.1750481!16s%2Fg%2F11j8w554d5"
  ]
}
```
*(Add Yelp, Facebook, BBB URLs to sameAs when confirmed.)*

### Priority 4 — HIGH: Person schema on /about-us/
Justin Jaszewski's credentials are established in the Article schema but there's no standalone Person block on the About page. This is a missed E-E-A-T signal. Add:

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.itsnosweat.net/about-us/#justin",
  "name": "Justin Jaszewski",
  "jobTitle": "Co-Founder & NATE-Certified HVAC Technician",
  "description": "Co-founder of It's No Sweat Heat & Air. NATE-certified technician with 25+ years experience. CA HVAC License #1058772.",
  "worksFor": {
    "@id": "https://www.itsnosweat.net/#business"
  },
  "knowsAbout": ["HVAC installation", "Air conditioning repair", "Furnace repair", "Indoor air quality", "Energy efficiency"],
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "license",
    "name": "California HVAC Contractor License #1058772"
  }
}
```

### Priority 5 — MEDIUM: Article image should be ImageObject
Change plain URL string to ImageObject on all blog posts:
```json
"image": {
  "@type": "ImageObject",
  "url": "https://www.itsnosweat.net/images/blog/hvac-maintenance-guide.webp",
  "width": 1200,
  "height": 630
}
```

### Priority 6 — MEDIUM: BreadcrumbList on /about-us/
Currently missing. Add 2-level breadcrumb:
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.itsnosweat.net/"},
    {"@type": "ListItem", "position": 2, "name": "About Us", "item": "https://www.itsnosweat.net/about-us/"}
  ]
}
```

### Priority 7 — MEDIUM: Add author url/sameAs to Article schema
Strengthens E-E-A-T. Add to the author Person object in all blog posts:
```json
"url": "https://www.itsnosweat.net/about-us/#justin",
"sameAs": ["https://www.itsnosweat.net/about-us/"]
```

### Priority 8 — LOW: Service page areaServed precision
`/service/ac-repair/` uses `{"@type": "State", "name": "California"}`. More precise to mirror the HVACBusiness city list or use the same `AdministrativeArea` pattern used on city pages.

### Priority 9 — LOW: FAQPage on /service/ac-repair/ (and other service pages)
The HTML on the service page contains FAQ-like content but no FAQPage schema. For a commercial site, FAQPage will not trigger Google rich results (restricted since Aug 2023), but is still useful for AI/LLM crawlers. Recommend adding if GEO/AI discoverability is a priority — low urgency for pure Google SEO.

### NOT recommended:
- HowTo schema on the maintenance blog post — HowTo rich results were removed by Google in September 2023. No benefit.
- SpecialAnnouncement — deprecated July 31, 2025.

---

## 4. Summary Table

| Area | Status |
|---|---|
| LocalBusiness fields (name, address, tel, geo, hours, price, areaServed, catalog) | PASS |
| aggregateRating in LocalBusiness | CRITICAL FAIL — violates project rule |
| Service schema on service pages | PASS (present, mostly complete) |
| BreadcrumbList on internal pages | PARTIAL — missing on /about-us/ |
| Article schema on blog | PASS with minor gaps (image, author url) |
| WebSite schema | MISSING |
| Organization @id | MISSING |
| Person schema | MISSING on /about-us/ |
| FAQPage (city pages) | PRESENT — Google-ineligible for commercial; AI value only |
| llms.txt | PRESENT |

---

## Schema Category Score: 62 / 100

**Breakdown:**
- LocalBusiness completeness: 16/20 (−4 for aggregateRating violation, −0 for sameAs gap)
- Service schema: 13/15 (−2 for missing Offer/price, weak areaServed)
- Article/Blog schema: 11/15 (−2 image string, −2 author url/sameAs)
- BreadcrumbList: 7/10 (−3 missing on about-us)
- Supporting types (WebSite, Organization @id, Person): 5/20 (major gaps)
- Bonus (llms.txt, FAQPage for AI): 10/10 (pass — llms.txt present, FAQPage on city pages for AI)
- Deprecated/flagged usage: −0 (no HowTo, no SpecialAnnouncement — clean)

**Top 3 fixes to maximize score delta:**
1. Remove `aggregateRating` from HVACBusiness (critical project rule + Google may not show LocalBusiness star rich results without a verified source)
2. Add `WebSite` schema to homepage (+8 pts, Sitelinks eligibility)
3. Add `@id` to Organization block and `Person` to /about-us/ (+10 pts combined, knowledge graph coherence)

Executing those three brings the score to approximately **80/100**.
