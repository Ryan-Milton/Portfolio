import {
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { buttonVariants } from "@heroui/react";
import Link from "next/link";

import PostCard from "@/components/blogPostCard";
import { FadeIn } from "@/components/motion";
import { ProjectRail } from "@/components/project-rail";
import Resume from "@/components/resume";
import { TrackedLink } from "@/components/tracked-link";
import { projects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { getAllPosts } from "@/lib/blog";

const socialLinks = [
  { href: siteConfig.links.linkedin, icon: faLinkedin, label: "LinkedIn" },
  { href: siteConfig.links.youtube, icon: faYoutube, label: "YouTube" },
];

export default function Home() {
  const posts = getAllPosts().slice(0, 2);

  return (
    <div className="w-full pb-12 sm:pb-20">
      <section className="mx-auto w-full max-w-6xl pb-20 pt-16 sm:pb-24 sm:pt-24">
        <FadeIn>
          <div className="flex flex-wrap items-center gap-3">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-violet-600 dark:text-violet-400">
              Ryan Milton / Seattle
            </p>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800 dark:border-emerald-500/25 dark:bg-emerald-500/10 dark:text-emerald-300">
              <span aria-hidden className="size-1.5 rounded-full bg-emerald-500" />
              Open to select opportunities
            </span>
          </div>
        </FadeIn>
        <FadeIn delay={0.08}>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl dark:text-zinc-50">
            Senior software engineer building products across{" "}
            <span className="text-zinc-500 dark:text-zinc-300">
              web, mobile, and desktop.
            </span>
          </h1>
        </FadeIn>
        <FadeIn delay={0.16}>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
            I&apos;m a Seattle-based product engineer and Navy veteran. I work
            primarily in JavaScript and TypeScript, creating polished
            interfaces and the systems behind them.
          </p>
          <p className="mt-3 font-mono text-xs uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
            Seattle metro / Hybrid or remote
          </p>
        </FadeIn>
        <FadeIn delay={0.24}>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <TrackedLink
              className={`${buttonVariants({ size: "lg", variant: "primary" })} site-primary-button`}
              event="explore_projects_clicked"
              href="#selected-projects"
              properties={{ location: "hero" }}
            >
              Explore projects
            </TrackedLink>
            <TrackedLink
              className={buttonVariants({ size: "lg", variant: "outline" })}
              event="social_link_clicked"
              href={siteConfig.links.github}
              properties={{ location: "hero", network: "github" }}
              rel="noopener noreferrer"
              target="_blank"
            >
              View GitHub
              <span aria-hidden>{"\u2197"}</span>
            </TrackedLink>
            <ul aria-label="Social profiles" className="ml-1 flex gap-1">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <TrackedLink
                    aria-label={`${social.label} (opens in a new tab)`}
                    className="inline-flex size-11 items-center justify-center rounded-full text-zinc-500 outline-none transition-colors hover:bg-zinc-200/70 hover:text-violet-600 focus-visible:ring-2 focus-visible:ring-violet-500 motion-reduce:transition-none dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-violet-300"
                    event="social_link_clicked"
                    href={social.href}
                    properties={{
                      location: "hero",
                      network: social.label.toLowerCase(),
                    }}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FontAwesomeIcon aria-hidden className="size-5" icon={social.icon} />
                  </TrackedLink>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </section>

      <div className="mx-auto w-full max-w-6xl border-t border-zinc-300 dark:border-zinc-700" />

      <ProjectRail projects={projects} />

      <section className="mx-auto mt-16 grid w-full max-w-6xl gap-12 border-t border-zinc-200/80 pt-20 sm:mt-20 lg:mt-24 lg:grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.9fr)] dark:border-zinc-800">
        <div>
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
                Notes from active builds.
              </h2>
            </div>
            <Link
              className="shrink-0 whitespace-nowrap text-sm font-semibold text-violet-600 dark:text-violet-400"
              href="/blog"
            >
              All entries &rarr;
            </Link>
          </div>
          <div className="mt-7 grid gap-5">
            {posts.map((post) => (
              <PostCard key={post.slug} headingLevel={3} post={post} />
            ))}
          </div>
        </div>
        <div>
          <Resume />
        </div>
      </section>

      <section className="mx-auto mt-24 w-full max-w-6xl border-t border-zinc-200 pt-10 dark:border-zinc-800">
        <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-end">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
              Hardware roots, flight-deck discipline, product focus.
            </h2>
            <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-300">
              Before software, I maintained Navy aircraft. That experience still
              shapes how I approach complex systems, operational constraints, and
              the responsibility that comes with shipping dependable work.
            </p>
          </div>
          <Link
            className={buttonVariants({ size: "md", variant: "secondary" })}
            href="/about"
          >
            More about me
          </Link>
        </div>
      </section>
    </div>
  );
}
