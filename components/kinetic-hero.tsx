import Link from "next/link";

export function KineticHero() {
  return (
    <section className="relative mx-auto flex min-h-[calc(100dvh-4.5rem)] max-w-[96rem] items-center overflow-hidden px-5 py-10 sm:px-8 lg:px-12">
      <div aria-hidden className="absolute bottom-0 left-5 top-0 w-1 bg-violet-500 sm:left-8 lg:left-12" />

      <div className="w-full pl-5 sm:pl-8 lg:pl-12">
        <p className="eyebrow text-zinc-600 dark:text-zinc-300">
          Ryan Milton / Senior software engineer
        </p>
        <h1 className="display-title mt-6 max-w-[13ch] text-zinc-950 dark:text-white">
          <span className="block pb-[0.08em]">Software for</span>
          <span className="block pb-[0.12em] text-violet-600 dark:text-violet-400">
            the real world.
          </span>
        </h1>
        <div className="mt-7 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <p className="max-w-xl text-base font-medium leading-7 text-zinc-600 sm:text-lg dark:text-zinc-300">
            I build products across web, mobile, desktop, live data, and hardware.
          </p>
          <Link className="site-primary-button shrink-0 whitespace-nowrap" href="#selected-projects">
            View selected work
          </Link>
        </div>
      </div>
    </section>
  );
}
