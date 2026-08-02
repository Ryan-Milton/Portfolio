import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import type { AnchorHTMLAttributes, ReactNode } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

import { TrackedLink } from "@/components/tracked-link";
import { siteConfig } from "@/config/site";

type SocialLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "children" | "href"
> & {
  children?: ReactNode;
  href: string;
  icon: IconDefinition;
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
  icon: Icon,
  "aria-label": ariaLabel,
  ...props
}: SocialLinkProps) {
  const social = publicSocials.find((item) => item.href === href);
  const isInternal = href.startsWith("/");

  if (!isInternal && !social) return null;

  return (
    <li className={clsx(className, "flex")}>
      <TrackedLink
        {...props}
        aria-label={ariaLabel ?? (!children ? social?.label : undefined)}
        className="group flex items-center rounded-md text-sm font-medium text-zinc-800 outline-none transition-colors hover:text-violet-600 focus-visible:ring-2 focus-visible:ring-violet-500 motion-reduce:transition-none dark:text-zinc-200 dark:hover:text-violet-400"
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
        <FontAwesomeIcon
          aria-hidden="true"
          className="h-6 w-6 flex-none text-zinc-500 transition-colors group-hover:text-violet-500 motion-reduce:transition-none"
          icon={Icon}
        />
        {children && <span className="ml-4">{children}</span>}
      </TrackedLink>
    </li>
  );
}
