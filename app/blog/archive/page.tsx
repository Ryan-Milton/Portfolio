import type { Metadata } from "next";

import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

import PostCard from "@/components/blogPostCard";
import { getArchivedPosts } from "@/lib/blog";

const description = "Archived writing from Ryan Milton, retained at its original URLs for reference.";

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
    <div className="mx-auto max-w-[96rem] px-5 pb-16 sm:px-8 sm:pb-24 lg:px-12">
      <header className="border-b border-zinc-200 py-16 sm:py-24 dark:border-zinc-800">
        <Link className="group inline-flex items-center gap-2 text-sm font-bold text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white" href="/blog">
          <ArrowLeft aria-hidden className="transition-transform group-hover:-translate-x-1 motion-reduce:transition-none" size={16} weight="bold" />
          Current entries
        </Link>
        <h1 className="section-title mt-10 text-zinc-950 dark:text-white">Archive</h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
          Older writing kept online for reference. These posts reflect the context available when they were published.
        </p>
      </header>

      <div className="grid gap-12 py-16 lg:grid-cols-[minmax(14rem,0.38fr)_minmax(0,0.62fr)] lg:py-24">
        <p className="max-w-sm text-2xl font-extrabold leading-8 tracking-[-0.04em] text-zinc-950 dark:text-white">Earlier notes, preserved at their original URLs.</p>
        <div>{posts.map((post) => <PostCard key={post.slug} headingLevel={2} post={post} />)}</div>
      </div>
    </div>
  );
}
