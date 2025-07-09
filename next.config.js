/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // ❌ Remove or comment this
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
