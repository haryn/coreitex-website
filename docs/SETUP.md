# COREI™ Website Migration - Project Setup

**Project**: COREI™ Website Migration
**Status**: Setup Complete
**Date**: 2026-07-21

---

## ✅ Completed Setup

### Project Structure Created

```
coreitex-website/
├── docs/
│   ├── PRD.md                    # Product Requirements Document
│   ├── PLAN.md                   # Project Plan
│   └── ADR/                      # Architecture Decision Records
│       ├── 0001-tech-stack.md
│       ├── 0002-content-strategy.md
│       └── 0003-seo-strategy.md
├── designs/                      # Design mockups (placeholder)
└── mockups/                      # Mockup previews (placeholder)
```

### Documentation Created

1. **PRD.md** (8,842 bytes)
   - Executive summary
   - Current site analysis
   - Target audience
   - Design requirements
   - Technical requirements (Next.js 15 + Tailwind v4)
   - Firebase Spark Plan constraints
   - Required pages (6 pages)
   - SEO requirements
   - Content requirements
   - Deployment strategy
   - Mockup & approval process
   - Success metrics
   - Retainer deliverables
   - Timeline (6 weeks)

2. **PLAN.md** (11,784 bytes)
   - Project overview
   - Tech stack decision
   - Project structure
   - Phase-by-phase plan (7 phases, 7 weeks)
   - Content strategy (JSON files)
   - SEO strategy (local focus)
   - Firebase deployment configuration
   - Retainer deliverables
   - Risks & mitigations
   - Success criteria
   - Next steps

3. **ADR/0001-tech-stack.md** (3,192 bytes)
   - Decision: Next.js 15 + Tailwind CSS v4 + TypeScript
   - Options considered (Next.js, Vite, Astro)
   - Rationale for Next.js selection
   - Implementation details
   - Consequences

4. **ADR/0002-content-strategy.md** (6,007 bytes)
   - Decision: JSON files for content management
   - Options considered (JSON, Markdown, Headless CMS)
   - Rationale for JSON selection
   - Content structure (programs.json, partners.json, etc.)
   - Content loading strategy
   - Updating content workflow
   - Validation approach

5. **ADR/0003-seo-strategy.md** (9,477 bytes)
   - Decision: Comprehensive local SEO strategy
   - Target keywords (primary, secondary, long-tail)
   - Technical SEO implementation
   - Local SEO strategy (Google Business Profile, citations)
   - On-page SEO
   - Performance optimization
   - Measurement & tracking

---

## 🎯 Tech Stack Confirmed

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Deployment**: Firebase Hosting (Spark Plan)
- **Content Management**: JSON files (Git versioned)
- **CI/CD**: GitHub Actions
- **SEO**: Next.js Metadata API + Structured Data

---

## 📋 Ready for Next Steps

### Waiting For:

1. **WordPress HTML Export Files**
   - Client to provide rendered HTML files from coreitex.com
   - Send via Discord channel

2. **Construction Photos**
   - Client to provide photos of construction progress
   - Needed for Construction Progress page

3. **Team Member Bios** (Optional)
   - If client wants team section on About page

### Next Actions (When HTML Files Received):

1. **Content Analysis**
   - Parse HTML files
   - Extract all content
   - Create content inventory
   - Identify gaps

2. **Mockup Creation**
   - Create 3 homepage variants
   - Deploy to staging Firebase
   - Share with client for approval

3. **Project Initialization**
   - Initialize Next.js 15 project
   - Configure Tailwind CSS v4
   - Set up GitHub repository
   - Configure Firebase deployment

---

## 🔗 Key References

- **Current Site**: https://coreitex.com/
- **Design Inspiration**: https://www.jubileecenter.org/donate/
- **Project Folder**: `/home/ubuntu/.openclaw/workspace/coreitex-website/`
- **Docs Folder**: `/home/ubuntu/.openclaw/workspace/coreitex-website/docs/`

---

## 📊 Timeline Overview

| Week | Phase | Status |
|------|-------|--------|
| Week 1 | Discovery & Analysis | ⏳ Waiting for HTML files |
| Week 2 | Design & Mockups | ⏳ Pending |
| Week 3-5 | Development | ⏳ Pending |
| Week 6 | Testing & QA | ⏳ Pending |
| Week 7 | Deployment & Handover | ⏳ Pending |

---

## 💬 Communication Channel

All project updates and approvals will be handled through this Discord channel (#coreitex).

---

**Document Status**: Setup Complete
**Last Updated**: 2026-07-21
**Author**: AI_Claw