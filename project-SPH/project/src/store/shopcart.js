import { reqCartList, reqdeleteCartById, reqUpdateCheckedById } from '@/api'
const actions = {
    // 获取购物车列表数据
    async getCartList({ commit }) {
        let result = await reqCartList()
        // console.log(result);
        if (result.code == 200) {
            commit('GETCARTLIST', result.data)
        }
    },
    // 删除购物车某一个产品
    async deleteCartListBySkuId({ commit }, skuId) {
        let result = await reqdeleteCartById(skuId)
        if (result.code == 200) {
            // 代表删除购物车某个产品成功
            return 'ok'
        } else {
            // 代表删除购物车某个产品失败
            return Promise.reject(new Error('faile'))
        }
    },
    // 修改购物车某一个产品的选中状态
    async UpdateCheckedById({ commit }, { skuId, isChecked }) {
        let result = await reqUpdateCheckedById(skuId, isChecked)
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    // 删除全部勾选的产品
    // deleteAllCheckedCart(context) {
    deleteAllCheckedCart({ dispatch, getters }) {
        // console.log(context);
        // context：小仓库，commit（提交mutations修改state） getters（计算属性） dispatch（派发action） state（当前仓库数据）
        // 获取购物车中全部的产品（是一个数组）
        let PromiseAll = []
        getters.cartList.cartInfoList.forEach(item => {
            let promise = item.isChecked == 1 ? dispatch('deleteCartListBySkuId', item.skuId) : ''
            // 将每一次返回的Promise添加到数组当中
            PromiseAll.push(promise)
        })
        // console.log(Promise.all(PromiseAll));
        return Promise.all(PromiseAll)
    },
    // 修改全选按钮的状态
    updateAllCartIsChecked({dispatch, state}, isChecked) {
        // console.log(state, isChecked);
        let PromiseAll = []
        state.cartList[0].cartInfoList.forEach(item => {
            let promise = item.isChecked == isChecked ? '' : dispatch('UpdateCheckedById', {skuId: item.skuId, isChecked: isChecked})
            // 将每一次返回的Promise添加到数组当中
            PromiseAll.push(promise)
        })
        return Promise.all(PromiseAll)
    }
}
const mutations = {
    GETCARTLIST(state, cartList) {
        state.cartList = cartList
    }
}
const state = {
    cartList: []
}
const getters = {
    cartList(state) {
        return state.cartList[0] || {}
    }
}
export default {
    namespaced: true,
    actions,
    mutations,
    state,
    getters
}