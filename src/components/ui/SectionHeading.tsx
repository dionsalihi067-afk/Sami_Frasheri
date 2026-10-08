import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  lead,
  tone = "light",
  className,
  id,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  tone?: "light" | "dark";
  className?: string;
  id?: string;
}) {
  const muted = tone === "dark" ? "text-on-dark-muted" : "text-muted";
  return (
    <div className={cn("max-w-3xl", className)}>
      <p className={cn("t-eyebrow flex items-center gap-3", muted)}>
        <span aria-hidden className="h-px w-8 bg-red" />
        {eyebrow}
      </p>
      <h2 id={id} className="t-h2 mt-5">
        {title}
      </h2>
      {lead && <p className={cn("t-lead mt-5 max-w-2xl", muted)}>{lead}</p>}
    </div>
  );
}
