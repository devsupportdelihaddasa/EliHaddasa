/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ["api.pexels.com", "images.pexels.com"],
//   },
// };
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

// module.exports = nextConfig;
export default nextConfig;
