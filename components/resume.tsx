import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faArrowDownToLine } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@nextui-org/button";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import Image, { ImageProps } from "next/image";
import Anduril from "@/assets/Anduril Logo.png";
import Buddy from "@/assets/Buddy Tech Logo.jpg";
import Groupon from "@/assets/Groupon-Symbol.png";
import HealthBridge from "@/assets/healthbridge_financial_logo.jpg";

interface Role {
  company: string;
  title: string;
  logo: ImageProps["src"];
  start: string | { label: string; dateTime: string };
  end: string | { label: string; dateTime: string };
}

function Role({ role }: { role: Role }) {
  let startLabel =
    typeof role.start === "string" ? role.start : role.start.label;
  let startDate =
    typeof role.start === "string" ? role.start : role.start.dateTime;

  let endLabel = typeof role.end === "string" ? role.end : role.end.label;
  let endDate = typeof role.end === "string" ? role.end : role.end.dateTime;

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image
          src={role.logo}
          alt={role.company}
          className="rounded-full"
          width={40}
          height={40}
          unoptimized
        />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2 items-center">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm text-left font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{" "}
          <span aria-hidden="true">—</span>{" "}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  );
}

export default function Resume() {
  let resume: Array<Role> = [
    {
      company: "Anduril",
      title: "Senior Software Engineer",
      logo: Anduril,
      start: "Feb 2023",
      end: "Jun 2024",
    },
    {
      company: "Healthbridge",
      title: "Lead Frontend Engineer",
      logo: HealthBridge,
      start: "Jul 2020",
      end: "Jan 2023",
    },
    {
      company: "Buddy Technologies",
      title: "React Native Engineer",
      logo: Buddy,
      start: "Feb 2020",
      end: "Apr 2020",
    },
    {
      company: "Groupon",
      title: "Fullstack/Frontend Engineer",
      logo: Groupon,
      start: "Aug 2019",
      end: "Feb 2020",
    },
  ];

  return (
    <Card
      isHoverable
      className="p-4 border border-zinc-100 dark:border-zinc-700/40 dark:bg-zinc-800/10 bg-zinc-50/10"
    >
      <CardHeader>
        <h3 className="flex text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          <FontAwesomeIcon className="h-6 w-6 flex-none" icon={faBriefcase} />
          <span className="ml-3">Work</span>
        </h3>
      </CardHeader>
      <CardBody>
        <ol className="mt-2.5 space-y-4">
          {resume.map((role, roleIndex) => (
            <Role key={roleIndex} role={role} />
          ))}
        </ol>
      </CardBody>
      <CardFooter>
        <Button href="#" color="default" className="group mt-3 w-full">
          Resume
          <FontAwesomeIcon
            icon={faArrowDownToLine}
            className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"
          />
        </Button>
      </CardFooter>
    </Card>
  );
}
