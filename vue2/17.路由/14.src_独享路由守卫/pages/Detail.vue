<template>
  <ul>
    <!-- <li>消息编号：{{$route.params.id}}</li> -->
    <li>消息编号：{{id}}</li>
    <!-- <li>消息标题：{{$route.params.title}}</li> -->
    <li>消息标题：{{title}}</li>
    <!-- <li>a: {{a}}</li> -->
    <!-- <li>b: {{b}}</li> -->
  </ul>
</template>

<script>
export default {
    name: 'Detail',
    // 方法一
    // props: [ 'a', 'b' ],
    // 方法二、三
    props: [ 'id', 'title' ],
    // computed: {
    //   id() {
    //     return this.$route.params.id
    //   },
    //   title() {
    //     return this.$route.params.title
    //   }
    // },
    mounted() {
        console.log(this)  // 里面有$route,再有query对象，里面的是传进去的参数
    },
}
</script>