import { Metadata } from "next";

import { getAllPosts } from "@/lib/blog";
import PostCard from "@/components/blogPostCard";
import { AnimatedGrid, AnimatedGridItem } from "@/components/animatedGrid";
import { FadeIn } from "@/components/motion";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Writing on software design, company building, and any other topic I find interesting.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div>
      <FadeIn>
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Writing on software design, company building, and any other topic I
            find interesting.
          </h1>
          <p className="mt-6 mb-12 text-zinc-600 dark:text-zinc-400">
            A collection of thoughts many deem came from a genius... or was it a
            madman?
          </p>
        </div>
      </FadeIn>

      {/* Gradient divider */}
      <div className="mb-12 h-px w-full bg-gradient-to-r from-transparent via-zinc-300 to-transparent dark:via-zinc-700" />

      <AnimatedGrid className="flex flex-col gap-6">
        {posts.map((post, i) => (
          <AnimatedGridItem key={post.slug} index={i}>
            <PostCard post={post} />
          </AnimatedGridItem>
        ))}
      </AnimatedGrid>
    </div>
  );
}
