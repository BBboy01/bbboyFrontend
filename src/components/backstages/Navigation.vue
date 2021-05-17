<template>
  <div>
    <el-tabs :tab-position="tabPosition">
      <el-tab-pane label="笔记点击量"><Visits /></el-tab-pane>
      <el-tab-pane label="配置管理"><CategoryRatio /></el-tab-pane>
      <el-tab-pane label="角色管理">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { ref } from 'vue'
import Visits from '../../components/backstages/Visits'
import CategoryRatio from '../../components/backstages/CategoryRatio'


export default {
  setup () {
    const tabPosition = ref('left')

    return {
      tabPosition,
    }
  },
  components: {
    Visits,
    CategoryRatio,
  },
}
</script>

<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>