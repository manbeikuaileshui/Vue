<template>
  <div>
    <!-- 可以巧妙的利用a标签实现按钮带有提示功能 -->
    <a :title="$attrs.title">
        <!-- 下面这种写法，v-bind不能用:，v-on不能用@ -->
        <el-button v-bind="$attrs" v-on="$listeners"></el-button>
    </a>
  </div>
</template>

<script>
export default {
    name: 'HintButton',
    // props: ['type', 'icon', 'size', 'title'],
    mounted() {
        // $attrs属于组件的一个属性，可以获取到父组件传递过来的props数据
        // 对于子组件而言，父组件给的数据可以利用props接收，但是如果子组件通过props接收的属性，在$attr属性中是获取不到的
        console.log(this.$attrs)
        // $$listeners，它也是组件实例自身的一个属性，它可以获取到父组件给子组件传递的自定义事件
        console.log(this.$listeners)
    },
}
</script>
