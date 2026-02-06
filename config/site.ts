export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Ryan Milton",
  description: "Software designer, creator, and kei car enthusiast.",
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
      label: "Blog",
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
      label: "Blog",
      href: "/blog",
    },
  ],
  links: {
    github: "https://github.com/Ryan-Milton",
    twitter: "https://x.com/ryan__milton",
    instagram: "https://www.instagram.com/ryan_ohkeilife",
    email:
      "mailto:mr.ryan.milton@gmail.com?subject=Inquiry%20About%20Your%20Services",
  },
};
