import type { MDXComponents } from "mdx/types";

import { BlogImage } from "./blog-image";
import { Callout } from "./callout";
import { CodeBlock } from "./code-block";
import { VideoEmbed } from "./video-embed";

export const mdxComponents: MDXComponents = {
  img: BlogImage,
  pre: CodeBlock,
  Callout,
  BlogImage,
  VideoEmbed,
};
