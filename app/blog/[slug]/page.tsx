import type { Metadata } from "next";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
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
    <article className="pb-16 sm:pb-24">
      <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      <header className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-[96rem] px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
          <Link
            className="group inline-flex items-center gap-2 text-sm font-bold text-zinc-600 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
            href="/blog"
          >
            <ArrowLeft aria-hidden className="transition-transform group-hover:-translate-x-1 motion-reduce:transition-none" size={16} weight="bold" />
            Development log
          </Link>

          <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
            <div>
              <div className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-zinc-500 dark:text-zinc-400">
                {post.project && <span>{post.project}</span>}
                <span>{post.format}</span>
                {post.status === "archived" && <span>Archived</span>}
              </div>
              <h1 className="mt-5 max-w-[18ch] text-[clamp(3rem,7vw,7rem)] font-extrabold leading-[0.9] tracking-[-0.07em] text-zinc-950 dark:text-white">
                {post.title}
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">{post.summary}</p>
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-zinc-500 dark:text-zinc-400">
                <time dateTime={post.publishedAt}>{formatUtcDate(post.publishedAt)}</time>
                {post.updatedAt && (
                  <span>Updated <time dateTime={post.updatedAt}>{formatUtcDate(post.updatedAt)}</time></span>
                )}
                {post.format === "article" && <span>{readingTimeMinutes} min read</span>}
              </div>
              {post.tags && post.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[0.65rem] text-zinc-500 dark:text-zinc-400">
                  {post.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              )}
            </div>
          </div>

          {post.image && !post.image.startsWith("http") && (
            <div className="media-frame mt-12 overflow-hidden">
              <Image
                priority
                alt={post.title}
                className="w-full"
                height={630}
                sizes="(max-width: 768px) 100vw, 1400px"
                src={post.image}
                width={1200}
              />
            </div>
          )}
        </div>
      </header>

      <div className="mx-auto grid max-w-[96rem] gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[14rem_minmax(0,1fr)] lg:px-12">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <TableOfContents items={toc} />
        </aside>
        <div className="prose prose-zinc max-w-[62ch] prose-headings:font-extrabold prose-headings:tracking-[-0.035em] prose-a:decoration-violet-500 prose-a:decoration-2 prose-a:underline-offset-4 dark:prose-invert">
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
      </div>
    </article>
  );
}
