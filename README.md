# COREI™ Website Modernization

> A modern website for **COREI™** (Community One Resources Initiatives Corporation) — bringing urban innovation to rural America through a state-of-the-art multi-purpose complex in East Texas.

## Project Status

- **Current Active Development**: Prototype 2 (`prototype2/`) HTML5/CSS3/Vanilla JS + Lenis + GSAP with glassmorphism design system.
- **Production Target**: Firebase Hosting (Project: `corei-org`) → Domain: `https://coreitex.org`.
- **Current Milestone**: Production SEO Modernization, 501(c)(3) Non-Profit Schema, GA4 (`G-0BYTZ3MC9L`), Multi-Resolution Favicons, and Firebase Hosting Deployed.
- **Firebase Live URL**: [https://corei-org.web.app/](https://corei-org.web.app/)
- **Staging URL**: `https://rising-lasso-t9ge.here.now/`

---

## Documentation

All project documentation is maintained inside the [`docs/`](./docs) directory:

### Core Documentation
- **[changeLog.md](./docs/changeLog.md)** — Detailed historical records, design milestones, and asset optimizations.
- **[PRD.md](./docs/PRD.md)** — Product Requirements Document.
- **[PLAN.md](./docs/PLAN.md)** — Multi-phase migration plan.
- **[SEO-OPTIMIZATION-PLAN.md](./docs/SEO-OPTIMIZATION-PLAN.md)** — Monthly SEO retainer strategy.
- **[CONTACT-FORM-SOLUTION.md](./docs/CONTACT-FORM-SOLUTION.md)** — Google Forms + Gmail workflow.
- **[3D-INTERACTION-PRD.md](./docs/3D-INTERACTION-PRD.md)** — Interactive 3D building showcase proposal.
- **[COMPETITOR-ANALYSIS.md](./docs/COMPETITOR-ANALYSIS.md)** — East Texas market landscape.
- **[SETUP.md](./docs/SETUP.md)** — Project setup status.
- **[ASTRYX-COMPONENTS.md](./docs/ASTRYX-COMPONENTS.md)** — Available Astryx components.

### Architecture Decision Records (ADRs)
- **[0001-tech-stack.md](./docs/ADR/0001-tech-stack.md)** — Next.js 16 + Tailwind v4 selection.
- **[0002-content-strategy.md](./docs/ADR/0002-content-strategy.md)** — JSON file content management.
- **[0003-seo-strategy.md](./docs/ADR/0003-seo-strategy.md)** — Local SEO strategy for East Texas.
- **[0004-astryx-design-system.md](./docs/ADR/0004-astryx-design-system.md)** — Component library choice.

---

## Project Structure

```
coreitex-website/
├── prototype2/             # Active Modernized Prototype (HTML5/CSS/Vanilla JS)
│   ├── images/             # Consolidated WebP & SVG assets (hero, programs, complex, frames)
│   │   └── frames/         # Architectural wireframe & elevation renders (frame_001 to frame_038)
│   ├── index.html          # Modernized Homepage
│   ├── what-we-do.html     # 7 Program Silos with client WebP graphics
│   ├── about.html          # Mission, Vision, Org Chart (11 pos), Impact Roadmap, Goals
│   ├── contact.html        # Contact Form & Google Form integration
│   ├── get-involved.html   # Volunteer & community engagement
│   └── ways-to-give.html   # Donations & non-profit contributions
├── Assets/                 # Client raw source media (PDFs, high-res renders, credentials)
├── docs/                   # Complete project documentation & changeLog.md
│   ├── ADR/                # Architecture Decision Records
│   └── changeLog.md        # Project change log
├── app/                    # Next.js 16 App Router (Target Production)
├── content/                # JSON content files
├── public/                 # Static public assets
└── firebase.json           # Firebase configuration
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