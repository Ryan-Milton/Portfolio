"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { TrackedLink } from "@/components/tracked-link";
import type { Project } from "@/config/projects";
import { formatUtcDate } from "@/lib/date";

export interface ProjectUpdate {
  publishedAt: string;
  slug: string;
  title: string;
}

interface ProjectRegisterProps {
  projects: Project[];
  updates: Record<string, ProjectUpdate | undefined>;
}

function ProjectProof({
  project,
  update,
}: {
  project: Project;
  update?: ProjectUpdate;
}) {
  return (
    <div className="border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
      {project.media ? (
        <div className="relative aspect-[16/10] overflow-hidden border-b border-zinc-200 bg-zinc-950 dark:border-zinc-800">
          <Image
            fill
            alt={project.media.alt}
            className="object-cover opacity-85"
            sizes="(min-width: 1024px) 38vw, 100vw"
            src={project.media.src}
          />
        </div>
      ) : (
        <div className="border-b border-zinc-200 bg-zinc-950 p-5 text-zinc-100 dark:border-zinc-800 sm:p-6">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-zinc-300">
            System path
          </p>
          {project.architecture ? (
            <ol className="mt-5">
              {project.architecture.map((step, index) => (
                <li
                  key={step}
                  className="grid grid-cols-[2rem_1fr] gap-3 border-t border-white/20 py-3 text-sm"
                >
                  <span className="font-mono text-xs text-orange-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          ) : (
            <p className="mt-8 max-w-sm text-2xl font-bold tracking-tight">
              {project.constraint}
            </p>
          )}
        </div>
      )}

      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-zinc-500 dark:text-zinc-400">
          <span>{project.status}</span>
          <span>{project.releaseLabel}</span>
        </div>
        <p className="mt-5 text-base leading-7 text-zinc-600 dark:text-zinc-300">
          {project.summary}
        </p>
        {update && (
          <p className="mt-5 border-t border-zinc-200 pt-4 text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-300">
            Latest field note: {" "}
            <Link
              className="font-medium text-violet-600 underline decoration-zinc-300 underline-offset-2 dark:text-violet-400 dark:decoration-zinc-700"
              href={`/blog/${update.slug}`}
            >
              {update.title}
            </Link>{" "}
            <span className="font-mono text-xs text-zinc-500">
              / {formatUtcDate(update.publishedAt, "short")}
            </span>
          </p>
        )}
        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 border-t border-zinc-200 pt-4 dark:border-zinc-800">
          <Link
            className="text-sm font-bold text-zinc-900 underline decoration-zinc-300 underline-offset-2 hover:text-violet-600 dark:text-zinc-100 dark:decoration-zinc-700 dark:hover:text-violet-400"
            href={`/projects#${project.slug}`}
          >
            Open case file {"\u2192"}
          </Link>
          {project.links.map((link) => (
            <TrackedLink
              key={link.href}
              className="text-sm font-medium text-zinc-600 underline decoration-zinc-300 underline-offset-2 hover:text-violet-600 dark:text-zinc-300 dark:decoration-zinc-700 dark:hover:text-violet-400"
              event="project_link_clicked"
              href={link.href}
              properties={{ destination: link.type, project: project.slug }}
              rel="noopener noreferrer"
              target="_blank"
            >
              {link.label} {"\u2197"}
            </TrackedLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProjectRegister({ projects, updates }: ProjectRegisterProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  return (
    <section aria-labelledby="project-register-heading" id="selected-projects">
      <div className="border-y border-zinc-200 dark:border-zinc-800">
        <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(22rem,0.9fr)]">
          <div className="lg:border-r lg:border-zinc-200 lg:pr-8 dark:lg:border-zinc-800">
            <div className="flex items-end justify-between gap-5 border-b border-zinc-200 py-5 dark:border-zinc-800">
              <div>
                <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.18em] text-violet-600 dark:text-violet-400">
                  01 / Selected systems
                </p>
                <h2
                  className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50"
                  id="project-register-heading"
                >
                  Project register
                </h2>
              </div>
              <Link
                className="shrink-0 whitespace-nowrap font-mono text-xs font-bold uppercase tracking-[0.1em] text-zinc-600 underline decoration-zinc-300 underline-offset-2 hover:text-violet-600 dark:text-zinc-300 dark:decoration-zinc-700 dark:hover:text-violet-400"
                href="/projects"
              >
                All case files {"\u2192"}
              </Link>
            </div>

            <ol>
              {projects.map((project, index) => {
                const active = index === activeIndex;

                return (
                  <li key={project.slug} className="border-b border-zinc-200 last:border-b-0 dark:border-zinc-800">
                    <button
                      aria-controls="active-project-proof"
                      aria-pressed={active}
                      className={`grid w-full grid-cols-[2.5rem_minmax(0,1fr)] gap-3 py-5 text-left outline-none transition-colors focus-visible:bg-zinc-100 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-violet-500 active:bg-zinc-200 motion-reduce:transition-none sm:grid-cols-[3rem_minmax(0,1fr)_11rem] dark:active:bg-zinc-800 ${
                        active ? "bg-zinc-100 dark:bg-zinc-900" : "hover:bg-zinc-100/60 dark:hover:bg-zinc-900/60"
                      }`}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      onFocus={() => setActiveIndex(index)}
                    >
                      <span className="font-mono text-xs text-violet-600 dark:text-violet-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="min-w-0 pr-3">
                        <span className="block text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl dark:text-zinc-100">
                          {project.name}
                        </span>
                        <span className="mt-1 block text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                          {project.constraint}
                        </span>
                      </span>
                      <span className="hidden pt-1 text-right font-mono text-[0.68rem] uppercase tracking-[0.1em] text-zinc-500 sm:block dark:text-zinc-400">
                        {project.category}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>

          <aside
            aria-live="polite"
            className="py-8 lg:pl-8"
            id="active-project-proof"
          >
            <div className="sticky top-28">
              <ProjectProof
                project={activeProject}
                update={updates[activeProject.name]}
              />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
