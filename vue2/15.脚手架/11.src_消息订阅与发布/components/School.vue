<template>
    <div class="school">
        <h1>学校名称：{{name}}</h1>
        <h1>学校地址：{{address}}</h1>
    </div>
</template>

<script>
    import pubsub from 'pubsub-js'
    export default {
        name: 'School',
        data() {
            return {
                name: '尚硅谷',
                address: '北京'
            }
        },
        methods: {
            demo(msgName, data) {
                console.log('有人发布了hello消息，hello消息的回调执行了', msgName, data);
            }
        },
        mounted() {
            // this.$bus.$on('hello', (name)=> {
            //     console.log('我是School组件，收到了数据', name);
            // })

            // 方法1
            // this.pubId = pubsub.subscribe('hello', function(msgName, data) {
            //     console.log(this);  // undfine
            //     console.log('有人发布了hello消息，hello消息的回调执行了', msgName, data);
            // })
            // 方法2
            // this.pubId = pubsub.subscribe('hello', (msgName, data)=> {
            //     console.log(this);  // vc
            //     console.log('有人发布了hello消息，hello消息的回调执行了', msgName, data);
            // })
            // 方法3
            this.pubId = pubsub.subscribe('hello', this.demo)
        },
        beforeDestroy() {
            // this.$bus.$off('hello')
            pubsub.unsubscribe(this.pubId)
        },
    }
</script>

<style scoped>
    .school {
        padding: 5px;
        background-color: skyblue;
    }
</style>