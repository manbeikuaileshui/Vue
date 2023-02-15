// 对于axios进行二次封装

// 引入axios
import axios from "axios"

// 引入进度条  start：进度条开始  done：进度条结束
import nprogress from "nprogress"
// 引入进度条样式
import "nprogress/nprogress.css"
// 引入store
import store from '@/store'

// 1. 利用axios对象的方法create，去创建一个axios实例
// request就是axios，只不过可以稍微配置一下
const requests = axios.create({
    // 配置对象
    // 基础路径，发送请求时，自动加上api
    baseURL: '/api',
    // 代表请求超时的时间5s
    timeout: 5000,
})

// 2.请求拦截器：在发请求之前，请求拦截器可以监测到，可以在请求发送出去之前做一些事情
requests.interceptors.request.use((config) => {
    // config：配置对象，对象里面有一个属性很重要，headers请求头
    // 进度条开始动
    nprogress.start()
    // 判断是否有uuid
    if (store.state.detail.uuid_token) {
        // 请求头添加一个字段（userTempId)：和后台老师商量好的
        config.headers.userTempId = store.state.detail.uuid_token
    }
    // 判断是否需要携带token带给服务器
    if (store.state.user.token) {
        config.headers.token = store.state.user.token
    }
    return config
})

// 3.响应拦截器
requests.interceptors.response.use(
    // 成功的回调函数：服务器响应数据回来以后，响应拦截器可以监测到，可以做一些事情
    (res) => {
        // 进度条结束
        nprogress.done()
        return res.data
    },
    // 响应失败的回调函数
    (err) => {
        alert('服务器响应数据失败')
        // return Promise.reject(new Error('faile'))
    }
)

// 对外暴露
export default requests