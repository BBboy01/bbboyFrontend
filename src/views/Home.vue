<template>
  <div>
    <Waves />
    <Header />
    <Section />
  </div>
</template>

<script>
import Header from '../components/Header'
import Waves from '../components/Waves'
import Section from '../components/Section'

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