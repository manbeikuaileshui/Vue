import Vue from 'vue'
import App from './App.vue'
// 引入store
// import store from './store/index'
// 若store文件夹里面有index.js文件，且创建的store在index.js文件里面，可以用下面的写法
import store from './store'

Vue.config.productionTip = false;
const vm = new Vue({
    el: '#app',
    store,
    render: h => h(App)
})
// console.log(vm);  里面有$store