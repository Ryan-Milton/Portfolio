import Image from "next/image";
import Link from "next/link";

import { TrackedLink } from "@/components/tracked-link";
import type { Project } from "@/config/projects";
import type { PostMeta } from "@/lib/blog";
import { formatUtcDate } from "@/lib/date";

interface ProjectCaseFileProps {
  index: number;
  posts: PostMeta[];
  project: Project;
}

export function ProjectCaseFile({ index, posts, project }: ProjectCaseFileProps) {
  const headingId = `${project.slug}-title`;

  return (
    <article
      aria-labelledby={headingId}
      className="scroll-mt-24 border-t border-zinc-200 py-12 sm:py-16 dark:border-zinc-800"
      id={project.slug}
    >
      <header className="grid gap-6 lg:grid-cols-[7rem_minmax(0,1fr)_16rem]">
        <p className="font-mono text-xs text-violet-600 dark:text-violet-400">
          FILE {String(index + 1).padStart(2, "0")}
        </p>
        <div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-zinc-500 dark:text-zinc-400">
            <span>{project.category}</span>
            <span>{project.status}</span>
          </div>
          <h2
            className="mt-3 text-4xl font-bold tracking-[-0.035em] text-zinc-900 sm:text-5xl dark:text-zinc-50"
            id={headingId}
          >
            {project.name}
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
            {project.summary}
          </p>
        </div>
        <dl className="border-y border-zinc-200 font-mono text-[0.68rem] uppercase tracking-[0.08em] dark:border-zinc-800">
          <div className="grid grid-cols-[4rem_1fr] gap-3 border-b border-zinc-200 py-3 dark:border-zinc-800">
            <dt className="text-zinc-500">Owner</dt>
            <dd className="text-zinc-700 dark:text-zinc-300">{project.role}</dd>
          </div>
          <div className="grid grid-cols-[4rem_1fr] gap-3 py-3">
            <dt className="text-zinc-500">Release</dt>
            <dd className="text-zinc-700 dark:text-zinc-300">
              {project.releaseLabel}
            </dd>
          </div>
        </dl>
      </header>

      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(18rem,0.8fr)_minmax(0,1.2fr)] lg:gap-14">
        <div>
          {project.media ? (
            <figure>
              <div className="relative aspect-[16/10] overflow-hidden border border-zinc-200 bg-zinc-950 dark:border-zinc-800">
                <Image
                  fill
                  alt={project.media.alt}
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  src={project.media.src}
                />
              </div>
              <figcaption className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.08em] text-zinc-500">
                Current project interface
              </figcaption>
            </figure>
          ) : (
            <div className="border border-zinc-200 bg-zinc-950 p-6 text-zinc-100 dark:border-zinc-800">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-zinc-400">
                Constraint
              </p>
              <p className="mt-6 text-2xl font-bold tracking-tight">
                {project.constraint}
              </p>
            </div>
          )}

          {project.architecture && (
            <div className="mt-6">
              <h3 className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
                System path
              </h3>
              <ol className="mt-3 border-y border-zinc-200 dark:border-zinc-800">
                {project.architecture.map((step, stepIndex) => (
                  <li
                    key={step}
                    className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-zinc-200 py-3 text-sm last:border-b-0 dark:border-zinc-800"
                  >
                    <span className="font-mono text-xs text-violet-600 dark:text-violet-400">
                      {String(stepIndex + 1).padStart(2, "0")}
                    </span>
                    <span className="text-zinc-700 dark:text-zinc-300">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>

        <div>
          {project.media && (
            <section aria-labelledby={`${project.slug}-constraint`}>
              <h3
                className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400"
                id={`${project.slug}-constraint`}
              >
                Product constraint
              </h3>
              <p className="mt-3 text-xl font-bold leading-8 tracking-tight text-zinc-900 dark:text-zinc-100">
                {project.constraint}
              </p>
            </section>
          )}

          <section
            className={project.media ? "mt-8" : undefined}
            aria-labelledby={`${project.slug}-work`}
          >
            <h3
              className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400"
              id={`${project.slug}-work`}
            >
              Current work
            </h3>
            <ul className="mt-3 border-y border-zinc-200 dark:border-zinc-800">
              {project.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="grid grid-cols-[0.5rem_1fr] gap-3 border-b border-zinc-200 py-3 text-base leading-7 last:border-b-0 dark:border-zinc-800"
                >
                  <span aria-hidden className="mt-3 size-1 bg-violet-500" />
                  <span className="text-zinc-700 dark:text-zinc-300">{highlight}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-8" aria-labelledby={`${project.slug}-technology`}>
            <h3
              className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400"
              id={`${project.slug}-technology`}
            >
              Technology
            </h3>
            <p className="mt-3 font-mono text-sm leading-6 text-zinc-600 dark:text-zinc-300">
              {project.techStack.join(" / ")}
            </p>
          </section>

          {posts.length > 0 && (
            <section className="mt-8" aria-labelledby={`${project.slug}-notes`}>
              <h3
                className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400"
                id={`${project.slug}-notes`}
              >
                Supporting notes
              </h3>
              <ul className="mt-3 border-y border-zinc-200 dark:border-zinc-800">
                {posts.map((post) => (
                  <li
                    key={post.slug}
                    className="grid gap-1 border-b border-zinc-200 py-3 last:border-b-0 sm:grid-cols-[7rem_1fr] dark:border-zinc-800"
                  >
                    <time
                      className="font-mono text-xs text-zinc-500"
                      dateTime={post.publishedAt}
                    >
                      {formatUtcDate(post.publishedAt, "short")}
                    </time>
                    <Link
                      className="font-medium text-zinc-800 underline decoration-zinc-300 underline-offset-4 hover:text-violet-600 dark:text-zinc-200 dark:decoration-zinc-700 dark:hover:text-violet-400"
                      href={`/blog/${post.slug}`}
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-zinc-200 pt-5 dark:border-zinc-800">
            {project.links.map((link) => (
              <TrackedLink
                key={link.href}
                className="whitespace-nowrap text-sm font-bold text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:text-violet-600 dark:text-zinc-100 dark:decoration-zinc-700 dark:hover:text-violet-400"
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
    </article>
  );
}
