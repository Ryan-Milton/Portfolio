import { TocItem } from "@/lib/toc";

interface TableOfContentsProps {
  items: TocItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  if (items.length === 0) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="border-l-4 border-violet-500 pl-5"
    >
      <h2 className="mb-4 text-sm font-bold text-zinc-950 dark:text-white">
        On this page
      </h2>
      <ul className="space-y-2 text-sm">
        {items.map((item) => (
          <li key={item.id} className={item.level === 3 ? "pl-4" : ""}>
            <a
              className="text-zinc-600 underline decoration-transparent underline-offset-4 transition-colors hover:text-zinc-950 hover:decoration-violet-500 dark:text-zinc-300 dark:hover:text-white"
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
