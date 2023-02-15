## 一、编程式路由跳转到当前路由(参数不变)，多次执行会跑出NavigationDuplicated的警告错误？

    路由跳转有两种形式：声明式导航、编程式导航

    声明式导航没有这类问题，因为vue-router底层已经处理好了

1. 为什么编程式导航进行路由跳转的时候，就有这种警告错误呢？

    'vue-router': '^3.6.5'：最新的vue-router引入promise

    通过给push方法传递相应的成功、失败的回调函数，可以捕获到当前错误，解决警告。

```js
    this.$router.push({
        name: 'search',
        // 加上undefined：是为了防止传递的params参数为空的字符串，导致路径出错
        params: { title: this.title || undefined },
    }, ()=>{}, ()=>{})
```

    但是治标不治本，将来在别的组件中有push|replace，编程式导航还是有类似的错误。

    this：当前组件实例

    this.$router属性：当前的这个属性，属性值VueRouter类的一个实例，当在入口文件注册路由的时候，给组件实例添加$router|$route属性

    push：VueRouter.prototype中的一个方法

    根治方法

    重写push|replace方法

```js
    // 先把VueRouter原型对象的push、replace保存一份
    const originPush = VueRouter.prototype.push
    const originReplace = VueRouter.prototype.replace

    // 重写push方法
    // 第一个参数：告诉原来push方法，往哪里跳(传递哪些参数)
    // 第二个参数：成功的回调
    // 第三个参数：失败的回调
    // call||apply区别
    // 相同点：都可以调用函数一次，都可以篡改函数的上下文一次
    // 不同点：call与apply传递参数：call传递参数用逗号隔开，apply方法传递参数用数组
    VueRouter.prototype.push = function (location, resolve, reject) {
        if (resolve && reject) {
            originPush.call(this, location, resolve, reject)
        } else {
            originPush.call(this, location, () => {}, () => {})
        }
    }
    // 重写replace方法
    VueRouter.prototype.replace = function (location, resolve, reject) {
        if (resolve && reject) {
           originReplace.call(this, location, resolve, reject)
        } else {
            originReplace.call(this, location, () => {}, () => {})
        }
    }
```

## 二、Home模块组件拆分

1. 先把静态页面完成、拆分出静态组件、获取服务器的数据进行展示、动态业务

2. 三级联动组件完成

    由于三级联动，在Home、Search、Detail组件都存在，所以把三级联动注册为全局组件

    好处：只需要注册一次，就可以在项目任意地方直接使用，不需要再次引入

```js
    // 注册全局组件
    import TypeNav from '@/pages/Home/TypeNav'
    // 第一个参数：全局组件的名字，第二个参数：哪一个组件
    Vue.component(TypeNav.name, TypeNav)
```

## 三、完成其余静态组件

    HTML + CSS + 图片资源

## 四、POSTMAN测试接口

    最新接口：http://gmall-h5-api.atguigu.cn  /api/product/getBaseCategoryList

    vscode插件Postcode也可以用

    如果服务器返回的数据code字段为200，代表服务器返回数据成功，如果非200则失败

    整个项目，接口前缀都有/api字样

## 五、axios二次封装

    安装axios：cnpm install --save axios

1. 为什么需要进行二次封装axios？

    请求拦截器：可以在发送请求之前处理一些业务

    响应拦截器：当服务器数据返回以后，可以处理一些事情

2. 在项目当中创建API文件夹用来存放关于axios请求的文件

    接口当中：路径都带有/api

```js
    // 对于axios进行二次封装

    import axios from "axios"

    // 1. 利用axios对象的方法create，去创建一个axios实例
    // request就是axios，只不过可以稍微配置一下
    const request = axios.create({
        // 配置对象
        // 基础路径，发送请求时，自动加上api
        baseURL: '/api',
        // 代表请求超时的时间5s
        timeout: 5000,
    })
    
    // 2.请求拦截器：在发请求之前，请求拦截器可以监测到，可以在请求发送出去之前做一些事情
    requests.interceptors.request.use((config) => {
        // config：配置对象，对象里面有一个属性很重要，headers请求头
        return config
    })
    
    // 3.响应拦截器
    requests.interceptors.response.use(
        // 成功的回调函数：服务器响应数据回来以后，响应拦截器可以监测到，可以做一些事情
        (res) => {
            return res.data
        },
        // 响应失败的回调函数
        (error) => {
            return Promise.reject(new Error('faile'))
        }
    )
    
    // 对外暴露
    export default request
```

3. 不会写可以搜axios文档，参考


## 六、接口统一管理

    项目很小：完全可以在组件的声明周期函数中发送请求

    项目很大：axios.get('xxx)

## 七、跨域问题

    什么是跨域？
        
        协议、域名、端口号不同的请求，称之为跨域

        http://localhost:8080/#/home --- 前端项目的本地服务器

        http://gmall-h5-api.atguigu.cn --- 后台服务器

    解决跨域的问题：JSONP、CROS、代理，下面用的是代理：

```js
        module.exports = {
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
```

## 八、nprogress进度条的使用

安装nprogress：cnpm install --save nprogress

```js
// 引入进度条  start：进度条开始  done：进度条结束
import nprogress from "nprogress"
// 引入进度条样式
import "nprogress/nprogress.css"
// 在请求拦截器里面，开启进度条
nprogress.start()
// 在响应拦截器里面，停止进度条
nprogress.done()
```

注意：进度条的颜色是可以修改的，需要修改人家的样式

## 八、vuex状态管理库

1. vuex是什么 ？
    
    vuex是官方提供的一个插件，状态管理库，集中式管理项目中组件公用的数据

    切记，并不是全部项目都需要Vuex，如果项目很小，完全不需要Vuex，如果项目很大，组件很多、数据很多、数据维护很费劲，Vuex

        actions

        mutations

        state

        getters

        modules

    安装Vuex：cnpm install --save vuex

2. vuex基本使用

```js
import Vue from 'vue'
import Vuex from 'vuex'
// 使用Vuex
Vue.use(Vuex)
// state：仓存储数据的地方
const state = {}
// mutations：修改state的唯一手段
const mutations = {}
// actions：处理actions，可以书写自己的业务逻辑，也可以处理异步
const actions = {}
// getters：理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
const getters  = {}

// 对外暴露Store类的一个实例
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
```

3. vuex实现模块式开发

如果项目过大，组件过多，接口也很多，数据也很多，可以让vuex实现模块式开发

```js
// 引入小仓库
import home from './home'
import search from './search'
// 对外暴露Store类的一个实例
export default new Vuex.Store({
    // 实现Vuex仓库模块式开发存储数据
    modules: {
        home,
        search
    }
})
```

```js
// home模块的小仓库
const state = {}
const mutations = {}
const actions = {}
const getters = {}
export default {
    state,
    mutations,
    actions,
    getters
}
```

```js
// search模块的小仓库
const state = {}
const mutations = {}
const actions = {}
const getters = {}
export default {
    state,
    mutations,
    actions,
    getters
}
```

## 九、完成TypeNav三级联动展示数据业务

## 十、完成TypeNav三级联动展示数据业务
