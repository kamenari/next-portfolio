/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
}

module.exports = {
  webpack: function (config) {
      config.module.rules.push({
          test: /\.md$/,
          use: "raw-loader",
      })
      return config
  },
}