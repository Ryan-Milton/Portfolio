import { Metadata } from "next";

import { projects } from "@/config/projects";
import { accentClasses } from "@/config/colors";
import ProjectCard from "@/components/projectCard";
import { AnimatedGrid, AnimatedGridItem } from "@/components/animatedGrid";
import { FadeIn } from "@/components/motion";

export const metadata: Metadata = {
  title: "Projects",
  description: "A showcase of things I've built and worked on.",
};

export default function ProjectsPage() {
  const featured = projects.find((p) => p.featured);
  const remaining = projects.filter((p) => !p.featured);

  return (
    <div>
      <FadeIn>
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
      </FadeIn>

      {/* Featured project */}
      {featured && (
        <FadeIn className="mt-12" delay={0.1}>
          <div
            className={`relative overflow-hidden rounded-xl border border-zinc-100 bg-zinc-50/10 p-6 md:p-8 dark:border-zinc-700/40 dark:bg-zinc-800/10`}
          >
            <div
              className={`absolute inset-y-0 left-0 w-1 bg-gradient-to-b ${accentClasses[featured.accent || "blue"].border}`}
            />
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex-1">
                <span className="text-xs font-medium uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                  Featured Project
                </span>
                <h2 className="mt-2 text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                  {featured.name}
                </h2>
                <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
                  {featured.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {featured.techStack.map((tech) => (
                    <span
                      key={tech}
                      className={`rounded-full px-3 py-1 text-xs font-medium ${accentClasses[featured.accent || "blue"].badge}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div
                className={`hidden h-32 w-32 rounded-full bg-gradient-to-br opacity-20 blur-2xl md:block ${accentClasses[featured.accent || "blue"].border}`}
              />
            </div>
          </div>
        </FadeIn>
      )}

      {/* Project grid */}
      <AnimatedGrid className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {remaining.map((project, i) => (
          <AnimatedGridItem key={project.name} index={i}>
            <ProjectCard project={project} />
          </AnimatedGridItem>
        ))}
      </AnimatedGrid>
    </div>
  );
}
