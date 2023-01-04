/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: [
      "i.redd.it",
      "preview.redd.it",
      "images.pexels.com",
      "external-preview.redd.it",
    ],
  },
};
