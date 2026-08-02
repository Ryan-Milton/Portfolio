import type { Metadata } from "next";
import Link from "next/link";

import PostCard from "@/components/blogPostCard";
import { getArchivedPosts } from "@/lib/blog";

const description =
  "Archived writing from Ryan Milton, retained at its original URLs for reference.";

export const metadata: Metadata = {
  title: "Devlog Archive",
  description,
  alternates: { canonical: "/blog/archive" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "/blog/archive",
    title: "Devlog Archive",
    images: ["/opengraph-image"],
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Devlog Archive",
    images: ["/opengraph-image"],
    description,
  },
};

export default function BlogArchivePage() {
  const posts = getArchivedPosts();

  return (
    <div>
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
          Devlog
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Archive
        </h1>
        <p className="mt-6 text-zinc-600 dark:text-zinc-400">
          Older writing kept online for reference. These posts reflect the
          context and understanding available when they were published.
        </p>
        <Link
          className="mt-5 inline-block text-sm font-medium text-violet-600 dark:text-violet-400"
          href="/blog"
        >
          &larr; Back to current entries
        </Link>
      </div>

      <div className="my-12 h-px w-full bg-gradient-to-r from-transparent via-zinc-300 to-transparent dark:via-zinc-700" />

      <div className="flex flex-col gap-6">
        {posts.map((post) => (
          <PostCard key={post.slug} headingLevel={2} post={post} />
        ))}
      </div>
    </div>
  );
}
