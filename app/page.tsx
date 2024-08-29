"use client";
import { Link } from "@nextui-org/link";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import supabase from "@/utils/supabase/browser";
import PostCard from "@/components/blogPostCard";
import Resume from "@/components/resume";
import SocialLink from "@/components/socialLink";
import { useState, useEffect } from "react";
import SkeletonPosts from "@/components/skeletonPosts";

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

function ReadMore(props: any) {
  const { posts } = props;
  console.log(posts);
  if (posts.length <= 3) return null;
  return (
    <Link
      href="/blog"
      className="text-sm font-medium text-primary-500 dark:text-primary-400"
    >
      Read more posts →
    </Link>
  );
}

export default function Home() {
  const [posts, setPosts] = useState<any[]>([]);

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
    <section className="flex flex-col items-center justify-center gap-4 pb-8 md:py-10">
      <div className="inline-block max-w-5xl text-center justify-center">
        <div className="mt-9">
          <div className="max-w-2xl text-left">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
              Software designer, creator, and kei car enthusiast.
            </h1>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              I’m Ryan, a software designer and entrepreneur based in Seattle,
              WA. I’m the co-founder and CTO of EVA, where we are
              revolutionizing digital assistants through the power of
              multi-modal LLM's. I'm also the co-founder of OhKei Life, a
              lifestyle brand that focuses on the kei car community.
            </p>
            <div className="mt-6 flex gap-2">
              <SocialLink
                href="https://x.com/ryan__milton"
                icon={faXTwitter}
              ></SocialLink>
              <SocialLink
                href="https://www.instagram.com/ryan_ohkeilife"
                icon={faInstagram}
              ></SocialLink>
              <SocialLink href="#" icon={faGithub}></SocialLink>
              <SocialLink href="#" icon={faLinkedin}></SocialLink>
            </div>
          </div>
        </div>
        <div className="mt-24 md:mt-28">
          <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-col gap-8">
              {posts.length > 0 ? (
                posts.map((post, idx) => {
                  if (idx > 2) return null;
                  return <PostCard key={post.slug} post={post} />;
                })
              ) : (
                <SkeletonPosts />
              )}
              <ReadMore posts={posts} />
            </div>
            <div className="space-y-10 lg:pl-16 xl:pl-24">
              <Resume />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
