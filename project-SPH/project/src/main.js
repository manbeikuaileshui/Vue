import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from '@/router'
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
// 引入ElementUI组件
import { Button, MessageBox } from 'element-ui';
// 注册全局组件
// 第一个参数：全局组件的名字，第二个参数：哪一个组件
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name, Pagination)
Vue.component(Button.name, Button);
// ElementUI注册组件的时候，还有一种写法，挂在原型上
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
// 引入仓库
import store from '@/store'
// 引入mockServe.js----mock数据
import '@/mock/mockServe'
// 引入swiper样式
import 'swiper/swiper-bundle.min.css'
// 引入插件
import VueLazyload from 'vue-lazyload'
// 引入奥特曼gif
import atm from '@/assets/0.gif'
// 注册插件
Vue.use(VueLazyload, {
  // 懒加载默认的图片
  loading: atm
})
// 引入自定义插件
import myPlugins from '@/plugins/myPlugins'
// 使用自定义插件
Vue.use(myPlugins, {
  name: 'upper'
})
// 引入校验表单的插件
import '@/plugins/validate'

Vue.config.productionTip = false

// 统一接收api文件夹里面去全部请求函数
// 统一引入
import * as API from '@/api'
// console.log(API);
new Vue({
  render: h => h(App),
  // 全局事件总线$bus的配置
  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  // 注册路由：底下的写法KV一致省略V（router小写的）
  // 注册路由信息：当这里书写router的时候，组件身上都拥有$route、$router属性
  router,
  // 注册仓库，组纪检实例的身上会多一个属性$store属性
  store,
}).$mount('#app')
