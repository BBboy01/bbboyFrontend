<template>
  <div>
    <el-tabs :tab-position="tabPosition" class="chart" data-aos="fade-in">
      <el-tab-pane label="笔记点击量"><slot name="visits" /></el-tab-pane>
      <el-tab-pane label="笔记类别占比"
        ><slot name="category-ratio"
      /></el-tab-pane>
      <el-tab-pane v-if="isLogin" label="上传笔记"
        ><slot name="upload"
      /></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup () {
    const tabPosition = ref('left')

    const store = useStore()

    const isLogin = computed(() => {
      return store.state.user.isLogin
    })

    return {
      tabPosition,
      isLogin,
    }
  },
  components: {
  },
}
</script>

<style lang='scss' scoped>
//@import url(); 引入公共css类
.chart {
  height: 100%;
  margin-top: 100px;
}
</style>