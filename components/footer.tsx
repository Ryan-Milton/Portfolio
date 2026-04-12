"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";

import { siteConfig } from "@/config/site";

const socialLinks = [
  { href: siteConfig.links.twitter, icon: faXTwitter, label: "X" },
  {
    href: siteConfig.links.instagram,
    icon: faInstagram,
    label: "Instagram",
  },
  { href: siteConfig.links.github, icon: faGithub, label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/ryanmilton",
    icon: faLinkedin,
    label: "LinkedIn",
  },
];

export function Footer() {
  return (
    <footer className="mt-24 w-full border-t border-zinc-200 px-6 pb-8 pt-10 dark:border-zinc-800">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Navigation
            </h3>
            <ul className="mt-3 space-y-2">
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    className="text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Connect
            </h3>
            <div className="mt-3 flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  className="text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
                  href={link.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon className="h-5 w-5" icon={link.icon} />
                  <span className="sr-only">{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Coffee Easter Egg */}
          <div className="flex items-start md:justify-end">
            <div className="flex items-center gap-1 text-sm text-zinc-500 dark:text-zinc-400">
              <span>Powered by</span>
              <Popover placement="top" showArrow={true}>
                <PopoverTrigger>
                  <span className="cursor-pointer text-amber-900 transition-colors hover:text-amber-700">
                    Coffee
                  </span>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="max-w-40 px-1 py-2">
                    <div className="text-xs font-semibold">
                      A delicious hot beverage.
                    </div>
                    <div className="text-xs">
                      Hazlenut - add a splash of cream 🤌🏻
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-zinc-100 pt-6 dark:border-zinc-800">
          <p className="text-xs text-zinc-400">
            &copy; {new Date().getFullYear()} Ryan Milton. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
