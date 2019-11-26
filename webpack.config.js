const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const SRC_DIR = path.resolve(__dirname, "src");
const DIST_DIR = path.resolve(__dirname, "dist");

module.exports = {
  entry: {
    main: path.resolve(SRC_DIR, "index" ),
    helloWorld: path.resolve(SRC_DIR, "HelloWorld/index" ),
    introduction: path.resolve(SRC_DIR, "Introduction/index" ),
    rendering: path.resolve(SRC_DIR, "Rendering/index" ),
    components: path.resolve(SRC_DIR, "Components/index" ),
  },
  output: {
    path: DIST_DIR,
    filename: "[name].js",
    chunkFilename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /.js(x?)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /.css$/,
        exclude: /node_modules/,
        loader: [ "style-loader", "css-loader" ]
      }
    ]
  },
  // devtool: 'source-map',
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ 
      title: "Sample Project",
      filename: "index.html",
      template: path.resolve(SRC_DIR, "index.html"),
      chunks: [ "main" ]
    }),
    new HtmlWebpackPlugin({
      title: "Hello React",
      filename: "helloWorld.html", 
      template: path.resolve(SRC_DIR, "HelloWorld/index.html"),
      chunks: [ "helloWorld" ]
    }),
    new HtmlWebpackPlugin({
      title: "Introduction JSX",
      filename: "introduction.html", 
      template: path.resolve(SRC_DIR, "Introduction/index.html"),
      chunks: [ "introduction" ]
    }),
    new HtmlWebpackPlugin({
      title: "Rendering Components",
      filename: "rendering.html", 
      template: path.resolve(SRC_DIR, "Rendering/index.html"),
      chunks: [ "rendering" ]
    }),
    new HtmlWebpackPlugin({
      title: "Components Lifecycle",
      filename: "components.html", 
      template: path.resolve(SRC_DIR, "Components/index.html"),
      chunks: [ "components" ]
    }),
  ],
  devServer: {
    host: 'localhost',
    port: 3000,
  }
};