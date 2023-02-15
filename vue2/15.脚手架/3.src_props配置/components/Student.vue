<template>
    <div>
        <h1>{{msg}}</h1>
        <h2>学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <h2>学生年龄：{{age}}</h2>
        <h2>学生年龄：{{myAge + 1}}</h2>
        <button @click="updateAge">尝试修改收到的年龄</button>
    </div>
</template>

<script>
    export default {
        name: 'Student',
        data() {
            return {
                msg: '我是一个尚硅谷的学生',
                myAge: this.age  // 优先使用传进来的参数
            }
        },
        methods: {
            updateAge() {
                // this.age = 22  // 不建议修改传进来的参数
                this.myAge++
            }
        },
        // 简单声明接收
        // props: ['name', 'sex', 'age']  

        // 接收的同时对数据进行类型限制
        // props: {
        //     name: String,
        //     sex: String,
        //     age: Number
        // }

        // 接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
        props: {
            name: {
                type: String,  // name的类型是字符串型
                required: true  // name是必要的
            },
            age: {
                type: Number,  // age的类型是数字型
                default: 99  // age不是必要的，不传默认99
            },
            sex: {
                type: String,  // sex的类型是字符串型
                required: true  // sex是必要的
            }
        }
}
</script>
