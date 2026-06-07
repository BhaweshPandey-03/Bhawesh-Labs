import type { Metadata } from "next";
import { WritingCard } from "@/components/cards/writing-card";
import { SectionHeading } from "@/components/sections/section-heading";
import { writingPosts } from "@/content/writing";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Writing",
  description:
    "Technical writing on AI engineering, product architecture, developer tools, and agent systems.",
  path: "/writing",
});

export default function WritingPage() {
  return (
    <main className="container py-12">
      <SectionHeading
        eyebrow="Writing"
        title="Technical writing and build logs"
        description="Architecture notes, product decisions, and implementation lessons from building AI-native developer tools."
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {writingPosts.map((post) => (
          <WritingCard key={post.slug} post={post} />
        ))}
      </div>
    </main>
  );
}
