const path = require("path");

const config = {

entry: "./index.js",

output: {

  path: path.resolve(__dirname, "dist"),

  filename: "index.js"

},

module: {

  loaders: [

  {
      test:/\.(js|jsx)$/,

      loader: "babel-loader",

      query: {

          presets: ["react", "es2016"]

      }

  }

]
}

};

 

module.exports = config;