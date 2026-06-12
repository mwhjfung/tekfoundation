import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site — `next build` emits ./out, deployable to any static host.
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
