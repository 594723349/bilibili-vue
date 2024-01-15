<script setup lang="ts">
// import HelloWorld from '@/components/HelloWorld.vue'
import useTodoStore from '@/store/modules/todo';
// 引入组合式API函数仓库
let todoStore =useTodoStore();

const updateTodo = () => {
	todoStore.updateTodo();
}
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <p @click="updateTodo">{{todoStore.todos}}</p>
  <HelloWorld msg="Vite + Vue" />
  <el-button></el-button>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
