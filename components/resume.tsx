import fs from "node:fs";
import path from "node:path";

import { DownloadSimple } from "@phosphor-icons/react/dist/ssr";
import Image, { type ImageProps } from "next/image";

import Anduril from "@/assets/Anduril Logo.png";
import Buddy from "@/assets/Buddy Tech Logo.jpg";
import Groupon from "@/assets/Groupon-Symbol.png";
import HealthBridge from "@/assets/healthbridge_financial_logo.jpg";
import { TrackedLink } from "@/components/tracked-link";

interface Role {
  company: string;
  end: { dateTime?: string; label: string };
  logo?: ImageProps["src"];
  start: { dateTime: string; label: string };
  title: string;
}

const roles: Role[] = [
  {
    company: "Meta (Contract)",
    end: { label: "Present" },
    start: { dateTime: "2024-10", label: "Oct 2024" },
    title: "Senior Software Engineer",
  },
  {
    company: "Anduril",
    end: { dateTime: "2024-06", label: "Jun 2024" },
    logo: Anduril,
    start: { dateTime: "2023-02", label: "Feb 2023" },
    title: "Senior Software Engineer",
  },
  {
    company: "HealthBridge",
    end: { dateTime: "2023-01", label: "Jan 2023" },
    logo: HealthBridge,
    start: { dateTime: "2020-07", label: "Jul 2020" },
    title: "Lead Frontend Engineer",
  },
  {
    company: "Buddy Technologies",
    end: { dateTime: "2020-04", label: "Apr 2020" },
    logo: Buddy,
    start: { dateTime: "2020-02", label: "Feb 2020" },
    title: "React Native Engineer",
  },
  {
    company: "Groupon",
    end: { dateTime: "2020-02", label: "Feb 2020" },
    logo: Groupon,
    start: { dateTime: "2019-08", label: "Aug 2019" },
    title: "Full-stack / Frontend Engineer",
  },
];

export function hasResume() {
  try {
    return fs.statSync(path.join(process.cwd(), "public/resume.pdf")).size > 0;
  } catch {
    return false;
  }
}

function RoleItem({ role }: { role: Role }) {
  return (
    <li className="grid gap-4 border-t border-zinc-200 py-5 sm:grid-cols-[3rem_minmax(0,1fr)_auto] sm:items-center sm:gap-6 dark:border-zinc-800">
      <div className="relative flex size-10 flex-none items-center justify-center overflow-hidden rounded-sm bg-white dark:bg-zinc-800">
        {role.logo ? (
          <Image
            alt=""
            className="h-auto w-full object-contain"
            height={32}
            src={role.logo}
            width={32}
          />
        ) : (
          <span
            aria-hidden
            className="text-[0.62rem] font-bold text-zinc-700 dark:text-zinc-200"
          >
            Meta
          </span>
        )}
      </div>
      <div className="min-w-0">
        <p className="text-xl font-bold tracking-[-0.035em] text-zinc-950 sm:text-2xl dark:text-white">
          {role.company}
        </p>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{role.title}</p>
      </div>
      <p
        aria-label={`${role.start.label} until ${role.end.label}`}
        className="whitespace-nowrap font-mono text-[0.68rem] uppercase tracking-[0.06em] text-zinc-500 dark:text-zinc-400"
      >
        <time dateTime={role.start.dateTime}>{role.start.label}</time>
        <span aria-hidden> - </span>
        {role.end.dateTime ? (
          <time dateTime={role.end.dateTime}>{role.end.label}</time>
        ) : (
          role.end.label
        )}
      </p>
    </li>
  );
}

export default function Resume() {
  const resumeAvailable = hasResume();

  return (
    <section className="grid gap-12 lg:grid-cols-[minmax(18rem,0.65fr)_minmax(0,1.35fr)]" aria-labelledby="experience-heading">
      <div>
          <h2
            className="max-w-[9ch] text-5xl font-extrabold leading-[0.9] tracking-[-0.065em] text-zinc-950 sm:text-7xl dark:text-white"
            id="experience-heading"
          >
            Built in operational contexts.
          </h2>
          <p className="mt-6 max-w-md text-base leading-7 text-zinc-600 dark:text-zinc-300">
            Product engineering across consumer platforms, financial software, autonomous systems, and global infrastructure.
          </p>
          {resumeAvailable && (
            <TrackedLink
              className="group mt-8 inline-flex min-h-11 items-center gap-2 whitespace-nowrap text-sm font-bold text-zinc-950 dark:text-white"
              download="Ryan_Milton_Resume.pdf"
              event="resume_downloaded"
              href="/resume.pdf"
              properties={{ location: "experience-card" }}
            >
              Download resume
              <DownloadSimple aria-hidden className="transition-transform group-hover:translate-y-0.5 motion-reduce:transition-none" size={17} weight="bold" />
            </TrackedLink>
          )}
        </div>
      <ol>
        {roles.map((role) => (
          <RoleItem key={`${role.company}-${role.start.dateTime}`} role={role} />
        ))}
      </ol>
    </section>
  );
}
