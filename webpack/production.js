const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "/",
            },
          },
          "css-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "images",
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "style.[contenthash:6].css",
      chunkFilename: "style.[contenthash:6].css",
    }),
  ],
};
