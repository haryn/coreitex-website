# COREI™ Website Modernization

> A modern website for **COREI™** (Community One Resources Initiatives Corporation) — bringing urban innovation to rural America through a state-of-the-art multi-purpose complex in East Texas.

## Project Status

- **Current Active Production**: Prototype 2 (`prototype2/`) HTML5/CSS3/Vanilla JS + Lenis + GSAP + Three.js with glassmorphism design system.
- **Production Target**: Firebase Hosting (Project: `corei-org`) → Domain: `https://coreitex.org`.
- **Current Milestone**: Direct MP4 Construction Scroll Scrubbing, Interactive Three.js 3D Complex, Dynamic Lightbox Reordering, Schema.org 501(c)(3) Structured Data, GA4 (`G-0BYTZ3MC9L`), Client Portal Reports & Invoicing, and GitHub Remote Sync (`ebd4715`).
- **Firebase Live URL**: [https://corei-org.web.app/](https://corei-org.web.app/)
- **Staging URL**: `https://rising-lasso-t9ge.here.now/`
- **Client Portal Staging**: `https://floral-quail-fty4.here.now/`
- **GitHub Repository**: [https://github.com/haryn/coreitex-website](https://github.com/haryn/coreitex-website)

---

## Documentation

All project documentation is maintained inside the [`docs/`](./docs) directory:

### Core Documentation
- **[changeLog.md](./docs/changeLog.md)** — Detailed historical records, design milestones, and asset optimizations.
- **[COREI-WEBSITE-MIGRATION-REPORT-AND-INVOICE.md](./docs/COREI-WEBSITE-MIGRATION-REPORT-AND-INVOICE.md)** — Comprehensive migration report, code reduction metrics, and formal $800 itemized invoice.
- **[PRD.md](./docs/PRD.md)** — Product Requirements Document.
- **[PLAN.md](./docs/PLAN.md)** — Multi-phase migration plan.
- **[SEO-OPTIMIZATION-PLAN.md](./docs/SEO-OPTIMIZATION-PLAN.md)** — Monthly SEO retainer strategy.
- **[CONTACT-FORM-SOLUTION.md](./docs/CONTACT-FORM-SOLUTION.md)** — Google Forms stealth backend + Gmail workflow.
- **[3D-INTERACTION-PRD.md](./docs/3D-INTERACTION-PRD.md)** — Interactive 3D building showcase and Three.js implementation.
- **[COMPETITOR-ANALYSIS.md](./docs/COMPETITOR-ANALYSIS.md)** — East Texas market landscape.
- **[SETUP.md](./docs/SETUP.md)** — Project setup status and baseline references.
- **[ASTRYX-COMPONENTS.md](./docs/ASTRYX-COMPONENTS.md)** — Available Astryx components.

### Architecture Decision Records (ADRs)
- **[0001-tech-stack.md](./docs/ADR/0001-tech-stack.md)** — Tech stack selection & static architecture.
- **[0002-content-strategy.md](./docs/ADR/0002-content-strategy.md)** — Content strategy & headless WordPress migration.
- **[0003-seo-strategy.md](./docs/ADR/0003-seo-strategy.md)** — Local SEO strategy for East Texas.
- **[0004-astryx-design-system.md](./docs/ADR/0004-astryx-design-system.md)** — Component library choice.

---

## Project Structure

```
coreitex-website/
├── prototype2/             # Active Modernized Site (HTML5/CSS/Vanilla JS)
│   ├── images/             # Consolidated WebP & SVG assets (hero, programs, complex)
│   │   └── construction/   # Web-optimized hardware-accelerated video (construction.mp4)
│   ├── css/                # Centralized glassmorphism design system (styles.css)
│   ├── index.html          # Modernized Homepage with GSAP video scroll scrub & lightbox
│   ├── 3d-complex.html     # Interactive Three.js 3D simulation with living ambience
│   ├── what-we-do.html     # 7 Program Silos with client WebP graphics
│   ├── about.html          # Mission, Vision, Org Chart (13 pos), Impact Roadmap, Goals
│   ├── contact.html        # Contact Form with stealth Google Forms backend
│   ├── get-involved.html   # Volunteer & community engagement
│   └── ways-to-give.html   # Donations & non-profit contributions
├── client-portal/          # Client Dashboard, Reports & Invoicing
│   ├── index.html          # Executive Client Portal & Telemetry Hub
│   ├── invoice.html        # Itemized Website Migration Invoice ($800.00)
│   ├── invoice-september.html # September Retainer Invoice ($50.00)
│   └── seo-report.html     # Executive SEO Audit & 100+ Live Hits Telemetry Report
├── docs/                   # Complete project documentation & changeLog.md
│   ├── ADR/                # Architecture Decision Records
│   └── changeLog.md        # Comprehensive project change log
├── app/                    # Next.js 16 App Router (Target Production Scaffold)
├── public/                 # Static public assets
└── firebase.json           # Firebase Hosting configuration & immutable cache headers
```

---

## Tech Stack & Tooling

| Layer | Technology |
|---|---|
| **Active Prototype** | HTML5, Modern Vanilla CSS, Lenis Smooth Scroll, GSAP, SVG |
| **Asset Pipeline** | Optimized WebP (2K max resolution), SVG icons, Python Pillow automation |
| **Target Framework** | Next.js 16 (App Router), TypeScript, Tailwind CSS v4 |
| **Component System** | Astryx Design System |
| **Hosting** | here.now (Preview Staging) / Firebase Hosting (Production) |

---

## Quick Start (Prototype 2 Local Preview)

```powershell
# Serve prototype2 locally
python -m http.server 8088 --directory prototype2

# Open in browser:
# http://localhost:8088/index.html
# http://localhost:8088/what-we-do.html
# http://localhost:8088/about.html
```

---

## License

MIT — COREI™ (Community One Resources Initiatives Corporation)