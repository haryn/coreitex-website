# CoreITex Website - Modernization Plan

## Current State
- **Platform:** Static Glassmorphic HTML5/CSS/Vanilla JS (Prototype 2)
- **Hosting:** Google Firebase Hosting (`corei-org.web.app`) & Custom Domain (`coreitex.org`)
- **Status:** Active Client / Production Deployed
- **Client Portal & Staging:** here.now (`floral-quail-fty4.here.now`)

## Production Architecture
- **Frontend:**
    - Static HTML5 semantic architecture with high-contrast glassmorphism (`prototype2/`).
    - Direct hardware-accelerated video scroll scrubbing (`construction.mp4`).
    - Interactive 3D Three.js simulation (`3d-complex.html`).
    - Serverless contact backend via Google Forms + Gmail forwarding.
- **Hosting & Caching:**
    - Firebase Hosting Spark Tier with immutable asset caching (`Cache-Control: max-age=31536000, immutable`).
- **Goal:** Maximum speed, zero database hosting costs, high security, and institutional presentation for 501(c)(3) capital fundraising.

