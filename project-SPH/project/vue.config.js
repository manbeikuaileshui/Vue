// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

module.exports = {
  // 打包时去除掉map文件
  productionSourceMap: false,

  // 关闭eslint
  lintOnSave: false,

  // 代理跨域
  devServer: {
    proxy: {
      '/api': {
        target: 'http://gmall-h5-api.atguigu.cn', // 代理的地址
        // pathRewrite: { '^/api': '' }
      }
    }
  }
}