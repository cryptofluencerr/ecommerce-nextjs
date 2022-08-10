/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    MONGO_URI: process.env.MONGO_URI,
    URL: process.env.URL,
  },
};

module.exports = nextConfig;
