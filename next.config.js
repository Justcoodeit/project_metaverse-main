/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
  images: {
    domains: ['res.cloudinary.com', 'ibb.co', 'i.ibb.co'],
  },
};

module.exports = nextConfig;
