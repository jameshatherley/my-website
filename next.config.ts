import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [100],
    minimumCacheTTL: 60,
  },
};

export default nextConfig;