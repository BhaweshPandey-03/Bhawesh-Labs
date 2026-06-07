import type { WritingPost } from "@/types/content";

type WritingCardProps = {
  post: WritingPost;
};

export function WritingCard({ post }: WritingCardProps) {
  return (
    <article className="border flex flex-col justify-between p-6 rounded-xl transition md:hover:shadow-lg">
      <div>
        <div className="mb-4 flex items-center justify-between gap-3">
          <span className="text-sm font-medium text-muted-foreground">
            {post.category}
          </span>
          <span className="rounded-md bg-muted px-2 py-1 text-xs font-medium">
            {post.status}
          </span>
        </div>
        <h3 className="text-xl">{post.title}</h3>
        <p>{post.excerpt}</p>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
        <span>{post.readingTime}</span>
        {post.tags.slice(0, 2).map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </article>
  );
}
