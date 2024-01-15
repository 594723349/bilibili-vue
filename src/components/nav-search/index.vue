<!--
 * @Description:
 * @Author: gumingchen
 * @Email: 1240235512@qq.com
 * @Date: 2022-02-26 23:20:46
 * @LastEditors: 1836388557
 * @LastEditTime: 2024-01
-->
<template>

  <!-- <el-upload
    class="upload-image"
    :action="action"
    :headers="{
      [tokenKey]: token
    }"
    :show-file-list="false"
    :on-success="successHandle"
    :before-upload="beforeHandle"
    :accept="accept"
    :disabled="disabled"
  >
    <img v-if="url" :src="url" class="avatar" />
    <GIcon v-else name="plus" />
  </el-upload> -->
<div></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    modelValue: {
      type: String
    }
  },
  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.upload-image {
  ::v-deep(.el-upload) {
    position: relative;
    overflow: hidden;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
  }
  ::v-deep(.el-upload:hover) {
    border-color: var(--el-color-primary);
  }
  ::v-deep(.el-icon) {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    text-align: center;
  }
  .avatar {
    width: 100px;
    height: 100px;
    display: block;
  }
}
</style>
