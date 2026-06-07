import type { WritingPost } from "@/types/content";

export const writingPosts: WritingPost[] = [
  {
    slug: "building-codeinsight-ai",
    title: "Building CodeInsight AI",
    excerpt:
      "A build log on turning pull request context into useful AI review feedback: summaries, risk signals, and reviewer guidance.",
    category: "Build Log",
    status: "Draft",
    tags: ["AI Engineering", "Code Review", "Product"],
    readingTime: "5 min read",
    featured: true,
  },
  {
    slug: "agent-first-engineering-tools",
    title: "Agent-First Engineering Tools",
    excerpt:
      "How developer tools change when agents can inspect code, remember context, and participate in routine engineering workflows.",
    category: "Engineering Notes",
    status: "Planned",
    tags: ["Agents", "Developer Tools", "Architecture"],
    readingTime: "6 min read",
    featured: true,
  },
  {
    slug: "frontend-platform-foundations",
    title: "Frontend Platform Foundations",
    excerpt:
      "The architecture choices behind growing a small public site into a durable product platform for products, agents, and writing.",
    category: "Frontend Architecture",
    status: "Planned",
    tags: ["Next.js", "Architecture", "TypeScript"],
    readingTime: "7 min read",
    featured: false,
  },
];
