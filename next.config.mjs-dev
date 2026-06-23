/** @type {import('next').NextConfig} */

const state = process.env.NODE_ENV === "production";

const nextConfig = {
  /* config options here */
  output: state ? "export" : "",
  images: { unoptimized: !state },
  basePath: state ? "/FUTURE_FS_1" : "",
  assetPrefix: state ? "/FUTURE_FS_1" : "",
};

export default nextConfig;
