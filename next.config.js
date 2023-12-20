/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'icon-library.com',
        },
      ],
    },
  }

module.exports = nextConfig
