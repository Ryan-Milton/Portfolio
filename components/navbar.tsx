"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
  link as linkStyles,
} from "@nextui-org/react";
import { motion } from "framer-motion";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Image from "next/image";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import profilePic from "@/assets/FB_Profile.jpg";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <NextUINavbar
      isBlurred
      className="bg-zinc-50/70 dark:bg-zinc-950/70"
      maxWidth="lg"
      position="sticky"
    >
      <NavbarBrand className="hidden md:flex">
        <NextLink passHref href="/">
          <Image
            alt="Profile Picture"
            className="h-8 w-8 rounded-full"
            src={profilePic}
          />
        </NextLink>
      </NavbarBrand>
      <NavbarContent justify="center">
        <ul className="hidden md:flex gap-8 justify-start ml-2 bg-zinc-200/80 dark:bg-zinc-900/80 py-2 px-6 rounded-full backdrop-blur-sm">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  `${pathname === item.href ? "text-primary" : "text-foreground"}`,
                  "relative",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
                {pathname === item.href && (
                  <motion.span
                    className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-primary-500/0 via-primary-500/40 to-primary-500/0 dark:from-primary-400/0 dark:via-primary-400/40 dark:to-primary-400/0"
                    layoutId="navbar-active"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
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
              <motion.div
                animate={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -20 }}
                transition={{ delay: index * 0.05 }}
              >
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    `${pathname === item.href ? "text-primary" : "text-foreground"}`,
                    "relative text-2xl",
                  )}
                  color="foreground"
                  href={item.href}
                >
                  {item.label}
                  {pathname === item.href && (
                    <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-primary-500/0 via-primary-500/40 to-primary-500/0 dark:from-primary-400/0 dark:via-primary-400/40 dark:to-primary-400/0" />
                  )}
                </NextLink>
              </motion.div>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
