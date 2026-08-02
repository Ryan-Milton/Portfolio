import fs from "node:fs";
import path from "node:path";

import { faBriefcase, faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { buttonVariants, Card } from "@heroui/react";
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
    <li className="flex gap-4">
      <div className="relative mt-1 flex size-10 flex-none items-center justify-center overflow-hidden rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/10 dark:bg-zinc-800 dark:ring-zinc-700">
        {role.logo ? (
          <Image
            alt=""
            className="rounded-full object-contain"
            height={40}
            src={role.logo}
            width={40}
          />
        ) : (
          <span
            aria-hidden
            className="text-sm font-bold text-[#0866ff] dark:text-[#8ab4ff]"
          >
            Meta
          </span>
        )}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
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
            className="text-xs text-zinc-500 dark:text-zinc-400"
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
    <Card.Root className="rounded-2xl border border-zinc-200 bg-white/50 p-0 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/35">
      <Card.Header className="p-6 pb-0">
        <Card.Title className="flex items-center text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          <FontAwesomeIcon aria-hidden className="size-5" icon={faBriefcase} />
          <span className="ml-3">Selected experience</span>
        </Card.Title>
      </Card.Header>
      <Card.Content className="p-6">
        <ol className="space-y-5">
          {roles.map((role) => (
            <RoleItem key={`${role.company}-${role.start.dateTime}`} role={role} />
          ))}
        </ol>
      </Card.Content>
      {resumeAvailable && (
        <Card.Footer className="border-t border-zinc-200 p-5 dark:border-zinc-800">
          <TrackedLink
            className={buttonVariants({ fullWidth: true, variant: "secondary" })}
            download="Ryan_Milton_Resume.pdf"
            event="resume_downloaded"
            href="/resume.pdf"
            properties={{ location: "experience-card" }}
          >
            Download resume
            <FontAwesomeIcon aria-hidden className="size-4" icon={faDownload} />
          </TrackedLink>
        </Card.Footer>
      )}
    </Card.Root>
  );
}
