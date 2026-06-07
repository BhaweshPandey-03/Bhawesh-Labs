import type { Metadata } from "next";
import { AgentCard } from "@/components/cards/agent-card";
import { SectionHeading } from "@/components/sections/section-heading";
import { agents } from "@/content/agents";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Agents",
  description:
    "AI agent concepts for engineering automation, technical career workflows, and frontend interview practice.",
  path: "/agents",
});

export default function AgentsPage() {
  return (
    <main className="container py-12">
      <SectionHeading
        eyebrow="Agents"
        title="AI agent roadmap"
        description="A focused set of agents planned around software engineering, repository workflows, and technical growth."
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {agents.map((agent) => (
          <AgentCard key={agent.slug} agent={agent} />
        ))}
      </div>
    </main>
  );
}
