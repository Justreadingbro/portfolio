import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <div className={`flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-gold ${align === "center" ? "justify-center" : ""}`}>
        <span className="h-px w-8 bg-gold/60" />
        {eyebrow}
      </div>
      <h2 className="mt-5 font-display text-4xl leading-[1.05] text-foreground sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
