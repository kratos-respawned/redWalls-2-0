/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    minimumCacheTTL: 60 * 60 * 24 * 7,
    domains: [
      "i.redd.it",
      "preview.redd.it",
      "images.pexels.com",
      "external-preview.redd.it",
    ],
    // unoptimized: true,
    // path: "/redWalls-2_0",
  },
  // basePath: "/redWalls-2_0",
  // assetPrefix: "/redWalls-2_0",
};
