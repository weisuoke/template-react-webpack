const path = require("path")
const webpack = require("webpack");
const { merge } = require("webpack-merge")
const parts = require("./webpack.parts")
const paths = require("./config/paths")
const getClientEnvironment  = require('./config/env')

const env = getClientEnvironment(paths.publicUrlOrPath.slice(0, -1));

const commonConfig = merge([
  {
    entry: ["./src"],
    output: {
      path: path.join(__dirname, "dist"),
      filename: "[name].js",
      publicPath: "/"
    },
    resolve: {
      alias: {
        '@': path.resolve('src')
      }
    },
    plugins: [
      new webpack.DefinePlugin(env.stringified)
    ]
  },
  parts.loadJavaScript(),
  parts.page(),
  parts.loadLess(),
  parts.loadCSS(),
  parts.loadPic(),
])

const productionConfig = merge([]);

const developmentConfig = merge([
  parts.devServer()
])

const getConfig = (mode) => {
  switch (mode) {
    case "production":
      return merge(commonConfig, productionConfig, { mode });
    case "development":
      return merge(commonConfig, developmentConfig, { mode });
    case "test":
      return merge(commonConfig, developmentConfig, { mode: 'none' })
    default:
      throw new Error(`Trying to use an unknown mode, ${ mode }`);
  }
}

module.exports = getConfig(process.env.NODE_ENV);
