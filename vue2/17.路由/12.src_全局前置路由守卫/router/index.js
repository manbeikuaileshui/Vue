import VueRouter from 'vue-router'
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'
const router =  new VueRouter({
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About,
            meta: { isAuth: false }  // 为false的也可以不写
        },
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
            children: [
                {
                    name: 'xinwen',
                    path: 'news',
                    component: News,
                    meta: { isAuth: true }
                },
                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    meta: { isAuth: true },
                    children: [
                        {
                            name: 'xiangqing',
                            path: 'detail/:id/:title',
                            component: Detail,

                            // props的第一种写法，值为对象，
                            // 该对象中的所有key- value都会以props的形式传给Detail组件
                            // props: { a: 1, b: 'hello'}

                            // props的第二种写法，值为布尔值,
                            // 若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件
                            // props: true

                            // props的第三种写法，值为函数
                            // props($route) {
                            //     return { id: $route.params.id, title: $route.params.title }
                            // }
                            // 解构赋值1
                            // props({params}) {
                            //     return { id: params.id, title: params.title }
                            // }
                            // 解构赋值2
                            props({params:{ id, title }}) {
                                return { id, title }
                            }
                        }
                    ]
                }
            ]
        }
    ]
})

// 全局前置路由守卫————初始化的时候被调用、每次路由切换之前被调用
router.beforeEach((to, from, next) => {
    // console.log('@', to, from);
    // if (to.path === '/home/news' || to.path === '/home/message') {
    // if (to.name === 'xinwen' || to.name === 'xiaoxi') {
    if (to.meta.isAuth) {  // 判断是否需要鉴权
        if (localStorage.getItem('school') === 'atguigu') {
            next()
        } else {
            alert('学校名不对，无权限查看！！！')
        }
    } else {
        next()
    }
})
export default router