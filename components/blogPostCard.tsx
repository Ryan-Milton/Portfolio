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
    <article className="overflow-hidden rounded-xl border border-zinc-200/80 bg-zinc-50/10 text-left dark:border-zinc-800 dark:bg-zinc-800/10">
      {post.image && (
        <Image
          alt=""
          className="h-40 w-full object-cover"
          height={160}
          src={post.image}
          width={400}
        />
      )}
      <div className="p-5">
        <header>
          <div className="mb-2 flex flex-wrap items-center gap-2 text-[11px] font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            {post.project && <span>{post.project}</span>}
            <span>{post.format}</span>
            {post.status === "archived" && <span>Archived</span>}
          </div>
          <Heading className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            {post.title}
          </Heading>
          <div className="mt-1 flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
            <time dateTime={post.publishedAt}>
              {formatUtcDate(post.publishedAt, "short")}
            </time>
            {post.format === "article" && (
              <>
                <span aria-hidden="true">&middot;</span>
                <span>{post.readingTime} min read</span>
              </>
            )}
          </div>
        </header>
        <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
          {post.summary}
        </p>
        {post.tags && post.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1" aria-label="Topics">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[11px] text-zinc-500 dark:text-zinc-400"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
        <footer className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
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
            className="group flex items-center gap-1 text-sm font-medium text-zinc-700 hover:text-violet-600 dark:text-zinc-300 dark:hover:text-violet-400"
            event="devlog_opened"
            href={`/blog/${post.slug}`}
            properties={{ destination: "internal", slug: post.slug }}
          >
            {post.externalUrl ? "View devlog notes" : "Read entry"}
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
              &rarr;
            </span>
          </TrackedLink>
        </footer>
      </div>
    </article>
  );
}
