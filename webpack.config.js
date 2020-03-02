const path = require("path");

const config = {

entry: "./src/index.js",

output: {

  path: path.resolve(__dirname, "dist"),

  filename: "index.js"

},

module: {

  rules: [

  {
      test:/\.(js|jsx)$/,

      loader: "babel-loader",

      query: {

          presets: ["@babel/preset-env", "@babel/preset-react"]

      }

  }

]
}

};

 

module.exports = config;