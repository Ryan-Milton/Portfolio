import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";

import { getPostBySlug, getAllSlugs, getReadingTime } from "@/lib/blog";
import { mdxOptions } from "@/lib/mdx-options";
import { mdxComponents } from "@/components/mdx";
import { extractToc } from "@/lib/toc";
import { TableOfContents } from "@/components/mdx/table-of-contents";
import { formatUtcDate, toUtcIsoDate } from "@/lib/date";
import { siteConfig } from "@/config/site";

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: BlogPostProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return { title: "Post Not Found" };

  const canonical = `/blog/${post.slug}`;
  const images = post.image ? [post.image] : ["/opengraph-image"];

  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical },
    robots: { index: true, follow: true },
    openGraph: {
      type: "article",
      url: canonical,
      title: post.title,
      description: post.summary,
      publishedTime: toUtcIsoDate(post.publishedAt),
      modifiedTime: post.updatedAt
        ? toUtcIsoDate(post.updatedAt)
        : toUtcIsoDate(post.publishedAt),
      authors: ["Ryan Milton"],
      tags: post.tags,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
      images,
    },
  };
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const readingTimeMinutes = getReadingTime(post.content);
  const toc = extractToc(post.content);
  const canonicalUrl = `${siteConfig.url}/blog/${post.slug}`;
  const articleImage = post.image?.startsWith("http")
    ? post.image
    : `${siteConfig.url}${post.image ?? "/opengraph-image"}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    dateModified: toUtcIsoDate(post.updatedAt ?? post.publishedAt),
    datePublished: toUtcIsoDate(post.publishedAt),
    description: post.summary,
    headline: post.title,
    image: articleImage,
    mainEntityOfPage: canonicalUrl,
    publisher: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return (
    <article className="mx-auto max-w-3xl py-8 sm:py-12">
      <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      <header className="mb-10 border-b border-zinc-200 pb-8 dark:border-zinc-800">
        <Link
          className="mb-8 inline-block whitespace-nowrap font-mono text-[0.68rem] font-bold uppercase tracking-[0.1em] text-zinc-500 underline decoration-zinc-300 underline-offset-4 hover:text-violet-600 dark:decoration-zinc-700 dark:hover:text-violet-400"
          href="/blog"
        >
          {"\u2190"} Development log
        </Link>
        {post.image && !post.image.startsWith("http") && (
          <div className="mb-8 overflow-hidden border border-zinc-200 dark:border-zinc-800">
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
        <h1 className="text-4xl font-bold tracking-[-0.035em] text-zinc-800 sm:text-5xl dark:text-zinc-100">
          {post.title}
        </h1>
        <div className="mt-3 flex flex-wrap gap-2 text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
          {post.project && <span>{post.project}</span>}
          <span>{post.format}</span>
          {post.status === "archived" && <span>Archived</span>}
        </div>
        <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400">
          <time dateTime={post.publishedAt}>
            {formatUtcDate(post.publishedAt)}
          </time>
          {post.updatedAt && (
            <>
              <span aria-hidden="true">&middot;</span>
              <span>
                Updated{" "}
                <time dateTime={post.updatedAt}>
                  {formatUtcDate(post.updatedAt)}
                </time>
              </span>
            </>
          )}
          {post.format === "article" && (
            <>
              <span aria-hidden="true">&middot;</span>
              <span>{readingTimeMinutes} min read</span>
            </>
          )}
        </div>
        {post.tags && post.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[0.68rem] text-zinc-500 dark:text-zinc-400">
            {post.tags.map((tag) => (
              <span key={tag}>
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
          options={{
            mdxOptions:
              mdxOptions as NonNullable<
                MDXRemoteProps["options"]
              >["mdxOptions"],
          }}
          source={post.content}
        />
      </div>
    </article>
  );
}
