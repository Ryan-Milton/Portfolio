export type ProjectStatus =
  | "Active development"
  | "Active open source"
  | "Coming August 2026"
  | "Early access";

export interface ProjectLink {
  href: string;
  label: string;
  type: "source" | "video" | "website";
}

export interface ProjectMedia {
  alt: string;
  src: string;
}

export interface Project {
  architecture?: string[];
  category: string;
  constraint: string;
  featured: boolean;
  highlights: string[];
  links: ProjectLink[];
  media?: ProjectMedia;
  name: string;
  releaseLabel: string;
  role: string;
  slug: string;
  status: ProjectStatus;
  summary: string;
  techStack: string[];
}

export const projects: Project[] = [
  {
    architecture: [
      "Local Markdown",
      "SQLite FTS",
      "Logical E2EE sync",
      "Desktop + iOS",
    ],
    category: "Local-first knowledge",
    constraint: "Portable data without surrendering privacy.",
    featured: true,
    highlights: [
      "Early access desktop build available now",
      "Native SwiftUI iOS client in release hardening",
      "Sync uses XChaCha20-Poly1305 encryption and Ed25519 signatures",
    ],
    links: [
      {
        href: "https://knosys.sh",
        label: "Visit Knosys",
        type: "website",
      },
    ],
    media: {
      alt: "Knosys tasks interface on iOS",
      src: "/projects/knosys-tasks.png",
    },
    name: "Knosys",
    releaseLabel: "Official 2.1 / Summer 2026",
    role: "Sole creator",
    slug: "knosys",
    status: "Early access",
    summary:
      "A local-first knowledge workspace built around portable Markdown and fast local search, with an optional end-to-end encrypted sync path across desktop and native iOS.",
    techStack: [
      "Electron",
      "React",
      "TypeScript",
      "Markdown",
      "SQLite FTS",
      "SwiftUI",
    ],
  },
  {
    architecture: [
      "15+ live sources",
      "Bun ingestion",
      "WebSocket stream",
      "Zustand + Mapbox",
    ],
    category: "Geospatial intelligence",
    constraint: "Normalize live public data without hiding source quality.",
    featured: false,
    highlights: [
      "15+ operational live data sources",
      "Real-time aircraft, vessel, satellite, seismic, and event monitoring",
      "Open-source data pipeline and operations map",
    ],
    links: [
      {
        href: "https://github.com/Ryan-Milton/Eagle-Eye",
        label: "View source",
        type: "source",
      },
      {
        href: "https://www.youtube.com/watch?v=Hyz0rFOXKhc",
        label: "Watch video",
        type: "video",
      },
    ],
    media: {
      alt: "Eagle Eye geospatial intelligence dashboard",
      src: "/projects/eagle-eye.jpg",
    },
    name: "Eagle Eye",
    releaseLabel: "Open source / active",
    role: "Creator and maintainer",
    slug: "eagle-eye",
    status: "Active open source",
    summary:
      "An open-source OSINT application that brings live aircraft, vessels, satellites, earthquakes, and world events into one operational view.",
    techStack: [
      "Bun",
      "React",
      "TypeScript",
      "WebSockets",
      "Zustand",
      "Mapbox",
    ],
  },
  {
    architecture: [
      "USB GNSS",
      "NMEA pipeline",
      "Tauri + Rust",
      "React HUD",
    ],
    category: "Hardware-aware navigation",
    constraint:
      "Work offline on a handheld Linux computer with a USB GNSS receiver.",
    featured: false,
    highlights: [
      "Physical GNSS input validated on a laptop",
      "Steam Deck packaging and runtime stabilization are ongoing",
      "Two generations: Electron/React/Python v1 and Tauri/Rust v2",
    ],
    links: [
      {
        href: "https://github.com/Ryan-Milton/SpeedDeck",
        label: "View source",
        type: "source",
      },
    ],
    name: "SpeedDeck",
    releaseLabel: "Steam Deck stabilization",
    role: "Creator and hardware integrator",
    slug: "speeddeck",
    status: "Active development",
    summary:
      "An automotive navigation and instrument interface for a Steam Deck paired with a USB GNSS receiver, evolving from an Electron prototype to a leaner native runtime.",
    techStack: [
      "React",
      "Electron",
      "Python",
      "Tauri 2",
      "Rust",
      "USB GNSS",
    ],
  },
  {
    category: "Native macOS utility",
    constraint: "Preserve rich clipboard data while keeping it local and encrypted.",
    featured: false,
    highlights: [
      "Designed for greater control over clipboard history",
      "Native macOS implementation in progress",
      "Public development will be tracked on GitHub",
    ],
    links: [
      {
        href: "https://github.com/Ryan-Milton/klipt",
        label: "View repository",
        type: "source",
      },
    ],
    name: "Klipt",
    releaseLabel: "Planned for August 2026",
    role: "Creator",
    slug: "klipt",
    status: "Coming August 2026",
    summary:
      "A native macOS clipboard utility in development, focused on making clipboard history easier to inspect and control without leaving the current workflow.",
    techStack: ["Native macOS"],
  },
];
