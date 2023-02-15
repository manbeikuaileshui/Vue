<template>
  <!-- <transition
    appear
    name="animate__animated animate__bounce"
    enter-active-class="animate__backInDown"
    leave-active-class="animate__backOutDown"
  > -->
  <!-- <transition name="todo" appear> -->
    <li>
      <label>
        <input
          type="checkbox"
          :checked="todo.done"
          @change="handleCheck(todo.id)"
        />
        <span v-show="!todo.isEdit">{{ todo.title }}</span>
        <input
          type="text"
          v-show="todo.isEdit"
          :value="todo.title"
          @blur="handleBlur(todo, $event)"
          ref="inputTitle"
        />
      </label>
      <button class="btn btn-danger" @click="handleDelete(todo.id)">
        删除
      </button>
      <button
        class="btn btn-edit"
        @click="handleEdit(todo)"
        v-show="!todo.isEdit"
      >
        编辑
      </button>
    </li>
  <!-- </transition> -->
</template>

<script>
// import 'animate.css'
import pubsub from "pubsub-js";
export default {
  name: "MyItem",
  props: ["todo"],
  methods: {
    handleCheck(id) {
      this.$bus.$emit("checkTodo", id);
    },
    handleDelete(id) {
      if (confirm("确定要删除吗？")) {
        // this.$bus.$emit('deleteTodo', id)
        pubsub.publish("deleteTodo", id);
      }
    },
    // 编辑
    handleEdit(todo) {
      // 如果todo身上有isEdit
      if (todo.hasOwnProperty("isEdit")) {
        // 判断自身是否有该属性
        todo.isEdit = true;
      } else {
        // 如果todo身上没有
        this.$set(todo, "isEdit", true);
      }
      // setTimeout(() => {
      //   this.$refs.inputTitle.focus()
      // }, 200);
      this.$nextTick(function () {
        this.$refs.inputTitle.focus();
      });
    },
    // 失去焦点回调(真正执行修改逻辑)
    handleBlur(todo, e) {
      todo.isEdit = false;
      if (!e.target.value.trim()) {
        alert("内容不能为空");
      } else {
        this.$bus.$emit("updateTodo", todo.id, e.target.value);
      }
    },
  },
};
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}
li label {
  float: left;
  cursor: pointer;
}
li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}
li button {
  float: right;
  display: none;
  margin-top: 3px;
}
li:before {
  content: initial;
}
li:last-child {
  border-bottom: none;
}
li:hover {
  background-color: #ddd;
}
li:hover button {
  display: block;
}
/* .todo-enter-active {
  animation: atguigu .5s linear;
}
.todo-leave-active {
  animation: atguigu .5s linear reverse;
}
@keyframes atguigu {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
} */
</style>