import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/best-ivf-center-in-nashik',
        destination: '/our-center/best-ivf-center-in-nashik',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
