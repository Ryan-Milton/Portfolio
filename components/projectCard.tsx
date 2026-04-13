"use client";

import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import { Project } from "@/config/projects";
import { accentClasses } from "@/config/colors";

export default function ProjectCard({ project }: { project: Project }) {
  const accent = project.accent || "blue";
  const classes = accentClasses[accent];

  return (
    <motion.div
      className="h-full"
      transition={{ duration: 0.25, ease: "easeOut" }}
      whileHover={{ y: -4 }}
    >
      <Card
        className={`h-full overflow-hidden border border-zinc-100 bg-zinc-50/10 transition-shadow duration-300 hover:shadow-lg dark:border-zinc-700/40 dark:bg-zinc-800/10 ${classes.glow}`}
      >
        <div
          className={`h-[3px] bg-gradient-to-r ${classes.border} opacity-80 transition-opacity group-hover:opacity-100`}
        />
        <CardHeader className="flex-col items-start gap-1 px-5 pt-5">
          <div className="flex w-full items-center justify-between">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              {project.name}
            </h3>
            <span
              className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${classes.badge}`}
            >
              {project.year}
            </span>
          </div>
        </CardHeader>
        <CardBody className="px-5">
          <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className={`rounded-full px-3 py-1 text-xs font-medium ${classes.badge}`}
              >
                {tech}
              </span>
            ))}
          </div>
        </CardBody>
        {(project.liveUrl || project.repoUrl) && (
          <CardFooter className="gap-3 px-5 pb-5">
            {project.liveUrl && (
              <Link
                className="flex items-center gap-1.5 text-sm font-medium text-primary-500 transition-colors duration-200 hover:underline dark:text-primary-400"
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
                className="flex items-center gap-1.5 text-sm font-medium text-zinc-600 transition-colors duration-200 hover:text-primary-500 dark:text-zinc-400 dark:hover:text-primary-400"
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
    </motion.div>
  );
}
