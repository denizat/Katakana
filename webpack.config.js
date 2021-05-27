const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    homepage: "./src/homepage/index.ts",
    options: "./src/options/config.ts",
  },
  target: "web",
  resolve: {
    extensions: [".ts"],
  },
  mode: "production",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        exclude: "/node_modules/",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "src", "homepage", "index.html"),
      chunks: ["homepage"],
    }),
    new HtmlWebpackPlugin({
      filename: "options.html",
      template: path.resolve(__dirname, "src", "options", "options.html"),
      chunks: ["options"],
    }),
    // new webpack.optimize.LimitChunkCountPlugin({
    //   maxChunks: 1,
    // }),
  ],
};
