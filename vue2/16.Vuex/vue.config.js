// 默认配置下: 去src文件夹下找入口文件(main.j)
// 不能修改public文件夹名、favicon.ico文件名、index.html文件名、src文件夹名、main.js文件名
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

// 修改src文件夹名的同时，也要修改入口文件的路径
// 创建一个vue.config.js文件，代码如下
module.exports = {
  pages: {
    index: {
      // page 的入口文件
      // entry: '1.src_分析脚手架/main.js'  // 修改路径
      entry: '5.src_mapMutations和mapActions/main.js'  // 修改路径
    }
  },

  lintOnSave: false,  // 关闭语法检查

  // 开启代理服务器(方式一)
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // },
  // 开启代理服务器(方式二)
  devServer: {
    proxy: {
      '/atguigu': {
        target: 'http://localhost:5000',
        pathRewrite: {'^/atguigu':''},  // 重写路径
        ws: true,  // 用于支持websocket
        changeOrigin: true  // 为true则和拿数据的服务器端口相同，
                            // 为false则为给谁代理服务器的端口号(用于控制请求头中的host值)
      },
      '/demo': {
        target: 'http://localhost:5001',
        pathRewrite: {'^/demo':''},
        ws: true,
        changeOrigin: true
      },
    }
  }
}