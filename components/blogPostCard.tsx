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
    <article className="overflow-hidden rounded-xl border border-zinc-100 bg-zinc-50/10 text-left transition duration-200 hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-700/40 dark:bg-zinc-800/10">
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
        <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
          {post.summary}
        </p>
        {post.tags && post.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5" aria-label="Topics">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-zinc-100 px-2 py-0.5 text-[11px] font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
              >
                {tag}
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
              <span aria-hidden="true">&nearr;</span>
            </TrackedLink>
          )}
          <TrackedLink
            className="group flex items-center gap-1 text-sm font-medium text-violet-600 dark:text-violet-400"
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
