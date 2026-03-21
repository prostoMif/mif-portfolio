/**
 * После `next build` с `output: "standalone"` нужно скопировать
 * `public` и `.next/static` в папку standalone (так пишет документация Next.js).
 */
import { cpSync, existsSync, mkdirSync } from "fs";
import { join } from "path";

const root = process.cwd();
const standalone = join(root, ".next", "standalone");

if (!existsSync(standalone)) {
  console.warn("[copy-standalone] .next/standalone не найден — пропуск.");
  process.exit(0);
}

const pub = join(root, "public");
if (existsSync(pub)) {
  cpSync(pub, join(standalone, "public"), { recursive: true });
  console.log("[copy-standalone] public → standalone/public");
}

const staticSrc = join(root, ".next", "static");
const staticDest = join(standalone, ".next", "static");
if (existsSync(staticSrc)) {
  mkdirSync(join(standalone, ".next"), { recursive: true });
  cpSync(staticSrc, staticDest, { recursive: true });
  console.log("[copy-standalone] .next/static → standalone/.next/static");
}
