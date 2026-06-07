import type { Agent } from "@/types/content";

type AgentCardProps = {
  agent: Agent;
};

export function AgentCard({ agent }: AgentCardProps) {
  const primaryLink = agent.links[0];

  return (
    <article className="border flex flex-col justify-between p-6 rounded-xl transition md:hover:shadow-lg">
      <div>
        <div className="mb-4 flex items-center justify-between gap-3">
          <span className="text-sm font-medium text-muted-foreground">
            Agent
          </span>
          <span className="rounded-md bg-muted px-2 py-1 text-xs font-medium">
            {agent.status}
          </span>
        </div>
        <h3 className="text-xl">{agent.name}</h3>
        <p>{agent.summary}</p>
      </div>

      <div className="mt-6">
        <ul className="mb-5 space-y-2 text-sm text-muted-foreground">
          {agent.capabilities.slice(0, 3).map((capability) => (
            <li key={capability}>{capability}</li>
          ))}
        </ul>
        {primaryLink && (
          <a
            href={primaryLink.href}
            className="text-sm font-medium hover:underline"
          >
            {primaryLink.label}
          </a>
        )}
      </div>
    </article>
  );
}
