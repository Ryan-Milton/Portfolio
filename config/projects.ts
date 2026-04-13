import type { AccentColor } from "./colors";

export interface Project {
  name: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  repoUrl?: string;
  year: string;
  accent?: AccentColor;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    name: "EVA",
    description:
      "A next-generation digital assistant powered by multi-modal large language models. Co-founded as CTO, building the future of AI-driven personal assistance.",
    techStack: ["TypeScript", "React", "Node.js", "LLMs", "AI/ML"],
    year: "2024",
    accent: "violet",
    featured: true,
  },
  {
    name: "OhKei Life",
    description:
      "A lifestyle brand and community platform focused on the Japanese kei car culture. Built from the ground up with a focus on community engagement and e-commerce.",
    techStack: ["React", "Next.js", "Tailwind CSS"],
    liveUrl: "https://www.instagram.com/ryan_ohkeilife",
    year: "2024",
    accent: "yellow",
  },
  {
    name: "Focus App",
    description:
      "A productivity application designed to help users maintain deep focus through flexible time blocks, ambient soundscapes, and distraction-free workflows.",
    techStack: ["React Native", "TypeScript", "Node.js"],
    year: "2024",
    accent: "cyan",
  },
  {
    name: "Portfolio",
    description:
      "This portfolio site — built with Next.js 14, TypeScript, Tailwind CSS, and NextUI. Features a file-based MDX blog, dark mode, and responsive design.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "MDX"],
    repoUrl: "https://github.com/Ryan-Milton/Portfolio",
    year: "2024",
    accent: "green",
  },
];
