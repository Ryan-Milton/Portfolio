import type { Metadata } from "next";
import Link from "next/link";

import { getAllPosts } from "@/lib/blog";
import PostCard from "@/components/blogPostCard";
import { AnimatedGrid, AnimatedGridItem } from "@/components/animatedGrid";
import { FadeIn } from "@/components/motion";

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
    <div>
      <FadeIn>
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Devlog
          </h1>
          <p className="mt-6 text-zinc-600 dark:text-zinc-400">
            Development notes, release updates, and project walkthroughs.
          </p>
        </div>
      </FadeIn>

      <AnimatedGrid className="mt-10 flex flex-col gap-6 border-t border-zinc-300 pt-10 dark:border-zinc-700">
        {posts.map((post) => (
          <AnimatedGridItem key={post.slug}>
            <PostCard headingLevel={2} post={post} />
          </AnimatedGridItem>
        ))}
      </AnimatedGrid>
      <p className="mt-10 text-sm text-zinc-600 dark:text-zinc-400">
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
