<template>
    <div class="school">
        <h1>学校名称：{{name}}</h1>
        <h1>学校地址：{{address}}</h1>
        <button @click="sendSchoolName">把学校名给App</button>
    </div>
</template>

<script>
    export default {
        name: 'School',
        data() {
            return {
                name: '尚硅谷',
                address: '北京'
            }
        },
        props: ['getSchoolName'],
        methods: {
            sendSchoolName() {
                this.getSchoolName(this.name)
            }
        },
    }
</script>

<style scoped>
    .school {
        padding: 5px;
        background-color: skyblue;
    }
</style>