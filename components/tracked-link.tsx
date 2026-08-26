"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";

import Link from "next/link";

import { captureAnalytics } from "@/lib/analytics-client";

interface TrackedLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  children: ReactNode;
  event: string;
  href: string;
  properties?: Record<string, boolean | number | string>;
}

export function TrackedLink({
  children,
  event,
  href,
  onClick,
  properties,
  ...props
}: TrackedLinkProps) {
  const handleClick = (clickEvent: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(clickEvent);

    if (!clickEvent.defaultPrevented) {
      captureAnalytics(event, properties);
    }
  };
  const isInternal = href.startsWith("/") && !props.download;

  if (isInternal) {
    return (
      <Link {...props} href={href} onClick={handleClick}>
        {children}
      </Link>
    );
  }

  return (
    <a {...props} href={href} onClick={handleClick}>
      {children}
    </a>
  );
}
