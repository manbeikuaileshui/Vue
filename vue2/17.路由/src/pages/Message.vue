<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- 字符串传参 -->
        <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">
          {{ m.title }}
        </router-link> -->

        <!-- query传参 -->
        <!-- <router-link
          :to="{
            path: '/home/message/detail',
            query: {
              id: m.id,
              title: m.title,
            },
          }"
          >{{ m.title }}</router-link
        > -->
        
        <!-- parmas传参，跳转路径必须写name -->
        <router-link
          :to="{
            // path: '/home/message/detail',
            name: 'xiangqing',
            params: {
              id: m.id,
              title: m.title,
            },
          }"
          >{{ m.title }}</router-link
        >
        <button @click="pushShow(m)">push查看</button>
        <button @click="replaceShow(m)">replace查看</button>
      </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messageList: [
        { id: "001", title: "消息001" },
        { id: "002", title: "消息002" },
        { id: "003", title: "消息003" },
      ],
    };
  },
  methods: {
    pushShow(m) {
      this.$router.push({
        name: 'xiangqing',
        params: { id: m.id, title: m.title}
      })
    },
    replaceShow(m) {
      this.$router.replace({
        name: 'xiangqing',
        params: { id: m.id, title: m.title}
      })
    }
  },
  beforeDestroy() {
    console.log('Message组件即将被销毁')
  },
};
</script>