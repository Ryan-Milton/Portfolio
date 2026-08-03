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
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-zinc-50/95 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/95">
      <nav
        aria-label="Primary"
        className="mx-auto max-w-[88rem] px-6 lg:px-10"
      >
        <div className="flex h-[4.5rem] items-center justify-between">
          <NextLink
            aria-current={pathname === "/" ? "page" : undefined}
            aria-label="Ryan Milton, home"
            className="flex items-baseline gap-3 rounded-sm outline-none transition-colors hover:text-violet-600 focus-visible:ring-2 focus-visible:ring-violet-500 motion-reduce:transition-none dark:hover:text-violet-400"
            href="/"
          >
            <span className="text-sm font-bold uppercase tracking-[0.08em]">
              Ryan Milton
            </span>
            <span
              aria-hidden
              className="hidden font-mono text-[0.65rem] uppercase tracking-[0.16em] text-zinc-500 sm:inline"
            >
              / Product engineer
            </span>
          </NextLink>

          <ul className="hidden items-center gap-7 md:flex">
            {siteConfig.navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <li key={item.href}>
                  <NextLink
                    aria-current={active ? "page" : undefined}
                    className={clsx(
                      "relative rounded-sm font-mono text-xs font-bold uppercase tracking-[0.12em] outline-none transition-colors focus-visible:ring-2 focus-visible:ring-violet-500 motion-reduce:transition-none",
                      active
                        ? "text-violet-600 dark:text-violet-400"
                        : "text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white",
                    )}
                    href={item.href}
                  >
                    {item.label}
                    {active && (
                      <span className="absolute -left-3 top-1/2 size-1 -translate-y-1/2 bg-violet-500" />
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
              className="inline-flex size-11 items-center justify-center rounded-full text-zinc-600 outline-none transition-colors hover:bg-zinc-200 hover:text-zinc-950 focus-visible:ring-2 focus-visible:ring-violet-500 active:translate-y-px motion-reduce:transition-none md:hidden dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
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
            className="space-y-1 border-t border-zinc-200 py-3 md:hidden dark:border-zinc-800"
            id="mobile-navigation"
          >
            {siteConfig.navMenuItems.map((item) => {
              const active = isActive(item.href);

              return (
                <li key={item.href}>
                  <NextLink
                    aria-current={active ? "page" : undefined}
                    className={clsx(
                      "block rounded-sm px-3 py-2.5 font-mono text-sm font-bold uppercase tracking-[0.1em] outline-none transition-colors focus-visible:ring-2 focus-visible:ring-violet-500 motion-reduce:transition-none",
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
