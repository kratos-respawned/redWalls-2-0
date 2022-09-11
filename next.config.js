/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  images: {
     minimumCacheTTL: 86400,
    domains: [
      "i.redd.it",
      "preview.redd.it",
      "images.pexels.com",
      "external-preview.redd.it",
    ],
  },
};
