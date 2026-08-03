import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto min-h-[65vh] max-w-3xl py-20 sm:py-28">
      <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-violet-600 dark:text-violet-400">
        RECORD / 404
      </p>
      <div className="mt-5 border-y border-zinc-200 py-10 dark:border-zinc-800">
        <h1 className="text-4xl font-bold tracking-[-0.035em] text-zinc-900 sm:text-5xl dark:text-zinc-50">
          This route is not in the index.
        </h1>
        <p className="mt-5 max-w-md text-base leading-7 text-zinc-600 dark:text-zinc-400">
          The page may have moved, or the link may no longer be current.
        </p>
      </div>
      <Link
        className="mt-7 inline-block whitespace-nowrap text-sm font-bold text-zinc-900 underline decoration-zinc-300 underline-offset-2 hover:text-violet-600 active:translate-y-px dark:text-zinc-100 dark:decoration-zinc-700 dark:hover:text-violet-400"
        href="/"
      >
        Return to the main index {"\u2192"}
      </Link>
    </div>
  );
}
