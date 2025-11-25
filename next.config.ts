import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  trailingSlash: true,
  output: 'standalone',
  async redirects() {
    return [
      {
        source: '/best-ivf-center-in-nashik',
        destination: '/our-center/best-ivf-center-in-nashik',
        permanent: true,
      },
      {
        source: '/ivf-center-thane',
        destination: '/our-center/best-ivf-center-in-thane',
        permanent: true,
      },
      {
        source: '/ivf-center-in-pune',
        destination: '/our-center/best-ivf-center-in-pune',
        permanent: true,
      },
      {
        source: '/best-ivf-center-in-panvel',
        destination: '/our-center/best-ivf-center-in-panvel',
        permanent: true,
      },
      {
        source: '/best-ivf-center-in-jalgaon',
        destination: '/our-center/best-ivf-center-in-jalgaon',
        permanent: true,
      },
      {
        source: '/best-ivf-center-in-vashi',
        destination: '/our-center/best-ivf-center-in-vashi',
        permanent: true,
      },
      {
        source: '/ivf-center-in-virar',
        destination: '/our-center/best-ivf-center-in-virar',
        permanent: true,
      },
      {
        source: '/ivf-center-in-andheri',
        destination: '/our-center/best-ivf-center-in-andheri',
        permanent: true,
      },
      {
        source: '/best-ivf-center-kalyan',
        destination: '/our-center/best-ivf-center-in-kalyan',
        permanent: true,
      },
      {
        source: '/our-center/kolhapur',
        destination: '/our-center/best-ivf-center-in-kolhapur',
        permanent: true,
      },
      {
        source: '/ivf-center-in-ghatkopar',
        destination: '/our-center/best-ivf-center-in-ghatkopar',
        permanent: true,
      }
    ];
  },
};

export default nextConfig;
