<template>
  <div>
    <h2>自定义带Hover提示的按钮</h2>
    <!-- 当用户在使用我们封装的按钮的时候，需要向HintButton组件传递相应的参数（el-button进行二次封装） -->
    <HintButton type="success" icon="el-icon-delete" size="mini" title="提示按钮" @click="handler" />
  </div>
</template>

<script type="text/ecmascript-6">
import HintButton from './HintButton'
export default {
    name: 'AttrsListenersTest',
    methods: {
      // 点击事件的回调
      handler() {
        alert(666)
      }
    },
    components: {
      HintButton
    }
}
</script>