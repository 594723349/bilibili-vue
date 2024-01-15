import { defineStore } from 'pinia';
import { ref } from 'vue'
// 创建小仓库
const useTodoStore = defineStore('todo', () => {
	let todos = ref([{ id: 1, title: '吃饭' }, { id: 2, title: '睡觉' }, { id: 3, title: '打豆豆' }])
	// 务必要返回一个对象：属性与方法可以提供给组件使用
	let updateTodo = ()=>{
		todos.value.push({ id: 4, title: '组合式API方法' });
	}
	return {
		todos,
		updateTodo
	}
});
export default useTodoStore