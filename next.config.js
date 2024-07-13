// @ts-check
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
    unoptimized: true,
  },
  output:"export"
};
