import type { Metadata } from "next";

import { ProjectCaseFile } from "@/components/project-case-file";
import { projects } from "@/config/projects";
import { getAllPosts } from "@/lib/blog";

const description =
  "Selected products by Ryan Milton: Knosys, Eagle Eye, SpeedDeck, and Klipt.";

export const metadata: Metadata = {
  alternates: { canonical: "/projects" },
  description,
  openGraph: {
    description,
    images: ["/opengraph-image"],
    title: "Projects by Ryan Milton",
    type: "website",
    url: "/projects",
  },
  title: "Projects",
  twitter: {
    card: "summary_large_image",
    description,
    images: ["/opengraph-image"],
    title: "Projects by Ryan Milton",
  },
};

export default function ProjectsPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-[96rem] px-5 pb-12 sm:px-8 sm:pb-20 lg:px-12">
      <header className="flex min-h-[70dvh] flex-col justify-center py-16">
        <p className="eyebrow text-zinc-500 dark:text-zinc-400">Independent product work</p>
        <h1 className="mt-7 text-[2.15rem] font-extrabold leading-[0.82] tracking-[-0.072em] text-zinc-950 sm:text-[clamp(3.4rem,10.8vw,10rem)] dark:text-white">
          <span className="block">Four products.</span>
          <span className="block">Four constraints.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
          Local-first software, live operational data, native utilities, and hardware-aware tools, each documented through the decisions behind it.
        </p>
      </header>

      <section aria-label="Selected projects">
        {projects.map((project, index) => (
          <ProjectCaseFile
            key={project.slug}
            index={index}
            posts={posts.filter((post) => post.project === project.name)}
            project={project}
          />
        ))}
      </section>
    </div>
  );
}
