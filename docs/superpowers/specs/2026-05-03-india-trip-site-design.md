# India Trip Site Design

## Goal
Create a polished React/Vite website for the India 2026 itinerary, using the workbook content as the source of truth and making the plan easier to browse visually.

## Scope
The site is a single-page travel planner for Oct 24-Nov 8, 2026. It covers:
- Route overview and trip stats.
- Daily itinerary with dates, sleep city, pace, transport, duration, connection notes, and comfort notes.
- Route/transport checks with color coding for flights, cars, taxis/transfers, and connection cautions.
- Place guide with why each stop is included, historical context, highlights, and pacing notes.
- Hotel plan by city and dates.
- Visual gallery cards and external image-search inspiration links.

## Route
Mumbai -> Aurangabad/Ellora -> Delhi -> Agra -> Jaipur -> Rishikesh -> Udaipur -> Mumbai.

Rishikesh is required and should be visibly presented as the mountain/river stop. Ellora Caves are required and should remain a protected highlight.

## UX Direction
The site should feel like a premium travel planner, not a marketing landing page. The first screen should immediately show the actual trip, route, dates, and core choices. It should use richer colors, emoji/icon labels, and clear visual hierarchy while remaining easy to scan on mobile and laptop screens.

## Technical Approach
Use Vite, React, and TypeScript. Keep the content in local typed data files and render it through reusable components. No backend is needed. The app should build as static assets and be deployable through GitHub Pages.

## Validation
The final app must build successfully, render locally, contain no train references, include Rishikesh and Udaipur, and show the daily itinerary from Oct 24-Nov 8 without date gaps.
