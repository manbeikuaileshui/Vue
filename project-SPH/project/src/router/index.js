// 配置路由的地方
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
// 使用插件
Vue.use(VueRouter)
// 引入store
import store from '@/store'
Vue.config.productionTip = false

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

// 配置路由
let router = new VueRouter({
    // 配置路由
    routes,
    // 滚动行为：路由跳转时滚动条不正常，y代表的是滚动条在最上方
    scrollBehavior(to, from, savedPosition) {
        return { y: 0 }
    }
})
// 全局前置守卫（在路由跳转之前进行判断）
router.beforeEach(async(to, from, next) => {
    // to：可以获取到你要跳转到哪个路由的信息
    // from：可以获取到你从哪个路由来的信息
    // next：放行函数 写法：next() -- 放行、next('/login') -- 放行到指定的路由当中、next(false)

    // 用户登录了，才会有token，未登录一定不会有token
    let token = store.state.user.token
    // 用户信息
    let name = store.state.user.userInfo.name
    if (token) {
        // 用户已经登录了还想去login（不能去，留在首页）
        if (to.path == '/login' || to.path == '/register') {
            next('/')
        } else {
            // 登陆了，不是去login
            // 登陆了，如果已有用户名
            if (name) {
                next()
            } else {
                try {
                    // 登陆了，没有用户名，派发action让仓库存储用户信息再跳转
                    await store.dispatch('user/getUserInfo')
                    // 再放行
                    next()
                } catch (error) {
                    // token失效了，获取不到用户的信息，需要重新登录
                    // 清除token
                    await store.dispatch('user/userLogout')
                    next('/login')
                }
            }
        }
    } else {
        // 未登录不能访问交易相关（trade）、支付相关（pay、paysuccess）、个人中心（center），直接跳转到登录页面
        // if (to.path == '/trade' || to.path == '/pay' || to.path == '/paysuccess' || to.path == '/center/myorder' || to.path == '/center/grouporder') {
            let toPath = to.path
        if (toPath.indexOf('/trade') != -1 || toPath.indexOf('/pay') != -1 || toPath.indexOf("/center") != -1) {
            // 把未登录的时候想去而没有去成的信息，存储于地址栏中（路由）
            next('/login?redirect=' + toPath)
        } else {
            // 未登录，不是去不能去的页面
            next()
        }
    }
}) 
export default router