"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

import { ThemeSwitch } from "@/components/theme-switch";
import { siteConfig } from "@/config/site";

export const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", closeOnEscape);

    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen]);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-zinc-50/80 backdrop-blur-md dark:border-zinc-800/70 dark:bg-zinc-950/80">
      <nav
        aria-label="Primary"
        className="mx-auto max-w-6xl px-6 min-[1200px]:px-0"
      >
        <div className="flex h-16 items-center justify-between">
          <NextLink
            aria-current={pathname === "/" ? "page" : undefined}
            aria-label="Ryan Milton, home"
            className="rounded-full outline-none ring-violet-500 transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-50 motion-reduce:transition-none dark:focus-visible:ring-offset-zinc-950"
            href="/"
          >
            <span
              aria-hidden="true"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 text-xs font-semibold tracking-tight text-zinc-50 dark:bg-zinc-100 dark:text-zinc-950"
            >
              RM
            </span>
          </NextLink>

          <ul className="hidden items-center gap-8 rounded-full bg-zinc-200/80 px-6 py-2 backdrop-blur-sm md:flex dark:bg-zinc-900/80">
            {siteConfig.navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <li key={item.href}>
                  <NextLink
                    aria-current={active ? "page" : undefined}
                    className={clsx(
                      "relative rounded-sm text-sm font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-violet-500 motion-reduce:transition-none",
                      active
                        ? "text-violet-600 dark:text-violet-400"
                        : "text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white",
                    )}
                    href={item.href}
                  >
                    {item.label}
                    {active && (
                      <span className="absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                    )}
                  </NextLink>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-1">
            <ThemeSwitch />
            <button
              ref={menuButtonRef}
              aria-controls="mobile-navigation"
              aria-expanded={isMenuOpen}
              aria-label={
                isMenuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-zinc-600 outline-none transition-colors hover:bg-zinc-200 hover:text-zinc-950 focus-visible:ring-2 focus-visible:ring-violet-500 motion-reduce:transition-none md:hidden dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              {isMenuOpen ? (
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M6 6l12 12M18 6 6 18"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="1.75"
                  />
                </svg>
              ) : (
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="1.75"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <ul
            className="space-y-1 border-t border-zinc-200/70 py-3 md:hidden dark:border-zinc-800/70"
            id="mobile-navigation"
          >
            {siteConfig.navMenuItems.map((item) => {
              const active = isActive(item.href);

              return (
                <li key={item.href}>
                  <NextLink
                    aria-current={active ? "page" : undefined}
                    className={clsx(
                      "block rounded-lg px-3 py-2.5 text-base font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-violet-500 motion-reduce:transition-none",
                      active
                        ? "bg-violet-500/10 text-violet-600 dark:text-violet-400"
                        : "text-zinc-700 hover:bg-zinc-200/70 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-white",
                    )}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </NextLink>
                </li>
              );
            })}
          </ul>
        )}
      </nav>
    </header>
  );
};
