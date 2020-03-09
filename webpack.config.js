const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: ["./src/index.js", "./src/css/styles.scss"],

  output: {
    path: path.resolve(__dirname, "dist"),

    filename: "index.js"
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,

        loader: "babel-loader",

        query: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader", // CSS objects support in JS
          "css-loader", // CSS -> CommonJS
          "sass-loader" // Sass -> CSS
        ]
      }
    ]
  },
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};

module.exports = config;
