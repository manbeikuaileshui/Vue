<template>
  <div class="spec-preview">
    <!-- <img :src="skuImageList.imgUrl" /> 显示正常，但报错-->
    <img :src="imageObj.imgUrl" />
    <div class="event" @mousemove="handler"></div>
    <div class="big">
      <!-- <img :src="skuImageList.imgUrl" /> 显示正常，但报错-->
      <img :src="imageObj.imgUrl" ref="big" />
    </div>
    <!-- 遮罩层 -->
    <div class="mask" ref="mask" ></div>
  </div>
</template>

<script>
  export default {
    name: "Zoom",
    data() {
      return {
        currIndex: 0
      }
    },
    props: ['skuImageList'],
    // mounted() { 
    //   // 测试父亲给的数据   打印出来是undefined 原因：挂载完毕之后还没要到父亲给的数据，所以skuImageList为undefined，所以skuImageList[0]报错
    //   // 解决方案：父组件传递数据的时候经过计算属性或上一个空数组 打印出来是空数组 原因：挂载完毕之后还没要到父亲给的数据，所以skuImageList为[]，skuImageList[0]为undefined，skuImageList[0].imgUrl报错
    //   // 解决方案：把skuImageList[0]经过计算属性或一个空对象
    //   console.log(this.skuImageList, '父亲给的数据')
    // },
    computed: {
      imageObj() {
        return this.skuImageList[this.currIndex] || {}
      }
    },
    mounted() {
      // 全局事件总线，获取兄弟组件传递过来的索引值
      this.$bus.$on('getIndex', (index) => {
        // 修改当前响应式的数据
        this.currIndex = index
      })
    },
    methods: {
      handler(event) {
        // console.log(event);
        let mask = this.$refs.mask;
        let big = this.$refs.big;
        let left = event.offsetX - mask.offsetWidth / 2;
        let top = event.offsetY - mask.offsetHeight / 2;
        // 约束范围
        if (left < 0) left = 0;
        if (left > mask.offsetWidth) left = mask.offsetWidth;
        if (top < 0) top = 0;
        if (top > mask.offsetHeight) top = mask.offsetHeight;
        // 修改元素的 left | top 属性
        mask.style.left = left + 'px';
        mask.style.top = top + 'px';
        big.style.left = -left * 2 + 'px';
        big.style.top = -top * 2 + 'px';
      }
    },
  }
</script>

<style lang="less">
  .spec-preview {
    position: relative;
    width: 400px;
    height: 400px;
    border: 1px solid #ccc;

    img {
      width: 100%;
      height: 100%;
    }

    .event {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 998;
    }

    .mask {
      width: 50%;
      height: 50%;
      background-color: rgba(0, 255, 0, 0.3);
      position: absolute;
      left: 0;
      top: 0;
      display: none;
    }

    .big {
      width: 100%;
      height: 100%;
      position: absolute;
      top: -1px;
      left: 100%;
      border: 1px solid #aaa;
      overflow: hidden;
      z-index: 998;
      display: none;
      background: white;

      img {
        width: 200%;
        max-width: 200%;
        height: 200%;
        position: absolute;
        left: 0;
        top: 0;
      }
    }

    .event:hover~.mask,
    .event:hover~.big {
      display: block;
    }
  }
</style>