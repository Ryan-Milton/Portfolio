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
    <footer className="mt-24 w-full border-t border-zinc-200 px-6 pb-8 pt-10 dark:border-zinc-800">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <nav aria-label="Footer">
            <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Navigation
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
            <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Connect
            </h2>
            <ul className="mt-3 flex gap-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <TrackedLink
                    aria-label={`${link.label} (opens in a new tab)`}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full text-zinc-400 outline-none transition-colors hover:bg-zinc-100 hover:text-violet-600 focus-visible:ring-2 focus-visible:ring-violet-500 motion-reduce:transition-none dark:hover:bg-zinc-900 dark:hover:text-violet-400"
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

          <div className="flex items-start md:justify-end">
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Powered by{" "}
              <span className="text-amber-900 dark:text-amber-300">coffee</span>.
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-zinc-100 pt-6 dark:border-zinc-800">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-500 dark:text-zinc-400">
            <p>&copy; {new Date().getFullYear()} Ryan Milton. All rights reserved.</p>
            <Link className="hover:text-violet-600 dark:hover:text-violet-400" href="/privacy">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
