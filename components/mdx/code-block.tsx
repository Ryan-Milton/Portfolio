interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
  children: React.ReactNode;
  "data-language"?: string;
}

export function CodeBlock(props: CodeBlockProps) {
  const { children, "data-language": language, ...rest } = props;

  return (
    <div className="group relative my-6">
      {language && (
        <span className="absolute right-3 top-2 z-10 font-mono text-xs text-zinc-500 dark:text-zinc-400">
          {language}
        </span>
      )}
      <pre
        {...rest}
        className="overflow-x-auto rounded-sm border border-zinc-200 bg-zinc-50 p-4 text-sm dark:border-zinc-700 dark:bg-zinc-900"
      >
        {children}
      </pre>
    </div>
  );
}
