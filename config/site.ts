export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Ryan Milton",
  description: "Custom problems from custom solutions",
  navItems: [
    {
      label: "About",
      href: "/about",
    },
    // {
    //   label: "Blog",
    //   href: "/blog",
    // },
    {
      label: "Projects",
      href: "/projects",
    },
  ],
  navMenuItems: [
    { label: "Home", href: "/" },
    {
      label: "About",
      href: "/about",
    },
    // {
    //   label: "Blog",
    //   href: "/blog",
    // },
    {
      label: "Projects",
      href: "/projects",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
