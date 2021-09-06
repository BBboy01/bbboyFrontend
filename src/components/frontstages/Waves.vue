<template>
  <div class="background">
    <img src="@/assets/images/stars.svg" alt="" class="stars" />
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
    <slot></slot>
  </div>
</template>

<style lang='scss' scoped>
.background {
  position: absolute;
  height: 100%;
  width: 100%;
  background: linear-gradient(180deg, #4316db 0%, #9076e7 100%) no-repeat;
  z-index: -1;
  overflow: hidden;

  @keyframes dSOCvT {
    0% {
      opacity: 0.8;
      filter: blur(1px) saturate(120%) brightness(120%) hue-rotate(30deg);
    }
    100% {
      opacity: 1;
      filter: blur(0px) saturate(100%) brightness(100%) hue-rotate(0deg);
    }
  }

  .stars {
    animation: 2s linear infinite alternate dSOCvT;
  }

  img {
    position: absolute;
    width: 100%;
    z-index: -1;
  }
}
</style>