import Link from "next/link";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { getAllPosts } from "@/lib/blog";
import PostCard from "@/components/blogPostCard";
import Resume from "@/components/resume";
import SocialLink from "@/components/socialLink";
import { FadeIn, StaggerChildren } from "@/components/motion";
import { title } from "@/components/primitives";

export default function Home() {
  const posts = getAllPosts();
  const featuredPosts = posts.slice(0, 3);

  return (
    <section className="flex flex-col items-center justify-center gap-4 pb-8 md:py-10">
      <div className="inline-block max-w-5xl justify-center text-center">
        {/* Hero */}
        <div className="mt-16 md:mt-24">
          <div className="max-w-2xl text-left">
            <FadeIn delay={0}>
              <p className="text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                Ryan Milton
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                Software designer, creator, and{" "}
                <span className={title({ color: "violet", size: "sm" })}>
                  kei car enthusiast
                </span>
                .
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 max-w-2xl text-base text-zinc-600 dark:text-zinc-400">
                I&apos;m Ryan, a software designer and entrepreneur based in
                Seattle, WA. I&apos;m the co-founder and CTO of EVA, where we
                are revolutionizing digital assistants through the power of
                multi-modal LLM&apos;s. I&apos;m also the co-founder of OhKei
                Life, a lifestyle brand that focuses on the kei car community.
              </p>
            </FadeIn>
            <StaggerChildren className="mt-6 flex gap-2" staggerDelay={0.08}>
              <FadeIn>
                <SocialLink
                  href="https://x.com/ryan__milton"
                  icon={faXTwitter}
                />
              </FadeIn>
              <FadeIn>
                <SocialLink
                  href="https://www.instagram.com/ryan_ohkeilife"
                  icon={faInstagram}
                />
              </FadeIn>
              <FadeIn>
                <SocialLink
                  href="https://github.com/Ryan-Milton"
                  icon={faGithub}
                />
              </FadeIn>
              <FadeIn>
                <SocialLink
                  href="https://www.linkedin.com/in/ryanmilton"
                  icon={faLinkedin}
                />
              </FadeIn>
            </StaggerChildren>
          </div>
        </div>

        {/* Gradient divider */}
        <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-zinc-300 to-transparent dark:via-zinc-700" />

        {/* Featured Posts + Resume */}
        <div className="mt-16 md:mt-20">
          <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-col gap-8">
              {featuredPosts.map((post, i) => (
                <FadeIn key={post.slug} delay={i * 0.1}>
                  <PostCard post={post} />
                </FadeIn>
              ))}
              {posts.length > 3 && (
                <FadeIn delay={0.3}>
                  <Link
                    className="group text-sm font-medium text-primary-500 dark:text-primary-400"
                    href="/blog"
                  >
                    Read more posts{" "}
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </Link>
                </FadeIn>
              )}
            </div>
            <FadeIn delay={0.2} direction="right">
              <div className="space-y-10 lg:pl-16 xl:pl-24">
                <Resume />
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Contact Section */}
        <FadeIn>
          <div className="mt-24 border-t border-zinc-100 pt-12 md:mt-28 dark:border-zinc-700/40">
            <div className="max-w-2xl text-left">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">
                Get in Touch
              </h2>
              <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
                I&apos;m always open to new opportunities, collaborations, or
                just a good conversation. Feel free to reach out through any of
                the channels below.
              </p>
              <StaggerChildren className="mt-6 space-y-4" staggerDelay={0.08}>
                <FadeIn>
                  <SocialLink
                    href="mailto:mr.ryan.milton@gmail.com?subject=Inquiry%20About%20Your%20Services"
                    icon={faEnvelope}
                  >
                    mr.ryan.milton@gmail.com
                  </SocialLink>
                </FadeIn>
                <FadeIn>
                  <SocialLink
                    href="https://x.com/ryan__milton"
                    icon={faXTwitter}
                  >
                    Follow on X
                  </SocialLink>
                </FadeIn>
                <FadeIn>
                  <SocialLink
                    href="https://github.com/Ryan-Milton"
                    icon={faGithub}
                  >
                    Follow on GitHub
                  </SocialLink>
                </FadeIn>
                <FadeIn>
                  <SocialLink
                    href="https://www.linkedin.com/in/ryanmilton"
                    icon={faLinkedin}
                  >
                    Connect on LinkedIn
                  </SocialLink>
                </FadeIn>
              </StaggerChildren>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
