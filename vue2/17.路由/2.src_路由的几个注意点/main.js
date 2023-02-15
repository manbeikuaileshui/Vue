import Vue from 'vue'
import App from './App.vue'
// 引入VueRouter
import VueRouter from 'vue-router'
// 引入路由器
// import router from './router/index.js'
import router from './router'
// 使用路由器
Vue.use(VueRouter)
Vue.config.productionTip = false
new Vue({
    el: '#app',
    render: h => h(App),
    router
})