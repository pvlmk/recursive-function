const TerserWebpackPlugin = require("terser-webpack-plugin");
const development = require("./webpack/development");
const production = require("./webpack/production");
const plugins = require("./webpack/plugins");
const rules = require("./webpack/rules");
const path = require("path");

const isDevelopment = process.env.NODE_ENV === "development";
const isProduction = process.env.NODE_ENV === "production";

const switchableConfig =
  (isDevelopment && development) || (isProduction && production);

module.exports = {
  ...switchableConfig,
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    contentBase: "./dist",
    hot: true,
    historyApiFallback: true,
  },
  optimization: { minimizer: [new TerserWebpackPlugin()] },
  plugins,
  module: {
    rules,
  },
};
