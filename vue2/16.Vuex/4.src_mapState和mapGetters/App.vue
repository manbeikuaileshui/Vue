<template>
  <div>
    <Count />
  </div>
</template>

<script>
import Count from "./components/Count.vue";
export default {
  name: "App",
  components: { Count },
  // mounted() {
  //   console.log(this);  // 里面有$store
  // },
};
</script>

<style>
</style>