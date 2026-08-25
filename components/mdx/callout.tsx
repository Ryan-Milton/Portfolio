interface CalloutProps {
  children: React.ReactNode;
  type?: "info" | "warning" | "tip" | "note";
}

const styles: Record<string, string> = {
  info: "border-blue-500 bg-blue-50 dark:bg-blue-950/30 text-blue-900 dark:text-blue-200",
  warning:
    "border-amber-500 bg-amber-50 dark:bg-amber-950/30 text-amber-900 dark:text-amber-200",
  tip: "border-green-500 bg-green-50 dark:bg-green-950/30 text-green-900 dark:text-green-200",
  note: "border-zinc-400 bg-zinc-50 dark:bg-zinc-800/50 text-zinc-800 dark:text-zinc-200",
};

export function Callout({ children, type = "note" }: CalloutProps) {
  return (
    <aside
      className={`my-8 rounded-sm border-l-4 p-5 not-prose ${styles[type]}`}
      role="note"
    >
      <div className="mb-1 text-sm font-medium uppercase tracking-wide opacity-70">
        {type}
      </div>
      <div className="text-sm">{children}</div>
    </aside>
  );
}
