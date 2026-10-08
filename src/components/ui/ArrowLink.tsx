import Link from "next/link";
import { cn } from "@/lib/utils";

export function ArrowLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn("group inline-flex min-h-11 items-center gap-3 text-[0.9375rem] font-medium", className)}
    >
      <span className="link-line">{children}</span>
      <span
        aria-hidden
        className="flex h-8 w-8 items-center justify-center rounded-full border border-line-strong transition-[transform,background-color,color] duration-300 group-hover:translate-x-1 group-hover:bg-graphite group-hover:text-paper"
      >
        →
      </span>
    </Link>
  );
}
