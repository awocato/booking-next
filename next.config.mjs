/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'r-xx.bstatic.com' },
      { hostname: 'cf.bstatic.com' },
    ],
  },
};

export default nextConfig;
