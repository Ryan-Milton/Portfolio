"use client";

import { useState } from "react";

import Image from "next/image";

interface VideoEmbedProps {
  poster?: string;
  title?: string;
  url: string;
}

function getVideoId(url: string): {
  id: string | null;
  provider: "youtube" | "vimeo" | null;
} {
  const youtubeMatch = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]{11})/,
  );

  if (youtubeMatch) return { id: youtubeMatch[1], provider: "youtube" };

  const vimeoMatch = url.match(
    /(?:vimeo\.com\/|player\.vimeo\.com\/video\/)(\d+)/,
  );

  if (vimeoMatch) return { id: vimeoMatch[1], provider: "vimeo" };

  return { id: null, provider: null };
}

function getEmbedUrl(provider: "youtube" | "vimeo", id: string): string {
  if (provider === "youtube") {
    return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1`;
  }

  return `https://player.vimeo.com/video/${id}?autoplay=1`;
}

export function VideoEmbed({ poster, title, url }: VideoEmbedProps) {
  const [shouldLoad, setShouldLoad] = useState(false);
  const { provider, id } = getVideoId(url);

  if (!provider || !id) {
    return <p className="text-red-600 dark:text-red-400">Invalid video URL.</p>;
  }

  const providerLabel = provider === "youtube" ? "YouTube" : "Vimeo";

  return (
    <figure className="my-8">
      <div className="relative aspect-video overflow-hidden rounded-lg border border-zinc-200 bg-zinc-950 dark:border-zinc-700">
        {shouldLoad ? (
          <iframe
            allowFullScreen
            allow="autoplay; encrypted-media; picture-in-picture"
            className="absolute inset-0 h-full w-full"
            referrerPolicy="strict-origin-when-cross-origin"
            src={getEmbedUrl(provider, id)}
            title={title || "Embedded video"}
          />
        ) : (
          <button
            aria-label={`Load ${title ?? "video"} from ${providerLabel}`}
            className="group absolute inset-0 flex h-full w-full items-center justify-center overflow-hidden text-white outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-violet-400"
            type="button"
            onClick={() => setShouldLoad(true)}
          >
            {poster && (
              <Image
                fill
                alt=""
                className="object-cover opacity-65 transition-opacity duration-[var(--duration-short)] group-hover:opacity-75 motion-reduce:transition-none"
                sizes="(max-width: 768px) 100vw, 720px"
                src={poster}
              />
            )}
            <span className="relative flex flex-col items-center gap-3 border border-white/20 bg-zinc-950/90 px-5 py-4">
              <span
                aria-hidden
                className="flex size-12 items-center justify-center bg-violet-600 text-xl"
              >
                &#9654;
              </span>
              <span className="text-sm font-semibold">Load video from {providerLabel}</span>
            </span>
          </button>
        )}
      </div>
      <figcaption className="mt-2 text-center text-sm text-zinc-500 dark:text-zinc-400">
        {title ? `${title}. ` : ""}
        The third-party player loads only after activation.
      </figcaption>
    </figure>
  );
}
