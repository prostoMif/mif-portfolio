/**
 * Старт Next.js standalone на Railway/Docker.
 * В контейнере часто задана системная HOSTNAME → Next слушает не 0.0.0.0 → "Application failed to respond".
 * Обязательно выставить ДО require(server.js).
 */
"use strict";

const fs = require("fs");
const path = require("path");

const serverPath = path.join(__dirname, "..", ".next", "standalone", "server.js");

if (!fs.existsSync(serverPath)) {
  console.error("[start] Нет файла:", serverPath);
  console.error("[start] Сначала выполни: npm run build");
  process.exit(1);
}

process.env.HOSTNAME = "0.0.0.0";

console.log(
  "[start] PORT=%s NODE_ENV=%s cwd=%s",
  process.env.PORT || "(default 3000)",
  process.env.NODE_ENV,
  process.cwd(),
);

require(serverPath);
