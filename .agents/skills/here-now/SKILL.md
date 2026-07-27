---
name: here-now
description: Publish static sites and prototype folders to here.now using HERE_NOW_API_KEY environment variable.
---

# `here-now` Skill

Publish static HTML, assets, and prototype directories directly to `here.now`.

## API Endpoint
`POST https://here.now/api/v1/publish`

## Required Environment Variable
- `HERE_NOW_API_KEY`: API Key set in user environment (`$env:HERE_NOW_API_KEY`).

## Workflow

1. Gather all files in the target directory (e.g. `prototype2`), computing file paths, byte sizes, and MIME types.
2. Send initial POST to `https://here.now/api/v1/publish` with headers:
   - `content-type: application/json`
   - `authorization: Bearer $env:HERE_NOW_API_KEY`
3. Upload each file buffer via `PUT` to the returned presigned URLs in `upload.uploads[]`.
4. Send finalization POST to `upload.finalizeUrl` with `{ "versionId": "<upload.versionId>" }` and authorization header.
5. Return the permanent live site URL (`https://<slug>.here.now/`).
