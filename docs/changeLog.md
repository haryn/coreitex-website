# COREI™ Website - Change Log

This file records all architectural decisions, design evolutions, asset optimizations, and implementation milestones for the COREI™ website project (`_client-work/coreitex-website`).

---

## [2026-09-13] - Live Stealth Google Forms Contact Integration (`prototype2/contact.html`)

### Milestone: Stealth Google Forms Backend & Custom UI
- **Zero-Cost Serverless Backend**: Connected the `prototype2/contact.html` contact form directly to the live Google Form (`1FAIpQLScj3GRp-Dgj3FEulKTvwKBnOUL3zdHFFGeFmBvZIiQ15G9zTg/formResponse`) via asynchronous `fetch` with `mode: 'no-cors'`.
- **Field Parameter Mapping**:
  - **Full Name**: `entry.2005620554` (Required)
  - **Email Address**: `emailAddress` (Responder Input / Google collector)
  - **Phone Number**: `entry.1166974658` (Optional)
  - **Message / Comments**: `entry.839337160` (Required)
  - **Subscribe Checkbox**: `entry.532123593` (Submits `"Yes"` when checked)
- **Anti-Spam & Reliability Architecture**:
  - **Honeypot Trap**: Invisible field `b_contact_website_hp` silently intercepts and drops automated bot spam without submitting garbage rows to the client's Google Sheet.
  - **Dual-Layer Submission**: Modern asynchronous `fetch` submission with invisible `iframe` fallback ensuring delivery even in restricted browser environments.
- **Brand-Integrated UI & Feedback**:
  - **Interactive States**: Animated submit button with loading state (`Sending Message...`).
  - **Glassmorphic Success Card**: Shows a high-end confirmation card with glowing lime checkmark and "Send Another Message" reset button.
  - **Graceful Error Handling**: Non-intrusive alert box with direct mailto fallback link (`info@coreitex.com`).

---

## [2026-09-12] - 3D Complex Master Plan Rebuild, Asset Generation, Lightbox Gallery & CSS Centralization

### Milestone 1: Blueprint-Accurate Site Layout (`prototype2/3d-complex.html`)
- **Blueprint Source**: Rebuilt the three.js scene to follow `images/complex-blueprint.webp` (CORE Community Complex — Overhead Site Plan) building shapes, names, and positions.
- **Buildings**: CORE Administration Building (NW, bar + south wing), Medical Clinic (W), Integrated Clinic & Veteran Center (N-NE, largest clinic volume), Expanded Market Plaza (E), Community Food Market & Eatery (far E), and Childcare Center (S, custom angular/faceted extruded footprint with red/blue/yellow accent panels and dual entry canopies).
- **Grounds**: Community Plaza with central fountain + radial spine paths, Campus Quad lawn, One Park Garden (SW concentric rings + flower bed), Butterfly Garden (SE butterfly-shaped beds), Community Garden Plots (NE raised beds + shed + rain barrels), forested pond (NE), three-color playground zone south of Childcare, and COREI marquee sign with canvas-texture panel on the east entry.
- **Circulation**: New west entry drive, perimeter loop road, spur roads into six parking lots, and spine-path walkways radiating from Community Plaza; tree keep-out zones prevent trunks spawning on water, tower compound, gardens, and the entry corridor.

### Milestone 2: 5G Cell Tower Complex
- **Exposed-Lattice Design** (`images/corei-complex.webp` reference): Remotely located in the NW woods — slim tapered steel mast with bracing rings, work platform carrying three sector antenna panels + microwave dish, and small faux pine branch clusters attached along the mast and around the antenna head (the intended camouflage), plus fenced equipment compound with shelter and a pulsing red aircraft beacon.
- **Pin & Info Card**: 📡 hotspot pin at the tower top opens a modal — "Bringing Urban Innovation to Rural America" badge, connectivity/telehealth/telelearning synopsis, `hero-what-we-do.webp` imagery, and a CTA to what-we-do.html.

### Milestone 3: Popup Pins Rewired to what-we-do.html
- **10 Hotspot Pins**: Each blueprint feature opens a modal with matching what-we-do silo imagery and copy — Administration → Community & Social Responsibility, Medical Clinic → Medical Services (Crossroads Family Care), Integrated Clinic & Veteran Center → Veterans Services, Market Plaza/Food Market/Plaza → economic & community growth angles, Childcare → Childcare & After-School, One Park Garden → Sports & Recreation, Butterfly Garden → Education & Youth, Garden Plots → Health & Fitness.
- **Nav Bar**: Rebuilt to the six blueprint buildings (Administration, Medical Clinic, Clinic & Veterans, Market Plaza, Food Market, Childcare) + Overview reset; gardens and plaza accessible via scene pins.
- **Asset Fix**: Replaced broken default modal image reference (`medical-services.webp`, not present) with `healthcare.webp`.

### Milestone 4: Ambience Upgrade (same bright midday look, richer life)
- Added drifting low-poly cloud field, circling bird flocks with flapping wings, fluttering butterflies over the Butterfly Garden, animated fountain jet, and hazy distant hills for horizon depth; kept the existing two-tone building kit, palette, glassmorphism HUD, and camera/pin interaction system.

### Milestone 5: 3D Complex Info-Cards, Realistic WebP Generation & Low-End Performance Suite
- **API Model Evaluation**: Tested Google AI Studio keys (`FREE-GEMINI_API_KEY`, `FREE2_GEMINI_API_KEY`) across image generation models (`nano-banana-pro-preview`, `gemini-3-pro-image`, `gemini-2.5-flash-image`) with Pollinations fallback routing.
- **Photorealistic Facility Graphics Generated & Converted to WebP**:
  - **Butterfly Garden**: `images/butterfly-garden.webp` — native East Texas blooming flora, monarch butterflies, stone paths, and educational signage.
  - **One Park Garden**: `images/one-park-garden.webp` — tranquil circular walking path, lush greenery, and outdoor seating.
  - **5G Cell Tower**: `images/cell-tower-5g.webp` — disguised monopine antenna blending into East Texas pineywoods.
  - **Community Garden Plots**: `images/community-garden-plots.webp` — raised planter beds, vegetable crops, and scenic pond backdrop.
  - **Expanded Market Plaza**: `images/expanded-market-plaza.webp` — open-air market plaza with white canopies, artisan stalls, and string lights.
  - **Community Food Market & Eatery**: `images/community-food-market.webp` — modern timber & glass food hub, fresh produce market, and cafe seating.
  - **Community Plaza**: Updated reference to canonical `images/education.webp`.
- **Interactive 3D Experience Enhancements (`prototype2/3d-complex.html`)**:
  - Updated `FACILITIES` dictionary with dedicated realistic WebP imagery for all 11 zones.
  - Extended bottom navigation bar HUD (`#nav-hud`) with quick-focus buttons for Community Plaza, One Park, Butterfly Garden, Garden Plots, and 5G Tower.
  - **Community Garden Plots 3D Overhaul**: Converted flat white circle into a raised 3D cylinder platform (0.5m elevation) with rich dark green surface (`0x1f4e1b`), perimeter retaining stone curb ring, transition entry steps, raised garden planter beds, crops, tool shed, and rain barrels.
  - **Childcare Center Facade Enrichment**: Added functional blue and orange playground entrance doors with dark frames, vision lites, handles, and protective entry canopies, alongside continuous upper dark gray ribbon windows and framed classroom picture window panels across both south and southwest walls (`V[4]->V[5]` & `V[5]->V[6]`).
- **Low-End Performance & Memory Optimization Suite**:
  - **Adaptive Hardware Detection & Fill-Rate Scaling**: Detects lower-end hardware (`hardwareConcurrency <= 4`, `deviceMemory <= 4`, mobile) to cap DPR at 1.0 (desktop capped at 1.35 instead of 2.0+), eliminating massive 4K/Retina fill-rate bottlenecks.
  - **Static Shadow Map Caching**: Disabled per-frame shadow map re-rasterization (`shadowMap.autoUpdate = false`) for static scene geometry, saving up to ~15ms GPU draw time per frame.
  - **Shadow Resolution & Memory Reduction**: Halved shadow map size to 2048 (1024 on low-end) with `normalBias: 0.04`, cutting shadow VRAM consumption by 75%–93% while maintaining crisp contact shadows.
  - **Material & Shader Simplification**: Swapped 50+ ambient cloud spheres from heavy PBR `MeshStandardMaterial` to lightweight `MeshBasicMaterial` and reduced sphere segment count.
  - **Garbage Collection (GC) Stutter Elimination**: Hoisted shared projection vector in `updatePins()` to eliminate 60 object allocations per second.
  - **Tab Visibility Lifecycle**: Suspends render loop via `visibilitychange` when tab is backgrounded, reducing power/CPU draw to zero.

### Milestone 6: Gallery Fullscreen Lightbox & WebP Asset Modernization (`prototype2/index.html`)
- **Interactive Fullscreen Resize Lightbox (`prototype2/index.html`)**:
  - Implemented high-performance, frosted glass lightbox overlay modal (`#gallery-lightbox`) activated on clicking any gallery image.
  - Hover cue with animated expand badge (`::after`) and luminous lime border glow for clear interactivity.
  - **Full Width / Zoom Toggle**: Dedicated button (`Z` shortcut or click image) to expand high-res master plans and site blueprints edge-to-edge with smooth pan/scroll inspection.
  - **Fluid Carousel Navigation**: Next (`→`) and Previous (`←`) glass controls, loop navigation across all 14 images, live photo counter (`x / 14`), and caption display.
  - **Accessibility & Touch Controls**: Keyboard navigation (`Escape`, `ArrowLeft`, `ArrowRight`, `Z`), background dismiss, and mobile touch swipe gestures (swipe left/right to navigate, swipe down to close).
  - **Lenis Scroll Integration**: Automatically pauses and resumes smooth page scrolling when the lightbox opens and closes.
- **Gallery Assets Optimization**: Converted high-resolution assets from `Assets/` to high-performance WebP (`phase2.webp`, `medical-center.webp`, `childcare-center.webp`, `veteran-and-plaza.webp`, `veteran-center.webp`, `community-plaza.webp`).
- **Gallery Grid Updates**:
  - Replaced "Site Progress - Groundwork" image with optimized `images/phase2.webp`.
  - Replaced "Recreation Center - Modern Facility" picture with `images/medical-center.webp`.
  - Added new gallery cards for Childcare Center (`childcare-center.webp`), Veteran Center & Plaza (`veteran-and-plaza.webp`), Veteran Center (`veteran-center.webp`), and Community Plaza (`community-plaza.webp`).
  - Balanced gallery grid layout for 14 items across 5 complete 3-column rows.

### Milestone 7: Centralized CSS Architecture, Image Deduplication & Giving Options WebP
- **Centralized CSS Architecture (`prototype2/css/styles.css`)**:
  - Consolidated and optimized styles across 6 HTML pages (`index.html`, `about.html`, `what-we-do.html`, `get-involved.html`, `ways-to-give.html`, `contact.html`) into a single external stylesheet, achieving 38%–45% HTML payload reduction per page.
  - Left `prototype2/3d-complex.html` intact with its dedicated 3D scene styles as specified.
  - Eliminated duplicate `:root` tokens, Lenis reset, navigation bars, buttons, containers, and card styling.
  - Added modular sections for Homepage (frame scroller, gallery lightbox, crossroads spotlight), About Us (leadership modal, roadmap, org tiers), What We Do (program cards), Ways to Give, and Contact forms.
- **Image Deduplication & Archiving (`Assets/archived_frames/`)**:
  - Moved 15 duplicate and orphan image files (`veteran-services.webp`, `site.webp`, `medical-services.webp`, `health-fitness.webp`, `sports-recreation.webp`, `community-social.webp`, `be-a-worker.webp`, `about-hero.webp`, `favicon.png`, `favicon.webp`, `hero.jpg`, `logo.webp`, `map.webp`, `new-hero.webp`, `rec-center.webp`) from `prototype2/images/` to `Assets/archived_frames/`.
  - Standardized all HTML source references on canonical images (`veteran.webp`, `site-plan.webp`, `medical.webp`, `business-community.webp`, `be-workers.webp`).
- **Giving Options WebP Background (`ways-to-give.html`)**:
  - Converted `Assets/background.png` (2.3 MB) into optimized WebP `prototype2/images/giving-background.webp` (167 KB, 92.7% reduction).
  - Styled `.section-giving-options` in `styles.css` with a high-contrast dark gradient scrim overlay for visual depth and readability.
- **Verification**: Verified zero 404 image references, perfect brace matching in CSS, and successful browser rendering.

---

## [2026-08-23] - Board Requested Updates: Navigation, 13-Member Org Structure & Contact Form Restoration

### Milestone 1: Global Navigation Bar & Brand Logo Enhancement
- **Navbar Dimensions & Padding**: Increased desktop padding to `1.75rem clamp(1.25rem, 4vw, 4rem)` and logo height to `58px` (scrolled `48px`, mobile `44px`) across all pages (`index.html`, `about.html`, `what-we-do.html`, `ways-to-give.html`, `get-involved.html`, `contact.html`).
- **Homepage Spotlight Button**: Updated nav button label in `index.html` from `Spotlight` to `Spotlight Partner`.

### Milestone 2: Leadership & Organizational Structure Overhaul (`about.html`)
- **Governance Realignment**: Removed legacy Detailed Leadership Portfolio section.
- **13-Member Organizational Hierarchy**: Overhauled the Organizational Structure into 3 distinct tiers representing all 13 positions per `Assets/board-v5.rtf`:
  - **Tier 1 (Executive Officers)**: Board Co-Presidents (George L. Walton, Darrell E. Walton), VP Strategic Operations & Risk Management (Franklin Todd Burton), Board Secretary (Shelia Jones), Board Treasurer.
  - **Tier 2 (Committee Chairs & Strategic Leads)**: Director of Real Estate & Facilities, Director of Fundraising & Strategic Partnerships, Director of Healthcare & Social Services.
  - **Tier 3 (At-Large Directors & SMEs)**: Director of Veteran & Community Outreach (Leonardo Gonzalez), Director of Youth & Educational Programs, Director of Digital Media & Technical Solutions (Haryn Murillo), SME Advisors.

### Milestone 3: Contact Page Form Restoration (`contact.html`)
- Restored complete form styling, input focus glows, custom checkboxes, and contact information hierarchy from verified baseline backup (`Assets/.backups/bu8-19/contact.html`).

---

## [2026-08-21] - Production SEO Modernization, Non-Profit JSON-LD Schema, GA4, & Firebase Hosting

### Milestone 1: Domain Migration & Comprehensive On-Page Metadata
- **Canonical Domain Switch**: Migrated canonical domain references to the new Firebase-hosted domain: `https://coreitex.org`.
- **Open Graph & Twitter Cards**: Injected complete social meta tag suites (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `og:site_name`, `twitter:card`, `twitter:image`, `twitter:title`, `twitter:description`) across all 7 pages (`index.html`, `about.html`, `what-we-do.html`, `get-involved.html`, `ways-to-give.html`, `contact.html`, and `3d-complex.html`).
- **Robots Directives & Geo/Locale**: Added `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />` and updated `<html lang="en-US">` on every page.

### Milestone 2: 501(c)(3) Non-Profit JSON-LD Structured Data
- **Organization & Non-Profit Schema**: Implemented complete Schema.org graph on `index.html` featuring `["NGO", "NonprofitOrganization", "CommunityCenter"]` with official EIN (`99-2927406`), 501(c)(3) status, geo-coordinates, East Texas service areas, and 7 program offerings.
- **Page-Specific Structured Data**:
  - `about.html`: `WebPage` + `BreadcrumbList` tied to Organization.
  - `what-we-do.html`: `WebPage` + `BreadcrumbList` + program catalogue.
  - `ways-to-give.html`: `WebPage` + `BreadcrumbList` + `DonateAction`.
  - `get-involved.html`: `WebPage` + `BreadcrumbList` + `JoinAction`.
  - `contact.html`: `ContactPage` + `BreadcrumbList` + `ContactPoint`.

### Milestone 3: Web App Manifest, Multi-Resolution Favicons, & Google Maps
- **Favicon Suite Generation**: Generated `favicon-16x16.png`, `favicon-32x32.png`, `favicon-192x192.png`, `favicon-512x512.png`, `apple-touch-icon.png` (180x180), and multi-layer `favicon.ico` via Python Pillow LANCZOS resampling.
- **PWA Web App Manifest**: Created `prototype2/manifest.json` defining standalone app behavior and brand themes.
- **Search Engine Discovery**: Created `prototype2/sitemap.xml` and `prototype2/robots.txt`.
- **Interactive Google Maps**: Integrated location embed for 11989 County Road 482 South, Mount Enterprise, TX on `contact.html`.

### Milestone 4: Firebase GA4 Integration & Hosting Deployment
- **Firebase Analytics**: Connected measurement ID `G-0BYTZ3MC9L` across all pages.
- **Firebase Configuration**: Configured `.firebaserc` (default: `corei-org`) and `firebase.json` with 301 redirects (`/about-corei/` -> `/about.html`, etc.) and immutable asset caching.

---

## [2026-08-20] - Prototype 2 Refinements, Mission Accordion, Org Structure Governance, & Staging Deployment

### Milestone 1: Brand Logo Color Restoration & Spotlight Navigation
- **Navbar Brand Logo Contrast**:
  - Restored vibrant multi-color identity on the navbar logo across all pages (`index.html`, `about.html`, `contact.html`, `get-involved.html`, `ways-to-give.html`, and `what-we-do.html`) by removing `brightness(0) invert(1)` filter.
  - Enhanced `images/COREI-02-01.svg` gradient color stops (bright azure `#4a9eff` to luminous sky blue `#8cd0ff`, brightened green/lime curves, crisp `#e0f2fe` tagline) for contrast on dark navy headers.
- **Homepage Spotlight Button**:
  - Added primary "Spotlight" CTA button adjacent to "Contact Us" on both desktop and mobile drawer navigation.
  - Connected button to `#partner-spotlight` with Lenis smooth-scrolling handler and $-70\text{px}$ offset.

### Milestone 2: `about.html` - Mission Accordion & Board Governance Structure
- **Our Mission 3-Pillar Interactive Accordion**:
  - Integrated the 3-pillar accordion into the "Our Mission" card (`.section-mission-trajectory`) with glassmorphic cards, glowing bullet indicators, animated toggle icons, and ARIA state management:
    1. *Focusing on Empowerment and Action:* (Active by default)
    2. *Focusing on Connection and Belonging:*
    3. *Focusing on Vision and Future:*
- **Organizational Structure & Leadership Portfolio Overhaul**:
  - Re-architected both Section 5 (Visual Tree) and Section 6 (Detailed Leadership Portfolio) to reflect the official 11 positions approved by the Board of Directors:
    - **Level 1 & 2 Executive Officers**: Board Co-President 1 (*George L. Walton*), Board Co-President 2 (*Darrell E. Walton*), VP Strategic Operations & Risk Management (*Franklin Todd Burton*), Board Secretary (*Shelia Jones*), Board Treasurer (*Open*).
    - **Level 3 Administration & Strategy Directorships**: Director of Real Estate & Facilities (*Darrell E. Walton*), Director of Fundraising & Strategic Partnerships (*Open*).
    - **Level 3 Operational Programs & Outreach Directorships**: Director of Healthcare & Social Services (*Open*), Director of Veteran & Community Outreach (*Leonardo Gonzalez*), Director of Youth & Educational Programs (*Open*), Director of Digital Media & Technical Solutions (*Haryn Murillo*).
  - Added status tags (`EXISTING` vs. `NEW ROLE`) and structured portfolio cards with verified governance responsibilities.

### Milestone 3: `get-involved.html` & `ways-to-give.html` Enhancements
- **`get-involved.html` Asset Updates**:
  - Converted `Assets/we-want-change.png` (2.25 MB) to high-efficiency WebP `images/we-want-change.webp` (164 KB, 93% size reduction).
  - Replaced first advocacy graphic with `we-want-change.webp` and second graphic with `partner-with-us.webp`.
  - Adjusted container aspect ratio on the **Strategic Collaboration / Partner with COREI™** section to `16:9` (`images/crossroads-partner.webp`), ensuring the complete Crossroads medical team is displayed without cropping.
- **`ways-to-give.html` PayPal & EIN Search Pre-Population**:
  - Upgraded all donation buttons to use the official vector PayPal double-P logo.
  - Added donation detail info pill: *"Use your Credit Card or Debit Card for donations through PayPal — no PayPal account required."*
  - Displayed **EIN # 99-2927406** with dedicated badge and integrated query parameter pre-population on the IRS 501(c)(3) verification links: `https://apps.irs.gov/app/eos/?einTerm=992927406`.

### Milestone 4: Live Staging Deployment
- **Deployment via `publish_herenow.js`**:
  - Automated deployment of 90 static assets to here.now hosting.
  - Live preview URL: [https://rising-lasso-t9ge.here.now/](https://rising-lasso-t9ge.here.now/) (Version: `01M0G61YTQ8J5EF9JK2YDXGY65`).
  - Verified 100% asset availability, smooth scrolling, and mobile responsiveness across all pages.

---

## [2026-08-19] - Prototype 2 Modernization: Asset Consolidation, What We Do, & About COREI Overhaul

### Milestone 1: Asset Directory Consolidation & Optimization
- **Unified Directory**: Consolidated all graphics from `prototype2/index/` into `prototype2/images/` and removed the redundant `index/` directory.
- **Path Synchronization**: Updated asset reference paths across all pages: `index.html`, `what-we-do.html`, `about.html`, `contact.html`, `get-involved.html`, and `ways-to-give.html`.
- **Client Asset WebP Conversion**: Processed and converted raw assets from `Assets/` into optimized WebP formats:
  - `Assets/hero.png` -> `prototype2/images/hero-what-we-do.webp`
  - `Assets/child-care.jpeg` -> `prototype2/images/child-care.webp`
  - `Assets/sports.jpeg` -> `prototype2/images/sports.webp`
  - `Assets/fitness.jpeg` -> `prototype2/images/fitness.webp`
  - `Assets/education.jpeg` -> `prototype2/images/education-community.webp`
  - `Assets/healthcare.jpeg` -> `prototype2/images/healthcare.webp`
  - `Assets/veterans.jpeg` -> `prototype2/images/veterans.webp`
  - `Assets/flags.jpeg` -> `prototype2/images/flags.webp`
  - `Assets/board-meeting.jpeg` -> `prototype2/images/board-meeting.webp`

### Milestone 2: `what-we-do.html` Visual Modernization
- **Hero Banner**: Implemented full-width hero with `images/hero-what-we-do.webp` and dark glassmorphic gradient overlay.
- **7 Program Silos**: Replaced placeholder visuals with client-provided, high-definition WebP graphics (Childcare, Sports, Health & Fitness, Education & Community, Healthcare, Veterans).
- **Verification**: Verified 100% asset resolution (48/48 HTTP 200) with zero console errors via browser testing.

### Milestone 3: `about.html` Full Redesign & PDF Board Deck Reproduction
- **Hero Section**: Added `images/future-building.webp` background with dark glassmorphism and subtle lime accents.
- **Vision & Mission 1-Column Stack**:
  - Reorganized Vision and Mission into a centered, readable 1-column layout.
  - Positioned `images/corei-complex.webp` master architectural rendering between Vision and Mission.
  - Built an HTML/CSS reproduction card of the **2025–2027 Impact Roadmap** from Page 12 of `Assets/board.pdf` with interactive animated metric bars:
    - *Veteran Housing Units*: 120+ Units Planned (88% progress)
    - *Youth Program Enrollment*: 500+ Active Students (72% progress)
    - *Medical Service Reach*: Full County Coverage (94% progress)
    - *Strategic Partnerships*: 15+ Corporate Allies (68% progress)
    - Styled quote: *"Sustainable change is built on structured growth and strategic investment in rural people."*
- **Our Core Values Section**:
  - Set background to `images/flags.webp`.
  - Applied horizontal transparent gradient mask (deep navy on left for readability, fading to transparent on right).
  - 4 values cards: *Community*, *Empowerment*, *Integrity*, *Innovation*.
- **Leadership with a Purpose Section**:
  - Set background to `images/board-meeting.webp` with matching horizontal transparent gradient mask.
  - Displayed *Commitment to Empowerment* and *Commitment to Innovation* leadership cards.
- **Organizational Structure Tree (Page 3 of `board.pdf`)**:
  - Replicated all 11 positions in a responsive hierarchical tree:
    - Level 1 (Executive): Board Co-President 1 (*George L. Walton*) & Board Co-President 2 (*Darrell E. Walton*).
    - Level 2 (Officers): Board Secretary (*Shelia Jones*), VP Strategic Ops & Risk (*Franklin Todd Burton*), Board Treasurer (*Open*).
    - Level 3 (Pods): Administration & Strategy (Real Estate, Fundraising, Digital Media) and Operational & Outreach (Healthcare, Veteran Outreach, Youth Programs).
- **Leadership Portfolio Grid (Pages 4–11 of `board.pdf`)**:
  - Added an 8-card responsive grid capturing the detailed portfolios for Executive Priorities, Security & Risk Management, Administration & Strategy, Real Estate & Facilities, Digital Media & Tech Solutions, Operational Programs, Veteran Advocacy, and Health & Youth Initiatives.
- **Project Scope (14 Strategic Goals)**:
  - Left column: `images/site-plan.webp` master plan with sub-render frame cards `images/frames/frame_021.webp` (3D Elevation Wireframe) and `images/frames/frame_036.webp` (Master Complex Render).
  - Right column: 14 Core Strategic Goals grid.

- **Mission & Strategic Trajectory Section Consolidation**:
  - Unified **Our Mission** and the **2025–2027 Impact Roadmap (Strategic Trajectory)** into a single dedicated section (`.section-mission-trajectory`).
  - Applied the rich green-to-blue / teal gradient background (`linear-gradient(135deg, rgba(4, 30, 66, 0.95) 0%, rgba(12, 147, 109, 0.25) 100%)`) with top/bottom glassmorphic borders.
  - Section 1 now cleanly frames **Our Vision** and the master **COREI Complex Architectural Render** over deep navy before transitioning to the green-to-blue Mission and Strategic Trajectory.
  - Verified layout, card glassmorphism, progress bars, and contrast via browser subagent.

### Milestone 5: `get-involved.html` Visual Modernization & WebP Conversions
- **Hero Background**: Added `images/blueprint_to_reality.webp` full-width background with translucent gradient overlay and bottom glassmorphic border.
- **Client Asset Optimization**: Converted 5 client assets from `Assets/` to high-performance WebP formats (all under 200 KB):
  - `Assets/partner-with-us.jpg` -> `prototype2/images/partner-with-us.webp` (150 KB)
  - `Assets/be-a-worker.jpg` -> `prototype2/images/be-a-worker.webp` (197 KB)
  - `Assets/be-a-member.png` -> `prototype2/images/be-a-member.webp` (121 KB)
  - `Assets/be-a-volunteer.png` -> `prototype2/images/be-a-volunteer.webp` (161 KB)
  - `Assets/be-workers.jpeg` -> `prototype2/images/be-workers.webp` (119 KB)
- **Advocacy Section (Section 1)**: Integrated a 2-image vertical stack featuring `partner-with-us.webp` and `be-a-worker.webp` alongside the community advocacy action items.
- **Participation Roles (Section 2)**: Replaced placeholder graphics with client-targeted imagery:
  - *Become a Member*: `images/be-a-member.webp`
  - *Get Involved as a Volunteer*: `images/be-a-volunteer.webp`
  - *Become a Worker*: `images/be-workers.webp`
- **Verification**: Verified 100% asset HTTP resolution (8/8 assets 200 OK) with zero console errors via browser testing.

### Milestone 6: `ways-to-give.html` & `contact.html` Modernization & Visual Polish
- **Ways to Give Asset Conversion & Optimization**:
  - `Assets/new-hero.png` -> `prototype2/images/new-hero.webp` (230 KB)
  - `Assets/donations.jpg` -> `prototype2/images/donations.webp` (240 KB)
  - `Assets/children.jpeg` -> `prototype2/images/children.webp` (87.6 KB)
- **Ways to Give Layout & Graphic Updates**:
  - Hero section background updated to `images/new-hero.webp` with subtle dark overlay gradient.
  - Card 01 (Direct Giving): Updated image to `images/donations.webp`.
  - Card 02 (Capital Campaign): Updated image to `images/future-building.webp`.
  - Card 03 (In-Kind Contributions): Updated image to `images/children.webp`.
  - Added dedicated **BY MAIL** donation card under Section 3 (Pledge Your Support) with Carrollton, TX mailing address and glassmorphic styling.
- **Contact Page Polish & Navigation Fix**:
  - Fixed active navigation button contrast for Contact Us: `.btn-primary.active` now renders dark navy text (`#041e42`) on `--lime` background across all prototype pages.
  - Updated Contact Information card image to `images/aerial_complex.webp`.
- **Verification**: 100% HTTP 200 resolution verified across all assets with browser screenshots captured.

### Milestone 7: `3d-complex.html` Sky Realism Upgrade & Staging Re-Deployment
- **Realistic Skyline Gradient**:
  - Upgraded Three.js canvas sky texture in `3d-complex.html` to a 5-stop realistic atmospheric gradient:
    - Zenith (Top): Deep natural sky blue (`#1c75c8`)
    - Upper-Mid: Cerulean blue (`#3d8ed9`)
    - Mid-Atmosphere: Atmospheric soft blue (`#73b2ea`)
    - Skyline Transition: Light horizon azure (`#afd3f3`)
    - Horizon Haze: Soft ambient haze (`#dbeaf7`)
  - Updated `scene.fog` to `new THREE.Fog(0xdbeaf7, 480, 1250)` for seamless distant terrain and forest blending.
- **Live Staging Deployment**:
  - Published all 95 assets and modernized pages to here.now hosting via `publish_herenow.js`.
  - Live Staging URL: [https://rising-lasso-t9ge.here.now/](https://rising-lasso-t9ge.here.now/)
  - Live 3D Model: [https://rising-lasso-t9ge.here.now/3d-complex.html](https://rising-lasso-t9ge.here.now/3d-complex.html)

### Milestone 8: `index.html` Mobile Layout Modernization & Responsive Overhaul
- **Mobile Pull-Down Hamburger Navigation**:
  - Implemented `.mobile-toggle` animated hamburger menu button for mobile viewports ($\le 900\text{px}$).
  - Designed smooth slide-down navigation drawer with glassmorphism (`rgba(2, 21, 48, 0.98)` + backdrop blur 25px) and high-contrast lime active states.
  - Added click and auto-close event listeners for seamless touch interactions.
- **Hero Section Boundary & Positioning Fix**:
  - Replaced fixed viewport positioning on `.hero-bg` with `position: absolute; inset: 0;` inside the Hero section.
  - Eliminated background bleeding over subsequent sections on resize, orientation changes, or fast scrolling.
- **What We Do Services (Vertical Stacking Layout)**:
  - Adapted GSAP ScrollTrigger to `gsap.matchMedia()`: horizontal pinning operates on desktop viewports ($\ge 901\text{px}$), while mobile viewports smoothly switch to natural vertical flow.
  - Re-structured service cards on mobile: high-definition visual image at the top, service title, descriptive text, and vertically stacked action buttons (Primary CTA + tag).
- **Designed for Impact Section**:
  - Switched grid from 2-column to 1-column responsive vertical stack with all 4 principle cards (*Community*, *Access*, *Opportunity*, *Resilience*) clearly legible.
- **Partner Spotlight Section**:
  - Switched layout from horizontal split to vertical stack with the *Crossroads Family Care* spotlight card and descriptive text.
- **Verification & Deployment**:
  - Verified mobile rendering across all sections via browser subagent at $390 \times 844$ resolution.
  - Confirmed desktop navigation and horizontal scroll retain full functionality at $1440 \times 900$.
  - Deployed updated codebase to live staging server.

### Milestone 9: Site-Wide Mobile Hamburger Navigation Overhaul
- **Uniform Mobile Navigation System**:
  - Updated all prototype subpages (`what-we-do.html`, `about.html`, `get-involved.html`, `ways-to-give.html`, and `contact.html`) to incorporate the animated `.mobile-toggle` hamburger button.
  - Implemented the full-width, glassmorphic pull-down mobile drawer (`rgba(2, 21, 48, 0.98)` with $25\text{px}$ backdrop blur) across every page.
  - Preserved page-specific active state indicators with high-contrast lime highlights.
  - Integrated click, touch, and auto-closing event listeners on link clicks for seamless mobile UX.
- **Verification & Re-Deployment**:
  - Verified mobile navigation open/close and active state transitions across all 5 subpages via browser subagent at $390 \times 844$ mobile viewport.
  - Zero console errors across all pages.

### Milestone 10: `3d-complex.html` Bottom Menu Icon-Only & Rollover Popup Tile Overhaul
- **Icon-Only Bottom Navigation Dock**:
  - Transformed `#nav-hud` into an icon-only floating dock pill with circular 42px touch-friendly buttons (`border-radius: 50%`).
  - Added visual divider (`.nav-divider`) separating campus facility buttons from the Campus Overview / Reset button.
  - Retained clean `aria-label` attributes across all 12 buttons for accessibility and screen readers.
- **Rich Rollover Popup Tile**:
  - Implemented a floating glassmorphic popup card (`#nav-popup-tile`) that appears smoothly directly above whichever button is hovered or focused.
  - Displays high-resolution facility thumbnail image preview with subtle dark gradient overlay.
  - Features facility category badge pill, icon, and 2-line clamped title preventing text clipping.
  - Includes interactive action hint ("Click to inspect in 3D →") and bottom directional caret dynamically aligned to point at the icon center.
  - Preloaded all thumbnail images for instantaneous, flicker-free hover transitions.
- **Responsive Horizontal Scrolling**:
  - Implemented `overflow-x: auto` with smooth scrolling behavior on `#nav-hud`.
  - Added mouse wheel horizontal scrolling listener (`wheel` converts vertical delta to horizontal `scrollLeft`).
  - Integrated click-and-drag gesture scrolling for desktop mouse and trackpads.
  - Enabled native touch panning (`-webkit-overflow-scrolling: touch; touch-action: pan-x`).
  - Added automatic smooth scrolling into view whenever a button or 3D scene hotspot pin is activated.
  - Hidden native scrollbar tracks to maintain a pristine, glassmorphic pill aesthetic across all screen sizes.

### Milestone 11: `ways-to-give.html` IRS Verification Button Rollover & Glow Upgrade
- **Luminous Hover Rollover**:
  - Restored dynamic sweeping gradient (`linear-gradient(135deg, var(--blue) 0%, var(--sky) 100%)`) on `.btn-irs::before` pseudo-element to match website interactive rollover behavior.
  - Enhanced hover state with vibrant sky-blue glow (`box-shadow: 0 12px 40px rgba(67, 167, 237, 0.45), 0 0 25px rgba(26, 140, 255, 0.3)`), sky border illumination (`border-color: var(--sky)`), and lift transition.
  - Added matching subtle hover glow on `.btn-paypal` for complete visual harmony in the giving actions row.

---

## [2026-08-07] - WordPress to Prototype 2 Migration & Staging Deployment

### Milestone:
- **Copy & Content Migration**: Migrated copy and content from live `coreitex.com` into Prototype 2 static template architecture.
- **Silo Architecture**: Separated Medical Services and Veterans Services into distinct program silos.
- **Media Asset Conversion**: Downloaded and converted legacy WordPress media to `.webp`.
- **Staging Deployment**: Configured and deployed preview staging to here.now hosting (`https://rising-lasso-t9ge.here.now/`).
