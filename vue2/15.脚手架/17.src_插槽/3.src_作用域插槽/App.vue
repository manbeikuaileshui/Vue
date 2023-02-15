<template>
  <div class="container">
    <Category title="游戏">
      <template scope="atguigu">
        <ul>
          <li v-for="(item, index) in atguigu.games" :key="index">
            {{ item }}
          </li>
        </ul>
      </template>
    </Category>
    <Category title="游戏">
      <template scope="atguigu">
        <ol>
          <li v-for="(item, index) in atguigu.games" :key="index" style="color: red">
            {{ item }}
          </li>
        </ol>
        <h4>{{atguigu.msg}}</h4>
      </template>
    </Category>
    <Category title="游戏">
      <!-- 解构赋值 -->
      <!-- <template scope="{games}"> -->
      <!-- 新的写法 -->
      <template slot-scope="{games}">
        <h4 v-for="(item, index) in games" :key="index">{{ item }}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";
export default {
  name: "App",
  components: { Category },
};
</script>

<style>
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
img {
  width: 100%;
}
video {
  width: 100%;
}
h4 {
  text-align: center;
}
.root {
  text-align: center;
  display: block;
}
</style>