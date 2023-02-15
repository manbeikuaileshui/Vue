1. 交易页面完成（商品清单）
动态展示服务器数据完成

2. 提交订单
2.1 先把支付静态组件完成
2.2 点击提交订单的按钮的时候，还需要向服务器发起一次请求（把支付的一些信息传递给服务器）

3. 获取支付信息（不再使用vuex)
3.1 别在生命周期函数中使用async
3.2 获取支付信息

4. elementUI使用 + 按需引入
4.1 按需引入，配置文件发生变化，项目需要重新启动

5. 二维码生成 qrcode

6. 支付业务

7. 个人中心

## 全局守卫
1. 未登录不能访问交易相关（trade）、支付相关（pay、paysuccess）、用户中心（center），直接跳转到登录页面

## 路由独享守卫
1. 只有从购物车界面才能跳转到交易页面（创建订单）
2. 只有从交易页面（创建订单）页面才能跳转到支付页面

## 组件内路由守卫
1. 只有从支付页面才能跳转到支付成功页面

```js
beforeRouteEnter (to, from, next) {
  // 在渲染组件的对应路由被confirm前调用
  // 不！能！获取组件实例 this
  // 因为当守卫执行前，组件实例还没有被创建
}
beforeRouteUpdate(to, from, next) {
  // 在当前路由改变，但是该组件被复用时调用
  // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
  // 由于会渲染同样的Foo组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
  // 可以访问组件实例this
}
beforeRouteLeave (to, from, next) {
  // 导航离开该组件的对应路由时调用
  // 可以访问组件实例this
}
```

## 图片懒加载
https://www.npmjs.com/package/vue-lazyload

## vee-validate 基本使用
1. 插件安装与引入
cnpm i vee-validate@2 --save 安装的插件安装2版本的
import VeeValidate from 'vee-validate
import zh_CN from 'vee-validate/dist/locale/zh_CN'
Vue.use(VeeValidate)

2. 提示信息
```js
VeeValidate.Validator.localize('zh_CN', {
  messages: {
    ...zh_CN.messages,
    is: (field) => `${field}必须与密码相同`  // 修改内置规则的 message，让确认密码和密码相同
  },
  attributes: {  // 给校验的field属性名映射中文名称
    phone: '手机号',
    code: '验证码',
    password: '密码',
    password1: '确认密码',
    isCheck: '协议',
  }
})
```

3. 基本使用
<input
  placeholder="请输入你的号码"
  v-model="phone"
  name="phone"
  v-validate="{ required: true, regex: /^1\d{10}$/ }"
  :class="{ invalid: errors.has('phone') }"
  />
  <span class="error-msg">{{ errors.first("phone") }}</span>

const success = await this.$validator.validateAll()  // 全部表单验证

VeeValidate.Validator.extend('agree', {
  validate: value => {
    return value
  },
  getMessage: field => field + '必须同意'
})