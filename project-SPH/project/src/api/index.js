// 当前这个模块：API进行统一管理
import requests from './axios'
import mockRequests from './mockAjax'
// 三级联动接口
// api/product/getBaseCategoryList get 无参数
// 对外暴露一个函数，只要外部调用这个函数，就向服务器发起ajax请求、获取咱们的三级菜单数据。当前咱们这个函数只需要把服务器返回结果返回即可。
export const reqCategoryList = ()=> requests.get('product/getBaseCategoryList','get')

// 获取banner（Home首页轮播图接口）
export const reqGetBannerList = () => mockRequests.get('/banner')

// 获取floor数据 
export const reqGetFloor = () => mockRequests.get('/floor')

// 获取Search数据 url:/api/list 请求方式:post 参数：需要带参数
// 参数举例
// {
//     "category3Id": "61",
//     "categoryName": "手机",
//     "keyword": "小米",
//     "order": "1:desc",
//     "pageNo": 1,
//     "pageSize": 10,
//     "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
//     "trademark": "4:小米"
// } 
// 当前这个接口，给服务器传递参数params，至少是一个空对象
export const reqGetSearchInfo = (params) => requests({
    url: '/list',
    method: 'post',
    data: params
})

// 获取产品详情信息的接口  URL：/api/item{ skuId }  请求方式：get
export const reqGoodsInfo = (skuId) => requests({
    url: `/item/${skuId}`,
    method: 'get',
})

// 将产品添加到购物车中（获取更新某一个产品的个数）
// /api/cart/addToCart/{skuId}/{skuNum}  post
export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({
    url: `/cart/addToCart/${skuId}/${skuNum}`,
    method: 'post',
})

// 获取购物车中的产品信息
// /api/cart/cartList get
export const reqCartList = () => requests({
    url: '/cart/cartList',
    method: 'get',
})

// 删除购物车中的某个产品
// /api/cart/deleteCart/{skuId} delete
export const reqdeleteCartById = (skuId) => requests({
    url: `/cart/deleteCart/${skuId}`,
    method: 'delete'
})

// 切换商品选中状态
// /api/cart/checkCart/{skuId}/{isChecked} get
export const reqUpdateCheckedById = (skuId, isChecked) => requests({
    url: `/cart/checkCart/${skuId}/${isChecked}`,
    method: 'get'
})

// 获取验证码
// /api/user/passport/sendCode/{phone} get
export const reqGetCode = (phone) => requests({
    url: `/user/passport/sendCode/${phone}`,
    method: 'get'
})

// 注册用户
// /api/user/passport/register post phone code password
export const reqUserRegister = (data) => requests({
    url: '/user/passport/register',
    data,
    method: 'post'
})

// 登录
// /api/user/passport/login  post  phone password
export const reqUserLogin = (data) => requests({
    url: '/user/passport/login',
    data,
    method: 'post'
})

// 添加了token校验获取用户登录信息，用户登录只保存用户的token
// 获取用户的信息（需要带着token向服务器要用户信息）
// /api/user/passport/auth/getUserInfo  get
export const reqUserInfo = () => requests({
    url: '/user/passport/auth/getUserInfo',
    method: 'get'
})

// 退出登录
// /api/user/passport/logout get
export const reqLogout = () => requests({
    url: '/user/passport/logout',
    method: 'get'
})

// 获取用户地址信息
// /api/user/userAddress/auth/findUserAddressList get
export const reqAddressInfo = () => requests({
    url: '/user/userAddress/auth/findUserAddressList',
    method: 'get'
})

// 获取订单交易页面信息
// /api/order/auth/trade get
export const reqOrderInfo = () => requests({
    url: 'order/auth/trade',
    method: 'get'
})

// 提交订单
// /api/order/auth/submitOrder?tradeNo={tradeNo} post tradeNo 
export const reqSubmitOrder = (tradeNo, data) => requests({
    url: `/order/auth/submitOrder?tradeNo=${tradeNo}`,
    data,
    method: 'post'
})

// 获取订单支付信息
// /api/payment/weixin/createNative/{orderId} get orderId
export const reqPayInfo = (orderId) => requests({
    url: `/payment/weixin/createNative/${orderId}`,
    method: 'get'
})

// 查询订单支付状态
// /api/payment/weixin/queryPayStatus/{orderId} get orderId
export const reqPayStatus = (orderId) => requests({
    url: `/payment/weixin/queryPayStatus/${orderId}`,
    method: 'get'
})

// 获取我的订单列表
// /api/order/auth/{page}/{limit} get page limit
export const reqMyOrderList = (page, limit) => requests({
    url: `/order/auth/${page}/${limit}`,
    method: 'get'
})