# ADR-0004: Astryx Design System

**Date**: 2026-07-21
**Status**: Accepted

## Decision

Use [Astryx](https://astryx.design) as the component library for the COREI™ website, integrated with Tailwind CSS v4 and Next.js 16.

## Context

The COREI™ website needs a consistent, professional design system. Astryx provides 180+ production-ready components with a neutral theme, native Tailwind v4 integration, and an AI-assisted CLI workflow.

## Alternatives Considered

- Shadcn/ui
- Radix primitives + custom styling
- Headless UI

## Installation

1. `npx create-next-app@latest` with TypeScript, Tailwind v4, App Router
2. `npm install @astryxdesign/core @astryxdesign/theme-neutral @astryxdesign/cli`
3. `npx astryx init --all`
4. Import Astryx CSS in `app/globals.css` before Tailwind

## Component Categories

| Category | Examples |
|----------|---------|
| Layout | AppShell, VStack, HStack, Grid |
| Buttons | Button, IconButton, ToggleButton, ButtonGroup |
| Inputs | Field, TextInput, Select, CheckboxList, DateInput, FileInput |
| Cards | Card, ClickableCard, SelectableCard |
| Navigation | Breadcrumbs, Tabs, CommandPalette, ContextMenu |
| Feedback | Dialog, AlertDialog, Banner, Toast, Badge |
| Data Display | Avatar, CodeBlock, Blockquote, Citation, EmptyState |
| Chat | ChatComposer, ChatMessage, ChatLayout, ChatMessageList |
| Composite | Collapsible, Carousel, Calendar, AspectRatio |

## Consequences

- All Astryx components with event handlers need `'use client'` directive
- Static export to `out/` for Firebase Hosting
- CLI provides `npx astryx build "<description>"` for AI-assisted page generation
