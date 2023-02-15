import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
new Vue({
    render: h => h(App),
    // mounted() {
    //     // 3s之后销毁vm
    //     setTimeout(() => {
    //         this.$destroy()
    //     },3000)
    // }
}).$mount('#app')