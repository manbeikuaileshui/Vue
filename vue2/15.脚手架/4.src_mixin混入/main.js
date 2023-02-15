// 该文件是整个项目的入口文件

import Vue from 'vue'
// import Vue from 'vue/dist/vue'

import App from './App.vue'

// 全局混合
import { hunhe, hunhe2 } from './mixin'
Vue.mixin(hunhe)
Vue.mixin(hunhe2)

Vue.config.productionTip = false

new Vue({
  // el: '#app',
  // 将App组件放入容器中
  render: h => h(App),
  // template: `<App></App>`,
  // components: {App}
}).$mount('#app')
