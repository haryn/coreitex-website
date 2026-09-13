# Agent Guidelines for COREI™ Website Modernization

This document provides operational directives, design standards, and technical guidelines for AI agents working within `_client-work/coreitex-website`.

---

## 🎯 Project Overview & Scope
- **Project**: Modern website and digital platform for COREI™ (Community One Resources Initiatives Corporation) — a 501(c)(3) bringing urban innovation to rural East Texas.
- **Active Codebase**: `prototype2/` — high-performance static prototype utilizing semantic HTML5, Vanilla CSS glassmorphism, Lenis smooth scrolling, and GSAP animations.
- **Target Production Stack**: Next.js 16 (App Router), TypeScript, Tailwind CSS v4, Astryx Design System, Firebase Hosting.
- **Staging Deployment**: `https://rising-lasso-t9ge.here.now/`

---

## 📋 Operational Directives (MANDATORY)

1. **Project Scope Discipline**:
   - Keep all documentation updates scoped to this project directory (`_client-work/coreitex-website`).
   - Maintain historical progress and milestone records in [`docs/changeLog.md`](./docs/changeLog.md).
   - Keep project overview and structure up to date in [`README.md`](./README.md).

2. **Asset Management & Performance Rules**:
   - All active web graphics **must** reside in `prototype2/images/`. Do not create subdirectories for page-specific assets unless structured (e.g., `prototype2/images/frames/`).
   - Convert all raster images to `.webp` format.
   - **Resolution Cap**: Max resolution must not exceed **2K** (`2048px` on longest edge) to maintain sub-second page loads.
   - Use SVG for logos, brand marks, and icons.

3. **Design & Aesthetic Standards**:
   - **Color Palette**: Curated dark palette with deep navy backgrounds (`#021530`, `#041e42`), sky blue (`#43a7ed`), emerald teal (`#0c936d`), and vibrant lime accents (`#a7e562`).
   - **Glassmorphism**: Backdrop blur filters (`blur(12px)` to `blur(20px)`), translucent white/blue borders (`rgba(255,255,255,0.1)`), and soft drop shadows.
   - **Responsive & Uncropped Layouts**: Avoid hardcoded pixel height caps on complex imagery that cause unwanted cropping. Maintain natural aspect ratios with responsive widths.
   - **Micro-Interactions**: Hover elevation, subtle border glows, and Lenis smooth momentum scrolling.

---

## 📁 Key Files & Directories

- `prototype2/`: Active modern website pages (`index.html`, `what-we-do.html`, `about.html`, `contact.html`, `get-involved.html`, `ways-to-give.html`).
- `prototype2/images/`: Consolidated and optimized WebP / SVG asset library.
- `Assets/`: Raw source client media, brand PDFs (`board.pdf`), and credentials.
- `docs/changeLog.md`: Project-specific change log.
- `docs/PRD.md` & `docs/PLAN.md`: Product requirements and migration roadmap.

---
## Google Apps
### Calendar
https://calendar.google.com/calendar/u/1?cid=Y19jMGE5M2UzZjA3NDk5ODhiMjNiZDc5MDM3OTlhODc5ZTdjNmI5ZTJlMDkyNDY5MTYxMWE3NDlhMzA5MzA1Y2U1QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20

<iframe src="https://calendar.google.com/calendar/embed?src=c_c0a93e3f0749988b23bd7903799a879e7c6b9e2e0924691611a749a309305ce5%40group.calendar.google.com&ctz=America%2FChicago" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>

## Google Forms
https://forms.gle/Z7zj84cvyQCYGowb9
https://docs.google.com/forms/d/e/1FAIpQLScj3GRp-Dgj3FEulKTvwKBnOUL3zdHFFGeFmBvZIiQ15G9zTg/viewform

## ⚛️ Target Framework (Next.js 16 + Astryx) Rules

<!-- BEGIN:nextjs-agent-rules -->
### Next.js 16 Conventions
This version has breaking changes — APIs, conventions, and file structure may differ from older versions. Read the relevant guide in `node_modules/next/dist/docs/` before writing Next.js code.
<!-- END:nextjs-agent-rules -->

<!-- ASTRYX:START -->
### Astryx Component System
Astryx v0.1.7 · 150 components
CLI: run every command as `npx astryx <cmd>`.

RULES:
- No raw `<div>` for layout — use AppShell, Layout, and LayoutPanel.
- Dense data = rows (Table, List/Item) edge-to-edge — never Card-wrapped list items.
- Status → StatusDot/Token; Badge only for counts and enumerated states.
- Tokens for every value (`astryx docs tokens`). Brand/accent via `astryx theme` — never override `--color-*` in `:root`.
<!-- ASTRYX:END -->
