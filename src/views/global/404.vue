<!--
 * @Description: 404
 * @Author: QAQshift
 * @Date: 2024-01
 * @LastEditors: 1836388557
 * @LastEditTime: 2024-01
 * @FilePath: \bilibili-vue\src\views\global\404.vue
-->

<template>
  <div class="not-found-container">
    <h2 class="status-code">404</h2>
    <p class="describe">抱歉！您访问的页面<em>走丢</em>啦...</p>
    <p class="timeout">
      <em>{{ endTime }}</em
      >秒后自动返回首页
    </p>
    <el-button @click="jump(0)">返回</el-button>
    <el-button type="primary" @click="jump(1)">首页</el-button>
    <look-around class="margin_l-10" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  components: {},
  setup() {
    const router = useRouter()

    const endTime = ref(10)
    const timer = ref(-1)

    watch(endTime, (newVal) => {
      if (newVal === 0) {
        clearTimeout(timer.value)
        router.push({ name: 'home' })
      }
    })

    onMounted(() => {
      timer.value = window.setInterval(() => {
        endTime.value--
      }, 1000)
    })

    const jump = (type:number) => {
      switch (type) {
        case 0:
          router.go(-1)
          break
        case 1:
          router.push({ name: 'home' })
          break
      }
      clearTimeout(timer.value)
    }

    return {
      endTime,
      timer,
      jump
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/sass/_variable.scss';
.not-found-container {
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, 0);
  text-align: center;
  .status-code {
    margin: 20px 0;
    font-size: 10em;
    color: nth($fontColor, 1);
  }
  .describe {
    margin-bottom: 30px;
    font-size: 26px;
    & > em {
      font-style: normal;
      color: nth($warningColor, 1);
    }
  }
  .timeout {
    margin-bottom: 30px;
    font-size: 18px;
    color: nth($fontColor, 1);
    > em {
      margin: 0 10px;
      color: nth($dangerColor, 1);
    }
  }
}
</style>
