# Ryan Milton Portfolio

Personal portfolio and development log for [Ryan Milton](https://ryguy.dev), a Seattle-based senior software engineer focused on frontend, React Native, and product engineering.

## Stack

- Next.js 16 App Router and React 19
- TypeScript
- Tailwind CSS v4 with a custom kinetic-editorial design system
- Motion for scroll choreography and Phosphor for icons
- File-based MDX rendered with `next-mdx-remote`
- `next-themes` for light and dark modes
- Anonymous, minimal PostHog analytics

## Requirements

- Node.js 22 or newer
- npm 10

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verification

```bash
npm run lint
npm run typecheck
npm run build
```

Run all checks with `npm run check`.

## Content

Projects are defined in `config/projects.ts`. Devlog entries are MDX files in `content/blog/`; archived entries remain available at their original URLs and are listed at `/blog/archive`.

The resume download is rendered only when `public/resume.pdf` contains data. Add the current resume at that path before launch.

## Analytics

PostHog is initialized only in production when both variables are present:

```bash
NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN=
NEXT_PUBLIC_POSTHOG_HOST=
```

The site records anonymous path-only pageviews and explicit project, devlog, resume, and social-link events. PostHog cookieless mode must be enabled in the PostHog project. Autocapture, identification, person profiles, feature flags, performance capture, exceptions, surveys, and session replay are disabled.

## Deployment

The site is designed for Vercel. Configure the PostHog variables, connect `ryguy.dev`, redirect `www` to the apex domain, and verify generated social previews before launch.
