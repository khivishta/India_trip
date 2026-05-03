# Localized Place Guide Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Expand the website place guide into detailed English and Italian destination chapters with specific places inside each stop.

**Architecture:** Keep itinerary and route data in `src/data/trip.ts`; add localized long-form guide content in `src/data/placeDetails.ts`. Pass a `language` state from `App.tsx` to components that need localized labels and content.

**Tech Stack:** React, TypeScript, Vite, CSS.

---

### Task 1: Localized content data

**Files:**
- Create: `src/data/placeDetails.ts`
- Modify: `src/data/trip.ts`

- [ ] Add `Language = "en" | "it"` and detailed guide content for each destination.
- [ ] Add specific places within every destination, including what it is, why visit, history/context, what to notice, and pacing advice.
- [ ] Replace the Rishikesh image with a better public Lakshman Jhula/Ganga river image.

### Task 2: UI localization and chapter layout

**Files:**
- Modify: `src/App.tsx`
- Modify: `src/components/Hero.tsx`
- Modify: `src/components/PlaceGuide.tsx`
- Modify: `src/App.css`

- [ ] Add an English/Italian language toggle.
- [ ] Translate main navigation and hero labels.
- [ ] Render detailed guide chapters with city-level intro and nested location cards.
- [ ] Preserve responsive layout and existing visual style.

### Task 3: Verify and publish

**Files:**
- Modify as needed.

- [ ] Run production build.
- [ ] Verify English and Italian strings are present.
- [ ] Verify the app still contains Rishikesh, Udaipur, and Ellora.
- [ ] Verify no train references.
- [ ] Commit and push to `main`.
