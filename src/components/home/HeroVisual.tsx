"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const BuildingScene = dynamic(() => import("./BuildingScene"), { ssr: false });

function canUse3D() {
  const capable = window.matchMedia(
    "(min-width: 1024px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
  ).matches;
  if (!capable) return false;
  const nav = navigator as Navigator & { deviceMemory?: number; connection?: { saveData?: boolean } };
  if (nav.connection?.saveData || (nav.deviceMemory !== undefined && nav.deviceMemory < 4)) return false;
  try {
    return Boolean(document.createElement("canvas").getContext("webgl2"));
  } catch {
    return false;
  }
}

/**
 * Shows the static drawing immediately. On capable desktops the interactive model is
 * fetched once the browser is idle and cross-faded over the drawing.
 */
export function HeroVisual({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!canUse3D()) return;
    const start = () => setEnabled(true);
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(start, { timeout: 3000 });
      return () => window.cancelIdleCallback(id);
    }
    const id = setTimeout(start, 1500);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled) return;
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, [enabled]);

  return (
    <div ref={ref} className="relative h-full w-full">
      <div className={cn("absolute inset-0 transition-opacity duration-1000", ready && "opacity-0")}>{children}</div>
      {enabled && (
        <div className={cn("absolute inset-0 opacity-0 transition-opacity duration-1000", ready && "opacity-100")}>
          <BuildingScene active={visible} onReady={() => setReady(true)} />
        </div>
      )}
    </div>
  );
}
