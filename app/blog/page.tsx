import type { Metadata } from "next";

import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

import PostCard from "@/components/blogPostCard";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Devlog",
  description: "Development notes, release updates, and project walkthroughs from Ryan Milton.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    url: "/blog",
    title: "Devlog",
    images: ["/opengraph-image"],
    description: "Development notes, release updates, and project walkthroughs from Ryan Milton.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devlog",
    images: ["/opengraph-image"],
    description: "Development notes, release updates, and project walkthroughs from Ryan Milton.",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-[96rem] px-5 pb-16 sm:px-8 sm:pb-24 lg:px-12">
      <header className="flex min-h-[58dvh] flex-col justify-center border-b border-zinc-200 py-16 dark:border-zinc-800">
        <p className="eyebrow text-zinc-500 dark:text-zinc-400">Development notes</p>
        <h1 className="display-title mt-7 text-zinc-950 dark:text-white">Devlog</h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
          Dated notes from active builds, major pull requests, and release work.
        </p>
      </header>

      <div className="grid gap-12 py-16 lg:grid-cols-[minmax(14rem,0.38fr)_minmax(0,0.62fr)] lg:py-24">
        <div>
          <p className="max-w-sm text-2xl font-extrabold leading-8 tracking-[-0.04em] text-zinc-950 dark:text-white">
            Decisions, implementation details, and what changed after the first attempt.
          </p>
        </div>
        <div>
          {posts.map((post) => <PostCard key={post.slug} headingLevel={2} post={post} />)}
          <Link className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-zinc-950 dark:text-white" href="/blog/archive">
            Browse the archive
            <ArrowRight aria-hidden className="transition-transform group-hover:translate-x-1 motion-reduce:transition-none" size={16} weight="bold" />
          </Link>
        </div>
      </div>
    </div>
  );
}
