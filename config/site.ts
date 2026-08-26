export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Ryan Milton",
  description:
    "Seattle-based senior software engineer building products across web, mobile, and desktop.",
  url: "https://ryguy.dev",
  navItems: [
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Devlog",
      href: "/blog",
    },
  ],
  navMenuItems: [
    { label: "Home", href: "/" },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Devlog",
      href: "/blog",
    },
  ],
  links: {
    github: "https://github.com/Ryan-Milton",
    linkedin: "https://www.linkedin.com/in/ryanmilton",
    youtube: "https://www.youtube.com/@ryanmilton",
  },
};
