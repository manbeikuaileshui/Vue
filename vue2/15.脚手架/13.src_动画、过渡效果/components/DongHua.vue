<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <!-- <transition :appear="true"> -->
        <!-- <transition name="hello" :appear="true"> -->
        <transition name="hello" appear>
            <h1 v-show="isShow">你好啊！</h1>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'DongHua',
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
    }

    .v-enter-active,
    /* 给tranistion取了名字就不能这么用了 */
    .hello-enter-active {
        animation: atguigu .5s linear;
    }

    .v-leave-active,
    .hello-leave-active {
        animation: atguigu .5s linear reverse;
    }

    @keyframes atguigu {
        from {
            transform: translateX(-100%)
        }
        to {
            transform: translateX(0)
        }
    }
</style>