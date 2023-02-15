import { reqAddressInfo, reqOrderInfo } from '@/api'
const actions = {
    // 获取用户地址信息
    async getUserAddress({ commit }) {
        let result = await reqAddressInfo()
        // console.log(result);
        if (result.code == 200) {
            commit('GETUSERADDRESS', result.data)
        }
    },
    // 获取商品清单的数据
    async getOrderInfo({ commit }) {
        let result = await reqOrderInfo()
        // console.log(result);
        if (result.code == 200) {
            commit('GETORDERINFO', result.data)
        }
    }
}
const mutations = {
    GETUSERADDRESS(state, data) {
        state.address = data
    },
    GETORDERINFO(state, orderInfo) {
        state.orderInfo = orderInfo
    } 
}
const state = {
    address: [],
    orderInfo: {}
}
const getters = {}
export default {
    namespaced: true,
    actions,
    mutations,
    state,
    getters
}