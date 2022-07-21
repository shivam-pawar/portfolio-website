/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["ibrahima-ndaw.com", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;
