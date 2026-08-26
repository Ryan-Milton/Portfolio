import Image from "next/image";

interface BlogImageProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
}

export function BlogImage({ src, alt, width, height }: BlogImageProps) {
  if (!src) return null;

  const isExternal = src.startsWith("http");

  return (
    <figure className="my-8">
      {isExternal ? (
        // eslint-disable-next-line
        <img
          alt={alt || ""}
          className="w-full rounded-sm"
          loading="lazy"
          src={src}
        />
      ) : (
        <Image
          alt={alt || ""}
          className="rounded-sm"
          height={height || 630}
          sizes="(max-width: 768px) 100vw, 720px"
          src={src}
          width={width || 1200}
        />
      )}
      {alt && (
        <figcaption className="mt-3 text-left font-mono text-xs text-zinc-500 dark:text-zinc-400">
          {alt}
        </figcaption>
      )}
    </figure>
  );
}
