import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70dvh] max-w-[96rem] flex-col justify-center px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <p className="eyebrow text-zinc-500 dark:text-zinc-400">Error 404</p>
      <div className="mt-6 max-w-4xl">
        <h1 className="section-title text-zinc-950 dark:text-white">
          This route is not here.
        </h1>
        <p className="mt-5 max-w-md text-base leading-7 text-zinc-600 dark:text-zinc-400">
          The page may have moved, or the link may no longer be current.
        </p>
      </div>
      <Link
        className="site-primary-button mt-8 self-start whitespace-nowrap text-sm"
        href="/"
      >
        Return home
      </Link>
    </div>
  );
}
