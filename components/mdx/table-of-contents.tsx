import { TocItem } from "@/lib/toc";

interface TableOfContentsProps {
  items: TocItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  if (items.length === 0) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="mb-10 border-y border-zinc-200 py-5 dark:border-zinc-700"
    >
      <h2 className="mb-3 font-mono text-[0.65rem] font-bold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
        Entry index
      </h2>
      <ul className="space-y-1.5 text-sm">
        {items.map((item) => (
          <li key={item.id} className={item.level === 3 ? "pl-4" : ""}>
            <a
              className="text-zinc-600 underline decoration-transparent underline-offset-4 transition-colors hover:text-violet-600 hover:decoration-violet-500 dark:text-zinc-300 dark:hover:text-violet-400"
              href={`#${item.id}`}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
