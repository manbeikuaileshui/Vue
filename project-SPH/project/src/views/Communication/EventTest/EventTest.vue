<template>
  <div>
    <h1>EventTest组件</h1>
    <!-- 原生DOM绑定系统事件 -->
    <button @click="handler">原生DOM绑定原生事件</button>
    <!-- Event1组件：Event1非原生DOM节点，而绑定的click事件并非原生DOM事件，而是一个自定义事件
    @click.native，可以把自定义事件变为原生DOM事件
    当前原生DOMclick事件，其实是给子组件的根节点绑定了点击事件 ---- 利用到了事件的委派 -->
    <Event1 @click.native="handler1" />
    <!-- 原生DOM绑定自定义事件
    给原生DOM绑定自定义事件没有任何意义的，因为没有办法触发$emit函数 -->
    <button @xxx="handler2">原生DOM绑定自定义事件</button>

    <!-- 组件标签 -->
    <Event2 @click="handler3" @xxx="handler3" />
  </div>
</template>

<script type="text/ecmascript-6">
import Event1 from './Event1.vue'
import Event2 from './Event2.vue'
export default {
    name: 'EventTest',
    components: {
        Event1,
        Event2
    },
    methods: {
      // 原生DOMbutton的事件回调
      handler(event) {
        console.log('我是原生DOM事件', event);
      },
      // Event1组件的事件回调
      handler1(event) {
        console.log('我是Event1组件', event);
      },
      // 原生DOM绑定自定义事件
      handler2() {
        console.log('我是原生DOM自定义事件')
      },
      // Event2自定义事件的回调
      handler3(params) {
        console.log('Event3的自定义事件', params)
      }
    }
}
</script>