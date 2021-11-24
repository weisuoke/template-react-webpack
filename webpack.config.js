const path = require("path")
const { merge } = require("webpack-merge")
const parts = require("./webpack.parts")

const commonConfig = merge([
  {
    entry: ["./src"],
    output: {
      path: path.join(__dirname, "dist"),
      filename: "[name].js",
      publicPath: "/"
    }
  },
  parts.loadJavaScript(),
  parts.page(),
  parts.loadLess(),
  parts.loadCSS()
])

const productionConfig = merge([]);

const developmentConfig = merge([
  parts.devServer()
])

const getConfig = (mode) => {
  console.log(mode)
  switch (mode) {
    case "production":
      return merge(commonConfig, productionConfig, { mode });
    case "development":
      return merge(commonConfig, developmentConfig, { mode });
    default:
      throw new Error(`Trying to use an unknown mode, ${ mode }`);
  }
}

module.exports = getConfig(process.env.NODE_ENV);
