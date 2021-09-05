<template>
  <div>
    <div ref="originChart" :style="{ width: '100%', height: '300px' }"></div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

import * as echarts from 'echarts'

import { categoryRatioOption } from '../../utils/chartsOption'
import { getAllNote } from '../../requests/getNote'



export default {

  setup () {
    let originChart = ref(null)

    onMounted(async () => {
      let data = (await getAllNote()).orderedByTime
      // 获取visits的数据
      let result = {}
      data.forEach(item => {
        result[item.category] ? result[item.category] += item.visits : result[item.category] = item.visits
      })
      let ratioData = []
      for (let k in result) {
        ratioData.push({ value: result[k], name: k })
      }
      //设置div容器高宽
      originChart.value.style.width = '1400px'
      originChart.value.style.height = '500px'
      // 初始化图表
      let ratioChart = echarts.init(originChart.value)
      // 配置charts options
      ratioChart.setOption(categoryRatioOption(ratioData))
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