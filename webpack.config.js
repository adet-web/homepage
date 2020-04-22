const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: ["./src/index.js", "./src/css/styles.scss"],

  output: {
    path: path.resolve(__dirname, "dist"),

    filename: "index.js",
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".scss"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,

        loader: "babel-loader",

        query: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
      {
        test: /\.s[ac]ss$/i,
        loader: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};

module.exports = config;
