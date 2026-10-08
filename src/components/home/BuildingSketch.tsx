import { cn } from "@/lib/utils";
import {
  blockEdges,
  blocks,
  COLUMN_HEIGHT,
  columns,
  windowSegments,
  type Segment,
  type Vec3,
} from "./building";

const COS = Math.cos(Math.PI / 6);

function project([x, y, z]: Vec3): [number, number] {
  return [(x - z) * COS * 100, ((x + z) * 0.5 - y) * 100];
}

function toPath(segments: Segment[]) {
  return segments
    .map(([a, b]) => {
      const [x1, y1] = project(a);
      const [x2, y2] = project(b);
      return `M${x1.toFixed(1)} ${y1.toFixed(1)}L${x2.toFixed(1)} ${y2.toFixed(1)}`;
    })
    .join("");
}

const structureSegments = blocks.flatMap(blockEdges);
const points = structureSegments.flat().map(project);
const PAD = 36;
const minX = Math.min(...points.map((p) => p[0])) - PAD;
const minY = Math.min(...points.map((p) => p[1])) - PAD;
const maxX = Math.max(...points.map((p) => p[0])) + PAD;
const maxY = Math.max(...points.map((p) => p[1])) + PAD;
const viewBox = [minX, minY, maxX - minX, maxY - minY].map((n) => n.toFixed(0)).join(" ");

const ground = toPath([
  ...Array.from({ length: 8 }, (_, i): Segment => [[-3.5 + i, 0, 1.6], [-3.5 + i, 0, -4.6]]),
  ...Array.from({ length: 7 }, (_, i): Segment => [[-3.5, 0, 1.6 - i], [3.5, 0, 1.6 - i]]),
]);
const openings = toPath(windowSegments());
const structure = toPath(structureSegments);
const portal = toPath(
  columns.map(([x, y, z]) => [
    [x, y - COLUMN_HEIGHT / 2, z],
    [x, y + COLUMN_HEIGHT / 2, z],
  ]),
);

/** Static axonometric drawing of the building; also the fallback when WebGL is unavailable. */
export function BuildingSketch({ className, animate = false }: { className?: string; animate?: boolean }) {
  return (
    <svg
      viewBox={viewBox}
      className={cn(animate && "draw-in", className)}
      role="img"
      aria-label="Vizatim abstrakt i ndërtesës së gjimnazit: planimetri në formë “U”, tri etazhe dhe portal me shtylla"
      fill="none"
    >
      <path d={ground} pathLength={1} stroke="currentColor" strokeOpacity={0.1} strokeWidth={1} vectorEffect="non-scaling-stroke" />
      <path d={openings} pathLength={1} stroke="currentColor" strokeOpacity={0.38} strokeWidth={1} vectorEffect="non-scaling-stroke" />
      <path d={structure} pathLength={1} stroke="currentColor" strokeOpacity={0.85} strokeWidth={1.25} vectorEffect="non-scaling-stroke" />
      <path d={portal} pathLength={1} stroke="var(--color-red)" strokeWidth={2.25} vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
