import type { Metadata } from "next";

const description =
  "Privacy information for Ryan Milton's portfolio and its anonymous PostHog analytics.";

export const metadata: Metadata = {
  alternates: { canonical: "/privacy" },
  description,
  openGraph: {
    description,
    images: ["/opengraph-image"],
    title: "Privacy",
    type: "website",
    url: "/privacy",
  },
  title: "Privacy",
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-[68ch] px-5 py-16 sm:px-8 sm:py-24">
      <p className="eyebrow text-zinc-500 dark:text-zinc-400">Analytics disclosure</p>
      <h1 className="section-title mt-6 border-b border-zinc-200 pb-10 text-zinc-950 dark:border-zinc-800 dark:text-white">
        Privacy
      </h1>
      <div className="prose prose-zinc mt-10 max-w-none prose-headings:font-extrabold prose-headings:tracking-[-0.035em] prose-a:decoration-violet-500 dark:prose-invert">
        <p>
          This portfolio uses PostHog to understand aggregate traffic and which
          projects or development notes visitors choose to explore. PostHog runs
          in cookieless mode and does not write a visitor identifier to cookies
          or local storage.
        </p>
        <h2>What is collected</h2>
        <p>
          The site records anonymous page paths and explicit interactions with
          project, devlog, resume, and public social links. Query strings are not
          included in pageview events, geolocation enrichment is disabled, and
          events are not used to create person profiles. PostHog still processes
          standard network and browser information required to receive events.
        </p>
        <h2>What is not collected</h2>
        <p>
          The site does not identify visitors, record sessions, capture form
          input, enable broad interaction autocapture, collect performance data,
          or automatically collect exceptions. Remote feature configuration is
          disabled, and Do Not Track browser preferences are respected.
        </p>
        <h2>Third-party destinations</h2>
        <p>
          Links to GitHub, LinkedIn, YouTube, and project websites are governed
          by those services&apos; privacy policies after you leave this site. Embedded
          video content is click-to-load, so YouTube is not contacted until you
          choose to load a player.
        </p>
      </div>
    </article>
  );
}
