/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  swcMinify: true,
  // app directory
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
