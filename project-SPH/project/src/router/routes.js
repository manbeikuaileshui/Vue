// 路由配置信息

export default [
    {
        path: '/home',
        component: () => import('@/views/Home'),
        meta: { show: true }
    },
    {
        path: '/login',
        component: () => import('@/views/Login'),
        meta: { show: false }
    },
    {
        path: '/register',
        component: () => import('@/views/Register'),
        meta: { show: false }
    },
    {
        name: "search",
        // 加上?：表示可传可不传params参数
        path: '/search/:keyword?',
        component: () => import('@/views/Search'),
        meta: { show: true },
        // 路由组件传递props数据
        // 布尔值写法：只传递params参数，不会传递query参数
        // props: true,
        // 对象写法：额外给路由组件传递一些props
        // props: { a: 1, b: 2 }
        // 常用函数写法：可以把params参数、query参数，通过props传递给路由组件
        // props($router) {
        //     return { keyword: $router.params.keyword, a: $router.query.a, b: $router.query.b, k: $route.query.k}
        // }
        // props:($router)=>({ keyword: $router.params.keyword, a: $router.query.a, b: $router.query.b, k: $route.query.k})
        // props({params, query}) {
        //     return { keyword: params.keyword, a: query.a, b: query.b, k: query.k}
        // }
        props({ params: { keyword }, query: { k } }) {
            return { keyword: keyword, k: k }
        }
    },
    {
        path: '/detail/:skuid',
        component: () => import('@/views/Detail'),
        meta: { show: true }
    },
    {
        path: '/addcartsuccess',
        name: 'addcartsuccess',
        component: () => import('@/views/AddCartSuccess'),
        meta: { show: true }
    },
    {
        path: '/shopcart',
        component: () => import('@/views/ShopCart'),
        meta: { show: true }
    },
    {
        path: '/trade',
        component: () => import('@/views/Trade'),
        meta: { show: true },
        // 路由独享守卫
        beforeEnter: (to, from, next) => {
            // 去交易页面必须是从购物车页面而来

            if (from.path == '/shopcart') {
                next()
            } else {
                next(false)
            }
        }
    },
    {
        path: '/pay',
        component: () => import('@/views/Pay'),
        meta: { show: true },
        beforeEnter: (to, from, next) => {
            // 去支付页面必须是从交易页面而来
            if (from.path == '/trade') {
                next()
            } else {
                next(false)
            }
        }
    },
    {
        path: '/paysuccess',
        component: () => import('@/views/PaySuccess'),
        meta: { show: true },
    },
    {
        path: '/center',
        component: () => import('@/views/Center'),
        meta: { show: true },
        children: [
            {
                path: 'myorder',
                component: () => import('@/views/Center/MyOrder')
            },
            {
                path: 'grouporder',
                component: () => import('@/views/Center/GroupOrder')
            },
            // 路由重定向
            {
                path: '/center',
                redirect: '/center/myorder'
            }
        ]
    },
    // 重定向，在项目跑起来的时候，访问/，立马让它定向到首页
    {
        // path: '/',
        path: '*',
        redirect: '/home'
    },

    {
        path: '/communication',
        component: () => import('@/views/Communication/Communication'),
        children: [
            {
                path: 'event',
                component: () => import('@/views/Communication/EventTest/EventTest.vue'),
                meta: { isHideFooter: true }
            },
            {
                path: 'model',
                component: () => import('@/views/Communication/ModelTest/ModelTest'),
                meta: { isHideFooter: true }
            },
            {
                path: 'sync',
                component: () => import('@/views/Communication/SyncTest/SyncTest'),
                meta: { isHideFooter: true }
            },
            {
                path: 'attrs-listeners',
                component: () => import('@/views/Communication/AttrsListenersTest/AttrsListenersTest'),
                meta: { isHideFooter: true }
            },
            {
                path: 'children-parent',
                component: () => import('@/views/Communication/ChildrenParentTest/ChildrenParentTest'),
                meta: { isHideFooter: true }
            },
            {
                path: 'scope-slot',
                component: () => import('@/views/Communication/ScopeSlotTest/ScopeSlotTest'),
                meta: { isHideFooter: true }
            },
            // 路由重定向
            // {
            //     path: '/communication',
            //     redirect: '/communication/event'
            // }
        ]
    }
]