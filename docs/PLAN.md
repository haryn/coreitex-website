# COREI™ Website Migration - Project Plan

**Project**: COREI™ Website Migration
**Client**: COREI™ (Non-Profit 501(c)(3))
**Current Site**: https://coreitex.com/
**Target**: Modern static site on Firebase Hosting (Spark Plan)
**Project Folder**: `coreitex-website/`
**Retainer**: Ongoing management & SEO enhancements

---

## 1. Project Overview

Migrate COREI™'s WordPress site to a modern, maintainable static site deployed on Firebase Hosting Spark Plan. The new site will feature a professional 2026 design inspired by community organizations like Jubilee Center, with optimized SEO for East Texas local search.

---

## 2. Tech Stack Decision

### Recommended Stack: Next.js 15 + Tailwind CSS v4

**Why**:
- ✅ Firebase Hosting compatible (static export)
- ✅ Latest React 19 features
- ✅ Excellent SEO support (metadata API)
- ✅ Built-in image optimization
- ✅ Fast builds with Turbopack
- ✅ TypeScript for type safety
- ✅ Tailwind v4 for rapid styling
- ✅ Server Components for performance

**Alternative**: Vite 6 + React 19 (if Next.js feels overkill)

### Firebase Spark Plan Compliance

**Allowed**:
- Static site hosting (`firebase deploy --only hosting`)
- Custom domain with SSL
- 10GB/month bandwidth
- CDN distribution

**Approach**: `next build && next export` → static HTML/CSS/JS → Firebase Hosting

---

## 3. Project Structure

```
coreitex-website/
├── docs/
│   ├── PRD.md                    # Product Requirements Document
│   ├── PLAN.md                   # This file
│   ├── ADR/                      # Architecture Decision Records
│   │   ├── 0001-tech-stack.md
│   │   ├── 0002-content-strategy.md
│   │   └── 0003-seo-strategy.md
│   └── designs/                  # Design mockups and screenshots
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── layout.tsx
│   │   ├── page.tsx              # Homepage
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── programs/
│   │   │   └── page.tsx
│   │   ├── get-involved/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   └── construction/
│   │       └── page.tsx
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── ProgramCard.tsx
│   │   ├── PartnerSpotlight.tsx
│   │   └── Gallery.tsx
│   ├── lib/
│   │   ├── content.ts            # Content loader (JSON files)
│   │   └── utils.ts
│   └── styles/
│       └── globals.css
├── public/
│   ├── images/
│   ├── icons/
│   ├── sitemap.xml
│   └── robots.txt
├── content/                      # JSON content files (headless CMS replacement)
│   ├── programs.json
│   ├── partners.json
│   ├── team.json
│   └── construction.json
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
├── firebase.json                 # Firebase Hosting config
└── .github/
    └── workflows/
        └── deploy.yml            # CI/CD for Firebase deployment
```

---

## 4. Phase-by-Phase Plan

### Phase 1: Discovery & Analysis (Week 1)

**Goals**:
- Receive and analyze WordPress HTML export
- Understand current content structure
- Identify missing content (construction photos, team bios)
- Set up project infrastructure

**Tasks**:
- [ ] Receive WordPress HTML files from client website
- [ ] Create project structure (`coreitex-website/`)
- [ ] Analyze HTML structure and extract content
- [ ] Document current pages and content hierarchy
- [ ] Identify gaps (missing images, bios, etc.)
- [ ] Set up GitHub repository (private)
- [ ] Initialize Next.js 15 project with TypeScript
- [ ] Configure Tailwind CSS v4
- [ ] Create initial ADRs (Architecture Decision Records)

**Deliverables**:
- Content inventory spreadsheet
- Gap analysis document
- GitHub repository initialized
- PRD and PLAN documents

---

### Phase 2: Design & Mockups (Week 2)

**Goals**:
- Create 3 homepage mockup variants
- Deploy mockups to staging Firebase
- Get client approval

**Tasks**:
- [ ] Extract color scheme and typography from Jubilee Center reference
- [ ] Design 3 homepage variants:
  - [ ] Variant A: Minimalist, imagery-focused
  - [ ] Variant B: Content-rich, card-based
  - [ ] Variant C: Balanced, hybrid approach
- [ ] Implement mockups in Next.js (homepage only)
- [ ] Set up Firebase staging project
- [ ] Deploy mockups to staging URL
- [ ] Share staging URL with client via Email
- [ ] Collect feedback and iterate
- [ ] Finalize design direction

**Deliverables**:
- 3 live mockup previews
- Staging URL for client review
- Final design specification

---

### Phase 3: Development (Weeks 3-5)

#### Week 3: Core Pages & Components

**Tasks**:
- [ ] Set up layout (Navbar + Footer)
- [ ] Create reusable components:
  - [ ] Hero component
  - [ ] ProgramCard component
  - [ ] PartnerSpotlight component
  - [ ] Gallery component
  - [ ] ContactForm component
- [ ] Build Homepage (`/`)
- [ ] Build About page (`/about`)
- [ ] Build Programs page (`/programs`)
- [ ] Build Get Involved page (`/get-involved`)

#### Week 4: Remaining Pages & Content

**Tasks**:
- [ ] Build Contact page (`/contact`)
- [ ] Build Construction Progress page (`/construction`)
- [ ] Create JSON content files:
  - [ ] `content/programs.json`
  - [ ] `content/partners.json`
  - [ ] `content/team.json`
  - [ ] `content/construction.json`
- [ ] Migrate all content from WordPress
- [ ] Optimize images (compress, convert to WebP)
- [ ] Implement responsive design for all pages
- [ ] Add smooth scroll and animations

#### Week 5: SEO & Optimization

**Tasks**:
- [ ] Implement metadata API for all pages (title, description, OG)
- [ ] Add structured data (Organization, LocalBusiness)
- [ ] Create XML sitemap (`public/sitemap.xml`)
- [ ] Create robots.txt
- [ ] Optimize images (next/image, lazy loading)
- [ ] Minify CSS/JS
- [ ] Run Lighthouse audits (target >90 scores)
- [ ] Fix accessibility issues (WCAG 2.1 AA)
- [ ] Set up Google Analytics (if client provides tracking ID)

**Deliverables**:
- All 6 pages built and responsive
- Content migrated and organized
- SEO-optimized (meta tags, structured data, sitemap)
- Lighthouse scores >90 (Performance, Accessibility, SEO)

---

### Phase 4: Testing & QA (Week 6)

**Goals**:
- Comprehensive testing across devices/browsers
- Bug fixes and refinement
- Client review and final approval

**Tasks**:
- [ ] Test on mobile devices (iOS, Android)
- [ ] Test on desktop browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test form submissions (static form handling)
- [ ] Test all navigation links
- [ ] Check for broken images
- [ ] Verify SEO meta tags
- [ ] Run Playwright E2E tests (if needed)
- [ ] Fix identified bugs
- [ ] Deploy to staging for final review
- [ ] Client UAT (User Acceptance Testing)
- [ ] Final iterations based on feedback

**Deliverables**:
- Test report (all tests passing)
- Bug fixes documented
- Final staging deployment
- Client approval

---

### Phase 5: Deployment & Handover (Week 7)

**Goals**:
- Deploy to production Firebase
- Configure custom domain
- Document maintenance procedures
- Train client (if needed)

**Tasks**:
- [ ] Create Firebase production project
- [ ] Configure custom domain (`coreitex.com`)
- [ ] Set up DNS records (A/CNAME)
- [ ] Configure CI/CD (GitHub Actions)
- [ ] Deploy to production
- [ ] Verify SSL certificate
- [ ] Test live site
- [ ] Create maintenance documentation:
  - [ ] How to update content (JSON files)
  - [ ] How to deploy changes
  - [ ] How to add new pages
  - [ ] SEO best practices
- [ ] Set up Google Business Profile (At additional cost)
- [ ] Submit sitemap to Google Search Console
- [ ] Handover to client

**Deliverables**:
- Live production site (`https://coreitex.com`)
- Deployment documentation
- Maintenance guide
- GitHub repository access
- Retainer agreement activated

---

## 5. Content Strategy (Firebase Spark Plan)

### Challenge: No Database on Spark Plan

**Solution**: JSON/Markdown files as "headless CMS"

**Content Structure**:
```json
// content/programs.json
{
  "programs": [
    {
      "id": "medical-services",
      "title": "Medical Services",
      "description": "Comprehensive medical care for rural communities.",
      "icon": "stethoscope",
      "image": "/images/medical.jpg"
    },
    // ... 5 more programs
  ]
}
```

**Benefits**:
- ✅ Free (no database costs)
- ✅ Version control (Git)
- ✅ Easy to edit (text files)
- ✅ Fast (no API calls)
- ✅ SEO-friendly (static content)

---

## 6. SEO Strategy

### Local SEO Focus

**Keywords**:
- "COREI™ multi-purpose complex"
- "rural community center East Texas"
- "veteran services Mount Enterprise TX"
- "childcare after-school programs East Texas"
- "community center Henderson TX"

**Local SEO Tactics**:
- Google Business Profile optimization
- NAP consistency (Name, Address, Phone)
- Local schema markup (LocalBusiness)
- Location-based landing pages (if needed)
- Backlinks from local organizations

### Technical SEO

- Meta tags (title, description, OG, Twitter)
- Structured data (Organization, NonProfit, LocalBusiness)
- XML sitemap
- Robots.txt
- Semantic HTML
- Fast loading (image optimization, code splitting)
- Mobile-first responsive design

---

## 7. Firebase Deployment Configuration

### firebase.json

```json
{
  "hosting": {
    "public": "out",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

### Build Command

```bash
# Build Next.js static export
next build

# Deploy to Firebase
firebase deploy --only hosting
```

### CI/CD (GitHub Actions)

```yaml
name: Deploy to Firebase
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm ci
      - run: npm run build
      - run: npx firebase-tools deploy --only hosting --token ${{ secrets.FIREBASE_TOKEN }}
```

---

## 8. Retainer Deliverables

### Monthly

- Content updates (text, images, programs) 1 per month plus email triggered automation
- SEO audit and optimization, once per month
- Performance monitoring (Lighthouse, Analytics)
- Bug fixes
- Dependency updates

### Quarterly

- New feature suggestions
- Content strategy review

### Not Included

- Major redesigns
- New feature development (separate scope)
- Third-party integrations (paid services)

---

## 9. Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Missing construction/team photos | Medium | Use placeholder images, client provides later |
| Firebase Spark plan limits exceeded | Low | Monitor bandwidth, optimize images, webpage size |
| Client requests database features | Medium | Explain Spark plan limits, suggest upgrade |

---

## 10. Success Criteria

- ✅ All 6 pages migrated and functional
- ✅ Lighthouse scores >90 (Performance, Accessibility, SEO)
- ✅ Mobile-responsive design
- ✅ SEO-optimized (meta tags, structured data, sitemap)
- ✅ Fast load times (<3s LCP)
- ✅ Client approval of design
- ✅ Successful production deployment
- ✅ Retainer agreement activated

---

## 11. Next Steps

**Immediate (This Week)**:
1. I analyze files and create content inventory
3. Set up GitHub repository and Next.js project

**Week 2**:
1. Create 3 homepage mockups
2. Deploy to staging hosting
3. Client reviews and selects direction

**Weeks 3-5**:
1. Full development and content migration
2. SEO optimization
3. Testing and QA

**Week 6**:
1. Production deployment
2. DNS configuration
3. Handover and retainer activation

---

**Document Status**: Draft v1.0
**Last Updated**: 2026-07-21
**Author**: AI_Claw
