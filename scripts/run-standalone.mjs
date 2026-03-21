/**
 * В Docker/Railway часто задана системная переменная HOSTNAME (имя контейнера).
 * Next standalone подставляет её в listen() — тогда прокси Railway не достукивается.
 * Явно слушаем 0.0.0.0.
 */
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const standaloneDir = join(root, ".next", "standalone");

const env = {
  ...process.env,
  HOSTNAME: "0.0.0.0",
};

const child = spawn(process.execPath, ["server.js"], {
  stdio: "inherit",
  env,
  cwd: standaloneDir,
});

child.on("exit", (code, signal) => {
  if (signal) process.kill(process.pid, signal);
  process.exit(code ?? 1);
});
