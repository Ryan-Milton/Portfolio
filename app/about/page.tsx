import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import { Container } from "@/components/Container";
import profilePic from "@/assets/FB_Profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string;
  href: string;
  icon: any;
  children: React.ReactNode;
}) {
  return (
    <li className={clsx(className, "flex")}>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-primary-500 dark:text-zinc-200 dark:hover:text-primary-500"
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
    "I’m Ryan Milton. I live in the Emerald City, where I design the future.",
};

export default function About() {
  return (
    <div className="mt-16">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={profilePic}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Ryan Milton. I live in Seattle, where I develop for the future.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I’ve loved technology for as long as I can remember. When I was
              young my dad worked as a hardware engineer and would bring home
              old computers for me to take apart and put back together. I’d
              spend hours in our garage, surrounded by the smell of solder and
              the hum of the air conditioner, trying to figure out how
              everything fit together, tweaking and reinstalling the BIOS. I was
              hooked.
            </p>
            <p>
              After I graduated high school, I joined the Navy as an Aviation
              Electrian and worked on EA-18G Growlers and F/A-18 Super Hornets.
              I was spent alot of time on many different aircraft carriers, on
              the flight deck, in the Persian Gulf, and in Afghanistan. I loved
              the smell of jet fuel and the sound of the engines, but I knew I
              wanted to do more.
            </p>
            <p>
              During my last 2 years in the Navy I started learning how to code.
              I started with the basics; HTML, CSS, and JavaScript. After I got
              out, I went to a coding bootcamp in Seattle and learned how to
              build full stack applications. I loved the challenge of learning
              new things and building something from nothing. I knew I had found
              my calling.
            </p>
            <p>
              Today, I work as a software engineer, focusing on creating
              beautiful and intuituve user interfaces using the latest
              technologies. I love what I do and I’m always looking for ways to
              improve my skills and learn new things. I’m excited to see what
              the future holds.
            </p>
            <p>
              Oh, and I have a healthy obsession with japanese Kei cars and
              trucks. Check the Insta lol.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://x.com/ryan__milton" icon={faXTwitter}>
              Follow on X
            </SocialLink>
            <SocialLink
              href="https://www.instagram.com/ryan_ohkeilife"
              icon={faInstagram}
              className="mt-4"
            >
              Follow on Instagram
            </SocialLink>
            <SocialLink href="#" icon={faGithub} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="#" icon={faLinkedin} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:mr.ryan.milton@gmail.com"
              icon={faEnvelope}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              mr.ryan.milton@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </div>
  );
}
