"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { STAFF_CARD_SIZE, type StaffMember } from "@/data/staff";

/** One dialog for the whole directory; opened via event delegation on `[data-staff-index]`. */
export function StaffLightbox({ members }: { members: StaffMember[] }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const [index, setIndex] = useState<number | null>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest<HTMLElement>("[data-staff-index]");
      if (!target) return;
      opener.current = target;
      setIndex(Number(target.dataset.staffIndex));
      dialog.current?.showModal();
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const step = useCallback(
    (delta: number) => setIndex((i) => (i === null ? i : (i + delta + members.length) % members.length)),
    [members.length],
  );

  const close = () => dialog.current?.close();

  const member = index === null ? null : members[index];

  return (
    <dialog
      ref={dialog}
      aria-label={member ? `${member.name}, ${member.role}` : "Kartela e stafit"}
      className="m-auto w-[min(52rem,calc(100vw-1.5rem))] max-w-none rounded-[1.25rem] bg-paper p-3 text-graphite shadow-2xl backdrop:bg-charcoal/70 backdrop:backdrop-blur-sm sm:p-4"
      onClose={() => {
        setIndex(null);
        opener.current?.focus();
      }}
      onClick={(e) => e.target === e.currentTarget && close()}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") step(1);
        if (e.key === "ArrowLeft") step(-1);
      }}
    >
      {member && (
        <div>
          <div className="overflow-hidden rounded-xl bg-sand">
            <Image
              key={member.id}
              src={member.image}
              alt={`Kartela e stafit: ${member.name}, ${member.role}`}
              width={STAFF_CARD_SIZE.width}
              height={STAFF_CARD_SIZE.height}
              sizes="(min-width: 900px) 56rem, 100vw"
              className="h-auto w-full"
            />
          </div>
          <div className="mt-3 flex flex-col gap-3 px-1 pb-1 sm:mt-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <p className="truncate font-serif text-2xl leading-tight">{member.name}</p>
              <p className="truncate text-sm text-muted">
                {member.role} · {(index ?? 0) + 1}/{members.length}
              </p>
            </div>
            <div className="flex shrink-0 gap-2">
              <button type="button" onClick={() => step(-1)} className="btn btn-outline h-12 w-12 px-0" aria-label="I mëparshmi">
                ←
              </button>
              <button type="button" onClick={() => step(1)} className="btn btn-outline h-12 w-12 px-0" aria-label="I radhës">
                →
              </button>
              <button type="button" onClick={close} className="btn btn-dark h-12 flex-1 px-6 sm:flex-none" autoFocus>
                Mbyll
              </button>
            </div>
          </div>
        </div>
      )}
    </dialog>
  );
}
