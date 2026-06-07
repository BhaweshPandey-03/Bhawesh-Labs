# Bhawesh Labs Engineering Guide

## Mission

Bhawesh Labs builds practical AI products, developer tools, technical writing, and agent systems.

This project is not a traditional portfolio website. It should feel like the public home of a product lab: credible, extensible, and ready to host real products, agents, writing, and open-source work over time.

## Product Vision

Bhawesh Labs should make visitors immediately understand:

> This person builds products and AI systems.

The platform should support:

- AI products
- Developer tools
- AI agents
- Technical blogs
- Engineering writeups
- Open-source projects

Primary audiences:

- Recruiters
- Hiring managers
- Startup founders
- Engineers

## Engineering Principles

- Optimize for extensibility first, visuals second.
- Prefer simple, data-driven systems over hardcoded page content.
- Keep components reusable and domain-aware.
- Use server components by default; add client components only for interaction.
- Keep dependencies minimal and purposeful.
- Preserve SEO-friendly route and metadata structure.
- Avoid premature abstractions, but create clear boundaries for future growth.
- Future products, agents, and writing should be addable without major refactoring.

## Technology Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui-style primitives
- lucide-react icons

Current project base:

- App Router
- TypeScript path alias via `@/*`
- Tailwind CSS variables
- Reusable `cn()` utility in `lib/utils.ts`

## Current Products

Current v1 roadmap/product items:

- CodeInsight AI: Live
- GitHub Engineering Agent: Coming Soon
- Resume Review Agent: Planned
- React Interview Coach: Planned

These items currently live in `app/utils/tools-list.tsx` as a Phase 1 transitional structure. Future phases should move them into a dedicated content/data layer.

## Planned Agents

Initial planned agent categories:

- GitHub Engineering Agent: repository analysis, pull request review, issue triage, and workflow automation.
- Resume Review Agent: resume critique, positioning feedback, and technical-role tailoring.
- React Interview Coach: frontend interview preparation, React fundamentals, architecture prompts, and code review drills.

Future agents should be modeled as data first, then rendered through reusable cards, detail pages, and eventually interactive agent interfaces.

## Architecture Preferences

Prefer this direction for future phases:

```text
app/
  page.tsx
  products/
  agents/
  writing/
  about/

components/
  layout/
  sections/
  cards/
  ui/

content/
  products.ts
  agents.ts
  writing.ts
  site.ts

types/
  content.ts

lib/
  metadata.ts
  utils.ts
```

Guidelines:

- Keep route pages thin.
- Keep content in typed data files or a future MDX/content layer.
- Keep reusable layout in `components/layout`.
- Keep homepage sections in `components/sections`.
- Keep product, agent, and writing cards in `components/cards`.
- Keep low-level primitives in `components/ui`.
- Do not store large JSX blocks inside content records unless there is a strong reason.
- Prefer stable fields like `slug`, `title`, `summary`, `status`, `tags`, `links`, and `featured`.

## Design Principles

- Product platform, not portfolio.
- Professional, credible, and clear.
- Dense enough to communicate substance, calm enough to feel trustworthy.
- Avoid flashy animations in early versions.
- Prefer strong information architecture over decorative effects.
- Use restrained visual polish: clear spacing, strong typography, useful cards, and obvious CTAs.
- Above the fold should communicate AI products, developer tools, and agent systems.
- Do not lead with a personal introduction when a product/company framing is stronger.

## SEO Principles

- Every public page should have a clear title and description.
- Use meaningful routes: `/products`, `/agents`, `/writing`, `/about`.
- Prefer server-rendered content for public marketing and content pages.
- Add sitemap and robots support when route structure expands.
- Future detail pages should use stable slugs.
- Product, agent, and writing content should be structured enough to generate metadata.

## Rules For Future Contributions

- Do not turn Bhawesh Labs into a generic portfolio.
- Do not add new pages without considering how they fit the product platform.
- Do not hardcode repeated product, agent, or writing cards directly in page files.
- Do not introduce heavy dependencies for small UI needs.
- Do not add auth, analytics, CMS, or database code until the public site structure is stable.
- Do not delete existing user changes unless explicitly requested.
- Keep Phase 1 transitional files working until they are intentionally replaced.
- Run `npm run lint` after code changes.
- Run `npm run build` after structural, metadata, or routing changes.
- Prefer small, focused changes that keep the project easy to extend.

## Near-Term Roadmap

Recommended next phases:

1. Create route pages for Home, Products, Agents, Writing, and About.
2. Move roadmap items into typed content files.
3. Add reusable layout, section, and card components.
4. Add SEO helpers, sitemap, and robots.
5. Add detail pages for products, agents, and writing when real content exists.
6. Add analytics, auth, and interactive agent surfaces only after the public platform foundation is stable.
