import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    domains: ['res.cloudinary.com'],
    formats: ['image/avif', 'image/webp'],
  }
};

export default nextConfig;
