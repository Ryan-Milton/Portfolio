import { Metadata } from "next";

import { getAllPosts } from "@/lib/blog";
import PostCard from "@/components/blogPostCard";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Writing on software design, company building, and any other topic I find interesting.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div>
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Writing on software design, company building, and any other topic I
          find interesting.
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 mt-6 mb-16">
          A collection of thoughts many deem came from a genius... or was it a
          madman?
        </p>
      </div>
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex flex-col gap-8">
          {posts.map((post) => (
            <div key={post.slug} className="flex flex-row">
              <p className="text-sm text-zinc-400 dark:text-zinc-500 w-1/5 hidden md:block">
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
