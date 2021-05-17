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

    onMounted(async () => {
      //设置div容器高宽
      originChart.value.style.width = window.innerWidth + 'px'
      originChart.value.style.height = window.innerHeight * 1.2 + 'px'
      // 初始化图表
      let ratioChart = echarts.init(originChart.value)

      ratioChart.setOption(categoryRatioOption())

      //当浏览器尺寸变化时自适应大小, 不用的话不会自适应大小。
      window.onresize = function () {
        originChart.value.style.width = window.innerWidth + 'px'
        originChart.value.style.height = window.innerHeight * 0.8 + 'px'
        ratioChart.resize()
      }
    })

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