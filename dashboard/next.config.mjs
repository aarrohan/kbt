/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        pathname: "/a/z7mdi9kmcy/*",
      },
    ],
  },
};

export default nextConfig;
