# CoreITex Website - Modernization Plan

## Current State
- **Platform:** WordPress (Live)
- **Status:** Active Client

## Future Architecture
- **Development:** 
    - Maintain WordPress on an economic hosting provider (Namecheap/AWS).
    - Use WordPress strictly as a Headless CMS for the dev team.
- **Production:**
    - **Hosting:** Firebase Hosting (Static).
    - **Deployment:** GitHub Actions pipeline to fetch content from WP, generate static HTML/CSS/JS, and deploy to Firebase.
- **Goal:** Security, Speed, and Cost reduction (Serverless frontend).
