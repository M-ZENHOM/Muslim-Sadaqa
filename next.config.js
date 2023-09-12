const isProduction = process.env.NODE_ENV === "production";

const withPWA = require("next-pwa");

const nextConfig = (module.exports = {});
module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: !isProduction,
  },
});

module.exports = nextConfig;
