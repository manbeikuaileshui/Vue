// 引入VueRouter
import VueRouter from 'vue-router'
// 引入路由组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail'

// 创建并暴露一个路由器
const router = new VueRouter({
    mode: 'history',
    // mode: 'hash',
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About,
            meta: { isAuth: true, title: '关于' }
        },
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
            meta: { title: '主页' },
            children: [
                {
                    name: 'xinwen',
                    path: 'news',
                    component: News,
                    meta: { isAuth: true, title: '新闻' }
                },
                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    meta: { isAuth: true, title: '消息' },
                    children: [
                        {
                            name: 'xiangqing',
                            // path: 'detail',
                            path: 'detail/:id/:title',
                            component: Detail,
                            meta: { isAuth: true, title: '详情' },
                            beforeEnter(to, from, next) {
                                if (to.meta.isAuth) {
                                    if (localStorage.getItem('school') === 'atguigu') {
                                        next()
                                    } else {
                                        alert('学校名不对，无权限查看！')
                                    }
                                } else {
                                    next()
                                }
                            },

                            // 对象写法
                            // props: { id: '004', title: '消息004'}
                            // 布尔值
                            // props: true
                            // 函数写法
                            // props($route) {
                            //     return { id: $route.params.id, title: $route.params.title}
                            // }
                            // props({params}) {
                            //     return { id: params.id, title: params.title}
                            // }
                            props({ params: { id, title } }) {
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
// router.beforeEach((to, from, next) => {
//     // if(to.path === '/home/news' || to.path === '/home/message') {
//     // if(to.name === 'xinwen' || to.name === 'xiaoxi') {
//     if (to.meta.isAuth) {
//         if (localStorage.getItem('school') === 'atguigu') {
//             next()
//         } else {
//             alert('学校名错误，无权限查看！')
//         }
//     } else {
//         next()
//     }
// })

// 全局后置路由守卫————初始化的时候被调用、每次路由切换之后被调用
router.afterEach((to, from) => {
    document.title = to.meta.title || '硅谷系统'
})

export default router