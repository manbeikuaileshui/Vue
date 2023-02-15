import Vue from 'vue'
import App from './App.vue'

// 完整引入
// 引入ElementUI组件库
// import ElementUI from 'element-ui'
// 引入ElementUI全部样式
// import 'element-ui/lib/theme-chalk/index.css'
// 应用ElementUI
// Vue.use(ElementUI)

// 按需引入
import { Button, Row, DatePicker, } from 'element-ui';
// 注册全局组件方法一
Vue.component('atguigu-button', Button);
Vue.component('atguigu-row', Row);
Vue.component('atguiguDatePicker', DatePicker);
// 注册全局组件方法二
// Vue.use(Button)
// Vue.use(Row)
// Vue.use(DatePicker)
Vue.config.productionTip = false;
new Vue({
    el: '#app',
    render: h => h(App),
})