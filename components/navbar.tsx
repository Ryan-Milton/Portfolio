"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import profilePic from "@/assets/FB_Profile.jpg";
import Image from "next/image";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [active, setActive] = useState("/");
  useEffect(() => {
    setActive(window.location.pathname);
  }, []);
  return (
    <NextUINavbar maxWidth="lg" position="sticky" className="bg-transparent">
      <NavbarBrand className="hidden md:flex">
        <NextLink href="/" passHref onClick={() => setActive("/")}>
          <Image
            src={profilePic}
            alt="Profile Picture"
            className="w-8 h-8 rounded-full"
          />
        </NextLink>
      </NavbarBrand>
      <NavbarContent justify="center">
        <ul className="hidden md:flex gap-8 justify-start ml-2 bg-zinc-200 dark:bg-zinc-900 py-2 px-6 rounded-full">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  `${active === item.href ? "text-primary" : "text-foreground"}`,
                  "relative"
                )}
                color="foreground"
                href={item.href}
                onClick={() => setActive(item.href)}
              >
                {item.label}
                {active === item.href && (
                  <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-primary-500/0 via-primary-500/40 to-primary-500/0 dark:from-primary-400/0 dark:via-primary-400/40 dark:to-primary-400/0" />
                )}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden md:flex">
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="md:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  `${active === item.href ? "text-primary" : "text-foreground"}`,
                  "relative text-2xl"
                )}
                color="foreground"
                href={item.href}
                onClick={() => {
                  setActive(item.href);
                }}
              >
                {item.label}
                {active === item.href && (
                  <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-primary-500/0 via-primary-500/40 to-primary-500/0 dark:from-primary-400/0 dark:via-primary-400/40 dark:to-primary-400/0" />
                )}
              </NextLink>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
