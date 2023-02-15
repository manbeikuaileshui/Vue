<template>
    <div class="demo">
        <h2 class="title">学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
    </div>
</template>

<script>
    export default {
        name: "Student",
        data() {
            return {
                name: '张三',
                sex: '男'
            }
        },
    }
</script>

<style scoped>
    /* 组件中的style最终都会汇总到一个文件里，若有命名冲突，以最后引入组件中的style为准 */
    /* 给style标签加上scoped就可以解决 */
    .demo {
        background-color: orange;
    }
</style>