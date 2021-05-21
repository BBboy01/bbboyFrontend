<template>
  <div>
    <el-tabs :tab-position="tabPosition">
      <el-tab-pane label="笔记点击量"><slot name="visits" /></el-tab-pane>
      <el-tab-pane label="笔记类别占比"
        ><slot name="category-ratio"
      /></el-tab-pane>
      <el-tab-pane label="上传笔记"><slot name="upload" /></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { ref } from 'vue'


export default {
  setup () {
    const tabPosition = ref('left')

    return {
      tabPosition,
    }
  },
  components: {
  },
}
</script>

<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>