<template>
    <div>
        <h2 @click="showName">学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
    </div>
</template>

<script>
    // 引入一个hunhe
    // import {hunhe, hunhe2} from '../mixin'
    export default {
        name: 'Student',
        data() {
            return {
                name: '张三',
                sex: '男'
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
}
</script>
