"use client";

import { useEffect } from "react";

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
    <div className="mx-auto flex min-h-[70dvh] max-w-[96rem] flex-col justify-center px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <p className="eyebrow text-zinc-500 dark:text-zinc-400">Runtime error</p>
      <div className="mt-6 max-w-4xl">
        <h1 className="section-title text-zinc-950 dark:text-white">
          Something interrupted this page.
        </h1>
        <p className="mt-5 max-w-md text-base leading-7 text-zinc-600 dark:text-zinc-400">
          Try the request again. If the interruption persists, return to the main
          index.
        </p>
      </div>
      <div className="mt-8 flex flex-wrap items-center gap-5">
        <button
          className="site-primary-button active:translate-y-px"
          type="button"
          onClick={reset}
        >
          Try again
        </button>
        <Link
          className="whitespace-nowrap text-sm font-bold text-zinc-950 underline decoration-zinc-300 underline-offset-4 hover:decoration-violet-500 active:translate-y-px dark:text-white dark:decoration-zinc-700"
          href="/"
        >
          Return home
        </Link>
      </div>
    </div>
  );
}
