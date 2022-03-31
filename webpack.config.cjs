/* eslint-disable @typescript-eslint/no-var-requires */
const ribaWebpackConfig = require("@ribajs/webpack-config");
const webpackConfig = ribaWebpackConfig({
  publicPath: "./dist/assets",
  template: "local",
});
module.exports = webpackConfig;
