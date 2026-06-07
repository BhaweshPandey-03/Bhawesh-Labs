export type ContentStatus = "Live" | "Coming Soon" | "Planned" | "Draft";

export type ContentLink = {
  label: string;
  href: string;
};

export type NavigationItem = {
  label: string;
  href: string;
};

export type Product = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  category: string;
  status: ContentStatus;
  tags: string[];
  featured: boolean;
  links: ContentLink[];
};

export type Agent = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  status: ContentStatus;
  capabilities: string[];
  useCases: string[];
  tags: string[];
  featured: boolean;
  links: ContentLink[];
};

export type WritingPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  status: ContentStatus;
  tags: string[];
  publishedAt?: string;
  readingTime: string;
  featured: boolean;
};
