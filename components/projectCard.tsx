import { Card } from "@heroui/react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faCheck,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

import { TrackedLink } from "@/components/tracked-link";
import type { Project, ProjectLink } from "@/config/projects";

interface ProjectCardProps {
  headingLevel?: 2 | 3;
  project: Project;
  reverse?: boolean;
}

function ProjectLinkIcon({ type }: { type: ProjectLink["type"] }) {
  if (type === "source") {
    return <FontAwesomeIcon aria-hidden className="size-4" icon={faGithub} />;
  }

  if (type === "video") {
    return <FontAwesomeIcon aria-hidden className="size-3" icon={faPlay} />;
  }

  return (
    <FontAwesomeIcon
      aria-hidden
      className="size-3.5"
      icon={faArrowUpRightFromSquare}
    />
  );
}

export default function ProjectCard({
  headingLevel = 2,
  project,
  reverse,
}: ProjectCardProps) {
  const architecture = project.architecture;
  const Heading = headingLevel === 2 ? "h2" : "h3";
  const headingId = `${project.slug}-title`;
  const gridClassName = reverse
    ? "lg:grid-cols-[minmax(0,1.18fr)_minmax(18rem,0.82fr)]"
    : "lg:grid-cols-[minmax(18rem,0.82fr)_minmax(0,1.18fr)]";
  const visualClassName = reverse
    ? "lg:order-2 lg:border-l"
    : "lg:border-r";

  return (
    <article aria-labelledby={headingId} id={project.slug}>
      <Card.Root
        className="group overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/55 p-0 shadow-sm transition-[border-color,box-shadow,transform] duration-300 motion-reduce:transition-none motion-safe:hover:-translate-y-0.5 motion-safe:hover:border-violet-300/70 motion-safe:hover:shadow-xl motion-safe:hover:shadow-violet-500/5 dark:border-zinc-800 dark:bg-zinc-900/45 dark:motion-safe:hover:border-violet-500/35"
        variant="default"
      >
        <div
          className={`grid ${gridClassName} ${
            project.featured
              ? "xl:grid-cols-[minmax(22rem,0.9fr)_minmax(0,1.1fr)]"
              : ""
          }`}
        >
          <div
            className={`relative min-h-72 overflow-hidden border-b border-zinc-200/70 bg-zinc-950 p-6 text-zinc-100 sm:p-8 lg:min-h-full lg:border-b-0 dark:border-zinc-800 ${visualClassName}`}
          >
            {project.media ? (
              <Image
                fill
                alt={project.media.alt}
                className="object-cover opacity-75 transition-transform duration-700 motion-reduce:transition-none motion-safe:group-hover:scale-[1.02]"
                sizes="(min-width: 1024px) 42vw, 100vw"
                src={project.media.src}
              />
            ) : (
              <>
                <div
                  aria-hidden
                  className="absolute -right-24 -top-28 size-72 rounded-full bg-violet-500/25 blur-3xl transition-opacity duration-500 motion-reduce:transition-none group-hover:opacity-80"
                />
                <div
                  aria-hidden
                  className="absolute -bottom-20 -left-16 size-56 rounded-full bg-violet-800/20 blur-3xl"
                />
              </>
            )}

            <div className="relative flex h-full min-h-60 flex-col justify-between gap-10">
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-violet-200">
                  {project.featured ? "Featured system" : "Selected build"}
                </span>
                <span aria-hidden className="font-mono text-xs text-zinc-600">
                  /{project.slug}
                </span>
              </div>

              {architecture ? (
                <ol
                  aria-label={`${project.name} architecture flow`}
                  className="grid gap-2.5"
                >
                  {architecture.map((step, index) => (
                    <li
                      key={step}
                      className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.045] px-3 py-2.5 backdrop-blur-sm"
                    >
                      <span className="font-mono text-[0.65rem] text-violet-300">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm text-zinc-200">{step}</span>
                      {index < architecture.length - 1 && (
                        <span
                          aria-hidden
                          className="ml-auto text-xs text-zinc-600"
                        >
                          &darr;
                        </span>
                      )}
                    </li>
                  ))}
                </ol>
              ) : (
                <div>
                  <p className="max-w-xs text-3xl font-semibold tracking-tight text-white">
                    Native utility.
                    <br />
                    Focused scope.
                  </p>
                  <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-violet-300">
                    {project.releaseLabel}
                  </p>
                </div>
              )}

              <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
                {project.techStack.slice(0, 3).join(" / ")}
              </p>
            </div>
          </div>

          <div className="flex min-w-0 flex-col px-6 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-10">
            <Card.Header className="block p-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-violet-700 dark:border-violet-500/25 dark:bg-violet-500/10 dark:text-violet-300">
                  <span
                    aria-hidden
                    className="size-1.5 rounded-full bg-violet-500"
                  />
                  {project.status}
                </span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">
                  {project.releaseLabel}
                </span>
              </div>
              <Heading
                className="mt-5 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50"
                id={headingId}
              >
                {project.name}
              </Heading>
              <p className="mt-2 font-mono text-xs uppercase tracking-[0.16em] text-violet-600 dark:text-violet-400">
                {project.role}
              </p>
              <Card.Description className="mt-5 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-300">
                {project.summary}
              </Card.Description>
            </Card.Header>

            <Card.Content className="mt-7 p-0">
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
                Current work
              </h3>
              <ul className="mt-3 grid gap-2.5">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300"
                  >
                    <FontAwesomeIcon
                      aria-hidden
                      className="mt-1.5 size-3 shrink-0 text-violet-500"
                      icon={faCheck}
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <h3 className="sr-only">Technology stack</h3>
              <ul className="mt-7 flex flex-wrap gap-2">
                {project.techStack.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-md border border-zinc-200 bg-zinc-100/70 px-2.5 py-1 font-mono text-[0.7rem] text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800/70 dark:text-zinc-300"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </Card.Content>

            <Card.Footer className="mt-8 flex flex-wrap gap-x-5 gap-y-3 border-t border-zinc-200/80 p-0 pt-5 dark:border-zinc-800">
              {project.links.map((link) => (
                <TrackedLink
                  key={link.href}
                  aria-label={`${link.label} for ${project.name} (opens in a new tab)`}
                  className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-zinc-800 underline decoration-zinc-300 underline-offset-4 transition-colors motion-reduce:transition-none hover:text-violet-600 hover:decoration-violet-400 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-500 dark:text-zinc-200 dark:decoration-zinc-600 dark:hover:text-violet-300"
                  event="project_link_clicked"
                  href={link.href}
                  properties={{ destination: link.type, project: project.slug }}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <ProjectLinkIcon type={link.type} />
                  {link.label}
                  <FontAwesomeIcon
                    aria-hidden
                    className="size-2.5 text-zinc-400"
                    icon={faArrowUpRightFromSquare}
                  />
                </TrackedLink>
              ))}
            </Card.Footer>
          </div>
        </div>
      </Card.Root>
    </article>
  );
}
