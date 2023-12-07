/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: "export",
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
