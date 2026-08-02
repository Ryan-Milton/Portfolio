import { initializeAnalytics } from "@/lib/analytics-client";

if (typeof window !== "undefined") {
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(initializeAnalytics, { timeout: 3000 });
  } else {
    setTimeout(initializeAnalytics, 1500);
  }
}
