import { reqCategoryList, reqGetBannerList, reqGetFloor } from "@/api"
// home模块的小仓库
const state = {
    // state中数据默认初始值别瞎写(根据接口返回值初始化)
    categoryList: [],
    // 轮播图的数据
    bannerList: [],
    // floor组件的数据
    floorList: []
}
// console.log(state);
// mutations是唯一修改state的地方
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    },
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList
        // console.log('修改仓库中bannerList数据');
    },
    GETFLOOR(state, floor) {
        state.floorList = floor
    }
}
// action：用户处理派发action的地方，可以书写异步语句、自己逻辑的地方
const actions = {
    // 通过API里面的接口函数调用，向服务器发送请求，获取服务器的数据
    async categoryList({commit}) {
        let result = await reqCategoryList()
        // console.log(result);
        if (result.code == 200) {
            commit('CATEGORYLIST', result.data)
        }
    },
    // 获取首页轮播图的数据
    async getBannerList({ commit }) {
        // console.log('在向服务器发起ajax请求，获取轮播图数据');
        let result = await reqGetBannerList()
        // console.log(result);
        if (result.code == 200) {
            commit('GETBANNERLIST', result.data)
        }
    },
    // 获取floor数据
    async getFloor({commit}) {
        let result = await reqGetFloor()
        // console.log(result);
        if (result.code == 200) {
            commit('GETFLOOR', result.data)
        }
    }
}
// 计算属性
const getters = {}
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}