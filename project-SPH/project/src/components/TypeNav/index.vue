<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <!-- 事件委派|事件委托 -->
      <div @mouseleave="leaveIndex" @mouseenter="enterShow">
        <h2 class="all">全部商品分类</h2>
        <!-- 过渡动画 -->
        <transition name="sort">
          <!-- 三级联动 -->
          <div class="sort" v-show="show">
            <!-- 利用事件委派+编程式导航实现路由的跳转与传递参数 -->
            <div class="all-sort-list2" @click="goSearch">
              <div
                class="item"
                v-for="(c1, index) in categoryList"
                :key="c1.categoryId"
                :class="{ cur: currentIndex == index }"
              >
                <h3 @mouseenter="changeIndex(index)">
                  <a
                    :data-categoryName="c1.categoryName"
                    :data-category1Id="c1.categoryId"
                    >{{ c1.categoryName }}</a
                  >
                </h3>
                <!-- 二级、三级分类 -->
                <div
                  class="item-list clearfix"
                  :style="{ display: currentIndex == index ? 'block' : 'none' }"
                >
                  <div
                    class="subitem"
                    v-for="c2 in c1.categoryChild"
                    :key="c2.categoryId"
                  >
                    <dl class="fore">
                      <dt>
                        <a
                          :data-categoryName="c2.categoryName"
                          :data-category2Id="c2.categoryId"
                          >{{ c2.categoryName }}</a
                        >
                      </dt>
                      <dd>
                        <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                          <a
                            :data-categoryName="c3.categoryName"
                            :data-category3Id="c3.categoryId"
                            >{{ c3.categoryName }}</a
                          >
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
// 最好的引入方式：按需加载
import throttle from "lodash/throttle";
export default {
  name: "TypeNav",
  data() {
    return {
      // 存储用户鼠标移到哪一个一级分类
      currentIndex: -1,
      show: true,
    };
  },
  // 发送请求经常在mounted生命周期函数中进行
  // 组件挂载完毕：可以向服务器发送请求
  mounted() {
    // 当组件挂载完毕，如果不是Home路由组件，让show属性变为false
    if (this.$route.path != "/home") {
      this.show = false;
    }
  },
  computed: {
    ...mapState("home", ["categoryList"]),
    // ...mapState({
    //   categoryList: state => state.home.categoryList,
    // }),
  },
  methods: {
    // 鼠标进入修改响应式数据currentIndex属性
    // 添加了节流
    changeIndex: throttle(function (index) {
      // index:鼠标移到某一个一级分类的元素的索引值
      this.currentIndex = index;
      // console.log("@");
    }, 50),
    // 一级分类鼠标移出的事件回调
    leaveIndex() {
      // 鼠标移出，currentIndex变为-1
      this.currentIndex = -1;
      if (this.$route.path != "/home") {
        // 鼠标移出，show改为false
        this.show = false;
      }
    },
    // 进行路由跳转的方法
    goSearch(event) {
      // 最好的解决方案：编程式导航 + 事件委派
      // 利用事件的委派存在一些问题：
      // 1.把全部的子节点的事件都委派给了父节点，点击a标签的时候，才会进行路由跳转，怎么确定点击的一定是a标签？
      // 2.即使确定点击的是a标签，但又如何区分是一级、二级、三级分类的标签
      let node = event.target; // 可能获取到其它节点
      // 节点有一个dataset属性，可以获取节点的自定义属性与属性值
      // console.log(node.dataset);
      let { categoryname, category1id, category2id, category3id } =
        node.dataset;
      // 如果标签身上拥有categoryname属性，则一定是a标签
      if (categoryname) {
        // alert(categoryname)
        let query = { categoryName: categoryname };
        if (category1id) {
          // console.log('一级分类' + category1id);
          query.category1Id = category1id;
        } else if (category2id) {
          // console.log('二级分类' + category2id);
          query.category2Id = category2id;
        } else {
          // console.log('三级分类' + category3id);
          query.category3Id = category3id;
        }

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
      }
    },
    // 当鼠标移入的时候，让商品分类列表进行展示
    enterShow() {
      if (this.$route.path != "/home") {
        this.show = true;
      }
    },
  },
};
</script>

<style scoped lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          // &:hover {
          //     background-color: skyblue;
          //   }
          h3 {
            line-height: 27px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          // &:hover {
          //   .item-list {
          //     display: block;
          //   }
          // }
        }
        .cur {
          background-color: skyblue;
        }
      }
    }
    // 过渡动画的样式
    // 进入的开始，离开的结束
    .sort-enter {
      height: 0px;
    }
    // 进入和离开的过程
    .sort-enter-active {
      transition: all 0.5s linear;
    }
    // 离开的开始，进入的结束
    .sort-enter-to {
      height: 461px;
    }
  }
}
</style>