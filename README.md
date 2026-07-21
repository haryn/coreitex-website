# COREI™ Website Migration

> A modern Next.js 16 website for COREI™ (Community One Resources Initiatives Corporation) — bringing urban innovation to rural America through a multi-purpose complex in East Texas.

## Project Status

- **Phase**: Planning & Documentation Complete
- **Target**: WordPress → Next.js 16 + Firebase Hosting (Spark Plan)
- **Stack**: Next.js 16, Astryx Design System, TypeScript, Tailwind CSS v4
- **Deployment**: Firebase Hosting

## Documentation

All project documentation is in the [`docs/`](./docs) directory:

- **[PRD.md](./docs/PRD.md)** — Product Requirements Document
- **[PLAN.md](./docs/PLAN.md)** — 7-week migration plan
- **[SEO-OPTIMIZATION-PLAN.md](./docs/SEO-OPTIMIZATION-PLAN.md)** — Monthly SEO retainer strategy
- **[CONTACT-FORM-SOLUTION.md](./docs/CONTACT-FORM-SOLUTION.md)** — Google Forms + Gmail workflow
- **[3D-INTERACTION-PRD.md](./docs/3D-INTERACTION-PRD.md)** — Interactive 3D building showcase upsell proposal
- **[COMPETITOR-ANALYSIS.md](./docs/COMPETITOR-ANALYSIS.md)** — East Texas market landscape
- **[SETUP.md](./docs/SETUP.md)** — Project setup status
- **[ASTRYX-COMPONENTS.md](./docs/ASTRYX-COMPONENTS.md)** — Available Astryx components

### Architecture Decision Records (ADRs)

- **[0001-tech-stack.md](./docs/ADR/0001-tech-stack.md)** — Next.js 16 + Tailwind v4 selection
- **[0002-content-strategy.md](./docs/ADR/0002-content-strategy.md)** — JSON file content management
- **[0003-seo-strategy.md](./docs/ADR/0003-seo-strategy.md)** — Local SEO strategy for East Texas
- **[0004-astryx-design-system.md](./docs/ADR/0004-astryx-design-system.md)** — Component library choice

## Tech Stack

| Component | Technology |
|-----------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Components | [Astryx](https://astryx.design) Design System |
| Deployment | Firebase Hosting (Spark Plan) |
| Content Management | JSON files (Git versioned) |

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Deploy to Firebase
npx firebase deploy --only hosting
```

## Project Structure

```
coreitex-website/
├── app/                    # Next.js App Router
├── content/                # JSON content files
├── docs/                   # Project documentation
├── public/                 # Static assets
└── firebase.json           # Firebase configuration
```

## Timeline

| Week | Phase |
|------|-------|
| Week 1 | Discovery & Analysis |
| Week 2 | Design & Mockups |
| Week 3-5 | Development |
| Week 6 | Testing & QA |
| Week 7 | Deployment & Handover |

## License

MIT — COREI™ (Community One Resources Initiatives Corporation)