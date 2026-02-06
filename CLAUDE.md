# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Ryan Milton built with Next.js 14 (App Router), TypeScript, NextUI v2, and Tailwind CSS. Fully static site with no external database or APIs — blog content is file-based MDX.

## Commands

- **Dev server:** `npm run dev`
- **Build:** `npm run build`
- **Lint (with auto-fix):** `npm run lint`
- **No test framework is configured.**

Package lock is disabled (`.npmrc` has `package-lock=false`).

## Architecture

### Routing (App Router)

- `/` — Homepage (hero, featured blog posts, work history, contact)
- `/about` — Bio and social links
- `/projects` — Project showcase grid
- `/blog` — Blog listing
- `/blog/[slug]` — Individual blog posts (statically generated via `generateStaticParams`)

### Server vs Client Components

Pages are Server Components by default. Client components are limited to:
- `app/providers.tsx` — NextUI + next-themes providers
- `components/navbar.tsx` — Navigation with active route state
- `components/theme-switch.tsx` — Dark/light mode toggle

### Blog System

File-based MDX blog in `content/blog/`. Each `.mdx` file uses gray-matter frontmatter:

```yaml
---
title: "Post Title"
summary: "Short description"
publishedAt: "2024-01-03"
tags: ["tag1", "tag2"]
---
```

`lib/blog.ts` provides `getAllPosts()`, `getPostBySlug(slug)`, and `getAllSlugs()` — all read directly from the filesystem. Blog posts are rendered server-side with `next-mdx-remote`.

### Data Sources

- **Blog posts:** `content/blog/*.mdx` (filesystem)
- **Projects:** `config/projects.ts` (static TypeScript array)
- **Site config/nav:** `config/site.ts`

### Styling

Tailwind CSS utilities + NextUI components. Dark mode via `next-themes` (class-based). Blog prose styled with `@tailwindcss/typography`. Custom fonts: Ubuntu (sans) and Ubuntu Mono (mono) configured in `tailwind.config.js`.

### Path Alias

`@/*` maps to the project root (e.g., `@/components/navbar`).

## ESLint Conventions

The `.eslintrc.json` enforces:
- Import ordering with newlines between groups (type, builtin, external, internal, parent, sibling, index)
- JSX props sorted alphabetically with callbacks last and shorthand first
- Blank lines before `return` statements and after variable declarations
- Unused imports are flagged as warnings
- `no-console` is a warning
