<template>
  <div>
    <!-- 商品分类导航已注册为全局组件，不需要再引入 -->
    <TypeNav />

    <!--列表-->
    <ListContainer />

    <!--今日推荐-->
    <Recommend />

    <!-- 商品排行 -->
    <Rank />

    <!-- 猜你喜欢 -->
    <Like />

    <!--楼层-->
    <!-- Floor这个组件：自己在组件内部是没有发请求的，数据是父组件给的 -->
    <Floor v-for="floor in floorList" :key="floor.id" :list="floor"/>

    <!--商标-->
    <Brand />
  </div>
</template>

<script>
// 引入其它组件
import ListContainer from './ListContainer'
import Recommend from './Recommend'
import Rank from './Rank'
import Like from './Like'
import Floor from './Floor'
import Brand from './Brand'
import {mapState} from 'vuex'

export default {
  name: "Home",
  components: {
    ListContainer,
    Recommend, Rank, 
    Like, 
    Floor, 
    Brand
  },
  mounted() {
    // 派发action，获取floor组件
    this.$store.dispatch("home/getFloor")
  },
  computed: {
    ...mapState('home', ['floorList'])
  }
};
</script>