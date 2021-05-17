<template>
  <div>
    <Navigation />
  </div>
</template>

<script>
import { ref, onMounted, reactive, nextTick } from 'vue'
import Navigation from '../components/backstages/Navigation'


export default {
  setup () {

    return {
    }
  },

  components: {
    Navigation,
  },
}
</script>

<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>