<template>
    <div class="school">
        <h1>学校名称：{{name}}</h1>
        <h1>学校地址：{{address}}</h1>
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
        mounted() {
            // console.log('School', this.$bus)
            this.$bus.$on('hello', (name)=> {
                console.log('我是School组件，收到了数据', name);
            })
        },
        beforeDestroy() {
            this.$bus.$off('hello')
        },
    }
</script>

<style scoped>
    .school {
        padding: 5px;
        background-color: skyblue;
    }
</style>