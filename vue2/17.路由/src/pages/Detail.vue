<template>
  <ul>
    <!-- <li>消息编号：{{$route.query.id}}</li> -->
    <!-- <li>消息标题：{{$route.query.title}}</li> -->
    <!-- <li>消息编号：{{$route.params.id}}</li> -->
    <!-- <li>消息标题：{{$route.params.title}}</li> -->
    <li>消息编号：{{id}}</li>
    <li>消息标题：{{title}}</li>
  </ul>
</template>

<script>
export default {
    name: 'Detail',
    // computed: {
    //   id() {
    //     return this.$route.params.id
    //   },
    //   title() {
    //     return this.$route.params.title
    //   }
    // }
    props: [ 'id', 'title' ]
}
</script>