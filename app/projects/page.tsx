import type { Metadata } from "next";

import { ProjectCaseFile } from "@/components/project-case-file";
import { projects } from "@/config/projects";
import { getAllPosts } from "@/lib/blog";

const description =
  "Selected products by Ryan Milton: Knosys, Eagle Eye, SpeedDeck, and Klipt.";

export const metadata: Metadata = {
  alternates: {
    canonical: "/projects",
  },
  description,
  openGraph: {
    description,
    images: ["/opengraph-image"],
    title: "Projects by Ryan Milton",
    type: "website",
    url: "/projects",
  },
  title: "Projects",
  twitter: {
    card: "summary_large_image",
    description,
    images: ["/opengraph-image"],
    title: "Projects by Ryan Milton",
  },
};

export default function ProjectsPage() {
  const posts = getAllPosts();

  return (
    <div className="pb-12 sm:pb-20">
      <header className="grid gap-8 border-b border-zinc-200 py-12 sm:py-16 lg:grid-cols-[7rem_minmax(0,1fr)_18rem] dark:border-zinc-800">
        <p className="font-mono text-xs text-violet-600 dark:text-violet-400">
          INDEX / 2026
        </p>
        <div>
          <h1 className="text-4xl font-bold tracking-[-0.035em] text-zinc-900 sm:text-5xl lg:text-6xl dark:text-zinc-50">
            Project case files
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8 dark:text-zinc-400">
            Local-first software, live operational data, native utilities, and
            hardware-aware tools. Each file records the constraint, system, and
            current state.
          </p>
        </div>
        <dl className="border-y border-zinc-200 font-mono text-[0.68rem] uppercase tracking-[0.08em] dark:border-zinc-800">
          <div className="grid grid-cols-[5rem_1fr] gap-3 border-b border-zinc-200 py-3 dark:border-zinc-800">
            <dt className="text-zinc-500">Files</dt>
            <dd className="text-zinc-700 dark:text-zinc-300">{projects.length}</dd>
          </div>
          <div className="grid grid-cols-[5rem_1fr] gap-3 py-3">
            <dt className="text-zinc-500">Scope</dt>
            <dd className="text-zinc-700 dark:text-zinc-300">
              Web / Native / Hardware
            </dd>
          </div>
        </dl>
      </header>

      <section aria-label="Project case files">
        <ol>
          {projects.map((project, index) => (
            <li key={project.slug}>
              <ProjectCaseFile
                index={index}
                posts={posts.filter((post) => post.project === project.name)}
                project={project}
              />
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
