import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/My-Portofolio",
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ["192.168.2.107", "192.168.110.85"],
};

export default nextConfig;
