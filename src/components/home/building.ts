/**
 * Abstract model of the historic school building, after the Kosovo Cultural Heritage
 * description: a three-wing "U" plan, three storeys, a central risalit and a columned portal.
 * Units are arbitrary; y is the ground plane.
 */

export type Vec3 = [number, number, number];
export type Segment = [Vec3, Vec3];
export type Block = { center: Vec3; size: Vec3 };

const STOREY = 0.5;

export const blocks: Block[] = [
  { center: [0, 0.75, 0], size: [6, 1.5, 1] },
  { center: [-2.5, 0.75, -2.3], size: [1, 1.5, 3.6] },
  { center: [2.5, 0.75, -2.3], size: [1, 1.5, 3.6] },
  { center: [0, 0.9, 0.2], size: [1.6, 1.8, 1.4] },
];

export const columns: Vec3[] = [-0.42, -0.14, 0.14, 0.42].map((x) => [x, 0.21, 0.97]);
export const COLUMN_HEIGHT = 0.42;

function rectXY(cx: number, cy: number, z: number, w: number, h: number): Segment[] {
  const [x0, x1, y0, y1] = [cx - w / 2, cx + w / 2, cy - h / 2, cy + h / 2];
  return [
    [[x0, y0, z], [x1, y0, z]],
    [[x1, y0, z], [x1, y1, z]],
    [[x1, y1, z], [x0, y1, z]],
    [[x0, y1, z], [x0, y0, z]],
  ];
}

function rectZY(x: number, cz: number, cy: number, d: number, h: number): Segment[] {
  const [z0, z1, y0, y1] = [cz - d / 2, cz + d / 2, cy - h / 2, cy + h / 2];
  return [
    [[x, y0, z0], [x, y0, z1]],
    [[x, y0, z1], [x, y1, z1]],
    [[x, y1, z1], [x, y1, z0]],
    [[x, y1, z0], [x, y0, z0]],
  ];
}

export function windowSegments(): Segment[] {
  const out: Segment[] = [];
  for (let s = 0; s < 3; s++) {
    const cy = s * STOREY + 0.27;
    for (let x = -2.75; x <= 2.76; x += 0.35) {
      if (Math.abs(x) < 0.95) continue;
      out.push(...rectXY(x, cy, 0.501, 0.14, 0.22));
    }
    for (let z = 0.3; z >= -3.9; z -= 0.4) {
      out.push(...rectZY(-3.001, z, cy, 0.14, 0.22));
      out.push(...rectZY(3.001, z, cy, 0.14, 0.22));
    }
    if (s > 0) {
      for (const x of [-0.5, 0, 0.5]) out.push(...rectXY(x, cy + 0.05, 0.901, 0.2, 0.26));
    }
  }
  out.push(...rectXY(0, 0.22, 0.901, 1.1, 0.44));
  return out;
}

export function blockEdges({ center: [cx, cy, cz], size: [w, h, d] }: Block): Segment[] {
  const x = [cx - w / 2, cx + w / 2];
  const y = [cy - h / 2, cy + h / 2];
  const z = [cz - d / 2, cz + d / 2];
  const segs: Segment[] = [];
  for (const yy of y)
    for (const zz of z) segs.push([[x[0], yy, zz], [x[1], yy, zz]]);
  for (const xx of x)
    for (const zz of z) segs.push([[xx, y[0], zz], [xx, y[1], zz]]);
  for (const xx of x)
    for (const yy of y) segs.push([[xx, yy, z[0]], [xx, yy, z[1]]]);
  return segs;
}
