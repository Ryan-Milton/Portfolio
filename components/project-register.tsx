"use client";

import { startTransition, useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
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

function EvidenceCanvas({ project }: { project: Project }) {
  if (project.media) {
    const portrait = project.slug === "knosys";

    return (
      <div className="media-frame h-full min-h-[28rem] bg-zinc-900 dark:bg-zinc-900">
        <Image
          fill
          alt={project.media.alt}
          className={portrait ? "object-contain p-6 sm:p-10" : "object-cover"}
          sizes="(min-width: 1024px) 48vw, 100vw"
          src={project.media.src}
        />
        <div className="absolute bottom-4 left-4 rounded-sm bg-black/80 px-3 py-2 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-white">
          Real product interface
        </div>
      </div>
    );
  }

  if (project.slug === "speeddeck") {
    return (
      <div className="flex h-full min-h-[28rem] flex-col justify-between overflow-hidden rounded-sm bg-zinc-900 p-6 text-white sm:p-10">
        <p className="meta-label text-zinc-300">System architecture</p>
        <div className="space-y-1 text-[clamp(2.7rem,7vw,7rem)] font-extrabold leading-[0.82] tracking-[-0.07em]">
          <p>USB GNSS</p>
          <p className="text-violet-400">NMEA</p>
          <p>Rust runtime</p>
          <p>React HUD</p>
        </div>
        <p className="max-w-md text-sm leading-6 text-zinc-300">
          Physical positioning data moving through a native desktop runtime to an automotive display.
        </p>
      </div>
    );
  }

  return (
    <div className="flex h-full min-h-[28rem] flex-col justify-between overflow-hidden rounded-sm bg-zinc-900 p-6 text-white sm:p-10">
      <p className="meta-label text-zinc-300">Build direction</p>
      <p className="max-w-[8ch] text-[clamp(4rem,12vw,11rem)] font-extrabold leading-[0.78] tracking-[-0.08em] text-violet-400">
        Local by default.
      </p>
      <p className="max-w-md text-sm leading-6 text-zinc-300">
        Native macOS clipboard history designed around local storage, rich formats, and user control.
      </p>
    </div>
  );
}

function ProjectStory({
  index,
  onActivate,
  project,
  update,
}: {
  index: number;
  onActivate: (index: number) => void;
  project: Project;
  update?: ProjectUpdate;
}) {
  const ref = useRef<HTMLElement>(null);
  const isActive = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (isActive) {
      onActivate(index);
    }
  }, [isActive, index, onActivate]);

  return (
    <article ref={ref} className="flex min-h-[72dvh] flex-col justify-center py-14 lg:py-24">
      <div className="flex items-center gap-4 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-zinc-500 dark:text-zinc-400">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <span>{project.category}</span>
      </div>
      <h3 className="mt-5 text-5xl font-extrabold tracking-[-0.065em] text-zinc-950 sm:text-7xl dark:text-white">
        {project.name}
      </h3>
      <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
        {project.summary}
      </p>
      <p className="mt-6 max-w-lg border-l-4 border-violet-500 pl-4 text-base font-semibold leading-7 text-zinc-900 dark:text-zinc-100">
        {project.constraint}
      </p>
      <ul className="mt-7 grid max-w-xl gap-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
        {project.highlights.slice(0, 2).map((highlight) => (
          <li key={highlight} className="flex gap-3">
            <span aria-hidden className="mt-[0.65rem] h-1 w-5 shrink-0 bg-violet-500" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
      {update && (
        <Link
          className="mt-7 max-w-xl text-sm text-zinc-600 underline decoration-zinc-300 underline-offset-4 hover:text-zinc-950 dark:text-zinc-300 dark:decoration-zinc-700 dark:hover:text-white"
          href={`/blog/${update.slug}`}
        >
          Latest update: {update.title}, {formatUtcDate(update.publishedAt, "short")}
        </Link>
      )}
      <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
        <Link
          className="group inline-flex items-center gap-2 text-sm font-bold text-zinc-950 dark:text-white"
          href={`/projects#${project.slug}`}
        >
          Open project chapter
          <ArrowRight aria-hidden className="transition-transform group-hover:translate-x-1 motion-reduce:transition-none" size={17} weight="bold" />
        </Link>
        {project.links.map((link) => (
          <TrackedLink
            key={link.href}
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-600 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
            event="project_link_clicked"
            href={link.href}
            properties={{ destination: link.type, project: project.slug }}
            rel="noopener noreferrer"
            target="_blank"
          >
            {link.label}
            <ArrowUpRight aria-hidden className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none" size={15} weight="bold" />
          </TrackedLink>
        ))}
      </div>
      <div className="mt-10 lg:hidden">
        <EvidenceCanvas project={project} />
      </div>
    </article>
  );
}

export function ProjectRegister({ projects, updates }: ProjectRegisterProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  const handleActivate = useCallback((index: number) => {
    startTransition(() => setActiveIndex(index));
  }, []);

  const activeProject = projects[activeIndex];

  return (
    <section className="border-t border-zinc-200 dark:border-zinc-800" id="selected-projects">
      <div className="mx-auto max-w-[96rem] px-5 sm:px-8 lg:px-12">
        <header className="py-16 sm:py-24">
          <div className="kinetic-rule w-20" />
          <h2 className="section-title mt-8 max-w-[9ch] text-zinc-950 dark:text-white">
            Selected work, in motion.
          </h2>
        </header>

        <div className="lg:grid lg:grid-cols-[minmax(0,0.78fr)_minmax(28rem,1.22fr)] lg:gap-16">
          <div>
            {projects.map((project, index) => (
              <ProjectStory
                key={project.slug}
                index={index}
                onActivate={handleActivate}
                project={project}
                update={updates[project.name]}
              />
            ))}
          </div>

          <aside aria-live="polite" className="relative hidden lg:block">
            <div className="sticky top-28 h-[calc(100dvh-9rem)] max-h-[50rem] py-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.slug}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  className="h-full"
                  exit={{ opacity: 0, y: reduceMotion ? 0 : -24 }}
                  initial={{ opacity: 0, scale: reduceMotion ? 1 : 1.02, y: reduceMotion ? 0 : 24 }}
                  transition={{ duration: reduceMotion ? 0 : 0.55, ease: [0.16, 1, 0.3, 1] }}
                >
                  <EvidenceCanvas project={activeProject} />
                </motion.div>
              </AnimatePresence>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
