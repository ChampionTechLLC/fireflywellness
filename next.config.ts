import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  experimental: {
    // Needed because each language has its own root layout, so there is no shared 404 shell.
    globalNotFound: true,
  },
};

export default nextConfig;
