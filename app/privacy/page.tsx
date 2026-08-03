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
    <article className="mx-auto max-w-[62ch] py-16 sm:py-24">
      <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-violet-600 dark:text-violet-400">
        RECORD / PRIVACY
      </p>
      <h1 className="mt-4 border-b border-zinc-200 pb-8 text-4xl font-bold tracking-[-0.035em] text-zinc-900 sm:text-5xl dark:border-zinc-800 dark:text-zinc-50">
        Privacy
      </h1>
      <div className="prose prose-zinc mt-8 max-w-none dark:prose-invert">
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
