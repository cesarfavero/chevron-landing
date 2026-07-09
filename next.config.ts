import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.harley-davidson.com",
        pathname: "/ctfasset/**",
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
