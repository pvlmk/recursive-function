const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const images = {
  test: /\.(png|svg|jpg|jpeg|gif)$/i,
  use: [
    {
      loader: "url-loader",
      options: {
        limit: 10 * 1024,
        name: "[name].[ext]",
        outputPath: "assets/img",
        publicPath: "../assets/img",
      },
    },
  ],
};

const style = {
  test: /\.s[ac]ss$/i,
  use: [
    MiniCssExtractPlugin.loader,
    "css-loader",
    "sass-loader",
    "postcss-loader",
  ],
};

const ts = {
  test: /\.tsx?$/,
  use: "ts-loader",
  exclude: /node_modules/,
};

module.exports = [images, style, ts];
