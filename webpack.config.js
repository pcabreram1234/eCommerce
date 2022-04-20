const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackCopyPlugin = require("copy-webpack-plugin");
const { SubresourceIntegrityPlugin } = require("webpack-subresource-integrity");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "assets/[contenthash][ext][query]",
    publicPath: "/",
    crossOriginLoading: "anonymous",
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        generator: {
          filename: "assets/styles/[contenthash][ext][query]",
          dataUrl: {
            mimetype: "text/html",
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[contenthash][ext][query]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[contenthash][ext][query]",
        },
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    port: 8086,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "assets/styles/[name].[contenthash].css",
    }),
    new WebpackCopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "public", "_redirects"),
          force: true,
        },
      ],
    }),
    new HtmlWebPackPlugin({
      inject: true,
      template: "./public/index.html",
      filename: "./index.html",
    }),

    new SubresourceIntegrityPlugin({}),
  ],
};
