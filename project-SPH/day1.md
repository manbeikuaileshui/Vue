## 一、 vue-cli脚手架初始化项目(所需环境：node + webpack + 淘宝镜像)。
        创建一个项目文件夹，找到文件夹路径，输入cmd，再输入：vue create 项目名称

1. node_modules文件夹：项目依赖文件夹。

2. public文件夹：一般放置一些静态资源(图片)，需要注意，放在public文件夹中的静态资源，webpack进行打包的时候，会原封不动打包到dist文件夹中。

3. src文件夹(程序员源代码文件夹)：

        assets文件夹：一般也是放置静态资源(一般放置多个组件公用的静态资源)，需要注意，放置在assets文件夹里面的静态资源，在
                     webpack打包的时候，webpack会把静态资源当做一个模块，打包到JS文件里面。

        components文件夹：一般放置非路由组件(全局组件)

        App.vue文件：唯一的根组件，Vue当中的组件(.vue)

        mian.js文件：程序入口文件，也是整个程序当中最先执行的文件

4. gitignore文件：git忽略文件

5. babel.config.js文件：配置文件(babel相关)

6. package.json文件：认为项目的“身份证”，记录项目叫做什么、项目当中有哪些依赖、项目怎么运行

7. package-lock.json文件：缓存性文件

8. READNE.md：说明性文件

## 二、 项目的其它配置
1. 项目运行起来的时候，让浏览器自动打开

    ---package.json文件里修改文件

    ```
    "scripts": {
        // "serve": "vue-cli-service serve",  //  原先的
        "serve": "vue-cli-service serve --open --host=localhost",
        "build": "vue-cli-service build",
        "lint": "vue-cli-service lint"
    }
    ```

2. eslint校验功能的关闭

    比如：声明变量但是没有使用eslint校验工具就会报错。
    
    解决方案：在vue.config.js文件中添加：

    ```
    module.exports = {
        // 关闭eslint
        lintOnSave: false
    }
    ```

3. src文件夹简写方法，配置别名(@)

    在jsconfig.json文件中添加：

    ```
    {
        "compilerOptions": {
            "baseUrl": "./",
            "paths": {
                "@/*": [
                    "src/*"
                ]
            },
        "exclude": [
            "node_modules",
            "dist"
        ]
        }
    }
    ```

## 三、项目路由的分析

1. 前端所谓路由：KV键值对。

    key：URL(地址栏中的路径)

    value：相应的路由组件

    注意：项目上中下结构

2. 路由组件：

        Home首页路由组件
        
        Search路由组件
        
        Login登录路由组件
        
        Register注册路由组件

   非路由组件：

        Header组件(首页、搜索页、登录页、注册页)

        Footer组件(首页、搜索页)

## 四、完成非路由组件Header与Footer业务

### 在开发项目的时候：

1. 书写静态页面(HTML + CSS)

2. 拆分组件

3. 获取服务器的数据动态展示

4. 完成相应的动态业务逻辑

5. 使用组件的步骤(非路由组件)

    (1) 创建或者定义组件

    (2) 引入组件

    (3) 注册组件
    
    (4) 使用组件

注意1：创建组件的时候，组件结构 + 组件的样式 + 图片资源

注意2：咱们的项目采用的less样式，浏览器不识别less样式，需要通过less、less-loader进行处理less，把less样式变为css样式，浏览器才可以识别。
```
cnpm install --save less less-loader@6
```

注意3：如果想要组件识别less样式，需要在style标签的身上加上lang=less属性

## 五、路由组件的搭建

安装v-router：cnpm install --save v-router@3

在上面分析的时候，路由组件应该有四个：Home、Search、Login、Register

components文件夹：经常放置非路由组件（共用全局组件）

pages|views文件夹：经常放置路由组件

1. 配置路由：项目当中配置的路由一般放置在router文件夹中

2. 路由组件与非路由组件的区别？

    (1) 路由组件一般放置在pages|views文件夹，非路由组件一般放置在components文件夹中

    (2) 路由组件一般需要在router文件夹中进行注册(使用的即为组件的名字)，非路由组件在使用的时候，一般都是以标签的形式使用

    (3) 注册完路由后，不管路由组件还是非路由组件身上都拥有$route、$router属性

        $route：一般获取路由信息(路径、query、params等等)

        $router：一般进行编程式导航进行路由跳转(push|replace)

3. 路由的跳转(两种形式)

    (1) 声明式导航router-link，可以进行路由的跳转

    (2) 编程式导航push|replace，可以进行路由的跳转

    注意：声明式导航能做的，编程式导航都能做，但是编程式导航除了可以进行路由跳转，还可以做一些其它的业务逻辑

## 六、Footer组件显示与隐藏

    显示或者隐藏组件：v-if|v-show

    Footer组件：在Home、Search显示，在Login、register隐藏

1. 我们可以根据组件身上的$route获取当前路由的信息，通过路由路径判断Footer显示与隐藏

2. 配置路由的时候，可以给路由添加路由元信息（meta），路由需要配置对象，它的key不能瞎写

## 七、路由传参

    声明式导航：router-link（务必要有to属性），可以实现路由的跳转

    编程式导航：利用的是组件实例的$router.push|replace方法，可以实现路由的跳转。（可以书写一些自己的业务逻辑）

1. 路由传参，参数有几种写法？

    (1) params参数：属于路径当中的一部分，需要注意，在配置路由的时候，需要占位（例：在路由中的path: '/search/:title'）

        // 第一种字符串形式
        this.$router.push('/search/' + this.title)
        // 第二种：模板字符串
        this.$router.push(`/search/${this.title}`)
        // 第三种：对象
        this.$router.push({
          name: 'search',
          params: { title: this.title },
        })

    (2) query参数：不属于路径当中的一部分，类似于ajax中的queryString  /home?k=v&k=v，不需要占位

        // 第一种字符串形式
        this.$router.push('/search/?k=' + this.title.toUpperCase())
        // 第二种：模板字符串
        this.$router.push(`/search/?k=${this.title.toUpperCase()}`)
        // 第三种：对象
        this.$router.push({
          name: 'search',
          query: { k: this.title.toUpperCase()}
        })

    (3) 两种方法混合

        // 第一种字符串形式
        this.$router.push('/search/' + this.title + '?k=' + this.title.toUpperCase())
        // 第二种：模板字符串
        this.$router.push(`/search/${this.title}?k=${this.title.toUpperCase()}`)
        // 第三种：对象
        this.$router.push({
          name: 'search',
          params: { title: this.title },
          query: { k: this.title.toUpperCase()}
        })

## 八、路由相关的面试题
1. 路由传递参数(对象写法)path是否可以结合params参数一起使用？

    答：路由跳转传参数的时候，对象的写法可以是name、path形式，但是需要注意的是，path这种写法不能与params参数一起使用。

    ```
    this.$router.push({
        name: 'search',
        params: { title: this.title },
        query: { k: this.title.toUpperCase() }
    })
    ```

2. 如何指定params参数可传可不传？

    比如：配置路由的时候，Search路由组件占位(params参数)，但是路由跳转的时候不传递params参数，路径就会出现问题。

    实际路径：http://localhost:8080/#/?k=query传过来的参数

    理想路径：http://localhost:8080/#/search?k=query传过来的参数

    ```
    this.$router.push({
        name: 'search',
        query: { k: this.title.toUpperCase() }
    })
    ```

    答：在配置路由的时候，在占位的后面加上一个问号（params可以传递参数或者不传参数）

    ```
    {
        name: "search",
        path: '/search/:title?',
        component: Search,
        meta: { show: true }
    }
    ```

3. params参数可以传递也可以不传递，但是如果传递是空串，如何解决？

    比如：params参数如果传递空串，路径会出现问题。

    实际路径：http://localhost:8080/#/?k=query传过来的参数

    理想路径：http://localhost:8080/#/search?k=query传过来的参数

    ```
    this.$router.push({
        name: 'search',
        params: { title: '' },
        query: { k: this.title.toUpperCase()}
    })
    ```

    答：使用undefines解决：params参数可以传递、不传递参数（空的字符串参数）

    ```
    this.$router.push({
        name: 'search',
        params: { title: '' || undefined },
        query: { k: this.title.toUpperCase()}
    })
    ```

4. 路由组件能不能传递props数据？

    答：可以。

    ```
    // 路由组件传递props数据
    // 布尔值写法：只传递params参数，不会传递query参数
    props: true,
    // 对象写法：额外给路由组件传递一些props
    props: { a: 1, b: 2 }
    // 常用函数写法：可以把params参数、query参数，通过props传递给路由组件
    // 普通函数
    props($router) {
        return { title: $router.params.title, a: $router.query.a, b: $router.query.b, k: $route.query.k}
    }
    // 箭头函数
    props:($router)=>({ title: $router.params.title, a: $router.query.a, b: $router.query.b, k: $routquery.k})
    // 解构赋值
    props({params, query}) {
        return { title: params.title, a: query.a, b: query.b, k: query.k}
    }
    // 解构赋值
    props({params:{title}, query:{a, b, k}}) {
        return { title: title, a: a, b: b, k: k}
    }
    ```