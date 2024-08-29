"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import supabase from "@/utils/supabase/browser";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

const BlogPost = () => {
  const router = useRouter();
  const pathname = usePathname();
  const slug = pathname.split("/").pop();
  // const { slug } = router.query;
  const [post, setPost] = useState(null);
  const [mdxSource, setMdxSource] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;

      const { data, error } = await supabase
        .from("posts")
        .select("title, content")
        .eq("slug", slug)
        .single();

      if (error) {
        console.error(error);
      } else {
        setPost(data);
        const mdxSource = await serialize(data.content);
        setMdxSource(mdxSource);
      }
    };

    fetchPost();
  }, [slug]);

  if (!post || !mdxSource) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <MDXRemote {...mdxSource} />
    </div>
  );
};

export default BlogPost;
