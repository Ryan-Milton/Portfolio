"use client";

import { useTheme } from "next-themes";
import clsx from "clsx";

import { SunFilledIcon, MoonFilledIcon } from "@/components/icons";

export interface ThemeSwitchProps {
  className?: string;
}

export const ThemeSwitch = ({ className }: ThemeSwitchProps) => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      aria-label="Toggle color theme"
      className={clsx(
        "inline-flex size-11 items-center justify-center rounded-full text-zinc-600 outline-none transition-colors hover:bg-zinc-200 hover:text-violet-600 focus-visible:ring-2 focus-visible:ring-violet-500 active:translate-y-px motion-reduce:transition-none dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-violet-400",
        className,
      )}
      title="Toggle color theme"
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <MoonFilledIcon className="dark:hidden" size={20} />
      <SunFilledIcon className="hidden dark:block" size={20} />
    </button>
  );
};
