import type { Metadata } from "next";

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
    <div className="mx-auto max-w-[96rem] px-5 sm:px-8 lg:px-12">
      <header className="grid min-h-[calc(100dvh-4.5rem)] items-center gap-10 py-12 lg:grid-cols-[minmax(18rem,0.62fr)_minmax(0,1.38fr)] lg:gap-16">
        <div className="media-frame order-2 aspect-[4/5] w-full max-w-xl lg:order-1">
          <Image
            fill
            priority
            alt="Ryan Milton in Seattle"
            className="object-cover"
            sizes="(min-width: 1024px) 38vw, 100vw"
            src={profilePic}
          />
        </div>
        <div className="order-1 lg:order-2">
          <p className="eyebrow text-zinc-500 dark:text-zinc-400">About Ryan Milton</p>
          <h1 className="mt-7 text-[2.4rem] font-extrabold leading-[0.84] tracking-[-0.075em] text-zinc-950 sm:text-[clamp(3.4rem,6.5vw,6.8rem)] dark:text-white">
            <span className="block">Useful products.</span>
            <span className="block text-violet-400">Built to last.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
            Seattle-based senior software engineer, product builder, and Navy veteran working across frontend, mobile, desktop, and native systems.
          </p>
        </div>
      </header>

      <section className="border-t border-zinc-200 py-20 sm:py-28 dark:border-zinc-800">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="max-w-[18ch] text-3xl font-extrabold leading-[1.02] tracking-[-0.05em] text-zinc-950 sm:text-5xl dark:text-white">
              Curiosity started with old computers. Responsibility came from aircraft. Product focus came from shipping software.
            </p>

            <div className="mt-12">
              <h2 className="text-sm font-bold text-zinc-950 dark:text-white">Public links</h2>
              <ul className="mt-5 space-y-4">
                <SocialLink href={siteConfig.links.github} icon="github">GitHub</SocialLink>
                <SocialLink href={siteConfig.links.linkedin} icon="linkedin">LinkedIn</SocialLink>
                <SocialLink href={siteConfig.links.youtube} icon="youtube">YouTube devlogs</SocialLink>
                {hasResume() && (
                  <SocialLink download="Ryan_Milton_Resume.pdf" href="/resume.pdf" icon="download">
                    Download resume
                  </SocialLink>
                )}
              </ul>
            </div>
          </div>

          <div className="max-w-2xl space-y-8 text-[1.08rem] leading-8 text-zinc-600 dark:text-zinc-300">
            <p>
              I&apos;ve loved technology for as long as I can remember. My dad worked as a hardware engineer and brought home old computers for me to take apart and rebuild. I spent hours learning how the pieces fit together, experimenting with hardware, and reinstalling the BIOS when an experiment went sideways.
            </p>
            <p>
              After high school, I joined the Navy as an aviation electrician, working on EA-18G Growlers and F/A-18 Super Hornets. Time on flight decks, deployments, and operational teams taught me to be deliberate, communicate clearly, and respect the real-world cost of unreliable systems.
            </p>
            <p>
              I began learning HTML, CSS, and JavaScript during my final years in the Navy, then attended a Seattle coding bootcamp after leaving the service. Since then I&apos;ve worked across React, React Native, frontend platforms, and product engineering roles at Groupon, Buddy Technologies, HealthBridge, Anduril, and Meta.
            </p>
            <p>
              Today I focus on frontend, mobile, and product engineering. I primarily build in JavaScript and TypeScript ecosystems, while projects such as Knosys and SpeedDeck have taken me deeper into native Swift, Rust, local-first data, hardware integration, and encrypted synchronization.
            </p>
            <p>
              Outside software, I&apos;m usually learning something mechanical or spending time around Japanese kei cars and trucks. The same curiosity that started with old computers still drives the work.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
