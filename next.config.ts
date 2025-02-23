import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Optional, but recommended
  output: 'standalone', // Optional, for better deployment on some platforms like Vercel
}

export default nextConfig;
