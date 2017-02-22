const webpack = require("webpack")
const path = require("path")

const SrcMainDir = path.resolve(__dirname, "src/main/jsx")
const TargetDir = path.resolve(__dirname, "target")


module.exports = {
  entry: path.join(SrcMainDir, "index.jsx"),
  output: {
    path: TargetDir,
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test : /\.jsx?/,
      include : SrcMainDir,
      loader : 'babel-loader'
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve('./node_modules'),
      SrcMainDir
    ]
  }
}
