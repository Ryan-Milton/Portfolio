"use client";

import { useEffect, useRef, useState } from "react";
import { List, X } from "@phosphor-icons/react";
import clsx from "clsx";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

import { ThemeSwitch } from "@/components/theme-switch";
import { siteConfig } from "@/config/site";

export const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();

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
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <nav
        aria-label="Primary"
        className="mx-auto max-w-[96rem] px-5 sm:px-8 lg:px-12"
      >
        <div className="flex h-[4.5rem] items-center justify-between">
          <NextLink
            aria-current={pathname === "/" ? "page" : undefined}
            aria-label="Ryan Milton, home"
            className="group flex items-baseline gap-3 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
            href="/"
          >
            <span className="text-sm font-extrabold tracking-[-0.03em] transition-transform duration-300 group-hover:-translate-y-0.5 motion-reduce:transition-none">
              Ryan Milton
            </span>
            <span
              aria-hidden
              className="hidden font-mono text-[0.62rem] uppercase tracking-[0.14em] text-zinc-500 sm:inline"
            >
              Senior engineer
            </span>
          </NextLink>

          <ul className="hidden items-center gap-8 md:flex">
            {siteConfig.navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <li key={item.href}>
                  <NextLink
                    aria-current={active ? "page" : undefined}
                    className={clsx(
                      "relative rounded-sm text-sm font-semibold outline-none transition-colors focus-visible:ring-2 focus-visible:ring-violet-500 motion-reduce:transition-none",
                      active
                        ? "text-zinc-950 dark:text-white"
                        : "text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white",
                    )}
                    href={item.href}
                  >
                    {item.label}
                    {active && <span className="absolute -bottom-2 left-0 h-1 w-full bg-violet-500" />}
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
              className="inline-flex size-11 items-center justify-center rounded-full text-zinc-700 outline-none transition-colors hover:bg-zinc-200 hover:text-zinc-950 focus-visible:ring-2 focus-visible:ring-violet-500 active:translate-y-px motion-reduce:transition-none md:hidden dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white"
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              {isMenuOpen ? <X aria-hidden size={22} weight="bold" /> : <List aria-hidden size={22} weight="bold" />}
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {isMenuOpen && (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="border-t border-zinc-200 py-5 md:hidden dark:border-zinc-800"
              exit={{ opacity: 0, y: reduceMotion ? 0 : -12 }}
              initial={{ opacity: 0, y: reduceMotion ? 0 : -12 }}
              transition={{ duration: reduceMotion ? 0 : 0.24 }}
            >
              <ul className="space-y-1" id="mobile-navigation">
                {siteConfig.navMenuItems.map((item) => {
                  const active = isActive(item.href);

                  return (
                    <li key={item.href}>
                      <NextLink
                        aria-current={active ? "page" : undefined}
                        className={clsx(
                          "block rounded-sm px-2 py-3 text-3xl font-bold tracking-[-0.05em] outline-none focus-visible:ring-2 focus-visible:ring-violet-500",
                          active
                            ? "text-zinc-950 dark:text-white"
                            : "text-zinc-500 hover:text-zinc-950 dark:hover:text-white",
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
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
