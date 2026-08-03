import type { PostMeta } from "@/lib/blog";

import Image from "next/image";
import { TrackedLink } from "@/components/tracked-link";
import { formatUtcDate } from "@/lib/date";

interface PostCardProps {
  headingLevel?: 2 | 3;
  post: PostMeta;
}

export default function PostCard({ headingLevel = 3, post }: PostCardProps) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  const externalAction = post.format === "video" ? "Watch video" : "Open article";
  const externalDestination = post.format === "video" ? " on YouTube" : "";

  return (
    <article className="grid gap-4 border-b border-zinc-200 py-6 text-left last:border-b-0 sm:grid-cols-[7rem_minmax(0,1fr)] dark:border-zinc-800">
      <div className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-zinc-500 dark:text-zinc-400">
        <time dateTime={post.publishedAt}>
          {formatUtcDate(post.publishedAt, "short")}
        </time>
        <span className="mt-1 block">{post.project ?? "General"}</span>
      </div>
      <div className="min-w-0">
        <header
          className={
            post.image ? "grid gap-5 sm:grid-cols-[minmax(0,1fr)_8rem]" : undefined
          }
        >
          <div>
            <div className="mb-2 flex flex-wrap items-center gap-3 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-zinc-500 dark:text-zinc-400">
              <span>{post.format}</span>
              {post.status === "archived" && <span>Archived</span>}
              {post.format === "article" && <span>{post.readingTime} min</span>}
            </div>
            <Heading className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              <TrackedLink
                className="underline decoration-transparent underline-offset-2 hover:text-violet-600 hover:decoration-violet-500"
                event="devlog_opened"
                href={`/blog/${post.slug}`}
                properties={{ destination: "internal", slug: post.slug }}
              >
                {post.title}
              </TrackedLink>
            </Heading>
          </div>
          {post.image && (
            <Image
              alt=""
              className="aspect-[4/3] w-full border border-zinc-200 object-cover dark:border-zinc-800"
              height={96}
              src={post.image}
              width={128}
            />
          )}
        </header>
        <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
          {post.summary}
        </p>
        {post.tags && post.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1" aria-label="Topics">
            {post.tags.slice(0, 4).map((tag) => (
              <span key={tag} className="font-mono text-[0.68rem] text-zinc-500 dark:text-zinc-400">
                {tag}
              </span>
            ))}
          </div>
        )}
        <footer className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
          {post.externalUrl && (
            <TrackedLink
              className="group flex items-center gap-1 text-sm font-medium text-violet-600 dark:text-violet-400"
              event="devlog_opened"
              href={post.externalUrl}
              properties={{ destination: "external", slug: post.slug }}
              rel="noreferrer"
              target="_blank"
              aria-label={`${externalAction}: ${post.title}${externalDestination} (opens in a new tab)`}
            >
              {externalAction}
              <span aria-hidden="true">{"\u2197"}</span>
            </TrackedLink>
          )}
          <TrackedLink
            className="flex items-center gap-1 whitespace-nowrap text-sm font-bold text-zinc-700 underline decoration-zinc-300 underline-offset-2 hover:text-violet-600 dark:text-zinc-300 dark:decoration-zinc-700 dark:hover:text-violet-400"
            event="devlog_opened"
            href={`/blog/${post.slug}`}
            properties={{ destination: "internal", slug: post.slug }}
          >
            {post.externalUrl ? "Devlog notes" : "Read entry"} {"\u2192"}
          </TrackedLink>
        </footer>
      </div>
    </article>
  );
}
