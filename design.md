# Design - Ryan Milton Portfolio

## Design Read

Reading this as a developer portfolio for hiring teams, with an
Awwwards-experimental kinetic-editorial language, leaning toward custom Tailwind
tokens, oversized grotesk typography, real product media, and isolated Motion
scroll choreography.

## Mode And Dials

- Redesign mode: overhaul. Visual language starts over while content and
  information architecture remain protected.
- `DESIGN_VARIANCE`: 9. Each major section uses a distinct composition.
- `MOTION_INTENSITY`: 8. Motion carries hierarchy and project storytelling.
- `VISUAL_DENSITY`: 3. Hiring teams get one clear idea per viewport.

The previous reading was approximately 5 / 1 / 6: asymmetric editorial grids,
almost no motion, and dense repeated metadata rows.

## Protected Contracts

- Keep every route, project anchor, primary navigation label, and blog URL.
- Keep `#selected-projects` as the homepage project destination.
- Preserve the existing copy voice, factual claims, metadata, structured data,
  and sitemap behavior.
- Preserve focus states, semantic order, keyboard navigation, alt text, contrast,
  and reduced-motion support.
- Preserve all PostHog event names and property shapes.
- Keep public contact details limited to GitHub, LinkedIn, YouTube, and the resume.

## Existing-State Audit

### Useful Content

- Four substantial projects with constraints, architecture, current work, and
  supporting devlogs.
- A direct biography connecting aviation maintenance to dependable software.
- Current Meta contract role and a downloadable resume.
- Static MDX devlog, canonical metadata, Open Graph images, and structured data.
- Anonymous, explicit-interaction-only analytics and a clear privacy page.

### Retired Patterns

- Field-record and case-file vocabulary.
- Numbered section eyebrows and repeated ruled lists.
- Architecture blocks that can be mistaken for product screenshots.
- Static placeholder motion components.
- Hero metadata tables, build-style footer details, and hand-drawn icons.

## Visual Language

Genre: kinetic engineering editorial. The site should feel authored and
experimental without obscuring project evidence.

- Display and body: Archivo, using weight and scale for hierarchy.
- Technical details: IBM Plex Mono, used sparingly.
- Light theme: warm optical white with carbon text.
- Dark theme: carbon with optical-white text.
- Single accent: electric yellow-green. It marks actions, focus, active project
  state, and meaningful status only.
- Radius: 4px for surfaces and controls. Circles are reserved for icon controls.
- No gradients, glow fields, glass cards, invented interfaces, decorative SVGs,
  or generic three-card grids.

## Page Families

- Homepage: full-viewport type composition followed by sticky project
  storytelling, an offset experience sequence, a devlog index, and a portrait-led
  biography close.
- Projects: four evidence chapters with project-specific compositions. The same
  template must not be repeated four times.
- About: portrait-led long-form narrative with a compact career trajectory.
- Devlog indexes: large typographic entries with selective media, not cards.
- Articles and utility pages: restrained long-document layouts using the same
  typography and tokens.

## Motion Rationale

- Hero reveals establish reading order.
- The project stage binds scroll progress to the selected evidence, turning a
  long project list into one focused story at a time.
- Image masks and restrained scale changes reveal real product detail.
- Navigation and control motion communicates state transitions.
- Article motion stays minimal so reading remains stable.

All motion above a simple hover lives in small client-leaf components using
Motion. Reduced motion removes transforms, parallax, and timed sequencing while
preserving every piece of content.

## Media Policy

- Eagle Eye uses the existing public dashboard image with map attribution visible.
- Knosys uses the approved synthetic-data Tasks capture.
- The About page uses the existing portrait.
- SpeedDeck and Klipt use factual, source-backed evidence compositions until safe
  current screenshots exist. They must never be presented as screenshots.
- Project media remains optional so new captures can be added without changing
  page structure.

## Accessibility And Performance Floor

- No horizontal overflow at 320, 375, 414, or 768 pixels.
- Hero copy and primary action fit the initial viewport.
- Desktop navigation remains one line and no taller than 80px.
- All interactions work with keyboard, touch, and without hover.
- Minimum WCAG AA contrast in both themes.
- No animation is required to understand content.
- Target LCP under 2.5 seconds, INP under 200 milliseconds, and CLS under 0.1.
