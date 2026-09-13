---
name: here-now
description: Publish static sites and prototype folders to here.now using HERE_NOW_API_KEY environment variable.
---

# `here-now` Skill

Publish static HTML, assets, and prototype directories directly to `here.now`.

## API Endpoints
- **Create new site**: `POST https://here.now/api/v1/publish`
- **Update existing site**: `PUT https://here.now/api/v1/publish/<slug>`

## Required Environment Variable
- `HERE_NOW_API_KEY`: API Key set in user environment (`$env:HERE_NOW_API_KEY`).

## Workflow

1. Gather all files in the target directory (e.g. `prototype2`), computing file paths, byte sizes, and MIME types.
2. Send initial request:
   - For new sites: `POST https://here.now/api/v1/publish` with `{ "slug": "<slug>", "files": [...] }`
   - For existing site updates: `PUT https://here.now/api/v1/publish/<slug>` with `{ "files": [...] }`
   - Headers: `Content-Type: application/json`, `Authorization: Bearer $env:HERE_NOW_API_KEY`
3. Upload each file buffer via `PUT` to the returned presigned URLs in `upload.uploads[]`.
4. Send finalization POST to `upload.finalizeUrl` with `{ "versionId": "<upload.versionId>" }` and authorization header.
5. Return the live site URL (`https://<slug>.here.now/`).
