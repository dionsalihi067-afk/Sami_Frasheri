"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { assets } from "@/data/school";
import { cn } from "@/lib/utils";

pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.mjs", import.meta.url).toString();

/** Range requests: only the pages being viewed are downloaded from the large PDF. */
const PDF_OPTIONS = { disableAutoFetch: true, disableStream: true };

const ZOOM_STEPS = [1, 1.25, 1.5, 2, 2.5];

function Spinner({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-4 text-on-dark-muted" role="status">
      <span aria-hidden className="h-10 w-10 animate-spin rounded-full border-2 border-line-dark border-t-on-dark" />
      <span className="t-eyebrow">{label}</span>
    </div>
  );
}

function ToolButton({
  label,
  onClick,
  disabled,
  children,
  className,
}: {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      title={label}
      className={cn(
        "flex h-11 min-w-11 items-center justify-center rounded-full px-2 text-lg text-on-dark transition-colors hover:bg-white/10 active:bg-white/15 disabled:pointer-events-none disabled:opacity-30",
        className,
      )}
    >
      {children}
    </button>
  );
}

export default function MagazineReader({ onClose }: { onClose: () => void }) {
  const root = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);

  const [numPages, setNumPages] = useState(0);
  const [page, setPage] = useState(1);
  const [zoomIndex, setZoomIndex] = useState(0);
  const [ratio, setRatio] = useState(0.772);
  const [box, setBox] = useState({ width: 0, height: 0 });
  const [failed, setFailed] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [canFullscreen, setCanFullscreen] = useState(false);
  const [pageInput, setPageInput] = useState("1");

  useEffect(() => {
    const el = stage.current;
    if (!el) return;
    setBox({ width: el.clientWidth, height: el.clientHeight });
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setBox({ width, height });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    root.current?.focus({ preventScroll: true });
    setCanFullscreen(Boolean(document.fullscreenEnabled));
    const onChange = () => setFullscreen(document.fullscreenElement === root.current);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  useEffect(() => setPageInput(String(page)), [page]);

  const go = useCallback(
    (target: number) => {
      if (!numPages) return;
      setPage(Math.min(Math.max(1, target), numPages));
      stage.current?.scrollTo({ top: 0, left: 0 });
    },
    [numPages],
  );

  const zoom = (delta: number) => setZoomIndex((z) => Math.min(Math.max(z + delta, 0), ZOOM_STEPS.length - 1));

  const toggleFullscreen = () => {
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    else root.current?.requestFullscreen?.().catch(() => {});
  };

  const fitWidth = Math.max(0, Math.min(box.width - 24, (box.height - 24) * ratio));
  const pageWidth = Math.floor(fitWidth * ZOOM_STEPS[zoomIndex]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if ((e.target as HTMLElement).tagName === "INPUT") return;
    if (e.key === "ArrowRight" || e.key === "PageDown") {
      e.preventDefault();
      go(page + 1);
    } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
      e.preventDefault();
      go(page - 1);
    } else if (e.key === "+" || e.key === "=") {
      zoom(1);
    } else if (e.key === "-") {
      zoom(-1);
    } else if (e.key.toLowerCase() === "f") {
      toggleFullscreen();
    } else if (e.key === "Escape" && !document.fullscreenElement) {
      onClose();
    }
  };

  if (failed) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-5 bg-charcoal px-6 text-center text-on-dark">
        <p className="font-serif text-3xl">Revista nuk mund të hapet këtu.</p>
        <p className="max-w-sm text-sm leading-relaxed text-on-dark-muted">
          Lexuesi nuk arriti ta ngarkojë dokumentin. Mund ta shkarkoni revistën dhe ta lexoni në pajisjen tuaj.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href={assets.magazine} download className="btn btn-primary">
            Shkarko Revistën
          </a>
          <button type="button" onClick={onClose} className="btn btn-outline-light">
            Kthehu
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={root}
      tabIndex={-1}
      onKeyDown={onKeyDown}
      role="region"
      aria-label="Lexuesi i revistës"
      className="flex h-full flex-col bg-charcoal text-on-dark outline-none"
    >
      <div className="flex items-center justify-between gap-2 border-b border-line-dark px-2 py-1.5 sm:px-3">
        <ToolButton label="Mbyll lexuesin" onClick={onClose} className="gap-2 px-3 text-sm">
          <span aria-hidden>←</span>
          <span className="hidden sm:inline">Kopertina</span>
        </ToolButton>
        <p className="t-eyebrow truncate text-on-dark-muted" aria-live="polite">
          Faqja {page} nga {numPages || "…"}
        </p>
        <div className="flex items-center">
          <ToolButton label="Zvogëlo" onClick={() => zoom(-1)} disabled={zoomIndex === 0}>
            −
          </ToolButton>
          <span className="hidden w-12 text-center text-xs tabular-nums text-on-dark-muted sm:block">
            {Math.round(ZOOM_STEPS[zoomIndex] * 100)}%
          </span>
          <ToolButton label="Zmadho" onClick={() => zoom(1)} disabled={zoomIndex === ZOOM_STEPS.length - 1}>
            +
          </ToolButton>
          {canFullscreen && (
            <ToolButton label={fullscreen ? "Dil nga ekrani i plotë" : "Ekran i plotë"} onClick={toggleFullscreen}>
              <svg aria-hidden viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
                {fullscreen ? (
                  <path d="M8 3v5H3M12 3v5h5M8 17v-5H3M12 17v-5h5" />
                ) : (
                  <path d="M3 8V3h5M17 8V3h-5M3 12v5h5M17 12v5h-5" />
                )}
              </svg>
            </ToolButton>
          )}
        </div>
      </div>

      <div
        ref={stage}
        className={cn("relative min-h-0 flex-1 overflow-auto overscroll-contain", zoomIndex === 0 && "touch-pan-y")}
        onTouchStart={(e) => {
          touchX.current = zoomIndex === 0 ? e.touches[0].clientX : null;
        }}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 50) go(page + (dx < 0 ? 1 : -1));
          touchX.current = null;
        }}
      >
        <Document
          file={assets.magazine}
          options={PDF_OPTIONS}
          onLoadSuccess={({ numPages: n }) => setNumPages(n)}
          onLoadError={() => setFailed(true)}
          loading={
            <div className="absolute inset-0 flex items-center justify-center">
              <Spinner label="Duke hapur revistën" />
            </div>
          }
          error={null}
          className="flex min-h-full min-w-fit items-center justify-center p-3"
        >
          {pageWidth > 0 && (
            <Page
              key={page}
              pageNumber={page}
              width={pageWidth}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              onLoadSuccess={(p) => setRatio(p.originalWidth / p.originalHeight)}
              loading={
                <div style={{ width: pageWidth, height: pageWidth / ratio }} className="flex items-center justify-center bg-charcoal-2">
                  <Spinner label={`Faqja ${page}`} />
                </div>
              }
              error={
                <div
                  style={{ width: pageWidth, height: pageWidth / ratio }}
                  className="flex items-center justify-center bg-charcoal-2 px-6 text-center text-sm text-on-dark-muted"
                >
                  Kjo faqe nuk u ngarkua. Provoni përsëri.
                </div>
              }
              className="shadow-[0_24px_60px_-24px_rgb(0_0_0/0.9)]"
            />
          )}
        </Document>
      </div>

      <div className="flex items-center justify-center gap-2 border-t border-line-dark px-2 py-2">
        <ToolButton label="Faqja e mëparshme" onClick={() => go(page - 1)} disabled={page <= 1} className="w-14">
          ←
        </ToolButton>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const n = Number.parseInt(pageInput, 10);
            if (Number.isFinite(n)) go(n);
            else setPageInput(String(page));
          }}
          className="flex items-center gap-2 text-sm tabular-nums"
        >
          <label htmlFor="magazine-page" className="sr-only">
            Shko te faqja
          </label>
          <input
            id="magazine-page"
            inputMode="numeric"
            enterKeyHint="go"
            value={pageInput}
            onChange={(e) => setPageInput(e.target.value.replace(/\D/g, ""))}
            onBlur={() => setPageInput(String(page))}
            className="h-11 w-14 rounded-full border border-line-dark bg-charcoal-2 text-center text-base text-on-dark outline-none focus:border-on-dark"
          />
          <span className="text-on-dark-muted">/ {numPages || "–"}</span>
        </form>
        <ToolButton label="Faqja e radhës" onClick={() => go(page + 1)} disabled={!numPages || page >= numPages} className="w-14">
          →
        </ToolButton>
      </div>
    </div>
  );
}
