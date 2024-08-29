import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en" className={fontSans.className}>
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <main className="container mx-auto max-w-7xl flex-grow bg-zinc-100 dark:bg-zinc-950">
              <Navbar />
              <div className="px-6">{children}</div>
              <footer className="w-full flex items-center justify-center py-3">
                <div className="flex items-center gap-1 text-current">
                  <span className="text-default-600">Powered by</span>
                  <Popover placement="top" showArrow={true}>
                    <PopoverTrigger>
                      <span className="text-amber-900 cursor-pointer">
                        Coffee
                      </span>
                    </PopoverTrigger>
                    <PopoverContent>
                      <div className="px-1 py-2 max-w-40">
                        <div className="text-xs font-semibold">
                          A delicious hot beverage.
                        </div>
                        <div className="text-xs">
                          Hazlenut - add a splash of cream 🤌🏻
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </footer>
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
