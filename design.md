# Design - Ryan Milton Portfolio

A locked Hallmark design system for the portfolio. Every page uses the same
technical-editorial language. Extend this file before introducing a local visual
exception.

## Genre

Technical editorial. The visual reference is an engineering field document: clear
records, ruled indexes, precise metadata, and evidence before decoration. It must
not imitate a terminal, cockpit, military form, or SaaS dashboard.

## Audience And Action

- Primary audience: hiring teams evaluating senior product-engineering work.
- Primary action: inspect projects and their supporting evidence.
- Secondary actions: read development notes, download the resume, open GitHub or
  LinkedIn.

## Macrostructure Family

- Homepage: Index-First. A compact introduction leads directly into the project
  register. No marketing hero or CTA cluster.
- Projects: Catalogue. Each project is a numbered case file with consistent fields
  and project-specific evidence.
- Content: Long Document. About, devlog entries, privacy, and utility routes rely on
  typography, margin metadata, and whitespace.
- Indexes: chronological ruled lists for current and archived devlog entries.

## Navigation And Footer

- Navigation: N9 edge-aligned minimal. Identity at left, destinations at right,
  theme and menu controls at the edge.
- Footer: Ft4 dense colophon. Navigation, public profiles, privacy, and build
  context share one ruled closing block.

## Theme

Light:

- `--color-paper`: oklch(96% 0.008 245)
- `--color-paper-2`: oklch(92% 0.010 245)
- `--color-ink`: oklch(18% 0.018 245)
- `--color-ink-2`: oklch(34% 0.016 245)
- `--color-muted`: oklch(48% 0.014 245)
- `--color-rule`: oklch(78% 0.012 245)
- `--color-accent`: oklch(61% 0.170 45)
- `--color-accent-ink`: var(--color-paper)
- `--color-focus`: oklch(50% 0.190 45)

Dark:

- `--color-paper`: oklch(15% 0.012 245)
- `--color-paper-2`: oklch(20% 0.014 245)
- `--color-ink`: oklch(93% 0.008 245)
- `--color-ink-2`: oklch(78% 0.010 245)
- `--color-muted`: oklch(67% 0.012 245)
- `--color-rule`: oklch(32% 0.014 245)
- `--color-accent`: oklch(72% 0.150 55)
- `--color-accent-ink`: var(--color-paper)
- `--color-focus`: oklch(78% 0.150 55)

Accent use stays below five percent of a viewport. It marks actions, active records,
focus, and small status signals only.

## Typography

- Display and body: Ubuntu, weights 400, 500, and 700, upright only.
- Labels and technical metadata: Ubuntu Mono, weights 400 and 700.
- Mono is limited to dates, indexes, statuses, and compact system data.
- Display tracking: `-0.035em`.
- Reading measure: 62 characters for articles, 72 for summaries.
- Display scale: `clamp(2.75rem, 7vw, 7.5rem)` only where the page needs a display
  statement. Index pages use smaller titles.

## Spacing

Use a four-point scale through named CSS variables:

- `--space-3xs`: 0.25rem
- `--space-2xs`: 0.5rem
- `--space-xs`: 0.75rem
- `--space-sm`: 1rem
- `--space-md`: 1.5rem
- `--space-lg`: 2rem
- `--space-xl`: 3rem
- `--space-2xl`: 4.5rem
- `--space-3xl`: 7rem

## Shape And Rules

- Hairline and one-pixel rules provide structure.
- Cards are reserved for actual media or contained controls, not every section.
- Default radius is 0.375rem. Pills are reserved for availability only.
- No gradients, glow blobs, glass surfaces, hard-offset shadows, or card-in-card
  diagrams.
- Project architecture uses numbered ruled rows.

## Motion

- No entrance reveals or staggered page animation.
- State transitions use `--duration-short: 160ms` and
  `--ease-out: cubic-bezier(0.16, 1, 0.3, 1)`.
- Project proof changes may crossfade; layout does not slide or bounce.
- Reduced-motion disables transitions.

## Microinteractions

- Links use underline position, rule color, or text color. They do not lift.
- Project rows expose the same state through hover, focus, and explicit selection.
- Success is silent. No celebratory feedback or decorative cursor effects.
- Icon-only controls are at least 44 by 44 pixels.

## CTA Voice

- Primary CTA: compact rectangular ink fill, short verb-first label.
- Secondary CTA: typographic link with directional arrow.
- No paired pill buttons and no repeated final CTA strip.

## Per-Page Allowances

- Homepage: one project proof pane using real media or project architecture.
- Projects: real screenshots and architecture diagrams only; no invented device
  frames.
- Content: typography only, except a supplied article image or video.
- About: one real portrait with a factual caption.

## What Pages Must Share

- Edge-aligned masthead and ruled footer.
- Paper, ink, safety-orange accent, and focus treatment.
- Ubuntu and Ubuntu Mono roles.
- Numbered record labels and date formatting.
- Compact rectangular controls and rule-based section rhythm.

## Accessibility Floor

- No horizontal overflow at 320, 375, 414, or 768 pixels.
- No two-line clickable labels.
- All interaction available by keyboard and without hover.
- Visible focus in both themes.
- Minimum AA contrast, reduced-motion support, and semantic document order.
