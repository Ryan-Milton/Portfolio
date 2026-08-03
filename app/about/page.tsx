import type { Metadata } from "next";

import {
  faGithub,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

import profilePic from "@/assets/FB_Profile.jpg";
import SocialLink from "@/components/socialLink";
import { hasResume } from "@/components/resume";
import { siteConfig } from "@/config/site";

const description =
  "Ryan Milton is a Seattle-based senior software engineer, product engineer, and Navy veteran.";

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  description,
  openGraph: {
    description,
    images: ["/opengraph-image"],
    title: "About Ryan Milton",
    type: "profile",
    url: "/about",
  },
  title: "About",
  twitter: {
    card: "summary_large_image",
    description,
    images: ["/opengraph-image"],
    title: "About Ryan Milton",
  },
};

export default function About() {
  return (
    <div>
      <header className="grid gap-8 border-b border-zinc-200 py-12 sm:py-16 lg:grid-cols-[7rem_minmax(0,1fr)] dark:border-zinc-800">
        <p className="font-mono text-xs text-violet-600 dark:text-violet-400">
          RECORD / BIO
        </p>
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold tracking-[-0.035em] text-zinc-900 sm:text-5xl lg:text-6xl dark:text-zinc-50">
            I build useful products and the systems that make them dependable.
          </h1>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.1em] text-zinc-500 dark:text-zinc-400">
            Seattle, Washington / Software since 2018 / Navy veteran
          </p>
        </div>
      </header>

      <div className="grid gap-14 py-12 sm:py-16 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-20">
        <div className="max-w-2xl space-y-7 text-[1.05rem] leading-8 text-zinc-600 dark:text-zinc-300">
          <p>
            I&apos;ve loved technology for as long as I can remember. My dad worked
            as a hardware engineer and brought home old computers for me to take
            apart and rebuild. I spent hours learning how the pieces fit together,
            experimenting with hardware, and reinstalling the BIOS when an
            experiment went sideways.
          </p>
          <p>
            After high school, I joined the Navy as an aviation electrician,
            working on EA-18G Growlers and F/A-18 Super Hornets. Time on flight
            decks, deployments, and operational teams taught me to be deliberate,
            communicate clearly, and respect the real-world cost of unreliable
            systems.
          </p>
          <p>
            I began learning HTML, CSS, and JavaScript during my final years in
            the Navy, then attended a Seattle coding bootcamp after leaving the
            service. Since then I&apos;ve worked across React, React Native, frontend
            platforms, and product engineering roles at Groupon, Buddy
            Technologies, HealthBridge, Anduril, and Meta.
          </p>
          <p>
            Today I focus on frontend, mobile, and product engineering. I primarily
            build in JavaScript and TypeScript ecosystems, while projects such as
            Knosys and SpeedDeck have taken me deeper into native Swift, Rust,
            local-first data, hardware integration, and encrypted synchronization.
          </p>
          <p>
            Outside software, I&apos;m usually learning something mechanical or
            spending time around Japanese kei cars and trucks. The same curiosity
            that started with old computers still drives the work.
          </p>
        </div>

        <aside className="w-full max-w-sm lg:max-w-none">
          <figure>
            <Image
              priority
              alt="Ryan Milton"
              className="aspect-[4/5] w-full border border-zinc-200 bg-zinc-100 object-cover dark:border-zinc-800 dark:bg-zinc-800"
              sizes="(min-width: 1024px) 20rem, 24rem"
              src={profilePic}
            />
            <figcaption className="mt-3 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-zinc-500 dark:text-zinc-400">
              Ryan Milton / Product engineer
            </figcaption>
          </figure>
          <div className="mt-8 border-t border-zinc-200 pt-6 dark:border-zinc-800">
            <h2 className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
              Public links
            </h2>
            <ul className="mt-5 space-y-4">
              <SocialLink href={siteConfig.links.github} icon={faGithub}>
                GitHub
              </SocialLink>
              <SocialLink href={siteConfig.links.linkedin} icon={faLinkedin}>
                LinkedIn
              </SocialLink>
              <SocialLink href={siteConfig.links.youtube} icon={faYoutube}>
                YouTube devlogs
              </SocialLink>
              {hasResume() && (
                <SocialLink
                  download="Ryan_Milton_Resume.pdf"
                  href="/resume.pdf"
                  icon={faDownload}
                >
                  Download resume
                </SocialLink>
              )}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
