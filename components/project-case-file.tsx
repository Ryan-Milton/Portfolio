import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
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

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-3">
      {project.links.map((link) => (
        <TrackedLink
          key={link.href}
          className="group inline-flex items-center gap-1.5 text-sm font-bold text-zinc-950 hover:text-zinc-600 dark:text-white dark:hover:text-zinc-300"
          event="project_link_clicked"
          href={link.href}
          properties={{ destination: link.type, project: project.slug }}
          rel="noopener noreferrer"
          target="_blank"
        >
          {link.label}
          <ArrowUpRight aria-hidden className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none" size={16} weight="bold" />
        </TrackedLink>
      ))}
    </div>
  );
}

function ProjectFacts({ posts, project }: { posts: PostMeta[]; project: Project }) {
  return (
    <div className="grid gap-10 md:grid-cols-2">
      <section aria-labelledby={`${project.slug}-work`}>
        <h3 className="meta-label text-zinc-500 dark:text-zinc-400" id={`${project.slug}-work`}>
          Current work
        </h3>
        <ul className="mt-5 space-y-4">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
              <span aria-hidden className="mt-[0.65rem] h-1 w-5 shrink-0 bg-violet-500" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </section>

      <div className="space-y-9">
        <section aria-labelledby={`${project.slug}-technology`}>
          <h3 className="meta-label text-zinc-500 dark:text-zinc-400" id={`${project.slug}-technology`}>
            Technology
          </h3>
          <p className="mt-4 font-mono text-sm leading-7 text-zinc-700 dark:text-zinc-300">
            {project.techStack.join(" / ")}
          </p>
        </section>

        {posts.length > 0 && (
          <section aria-labelledby={`${project.slug}-notes`}>
            <h3 className="meta-label text-zinc-500 dark:text-zinc-400" id={`${project.slug}-notes`}>
              Supporting notes
            </h3>
            <ul className="mt-4 space-y-3">
              {posts.map((post) => (
                <li key={post.slug} className="grid gap-1 text-sm sm:grid-cols-[6.5rem_1fr]">
                  <time className="font-mono text-xs text-zinc-500" dateTime={post.publishedAt}>
                    {formatUtcDate(post.publishedAt, "short")}
                  </time>
                  <Link className="font-semibold text-zinc-800 underline decoration-zinc-300 underline-offset-4 hover:text-zinc-950 dark:text-zinc-200 dark:decoration-zinc-700 dark:hover:text-white" href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}

function ProjectIdentity({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-zinc-500 dark:text-zinc-400">
      <span>{project.category}</span>
      <span aria-hidden>/</span>
      <span>{project.status}</span>
    </div>
  );
}

function KnosysChapter({ posts, project }: Omit<ProjectCaseFileProps, "index">) {
  return (
    <article className="scroll-mt-24 py-20 sm:py-28" id={project.slug}>
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(22rem,0.6fr)] lg:gap-20">
        <div>
          <ProjectIdentity project={project} />
          <h2 className="section-title mt-6 text-zinc-950 dark:text-white">{project.name}</h2>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-zinc-600 dark:text-zinc-300">{project.summary}</p>
          <p className="mt-7 max-w-xl border-l-4 border-violet-500 pl-5 text-lg font-bold leading-8 text-zinc-950 dark:text-white">{project.constraint}</p>
          <div className="mt-8"><ProjectLinks project={project} /></div>
        </div>
        {project.media && (
          <div className="media-frame mx-auto aspect-[1206/1800] w-full max-w-md bg-zinc-900">
            <Image fill priority alt={project.media.alt} className="object-cover object-top" sizes="(min-width: 1024px) 30vw, 90vw" src={project.media.src} />
          </div>
        )}
      </div>
      <div className="mt-16 lg:ml-[28%]"><ProjectFacts posts={posts} project={project} /></div>
    </article>
  );
}

function EagleEyeChapter({ posts, project }: Omit<ProjectCaseFileProps, "index">) {
  return (
    <article className="scroll-mt-24 border-t border-zinc-200 py-20 sm:py-28 dark:border-zinc-800" id={project.slug}>
      <header className="grid gap-8 lg:grid-cols-[minmax(0,0.75fr)_minmax(20rem,0.45fr)] lg:items-end">
        <div>
          <ProjectIdentity project={project} />
          <h2 className="section-title mt-6 text-zinc-950 dark:text-white">{project.name}</h2>
        </div>
        <div>
          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-300">{project.summary}</p>
          <div className="mt-6"><ProjectLinks project={project} /></div>
        </div>
      </header>
      {project.media && (
        <figure className="mt-12">
          <div className="media-frame aspect-video sm:aspect-[16/8]">
            <Image fill alt={project.media.alt} className="object-cover" sizes="(min-width: 1024px) 90vw, 100vw" src={project.media.src} />
          </div>
          <figcaption className="mt-3 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-zinc-500">Eagle Eye v0.1.4 / Map data attribution remains visible in the interface</figcaption>
        </figure>
      )}
      <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(16rem,0.45fr)_minmax(0,1fr)]">
        <p className="text-2xl font-extrabold leading-9 tracking-[-0.04em] text-zinc-950 dark:text-white">{project.constraint}</p>
        <ProjectFacts posts={posts} project={project} />
      </div>
    </article>
  );
}

function SpeedDeckChapter({ posts, project }: Omit<ProjectCaseFileProps, "index">) {
  return (
    <article className="scroll-mt-24 border-t border-zinc-200 py-20 sm:py-28 dark:border-zinc-800" id={project.slug}>
      <ProjectIdentity project={project} />
      <div className="mt-8 grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(20rem,0.55fr)] lg:items-start">
        <div>
          <h2 className="section-title text-zinc-950 dark:text-white">{project.name}</h2>
          <div className="mt-10 grid gap-1 text-[clamp(2.3rem,6vw,6rem)] font-extrabold leading-[0.86] tracking-[-0.07em] text-zinc-950 dark:text-white">
            {(project.architecture ?? []).map((step, index) => (
              <p key={step} className={index === 1 ? "text-violet-600 dark:text-violet-400" : undefined}>{step}</p>
            ))}
          </div>
        </div>
        <div className="lg:pt-10">
          <p className="text-xl leading-8 text-zinc-600 dark:text-zinc-300">{project.summary}</p>
          <p className="mt-7 border-l-4 border-violet-500 pl-5 text-lg font-bold leading-8 text-zinc-950 dark:text-white">{project.constraint}</p>
          <div className="mt-8"><ProjectLinks project={project} /></div>
        </div>
      </div>
      <div className="mt-16 lg:grid lg:grid-cols-[0.35fr_0.65fr] lg:gap-16">
        <div className="hidden lg:block" />
        <ProjectFacts posts={posts} project={project} />
      </div>
    </article>
  );
}

function KliptChapter({ posts, project }: Omit<ProjectCaseFileProps, "index">) {
  return (
    <article className="scroll-mt-24 border-y border-zinc-200 py-20 sm:py-32 dark:border-zinc-800" id={project.slug}>
      <div className="grid gap-12 lg:grid-cols-[minmax(18rem,0.45fr)_minmax(0,0.85fr)] lg:items-end">
        <div>
          <ProjectIdentity project={project} />
          <p className="mt-10 max-w-[9ch] text-5xl font-extrabold leading-[0.88] tracking-[-0.065em] text-violet-600 sm:text-7xl dark:text-violet-400">Local by default.</p>
        </div>
        <div>
          <h2 className="section-title text-zinc-950 dark:text-white">{project.name}</h2>
          <p className="mt-7 max-w-2xl text-xl leading-8 text-zinc-600 dark:text-zinc-300">{project.summary}</p>
          <p className="mt-6 max-w-2xl text-lg font-bold leading-8 text-zinc-950 dark:text-white">{project.constraint}</p>
          <div className="mt-8"><ProjectLinks project={project} /></div>
        </div>
      </div>
      <div className="mt-16 lg:ml-[45%]"><ProjectFacts posts={posts} project={project} /></div>
    </article>
  );
}

export function ProjectCaseFile({ posts, project }: ProjectCaseFileProps) {
  if (project.slug === "knosys") return <KnosysChapter posts={posts} project={project} />;
  if (project.slug === "eagle-eye") return <EagleEyeChapter posts={posts} project={project} />;
  if (project.slug === "speeddeck") return <SpeedDeckChapter posts={posts} project={project} />;

  return <KliptChapter posts={posts} project={project} />;
}
