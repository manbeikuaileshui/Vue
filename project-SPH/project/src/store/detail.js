import { reqGoodsInfo, reqAddOrUpdateShopCart } from '@/api'
// 封装游客身份模块uuid -- 生成一个随机字符串（不能在变了）
import { getUUID } from '@/utils/uuid_token'
// detail模块小仓库
const actions = {
    // 获取产品信息的action
    async getGoodInfo({ commit }, skuId) {
        let result = await reqGoodsInfo(skuId)
        if (result.code == 200) {
            commit('GETGOODINFO', result.data)
        }
    },
    // 将产品添加到购物车中 || 修改某一个产品的个数
    async addOrUpdateShopCart({ commit }, { skuId, skuNum }) {
        // 服务器写入数据成功，并没有返回其它的数据，只是返回 code = 200，代表这次操作成功，因此不需要三连环存储数据
        let result = await reqAddOrUpdateShopCart(skuId, skuNum)
        // 当前的这个函数如果执行返回Peomise
        // console.log(result);
        if (result.code == 200) {
            // 代表加入购物车成功
            return 'ok'
        } else {
            // 代表加入购物车失败
            return Promise.reject(new Error('faile'))
        }
    }

}
const mutations = {
    GETGOODINFO(state, goodInfo) {
        state.goodInfo = goodInfo
    }
}
const state = {
    // 仓库的初始状态
    goodInfo: {},
    // 游客临时身份
    uuid_token: getUUID()
}
// 简化数据而生
const getters = {
    // 路径导航简化的数据
    categoryView(state) {
        // state.goodInfo初始状态是一个空对象，空对象的categoryView属性值为undefined，undefined没有categoryName属性，所以报错
        // 原因：是因为组件挂载完毕之后才发请求获取数据，但数据能成功显示到页面，是因为数据返回来的时候已经重新渲染页面了，所以或上一个空对象能够解决此问题
        return state.goodInfo.categoryView || {}
    },
    // 产品信息简化的数据
    skuInfo(state) {
        return state.goodInfo.skuInfo || {}
    },
    // 产品售卖属性简化的数据
    spuSaleAttrList(state) {
        return state.goodInfo.spuSaleAttrList || []
    }
}

export default {
    namespaced: true,
    actions,
    mutations,
    state,
    getters
}