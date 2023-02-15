<template>
  <div>
    <!-- <h1 v-upper="msg"></h1> -->
    <Header />
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <!-- 在Home、Search显示，在Login、register隐藏 -->
    <!-- <Footer v-show="$route.path=='/home' || $route.path=='/search'"/> -->
    <Footer v-show="$route.meta.show" />
  </div>
</template>

<script>
import Header from "./components/Header/index.vue";
import Footer from "./components/Footer";

export default {
  name: "App",
  data() {
    return {
      msg: 'abc'
    }
  },
  components: {
    Header,
    Footer,
  },
  mounted() {
    // 派发一个acction||获取商品分类的三级列表的数据
    // 通知vuex发送请求，获取数据，存储于home仓库当中
    this.$store.dispatch("home/categoryList");
  },
};
</script>

<style>
</style>