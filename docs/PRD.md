# COREI™ Website Migration - Product Requirements Document

**Project**: COREI™ Website Migration (WordPress → Firebase Hosting)
**Client**: COREI™ (Non-Profit 501(c)(3))
**Current Site**: https://coreitex.com/
**Target**: 2026 modern design + Firebase Spark Plan deployment
**Retainer**: Ongoing management & SEO enhancements

---

## 1. Executive Summary

COREI™ is a non-profit organization building a multi-purpose complex in East Texas. The current WordPress site needs migration to a modern, maintainable stack deployed on Firebase Hosting (Spark Plan). The new design should match the professional, clean aesthetic of similar community organizations (e.g., Jubilee Center).

**Key Goals**:
- Migrate from WordPress to modern stack
- Deploy on Firebase Hosting (Spark Plan: no database, no app hosting)
- Professional 2026 design aesthetic
- SEO-optimized for local East Texas community
- Maintainable content management for retainer support
- Fast load times and mobile-first experience

---

## 2. Current Site Analysis

**Domain**: https://coreitex.com/

**Current Content** (from WordPress extraction):
- Homepage: Mission statement, location, programs overview
- Who We Are: 501(c)(3) status, vision for rural communities
- Programs: 6 service areas (Medical, Veteran, Education, Sports, Fitness, Childcare)
- Partner Spotlight: Crossroads Family Care collaboration
- Location: Mount Enterprise, Texas (Piney Woods region)
- Call-to-Action: Volunteer signup, involvement

**Pain Points**:
- WordPress dependency (client can't self-manage easily)
- Outdated design
- No modern SEO optimization
- Slow performance (typical WordPress)
- Limited customization without developer

---

## 3. Target Audience

**Primary**:
- East Texas rural community residents
- Veterans seeking services
- Families with children (childcare, after-school programs)
- Local business owners and partners

**Secondary**:
- Potential donors and sponsors
- Medical service providers
- Veteran service organizations
- Government agencies and grant funders

**Geographic Focus**:
- Mount Enterprise, TX
- Henderson, TX (12 miles north)
- Nacogdoches, TX (30 miles south)
- Dallas/Houston metro areas (2-hour drive for day trips)

---

## 4. Design Requirements

**Inspiration**: Jubilee Center (clean, professional, community-focused)
**Aesthetic**:
- Warm, welcoming color palette (earth tones + trust blues)
- Professional typography (readable sans-serif headings)
- Generous whitespace for readability
- High-quality imagery (construction progress, community events)
- Modern card-based layouts
- Subtle animations/transitions

**Design Principles**:
- Mobile-first responsive design
- Accessibility-first (WCAG 2.1 AA compliance)
- Fast load times (<3s LCP)
- Clear visual hierarchy
- Strong CTAs for volunteer/donate actions

**Key Visual Elements**:
- Hero section: Mission statement + imagery
- Service area cards (6 programs)
- Partner spotlight section
- Construction progress gallery
- Location/contact information
- Volunteer/donate CTAs

---

## 5. Technical Requirements

### 5.1 Tech Stack (Firebase Spark Plan Compatible)

**Primary Option (Recommended)**:
- **Framework**: Next.js 15 (App Router) with static export
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Deployment**: Firebase Hosting (static site)
- **Content**: JSON/Markdown files (headless CMS replacement)
- **Build Tool**: Turbopack (Next.js 15 default)

**Secondary Option**:
- **Framework**: Vite 6 + React 19
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Deployment**: Firebase Hosting (static site)
- **Routing**: File-based routing

### 5.2 Firebase Spark Plan Constraints

**Allowed**:
- Static site hosting (HTML/CSS/JS)
- 10GB/month bandwidth
- Custom domain
- SSL certificates
- CDN distribution
- Firebase CLI for deployment

**NOT Allowed**:
- Firebase Realtime Database (paid plan only)
- Firebase App Hosting (paid plan only)
- Cloud Functions (paid plan only)
- Server-side rendering (must use static export)

### 5.3 Required Pages

1. **Homepage** (`/`)
   - Hero section with mission
   - 6 program cards
   - Partner spotlight
   - CTA for volunteer/donate
   - Location info

2. **About Us** (`/about`)
   - Who We Are
   - 501(c)(3) information
   - Team/board members (if available)
   - Vision/mission statements

3. **Programs** (`/programs`)
   - Detailed breakdown of 6 service areas
   - Each program with description + imagery

4. **Get Involved** (`/get-involved`)
   - Volunteer signup form (static form)
   - Donation information
   - Partner with us

5. **Contact** (`/contact`)
   - Address and map
   - Contact form (static form)
   - Phone/email

6. **Construction Progress** (`/construction`)
   - Photo gallery of building progress
   - Timeline/milestones

### 5.4 SEO Requirements

**Technical SEO**:
- Meta tags (title, description, OG, Twitter)
- Structured data (Organization, LocalBusiness)
- XML sitemap
- Robots.txt
- Semantic HTML
- Fast loading (optimize images, minify CSS/JS)
- Mobile-friendly

**Local SEO**:
- Google Business Profile integration
- NAP consistency (Name, Address, Phone)
- Local keywords (East Texas, Mount Enterprise, etc.)
- Schema markup for non-profit organization

---

## 6. Content Requirements

### 6.1 Content Migration

**From WordPress**:
- All existing copy (Who We Are, Programs, etc.)
- Partner information
- Location details
- Contact information

**New Content Needed**:
- Construction progress photos (client to provide)
- Team member bios (if available)
- Program descriptions expansion
- Calendar/news section (optional, for retainer)

### 6.2 Content Management Strategy

**For Firebase Spark Plan** (no database):
- **Approach 0**: Email Triggered Automation Updates
- **Approach 1**: JSON content files (easiest for client)
- **Approach 2**: Markdown files with frontmatter (better for version control)
- **Approach 3**: Headless CMS with static export (e.g., Contentful, Sanity - free tier)

**Recommendation**: JSON files for simplicity + Git version control

---

## 7. Deployment Strategy

### 7.1 Staging Phase

**Environment**: Firebase Hosting (client's existing staging project or new project)
**GitHub Repository**: `coreitex-website` (private)
**CI/CD**: GitHub Actions → Firebase deploy
**URL**: `https://coreitex-staging.web.app` (or similar)

### 7.2 Production Phase

**Environment**: Firebase Hosting (new client project)
**Custom Domain**: `coreitex.com` (DNS configured to Firebase)
**CI/CD**: GitHub Actions → Firebase deploy on merge to main
**URL**: `https://coreitex.com`

---

## 8. Mockup & Approval Process

### 8.1 Mockup Deliverables

**Phase 1: Homepage Mockups** (3 variants)
- Variant A: Minimalist, focus on imagery
- Variant B: Content-rich, card-based
- Variant C: Balanced, hybrid approach

**Format**: Live previews (Vite/Next.js dev server) + screenshots

### 8.2 Approval Workflow

1. Create mockups from WordPress HTML (client-provided)
2. Deploy to staging Firebase project
3. Share staging URL with client
4. Collect feedback via Email
5. Iterate on selected mockup
6. Final approval → full migration

---

## 9. Success Metrics

**Technical**:
- Page load time <3s (Lighthouse Performance score >90)
- Mobile score >90 (Lighthouse)
- Accessibility score >90 (Lighthouse)
- SEO score >90 (Lighthouse)

**Business**:
- Increased volunteer signups (track via form submissions)
- Improved local search visibility (Google Business profile - Additional Cost)
- Reduced bounce rate (Google Analytics)
- Increased donor engagement (if donation page added)

---

## 10. Retainer Deliverables

**Ongoing Support**:
- Content updates (text, images, programs)
- SEO optimization (monthly audits, keyword updates)
- Performance monitoring (Lighthouse, Analytics)
- Bug fixes and minor features
- Security updates (dependency updates)
- Deployment management

**Not Included**:
- Major redesigns
- New feature development (separate scope)
- Third-party integrations (paid services)

---

## 11. Timeline

**Phase 1: Discovery & Planning** (Week 1)
- Receive WordPress HTML files
- Analyze current content
- Create design mockups
- Select tech stack

**Phase 2: Mockup & Approval** (Week 2)
- Create 3 homepage mockups
- Deploy to staging
- Client feedback & iteration
- Final approval

**Phase 3: Development** (Weeks 3-5)
- Set up project structure
- Migrate all pages
- Implement responsive design
- SEO optimization
- Testing & QA

**Phase 4: Deployment** (Week 6)
- Deploy to staging
- Final QA
- DNS configuration
- Production deployment
- Handover & training

**Total**: ~6 weeks

---

## 12. Next Steps

1. **Client Action**: Provide Gmail Business Account Access
2. **My Action**: Analyze files, create 3 mockups
3. **Client Action**: Review mockups, select direction
4. **My Action**: Begin full migration

---

**Document Status**: Draft v1.0
**Last Updated**: 2026-07-21
**Author**: AI_Claw
