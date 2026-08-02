"use client";

import type { PostHog } from "posthog-js";

let client: PostHog | null = null;
let clientPromise: Promise<PostHog | null> | null = null;

function loadAnalytics() {
  const token = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;
  const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;

  if (process.env.NODE_ENV !== "production" || !token || !host) {
    return Promise.resolve(null);
  }
  if (client) return Promise.resolve(client);
  if (clientPromise) return clientPromise;

  clientPromise = import("posthog-js").then(({ default: posthog }) => {
    client = posthog.init(token, {
      advanced_disable_flags: true,
      api_host: host,
      autocapture: false,
      capture_dead_clicks: false,
      capture_exceptions: false,
      capture_heatmaps: false,
      capture_pageleave: false,
      capture_pageview: false,
      capture_performance: false,
      cookieless_mode: "always",
      defaults: "2026-05-30",
      disable_external_dependency_loading: true,
      disable_session_recording: true,
      disable_surveys: true,
      mask_personal_data_properties: true,
      person_profiles: "never",
      respect_dnt: true,
    });

    return client;
  });

  return clientPromise;
}

export function initializeAnalytics() {
  void loadAnalytics();
}

export function captureAnalytics(
  event: string,
  properties?: Record<string, boolean | number | string>,
) {
  void loadAnalytics().then((posthog) =>
    posthog?.capture(event, { ...properties, $geoip_disable: true }),
  );
}
