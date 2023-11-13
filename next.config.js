/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "down-ph.img.susercontent.com" }],
  },
};

module.exports = nextConfig;
