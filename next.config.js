/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  images: {},
};

module.exports = nextConfig;
