// 该文件是整个项目的入口文件

import Vue from 'vue'
// import Vue from 'vue/dist/vue'

import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  // el: '#app',
  // 将App组件放入容器中
  render: h => h(App),
  // template: `<App></App>`,
  // components: {App}
}).$mount('#app')
