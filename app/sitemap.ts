import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";

const siteUpdatedAt = new Date("2026-07-23T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const blogRoutes = getAllSlugs().flatMap((slug) => {
    const post = getPostBySlug(slug);

    if (!post) return [];

    return [
      {
        lastModified: new Date(
          `${post.updatedAt ?? post.publishedAt}T00:00:00.000Z`,
        ),
        url: `${siteConfig.url}/blog/${slug}`,
      },
    ];
  });
  const routes = ["", "/about", "/projects", "/blog", "/blog/archive", "/privacy"].map(
    (route) => ({
      lastModified: siteUpdatedAt,
      url: `${siteConfig.url}${route}`,
    }),
  );

  return [...routes, ...blogRoutes];
}
