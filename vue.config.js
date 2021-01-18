module.exports = {
  devServer: {
    open: false,
    // host: 'localhost',
    port: 18080,
    https: false,
    // proxy: { // 配置跨域
    //   '/': {
    //     target: 'http://localhost:15030', // 后端服务地址
    //     changOrigin: true, // 允许跨域
    //     pathRewrite: {
    //       '^/': '' // 请求的时候使用这个api就可以
    //     }
    //   }
    // }
  },
  configureWebpack: {
    resolve: {
      alias: {}
    }
  }
}
