import type { Metadata } from "next";

import {
  faGithub,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

import profilePic from "@/assets/FB_Profile.jpg";
import { FadeIn } from "@/components/motion";
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
    <div className="mt-12 sm:mt-16">
      <div className="grid grid-cols-1 gap-y-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)] lg:gap-x-16">
        <div>
          <FadeIn>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-violet-600 dark:text-violet-400">
              About / Ryan Milton
            </p>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
              I build useful products and the systems that make them dependable.
            </h1>
          </FadeIn>
          <div className="mt-8 space-y-7 text-base leading-7 text-zinc-600 dark:text-zinc-300">
            <FadeIn>
              <p>
                I&apos;ve loved technology for as long as I can remember. My dad
                worked as a hardware engineer and brought home old computers for
                me to take apart and rebuild. I spent hours learning how the
                pieces fit together, experimenting with hardware, and reinstalling
                the BIOS when an experiment went sideways.
              </p>
            </FadeIn>
            <FadeIn>
              <p>
                After high school, I joined the Navy as an aviation electrician,
                working on EA-18G Growlers and F/A-18 Super Hornets. Time on
                flight decks, deployments, and operational teams taught me to be
                deliberate, communicate clearly, and respect the real-world cost
                of unreliable systems.
              </p>
            </FadeIn>
            <FadeIn>
              <p>
                I began learning HTML, CSS, and JavaScript during my final years
                in the Navy, then attended a Seattle coding bootcamp after leaving
                the service. Since then I&apos;ve worked across React, React Native,
                frontend platforms, and product engineering roles at Groupon,
                Buddy Technologies, HealthBridge, and Anduril.
              </p>
            </FadeIn>
            <FadeIn>
              <p>
                Today I focus on frontend, mobile, and product engineering. I
                primarily build in JavaScript and TypeScript ecosystems, while
                projects such as Knosys and SpeedDeck have taken me deeper into
                native Swift, Rust, local-first data, hardware integration, and
                encrypted synchronization.
              </p>
            </FadeIn>
            <FadeIn>
              <p>
                Outside software, I&apos;m usually learning something mechanical or
                spending time around Japanese kei cars and trucks. The same
                curiosity that started with old computers still drives the work.
              </p>
            </FadeIn>
          </div>
        </div>

        <aside>
          <FadeIn direction="right">
            <Image
              priority
              alt="Ryan Milton"
              className="aspect-square w-full max-w-sm rotate-2 rounded-2xl bg-zinc-100 object-cover shadow-xl shadow-zinc-900/10 dark:bg-zinc-800"
              sizes="(min-width: 1024px) 24rem, 24rem"
              src={profilePic}
            />
          </FadeIn>
          <div className="mt-9 border-t border-zinc-200 pt-7 dark:border-zinc-800">
            <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Find me online
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
