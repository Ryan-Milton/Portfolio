import {
  ArrowUpRight,
  GithubLogo,
  LinkedinLogo,
  YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

import { TrackedLink } from "@/components/tracked-link";
import { siteConfig } from "@/config/site";

const socialLinks = [
  { href: siteConfig.links.github, icon: GithubLogo, label: "GitHub" },
  { href: siteConfig.links.linkedin, icon: LinkedinLogo, label: "LinkedIn" },
  { href: siteConfig.links.youtube, icon: YoutubeLogo, label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="mt-20 w-full border-t border-zinc-200 px-5 pb-8 pt-12 sm:px-8 lg:mt-32 lg:px-12 lg:pt-16 dark:border-zinc-800">
      <div className="mx-auto max-w-[96rem]">
        <div className="grid gap-14 md:grid-cols-[minmax(0,1.5fr)_minmax(12rem,0.5fr)_minmax(12rem,0.5fr)]">
          <div>
            <p className="max-w-3xl text-4xl font-extrabold leading-[0.95] tracking-[-0.06em] text-zinc-900 sm:text-5xl lg:text-7xl dark:text-zinc-100">
              Software for screens, systems, and the real world.
            </p>
          </div>
          <nav aria-label="Footer">
            <h2 className="meta-label text-zinc-500 dark:text-zinc-400">Navigate</h2>
            <ul className="mt-5 space-y-3">
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    className="rounded-sm text-lg font-semibold text-zinc-700 outline-none transition-colors hover:text-zinc-950 focus-visible:ring-2 focus-visible:ring-violet-500 motion-reduce:transition-none dark:text-zinc-300 dark:hover:text-white"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="meta-label text-zinc-500 dark:text-zinc-400">
              Public profiles
            </h2>
            <ul className="mt-5 space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <TrackedLink
                    aria-label={`${link.label} (opens in a new tab)`}
                    className="group inline-flex items-center gap-3 rounded-sm text-lg font-semibold text-zinc-700 outline-none transition-colors hover:text-zinc-950 focus-visible:ring-2 focus-visible:ring-violet-500 motion-reduce:transition-none dark:text-zinc-300 dark:hover:text-white"
                    event="social_link_clicked"
                    href={link.href}
                    properties={{ network: link.label.toLowerCase() }}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <link.icon aria-hidden size={21} weight="bold" />
                    <span>{link.label}</span>
                    <ArrowUpRight aria-hidden className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none" size={16} weight="bold" />
                  </TrackedLink>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="mt-14 border-t border-zinc-200 pt-5 dark:border-zinc-800">
          <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-zinc-500 dark:text-zinc-400">
            <p>&copy; {new Date().getFullYear()} Ryan Milton</p>
            <Link
              className="rounded-sm outline-none hover:text-violet-600 focus-visible:ring-2 focus-visible:ring-violet-500 dark:hover:text-violet-400"
              href="/privacy"
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
