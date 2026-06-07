import type { Metadata } from "next";
import { ProductCard } from "@/components/cards/product-card";
import { SectionHeading } from "@/components/sections/section-heading";
import { products } from "@/content/products";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Products",
  description:
    "Practical AI products, developer tools, and open-source experiments from Bhawesh Labs.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <main className="container py-12">
      <SectionHeading
        eyebrow="Products"
        title="AI products and developer tools"
        description="Products and experiments focused on code review, developer productivity, and real-world engineering workflows."
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </main>
  );
}
