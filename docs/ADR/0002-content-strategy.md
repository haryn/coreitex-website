# 0002 - Content Strategy for Firebase Spark Plan

**Status**: Accepted
**Date**: 2026-07-21
**Context**: COREI™ Website Migration Project

---

## Decision

We will use **JSON files** as our content management system, stored in a `content/` directory and version-controlled with Git.

## Context

The COREI™ website will be deployed on Firebase Hosting Spark Plan, which does not include a database. We need a content management solution that:
- Works without a database
- Is maintainable for retainer support
- Supports version control
- Is easy for the client to understand
- Doesn't incur additional costs

## Options Considered

### Option 1: JSON Files ✅ **SELECTED**

**Pros**:
- Zero cost
- Version control with Git
- Easy to edit (any text editor)
- Fast (no API calls)
- SEO-friendly (static content)
- Easy to validate (JSON Schema)

**Cons**:
- No GUI for content editing
- Requires Git knowledge for updates

### Option 2: Markdown Files with Frontmatter

**Pros**:
- Zero cost
- Version control with Git
- Easy to edit (any text editor)
- Familiar to developers

**Cons**:
- Less structured than JSON
- More error-prone (YAML parsing)
- No built-in validation

### Option 3: Headless CMS (Contentful/Sanity - Free Tier)

**Pros**:
- GUI for content editing
- No Git knowledge required
- Better content authoring experience

**Cons**:
- External dependency
- API calls required (slower)
- Free tier limits (may need upgrade)
- Not version-controlled (sync issues)

## Rationale

**JSON files** are the best choice because:
1. **Zero Cost**: No external services or databases
2. **Version Control**: Full Git history for all content changes
3. **Simplicity**: Easy to edit and validate
4. **Performance**: No API calls, static content
5. **Maintainability**: Clear structure, easy to understand
6. **Retainer-Friendly**: I can easily make updates and push changes

## Content Structure

```
content/
├── programs.json          # 6 service areas
├── partners.json          # Partner organizations
├── team.json              # Team/board members
├── construction.json      # Construction progress photos
└── events.json            # Community events (optional)
```

### Example: programs.json

```json
{
  "programs": [
    {
      "id": "medical-services",
      "title": "Medical Services",
      "slug": "medical-services",
      "description": "Comprehensive medical care for rural communities.",
      "longDescription": "COREI™ partners with medical service providers to bring essential healthcare to underserved rural areas. Our medical services include primary care, preventive care, and specialized treatment options.",
      "icon": "stethoscope",
      "image": "/images/programs/medical.jpg",
      "order": 1
    },
    {
      "id": "veteran-services",
      "title": "Veteran Services",
      "slug": "veteran-services",
      "description": "Support services for veterans and their families.",
      "longDescription": "We partner with veteran service officers, federal and state veteran service agencies, and veteran organizations to overcome the many challenges veterans face in rural communities.",
      "icon": "shield",
      "image": "/images/programs/veteran.jpg",
      "order": 2
    },
    // ... 4 more programs
  ]
}
```

### Example: partners.json

```json
{
  "partners": [
    {
      "id": "crossroads-family-care",
      "name": "Crossroads Family Care",
      "description": "A cornerstone of local health services.",
      "url": "https://crossroadsfamilycare.com",
      "logo": "/images/partners/crossroads.jpg",
      "featured": true
    }
  ]
}
```

## Content Loading Strategy

We'll create a helper function to load and validate JSON content:

```typescript
// src/lib/content.ts
import programsData from '@/content/programs.json';
import partnersData from '@/content/partners.json';
import teamData from '@/content/team.json';
import constructionData from '@/content/construction.json';

export interface Program {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  icon: string;
  image: string;
  order: number;
}

export interface Partner {
  id: string;
  name: string;
  description: string;
  url: string;
  logo: string;
  featured: boolean;
}

export const programs = programsData.programs as Program[];
export const partners = partnersData.partners as Partner[];
export const team = teamData.team as any[];
export const construction = constructionData.photos as any[];

// Helper functions
export const getProgramBySlug = (slug: string) =>
  programs.find(p => p.slug === slug);

export const getFeaturedPartners = () =>
  partners.filter(p => p.featured);
```

## Updating Content

### For Client (via Retainer)

1. Client sends content update request
2. I update the relevant JSON file
3. Commit changes to Git
4. Deploy to Firebase via GitHub Actions
5. Client reviews and approves

### Direct Client Editing (Advanced)

If the client wants to edit content directly:
1. Provide GitHub repository access (read/write)
2. Create a simple content editing UI (optional, separate scope)
3. Client edits JSON files
4. GitHub Actions auto-deploys on commit

## Validation

We'll use TypeScript interfaces and JSON Schema to validate content:

```bash
npm install --save-dev @types/json-schema
```

## Consequences

### Positive
- Zero cost content management
- Full version control
- Fast static content
- Easy to maintain
- Retainer-friendly workflow

### Negative
- No GUI for content editing
- Client needs to go through me for updates (or learn Git)

### Neutral
- JSON files need to be committed to Git
- Content changes require deployment

## Alternatives Considered

- Markdown files (rejected for less structure)
- Headless CMS (rejected for cost and complexity)

## References

- JSON Schema: https://json-schema.org
- Next.js Static Data: https://nextjs.org/docs/app/building-your-application/data-fetching

---

**Proposed by**: AI_Claw
**Accepted by**: TBD
**Implementation Start**: Week 3