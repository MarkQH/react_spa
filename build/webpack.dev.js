const webpack = require('webpack');
const { merge } = require('webpack-merge');
const path = require('path');

const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
  stats: 'normal',
  target: 'web',
  mode: 'development',
  // 开发环境本地启动的服务配置
  devServer: {
    port: 28000,
    hot: true,
    // hotOnly: true, //强制页面不刷新，使用HMR
    open: false,
    // contentBase: './dist', //设置开启http服务的根目录
    // contentBase: path.join(__dirname,'../dist'), //设置开启http服务的根目录
    historyApiFallback: true,
    // compress: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    // 接口代理转发
    // proxy: {
    //   '/': {
    //     target: 'http://localhost:3000',
    //     changeOrigin: true,
    //     secure: false,
    //   },
    // },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  // plugins: [new webpack.NamedModulesPlugin(), new webpack.HotModuleReplacementPlugin()],
  devtool: 'eval-cheap-module-source-map',
});
