import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import { Project } from "@/config/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card
      isHoverable
      className="p-4 border border-zinc-100 dark:border-zinc-700/40 dark:bg-zinc-800/10 bg-zinc-50/10 h-full"
    >
      <CardHeader className="flex-col items-start gap-1">
        <div className="flex items-center justify-between w-full">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            {project.name}
          </h3>
          <span className="text-xs text-zinc-400 dark:text-zinc-500">
            {project.year}
          </span>
        </div>
      </CardHeader>
      <CardBody>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardBody>
      {(project.liveUrl || project.repoUrl) && (
        <CardFooter className="gap-3">
          {project.liveUrl && (
            <Link
              className="flex items-center gap-1.5 text-sm font-medium text-primary-500 dark:text-primary-400 hover:underline"
              href={project.liveUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon
                className="h-3.5 w-3.5"
                icon={faArrowUpRightFromSquare}
              />
              Live
            </Link>
          )}
          {project.repoUrl && (
            <Link
              className="flex items-center gap-1.5 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-primary-500 dark:hover:text-primary-400"
              href={project.repoUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon className="h-4 w-4" icon={faGithub} />
              Source
            </Link>
          )}
        </CardFooter>
      )}
    </Card>
  );
}
