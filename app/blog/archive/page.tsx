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
    <div className="pb-12 sm:pb-20">
      <header className="grid gap-5 border-b border-zinc-200 pb-10 sm:grid-cols-[7rem_minmax(0,1fr)] dark:border-zinc-800">
        <p className="font-mono text-xs text-violet-600 dark:text-violet-400">
          LOG / ARCHIVE
        </p>
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-[-0.035em] text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Archive
          </h1>
          <p className="mt-6 text-zinc-600 dark:text-zinc-400">
            Older writing kept online for reference. These posts reflect the
            context and understanding available when they were published.
          </p>
          <Link
            className="mt-5 inline-block whitespace-nowrap text-sm font-bold text-violet-600 underline decoration-zinc-300 underline-offset-2 dark:text-violet-400 dark:decoration-zinc-700"
            href="/blog"
          >
            {"\u2190"} Current entries
          </Link>
        </div>
      </header>

      <div>
        {posts.map((post) => (
          <PostCard key={post.slug} headingLevel={2} post={post} />
        ))}
      </div>
    </div>
  );
}
