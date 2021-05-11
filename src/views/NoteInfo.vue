<template>
  <div class="wrapper">
    <Bck />
    <Header></Header>
  </div>
</template>

<script>
import Header from '../components/Header'
import Bck from '../components/InfoBackground'



export default {
  setup () {

  },
  components: {
    Header, Bck
  },
}
</script>

<style lang='scss' scoped>
//@import url(); 引入公共css类
.wrapper {
  background: #30333f;
  width: 100%;
  height: 100%;
  position: absolute;
}
</style>