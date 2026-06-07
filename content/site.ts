import type { NavigationItem } from "@/types/content";

const placeholderSiteUrl = "https://example.com";

export const siteConfig = {
  name: "Bhawesh Labs",
  description:
    "AI products, developer tools, and agent systems built by Bhawesh Pandey.",
  // Replace NEXT_PUBLIC_SITE_URL with the production domain when it is ready.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? placeholderSiteUrl,
  author: "Bhawesh Pandey",
  links: {
    github: "https://github.com/BhaweshPandey-03",
    linkedin: "https://www.linkedin.com/in/bhawesh-pandey/",
    email: "mailto:bhaweshpandey0310@gmail.com",
  },
};

export const navigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Agents", href: "/agents" },
  { label: "Writing", href: "/writing" },
  { label: "About", href: "/about" },
];
