import Link from "next/link";
import { AgentCard } from "@/components/cards/agent-card";
import { ProductCard } from "@/components/cards/product-card";
import { WritingCard } from "@/components/cards/writing-card";
import { SectionHeading } from "@/components/sections/section-heading";
import { agents } from "@/content/agents";
import { products } from "@/content/products";
import { writingPosts } from "@/content/writing";

export default function Home() {
  const featuredProducts = products.filter((product) => product.featured);
  const featuredAgents = agents.filter((agent) => agent.featured).slice(0, 3);
  const featuredWriting = writingPosts.filter((post) => post.featured).slice(0, 2);

  return (
    <main>
      <section className="container py-14 text-center sm:py-20">
        <p className="mb-3 text-sm font-medium uppercase tracking-wide text-muted-foreground">
          Bhawesh Labs
        </p>
        <h1 className="mx-auto max-w-3xl text-3xl font-semibold leading-[1.1] sm:text-5xl">
          Building Practical AI Systems for Developers
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground leading-6 text-balance">
          Bhawesh Labs builds AI-powered developer tools, intelligent agents,
          and practical software systems designed to improve engineering
          workflows.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/products"
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            View Products
          </Link>
          <Link
            href="/writing"
            className="rounded-md bg-muted px-4 py-2 text-sm font-medium"
          >
            Read Writing
          </Link>
        </div>
      </section>

      <section className="container py-10">
        <SectionHeading
          eyebrow="Products"
          title="Products in the lab"
          description="Focused AI products and developer tools designed around code review, engineering workflows, and practical automation."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {featuredProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="container py-10">
        <SectionHeading
          eyebrow="Agents"
          title="Agents under development"
          description="Agent concepts for repository understanding, technical career workflows, and frontend interview practice."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {featuredAgents.map((agent) => (
            <AgentCard key={agent.slug} agent={agent} />
          ))}
        </div>
      </section>

      <section className="container py-10 pb-16">
        <SectionHeading
          eyebrow="Writing"
          title="Engineering notes and build logs"
          description="Writing that documents the architecture, tradeoffs, and product thinking behind the lab."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {featuredWriting.map((post) => (
            <WritingCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </main>
  );
}
