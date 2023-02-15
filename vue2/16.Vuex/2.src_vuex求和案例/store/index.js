// 改文件用于创建Vuex中最为核心的store

// 引入Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 使用Vuex插件
Vue.use(Vuex)

// 准备actions —— 用于响应组件中的动作
const actions = {
    // jia: function(context, value) {
    // jia(context, value) {
    //     console.log('actions中的jia被调用了', 'context:', context, 'value:', value);
    //     context.commit('JIA', value)
    // },
    // jian(context, value) {
    //     console.log('actions中的jian被调用了', 'context:', context, 'value:', value);
    //     context.commit('JIAN', value)
    // },
    jiaOdd(context, value) {
        console.log('actions中的jiaOdd被调用了', 'context:', context, 'value:', value);
        if (context.state.sum % 2) {
            context.commit('JIA', value)
        }
    },
    // jiaOdd(context, value) {
    //     console.log('actions中的jiaOdd被调用了，处理了一些事情');
    //     context.dispatch('demo1', value)
    // },
    // demo1(context, value) {
    //     console.log('actions中的demo1被调用了，处理了一些事情');
    //     context.dispatch('demo2', value)
    // },
    // demo2(context, value) {
    //     console.log('actions中的demo2被调用了');
    //     if (context.state.sum % 2) {
    //         context.commit('JIA', value)
    //     }
    // },
    jiaWait(context, value) {
        setTimeout(() => {
            console.log('actions中的jiaWait被调用了', 'context:', context, 'value:', value);
            context.commit('JIA', value)
        }, 500)
    }
}
// 准备mutations —— 用于操作数据(state)
const mutations = {
    JIA(state, value) {
        console.log('mutations中的JIA被调用了', 'state:', state, 'value:', value);
        state.sum += value
    },
    JIAN(state, value) {
        console.log('mutations中的JIAN被调用了', 'state:', state, 'value:', value);
        state.sum -= value
    }
}
// 准备state —— 用于存储数据
const state = {
    sum: 0, // 当前的和
}

// 创建store
// const store = new Vuex.Store({
// 创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state
})