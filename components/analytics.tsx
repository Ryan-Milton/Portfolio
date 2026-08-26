"use client";

import { useEffect } from "react";

import { usePathname } from "next/navigation";

import { captureAnalytics } from "@/lib/analytics-client";

export function AnonymousPageView() {
  const pathname = usePathname();

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      captureAnalytics("$pageview", {
        $current_url: `${window.location.origin}${pathname}`,
        $pathname: pathname,
      });
    }, 1500);

    return () => window.clearTimeout(timeout);
  }, [pathname]);

  return null;
}
