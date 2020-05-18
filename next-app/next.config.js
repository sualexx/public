require("dotenv").config()
const WebpackBar = require("webpackbar")

module.exports = {
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    // Important: return the modified config
    config.plugins.push(new WebpackBar({ profile: true }))
    return config
  },
}
