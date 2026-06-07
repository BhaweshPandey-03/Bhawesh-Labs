import type { Product } from "@/types/content";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  // const primaryLink = product.links[0];

  return (
    <article className="border flex flex-col justify-between p-6 rounded-xl transition md:hover:shadow-lg">
      <div>
        <div className="mb-4 flex items-center justify-between gap-3">
          <span className="text-sm font-medium text-muted-foreground">
            {product.category}
          </span>
          <span className="rounded-md bg-muted px-2 py-1 text-xs font-medium">
            {product.status}
          </span>
        </div>
        <h3 className="text-xl">{product.name}</h3>
        <p>{product.summary}</p>
      </div>

      <div className="mt-6">
        <div className="mb-5 flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        {/* {primaryLink && (
          <a
            href={primaryLink.href}
            className="text-sm font-medium hover:underline"
          >
            {primaryLink.label}
          </a>
        )} */}
        <div className="flex flex-wrap gap-4">
          {product.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium hover:underline"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
