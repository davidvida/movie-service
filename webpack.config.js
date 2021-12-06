const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  target: "node",
  entry: './index.js',
  output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'app.bundle.js',
  },
  module: {
      rules: [{
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
              presets: [
                  [
                      "@babel/preset-env",
                      {
                          targets: {
                              node: "16.13.0"
                          }
                      }
                  ]
              ]
          }
      }]
  },
  resolveLoader: {
      modules: [
          __dirname + '/node_modules'
      ]
  },
  node: {
      __dirname: false
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, "swagger.yaml") },
        'node_modules/swagger-ui-dist/swagger-ui.css',
        'node_modules/swagger-ui-dist/swagger-ui-bundle.js',
        'node_modules/swagger-ui-dist/swagger-ui-standalone-preset.js',
        'node_modules/swagger-ui-dist/favicon-16x16.png',
        'node_modules/swagger-ui-dist/favicon-32x32.png',
      ],
    }),
  ],
};
