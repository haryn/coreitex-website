# 0001 - Tech Stack Selection

**Status**: Accepted
**Date**: 2026-07-21
**Context**: COREI™ Website Migration Project

---

## Decision

We will use **Next.js 15 + Tailwind CSS v4 + TypeScript** for the COREI™ website migration.

## Context

The COREI™ website needs to be migrated from WordPress to a modern static site deployed on Firebase Hosting (Spark Plan). The constraints are:
- No database (Spark Plan limitation)
- Static site hosting only
- Must be maintainable for retainer support
- SEO-optimized
- Fast load times

## Options Considered

### Option 1: Next.js 15 + Tailwind CSS v4 ✅ **SELECTED**

**Pros**:
- Latest React 19 features
- Built-in SEO support (metadata API)
- Server Components for performance
- Image optimization built-in
- Fast builds with Turbopack
- Strong TypeScript support
- Excellent static export support
- Large community and ecosystem

**Cons**:
- Slightly more complex than Vite
- Larger bundle size (mitigated by code splitting)

### Option 2: Vite 6 + React 19

**Pros**:
- Simpler than Next.js
- Fast build times
- Flexible routing options

**Cons**:
- No built-in SEO support (manual meta tags)
- No built-in image optimization
- Less opinionated (more decisions to make)

### Option 3: Astro

**Pros**:
- Excellent for content-focused sites
- Zero JS by default
- Fast builds

**Cons**:
- Less React-friendly
- Smaller ecosystem
- Less familiar to our team

## Rationale

**Next.js 15** is the best choice because:
1. **SEO First**: Built-in metadata API makes SEO implementation trivial
2. **Performance**: Server Components and image optimization ensure fast load times
3. **Static Export**: Full support for Firebase Hosting via `next export`
4. **Maintainability**: Strong TypeScript support and large ecosystem
5. **Future-Proof**: Latest React 19 features and active development

**Tailwind CSS v4** provides:
- Utility-first styling for rapid development
- Excellent mobile-first support
- Small bundle size (JIT compiler)
- Easy customization

## Consequences

### Positive
- Excellent SEO capabilities out of the box
- Fast development with Tailwind
- Strong type safety with TypeScript
- Great performance with Server Components
- Easy to deploy to Firebase Hosting

### Negative
- Slightly higher learning curve than pure Vite
- Larger initial bundle (mitigated by code splitting)

### Neutral
- We'll need to configure static export in `next.config.ts`
- Content will be managed via JSON files (no database)

## Implementation

```bash
# Create Next.js 15 project
npx create-next-app@latest coreitex-website --typescript --tailwind --app --no-src-dir --import-alias "@/*"

# Configure static export
# next.config.ts
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  }
}
```

## Alternatives Considered

- Vite 6 (rejected for SEO reasons)
- Astro (rejected for ecosystem reasons)
- Gatsby (rejected for build performance)

## References

- Next.js 15 Documentation: https://nextjs.org/docs
- Tailwind CSS v4 Documentation: https://tailwindcss.com
- Firebase Hosting Documentation: https://firebase.google.com/docs/hosting

---

**Proposed by**: AI_Claw
**Accepted by**: TBD
**Implementation Start**: Week 3