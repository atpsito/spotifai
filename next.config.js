/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"]
    });
    return config;
  },
  images: {
    domains: ["i.scdn.co", "media.licdn.com", "scontent-iad3-2.xx.fbcdn.net"]
  }
};

module.exports = nextConfig;
