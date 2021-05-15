<template>
  <div>
    there is backstage
    <div ref="indexChart" :style="{ width: '100%', height: '300px' }"></div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'


export default {
  setup () {
    // 获取标签容器
    let indexChart = ref(null)
    onMounted(async () => {
      // 初始化
      let barChart = echarts.init(indexChart.value)
      // barChartOptions 配置项，推荐放在外部引入。
      barChart.setOption({
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          }
        }]
      })
      window.onresize = function () {
        //自适应大小, 不用的话不会自适应大小。
        barChart.resize()
      }
    })

    return {
      indexChart,
    }
  },

  components: {

  },
}
</script>

<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>