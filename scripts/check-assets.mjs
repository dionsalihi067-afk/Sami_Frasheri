// Verifies that every /assets/... path referenced in src/ (and every staff card + portrait) exists in public/.
import fs from "node:fs";
import path from "node:path";

const files = [];
(function walk(dir) {
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) walk(p);
    else files.push(p);
  }
})("src");

const refs = new Set();
for (const f of files) {
  const text = fs.readFileSync(f, "utf8");
  for (const m of text.matchAll(/["'`](\/assets\/[^"'`$]+)["'`]/g)) refs.add(m[1]);
}

const staff = fs.readFileSync("src/data/staff.ts", "utf8");
const staffFiles = [...staff.matchAll(/\[\s*"[^"]+",\s*"([^"]+\.jpg)"/g)].map((m) => m[1]);
for (const f of staffFiles) {
  refs.add(`/assets/staff/${f}`);
  refs.add(`/assets/staff/portraits/${f}`);
}

const missing = [...refs].filter((r) => !fs.existsSync(path.join("public", r)));
console.log(`Checked ${refs.size} asset references (${staffFiles.length} staff members).`);
if (missing.length) {
  console.error("Missing:\n" + missing.join("\n"));
  process.exit(1);
}
console.log("All referenced assets exist.");
