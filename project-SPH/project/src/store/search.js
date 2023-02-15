import { reqGetSearchInfo } from "@/api"
// search模块的小仓库
const state = {
    // 仓库的初始状态
    searchList: {},
}
const mutations = {
    GETSEARCHLIST(state, searchList) {
        state.searchList = searchList
    },
}
const actions = {
    // 获取Search模块数据
    async getSearchList({ commit }, params = {}) {
        // params形参，是当用户派发action的时候，第二个参数传递过来的，只是是一个空对象
        let result = await reqGetSearchInfo(params)
        if (result.code == 200) {
            commit('GETSEARCHLIST',result.data)
        }
    }
}
// 计算属性，在项目当中，是为了简化数据而生
// 可以把将来在组件当中需要用的数据简化一下（将来组件现在获取数据的时候就方便了）
const getters = {
    // 当前形参state是当前仓库中的state，并非大仓库中的那个state
    goodsList(state) {
        // console.log(state);
        // 如果服务器数据回来了，没问题是一个数组
        // 假如网络不给力|没有网，返回的是undefined，所以或上一个数组
        return state.searchList.goodsList || [];
    },
    trademarkList(state) {
        return state.searchList.trademarkList || [];
    },
    attrsList(state) {
        return state.searchList.attrsList || [];
    },
    total(state) {
        return state.searchList.total || 0;
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}