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

export default function Home() {
  const posts = getAllPosts();
  const featuredPosts = posts.slice(0, 3);

  return (
    <section className="flex flex-col items-center justify-center gap-4 pb-8 md:py-10">
      <div className="inline-block max-w-5xl text-center justify-center">
        {/* Hero */}
        <div className="mt-9">
          <div className="max-w-2xl text-left">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
              Software designer, creator, and kei car enthusiast.
            </h1>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              I&apos;m Ryan, a software designer and entrepreneur based in
              Seattle, WA. I&apos;m the co-founder and CTO of EVA, where we are
              revolutionizing digital assistants through the power of
              multi-modal LLM&apos;s. I&apos;m also the co-founder of OhKei
              Life, a lifestyle brand that focuses on the kei car community.
            </p>
            <div className="mt-6 flex gap-2">
              <SocialLink href="https://x.com/ryan__milton" icon={faXTwitter} />
              <SocialLink
                href="https://www.instagram.com/ryan_ohkeilife"
                icon={faInstagram}
              />
              <SocialLink
                href="https://github.com/Ryan-Milton"
                icon={faGithub}
              />
              <SocialLink
                href="https://www.linkedin.com/in/ryanmilton"
                icon={faLinkedin}
              />
            </div>
          </div>
        </div>

        {/* Featured Posts + Resume */}
        <div className="mt-24 md:mt-28">
          <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-col gap-8">
              {featuredPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
              {posts.length > 3 && (
                <Link
                  className="text-sm font-medium text-primary-500 dark:text-primary-400"
                  href="/blog"
                >
                  Read more posts →
                </Link>
              )}
            </div>
            <div className="space-y-10 lg:pl-16 xl:pl-24">
              <Resume />
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-24 md:mt-28 border-t border-zinc-100 dark:border-zinc-700/40 pt-12">
          <div className="max-w-2xl text-left">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">
              Get in Touch
            </h2>
            <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
              I&apos;m always open to new opportunities, collaborations, or just
              a good conversation. Feel free to reach out through any of the
              channels below.
            </p>
            <ul className="mt-6 space-y-4">
              <SocialLink
                href="mailto:mr.ryan.milton@gmail.com?subject=Inquiry%20About%20Your%20Services"
                icon={faEnvelope}
              >
                mr.ryan.milton@gmail.com
              </SocialLink>
              <SocialLink href="https://x.com/ryan__milton" icon={faXTwitter}>
                Follow on X
              </SocialLink>
              <SocialLink href="https://github.com/Ryan-Milton" icon={faGithub}>
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/ryanmilton"
                icon={faLinkedin}
              >
                Connect on LinkedIn
              </SocialLink>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
