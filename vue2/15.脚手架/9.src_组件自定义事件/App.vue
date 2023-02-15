<template>
    <div class="app">
        <h1>{{msg}}{{studentName}}</h1>
        <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
        <School :getSchoolName="getSchoolName"/>

        <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第一种写法，使用@或v-on) -->
        <!-- <Student v-on:atguigu="getStudentName" @demo="m1"/> -->
        <!-- <Student @atguigu.once="getStudentName"/> -->

        <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第二种写法，使用ref) -->
        <Student ref="student" @click.native="show"/>
    </div>
</template>

<script>
    import School from './components/School.vue'
    import Student from './components/Student.vue'
    export default {
        name: 'App',
        components: { School, Student},
        data() {
            return {
                msg: '你好啊！',
                studentName: ''
            }
        },
        methods: {
            getSchoolName(name) {
                console.log('App收到了学校名:', name)
            },
            getStudentName(name, ...params) {
                // console.log('App收到了学生名：', name, x, y);
                console.log('App收到了学生名：', name, params);
                this.studentName = name
            },
            m1() {
                console.log('demo事件被触发了');
            },
            show() {
                alert('123')
            }
        },
        mounted() {
            // setTimeout(() => {
            //     this.$refs.student.$on('atguigu', this.getStudentName)
            // }, 3000);
            this.$refs.student.$on('atguigu', this.getStudentName)  // 绑定自定义事件
            // this.$refs.student.$on('atguigu', function(name, ...params) {
            //     this.studentName = name  // 谁触发了atguigu事件this指向谁，这里的this指向的是Student组件，所以失败
            // })  // 绑定自定义事件
            // this.$refs.student.$on('atguigu', (name, ...params) => {
            //     this.studentName = name；  // 箭头函数没有this，只能往外找，所以这里的this指向App组件实例对象
            //     console.log('App收到了学生名：', name, params);
            // })  // 绑定自定义事件
            // this.$refs.student.$once('atguigu', this.getStudentName)  // 绑定自定义事件(一次性)
        },
    }
</script>

<style>
    .app {
        padding: 5px;
        background-color: gray;
    }
</style>