# COREI™ Interactive 3D Building Showcase — Product Requirements Document

**Project**: COREI™ Hero Section 3D Interaction Upgrade (Upsell)
**Client**: COREI™ (Community One Resources Initiatives Corporation)
**Website**: https://coreitex.com/
**Reference**: https://explore.ownprimland.com/ (Primland 3D Showcase by Outpost Design)
**Date**: 2026-07-21
**Status**: Proposed — Awaiting Client Approval

---

## 1. Executive Summary

COREI™ currently showcases a static 3D rendition of their future multi-purpose complex in the hero section. This proposal upgrades that static showcase into an **interactive 3D building experience** — allowing visitors to rotate, zoom, and explore the building directly in the hero section of the homepage.

This feature is inspired by the award-winning [Primland 3D Showcase](https://explore.ownprimland.com/) (Awwwards Site of the Day, scored 7.35/10), which used optimized 3D models to create an immersive digital experience of a luxury resort. We will deliver a similar "wow factor" but **scoped to the hero section only**, keeping the rest of the site lightweight and fast.

**Business Value:**
- Differentiates COREI™ from every other nonprofit website in East Texas
- Creates a memorable first impression for donors, investors, and partners
- Demonstrates technological sophistication — reinforcing the "Urban Innovation, Rural Access" brand promise
- Provides a tangible way to "see" the future complex before it's built
- Lead generation: visitors spend more time on site, engage deeper

---

## 2. Reference Analysis: explore.ownprimland.com

### What Makes It Impressive

| Feature | Description | Our Adaptation |
|---------|-------------|----------------|
| **3D Model Rendering** | Full architectural 3D model rendered in-browser using WebGL | Client provides 3D model → converted to Three.js format |
| **Orbit Controls** | Click-drag to rotate, scroll to zoom, pinch on mobile | Same — limited to hero section viewport |
| **Cinematic Camera** | Auto-rotating camera with smooth transitions | Optional auto-rotate with manual override |
| **Interactive Hotspots** | Clickable points on the building revealing info (images, text, floor plans) | Hotspots on key areas: Medical Wing, Veteran Center, Gym, Childcare, etc. |
| **Smooth Animations** | GSAP-driven transitions between views | CSS/Three.js animation loops |
| **Low-Poly Optimization** | Trees and foliage optimized for web performance | Building detail maintained; environment simplified |
| **Responsive** | Works on mobile (touch gestures) and desktop (mouse) | Touch + mouse orbit controls |
| **Loading Experience** | Staggered loading with progress indicator | Skeleton/progress bar while 3D model loads |

### What We're NOT Doing (Scope Limitation)

- ❌ Full-page 3D scroll experience (we stay in hero section)
- ❌ Page-by-page 3D navigation (the rest of the site is standard)
- ❌ Virtual tour / walkthrough (outside-facing views only)
- ❌ Video integration within 3D (keep file size manageable)
- ❌ Real-time lighting / weather effects (unnecessary complexity)

---

## 3. User Experience

### 3.1 Desktop Experience

**Hero Section Layout:**
```
┌─────────────────────────────────────────────────────────┐
│  [Navbar]                                                │
├─────────────────────────────────────────────────────────┤
│                                                          │
│    ┌──────────────────────────────────┐  ┌───────────┐   │
│    │                                  │  │  COREI™   │   │
│    │     INTERACTIVE 3D BUILDING      │  │  Tagline  │   │
│    │     (Orbit: drag to rotate)      │  │  CTA      │   │
│    │     (Zoom: scroll wheel)         │  │  Button   │   │
│    │                                  │  │           │   │
│    └──────────────────────────────────┘  │  Hotspot  │   │
│                                         │  Legend    │   │
│    [Hint: "Click & drag to explore"]    └───────────┘   │
│                                                          │
├─────────────────────────────────────────────────────────┤
│  [Rest of Homepage: Programs, Mission, Contact...]       │
└─────────────────────────────────────────────────────────┘
```

**Interactions:**
- **Rotate**: Click + drag to orbit around the building
- **Zoom**: Scroll wheel to zoom in/out
- **Hotspots**: Floating markers on the building that expand to show:
  - Area name (e.g., "Medical Services Wing")
  - Brief description (2-3 sentences)
  - Representative image (if available)
- **Auto-rotate**: Building slowly rotates when user isn't interacting (pauses on interaction, resumes after 5s idle)
- **Reset View**: Double-click to return to default camera angle

### 3.2 Mobile Experience

**Hero Section Layout:**
```
┌──────────────────────────┐
│  [Burger Menu]            │
├──────────────────────────┤
│                          │
│  ┌────────────────────┐ │
│  │  INTERACTIVE 3D     │ │
│  │  BUILDING           │ │
│  │  (Touch: drag/pan)  │ │
│  │  (Pinch: zoom)      │ │
│  └────────────────────┘ │
│                          │
│  COREI™ Tagline          │
│  [CTA Button]            │
│  [Hotspot dots below]   │
│                          │
├──────────────────────────┤
│  [Rest of page...]        │
└──────────────────────────┘
```

**Interactions:**
- **Rotate**: Single-finger drag
- **Zoom**: Pinch gesture
- **Hotspots**: Tap to expand info card (bottom sheet)
- **Auto-rotate**: Enabled but slower on mobile (battery consideration)

### 3.3 Loading Experience

Since 3D models can be large, we implement a graceful loading flow:

1. **Instant**: Hero background gradient/pattern loads immediately (no blank white)
2. **0-2s**: Low-res placeholder or wireframe silhouette appears
3. **2-5s**: Full model streams in progressively
4. **5s+**: If still loading, show progress bar with "Loading 3D experience..."
5. **Fallback**: If WebGL not supported, show static 3D rendering image with message "For the full 3D experience, please use a modern browser"

---

## 4. Interactive Hotspots

### Hotspot Locations (Client to Confirm)

| # | Location | Label | Description |
|---|----------|-------|-------------|
| 1 | Main Entrance | "Welcome Center" | Main lobby, reception, community gathering |
| 2 | Left Wing | "Medical Services" | Healthcare clinic, telehealth room |
| 3 | Right Wing | "Veteran Services" | Veteran support, counseling, peer network |
| 4 | Upper Floor | "Education Center" | Classrooms, computer lab, tutoring |
| 5 | Rear Wing | "Childcare Center" | Daycare, after-school programs |
| 6 | Lower Floor | "Fitness & Recreation" | Gym, sports courts, wellness |
| 7 | Outdoor Area | "Community Green" | Playground, event space, gardens |

### Hotspot Interaction Flow

```
[HOTSPOT DOT] → tap/click → [EXPANDED CARD]
                                ├── Area Name (bold)
                                ├── 2-3 sentence description
                                ├── Optional thumbnail image
                                └── "Learn More" → scrolls to relevant section below
```

---

## 5. Technical Architecture

### 5.1 Technology Stack

| Component | Technology | Why |
|-----------|-----------|-----|
| **3D Rendering** | Three.js (via `@react-three/fiber` + `@react-three/drei`) | React integration, mature ecosystem, great docs |
| **Animation** | `framer-motion` (for hotspot transitions) | Already in React ecosystem, smooth |
| **Loading** | `@react-three/drei` `useProgress` hook | Built-in loading manager for Three.js |
| **Camera Controls** | `@react-three/drei` `OrbitControls` | Touch + mouse, zoom limits, auto-rotate |
| **Model Format** | glTF/GLB (optimized) | Web-standard 3D format, small file size |
| **Fallback** | Static hero image | For unsupported browsers / slow connections |

### 5.2 React 19 Compatibility ⚠️

**Critical**: COREI™ uses React 19. All Three.js packages MUST support React 19:

| Package | Required Version | React 19 Support |
|---------|-----------------|------------------|
| `@react-three/fiber` | v9+ | ✅ React 19 compatible |
| `@react-three/drei` | v10+ | ✅ React 19 compatible |
| `three` | Latest (r170+) | ✅ N/A (no React dep) |
| `@types/three` | Latest | ✅ N/A |

**Error to avoid**: `Cannot read properties of undefined (reading 'ReactCurrentBatchConfig')` — this means wrong version of R3F/drei.

### 5.3 Model Conversion Pipeline

```
Client's 3D File → Blender (cleanup) → glTF-Optimizer → .glb → /public/models/
     (.obj/.fbx         (reduce poly)    (compress)    (serve via CDN)
      .skp/.max)
```

**Optimization Targets:**
- Model size: <5MB compressed (GLB)
- Triangle count: <100K triangles
- Texture sizes: 1024x1024 max (compressed)
- No animated meshes (static building)
- Merged geometry where possible (fewer draw calls)

### 5.4 Performance Budget

| Metric | Target | Notes |
|--------|--------|-------|
| 3D Model Load Time | <3s on 4G | Progressive loading enabled |
| Total Hero Bundle (3D + React) | <200KB gzipped (JS) | Three.js is ~150KB tree-shaken |
| GPU Memory | <100MB | Mobile constraint |
| FPS | 30fps minimum, 60fps target | Adaptive quality on mobile |
| Time to Interactive | <4s total hero | Including 3D load |
| Lighthouse Performance Impact | <10 point drop | vs. non-3D version |

### 5.5 Adaptive Quality System

```tsx
// Auto-detect device capability and adjust quality
const quality = useDetectGPU(); // 'low' | 'medium' | 'high'

// Quality Presets
const PRESETS = {
  low:    { dpr: 1,   shadows: false, antialias: false, modelLOD: 'low' },
  medium: { dpr: 1.5, shadows: false, antialias: true,  modelLOD: 'medium' },
  high:   { dpr: 2,   shadows: true,  antialias: true,  modelLOD: 'high' },
};
```

---

## 6. Component Architecture

```
src/
├── components/
│   └── hero/
│       ├── Hero3DContainer.tsx    # Wrapper: lazy-loads 3D scene
│       ├── BuildingScene.tsx      # Three.js Canvas + Scene setup
│       ├── BuildingModel.tsx      # Model loader + materials
│       ├── HotspotMarkers.tsx     # 3D hotspot positioning
│       ├── HotspotCard.tsx        # Expanded info card (HTML overlay)
│       ├── LoadingScreen.tsx      # 3D loading progress
│       ├── FallbackHero.tsx        # Static image fallback
│       └── useAdaptiveQuality.ts  # GPU detection hook
├── public/
│   └── models/
│       ├── building.glb           # Optimized 3D model
│       └── building-low.glb       # Low-poly fallback
```

---

## 7. Scope & Deliverables

### Phase 1: Model Conversion (Client Dependency)
- Client provides original 3D model file (.obj, .fbx, .skp, .max, or .blend)
- We convert, optimize, and compress for web
- Deliver: `building.glb` + `building-low.glb`

### Phase 2: Core 3D Integration
- Three.js scene setup with proper lighting
- Orbit controls (rotate, zoom, pan limits)
- Auto-rotate with idle detection
- Responsive canvas (desktop + mobile)
- Loading screen with progress indicator
- Static fallback for unsupported browsers

### Phase 3: Hotspot System
- 3D marker placement on building
- Click/tap interaction to reveal info cards
- Smooth card animations
- "Learn More" links to page sections
- Mobile bottom-sheet variant

### Phase 4: Polish & Performance
- Adaptive quality system
- Performance testing across devices
- Lighthouse score verification
- Accessibility (keyboard nav, aria labels)
- Analytics tracking (3D interaction events)

---

## 8. Client Requirements

### Must Provide:
- [ ] **Original 3D model file** of the COREI™ complex (.obj, .fbx, .skp, .max, or .blend)
- [ ] **Confirm hotspot locations** (which areas of the building to highlight)
- [ ] **Text descriptions** for each hotspot area (or we write them based on existing content)
- [ ] **High-quality exterior photos** (for hotspot thumbnails, if available)

### Nice to Have:
- [ ] Interior 3D model data (for future expansion)
- [ ] Landscape/terrain model (surrounding area)
- [ ] Brand color hex codes for hotspot markers

---

## 9. Pricing Structure (Proposal)

### Option A: Full Interactive 3D Hero
- 3D model conversion + optimization
- Interactive hero with orbit controls + auto-rotate
- Up to 5 clickable hotspots with info cards
- Responsive (desktop + mobile)
- Loading experience + fallback
- **Estimated: [TBD — discuss with client]**

### Option B: Static 3D + Parallax (Budget)
- 3D model converted to static hero image set (multiple angles)
- Parallax scroll effect between angles
- No interactive rotation, but still visually impressive
- Much lighter (no WebGL needed)
- **Estimated: [TBD — lower cost]**

### Option C: Full Interactive + Future Expansion
- Everything in Option A
- + Interior walkthrough (future phase)
- + Day/night lighting toggle
- + Construction timeline slider (shows building progress)
- **Estimated: [TBD — premium tier]**

---

## 10. Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Client's 3D model is too complex/large | High | Aggressive decimation; offer low-poly recreation if needed |
| WebGL not supported on older devices | Medium | Static fallback image; graceful degradation |
| Performance impact on mobile | Medium | Adaptive quality; low-poly model variant |
| Model format incompatible | Low | Blender supports 50+ formats; worst case we rebuild from reference images |
| Firebase Hosting bandwidth limits | Low | 3D model ~5MB; fits well within 10GB/month Spark Plan |
| React 19 compatibility issues | Medium | Already documented; use correct package versions |

---

## 11. Success Metrics

- **Engagement**: >30% of homepage visitors interact with the 3D model
- **Time on Page**: +15 seconds average vs. static hero
- **Performance**: Lighthouse Performance >80 (with 3D enabled)
- **Mobile**: Smooth 30fps+ on mid-range Android/iOS devices
- **Load Time**: 3D hero fully interactive within 4 seconds
- **Client Satisfaction**: Approval on first review iteration

---

## 12. Reference Links

- **Primland 3D Showcase**: <https://explore.ownprimland.com/>
- **Outpost Design (Creator)**: <https://outpost.design/work/primland-explore/>
- **Awwwards SOTD**: <https://www.awwwards.com/sites/explore-primland>
- **Three.js Documentation**: <https://threejs.org/docs/>
- **React Three Fiber**: <https://docs.pmnd.rs/react-three-fiber>
- **React Three Drei**: <https://docs.pmnd.rs/drei/>

---

## 13. Next Steps

1. **Client Decision**: Approve Option A, B, or C
2. **Model Delivery**: Client sends 3D model file
3. **Model Review**: We assess model complexity and confirm feasibility
4. **Hotspot Content**: Client confirms areas and descriptions (or we draft)
5. **Development Start**: 2-week build cycle
6. **Staging Preview**: Deploy to staging for client review
7. **Final Approval & Deploy**: Production push

---

**Document Status**: Draft v1.0 — Ready for Client Presentation
**Last Updated**: 2026-07-21
**Author**: AI_Claw
**Confidentiality**: Client-facing (approved for sharing with COREI™)
