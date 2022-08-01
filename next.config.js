/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");

const nextConfig = withPWA({
  reactStrictMode: true,
  // swcMinify: true,
  concurrentFeatures: true,
  images: {
    domains: ["media.graphcms.com", "media.graphassets.com"],
  },
  i18n: {
    locales: ["pl"],
    defaultLocale: "pl",
  },
  pwa: {
    dest: "public",
    scope: "/",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
    fallbacks: {
      document: "/pwaOffline",
    },
  },
});

module.exports = nextConfig;
