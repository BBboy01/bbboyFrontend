<template>
  <div>
    <Navigation>
      <template #visits>
        <Visits />
      </template>
      <template #category-ratio>
        <CategoryRatio />
      </template>
    </Navigation>
  </div>
</template>

<script>
import { ref, onMounted, reactive, nextTick } from 'vue'
import Navigation from '../components/backstages/Navigation'
import Visits from '../components/backstages/Visits'
import CategoryRatio from '../components/backstages/CategoryRatio'


export default {
  setup () {

    return {
    }
  },

  components: {
    Navigation,
    Visits,
    CategoryRatio,
  },
}
</script>

<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>