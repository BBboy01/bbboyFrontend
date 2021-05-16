<template>
  <div>
    there is backstage
    <Visits />
  </div>
</template>

<script>
import { ref, onMounted, reactive, nextTick } from 'vue'
import Visits from '../components/backstages/Visits'


export default {
  setup () {

    return {
    }
  },

  components: {
    Visits,
  },
}
</script>

<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>