import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faDownload, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import profilePic from "@/assets/FB_Profile.jpg";
import { FadeIn, StaggerChildren } from "@/components/motion";

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
  download,
}: {
  className?: string;
  href: string;
  icon: any;
  children: React.ReactNode;
  download?: string;
}) {
  const linkClasses =
    "group flex text-sm font-medium text-zinc-800 transition hover:text-primary-500 dark:text-zinc-200 dark:hover:text-primary-500";

  if (download) {
    return (
      <li className={clsx(className, "flex")}>
        <a className={linkClasses} download={download} href={href}>
          <FontAwesomeIcon
            className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-primary-500"
            icon={Icon}
          />
          <span className="ml-4">{children}</span>
        </a>
      </li>
    );
  }

  return (
    <li className={clsx(className, "flex")}>
      <Link
        className={linkClasses}
        href={href}
        rel="noopener noreferrer"
        target="_blank"
      >
        <FontAwesomeIcon
          className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-primary-500"
          icon={Icon}
        />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}

export const metadata: Metadata = {
  title: "About",
  description:
    "I'm Ryan Milton. I live in the Emerald City, where I design the future.",
};

export default function About() {
  return (
    <div className="mt-16">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <FadeIn className="lg:pl-20" direction="right">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              alt=""
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              sizes="(min-width: 1024px) 32rem, 20rem"
              src={profilePic}
            />
          </div>
        </FadeIn>
        <div className="lg:order-first lg:row-span-2">
          <FadeIn>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
              I&apos;m Ryan Milton. I live in Seattle, where I develop for the
              future.
            </h1>
          </FadeIn>
          <StaggerChildren
            className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400"
            staggerDelay={0.08}
          >
            <FadeIn>
              <p>
                I&apos;ve loved technology for as long as I can remember. When I
                was young my dad worked as a hardware engineer and would bring
                home old computers for me to take apart and put back together.
                I&apos;d spend hours in our garage, surrounded by the smell of
                solder and the hum of the air conditioner, trying to figure out
                how everything fit together, tweaking and reinstalling the BIOS.
                I was hooked.
              </p>
            </FadeIn>
            <FadeIn>
              <p>
                After I graduated high school, I joined the Navy as an Aviation
                Electrian and worked on EA-18G Growlers and F/A-18 Super
                Hornets. I spent a lot of time on many different aircraft
                carriers, on the flight deck, in the Persian Gulf, and in
                Afghanistan. I loved the smell of jet fuel and the sound of the
                engines, but I knew I wanted to do more.
              </p>
            </FadeIn>
            <FadeIn>
              <p>
                During my last 2 years in the Navy I started learning how to
                code. I started with the basics; HTML, CSS, and JavaScript.
                After I got out, I went to a coding bootcamp in Seattle and
                learned how to build full stack applications. I loved the
                challenge of learning new things and building something from
                nothing. I knew I had found my calling.
              </p>
            </FadeIn>
            <FadeIn>
              <p>
                Today, I work as a software engineer, focusing on creating
                beautiful and intuitive user interfaces using the latest
                technologies. I love what I do and I&apos;m always looking for
                ways to improve my skills and learn new things. I&apos;m excited
                to see what the future holds.
              </p>
            </FadeIn>
            <FadeIn>
              <p>
                Oh, and I have a healthy obsession with japanese Kei cars and
                trucks. Check the Insta lol.
              </p>
            </FadeIn>
          </StaggerChildren>
        </div>
        <div className="lg:pl-20">
          <StaggerChildren staggerDelay={0.06}>
            <ul>
              <FadeIn>
                <SocialLink href="https://x.com/ryan__milton" icon={faXTwitter}>
                  Follow on X
                </SocialLink>
              </FadeIn>
              <FadeIn>
                <SocialLink
                  className="mt-4"
                  href="https://www.instagram.com/ryan_ohkeilife"
                  icon={faInstagram}
                >
                  Follow on Instagram
                </SocialLink>
              </FadeIn>
              <FadeIn>
                <SocialLink
                  className="mt-4"
                  href="https://github.com/Ryan-Milton"
                  icon={faGithub}
                >
                  Follow on GitHub
                </SocialLink>
              </FadeIn>
              <FadeIn>
                <SocialLink
                  className="mt-4"
                  href="https://www.linkedin.com/in/ryanmilton"
                  icon={faLinkedin}
                >
                  Follow on LinkedIn
                </SocialLink>
              </FadeIn>
              <FadeIn>
                <SocialLink
                  className="mt-4"
                  download="Ryan_Milton_Resume.pdf"
                  href="/resume.pdf"
                  icon={faDownload}
                >
                  Download Resume
                </SocialLink>
              </FadeIn>
              <FadeIn>
                <SocialLink
                  className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
                  href="mailto:mr.ryan.milton@gmail.com?subject=Inquiry%20About%20Your%20Services"
                  icon={faEnvelope}
                >
                  mr.ryan.milton@gmail.com
                </SocialLink>
              </FadeIn>
            </ul>
          </StaggerChildren>
        </div>
      </div>
    </div>
  );
}
