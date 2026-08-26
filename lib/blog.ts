import fs from "fs";
import path from "path";

import matter from "gray-matter";
import readingTime from "reading-time";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export type PostStatus = "published" | "archived";
export type PostFormat = "article" | "video";

export interface PostMeta {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  updatedAt?: string;
  status: PostStatus;
  format: PostFormat;
  project?: string;
  externalUrl?: string;
  tags?: string[];
  image?: string;
  readingTime: number;
}

export interface Post extends PostMeta {
  content: string;
}

function requiredString(
  data: Record<string, unknown>,
  field: string,
  filename: string,
): string {
  const value = data[field];

  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(`Missing or invalid ${field} in ${filename}`);
  }

  return value;
}

function optionalString(
  data: Record<string, unknown>,
  field: string,
  filename: string,
): string | undefined {
  const value = data[field];

  if (value === undefined) return undefined;
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(`Invalid ${field} in ${filename}`);
  }

  return value;
}

function validateDate(value: string, field: string, filename: string) {
  const date = new Date(`${value}T00:00:00.000Z`);

  if (
    !/^\d{4}-\d{2}-\d{2}$/.test(value) ||
    Number.isNaN(date.getTime()) ||
    date.toISOString().slice(0, 10) !== value
  ) {
    throw new Error(`Invalid ${field} in ${filename}: ${value}`);
  }

  return value;
}

function getPostMeta(filename: string): PostMeta {
  const slug = filename.replace(/\.mdx$/, "");
  const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf-8");
  const { data, content } = matter(raw);
  const status = requiredString(data, "status", filename);
  const format = requiredString(data, "format", filename);
  const publishedAt = validateDate(
    requiredString(data, "publishedAt", filename),
    "publishedAt",
    filename,
  );
  const updatedAtValue = optionalString(data, "updatedAt", filename);
  const updatedAt = updatedAtValue
    ? validateDate(updatedAtValue, "updatedAt", filename)
    : undefined;
  const tags = data.tags;
  const externalUrl = optionalString(data, "externalUrl", filename);
  const image = optionalString(data, "image", filename);

  if (
    tags !== undefined &&
    (!Array.isArray(tags) || tags.some((tag) => typeof tag !== "string"))
  ) {
    throw new Error(`Invalid tags in ${filename}`);
  }
  if (externalUrl) {
    const url = new URL(externalUrl);

    if (url.protocol !== "https:" && url.protocol !== "http:") {
      throw new Error(`Invalid externalUrl protocol in ${filename}`);
    }
  }
  if (image && !image.startsWith("/")) {
    throw new Error(`Post images must be local paths in ${filename}`);
  }

  if (status !== "published" && status !== "archived") {
    throw new Error(`Invalid status in ${filename}: ${status}`);
  }

  if (format !== "article" && format !== "video") {
    throw new Error(`Invalid format in ${filename}: ${format}`);
  }

  return {
    slug,
    title: requiredString(data, "title", filename),
    summary: requiredString(data, "summary", filename),
    publishedAt,
    updatedAt,
    status,
    format,
    project: optionalString(data, "project", filename),
    externalUrl,
    tags: tags as string[] | undefined,
    image,
    readingTime: Math.ceil(readingTime(content).minutes),
  };
}

function getPosts(): PostMeta[] {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));
  const posts = files.map(getPostMeta);

  return posts.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getAllPosts(): PostMeta[] {
  return getPosts().filter((post) => post.status === "published");
}

export function getArchivedPosts(): PostMeta[] {
  return getPosts().filter((post) => post.status === "archived");
}

export function getPostBySlug(slug: string): Post | null {
  if (!/^[a-z0-9-]+$/.test(slug)) return null;

  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { content } = matter(raw);

  return {
    ...getPostMeta(`${slug}.mdx`),
    content,
  };
}

export function getReadingTime(content: string): number {
  const result = readingTime(content);

  return Math.ceil(result.minutes);
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}
