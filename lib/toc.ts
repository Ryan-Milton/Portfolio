export interface TocItem {
  id: string;
  text: string;
  level: number;
}

export function extractToc(content: string): TocItem[] {
  // Strip fenced code blocks to avoid matching headings inside them
  const withoutCodeBlocks = content.replace(/```[\s\S]*?```/g, "");

  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const toc: TocItem[] = [];
  let match;

  while ((match = headingRegex.exec(withoutCodeBlocks)) !== null) {
    const level = match[1].length;
    const text = match[2]
      .trim()
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // strip [text](url) → text
      .replace(/`([^`]+)`/g, "$1"); // strip backticks

    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");

    toc.push({ id, text, level });
  }

  return toc;
}
