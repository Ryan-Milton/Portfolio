"use client";

import { Moon, Sun } from "@phosphor-icons/react";
import { useTheme } from "next-themes";
import clsx from "clsx";

export interface ThemeSwitchProps {
  className?: string;
}

export const ThemeSwitch = ({ className }: ThemeSwitchProps) => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      aria-label="Toggle color theme"
      className={clsx(
        "inline-flex size-11 items-center justify-center rounded-full text-zinc-700 outline-none transition-colors hover:bg-zinc-200 hover:text-zinc-950 focus-visible:ring-2 focus-visible:ring-violet-500 active:translate-y-px motion-reduce:transition-none dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white",
        className,
      )}
      title="Toggle color theme"
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <Moon aria-hidden className="dark:hidden" size={20} weight="bold" />
      <Sun aria-hidden className="hidden dark:block" size={20} weight="bold" />
    </button>
  );
};
