"use client";

import { useEffect } from "react";

import { Button } from "@heroui/react";
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
    <div className="mx-auto min-h-[60vh] max-w-3xl py-20 sm:py-28">
      <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-violet-600 dark:text-violet-400">
        RECORD / RUNTIME ERROR
      </p>
      <div className="mt-5 border-y border-zinc-200 py-10 dark:border-zinc-800">
        <h1 className="text-4xl font-bold tracking-[-0.035em] text-zinc-900 sm:text-5xl dark:text-zinc-50">
          Something interrupted this page.
        </h1>
        <p className="mt-5 max-w-md text-base leading-7 text-zinc-600 dark:text-zinc-400">
          Try the request again. If the interruption persists, return to the main
          index.
        </p>
      </div>
      <div className="mt-7 flex flex-wrap items-center gap-5">
        <Button
          className="site-primary-button rounded-md active:translate-y-px"
          variant="primary"
          onPress={reset}
        >
          Try again
        </Button>
        <Link
          className="whitespace-nowrap text-sm font-bold text-zinc-900 underline decoration-zinc-300 underline-offset-2 hover:text-violet-600 active:translate-y-px dark:text-zinc-100 dark:decoration-zinc-700 dark:hover:text-violet-400"
          href="/"
        >
          Main index {"\u2192"}
        </Link>
      </div>
    </div>
  );
}
