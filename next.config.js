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
    domains: ["i.scdn.co", "media.licdn.com", ""],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.xx.fbcdn.net",
        port: "",
        pathname: "**"
      }
    ]
  }
};

module.exports = nextConfig;
