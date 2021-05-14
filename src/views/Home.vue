<template>
  <div>
    <Waves />
    <Header />
    <Section />
  </div>
</template>

<script>
import Header from '../components/frontstages/Header'
import Waves from '../components/frontstages/Waves'
import Section from '../components/frontstages/Section'

export default {
  setup () {

  },
  components: {
    Header,
    Waves,
    Section
  },
}
</script>

<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>