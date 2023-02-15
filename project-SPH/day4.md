## 一、复习

1. 商品分类的三级列表由静态变为动态形式（获取服务器数据、解决跨域问题）

2. 函数防抖与节流（面试常问）

3. 路由跳转：声明式导航（router-link)、编程式导航

    编程式导航解决这个问题需要用到自定义属性

## 二、开发Search模块中的TypeNav商品分类菜单（过渡动画效果）

1. 过渡动画：前提组件|元素务必要有v-if|v-show指令才可以进行过渡动画

```less
    // 进入的开始，离开的结束
    v-enter,
    v-leave-to {
      height: 0px;
    }
    // 进入和离开的过程
    v-enter-active,
    v-leave-active {
      transition: all .5s linear;
    }
    // 离开的开始，进入的结束
    v-enter-to,
    v-leave {
      height: 461px;
    }
```

2. 优化商品分类的三级列表（首页从数据库拿数据渲染三级列表，搜索页也是这样，需要优化）

解决方案：把请求资源的代码放在App组件的mounted里面，mounted只会执行一次

## 三、合并params与query参数

问题1、2解决方案：在发起请求之前判断一下是否还有其它参数

1. 点击目录（传了query参数），再点击搜索（query参数没了，只有params参数）

```js
  // 整理路由跳转的参数
  let loction = { name: "search" };
  // 动态给location配置对象添加query属性
  loction.query = query;
  // 判断：路由跳转是否带有params参数，若有，也要传递过去
  // if (this.$route.params) {
    loction.params = this.$route.params
  // }
  // 路由跳转
  this.$router.push(loction);
```

2. 点击搜索（传了params参数），再点击目录（params参数没了，只有query参数）

```js
  let loction = {name: 'search', params: { keyword: this.keyword || undefined}}
  // 判断：路由跳转是否带有query参数，若有，也要传递过去
  // if(this.$route.query) {
    loction.query = this.$route.query
  // }
  // 路由跳转
  this.$router.push(loction)
```

## 四、开发Home首页当中的ListContainer组件与Floor组件

注意：服务器返回的数据（接口）只有商品分类菜单数据，对于这两个组件的数据是没有的

    mock数据（模拟）：如果你想mock数据，需要用到一个插件mockjs

    安装：cnpm install mockjs --save

使用步骤：
 
1. 在src文件夹中创建一个mock文件夹存放假数据

2. 准备JSON数据（mock文件夹中创建相应的JSON文件）

3. 把mock数据需要的图片放置到public文件夹中（public文件夹在打包的时候，会把相应的资源原封不动打包到dist文件夹中）

4. mock文件夹中创建mockServe.js通过mockjs插件实现模拟数据

5. mockServe.js文件在入口文件中引入（至少需要执行一次，才能模拟数据）

## 五、ListContainer组件开发重点

安装Swiper插件：cnpm install --save swiper

去Swiper插件中文网站查看如何使用