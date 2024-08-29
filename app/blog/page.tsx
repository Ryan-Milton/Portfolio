"use client";
import { title } from "@/components/primitives";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import Link from "next/link";
import PostCard from "@/components/blogPostCard";
import supabase from "@/utils/supabase/browser";
import { useState, useEffect } from "react";

const posts = [
  {
    slug: "eva",
    title: "Meet EVA",
    description: "The Ultimate Digital Assistant",
    date: "January 3, 2024",
  },
  {
    slug: "focus-app-post",
    title: "Need to focus? There's an app for that!",
    description: "Discover a new app to help you stay focused and productive.",
    date: "February 27, 2024",
  },
  {
    slug: "gamify-your-life",
    title: "Gamify Your Life!",
    description: "Enhance your productivity by turning your life into a game!",
    date: "April 9, 2024",
  },
  {
    slug: "learning-from-experience",
    title: "Learning from experience",
    description: "Life is full of challenges, the key is to learn from them.",
    date: "June 11, 2024",
  },
];

export default function BlogPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data: posts, error } = await supabase
        .from("posts")
        .select("slug, title, content, summary, published_at");

      if (error) {
        console.error(error);
      } else {
        setPosts(posts);
      }
    };

    fetchPosts();
  }, []);
  return (
    <div className="">
      <div className="w-2/3">
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
          {posts.map((post: any) => (
            <div className="flex flex-row">
              <p className="text-sm text-zinc-400 dark:text-zinc-500 w-1/5">
                {post.published_at}
              </p>
              <PostCard key={post.slug} post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
