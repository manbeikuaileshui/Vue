<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
        </li>
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
        </li>
      </ul>
      <!-- 里面的所有组件都不进行销毁(缓存所有组件) -->
      <!-- <keep-alive> -->
      <!-- 只不销毁News组件(缓存News组件) -->
      <!-- <keep-alive include="News"> -->
      <!-- 想要多个不被销毁，写成数组(缓存多个组件) -->
      <keep-alive :include="['News', 'Message']">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>