interface VideoEmbedProps {
  url: string;
  title?: string;
}

function getVideoId(url: string): {
  provider: "youtube" | "vimeo" | null;
  id: string | null;
} {
  const ytMatch = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]{11})/,
  );

  if (ytMatch) return { provider: "youtube", id: ytMatch[1] };

  const vimeoMatch = url.match(
    /(?:vimeo\.com\/|player\.vimeo\.com\/video\/)(\d+)/,
  );

  if (vimeoMatch) return { provider: "vimeo", id: vimeoMatch[1] };

  return { provider: null, id: null };
}

function getEmbedUrl(provider: "youtube" | "vimeo", id: string): string {
  if (provider === "youtube") {
    return `https://www.youtube-nocookie.com/embed/${id}`;
  }

  return `https://player.vimeo.com/video/${id}`;
}

export function VideoEmbed({ url, title }: VideoEmbedProps) {
  const { provider, id } = getVideoId(url);

  if (!provider || !id) {
    return (
      <p className="text-red-500 dark:text-red-400">Invalid video URL: {url}</p>
    );
  }

  const embedUrl = getEmbedUrl(provider, id);

  return (
    <figure className="my-8">
      <div className="relative aspect-video overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-700">
        <iframe
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="absolute inset-0 h-full w-full"
          src={embedUrl}
          title={title || "Embedded video"}
        />
      </div>
      {title && (
        <figcaption className="mt-2 text-center text-sm text-zinc-500 dark:text-zinc-400">
          {title}
        </figcaption>
      )}
    </figure>
  );
}
