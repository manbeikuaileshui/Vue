// 导入express
const express = require('express')
// 导入哈希模式引起的404问题所需的库
const history = require('connect-history-api-fallback')

// 创建web服务器
const app = express()
app.use(history())
app.use(express.static(__dirname+'/static'))

// 监听客户端的GET请求
// 参数1：客户端请求的URL地址
// 参数2：请求对应的处理函数
//       req：请求对象(包含了与请求相关的属性与方法)
//       res：响应对象(包含了与响应相关的属性与方法)
app.get('/person', (req, res) => {
    // 向客户端发送JSON对象
    res.send({
        name: 'tom',
        age: 18
    })
})

// 调用app.listen(端口号，启动成功后的回调函数)，启动服务器
app.listen(5005, (err) => {
    if(!err) console.log('服务器启动成功了！');
})