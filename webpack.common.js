const path = require("path");

module.exports = {
  entry: path.join(__dirname, "src", "main", "resources", "js", "main.js"),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  resolve: {
    modules: [
      path.join(__dirname, "src", "main", "resources",  "js"),
      path.join(__dirname, "src", "main", "resources"),
      path.join(__dirname, "node_modules")
    ]
  }
};
