"use client";

import type { PostMeta } from "@/lib/blog";

import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <motion.div transition={{ duration: 0.2 }} whileHover={{ y: -2 }}>
      <Card className="overflow-hidden border border-zinc-100 bg-zinc-50/10 text-left transition-shadow duration-300 hover:shadow-md dark:border-zinc-700/40 dark:bg-zinc-800/10">
        {post.image && (
          <CardHeader className="overflow-hidden rounded-t-lg p-0">
            <Image
              alt={post.title}
              className="h-40 w-full object-cover"
              height={160}
              src={post.image}
              width={400}
            />
          </CardHeader>
        )}
        <CardHeader className="flex-col items-start px-5 pb-0 pt-5">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            {post.title}
          </h3>
          <div className="mt-1 flex items-center gap-2 text-xs text-zinc-400 dark:text-zinc-500">
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            {post.readingTime && (
              <>
                <span aria-hidden="true">&middot;</span>
                <span>{post.readingTime} min read</span>
              </>
            )}
          </div>
        </CardHeader>
        <CardBody className="px-5">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            {post.summary}
          </p>
          {post.tags && post.tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-zinc-100 px-2 py-0.5 text-[10px] font-medium text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </CardBody>
        <CardFooter className="px-5 pb-5 pt-2">
          <Link
            className="group flex items-center gap-1 text-sm font-medium text-primary-500 dark:text-primary-400"
            href={`/blog/${post.slug}`}
          >
            Read more
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
