import type { Metadata } from "next";
import Link from "next/link";

import { getAllPosts } from "@/lib/blog";
import PostCard from "@/components/blogPostCard";

export const metadata: Metadata = {
  title: "Devlog",
  description:
    "Development notes, release updates, and project walkthroughs from Ryan Milton.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    url: "/blog",
    title: "Devlog",
    images: ["/opengraph-image"],
    description:
      "Development notes, release updates, and project walkthroughs from Ryan Milton.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devlog",
    images: ["/opengraph-image"],
    description:
      "Development notes, release updates, and project walkthroughs from Ryan Milton.",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="pb-12 sm:pb-20">
      <header className="grid gap-5 border-b border-zinc-200 pb-10 sm:grid-cols-[7rem_minmax(0,1fr)] dark:border-zinc-800">
        <p className="font-mono text-xs text-violet-600 dark:text-violet-400">
          LOG / CURRENT
        </p>
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-[-0.035em] text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Devlog
          </h1>
          <p className="mt-6 text-zinc-600 dark:text-zinc-400">
            Dated notes from active builds, major pull requests, and release work.
          </p>
        </div>
      </header>

      <div>
        {posts.map((post) => (
          <PostCard key={post.slug} headingLevel={2} post={post} />
        ))}
      </div>
      <p className="mt-8 border-t border-zinc-200 pt-6 text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
        Looking for older writing?{" "}
        <Link
          className="inline-block whitespace-nowrap font-medium text-violet-600 dark:text-violet-400"
          href="/blog/archive"
        >
          Browse the archive
        </Link>
        .
      </p>
    </div>
  );
}
