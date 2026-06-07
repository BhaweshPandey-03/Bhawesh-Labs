import {
  BotIcon,
  BrainCircuitIcon,
  Code2Icon,
  FileSearchIcon,
} from "lucide-react";

type Tool = {
  title: string;
  description: string;
  offer: string;
  href: string;
  details: string | JSX.Element;
  icon: JSX.Element;
  category: string;
};

export const tools: Tool[] = [
  {
    title: "CodeInsight AI",
    description:
      "An AI-assisted engineering tool for reviewing code, explaining changes, and surfacing implementation risks.",
    offer: "Live",
    href: "https://github.com/BhaweshPandey-03",
    details: "A live Bhawesh Labs product focused on developer productivity.",
    icon: <Code2Icon className="m-auto h-8 w-8 text-primary" />,
    category: "Products",
  },
  {
    title: "GitHub Engineering Agent",
    description:
      "A planned agent for repository analysis, pull request review, issue triage, and engineering workflow automation.",
    offer: "Coming Soon",
    href: "https://github.com/BhaweshPandey-03",
    details: "Roadmap item for future AI-assisted software maintenance.",
    icon: <BotIcon className="m-auto h-8 w-8 text-primary" />,
    category: "Agents",
  },
  {
    title: "Resume Review Agent",
    description:
      "An AI agent for reviewing resumes, improving positioning, and tailoring feedback for technical roles.",
    offer: "Planned",
    href: "mailto:bhaweshpandey0310@gmail.com",
    details: "Planned career-focused AI system for structured resume feedback.",
    icon: <FileSearchIcon className="m-auto h-8 w-8 text-primary" />,
    category: "Career AI",
  },
  {
    title: "React Interview Coach",
    description:
      "A guided practice system for frontend interviews, React fundamentals, architecture prompts, and code review drills.",
    offer: "Planned",
    href: "mailto:bhaweshpandey0310@gmail.com",
    details: "Planned interview-prep product for frontend engineers.",
    icon: <BrainCircuitIcon className="m-auto h-8 w-8 text-primary" />,
    category: "Career AI",
  },
];
