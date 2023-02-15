## 一、完成以及分类动态添加背景颜色

1. 采用样式完成（找到相应的类名里面写）

```css
    &:hover {
        background-color: skyblue;
    }
```

2. 通过JS完成

## 二、通过JS控制二三级商品分类的显示与隐藏

1. 最开始的时候，是通过CSS样式display: block|none显示与隐藏二三级商品分类

2. 通过JS控制：
    ```css
    :style="{display: currentIndex == index? 'block': 'none'}"
    ```

## 三、演示卡顿现象

1. 正常：事件触发非常频繁，而且每一次的触发，回调函数都要去执行(如果时间很短，而回调函数内部有计算，那么可能出现浏览器卡顿)

2. 节流：在规定的间隔时间范围内不会重复触发回调，只有大于这个时间间隔才会触发回调，把频繁触发变为少量触发

    ```html
    <div>
        <h1>我是计数器<span>0</span></h1>
        <button>点击我+1</button>
    </div>
    <div>
        <h1>我是计数器<span>0</span></h1>
        <button>点击我+1</button>
    </div>
    <script>
        // 节流：在规定的间隔时间范围内不会重复触发回调，只有大于这个时间间隔才会触发回调，把频繁触发变为少量触发
        // 获取节点
        let btns = document.querySelectorAll('button')
        let spans = document.querySelectorAll('span')
        let count1 = 0
        let count2 = 0
        btns[0].onclick = function() {
            count1++;
            spans[0].innerHTML = count1
        }
        btns[1].onclick = _.throttle(function() {
            count2++;
            spans[1].innerHTML = count2
        }, 1000)
    </script>
    ```

3. 防抖：前面的所有的触发都被取消，最后一次执行在规定的时间之后才会触发，也就是说如果连续快速的触发，只会执行一次

    ```html
    请输入内容1：<input type="text">
    请输入内容2：<input type="text">
    <script>
        // 防抖：前面的所有的触发都被取消，最后一次执行在规定的时间之后才会触发，也就是说如果连续快速的触发，只会执行一次
        let inputs = document.querySelectorAll('input')
        // 文本发生变化立即执行
        inputs[0].oninput = function() {
            console.log('发送AJAX请求1');
        }
        // 输入完成后间隔规定时间后发送请求 lodash插件
        inputs[1].oninput = _.debounce(function() {
            console.log('发送AJAX请求2');
        }, 1000)
    </script>
    ```

区别：

    防抖：用户操作很频繁，但是只是执行一次

    节流：用户操作很频繁，但是把频繁的操作变为少量的操作（可以给浏览器有充裕的时间解析代码）

## 四、完成三级联动节流的操作

    按需引入：
```js
    import throttle from 'lodash/throttle'
    // 方法的写法
    changeIndex: throttle(function(index) {
      // index:鼠标移到某一个一级分类的元素的索引值
      this.currentIndex = index;
      console.log("@");
    }, 50)
```

## 五、三级联动组件的路由跳转与传递参数

1. 三级联动用户可以点击的：一级分类、二级分类、三级分类，当你点击的时候Home模块跳转到Search模块，以及会把用户选中的产品
    
    (产品的名字、产品的ID)在路由跳转的时候，进行传递。

2. 三级联动：如果使用声明式导航router-link，可以实现路由的跳转与传递参数，但是出现了卡顿现象。

    原因：router-link：是一个组件，当服务器的数据返回之后，循环出很多router-link组件，创建组件实例的时候，一瞬间创建很多的
    
    组件，很消耗内存，因此出现卡顿现象

3. 最好的解决方案：编程式导航 + 事件委派

``` js
    goSearch(event) {
      // 利用事件的委派存在一些问题：
      // 1.把全部的子节点的事件都委派给了父节点，点击a标签的时候，才会进行路由跳转，怎么确定点击的一定是a标签？
      // 2.即使确定点击的是a标签，但又如何区分是一级、二级、三级分类的标签
      let element = event.target  // 可能获取到其它节点
      // 节点有一个dataset属性，可以获取节点的自定义属性与属性值
      // console.log(element.dataset);
      let {categoryname, category1id, category2id, category3id} = element.dataset
      // 如果标签身上拥有categoryname属性，则一定是a标签
      if(categoryname) {
        // alert(categoryname)
        // 整理路由跳转的参数
        let location = {name: 'search'}
        let query = {categoryName: categoryname}
        if(category1id) {
          // console.log('一级分类' + category1id);
          query.category1Id = category1id
        } else if(category2id) {
          // console.log('二级分类' + category2id);
          query.category2Id = category2id
        } else {
          // console.log('三级分类' + category3id);
          query.category3Id = category3id
        }
        // 整理完参数
        location.query = query
        // console.log(location);
        // 路由跳转
        this.$router.push(location)
      }
    }
```
