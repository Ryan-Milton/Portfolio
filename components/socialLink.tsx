import type { AnchorHTMLAttributes, ReactNode } from "react";

import {
  DownloadSimple,
  GithubLogo,
  LinkedinLogo,
  YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";
import clsx from "clsx";

import { TrackedLink } from "@/components/tracked-link";
import { siteConfig } from "@/config/site";

type SocialLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "children" | "href"
> & {
  children?: ReactNode;
  href: string;
  icon: "download" | "github" | "linkedin" | "youtube";
};

const icons = {
  download: DownloadSimple,
  github: GithubLogo,
  linkedin: LinkedinLogo,
  youtube: YoutubeLogo,
};

const publicSocials = [
  { href: siteConfig.links.github, label: "GitHub" },
  { href: siteConfig.links.linkedin, label: "LinkedIn" },
  { href: siteConfig.links.youtube, label: "YouTube" },
];

export default function SocialLink({
  className,
  href,
  children,
  icon,
  "aria-label": ariaLabel,
  ...props
}: SocialLinkProps) {
  const social = publicSocials.find((item) => item.href === href);
  const isInternal = href.startsWith("/");
  const Icon = icons[icon];

  if (!isInternal && !social) return null;

  return (
    <li className={clsx(className, "flex")}>
      <TrackedLink
        {...props}
        aria-label={ariaLabel ?? (!children ? social?.label : undefined)}
        className="group flex items-center rounded-sm text-base font-semibold text-zinc-800 outline-none transition-colors hover:text-zinc-950 focus-visible:ring-2 focus-visible:ring-violet-500 motion-reduce:transition-none dark:text-zinc-200 dark:hover:text-white"
        event={isInternal ? "resume_downloaded" : "social_link_clicked"}
        href={href}
        properties={
          isInternal
            ? { location: "about" }
            : { network: social?.label.toLowerCase() ?? "unknown" }
        }
        rel={isInternal ? undefined : "noopener noreferrer"}
        target={isInternal ? undefined : "_blank"}
      >
        <Icon aria-hidden className="flex-none text-zinc-500 transition-colors group-hover:text-violet-500 motion-reduce:transition-none" size={22} weight="bold" />
        {children && <span className="ml-4">{children}</span>}
      </TrackedLink>
    </li>
  );
}
