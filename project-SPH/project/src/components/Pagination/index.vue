<template>
  <div class="pagination">
    <!-- 若当前是第一页，则上一页就不能点了 -->
    <button :disabled="pageNo==1" @click="$emit('getPageNo', pageNo-1)">上一页</button>
    <button v-if="startNumAndEnNum.start > 1"  @click="$emit('getPageNo', 1)" :class="{ active: pageNo == 1 }">1</button>
    <button v-if="startNumAndEnNum.start > 2">···</button>

    <template v-for="(page,index) in startNumAndEnNum.end">
      <button :key="index" v-if="page>=startNumAndEnNum.start" @click="$emit('getPageNo', page)" :class="{ active: pageNo == page }">{{page}}</button>
    </template>

    <button v-if="startNumAndEnNum.end < totalPage - 1">···</button>
    <button v-if="startNumAndEnNum.end < totalPage"  @click="$emit('getPageNo', totalPage)"  :class="{ active: pageNo == totalPage }">{{totalPage}}</button>
    <button :disabled="pageNo==totalPage" @click="$emit('getPageNo', pageNo+1)">下一页</button>

    <button style="margin-left: 30px">共 {{total}} 条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  // 父组件传递给子组件的数据： 当前页、每一页展示多少条数据、数据总个数、连续的页码数
  props: [ 'pageNo', 'pageSize','total', 'continues'],
  computed: {
    // 计算出总共多少页
    totalPage() {
      // 向上取整
      return Math.ceil(this.total / this.pageSize)
    },
    // 计算出连续页码的起始数字和结束数字(连续的页码数为5)
    startNumAndEnNum() {
      // 解构赋值，后面使用的时候就不用再加this
      const {continues, pageNo, totalPage} = this
      // 先定义两个变量，存储其实的数字和结束的数字
      let start = 0, end = 0;
      // 连续的页码数为5，也就是说页面至少要有5页
      // 没有5页的情况
      if(continues > totalPage) {
        start = 1;
        end = totalPage;
      } else {
        // 大于等于5页的情况
        // 起始数字
        start = pageNo - parseInt(continues / 2);
        // 结束数字
        end = pageNo + parseInt(continues / 2);
        
        // 假设共31页
        // pageNo = 1, 则 -1 0 1 2 3 不正常
        // pageNo = 2, 则  0 1 2 3 4 不正常
        // pageNo = 3, 则  1 2 3 4 5 正常
        if(start < 1) {
          start = 1;
          end = parseInt(continues);
        }
        // 假设共31页
        // pageNo = 29， 则 27 28 29 30 31 正常
        // pageNo = 30， 则 28 29 30 31 32 不正常
        // pageNo = 31， 则 29 30 31 32 33 不正常
        if(end > totalPage) {
          start = totalPage - continues + 1;
          end = parseInt(totalPage);
        }
      }
      // console.log(start,end);
      return {start,end}
    },
  }
};
</script>

<style lang="less" scoped>
.pagination {
    text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>