import type { MDXComponents } from "mdx/types";

import { BlogImage } from "./blog-image";
import { Callout } from "./callout";
import { CodeBlock } from "./code-block";
import { VideoEmbed } from "./video-embed";

export const mdxComponents: MDXComponents = {
  // @ts-expect-error -- BlogImage accepts narrower props than the generic img type
  img: BlogImage,
  // @ts-expect-error -- CodeBlock accepts narrower props than the generic pre type
  pre: CodeBlock,
  Callout,
  BlogImage,
  VideoEmbed,
};
