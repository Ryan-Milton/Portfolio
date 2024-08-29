import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Skeleton } from "@nextui-org/react";
import { slider } from "@nextui-org/theme";
import Link from "next/link";

export default function SkeletonPosts() {
  let skelePosts = Array.from({ length: 3 }, (_, i) => i);
  return (
    <div className="flex flex-col gap-8">
      {skelePosts.map((_, i) => (
        <Card className="p-4 border border-zinc-100 dark:border-zinc-700/40 dark:bg-zinc-800/10 bg-zinc-50/10">
          <div className="space-y-3 mt-6">
            <Skeleton className="w-3/5 rounded-full">
              <div className="h-3 w-3/5 rounded-full bg-default-200"></div>
            </Skeleton>
          </div>
          <div className="mt-6 space-y-3">
            <Skeleton className="w-4/5 rounded-lg">
              <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-2/5 rounded-lg">
              <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
            </Skeleton>
          </div>
          <div className="mt-6">
            <Skeleton className="w-1/5 rounded-lg">
              <div className="h-3 w-1/5 rounded-lg bg-default-300"></div>
            </Skeleton>
          </div>
        </Card>
      ))}
    </div>
  );
}
