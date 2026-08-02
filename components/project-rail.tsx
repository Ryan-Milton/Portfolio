"use client";

import { useRef, useState } from "react";
import {
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

import { TrackedLink } from "@/components/tracked-link";
import type { Project } from "@/config/projects";

interface ProjectRailProps {
  projects: Project[];
}

interface ScrollState {
  canScrollBack: boolean;
  canScrollForward: boolean;
}

function ProjectVisual({ project }: { project: Project }) {
  return (
    <div className="relative h-56 overflow-hidden bg-zinc-950 p-6 text-zinc-100 sm:h-64">
      {project.media ? (
        <>
          <Image
            fill
            alt={project.media.alt}
            className="object-cover opacity-75 transition-transform duration-700 motion-reduce:transition-none motion-safe:group-hover:scale-[1.03]"
            sizes="(min-width: 640px) 32rem, 85vw"
            src={project.media.src}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/15 to-zinc-950/30" />
        </>
      ) : (
        <>
          <div
            aria-hidden
            className="absolute -right-20 -top-24 size-64 rounded-full bg-violet-500/25 blur-3xl transition-transform duration-700 motion-reduce:transition-none motion-safe:group-hover:scale-110"
          />
          <div
            aria-hidden
            className="absolute -bottom-20 -left-16 size-52 rounded-full bg-fuchsia-700/15 blur-3xl"
          />
        </>
      )}

      <div className="relative flex h-full flex-col justify-between gap-6">
        <div className="flex items-center justify-between gap-4">
          <span className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-violet-200">
            {project.featured ? "Featured system" : "Selected build"}
          </span>
          <span aria-hidden className="font-mono text-xs text-zinc-500">
            /{project.slug}
          </span>
        </div>

        {project.media ? (
          <p className="max-w-xs font-mono text-xs uppercase tracking-[0.18em] text-zinc-300">
            {project.techStack.slice(0, 3).join(" / ")}
          </p>
        ) : project.architecture ? (
          <ol
            aria-label={`${project.name} architecture flow`}
            className="grid grid-cols-2 gap-2"
          >
            {project.architecture.map((step, index) => (
              <li
                key={step}
                className="rounded-lg border border-white/10 bg-white/[0.045] px-3 py-2.5 backdrop-blur-sm"
              >
                <span className="block font-mono text-[0.62rem] text-violet-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mt-1 block text-xs text-zinc-200 sm:text-sm">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        ) : (
          <div>
            <p className="text-3xl font-semibold tracking-tight text-white">
              Native utility.
              <br />
              Focused scope.
            </p>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-violet-300">
              {project.techStack.join(" / ")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectRailCard({ project }: { project: Project }) {
  const headingId = `${project.slug}-rail-title`;
  const extraTechnologyCount = Math.max(project.techStack.length - 3, 0);

  return (
    <article
      aria-labelledby={headingId}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/65 shadow-sm transition-[border-color,box-shadow,transform] duration-300 motion-reduce:transition-none motion-safe:hover:-translate-y-0.5 motion-safe:hover:border-violet-300/70 motion-safe:hover:shadow-xl motion-safe:hover:shadow-violet-500/5 dark:border-zinc-800 dark:bg-zinc-900/55 dark:motion-safe:hover:border-violet-500/35"
    >
      <ProjectVisual project={project} />
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-violet-700 dark:border-violet-500/25 dark:bg-violet-500/10 dark:text-violet-300">
            <span aria-hidden className="size-1.5 rounded-full bg-violet-500" />
            {project.status}
          </span>
          <span className="text-xs text-zinc-500 dark:text-zinc-400">
            {project.releaseLabel}
          </span>
        </div>

        <h3
          className="mt-5 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50"
          id={headingId}
        >
          {project.name}
        </h3>
        <p className="mt-2 font-mono text-xs uppercase tracking-[0.16em] text-violet-600 dark:text-violet-400">
          {project.role}
        </p>
        <p className="mt-4 flex-1 text-sm leading-6 text-zinc-600 sm:text-base sm:leading-7 dark:text-zinc-300">
          {project.summary}
        </p>

        <ul aria-label="Technology stack" className="mt-5 flex flex-wrap gap-2">
          {project.techStack.slice(0, 3).map((technology) => (
            <li
              key={technology}
              className="rounded-md border border-zinc-200 bg-zinc-100/70 px-2.5 py-1 font-mono text-[0.68rem] text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800/70 dark:text-zinc-300"
            >
              {technology}
            </li>
          ))}
          {extraTechnologyCount > 0 && (
            <li className="px-1 py-1 font-mono text-[0.68rem] text-zinc-500 dark:text-zinc-400">
              +{extraTechnologyCount}
            </li>
          )}
        </ul>

        <div className="mt-6 border-t border-zinc-200/80 pt-5 dark:border-zinc-800">
          <TrackedLink
            aria-label={`See full details for ${project.name}`}
            className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-zinc-800 underline decoration-zinc-300 underline-offset-4 transition-colors motion-reduce:transition-none hover:text-violet-600 hover:decoration-violet-400 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-500 dark:text-zinc-200 dark:decoration-zinc-600 dark:hover:text-violet-300"
            event="project_detail_clicked"
            href={`/projects#${project.slug}`}
            properties={{ location: "project-rail", project: project.slug }}
          >
            Full project details
            <FontAwesomeIcon aria-hidden className="size-3" icon={faArrowRight} />
          </TrackedLink>
        </div>
      </div>
    </article>
  );
}

export function ProjectRail({ projects }: ProjectRailProps) {
  const railRef = useRef<HTMLOListElement>(null);
  const [scrollState, setScrollState] = useState<ScrollState>({
    canScrollBack: false,
    canScrollForward: projects.length > 1,
  });

  const scrollByCard = (direction: -1 | 1) => {
    const rail = railRef.current;
    const card = rail?.firstElementChild;

    if (!rail || !(card instanceof HTMLElement)) return;

    const gap = Number.parseFloat(window.getComputedStyle(rail).columnGap) || 0;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    rail.scrollBy({
      behavior: reduceMotion ? "auto" : "smooth",
      left: direction * (card.offsetWidth + gap),
    });
  };

  const handleScroll = () => {
    const rail = railRef.current;

    if (!rail) return;

    const nextState = {
      canScrollBack: rail.scrollLeft > 2,
      canScrollForward:
        rail.scrollLeft < rail.scrollWidth - rail.clientWidth - 2,
    };

    setScrollState((currentState) =>
      currentState.canScrollBack === nextState.canScrollBack &&
      currentState.canScrollForward === nextState.canScrollForward
        ? currentState
        : nextState,
    );
  };

  return (
    <section aria-labelledby="project-rail-heading" className="pt-20 sm:pt-24" id="selected-projects">
      <div className="mx-auto flex w-full max-w-6xl flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div className="max-w-2xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-violet-600 dark:text-violet-400">
            Selected projects
          </p>
          <h2
            className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50"
            id="project-rail-heading"
          >
            Products shaped from system to surface.
          </h2>
        </div>

        <div className="flex items-center justify-between gap-5 sm:justify-end">
          <Link
            className="text-sm font-semibold text-violet-600 underline decoration-violet-300 underline-offset-4 hover:text-violet-700 dark:text-violet-400 dark:decoration-violet-700"
            href="/projects"
          >
            View all projects
          </Link>
          <div className="flex items-center gap-2" aria-label="Project rail controls" role="group">
            <button
              aria-label="Scroll to previous project"
              className="inline-flex size-11 items-center justify-center rounded-full border border-zinc-300 bg-white/70 text-zinc-700 outline-none transition-colors hover:border-violet-400 hover:text-violet-600 focus-visible:ring-2 focus-visible:ring-violet-500 disabled:cursor-not-allowed disabled:opacity-35 motion-reduce:transition-none dark:border-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-300 dark:hover:border-violet-500 dark:hover:text-violet-300"
              disabled={!scrollState.canScrollBack}
              type="button"
              onClick={() => scrollByCard(-1)}
            >
              <FontAwesomeIcon aria-hidden className="size-4" icon={faArrowLeft} />
            </button>
            <button
              aria-label="Scroll to next project"
              className="inline-flex size-11 items-center justify-center rounded-full border border-zinc-300 bg-white/70 text-zinc-700 outline-none transition-colors hover:border-violet-400 hover:text-violet-600 focus-visible:ring-2 focus-visible:ring-violet-500 disabled:cursor-not-allowed disabled:opacity-35 motion-reduce:transition-none dark:border-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-300 dark:hover:border-violet-500 dark:hover:text-violet-300"
              disabled={!scrollState.canScrollForward}
              type="button"
              onClick={() => scrollByCard(1)}
            >
              <FontAwesomeIcon aria-hidden className="size-4" icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>

      <p className="sr-only" id="project-rail-instructions">
        Scroll horizontally or use the previous and next controls to explore projects.
      </p>
      <ol
        ref={railRef}
        aria-describedby="project-rail-instructions"
        aria-label="Projects"
        className="project-rail-track mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain pb-5 focus-visible:rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-500 sm:mt-12 sm:gap-6"
        tabIndex={0}
        onScroll={handleScroll}
      >
        {projects.map((project) => (
          <li
            key={project.slug}
            className="w-[min(85vw,32rem)] flex-none snap-start"
          >
            <ProjectRailCard project={project} />
          </li>
        ))}
      </ol>
    </section>
  );
}
