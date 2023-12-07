/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: "/desafio-meztra-layout/",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
