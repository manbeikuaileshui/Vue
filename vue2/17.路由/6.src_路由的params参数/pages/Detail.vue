<template>
  <ul>
    <li>消息编号：{{$route.params.id}}</li>
    <li>消息标题：{{$route.params.title}}</li>
  </ul>
</template>

<script>
export default {
    name: 'Detail',
    mounted() {
        console.log(this)  // 里面有$route,再有query对象，里面的是传进去的参数
    },
}
</script>