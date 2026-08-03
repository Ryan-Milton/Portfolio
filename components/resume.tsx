import fs from "node:fs";
import path from "node:path";

import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    <li className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-3 border-b border-zinc-200 py-4 last:border-b-0 dark:border-zinc-800">
      <div className="relative flex size-8 flex-none items-center justify-center overflow-hidden border border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-800">
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
            className="text-[0.58rem] font-bold text-zinc-700 dark:text-zinc-200"
          >
            Meta
          </span>
        )}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-2">
          <div>
            <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              {role.company}
            </p>
            <p className="text-xs text-zinc-600 dark:text-zinc-400">
              {role.title}
            </p>
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
        </div>
      </div>
    </li>
  );
}

export default function Resume() {
  const resumeAvailable = hasResume();

  return (
    <section aria-labelledby="experience-heading">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.18em] text-violet-600 dark:text-violet-400">
            03 / Work record
          </p>
          <h2
            className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100"
            id="experience-heading"
          >
            Selected experience
          </h2>
        </div>
      </div>
      <ol className="mt-6 border-y border-zinc-200 dark:border-zinc-800">
        {roles.map((role) => (
          <RoleItem key={`${role.company}-${role.start.dateTime}`} role={role} />
        ))}
      </ol>
      {resumeAvailable && (
        <div className="mt-5">
          <TrackedLink
            className="inline-flex min-h-11 items-center gap-2 whitespace-nowrap text-sm font-bold text-zinc-900 underline decoration-zinc-300 underline-offset-2 hover:text-violet-600 dark:text-zinc-100 dark:decoration-zinc-700 dark:hover:text-violet-400"
            download="Ryan_Milton_Resume.pdf"
            event="resume_downloaded"
            href="/resume.pdf"
            properties={{ location: "experience-card" }}
          >
            Download resume
            <FontAwesomeIcon aria-hidden className="size-4" icon={faDownload} />
          </TrackedLink>
        </div>
      )}
    </section>
  );
}
