import Link from "next/link";

import PostCard from "@/components/blogPostCard";
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
      <section className="grid gap-12 border-b border-zinc-200 py-14 sm:py-20 lg:grid-cols-[minmax(0,1.5fr)_minmax(18rem,0.5fr)] lg:gap-16 dark:border-zinc-800">
        <div>
          <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.18em] text-violet-600 dark:text-violet-400">
            Ryan Milton / Seattle
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-[-0.035em] text-zinc-900 sm:text-5xl lg:text-6xl dark:text-zinc-50">
            Senior software engineer building across web, mobile, and desktop.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
            I&apos;m a product engineer and Navy veteran working primarily in
            JavaScript and TypeScript, with current projects spanning local-first
            software, native applications, real-time data, and hardware.
          </p>
          <Link
            className="mt-8 inline-block whitespace-nowrap text-sm font-bold text-zinc-900 underline decoration-violet-500 decoration-2 underline-offset-4 hover:text-violet-600 dark:text-zinc-100 dark:hover:text-violet-400"
            href="#selected-projects"
          >
            Inspect the project register {"\u2193"}
          </Link>
        </div>

        <aside className="border-t border-zinc-200 pt-5 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0 dark:border-zinc-800">
          <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
            Current record
          </p>
          <dl className="mt-4 divide-y divide-zinc-200 border-y border-zinc-200 text-sm dark:divide-zinc-800 dark:border-zinc-800">
            <div className="grid grid-cols-[5rem_1fr] gap-3 py-3">
              <dt className="font-mono text-xs text-zinc-500">Role</dt>
              <dd className="font-medium text-zinc-900 dark:text-zinc-100">
                Senior Software Engineer
              </dd>
            </div>
            <div className="grid grid-cols-[5rem_1fr] gap-3 py-3">
              <dt className="font-mono text-xs text-zinc-500">Base</dt>
              <dd className="text-zinc-600 dark:text-zinc-300">Seattle metro</dd>
            </div>
            <div className="grid grid-cols-[5rem_1fr] gap-3 py-3">
              <dt className="font-mono text-xs text-zinc-500">Status</dt>
              <dd className="flex items-center gap-2 text-zinc-600 dark:text-zinc-300">
                <span aria-hidden className="size-1.5 bg-emerald-500" />
                Open to select opportunities
              </dd>
            </div>
          </dl>
          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
            {publicProfiles.map((profile) => (
              <li key={profile.label}>
                <TrackedLink
                  className="whitespace-nowrap font-mono text-xs font-bold uppercase tracking-[0.08em] text-zinc-600 underline decoration-zinc-300 underline-offset-4 hover:text-violet-600 dark:text-zinc-300 dark:decoration-zinc-700 dark:hover:text-violet-400"
                  event="social_link_clicked"
                  href={profile.href}
                  properties={{ location: "homepage-record", network: profile.network }}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {profile.label} {"\u2197"}
                </TrackedLink>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <ProjectRegister projects={projects} updates={projectUpdates} />

      <section className="grid border-b border-zinc-200 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,0.72fr)] dark:border-zinc-800">
        <div className="py-16 lg:border-r lg:border-zinc-200 lg:pr-10 dark:lg:border-zinc-800">
          <div className="flex items-end justify-between gap-5">
            <div>
              <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.18em] text-violet-600 dark:text-violet-400">
                02 / Field notes
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
                Recent development log
              </h2>
            </div>
            <Link
              className="shrink-0 whitespace-nowrap font-mono text-xs font-bold uppercase tracking-[0.1em] text-zinc-600 underline decoration-zinc-300 underline-offset-4 hover:text-violet-600 dark:text-zinc-300 dark:decoration-zinc-700 dark:hover:text-violet-400"
              href="/blog"
            >
              Full log {"\u2192"}
            </Link>
          </div>
          <div className="mt-8 border-t border-zinc-200 dark:border-zinc-800">
            {recentPosts.map((post) => (
              <PostCard key={post.slug} headingLevel={3} post={post} />
            ))}
          </div>
        </div>

        <div className="py-16 lg:pl-10">
          <Resume />
        </div>
      </section>

      <section className="grid gap-8 py-16 md:grid-cols-[minmax(0,0.45fr)_minmax(0,1fr)] md:gap-14">
        <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.18em] text-violet-600 dark:text-violet-400">
          04 / Operating context
        </p>
        <div>
          <h2 className="max-w-3xl text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
            Hardware roots, flight-deck discipline, product focus.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-zinc-600 dark:text-zinc-300">
            Before software, I maintained Navy aircraft. That experience still
            shapes how I approach complex systems, operational constraints, and
            the responsibility that comes with shipping dependable work.
          </p>
          <Link
            className="mt-6 inline-block whitespace-nowrap text-sm font-bold text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:text-violet-600 dark:text-zinc-100 dark:decoration-zinc-700 dark:hover:text-violet-400"
            href="/about"
          >
            Read the full record {"\u2192"}
          </Link>
        </div>
      </section>
    </div>
  );
}
