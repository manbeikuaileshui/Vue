<template>
  <div>
    <h2>BABA有存款：{{money}}</h2>
    <button @click="jQFromXM(100)">找小明借钱100</button><br>
    <button @click="JQFromXH(150)">找小红借钱150</button><br>
    <button @click="JQFromAll(200)">找所有孩子借钱200</button><br>
    <!-- ref：获取节点（组件标签） -->
    <!-- 在Vue组件当中可以通过ref获取子组件，就可以进行操作子组件数据与方法 -->
    <Son ref="xm" /><br>
    <Daughter ref='xh' />
  </div>
</template>

<script>
import Son from './Son'
import Daughter from './Daughter'
export default {
    name: 'ChildrenParentTest',
    data() {
      return {
        money: 1000
      }
    },
    methods: {
      // 向小明借钱
      jQFromXM(money) {
        // 父组件的钱数累加100元
        this.money += money
        // console.log(this.$refs.xm);
        // ref可以获取真实DOM节点，当然也可以获取子组件标签（操作子组件的数据与方法）
        this.$refs.xm.money -= money
      },
      // 向小红借钱
      JQFromXH(money) {
        // 父组件的钱数累加150元
        this.money += money
        this.$refs.xh.money -= money
      },
      // 向所有孩子借钱
      JQFromAll(money) {
        this.money += money * 2
        // 组件实例自身拥有一个属性$children，可以获取到当前组件中，全部子组件
        // console.log(this.$children)
        this.$children.forEach(item => {
          item.money -= money
        })

      }
    },
    components: {
      Son,
      Daughter
    }
}
</script>