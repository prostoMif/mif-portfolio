import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** Удобный деплой в Docker / Railway: один процесс `node .next/standalone/server.js` */
  output: "standalone",
};

export default nextConfig;
