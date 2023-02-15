<template>
    <div>
        <h2 @click="showName">学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>

<script>
    // 引入一个hunhe
    // import {hunhe, hunhe2} from '../mixin'
    export default {
        name: 'School',
        data() {
            return {
                name: '尚硅谷',
                address: '北京',
                x: 666  // 覆盖混合的数据
            }
        },

        // methods: {
        //     showName() {
        //         alert(this.name)
        //     }
        // },

        // 局部混合
        // mixins: [hunhe, hunhe2],

        // mounted() {
        //     console.log('你好啊！');
        // }
        mounted() {
            console.log('你好啊！！！！！！！');  // 两个都执行，但是混合里面的先执行
        }
}
</script>
