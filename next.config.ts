import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: import.meta.dirname,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/ai-overviews-a-ich-dopad-na-seo-v-roku-2026-kompletny-sprievodca",
        destination: "/ai-overviews-kompletny-sprievodca",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
