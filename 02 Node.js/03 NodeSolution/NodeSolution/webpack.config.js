const path = require("path");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts"]
  },
  output: {
    filename: "bundle.js",
    // path: path.resolve(__dirname, "./dist/")
    path: path.resolve(__dirname, "./Layouts/NodeSolution/dist/")
  }
};
