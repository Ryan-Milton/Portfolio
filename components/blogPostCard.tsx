import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import Link from "next/link";

export default function PostCard({
  post,
}: {
  post: { slug: string; title: string; summary: string };
}) {
  return (
    <div>
      <Card
        isHoverable
        className="p-4 border border-zinc-100 dark:border-zinc-700/40 text-left dark:bg-zinc-800/10 bg-zinc-50/10"
      >
        <CardHeader>
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            {post.title}
          </h3>
        </CardHeader>
        <CardBody>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            {post.summary}
          </p>
        </CardBody>
        <CardFooter>
          <Link
            href={`/blog/${post.slug}`}
            className="text-sm font-medium text-primary-500 dark:text-primary-400"
          >
            Read more →
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
