export const accentGradients = {
  violet: { from: "#FF1CF7", to: "#b249f8" },
  yellow: { from: "#FF705B", to: "#FFB457" },
  blue: { from: "#5EA2EF", to: "#0072F5" },
  cyan: { from: "#00b7fa", to: "#01cfea" },
  green: { from: "#6FEE8D", to: "#17c964" },
  pink: { from: "#FF72E1", to: "#F54C7A" },
} as const;

export type AccentColor = keyof typeof accentGradients;

export const accentClasses: Record<
  AccentColor,
  { border: string; badge: string; glow: string }
> = {
  violet: {
    border: "from-[#FF1CF7] to-[#b249f8]",
    badge:
      "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
    glow: "hover:shadow-purple-500/10 dark:hover:shadow-purple-500/20",
  },
  yellow: {
    border: "from-[#FF705B] to-[#FFB457]",
    badge:
      "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
    glow: "hover:shadow-orange-500/10 dark:hover:shadow-orange-500/20",
  },
  blue: {
    border: "from-[#5EA2EF] to-[#0072F5]",
    badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    glow: "hover:shadow-blue-500/10 dark:hover:shadow-blue-500/20",
  },
  cyan: {
    border: "from-[#00b7fa] to-[#01cfea]",
    badge: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300",
    glow: "hover:shadow-cyan-500/10 dark:hover:shadow-cyan-500/20",
  },
  green: {
    border: "from-[#6FEE8D] to-[#17c964]",
    badge:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
    glow: "hover:shadow-emerald-500/10 dark:hover:shadow-emerald-500/20",
  },
  pink: {
    border: "from-[#FF72E1] to-[#F54C7A]",
    badge: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300",
    glow: "hover:shadow-pink-500/10 dark:hover:shadow-pink-500/20",
  },
};
