<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyWord"
      />
      &nbsp;
      <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import pubsub from 'pubsub-js'
export default {
  name: "Search",
  data() {
    return {
      keyWord: "",
    };
  },
  methods: {
    searchUsers() {
      // 请求前更新List的数据
      pubsub.publish('updateListData', {isFirst: false, isLoading: true, errMsg: '', users: []})
      axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        (response) => {
          // 请求成功后更新List的数据
          pubsub.publish('updateListData', {isLoading: false, errMsg: '', users: response.data.items})
        },
        (error) => {
          // 请求失败后更新List的数据
          pubsub.publish('updateListData', {isLoading: false, errMsg: error.message, users: []})
        }
      );
    },
  },
};
</script>