<template>
  <div>
    <h1>组件间通信高级（**非常重要，面试必备**）</h1>
    <router-link to='/communication/event'>event深入</router-link>
    <router-link to='/communication/model'>v-model深入</router-link>
    <router-link to='/communication/sync'>属性修饰符sync</router-link>
    <router-link to='/communication/attrs-listeners'>$attrs与$listeners</router-link>
    <router-link to='/communication/children-parent'>$children与$parent</router-link>
    <router-link to='/communication/scope-slot'>作用域插槽scope-slot</router-link>
    <br/>
    <br/>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Communication",
};
</script>

<style scoped>
    a {
        font-size: 14px;
        margin-right: 20px;
    }
    a:hover {
        color: red;
    }
</style>