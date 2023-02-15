<template>
    <div class="student">
        <h1>学生姓名：{{name}}</h1>
        <h1>学生性别：{{sex}}</h1>
        <button @click="sendStudentName">把学生名给School组件</button>
    </div>
</template>

<script>
    export default {
        name: 'Student',
        data() {
            return {
                name: '张三',
                sex: '男',
            }
        },
        mounted() {
            // console.log('Student', this.)
        },
        methods: {
            sendStudentName() {
                this.$bus.$emit('hello', this.name)
            }
        },
    }
</script>

<style scoped>
    .student {
        padding: 5px;
        margin-top: 30px;
        background-color: pink;
    }
</style>