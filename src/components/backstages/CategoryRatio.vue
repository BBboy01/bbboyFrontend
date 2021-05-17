<template>
  <div>
    <div ref="originChart" :style="{ width: '100%', height: '300px' }"></div>
  </div>
</template>

<script>
import { ref, onMounted, reactive, nextTick } from 'vue'
import * as echarts from 'echarts'
import { categoryRatioOption } from '../../utils/chartsOption'



export default {
  setup () {
    let originChart = ref(null)

    onMounted(() => {
      // 初始化图表
      let ratioChart = echarts.init(originChart.value)

      ratioChart.setOption(categoryRatioOption())
    })

    //当浏览器尺寸变化时自适应大小, 不用的话不会自适应大小。
    window.onresize = function () {
      barChart.resize()
    }

    return {
      originChart,
    }
  },
  components: {

  },
}
</script>

<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>