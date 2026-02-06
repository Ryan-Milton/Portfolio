# Portfolio Implementation Plan

## Overview

This document outlines the plan to fully implement the portfolio website as originally intended: a main page with a summary, project/work history, and contact section with a downloadable resume; a projects showcase page; and a blog section powered by local Markdown files rendered as JSX.

---

## Current State vs. Goal

| Feature | Current State | Goal |
|---------|--------------|------|
| Main page (summary + work history) | Partially done — has hero bio and Resume component | Add contact section, fix resume download |
| Download Resume button | Button exists, does nothing (`href="#"`) | Downloads actual PDF |
| Contact section | Does not exist on main page | Contact info/form section on main page |
| Projects page | Empty placeholder (title only) | Full project showcase with cards |
| Blog listing | Depends on Supabase (broken without it) | Works with local Markdown files |
| Blog post rendering | Depends on Supabase + MDX | Reads local `.md`/`.mdx` files, renders as JSX |

---

## Phase 1: Blog System (File-Based Markdown)

The current blog is 100% dependent on Supabase, which means nothing renders without a live database connection. Since the goal is posts "uploaded as Markdown," a **file-based approach** is the right fit — content lives in the repo with no external dependency.

### 1.1 — Create a `/content/blog/` directory for Markdown posts

- Each post is a `.mdx` file with frontmatter (title, summary, date, slug, tags).
- Example structure:
  ```
  content/blog/
    eva.mdx
    focus-app-post.mdx
    gamify-your-life.mdx
    learning-from-experience.mdx
  ```
- Frontmatter format:
  ```yaml
  ---
  title: "Meet EVA"
  summary: "The Ultimate Digital Assistant"
  slug: "eva"
  publishedAt: "2024-01-03"
  tags: ["ai", "product"]
  ---
  ```

### 1.2 — Build a Markdown utility layer (`lib/blog.ts`)

- Use `fs` to read files from `/content/blog/`.
- Use `gray-matter` (new dependency) to parse frontmatter.
- Use `next-mdx-remote` (already installed) to serialize MDX content.
- Export helpers:
  - `getAllPosts()` — returns all posts sorted by date descending
  - `getPostBySlug(slug)` — returns a single post with parsed MDX
- Sort posts by date descending.

### 1.3 — Convert blog pages to Server Components

- **`/blog/page.tsx`** — Fetch all posts at build time via the file-based utility. Remove `"use client"` and Supabase dependency.
- **`/blog/[slug]/page.tsx`** — Fetch single post by slug, render MDX server-side. Remove `"use client"` and Supabase dependency.
- Add `generateStaticParams()` for static generation of all blog routes.
- Add `generateMetadata()` per post for proper SEO.

### 1.4 — Create seed blog posts

- Migrate the 4 hardcoded posts into actual `.mdx` files:
  - `eva.mdx` — Meet EVA
  - `focus-app-post.mdx` — Need to focus? There's an app for that!
  - `gamify-your-life.mdx` — Gamify Your Life!
  - `learning-from-experience.mdx` — Learning from experience

### 1.5 — Uncomment blog in navigation

- Re-enable the "Blog" link in `config/site.ts` for both `navItems` and `navMenuItems`.

---

## Phase 2: Main Page Overhaul

### 2.1 — Refactor home page to Server Component

- Remove Supabase dependency; use the new `getAllPosts()` utility to fetch featured posts.
- Remove `"use client"`, `useState`, `useEffect` — make it a proper server component.
- Keep the hero section, social links, featured posts (top 3), and Resume component.

### 2.2 — Add a Contact section

- Add a contact section below the resume/posts area on the home page.
- Include email link, social links, and a "Get in touch" message.
- Option: simple contact form using a service like Formspree, Resend, or a Next.js API route.

### 2.3 — Fix the "Download Resume" button

- Place resume PDF in `/public/resume.pdf`.
- Update the Resume component's button to use an `<a>` tag with `download` attribute pointing to `/resume.pdf`.
- The button currently has `href="#"` and no download logic.

---

## Phase 3: Projects Page

### 3.1 — Create a project data file (`config/projects.ts`)

- Define a `Project` type:
  ```typescript
  interface Project {
    name: string;
    description: string;
    image?: string;
    techStack: string[];
    liveUrl?: string;
    repoUrl?: string;
    year: string;
  }
  ```
- Populate with actual projects (EVA, OhKei Life, Focus App, etc.).

### 3.2 — Build a `ProjectCard` component

- Display project image/screenshot, title, description, and tech stack badges.
- Links to live site and/or GitHub repo.
- Styled consistently with the existing PostCard and Resume card design (NextUI Card).

### 3.3 — Implement the `/projects` page

- Grid layout of project cards.
- Responsive: 1 column on mobile, 2–3 columns on desktop.
- Optional: category or tech stack filter.

---

## Phase 4: Cleanup & Polish

### 4.1 — Fix dead import in About page

- Remove `import { Container } from "@/components/Container"` in `app/about/page.tsx` — the component does not exist.

### 4.2 — Fill in placeholder social links

- Replace `href="#"` on GitHub and LinkedIn with actual URLs in:
  - `app/page.tsx` (home page)
  - `app/about/page.tsx` (about page)

### 4.3 — Update `config/site.ts` links

- Replace NextUI boilerplate links (GitHub, Twitter, Discord, Sponsor) with personal links.

### 4.4 — Remove Supabase dependency (optional)

- If Supabase is no longer needed for blog content, remove:
  - `@supabase/supabase-js` and `@supabase/ssr` from dependencies
  - `/utils/supabase/` directory
- Keep if planned for other features (contact form submissions, analytics, etc.).

### 4.5 — Remove the `/docs` route

- The `/docs` page is a placeholder that does not fit the stated vision. Remove `app/docs/` entirely.

### 4.6 — Add a resume PDF

- Add a placeholder or actual resume PDF to `/public/resume.pdf`.

---

## Dependency Changes

| Package | Action | Reason |
|---------|--------|--------|
| `gray-matter` | **Add** | Parse Markdown frontmatter from `.mdx` files |
| `next-mdx-remote` | **Keep** | Already installed; used for MDX rendering |
| `@supabase/supabase-js` | **Remove** (optional) | No longer needed if blog is file-based |
| `@supabase/ssr` | **Remove** (optional) | Same as above |

---

## Final Route Structure

```
/                   → Home (hero, featured posts, work history, contact)
/about              → About (bio, profile photo, social links)
/projects           → Projects showcase
/blog               → Blog listing (all posts)
/blog/[slug]        → Individual blog post (MDX rendered)
```

---

## Recommended Implementation Order

1. **Phase 4.1** — Fix the dead `Container` import (unblocks builds)
2. **Phase 1** — Blog system (biggest architectural change; foundation for homepage)
3. **Phase 2** — Main page overhaul (depends on Phase 1 for `getAllPosts`)
4. **Phase 3** — Projects page (independent; can be done anytime)
5. **Phase 4 (remaining)** — Cleanup and polish
