# CLAUDE.md

## Project Overview

Personal portfolio for Ryan Milton built with Next.js 16, React 19, TypeScript, Tailwind CSS v4, and Motion. The site is statically generated and its devlog is file-based MDX.

## Commands

- Development: `npm run dev`
- Lint: `npm run lint`
- Type check: `npm run typecheck`
- Production build: `npm run build`
- Full verification: `npm run check`

Use Node.js 22 and npm. Keep `package-lock.json` committed.

## Routes

- `/` - Positioning, selected projects, devlog, and experience
- `/about` - Biography and public profiles
- `/projects` - Expanded project showcase
- `/blog` - Current devlog entries
- `/blog/archive` - Archived writing
- `/blog/[slug]` - Statically generated MDX entries
- `/privacy` - Analytics disclosure

## Architecture

Pages are Server Components by default. Client components are limited to navigation, themes, project-stage motion, click-to-load media, and anonymous analytics interactions.

Projects live in `config/projects.ts`. Site navigation and public profile URLs live in `config/site.ts`.

Devlog content lives in `content/blog/*.mdx` and supports `published` or `archived` status plus article or video formats. `lib/blog.ts` reads content from the filesystem, and `next-mdx-remote` is the only MDX rendering pipeline.

The custom kinetic-editorial design system is documented in `design.md` and implemented with Tailwind v4 tokens in `styles/globals.css`. Motion code belongs in isolated client leaves and must include reduced-motion behavior. Icons come from Phosphor.

PostHog is production-only, anonymous, and intentionally limited. Do not enable identity, autocapture, surveys, or session replay without explicit approval.

The resume download is conditional on `public/resume.pdf` having a non-zero size. Public contact details are limited to GitHub, LinkedIn, and YouTube; email appears only inside the resume.
