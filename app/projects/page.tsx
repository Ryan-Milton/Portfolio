import { Metadata } from "next";

import { projects } from "@/config/projects";
import ProjectCard from "@/components/projectCard";

export const metadata: Metadata = {
  title: "Projects",
  description: "A showcase of things I've built and worked on.",
};

export default function ProjectsPage() {
  return (
    <div>
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Things I&apos;ve built and worked on.
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          A collection of projects that I&apos;ve poured my time and energy
          into. From AI-powered assistants to lifestyle brands, these are the
          things that keep me up at night (in a good way).
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}
