import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

import { getPostBySlug, getAllSlugs, getReadingTime } from "@/lib/blog";
import { mdxOptions } from "@/lib/mdx-options";
import { mdxComponents } from "@/components/mdx";
import { extractToc } from "@/lib/toc";
import { TableOfContents } from "@/components/mdx/table-of-contents";

interface BlogPostProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: BlogPostProps): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.summary,
  };
}

export default function BlogPost({ params }: BlogPostProps) {
  const post = getPostBySlug(params.slug);

  if (!post) notFound();

  const readingTimeMinutes = getReadingTime(post.content);
  const toc = extractToc(post.content);

  return (
    <article className="container mx-auto max-w-3xl py-8">
      <header className="mb-8">
        {post.image && !post.image.startsWith("http") && (
          <div className="mb-6 overflow-hidden rounded-xl">
            <Image
              priority
              alt={post.title}
              className="w-full"
              height={630}
              sizes="(max-width: 768px) 100vw, 720px"
              src={post.image}
              width={1200}
            />
          </div>
        )}
        {post.image && post.image.startsWith("http") && (
          <div className="mb-6 overflow-hidden rounded-xl">
            {/* eslint-disable-next-line */}
            <img
              alt={post.title}
              className="w-full rounded-xl"
              src={post.image}
            />
          </div>
        )}
        <h1 className="text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
          {post.title}
        </h1>
        <div className="mt-2 flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400">
          <time dateTime={post.publishedAt}>
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span aria-hidden="true">&middot;</span>
          <span>{readingTimeMinutes} min read</span>
        </div>
        {post.tags && post.tags.length > 0 && (
          <div className="mt-3 flex gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>
      <TableOfContents items={toc} />
      <div className="prose prose-zinc max-w-none dark:prose-invert">
        <MDXRemote
          components={mdxComponents}
          options={{ mdxOptions: mdxOptions as any }}
          source={post.content}
        />
      </div>
    </article>
  );
}
