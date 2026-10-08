"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { flushSync } from "react-dom";
import { assets } from "@/data/school";
import { cn } from "@/lib/utils";

type Status = "poster" | "loading" | "playing" | "error";

/**
 * Poster first: nothing of the 12 MB video is downloaded until the visitor presses play.
 * Playback then uses the native controls (seek, volume, fullscreen, captions menu).
 */
export function CampusVideo({ className, title = "Ambienti i shkollës" }: { className?: string; title?: string }) {
  const video = useRef<HTMLVideoElement>(null);
  const [status, setStatus] = useState<Status>("poster");

  const start = () => {
    // Mount the <video> synchronously so play() runs inside the click (required by iOS Safari).
    flushSync(() => setStatus("loading"));
    video.current?.play().catch(() => {
      // If playback is refused, reveal the element so its native controls can start it.
      setStatus((s) => (s === "loading" ? "playing" : s));
    });
  };

  return (
    <figure className={cn("relative", className)}>
      <div className="relative aspect-video w-full overflow-hidden rounded-[1.25rem] bg-charcoal shadow-[0_40px_80px_-40px_rgb(28_27_26/0.55)] sm:rounded-[1.75rem]">
        {status !== "poster" && status !== "error" && (
          <video
            ref={video}
            src={assets.video}
            poster={assets.videoPoster}
            className="absolute inset-0 h-full w-full bg-charcoal object-contain"
            controls
            playsInline
            preload="auto"
            aria-label={`Video: ${title}`}
            onPlaying={() => setStatus("playing")}
            onError={() => setStatus("error")}
          />
        )}

        {status !== "playing" && (
          <div className="absolute inset-0">
            <Image
              src={assets.videoPoster}
              alt=""
              fill
              sizes="(min-width: 1344px) 1280px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-charcoal/10" />

            {status === "error" ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-charcoal/70 px-6 text-center text-on-dark">
                <p className="font-serif text-2xl">Videoja nuk mund të luhet këtu.</p>
                <a href={assets.video} target="_blank" rel="noopener" className="btn btn-outline-light">
                  Hape videon në skedë të re
                </a>
              </div>
            ) : (
              <button
                type="button"
                onClick={start}
                disabled={status === "loading"}
                className="group absolute inset-0 flex flex-col justify-end p-5 text-left text-on-dark sm:p-8 lg:p-10"
                aria-label={`Luaj videon: ${title}`}
              >
                <span className="flex items-end justify-between gap-4">
                  <span>
                    <span className="t-eyebrow block text-on-dark/70">Video · 1:39</span>
                    <span className="mt-2 block font-serif text-[clamp(1.5rem,4vw,2.75rem)] leading-none tracking-tight">{title}</span>
                  </span>
                  <span
                    aria-hidden
                    className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-paper text-graphite shadow-lg transition-transform duration-300 group-hover:scale-105 group-active:scale-95 sm:h-20 sm:w-20"
                  >
                    {status === "loading" ? (
                      <span className="h-6 w-6 animate-spin rounded-full border-2 border-graphite/25 border-t-graphite" />
                    ) : (
                      <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 sm:h-7 sm:w-7" fill="currentColor">
                        <path d="M7 4.5v15a1 1 0 0 0 1.53.85l12-7.5a1 1 0 0 0 0-1.7l-12-7.5A1 1 0 0 0 7 4.5Z" />
                      </svg>
                    )}
                  </span>
                </span>
              </button>
            )}
          </div>
        )}
      </div>
    </figure>
  );
}
