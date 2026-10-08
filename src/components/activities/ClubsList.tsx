import type { Club } from "@/data/clubs";
import { cn } from "@/lib/utils";

/** Editorial numbered list of clubs; two columns from tablet up. */
export function ClubsList({ clubs, tone = "light" }: { clubs: readonly Club[]; tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <ol className={cn("grid border-t md:grid-cols-2 md:gap-x-12", dark ? "border-line-dark" : "border-line-strong")}>
      {clubs.map((club, i) => (
        <li
          key={club.id}
          className={cn(
            "reveal grid grid-cols-[2.5rem_1fr] gap-x-3 border-b py-6 sm:py-7",
            dark ? "border-line-dark" : "border-line-strong",
          )}
        >
          <span className={cn("pt-1.5 text-xs tabular-nums", dark ? "text-on-dark-muted" : "text-red")}>
            {String(i + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="font-serif text-[1.625rem] leading-tight tracking-tight sm:text-[1.875rem]">{club.name}</h3>
            <p className={cn("mt-2 max-w-md text-[0.9375rem] leading-relaxed", dark ? "text-on-dark-muted" : "text-muted")}>
              {club.text}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
