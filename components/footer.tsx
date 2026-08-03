import {
  faGithub,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import { TrackedLink } from "@/components/tracked-link";
import { siteConfig } from "@/config/site";

const socialLinks = [
  { href: siteConfig.links.github, icon: faGithub, label: "GitHub" },
  { href: siteConfig.links.linkedin, icon: faLinkedin, label: "LinkedIn" },
  { href: siteConfig.links.youtube, icon: faYoutube, label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="mt-24 w-full border-t border-zinc-200 px-6 pb-8 pt-10 lg:px-10 dark:border-zinc-800">
      <div className="mx-auto max-w-[88rem]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(16rem,1.5fr)_repeat(2,minmax(10rem,0.5fr))]">
          <div>
            <p className="max-w-md text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Product engineering from interface to infrastructure.
            </p>
            <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-500 dark:text-zinc-400">
              Seattle metro. Available for select hybrid and remote opportunities.
            </p>
          </div>
          <nav aria-label="Footer">
            <h2 className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
              Index
            </h2>
            <ul className="mt-3 space-y-2">
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    className="rounded-sm text-sm text-zinc-500 outline-none transition-colors hover:text-zinc-900 focus-visible:ring-2 focus-visible:ring-violet-500 motion-reduce:transition-none dark:text-zinc-400 dark:hover:text-zinc-100"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
              Public profiles
            </h2>
            <ul className="mt-3 flex gap-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <TrackedLink
                    aria-label={`${link.label} (opens in a new tab)`}
                    className="inline-flex size-11 items-center justify-center rounded-full text-zinc-400 outline-none transition-colors hover:bg-zinc-100 hover:text-violet-600 focus-visible:ring-2 focus-visible:ring-violet-500 motion-reduce:transition-none dark:hover:bg-zinc-900 dark:hover:text-violet-400"
                    event="social_link_clicked"
                    href={link.href}
                    properties={{ network: link.label.toLowerCase() }}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      aria-hidden="true"
                      className="h-5 w-5"
                      icon={link.icon}
                    />
                  </TrackedLink>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="mt-10 border-t border-zinc-200 pt-5 dark:border-zinc-800">
          <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-zinc-500 dark:text-zinc-400">
            <p>&copy; {new Date().getFullYear()} Ryan Milton / Seattle, WA</p>
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
