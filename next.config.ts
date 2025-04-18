import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
  },
  env : {
    NEXT_PUBLIC_SERVICE_ID : process.env.NEXT_PUBLIC_SERVICE_ID,
    NEXT_PUBLIC_TEMPLATE_ID : process.env.NEXT_PUBLIC_TEMPLATE_ID,
    NEXT_PUBLIC_PUBLIC_KEY : process.env.NEXT_PUBLIC_PUBLIC_KEY,
  }
};

export default nextConfig;
