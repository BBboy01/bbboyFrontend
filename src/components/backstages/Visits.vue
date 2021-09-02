<template>
  <div>
    <div ref="indexChart" :style="{ width: '100%', height: '500px' }"></div>
  </div>
</template>

<script>
import { ref, onMounted, nextTick } from 'vue'
import * as echarts from 'echarts'
import { getAllNote } from '../../requests/getNote'
import { visitsOption } from '../../utils/chartsOption'


export default {
  setup () {
    // 获取标签容器
    let indexChart = ref(null)
    let allNoteVisits = ref([])

    onMounted(async () => {
      // 获取数据
      allNoteVisits.value = (await getAllNote()).orderedByTime
      // 初始化图表
      let barChart = echarts.init(indexChart.value)

      nextTick(() => {
        let titles = allNoteVisits.value.reduce((pre, cur) => {
          pre.push(cur.title)
          return pre
        }, [])
        let visits = allNoteVisits.value.reduce((pre, cur) => {
          pre.push(cur.visits)
          return pre
        }, [])

        // barChartOptions 配置项，推荐放在外部引入。
        barChart.setOption(visitsOption(titles, visits))

        //当浏览器尺寸变化时自适应大小, 不用的话不会自适应大小。
        window.onresize = function () {
          //设置div容器高宽
          barChart.resize()
        }
      })
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