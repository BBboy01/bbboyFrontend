<template>
  <div class="wrapper">
    <div class="background">
      <img src="@/assets/images/stars.svg" alt="" />
      <img
        src="@/assets/images/hero-wave1.svg"
        alt=""
        style="top: 150px; filter: blur(60px)"
      />
      <img src="@/assets/images/hero-wave2.svg" alt="" style="top: 350px" />
      <img
        src="@/assets/images/footer-wave3.svg"
        alt=""
        style="top: 550px; opacity: 0.5"
      />
    </div>
  </div>
</template>

<script>


export default {
  setup () {

  },
  components: {

  },
}
</script>

<style lang='scss' scoped>
//@import url(); 引入公共css类
.wrapper {
  position: relative;
}

.background {
  position: absolute;
  width: 100%;
  height: 100vh;
  background: linear-gradient(180deg, #4316db 0%, #9076e7 100%) no-repeat;
  z-index: -1;
  overflow: hidden;

  img {
    position: absolute;
    width: 100%;
    z-index: -1;
  }
}
</style>