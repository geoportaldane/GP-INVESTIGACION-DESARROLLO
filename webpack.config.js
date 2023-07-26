const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");
// const devMode = process.env.NODE_ENV !== "production";

module.exports = {
    mode: "production",
    entry: path.resolve(__dirname, './src/index.js'),
    devtool: "source-map",
    module: {
        rules: [
          {
             test: /\.(js|jsx)$/,
             exclude: /node_modules/,
             use: ['babel-loader']
          },
          {
            test: /\.(s(a|c)ss)$/,
            use: [
              {
              loader: MiniCssExtractPlugin.loader,
                options: {
                publicPath: "../",
                },
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                },
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true,
                },
              },
            ]
          },
          {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            use: [{loader: 'url-loader?limit=10000&mimetype=application/font-woff'}]
          },
          {
            test: /\.(ttf|otf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?|(jpg|gif)$/,
            use: [{loader: "file-loader?name=img/[name].[ext]"}]
          },
          { 
            test: /\.(png|jpg)$/, use: [{loader: "file-loader?name=img/[name].[ext]"}] 
          },
          {
            test: /slick\.css$/,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /slick-theme\.css$/,
            use: ['style-loader', 'css-loader'],
          },
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: "[name].css",
      chunkFilename: "[id].css",
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
    new CopyPlugin({
      patterns: [
        { from: "./public/index.html", to: "./" },
      ],
    }),
    ],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },
    devServer: {
        static: path.join(__dirname, './dist'),
        compress: true,
        port: 9000,
        hot: true,
        allowedHosts: '*'
      },
};