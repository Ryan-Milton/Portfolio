import type { Metadata } from "next";

import ProjectCard from "@/components/projectCard";
import { projects } from "@/config/projects";

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
  return (
    <div className="pb-12 pt-4 sm:pb-20 sm:pt-8">
      <header className="max-w-3xl">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-violet-600 dark:text-violet-400">
          Selected work / 2026
        </p>
        <h1 className="mt-5 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl dark:text-zinc-50">
          Products shaped from system to surface.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8 dark:text-zinc-400">
          Local-first software, live operational data, and hardware-aware tools.
          Each project pairs a clear product constraint with the engineering
          needed to make it useful in the real world.
        </p>
      </header>

      <section aria-label="Selected projects" className="mt-12 sm:mt-16">
        <ol className="grid gap-8 sm:gap-10">
          {projects.map((project, index) => (
            <li key={project.slug}>
              <ProjectCard project={project} reverse={index % 2 === 1} />
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
