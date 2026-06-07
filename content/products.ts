import type { Product } from "@/types/content";

export const products: Product[] = [
  {
    slug: "codeinsight-ai",
    name: "CodeInsight AI",
    summary:
      "AI-assisted code review that explains changes, highlights risks, and helps engineers move through reviews faster.",
    description:
      "CodeInsight AI helps engineers understand code changes faster by summarizing intent, surfacing risks, and turning implementation details into clear review notes.",
    category: "AI Product",
    status: "Live",
    tags: ["AI", "Code Review", "Developer Tools"],
    featured: true,
    links: [
      {
        label: "View GitHub",
        href: "https://github.com/BhaweshPandey-03/CodeInsight"
      },
      {
      label: "Live Demo",
        href: "https://code-insight-cyan.vercel.app/",
      },
],
  },
  {
    slug: "developer-toolkit",
    name: "Developer Toolkit",
    summary:
      "A collection of practical utilities, templates, and experiments for building cleaner developer workflows.",
    description:
      "Developer Toolkit is the staging ground for small but useful engineering tools: templates, workflow helpers, frontend patterns, and AI-assisted experiments.",
    category: "Developer Tool",
    status: "Planned",
    tags: ["Open Source", "Frontend", "Workflow"],
    featured: true,
    links: [{ label: "Explore GitHub", href: "https://github.com/BhaweshPandey-03" }],
  },
];
