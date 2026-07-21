# 0003 - SEO Strategy

**Status**: Accepted
**Date**: 2026-07-21
**Context**: COREI™ Website Migration Project

---

## Decision

We will implement a comprehensive **local SEO strategy** focused on East Texas, with technical SEO optimization and structured data markup.

## Context

COREI™ is a non-profit organization serving rural East Texas communities. The website needs to:
- Rank well for local search queries (East Texas, Mount Enterprise, Henderson, Nacogdoches)
- Attract volunteers, donors, and community members
- Establish authority as a community organization
- Comply with Google's E-E-A-T guidelines (Experience, Expertise, Authoritativeness, Trustworthiness)

## Target Keywords

### Primary Keywords

- "COREI™ multi-purpose complex"
- "COREI™ East Texas"
- "rural community center East Texas"
- "community center Mount Enterprise TX"

### Secondary Keywords

- "veteran services East Texas"
- "childcare after-school programs East Texas"
- "medical services rural Texas"
- "community center Henderson TX"
- "non-profit organizations East Texas"

### Long-Tail Keywords

- "multi-purpose complex for veterans and families"
- "after-school programs for rural children"
- "community events Mount Enterprise Texas"
- "how to volunteer at COREI™"

## Technical SEO Implementation

### 1. Meta Tags (Next.js Metadata API)

```typescript
// src/app/layout.tsx
export const metadata: Metadata = {
  title: {
    default: 'COREI™ - Multi-Purpose Complex for Rural East Texas',
    template: '%s | COREI™'
  },
  description: 'COREI™ is a 501(c)(3) non-profit bringing urban innovation to rural America through a multi-purpose complex in East Texas. Medical, veteran, education, sports, fitness, and childcare services.',
  keywords: [
    'COREI',
    'East Texas',
    'community center',
    'multi-purpose complex',
    'veteran services',
    'childcare programs',
    'non-profit'
  ],
  openGraph: {
    title: 'COREI™ - Multi-Purpose Complex for Rural East Texas',
    description: 'Bringing urban innovation to rural America through a multi-purpose complex in East Texas.',
    url: 'https://coreitex.com',
    siteName: 'COREI™',
    images: [
      {
        url: 'https://coreitex.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'COREI™ Multi-Purpose Complex'
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'COREI™ - Multi-Purpose Complex for Rural East Texas',
    description: 'Bringing urban innovation to rural America through a multi-purpose complex in East Texas.',
    images: ['https://coreitex.com/images/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: 'https://coreitex.com'
  }
};
```

### 2. Structured Data (JSON-LD)

#### Organization Schema

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "COREI™",
  "url": "https://coreitex.com",
  "logo": "https://coreitex.com/images/logo.png",
  "description": "A non-profit 501(c)(3) organization bringing urban innovation to rural America through a multi-purpose complex.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "11989 County Road 482 South",
    "addressLocality": "Mount Enterprise",
    "addressRegion": "TX",
    "postalCode": "75681",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-XXX-XXX-XXXX",
    "contactType": "customer service"
  },
  "sameAs": [
    "https://www.facebook.com/coreitexas",
    "https://twitter.com/coreitexas"
  ]
}
```

#### LocalBusiness Schema

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "COREI™ Multi-Purpose Complex",
  "image": "https://coreitex.com/images/hero.jpg",
  "url": "https://coreitex.com",
  "telephone": "+1-XXX-XXX-XXXX",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "11989 County Road 482 South",
    "addressLocality": "Mount Enterprise",
    "addressRegion": "TX",
    "postalCode": "75681",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "32.0000",
    "longitude": "-94.8000"
  },
  "openingHours": "Mo-Su 00:00-23:59",
  "priceRange": "$$"
}
```

#### NonProfit Schema

```json
{
  "@context": "https://schema.org",
  "@type": "NonProfit",
  "name": "COREI™",
  "url": "https://coreitex.com",
  "taxID": "XX-XXXXXXX",
  "description": "A 501(c)(3) non-profit organization bringing urban innovation to rural America.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "11989 County Road 482 South",
    "addressLocality": "Mount Enterprise",
    "addressRegion": "TX",
    "postalCode": "75681",
    "addressCountry": "US"
  }
}
```

### 3. XML Sitemap

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://coreitex.com/</loc>
    <lastmod>2026-07-21</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://coreitex.com/about</loc>
    <lastmod>2026-07-21</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://coreitex.com/programs</loc>
    <lastmod>2026-07-21</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://coreitex.com/get-involved</loc>
    <lastmod>2026-07-21</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://coreitex.com/contact</loc>
    <lastmod>2026-07-21</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://coreitex.com/construction</loc>
    <lastmod>2026-07-21</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>
```

### 4. Robots.txt

```
User-agent: *
Allow: /

Sitemap: https://coreitex.com/sitemap.xml
```

## Local SEO Strategy

### 1. Google Business Profile

- Create/verify Google Business Profile
- Add accurate NAP (Name, Address, Phone)
- Upload photos of construction progress
- Add business hours (if applicable)
- Encourage reviews from community members
- Post regular updates about construction milestones

### 2. Local Citations

- Submit to local business directories:
  - Yelp
  - Yellow Pages
  - Chamber of Commerce (Henderson, Nacogdoches)
  - Local Texas business directories

### 3. NAP Consistency

Ensure consistent NAP across all platforms:
- **Name**: COREI™ (or COREI Multi-Purpose Complex)
- **Address**: 11989 County Road 482 South, Mount Enterprise, TX 75681
- **Phone**: +1-XXX-XXX-XXXX

### 4. Local Content

- Create location-specific content:
  - "Serving Mount Enterprise, Henderson, and Nacogdoches"
  - "East Texas Community Services"
  - "Rural Texas Veteran Support"
- Mention nearby cities in content
- Use local landmarks in descriptions

## On-Page SEO

### 1. Heading Structure

```html
<h1>COREI™ Multi-Purpose Complex</h1>
<h2>Our Programs</h2>
<h3>Medical Services</h3>
<h2>Who We Are</h2>
<h2>Get Involved</h2>
```

### 2. Internal Linking

- Link from homepage to all main pages
- Link from programs page to individual program details
- Link from about page to team members
- Link from contact page to volunteer signup

### 3. Image Optimization

- Use descriptive filenames (e.g., `corei-construction-progress.jpg`)
- Add alt text for all images
- Use WebP format for faster loading
- Implement lazy loading

## Performance Optimization

### 1. Core Web Vitals Targets

- **LCP** (Largest Contentful Paint): <2.5s
- **FID** (First Input Delay): <100ms
- **CLS** (Cumulative Layout Shift): <0.1

### 2. Image Optimization

- Use `next/image` for automatic optimization
- Convert images to WebP format
- Implement lazy loading
- Use responsive images

### 3. Code Optimization

- Minify CSS/JS
- Remove unused CSS (PurgeCSS)
- Code splitting for routes
- Tree shaking

## Measurement & Tracking

### 1. Google Analytics 4

- Set up GA4 property
- Add GA4 tracking code
- Track key events:
  - Form submissions (contact, volunteer)
  - Button clicks (donate, get involved)
  - Page views
  - User demographics

### 2. Google Search Console

- Verify domain ownership
- Submit sitemap
- Monitor coverage report
- Track keyword rankings
- Fix crawl errors

### 3. Lighthouse CI

- Run Lighthouse audits in CI/CD
- Set performance budgets
- Monitor Core Web Vitals

## Consequences

### Positive
- Improved local search visibility
- Higher organic traffic from East Texas
- Better user experience (fast load times)
- Increased volunteer and donor engagement
- Professional online presence

### Negative
- Requires ongoing maintenance (content updates, performance monitoring)
- Initial setup time (Google Business Profile, citations)

### Neutral
- Client will need to provide construction photos
- Will need to track GA4 and Search Console

## Alternatives Considered

- No SEO strategy (rejected, would waste migration effort)
- Broad national SEO (rejected, focus should be local)
- Paid ads (rejected, organic SEO is better for non-profits)

## References

- Google Search Central: https://developers.google.com/search
- Schema.org: https://schema.org
- Next.js Metadata API: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
- Lighthouse: https://developers.google.com/web/tools/lighthouse

---

**Proposed by**: AI_Claw
**Accepted by**: TBD
**Implementation Start**: Week 5