import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static exports for deployment flexibility
  // Uncomment the line below if you want to export as static HTML
  // output: 'export',

  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },

  // Enable React strict mode for better development
  reactStrictMode: true,

  // Performance and security headers
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
