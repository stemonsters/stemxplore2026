import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/webinar-registration',
        destination: '/#webinar-live',
        permanent: false,
      },
    ]
  },
};

export default nextConfig;
