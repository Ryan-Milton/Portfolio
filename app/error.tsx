"use client";

import { useEffect } from "react";

import { buttonVariants, Button } from "@heroui/react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <span aria-hidden className="text-8xl font-bold text-zinc-200 dark:text-zinc-800">
        :(
      </span>
      <h1 className="mt-6 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
        Something went wrong
      </h1>
      <p className="mt-3 max-w-md text-base text-zinc-600 dark:text-zinc-400">
        An unexpected error occurred. Try again or head back to the homepage.
      </p>
      <div className="mt-8 flex gap-4">
        <Button className="site-primary-button" variant="primary" onPress={reset}>
          Try again
        </Button>
        <Link className={buttonVariants({ variant: "outline" })} href="/">
          Go home
        </Link>
      </div>
    </div>
  );
}
