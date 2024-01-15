import { defineStore } from 'pinia';
import { ref,computed } from 'vue'
// 创建小仓库
const useTodo2Store = defineStore('todo', () => {
	let arr = ref([1,2,3,4,5]);
	const total = computed(() => {
		return arr.value.reduce((prev,next) => {
			return prev + next
		});
	});
	// 务必要返回一个对象：属性与方法可以提供给组件使用
	return {
		total
	}
});
export default useTodo2Store