import type { Metadata } from "next";
import { SectionHeading } from "@/components/sections/section-heading";
import { siteConfig } from "@/content/site";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "About Bhawesh Labs, a product lab for AI products, developer tools, and agent systems.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="container py-12">
      <SectionHeading
        eyebrow="About"
        title="A product lab for practical AI systems"
        description={
          <>
            <p>
              Bhawesh Labs is an independent software lab focused on building
              AI-powered developer tools, practical agent systems, and
              engineering-focused products.
            </p>

            <p className="mt-4">
              The goal is simple: turn promising ideas and engineering
              experiments into useful software that helps developers work more
              effectively.
            </p>
          </>
        }
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <section className="border p-6 rounded-xl md:col-span-2">
          <h3>What Bhawesh Labs builds?</h3>
          <p>
            Bhawesh Labs serves as the home for products, technical research,
            engineering writeups, open-source projects, and future AI agents. It
            is designed as a product platform first, with room to grow as new
            tools and systems are launched.
          </p>
        </section>

        <section className="border p-6 rounded-xl">
          <h3>Focus areas</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>AI-powered developer tools</li>
            <li>Agent systems</li>
            <li>Technical writing and research</li>
            <li>Open-source projects</li>
          </ul>
        </section>
      </div>

      <section className="mt-6 border p-6 rounded-xl">
        <h3>Connect</h3>
        <div className="flex flex-wrap gap-4 text-sm font-medium">
          <a href={siteConfig.links.github} className="hover:underline">
            GitHub
          </a>
          <a href={siteConfig.links.linkedin} className="hover:underline">
            LinkedIn
          </a>
          <a href={siteConfig.links.email} className="hover:underline">
            Email
          </a>
        </div>
      </section>
    </main>
  );
}
