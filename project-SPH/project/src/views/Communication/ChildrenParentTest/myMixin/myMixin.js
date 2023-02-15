export default {
    // 对外暴露的对象，可以放置组件重复JS业务逻辑
    methods: {
        // 给爸爸钱的回调
        giveMoney(money) {
            // console.log(this.$parent);
            // 需要在子组件内部，获取到父组件，让父组件的钱变多
            // 可以通过$parent属性获取到某一个组件的父组件，可以操作父组件的数据与方法
            this.$parent.money += money
            // 自己的钱减少
            this.money -= money
        }
    },
}