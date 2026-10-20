/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ["api.pexels.com", "images.pexels.com"],
//   },
// };
module.exports = {
  // If this line exists, Next.js outputs to "dist" instead of ".next"
  distDir: "dist",
};
const nextConfig = {
  reactStrictMode: false, // Disabling Strict Mode
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
