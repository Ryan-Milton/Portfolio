import "@fortawesome/fontawesome-svg-core/styles.css";
import "@/styles/globals.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import type { Metadata, Viewport } from "next";

import { Providers } from "./providers";

import { AnonymousPageView } from "@/components/analytics";
import { Footer } from "@/components/footer";
import { PageTransition } from "@/components/motion";
import { Navbar } from "@/components/navbar";
import { fontMono, fontSans } from "@/config/fonts";
import { siteConfig } from "@/config/site";

config.autoAddCss = false;

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  category: "technology",
  creator: siteConfig.name,
  description: siteConfig.description,
  icons: { icon: "/favicon.ico" },
  keywords: [
    "Ryan Milton",
    "senior software engineer",
    "frontend engineer",
    "React Native engineer",
    "product engineer",
    "Seattle software engineer",
  ],
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    description: siteConfig.description,
    images: [
      {
        alt: "Ryan Milton, senior software engineer",
        height: 630,
        url: "/opengraph-image",
        width: 1200,
      },
    ],
    locale: "en_US",
    siteName: siteConfig.name,
    title: siteConfig.name,
    type: "website",
    url: siteConfig.url,
  },
  publisher: siteConfig.name,
  title: {
    default: `${siteConfig.name} - Senior Software Engineer`,
    template: `%s - ${siteConfig.name}`,
  },
  twitter: {
    card: "summary_large_image",
    description: siteConfig.description,
    images: ["/opengraph-image"],
    title: `${siteConfig.name} - Senior Software Engineer`,
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { color: "#fafafa", media: "(prefers-color-scheme: light)" },
    { color: "#09090b", media: "(prefers-color-scheme: dark)" },
  ],
};

const personId = `${siteConfig.url}/#person`;
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@id": personId,
      "@type": "Person",
      address: {
        "@type": "PostalAddress",
        addressCountry: "US",
        addressLocality: "Seattle",
        addressRegion: "WA",
      },
      description: siteConfig.description,
      jobTitle: "Senior Software Engineer",
      name: siteConfig.name,
      sameAs: [
        siteConfig.links.github,
        siteConfig.links.linkedin,
        siteConfig.links.youtube,
      ],
      url: siteConfig.url,
    },
    {
      "@type": "WebSite",
      author: { "@id": personId },
      description: siteConfig.description,
      name: `${siteConfig.name} Portfolio`,
      url: siteConfig.url,
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      suppressHydrationWarning
      className={`${fontSans.variable} ${fontMono.variable}`}
      data-scroll-behavior="smooth"
      lang="en"
    >
      <body className="min-h-screen bg-zinc-50 font-sans text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-100">
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <Providers
          themeProps={{
            attribute: "class",
            defaultTheme: "system",
            enableSystem: true,
          }}
        >
          <AnonymousPageView />
          <div className="relative flex min-h-screen flex-col">
            <a
              className="sr-only z-[100] rounded-md bg-zinc-950 px-4 py-3 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4 dark:bg-white dark:text-zinc-950"
              href="#main-content"
            >
              Skip to main content
            </a>
            <Navbar />
            <main
              className="bg-atmosphere container mx-auto w-full max-w-7xl flex-grow bg-zinc-50 px-6 dark:bg-zinc-950"
              id="main-content"
            >
              <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
