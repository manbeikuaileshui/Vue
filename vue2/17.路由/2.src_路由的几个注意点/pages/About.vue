<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: "About",
  beforeDestroy() {
    // console.log('About组件即将被销毁了');
  },
    mounted() {
    // console.log('About组件挂载完毕');

    // console.log(this);

    window.aboutRoute = this.$route
    window.aboutRouter = this.$router
    console.log(this.$route);
    console.log(this.$router);
  },
};
</script>

<style>
</style>