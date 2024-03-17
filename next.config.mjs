/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.dummyjson.com"],
  },
  // env: {
  //   BASE_URL: process.env.NEXT_PUBLIC_API_URL,
  // },
};

export default nextConfig;
