/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    deviceSizes: [640, 750, 768, 828, 1080, 1200, 1440, 1920, 2048, 3840],
  },
};

module.exports = nextConfig;
