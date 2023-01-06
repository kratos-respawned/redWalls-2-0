/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    minimumCacheTTL: 60 * 60 * 24 * 7,
    domains: [
      "i.redd.it",
      "preview.redd.it",
      "images.pexels.com",
      "external-preview.redd.it",
    ],
    loader: "akamai",
    path: " ",
  },
  basePath: "/redWalls-2.0",
  assetPrefix: "/redWalls-2.0",
};
