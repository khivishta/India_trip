# India Trip Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a static React/Vite travel planner website for the India 2026 itinerary.

**Architecture:** The app is a single-page React site with typed local data in `src/data/trip.ts` and presentational components in `src/components`. Styling lives in `src/App.css` so the static site remains simple to deploy and maintain.

**Tech Stack:** Vite, React, TypeScript, CSS, GitHub Pages-compatible static build.

---

### Task 1: Scaffold App

**Files:**
- Create: `package.json`
- Create: `index.html`
- Create: `tsconfig.json`
- Create: `tsconfig.node.json`
- Create: `vite.config.ts`
- Create: `src/main.tsx`
- Create: `src/vite-env.d.ts`

- [ ] Add Vite React TypeScript project files with scripts: `dev`, `build`, `preview`.
- [ ] Configure `vite.config.ts` with `base: "./"` so the build works from GitHub Pages or any static file host.
- [ ] Run `npm install`.
- [ ] Run `npm run build` and fix TypeScript or bundling errors.

### Task 2: Add Trip Data

**Files:**
- Create: `src/data/trip.ts`

- [ ] Add typed data for itinerary days, route legs, hotels, place guide entries, gallery cards, and trip stats.
- [ ] Include the exact route: Mumbai, Aurangabad/Ellora, Delhi, Agra, Jaipur, Rishikesh, Udaipur, Mumbai.
- [ ] Include the daily dates from Oct 24, 2026 through Nov 8, 2026.
- [ ] Include no train references.

### Task 3: Build UI Components

**Files:**
- Create: `src/components/Hero.tsx`
- Create: `src/components/RouteFlow.tsx`
- Create: `src/components/Itinerary.tsx`
- Create: `src/components/Transport.tsx`
- Create: `src/components/PlaceGuide.tsx`
- Create: `src/components/Hotels.tsx`
- Create: `src/components/Gallery.tsx`

- [ ] Create focused components that read props from `src/data/trip.ts`.
- [ ] Color-code pace and transport types consistently.
- [ ] Make Rishikesh visually prominent as the mountain/river stop.
- [ ] Keep cards readable on mobile and laptop screens.

### Task 4: Compose And Style

**Files:**
- Create: `src/App.tsx`
- Create: `src/App.css`

- [ ] Compose the page in this order: hero, route flow, daily itinerary, route check, place guide, gallery, hotels.
- [ ] Use a rich but controlled palette: coastal blue, heritage gold, mountain green, connection coral, palace pink, lake teal.
- [ ] Add sticky in-page navigation for major sections.
- [ ] Use real visual signal through gradient/photo-inspired cards and external image-search links.

### Task 5: Verify And Publish

**Files:**
- Modify as needed based on verification findings.

- [ ] Run `npm run build`.
- [ ] Start local preview and inspect the site visually.
- [ ] Search the built/source files for `train` and confirm no matches.
- [ ] Commit the completed site.
- [ ] Push to `origin main`.
