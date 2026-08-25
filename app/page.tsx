import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

import profilePic from "@/assets/FB_Profile.jpg";
import PostCard from "@/components/blogPostCard";
import { KineticHero } from "@/components/kinetic-hero";
import { ProjectRegister, type ProjectUpdate } from "@/components/project-register";
import Resume from "@/components/resume";
import { TrackedLink } from "@/components/tracked-link";
import { projects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { getAllPosts } from "@/lib/blog";

const publicProfiles = [
  { href: siteConfig.links.github, label: "GitHub", network: "github" },
  { href: siteConfig.links.linkedin, label: "LinkedIn", network: "linkedin" },
  { href: siteConfig.links.youtube, label: "YouTube", network: "youtube" },
];

export default function Home() {
  const allPosts = getAllPosts();
  const recentPosts = allPosts.slice(0, 3);
  const projectUpdates: Record<string, ProjectUpdate | undefined> = {};

  for (const project of projects) {
    projectUpdates[project.name] = allPosts.find(
      (post) => post.project === project.name,
    );
  }

  return (
    <div className="pb-12 sm:pb-20">
      <KineticHero />

      <ProjectRegister projects={projects} updates={projectUpdates} />

      <section className="mx-auto max-w-[96rem] border-t border-zinc-200 px-5 py-20 sm:px-8 sm:py-28 lg:px-12 dark:border-zinc-800">
        <Resume />
      </section>

      <section className="border-y border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto grid max-w-[96rem] gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[minmax(18rem,0.65fr)_minmax(0,1.35fr)] lg:px-12">
          <div>
            <p className="eyebrow text-zinc-500 dark:text-zinc-400">Development notes</p>
            <h2 className="mt-5 max-w-[8ch] text-5xl font-extrabold leading-[0.9] tracking-[-0.065em] text-zinc-950 sm:text-7xl dark:text-white">
              The work behind the work.
            </h2>
            <Link
              className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-zinc-950 dark:text-white"
              href="/blog"
            >
              Read the devlog
              <ArrowRight aria-hidden className="transition-transform group-hover:translate-x-1 motion-reduce:transition-none" size={17} weight="bold" />
            </Link>
          </div>
          <div className="border-t border-zinc-200 dark:border-zinc-800">
            {recentPosts.map((post) => (
              <PostCard key={post.slug} headingLevel={3} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[96rem] items-end gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[minmax(18rem,0.7fr)_minmax(0,1.3fr)] lg:px-12">
        <div className="media-frame aspect-[4/5] max-w-lg lg:translate-y-10">
          <Image
            fill
            alt="Ryan Milton in Seattle"
            className="object-cover grayscale transition-[filter] duration-500 hover:grayscale-0 motion-reduce:transition-none"
            sizes="(min-width: 1024px) 36vw, 100vw"
            src={profilePic}
          />
        </div>
        <div className="lg:pb-10">
          <h2 className="max-w-[12ch] text-4xl font-extrabold leading-[0.95] tracking-[-0.06em] text-zinc-950 sm:text-6xl dark:text-white">
            Flight-deck discipline. Product-engineering range.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
            Before software, I maintained Navy aircraft. That experience still shapes how I approach complex systems, operational constraints, and dependable work.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link className="group inline-flex items-center gap-2 text-sm font-bold text-zinc-950 dark:text-white" href="/about">
              Read my background
              <ArrowRight aria-hidden className="transition-transform group-hover:translate-x-1 motion-reduce:transition-none" size={17} weight="bold" />
            </Link>
            {publicProfiles.map((profile) => (
              <TrackedLink
                key={profile.label}
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-600 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
                event="social_link_clicked"
                href={profile.href}
                properties={{ location: "homepage-bio", network: profile.network }}
                rel="noopener noreferrer"
                target="_blank"
              >
                {profile.label}
                <ArrowUpRight aria-hidden className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none" size={15} weight="bold" />
              </TrackedLink>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
