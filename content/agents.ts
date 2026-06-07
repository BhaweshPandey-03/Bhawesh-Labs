import type { Agent } from "@/types/content";

export const agents: Agent[] = [
  {
    slug: "github-engineering-agent",
    name: "GitHub Engineering Agent",
    summary:
      "Repository analysis, pull request review, issue triage, and engineering workflow automation.",
    description:
      "GitHub Engineering Agent is planned as a repository-aware assistant that can inspect code, summarize pull requests, identify risky changes, and help maintain momentum across issues and reviews.",
    status: "Coming Soon",
    capabilities: ["Repository analysis", "Pull request review", "Issue triage"],
    useCases: ["Codebase onboarding", "Review support", "Maintenance workflows"],
    tags: ["GitHub", "Engineering", "Automation"],
    featured: true,
    links: [{ label: "Follow GitHub", href: "https://github.com/BhaweshPandey-03" }],
  },
  {
    slug: "resume-review-agent",
    name: "Resume Review Agent",
    summary:
      "An AI career assistant for improving technical resumes with sharper positioning, clearer impact, and role-specific feedback.",
    description:
      "Resume Review Agent is planned to help engineers translate projects and experience into stronger hiring signals for recruiters, hiring managers, and technical interview loops.",
    status: "Planned",
    capabilities: ["Resume critique", "Role targeting", "Positioning feedback"],
    useCases: ["Job applications", "Profile cleanup", "Recruiter readiness"],
    tags: ["Career AI", "Hiring", "Feedback"],
    featured: true,
    links: [{ label: "Contact", href: "mailto:bhaweshpandey0310@gmail.com" }],
  },
  {
    slug: "react-interview-coach",
    name: "React Interview Coach",
    summary:
      "A React-focused interview coach for practicing fundamentals, architecture conversations, and realistic code review scenarios.",
    description:
      "React Interview Coach is planned as a structured practice system for frontend engineers who want to sharpen React reasoning, component design, debugging, and senior-level tradeoff discussions.",
    status: "Planned",
    capabilities: ["Practice prompts", "Architecture critique", "Review drills"],
    useCases: ["Interview prep", "Frontend fundamentals", "Senior-level practice"],
    tags: ["React", "Interviews", "Frontend"],
    featured: true,
    links: [{ label: "Contact", href: "mailto:bhaweshpandey0310@gmail.com" }],
  },
];
