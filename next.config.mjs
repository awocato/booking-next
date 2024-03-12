/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['r-xx.bstatic.com', 'cf.bstatic.com'],
  },
  variants: {
    extend: {
      display: ['group-hover']
    }
  }
};

export default nextConfig;
