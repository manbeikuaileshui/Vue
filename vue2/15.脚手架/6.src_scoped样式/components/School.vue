<template>
    <div class="demo">
        <h2 class="title">学校名称：{{name}}</h2>
        <h2 class="atguigu">学校地址：{{address}}</h2>
    </div>
</template>

<script scoped>
    export default {
        name: 'School',
        data() {
            return {
                name: '尚硅谷',
                address: '北京'
            }
        },
    }
</script>

<style lang="less"> /* style里面的代码使用less写的 */
// <style lang="css"> style里面的代码是用css写的
/* 要运行less的style样式需要安装less-loader */
/* 最新版本安装：npm i less-loader   降版本安装：npm i less-loader@7  安装7的最新版本 */
/* npm view webpack versions 查看webpack版本集合 */
/* npm view less-loader versions 查看less-loader版本集合 */
    .demo {
        background-color: skyblue;
        .atguigu {
            font-size: 40px;
        }
    }
</style>