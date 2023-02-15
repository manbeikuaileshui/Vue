<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <!-- transition里面只能有一个元素，想要多个必须加上group且必须有key属性 -->
        <transition name="hello" appear>
            <h1 v-show="isShow">你好啊！</h1>
        </transition>
        <transition-group name="hello" appear>
            <h1 v-show="!isShow" key="1">你好啊！</h1>
            <h1 v-show="isShow" key="2">尚硅谷</h1>
        </transition-group>
        <transition name="hello" appear>
            <div v-show="isShow">
                <h1>你好啊！</h1>
                <h1>尚硅谷</h1>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'GuoDu',
        data() {
            return {
                isShow: true
            }
        }
    }
</script>

<style scoped>
    h1 {
        background-color: orange;
        /* transition: .5s linear;  写了这个可以省略过渡过程 */  
    }
    /* 进入的起点、离开的终点 */
    .hello-enter,
    .hello-leave-to {
        transform: translateX(-100%);
    }
    /* 进入的过程、离开的过程 */
    .hello-enter-active,
    .hello-leave-active {
        transition: .5s linear;
    }
    /* 进入的终点、离开的起点 */
    .hello-enter-to,
    .hello-leave {
        transform: translateX(0);
    }
</style>