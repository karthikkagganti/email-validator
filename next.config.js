/** @type {import('next').NextConfig} */
const withImages = require('next-images')
const nextConfig = {
    withImages,
    experimental: {
        serverActions: true,
      },
}

module.exports = nextConfig
