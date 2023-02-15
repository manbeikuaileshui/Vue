<template>
    <div>
        <School/>
        <hr>
        <Student/>
    </div>
</template>

<script>
    import School from './components/School.vue'
    import Student from './components/Student.vue'
    export default {
        name: "App",
        components: {
            School,
            Student
        }
    }
</script>

<style scoped>
    /* 一般不会给App组件这个属性，这样的话就只能在这个文件使用title样式了 */
    .title {
        color: red;
    }
</style>