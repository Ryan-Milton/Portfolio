import type { PostMeta } from "@/lib/blog";

import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
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
    <article className="group border-b border-zinc-200 py-7 first:pt-0 dark:border-zinc-800">
      <div className={post.image ? "grid gap-6 sm:grid-cols-[minmax(0,1fr)_10rem] sm:items-start" : undefined}>
        <div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-zinc-500 dark:text-zinc-400">
            <time dateTime={post.publishedAt}>{formatUtcDate(post.publishedAt, "short")}</time>
            <span>{post.project ?? "General"}</span>
            <span>{post.format}</span>
            {post.format === "article" && <span>{post.readingTime} min</span>}
          </div>
          <Heading className="mt-4 text-2xl font-extrabold leading-tight tracking-[-0.045em] text-zinc-950 sm:text-3xl dark:text-white">
            <TrackedLink
              className="transition-colors hover:text-zinc-600 dark:hover:text-zinc-300"
              event="devlog_opened"
              href={`/blog/${post.slug}`}
              properties={{ destination: "internal", slug: post.slug }}
            >
              {post.title}
            </TrackedLink>
          </Heading>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-600 sm:text-base sm:leading-7 dark:text-zinc-400">{post.summary}</p>
          {post.tags && post.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1" aria-label="Topics">
              {post.tags.slice(0, 4).map((tag) => (
                <span key={tag} className="font-mono text-[0.65rem] text-zinc-500 dark:text-zinc-400">{tag}</span>
              ))}
            </div>
          )}
          <footer className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
            <TrackedLink
              className="group/link inline-flex items-center gap-2 text-sm font-bold text-zinc-950 dark:text-white"
              event="devlog_opened"
              href={`/blog/${post.slug}`}
              properties={{ destination: "internal", slug: post.slug }}
            >
              {post.externalUrl ? "Devlog notes" : "Read entry"}
              <ArrowRight aria-hidden className="transition-transform group-hover/link:translate-x-1 motion-reduce:transition-none" size={16} weight="bold" />
            </TrackedLink>
            {post.externalUrl && (
              <TrackedLink
                className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-600 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
                event="devlog_opened"
                href={post.externalUrl}
                properties={{ destination: "external", slug: post.slug }}
                rel="noreferrer"
                target="_blank"
                aria-label={`${externalAction}: ${post.title}${externalDestination} (opens in a new tab)`}
              >
                {externalAction}
                <ArrowUpRight aria-hidden className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 motion-reduce:transition-none" size={15} weight="bold" />
              </TrackedLink>
            )}
          </footer>
        </div>
        {post.image && (
          <Image
            alt=""
            className="aspect-[4/3] w-full rounded-sm object-cover transition-transform duration-500 group-hover:scale-[1.02] motion-reduce:transition-none"
            height={120}
            src={post.image}
            width={160}
          />
        )}
      </div>
    </article>
  );
}
