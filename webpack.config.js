module.exports = {
  entry: "./src/index.coffee",
  output: {
    path: __dirname,
    filename: "main.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.coffee$/, loader: "coffee" }
    ]
    
  },
  resolve: {
	  extensions: ["", ".web.coffee", ".web.js", ".coffee", ".js"]
  }
};