import { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-6 max-w-3xl">
      {eyebrow && (
        <p className="mb-2 text-sm font-medium uppercase tracking-wide text-muted-foreground">
          {eyebrow}
        </p>
      )}

      <h2>{title}</h2>

      {description && (
        <div className="max-w-2xl text-muted-foreground">{description}</div>
      )}
    </div>
  );
}
