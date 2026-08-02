import { buttonVariants } from "@heroui/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[65vh] flex-col items-center justify-center text-center">
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-violet-600 dark:text-violet-400">
        Error / 404
      </p>
      <h1 className="mt-5 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
        This route went off the map.
      </h1>
      <p className="mt-4 max-w-md text-zinc-600 dark:text-zinc-400">
        The page may have moved, or the link may no longer be current.
      </p>
      <Link
        className={`${buttonVariants({ variant: "primary" })} site-primary-button mt-8`}
        href="/"
      >
        Return home
      </Link>
    </div>
  );
}
